"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Shield, Lock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BiometricPrompt } from "@/components/security/biometric-prompt";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showBiometric, setShowBiometric] = useState(false);
    const [username, setUsername] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username) return;

        setIsLoading(true);
        // Simulate network delay then show biometric
        setTimeout(() => {
            setIsLoading(false);
            setShowBiometric(true);
        }, 1000);
    };

    const handleBiometricSuccess = () => {
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('/grid.svg')] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-background/90" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

            <BiometricPrompt
                isOpen={showBiometric}
                onSuccess={handleBiometricSuccess}
                onCancel={() => setShowBiometric(false)}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md px-4"
            >
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/50">
                        <Shield className="h-8 w-8 text-accent" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">SecureBank</h1>
                    <p className="text-muted-foreground">Next-Generation Secure Banking</p>
                </div>

                <Card className="border-accent/20 bg-secondary/40 backdrop-blur-xl shadow-2xl">
                    <CardHeader>
                        <CardTitle>Welcome Back</CardTitle>
                        <CardDescription>Enter your credentials to access your account securely.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Username / Client ID"
                                        className="pl-9 bg-background/50 border-accent/10 focus:border-accent/50"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        className="pl-9 bg-background/50 border-accent/10 focus:border-accent/50"
                                    />
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-accent text-primary hover:bg-accent/90 font-bold shadow-[0_0_20px_rgba(100,255,218,0.3)]"
                                disabled={isLoading}
                            >
                                {isLoading ? "Verifying..." : (
                                    <span className="flex items-center gap-2">
                                        Secure Login <ArrowRight className="h-4 w-4" />
                                    </span>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center border-t border-accent/10 pt-6">
                        <p className="text-xs text-muted-foreground text-center">
                            Protected by BankSec AI Layer. <br />
                            Your session is end-to-end encrypted.
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}
