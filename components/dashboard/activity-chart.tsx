"use client";

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { time: "00:00", threats: 2, blocked: 1 },
  { time: "04:00", threats: 5, blocked: 3 },
  { time: "08:00", threats: 8, blocked: 6 },
  { time: "12:00", threats: 12, blocked: 10 },
  { time: "16:00", threats: 15, blocked: 12 },
  { time: "20:00", threats: 10, blocked: 8 },
  { time: "24:00", threats: 6, blocked: 4 },
];

export function ActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF5555" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#FF5555" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorBlocked" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#64FFDA" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#64FFDA" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#112240" />
        <XAxis dataKey="time" stroke="#8892b0" />
        <YAxis stroke="#8892b0" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#112240",
            border: "1px solid #64FFDA",
            borderRadius: "8px",
          }}
        />
        <Area
          type="monotone"
          dataKey="threats"
          stroke="#FF5555"
          fillOpacity={1}
          fill="url(#colorThreats)"
        />
        <Area
          type="monotone"
          dataKey="blocked"
          stroke="#64FFDA"
          fillOpacity={1}
          fill="url(#colorBlocked)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

