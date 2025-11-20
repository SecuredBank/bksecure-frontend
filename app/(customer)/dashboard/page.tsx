"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TransactionTable } from "@/components/dashboard/transaction-table";
import { accounts } from "@/lib/mock-data";
import { ArrowUpRight, CreditCard, ShieldCheck, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container px-4 py-8 md:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back, Alex. Your security status is Optimal.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/transfer">
                            <Button className="gap-2 shadow-[0_0_15px_rgba(100,255,218,0.3)]">
                                <ArrowUpRight className="h-4 w-4" />
                                New Transfer
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Security Status Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 rounded-lg border border-green-500/20 bg-green-500/5 p-4 flex items-center gap-4"
                >
                    <div className="rounded-full bg-green-500/10 p-2">
                        <ShieldCheck className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                        <h3 className="font-medium text-green-500">Security Shield Active</h3>
                        <p className="text-sm text-green-500/80">Real-time fraud monitoring is enabled on all accounts.</p>
                    </div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    {accounts.map((account, index) => (
                        <motion.div
                            key={account.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="relative overflow-hidden border-accent/10 bg-secondary/30 hover:border-accent/30 transition-colors">
                                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">
                                        {account.type}
                                    </CardTitle>
                                    <CreditCard className="h-4 w-4 text-accent" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-foreground">{account.currency} {account.balance.toLocaleString()}</div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {account.number} • <span className="text-green-500">{account.trend}</span> from last month
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="border-accent/10 bg-secondary/30 h-full flex flex-col justify-center items-center text-center p-6 hover:bg-secondary/40 cursor-pointer transition-colors group">
                            <div className="rounded-full bg-accent/10 p-4 mb-4 group-hover:scale-110 transition-transform">
                                <ArrowUpRight className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="font-medium text-foreground">Quick Transfer</h3>
                            <p className="text-sm text-muted-foreground">Send money to recent contacts</p>
                        </Card>
                    </motion.div>
                </div>

                <div className="grid gap-6 md:grid-cols-1">
                    <Card className="border-accent/10 bg-secondary/20">
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <TransactionTable />
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
