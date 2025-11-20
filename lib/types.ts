export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'debit' | 'credit';
  status: 'completed' | 'pending' | 'blocked';
  riskScore: number;
}

export interface Account {
  id: string;
  type: string;
  number: string;
  balance: number;
  currency: string;
  trend: string;
}

export interface FraudAlert {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  message: string;
  timestamp: string;
  status: 'active' | 'resolved';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
