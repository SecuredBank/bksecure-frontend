"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScanFace, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface BiometricPromptProps {
    isOpen: boolean;
    onSuccess: () => void;
    onCancel: () => void;
}

export function BiometricPrompt({ isOpen, onSuccess, onCancel }: BiometricPromptProps) {
    const [status, setStatus] = useState<"scanning" | "success" | "failed">("scanning");

    useEffect(() => {
        if (isOpen) {
            setStatus("scanning");
            // Simulate scanning process
            const timer1 = setTimeout(() => {
                setStatus("success");
                const timer2 = setTimeout(() => {
                    onSuccess();
                }, 1000);
                return () => clearTimeout(timer2);
            }, 2000);
            return () => clearTimeout(timer1);
        }
    }, [isOpen, onSuccess]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative flex flex-col items-center justify-center rounded-2xl bg-secondary/90 p-8 shadow-2xl border border-accent/20 w-full max-w-sm"
                    >
                        <div className="relative mb-6 h-32 w-32 flex items-center justify-center">
                            {status === "scanning" && (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-full border-2 border-accent/30 border-t-accent"
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="absolute inset-4 rounded-full bg-accent/10"
                                    />
                                    <ScanFace className="h-16 w-16 text-accent animate-pulse" />
                                </>
                            )}

                            {status === "success" && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="rounded-full bg-accent/20 p-4"
                                >
                                    <CheckCircle2 className="h-16 w-16 text-accent" />
                                </motion.div>
                            )}

                            {status === "failed" && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="rounded-full bg-red-500/20 p-4"
                                >
                                    <XCircle className="h-16 w-16 text-red-500" />
                                </motion.div>
                            )}
                        </div>

                        <h3 className="mb-2 text-xl font-bold text-foreground">
                            {status === "scanning" && "Verifying Identity..."}
                            {status === "success" && "Identity Verified"}
                            {status === "failed" && "Verification Failed"}
                        </h3>

                        <p className="text-center text-sm text-muted-foreground">
                            {status === "scanning" && "Please look at the camera"}
                            {status === "success" && "Redirecting to dashboard..."}
                        </p>

                        {status === "scanning" && (
                            <button
                                onClick={onCancel}
                                className="mt-6 text-sm text-muted-foreground hover:text-foreground"
                            >
                                Cancel
                            </button>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
