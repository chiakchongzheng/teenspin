"use client";

import { motion } from "framer-motion";
import { Occupation, Resource } from "@/data/occupations";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Users, ExternalLink, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

interface OccupationDetailProps {
  occupation: Occupation;
  onBack: () => void;
}

function ResourceIcon({ type }: { type: Resource["type"] }) {
  switch (type) {
    case "course":
      return <BookOpen className="w-5 h-5" />;
    case "book":
      return <BookOpen className="w-5 h-5" />;
    case "practice":
      return <Code className="w-5 h-5" />;
    case "community":
      return <Users className="w-5 h-5" />;
    default:
      return <ExternalLink className="w-5 h-5" />;
  }
}

function getTypeColor(type: Resource["type"]) {
  switch (type) {
    case "course":
      return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800";
    case "book":
      return "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900 dark:text-amber-300 dark:border-amber-800";
    case "practice":
      return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-800";
    case "community":
      return "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-800";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
}

function getTypeLabel(type: Resource["type"]) {
  switch (type) {
    case "course": return "Course";
    case "book": return "Book";
    case "practice": return "Practice";
    case "community": return "Community";
    default: return "Resource";
  }
}

export default function OccupationDetail({ occupation, onBack }: OccupationDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-primary via-primary to-indigo-700 text-white py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Button
            variant="ghost"
            onClick={onBack}
            className="absolute top-4 left-4 text-white/80 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="text-8xl mb-4"
          >
            {occupation.icon}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold font-display mb-3"
          >
            {occupation.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              {occupation.category}
            </Badge>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 -mt-8">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📖 What is this job?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {occupation.overview}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Daily Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📅 Daily Tasks
              </CardTitle>
              <CardDescription>
                What a typical day looks like in this role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {occupation.dailyTasks.map((task, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-muted rounded-lg"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{task}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🛠️ Skills Needed
              </CardTitle>
              <CardDescription>
                Key skills to develop for this career
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {occupation.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Badge variant="secondary" className="text-sm py-1.5 px-3">
                      {skill}
                    </Badge>
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Benefits & Challenges */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="shadow-lg border-green-200 dark:border-green-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  ✅ Benefits
                </CardTitle>
                <CardDescription>
                  Why this career is worth considering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {occupation.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="shadow-lg border-red-200 dark:border-red-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <XCircle className="w-5 h-5" />
                  ⚠️ Challenges
                </CardTitle>
                <CardDescription>
                  Things to consider before pursuing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {occupation.challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Free Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📚 Free Learning Resources
              </CardTitle>
              <CardDescription>
                Start learning {occupation.title.toLowerCase()} with these free resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {occupation.resources.map((resource, index) => (
                  <motion.a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className={`flex-shrink-0 p-2 rounded-lg ${getTypeColor(resource.type)}`}>
                      <ResourceIcon type={resource.type} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {resource.name}
                        </h3>
                        <Badge variant="outline" className={`text-xs ${getTypeColor(resource.type)}`}>
                          {getTypeLabel(resource.type)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {resource.description}
                      </p>
                    </div>
                    <ExternalLink className="flex-shrink-0 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center pb-8"
        >
          <Button variant="outline" size="lg" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Spin Again
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
