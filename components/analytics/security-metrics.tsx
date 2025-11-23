"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, AlertTriangle, Lock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface Metric {
  label: string;
  value: string | number;
  change: string;
  icon: React.ReactNode;
  color: string;
}

const metrics: Metric[] = [
  {
    label: "Security Score",
    value: "98.5%",
    change: "+2.3%",
    icon: <ShieldCheck className="h-5 w-5" />,
    color: "text-green-500",
  },
  {
    label: "Threats Blocked",
    value: 142,
    change: "+12",
    icon: <AlertTriangle className="h-5 w-5" />,
    color: "text-red-500",
  },
  {
    label: "Active Sessions",
    value: "8,502",
    change: "+234",
    icon: <Lock className="h-5 w-5" />,
    color: "text-accent",
  },
  {
    label: "System Uptime",
    value: "99.99%",
    change: "+0.01%",
    icon: <TrendingUp className="h-5 w-5" />,
    color: "text-blue-500",
  },
];

export function SecurityMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="glass-panel border-accent/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </CardTitle>
              <div className={metric.color}>{metric.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500">{metric.change}</span> from last hour
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

