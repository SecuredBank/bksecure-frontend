"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FraudChallenge } from "@/components/security/fraud-challenge";
import { ArrowRight, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TransferPage() {
    const router = useRouter();
    const [amount, setAmount] = useState("");
    const [recipient, setRecipient] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [showChallenge, setShowChallenge] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "blocked">("idle");

    const handleTransfer = () => {
        setIsProcessing(true);

        // Simulate API call and Fraud Check
        setTimeout(() => {
            const numAmount = parseFloat(amount);

            // Mock Logic: Amounts > 1000 trigger challenge, > 5000 block
            if (numAmount > 5000) {
                setIsProcessing(false);
                setStatus("blocked");
            } else if (numAmount > 1000) {
                setIsProcessing(false);
                setShowChallenge(true);
            } else {
                setIsProcessing(false);
                setStatus("success");
            }
        }, 2000);
    };

    const handleChallengeSuccess = () => {
        setShowChallenge(false);
        setStatus("success");
    };

    if (status === "success") {
        return (
            <div className="min-h-screen bg-background cyber-grid relative">
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                <Navbar />
                <div className="container flex items-center justify-center min-h-[80vh] relative z-10">
                    <Card className="w-full max-w-md glass-panel border-green-500/20 text-center p-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10"
                        >
                            <CheckCircle2 className="h-10 w-10 text-green-500" />
                        </motion.div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">Transfer Successful</h2>
                        <p className="text-muted-foreground mb-6">
                            Your transaction of ${amount} to {recipient} has been processed securely.
                        </p>
                        <Button onClick={() => router.push("/dashboard")} className="w-full">
                            Return to Dashboard
                        </Button>
                    </Card>
                </div>
            </div>
        );
    }

    if (status === "blocked") {
        return (
            <div className="min-h-screen bg-background">
                <Navbar />
                <div className="container flex items-center justify-center min-h-[80vh] relative z-10">
                    <Card className="w-full max-w-md glass-panel border-red-500/20 text-center p-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10"
                        >
                            <AlertTriangle className="h-10 w-10 text-red-500" />
                        </motion.div>
                        <h2 className="text-2xl font-bold text-red-500 mb-2">Transaction Blocked</h2>
                        <p className="text-muted-foreground mb-6">
                            Our security system blocked this transaction due to high risk indicators.
                            Please contact support if this is an error.
                        </p>
                        <Button variant="destructive" onClick={() => router.push("/dashboard")} className="w-full">
                            Return to Dashboard
                        </Button>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background cyber-grid relative">
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
            <Navbar />

            {showChallenge && (
                <FraudChallenge
                    onSuccess={handleChallengeSuccess}
                    onCancel={() => setShowChallenge(false)}
                />
            )}

            <main className="container px-4 py-8 md:px-8 flex justify-center relative z-10">
                <Card className="w-full max-w-lg glass-panel">
                    <CardHeader>
                        <CardTitle>Secure Transfer</CardTitle>
                        <CardDescription>Send funds securely to another account.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Recipient Name</label>
                                <Input
                                    placeholder="e.g. John Doe"
                                    value={recipient}
                                    onChange={(e) => setRecipient(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Amount (USD)</label>
                                <Input
                                    type="number"
                                    placeholder="0.00"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="text-lg font-bold"
                                />
                                <p className="text-xs text-muted-foreground">
                                    Try {">"} $1000 for Challenge, {">"} $5000 for Block
                                </p>
                            </div>

                            <div className="rounded-lg bg-accent/5 p-4 border border-accent/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <Loader2 className="h-4 w-4 text-accent animate-spin" />
                                    <span className="text-xs font-medium text-accent">Real-time Fraud Check</span>
                                </div>
                                <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-accent"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full gap-2"
                            onClick={handleTransfer}
                            disabled={!amount || !recipient || isProcessing}
                        >
                            {isProcessing ? "Processing Security Check..." : (
                                <>Send Funds <ArrowRight className="h-4 w-4" /></>
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </main>
        </div>
    );
}
