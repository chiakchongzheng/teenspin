"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { occupations, Occupation } from "@/data/occupations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, RefreshCw, CheckCircle, Zap, ArrowRight } from "lucide-react";

interface SpinWheelProps {
  onOccupationSelect: (occupation: Occupation) => void;
}

export default function SpinWheel({ onOccupationSelect }: SpinWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentOccupation, setCurrentOccupation] = useState<Occupation | null>(null);
  const [showResult, setShowResult] = useState(false);

  const spin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setShowResult(false);
    
    // Simulate spinning with multiple random occupations
    let spinCount = 0;
    const spinInterval = setInterval(() => {
      const randomOcc = occupations[Math.floor(Math.random() * occupations.length)];
      setCurrentOccupation(randomOcc);
      spinCount++;
      
      if (spinCount > 10) {
        clearInterval(spinInterval);
        // Final selection
        const finalOcc = occupations[Math.floor(Math.random() * occupations.length)];
        setCurrentOccupation(finalOcc);
        setIsSpinning(false);
        setShowResult(true);
      }
    }, 100);
  };

  const handleConfirm = () => {
    if (currentOccupation) {
      onOccupationSelect(currentOccupation);
    }
  };

  const handleSkip = () => {
    setShowResult(false);
    spin();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      {/* Spin Button Area */}
      {!showResult && !isSpinning && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Ready to Discover?
              </CardTitle>
              <CardDescription>
                Spin the wheel to explore a random career path
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-8xl mb-2"
              >
                🎯
              </motion.div>
              <Button 
                onClick={spin} 
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 shadow-lg shadow-primary/25"
              >
                <Zap className="w-5 h-5 mr-2" />
                SPIN TO DISCOVER
              </Button>
              <p className="text-sm text-muted-foreground">
                50+ careers to explore
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Spinning Animation */}
      {isSpinning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            className="text-8xl mb-6"
          >
            🎡
          </motion.div>
          <p className="text-xl text-muted-foreground animate-pulse">
            Finding your perfect career...
          </p>
          <div className="mt-4 flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ 
                  duration: 0.6, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Result Card */}
      <AnimatePresence>
        {showResult && currentOccupation && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-md"
          >
            <Card className="border-2 border-secondary/30 bg-gradient-to-br from-white to-secondary/5 shadow-xl">
              <CardHeader className="text-center pb-2">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-7xl mb-3"
                >
                  {currentOccupation.icon}
                </motion.div>
                <CardTitle className="text-3xl font-bold">
                  {currentOccupation.title}
                </CardTitle>
                <Badge variant="secondary" className="mt-2">
                  {currentOccupation.category}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  {currentOccupation.overview.substring(0, 120)}...
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button 
                    variant="outline" 
                    onClick={handleSkip}
                    className="gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Skip & Spin Again
                  </Button>
                  <Button 
                    onClick={handleConfirm}
                    className="gap-2 bg-gradient-to-r from-secondary to-emerald-600 hover:from-secondary/90 hover:to-emerald-700"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Confirm
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
