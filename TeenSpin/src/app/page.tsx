"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SpinWheel from "@/components/SpinWheel";
import OccupationDetail from "@/components/OccupationDetail";
import { Occupation } from "@/data/occupations";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [selectedOccupation, setSelectedOccupation] = useState<Occupation | null>(null);

  const handleOccupationSelect = (occupation: Occupation) => {
    setSelectedOccupation(occupation);
  };

  const handleBack = () => {
    setSelectedOccupation(null);
  };

  // Show occupation detail page
  if (selectedOccupation) {
    return (
      <OccupationDetail 
        occupation={selectedOccupation} 
        onBack={handleBack}
      />
    );
  }

  // Main landing page
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-secondary/5">
      {/* Header */}
      <header className="py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl"
            >
              🎯
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-indigo-600 to-secondary bg-clip-text text-transparent font-display">
              TeenSpin
            </h1>
          </div>
          <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Discover Your Future Career
            <Sparkles className="w-5 h-5 text-accent" />
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main>
        <SpinWheel onOccupationSelect={handleOccupationSelect} />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <p>🎲 Spin the wheel to explore different careers</p>
        <p className="text-sm mt-2 opacity-75">
          Perfect for teenagers wondering what to do with their future
        </p>
        <div className="mt-4 flex justify-center gap-4 text-xs opacity-50">
          <span>50+ Careers</span>
          <span>•</span>
          <span>Free Resources</span>
          <span>•</span>
          <span>Learn & Explore</span>
        </div>
      </footer>
    </div>
  );
}
