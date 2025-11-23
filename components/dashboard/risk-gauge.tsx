"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
    { name: "Safe", value: 70 },
    { name: "Risk", value: 30 },
];

export function RiskGauge({ score }: { score: number }) {
    // Calculate rotation based on score (0-100) mapping to (-90 to 90 degrees)
    // Actually let's just do a simple semi-circle

    const needleRotation = -90 + (score / 100) * 180;

    const getColor = (s: number) => {
        if (s < 50) return "#64FFDA"; // Green/Cyan
        if (s < 80) return "#FFB86C"; // Orange
        return "#FF5555"; // Red
    };

    return (
        <div className="relative h-48 w-full flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={[{ value: 100 }]}
                        cx="50%"
                        cy="100%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius={80}
                        outerRadius={100}
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                    >
                        <Cell fill="#112240" />
                    </Pie>
                    <Pie
                        data={data} // This is just dummy for the background track
                        cx="50%"
                        cy="100%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius={80}
                        outerRadius={100}
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                    >
                        <Cell fill="#112240" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            {/* Needle */}
            <motion.div
                className="absolute bottom-0 left-1/2 h-[100px] w-1 bg-gradient-to-t from-transparent to-current origin-bottom"
                style={{
                    color: getColor(score),
                    rotate: needleRotation,
                    marginLeft: "-2px"
                }}
                initial={{ rotate: -90 }}
                animate={{ rotate: needleRotation }}
                transition={{ type: "spring", stiffness: 50 }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
            </motion.div>

            <div className="absolute bottom-0 text-center">
                <div className="text-4xl font-bold" style={{ color: getColor(score) }}>{score}</div>
                <div className="text-xs text-muted-foreground">Current Risk Level</div>
            </div>
        </div>
    );
}
