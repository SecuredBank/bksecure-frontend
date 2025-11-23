"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Shield, CheckCircle, Clock } from "lucide-react";
import { formatDate } from "@/lib/helpers";

interface ThreatEvent {
  id: string;
  timestamp: string;
  type: "threat" | "resolved" | "monitoring";
  severity: "high" | "medium" | "low";
  description: string;
}

const mockEvents: ThreatEvent[] = [
  {
    id: "1",
    timestamp: new Date(Date.now() - 300000).toISOString(),
    type: "threat",
    severity: "high",
    description: "Suspicious transaction pattern detected",
  },
  {
    id: "2",
    timestamp: new Date(Date.now() - 600000).toISOString(),
    type: "resolved",
    severity: "medium",
    description: "False positive - user verified",
  },
  {
    id: "3",
    timestamp: new Date(Date.now() - 900000).toISOString(),
    type: "monitoring",
    severity: "low",
    description: "Unusual login location detected",
  },
];

export function ThreatTimeline() {
  const getIcon = (type: ThreatEvent["type"]) => {
    switch (type) {
      case "threat":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "resolved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "monitoring":
        return <Clock className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getSeverityColor = (severity: ThreatEvent["severity"]) => {
    switch (severity) {
      case "high":
        return "border-red-500/50 bg-red-500/10";
      case "medium":
        return "border-yellow-500/50 bg-yellow-500/10";
      case "low":
        return "border-blue-500/50 bg-blue-500/10";
    }
  };

  return (
    <div className="space-y-4">
      {mockEvents.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`flex gap-4 p-4 rounded-lg border ${getSeverityColor(event.severity)}`}
        >
          <div className="flex-shrink-0 mt-1">{getIcon(event.type)}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-foreground">
                {event.description}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatDate(event.timestamp)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                event.severity === "high" ? "bg-red-500/20 text-red-500" :
                event.severity === "medium" ? "bg-yellow-500/20 text-yellow-500" :
                "bg-blue-500/20 text-blue-500"
              }`}>
                {event.severity.toUpperCase()}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

