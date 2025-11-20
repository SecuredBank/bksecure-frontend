export const FRAUD_THRESHOLDS = {
  LOW_RISK: 30,
  MEDIUM_RISK: 50,
  HIGH_RISK: 80,
} as const;

export const TRANSACTION_LIMITS = {
  CHALLENGE_AMOUNT: 1000,
  BLOCK_AMOUNT: 5000,
  DAILY_LIMIT: 10000,
} as const;

export const SECURITY_CONFIG = {
  OTP_LENGTH: 6,
  OTP_EXPIRY_SECONDS: 60,
  SESSION_TIMEOUT_MINUTES: 15,
  MAX_LOGIN_ATTEMPTS: 3,
} as const;

export const API_ENDPOINTS = {
  FRAUD_CHECK: '/api/fraud-check',
  AUTH: '/api/auth',
  TRANSACTIONS: '/api/transactions',
} as const;
