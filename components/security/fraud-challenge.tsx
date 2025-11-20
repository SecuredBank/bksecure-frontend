"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Lock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FraudChallengeProps {
    onSuccess: () => void;
    onCancel: () => void;
}

export function FraudChallenge({ onSuccess, onCancel }: FraudChallengeProps) {
    const [otp, setOtp] = useState("");
    const [timeLeft, setTimeLeft] = useState(60);
    const [error, setError] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp === "123456") {
            onSuccess();
        } else {
            setError(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
            <Card className="w-full max-w-md border-accent-warning/50 bg-secondary/90 shadow-[0_0_50px_rgba(255,184,108,0.2)]">
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-warning/10 ring-1 ring-accent-warning/50">
                        <ShieldAlert className="h-8 w-8 text-accent-warning animate-pulse" />
                    </div>
                    <CardTitle className="text-accent-warning">Security Check Required</CardTitle>
                    <CardDescription>
                        Our security system detected unusual activity. Please verify this transaction.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="rounded-lg border border-accent/10 bg-background/50 p-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-3 mb-2">
                                <Smartphone className="h-5 w-5 text-accent" />
                                <span className="font-medium text-foreground">Mobile Verification</span>
                            </div>
                            <p>We sent a 6-digit code to your registered device ending in **89.</p>
                        </div>

                        <div className="space-y-2">
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    value={otp}
                                    onChange={(e) => {
                                        setOtp(e.target.value);
                                        setError(false);
                                    }}
                                    placeholder="Enter 6-digit OTP"
                                    className="pl-9 text-center tracking-widest text-lg font-mono"
                                    maxLength={6}
                                />
                            </div>
                            {error && (
                                <p className="text-xs text-red-500 text-center">Invalid code. Please try again.</p>
                            )}
                            <p className="text-xs text-center text-muted-foreground">
                                Code expires in <span className="text-accent-warning">{timeLeft}s</span>
                            </p>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-accent-warning text-black hover:bg-accent-warning/90 font-bold"
                        >
                            Verify Transaction
                        </Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button variant="ghost" className="w-full" onClick={onCancel}>
                        Cancel Transaction
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
