import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { amount, recipient } = body;

  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Mock Fraud Logic
  let riskScore = 10;
  let status = "allowed";
  let reasons = [];

  if (amount > 5000) {
    riskScore = 95;
    status = "blocked";
    reasons.push("Amount exceeds daily limit");
  } else if (amount > 1000) {
    riskScore = 65;
    status = "challenge";
    reasons.push("Unusual transaction volume");
  }

  if (recipient.toLowerCase().includes("offshore")) {
    riskScore += 20;
    reasons.push("High-risk recipient jurisdiction");
  }

  return NextResponse.json({
    transactionId: `tx_${Math.random().toString(36).substr(2, 9)}`,
    riskScore,
    status,
    reasons,
    timestamp: new Date().toISOString()
  });
}
