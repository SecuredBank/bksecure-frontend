"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RiskGauge } from "@/components/dashboard/risk-gauge";
import { TransactionTable } from "@/components/dashboard/transaction-table";
import { ShieldAlert, Activity, Users, Lock } from "lucide-react";

export default function AnalystDashboard() {
    return (
        <div className="min-h-screen bg-background cyber-grid relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
            <Navbar />

            <main className="container px-4 py-8 md:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Security Operations Center</h1>
                    <p className="text-muted-foreground">Real-time fraud monitoring and threat analysis.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <Card className="border-accent/10 bg-secondary/30">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Active Threats</CardTitle>
                            <ShieldAlert className="h-4 w-4 text-accent-danger" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-accent-danger">3</div>
                            <p className="text-xs text-muted-foreground">+2 since last hour</p>
                        </CardContent>
                    </Card>
                    <Card className="border-accent/10 bg-secondary/30">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Transactions / Sec</CardTitle>
                            <Activity className="h-4 w-4 text-accent" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-foreground">1,245</div>
                            <p className="text-xs text-muted-foreground">+12% from average</p>
                        </CardContent>
                    </Card>
                    <Card className="border-accent/10 bg-secondary/30">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Active Sessions</CardTitle>
                            <Users className="h-4 w-4 text-accent-gold" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-foreground">8,502</div>
                            <p className="text-xs text-muted-foreground">Global users online</p>
                        </CardContent>
                    </Card>
                    <Card className="border-accent/10 bg-secondary/30">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Blocked Attempts</CardTitle>
                            <Lock className="h-4 w-4 text-accent" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-foreground">142</div>
                            <p className="text-xs text-muted-foreground">Last 24 hours</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-3 mb-8">
                    <Card className="col-span-1 border-accent/10 bg-secondary/30">
                        <CardHeader>
                            <CardTitle>System Threat Level</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <RiskGauge score={35} />
                            <div className="mt-4 text-center text-sm text-muted-foreground">
                                System status is <span className="text-accent">Stable</span>. No major anomalies detected.
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="col-span-2 border-accent/10 bg-secondary/30">
                        <CardHeader>
                            <CardTitle>Live Transaction Stream</CardTitle>
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
