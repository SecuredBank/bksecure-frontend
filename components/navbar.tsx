"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Lock, LayoutDashboard, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const pathname = usePathname();

    const isAnalyst = pathname.startsWith("/admin");

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-accent/10 bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 ring-1 ring-accent/50">
                        <ShieldCheck className="h-5 w-5 text-accent" />
                        <div className="absolute inset-0 animate-pulse rounded-full ring-1 ring-accent/30" />
                    </div>
                    <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        SecureBank
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/dashboard"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-accent",
                            pathname.startsWith("/dashboard") ? "text-accent" : "text-muted-foreground"
                        )}
                    >
                        Customer Portal
                    </Link>
                    <Link
                        href="/admin/dashboard"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-accent-danger",
                            pathname.startsWith("/admin") ? "text-accent-danger" : "text-muted-foreground"
                        )}
                    >
                        Analyst Portal
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="gap-2">
                        <Lock className="h-4 w-4" />
                        <span className="hidden sm:inline">Secure Connection</span>
                    </Button>
                    <div className="h-8 w-[1px] bg-accent/20" />
                    <Button variant="outline" size="sm" className="border-accent/20">
                        Sign In
                    </Button>
                </div>
            </div>
        </nav>
    );
}
