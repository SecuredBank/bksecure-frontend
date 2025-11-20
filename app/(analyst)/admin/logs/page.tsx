"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TransactionTable } from "@/components/dashboard/transaction-table";
import { Search, Filter, Download } from "lucide-react";

export default function LogsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container px-4 py-8 md:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">Transaction Logs</h1>
                        <p className="text-muted-foreground">Audit and investigate all system transactions.</p>
                    </div>
                    <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Export CSV
                    </Button>
                </div>

                <Card className="border-accent/10 bg-secondary/30 mb-8">
                    <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search by Transaction ID, User, or Amount..."
                                    className="pl-9 bg-background/50 border-accent/10"
                                />
                            </div>
                            <div className="flex gap-4">
                                <Button variant="outline" className="gap-2 bg-background/50 border-accent/10">
                                    <Filter className="h-4 w-4" />
                                    Filter
                                </Button>
                                <Button className="bg-accent text-primary hover:bg-accent/90">
                                    Search Logs
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-accent/10 bg-secondary/30">
                    <CardHeader>
                        <CardTitle>Live Feed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TransactionTable />
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
