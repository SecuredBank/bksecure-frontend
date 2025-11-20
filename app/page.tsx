"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <ShieldCheck className="h-8 w-8 text-accent" />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            SecureBank
          </span>
        </div>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost">Customer Login</Button>
          </Link>
          <Link href="/admin/dashboard">
            <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
              Analyst Portal
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            System Operational • Threat Level: Low
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            Next-Gen Banking <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
              Security Layer
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Advanced fraud detection using AI-driven behavioral analysis and real-time transaction monitoring.
            Protecting millions of transactions daily.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/login">
              <Button size="lg" className="h-12 px-8 text-lg bg-accent text-primary hover:bg-accent/90 shadow-[0_0_20px_rgba(100,255,218,0.3)]">
                Launch Customer Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/admin/dashboard">
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-accent/20 hover:bg-accent/10">
                View Analyst Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-6xl w-full relative z-10">
          {[
            {
              icon: Lock,
              title: "Zero-Trust Auth",
              desc: "Biometric verification and adaptive MFA for high-risk actions."
            },
            {
              icon: Server,
              title: "Real-time Analysis",
              desc: "Sub-millisecond fraud detection on every transaction."
            },
            {
              icon: Globe,
              title: "Global Intelligence",
              desc: "Shared threat intelligence across the banking network."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="p-6 rounded-2xl border border-accent/10 bg-secondary/20 backdrop-blur-sm hover:border-accent/30 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-accent/5">
        <p>© 2025 SecureBank Defense Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}
