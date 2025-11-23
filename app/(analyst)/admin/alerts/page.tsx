"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Smartphone, Clock, AlertTriangle, CheckCircle, XCircle, User } from "lucide-react";

export default function CaseInvestigationPage() {
    return (
        <div className="min-h-screen bg-background cyber-grid relative">
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
            <Navbar />

            <main className="container px-4 py-8 md:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20">High Priority</Badge>
                            <span className="text-sm text-muted-foreground">Case #8921-XJ</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">Suspicious Cross-Border Transfer</h1>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="border-red-500/50 text-red-500 hover:bg-red-500/10">
                            <XCircle className="mr-2 h-4 w-4" />
                            Block User
                        </Button>
                        <Button className="bg-green-500 text-white hover:bg-green-600">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve Transaction
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {/* Transaction Details */}
                    <Card className="col-span-2 glass-panel">
                        <CardHeader>
                            <CardTitle>Transaction Analysis</CardTitle>
                            <CardDescription>Deep dive into the specific transaction details.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-background/50 border border-accent/5">
                                    <span className="text-xs text-muted-foreground uppercase">Amount</span>
                                    <div className="text-2xl font-bold text-foreground">$9,999.00</div>
                                </div>
                                <div className="p-4 rounded-lg bg-background/50 border border-accent/5">
                                    <span className="text-xs text-muted-foreground uppercase">Recipient</span>
                                    <div className="text-lg font-medium text-foreground">Offshore Holdings Ltd.</div>
                                    <div className="text-xs text-muted-foreground">Cayman Islands</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-sm font-medium text-muted-foreground">Risk Indicators</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between p-3 rounded-md bg-red-500/10 border border-red-500/20">
                                        <div className="flex items-center gap-3">
                                            <AlertTriangle className="h-5 w-5 text-red-500" />
                                            <span className="text-sm font-medium text-red-500">Unusual Location</span>
                                        </div>
                                        <span className="text-xs text-red-500 font-mono">+45 Risk Score</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-md bg-yellow-500/10 border border-yellow-500/20">
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-5 w-5 text-yellow-500" />
                                            <span className="text-sm font-medium text-yellow-500">Velocity Check Failed</span>
                                        </div>
                                        <span className="text-xs text-yellow-500 font-mono">+20 Risk Score</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* User Profile & Device Info */}
                    <div className="space-y-6">
                        <Card className="glass-panel">
                            <CardHeader>
                                <CardTitle>User Profile</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                                        <User className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground">Alex Mercer</div>
                                        <div className="text-xs text-muted-foreground">Customer since 2018</div>
                                    </div>
                                </div>
                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Trust Score</span>
                                        <span className="text-green-500 font-bold">High (85/100)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Last Login</span>
                                        <span className="text-foreground">2 mins ago</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-panel">
                            <CardHeader>
                                <CardTitle>Device Fingerprint</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <div className="text-sm font-medium text-foreground">iPhone 14 Pro</div>
                                        <div className="text-xs text-muted-foreground">iOS 17.2 • Safari</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <div className="text-sm font-medium text-foreground">Moscow, Russia</div>
                                        <div className="text-xs text-red-500 font-bold">Distance Anomaly Detected</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}


