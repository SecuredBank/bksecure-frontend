export const currentUser = {
  id: "usr_123456",
  name: "Alex Mercer",
  email: "alex.mercer@example.com",
  avatar: "/avatars/alex.jpg",
};

export const accounts = [
  {
    id: "acc_checking",
    type: "Checking Account",
    number: "**** **** **** 4521",
    balance: 24580.50,
    currency: "USD",
    trend: "+2.5%",
  },
  {
    id: "acc_savings",
    type: "High Yield Savings",
    number: "**** **** **** 8892",
    balance: 150000.00,
    currency: "USD",
    trend: "+4.1%",
  },
];

export const recentTransactions = [
  {
    id: "tx_1",
    date: "2025-11-20T14:30:00",
    description: "Starbucks Coffee",
    amount: -5.50,
    type: "debit",
    status: "completed",
    riskScore: 12,
  },
  {
    id: "tx_2",
    date: "2025-11-19T09:15:00",
    description: "Salary Deposit",
    amount: 4500.00,
    type: "credit",
    status: "completed",
    riskScore: 5,
  },
  {
    id: "tx_3",
    date: "2025-11-18T18:45:00",
    description: "Amazon Marketplace",
    amount: -120.99,
    type: "debit",
    status: "completed",
    riskScore: 25,
  },
  {
    id: "tx_4",
    date: "2025-11-18T12:00:00",
    description: "Unknown Merchant (HK)",
    amount: -999.00,
    type: "debit",
    status: "blocked",
    riskScore: 95, // High risk
  },
  {
    id: "tx_5",
    date: "2025-11-17T20:30:00",
    description: "Uber Ride",
    amount: -24.50,
    type: "debit",
    status: "completed",
    riskScore: 15,
  },
];

export const fraudAlerts = [
  {
    id: "alert_1",
    severity: "critical",
    message: "Suspicious login attempt from new device (Russia)",
    timestamp: "2025-11-20T02:15:00",
    status: "active",
  },
  {
    id: "alert_2",
    severity: "warning",
    message: "Unusual transaction volume detected",
    timestamp: "2025-11-19T15:30:00",
    status: "resolved",
  },
];
