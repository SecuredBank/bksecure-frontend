"use client";

import { cn } from "@/lib/utils";
import { recentTransactions } from "@/lib/mock-data";

// Simple Table implementation since we didn't create the ui/table component yet
// I'll inline the styles for now to save a step, or I should create the component.
// Let's create a simple table structure here.

export function TransactionTable() {
    return (
        <div className="w-full overflow-auto rounded-lg border border-accent/10 bg-secondary/20">
            <table className="w-full text-sm text-left">
                <thead className="bg-secondary/50 text-muted-foreground uppercase text-xs">
                    <tr>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Description</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Risk Score</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-accent/5">
                    {recentTransactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-accent/5 transition-colors">
                            <td className="px-6 py-4 font-medium text-foreground">
                                {new Date(tx.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 text-muted-foreground">
                                {tx.description}
                            </td>
                            <td className={cn("px-6 py-4 font-bold", tx.amount > 0 ? "text-accent-success" : "text-foreground")}>
                                {tx.amount > 0 ? "+" : ""}{tx.amount.toFixed(2)}
                            </td>
                            <td className="px-6 py-4">
                                <span className={cn(
                                    "px-2 py-1 rounded-full text-xs font-medium border",
                                    tx.status === "completed" ? "bg-green-500/10 text-green-500 border-green-500/20" :
                                        tx.status === "blocked" ? "bg-red-500/10 text-red-500 border-red-500/20" :
                                            "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                                )}>
                                    {tx.status.toUpperCase()}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-16 rounded-full bg-secondary overflow-hidden">
                                        <div
                                            className={cn("h-full rounded-full",
                                                tx.riskScore < 50 ? "bg-green-500" :
                                                    tx.riskScore < 80 ? "bg-yellow-500" : "bg-red-500"
                                            )}
                                            style={{ width: `${tx.riskScore}%` }}
                                        />
                                    </div>
                                    <span className={cn("text-xs",
                                        tx.riskScore < 50 ? "text-green-500" :
                                            tx.riskScore < 80 ? "text-yellow-500" : "text-red-500"
                                    )}>
                                        {tx.riskScore}
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
