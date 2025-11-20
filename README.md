# SecureBank - Advanced Fraud Prevention Layer

A next-generation banking cybersecurity system built with Next.js, featuring real-time fraud detection, behavioral analytics, and comprehensive security monitoring.

## 🛡️ Features

### Customer Portal
- **Secure Authentication**: Biometric verification with simulated FaceID/fingerprint
- **Multi-Factor Authentication**: OTP-based verification for high-risk transactions
- **Real-time Fraud Detection**: AI-powered transaction monitoring
- **Account Dashboard**: View balances, transactions, and security status
- **Secure Transfers**: Protected fund transfers with risk assessment

### Fraud Analyst Dashboard
- **Security Operations Center**: Real-time threat monitoring
- **Risk Gauge**: Visual threat level indicator
- **Transaction Logs**: Comprehensive audit trail with filtering
- **Case Investigation**: Deep-dive analysis tools for suspicious activities
- **Alert Management**: Priority-based threat notifications

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/SecuredBank/bksecure-frontend.git

# Navigate to project directory
cd bksecure-frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🔧 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Start production server
npm start
```

## 🎨 Design System

The application uses a premium cybersecurity-themed design:

- **Primary Colors**: Deep Navy (#0A192F), Neon Cyan (#64FFDA)
- **Accent Colors**: Gold (#FFD700), Danger Red (#FF5555), Warning Orange (#FFB86C)
- **Typography**: Inter font family
- **Effects**: Glassmorphism, glow effects, smooth animations

## 🔐 Security Features

1. **Device Fingerprinting**: Track and verify user devices
2. **Behavioral Analysis**: Monitor transaction patterns
3. **Risk Scoring**: 0-100 scale for transaction risk assessment
4. **Geolocation Checks**: Detect unusual location access
5. **Velocity Checks**: Monitor transaction frequency

## 📊 Mock Data & Simulation

The application includes simulated fraud detection:

- Transactions > $1000 trigger MFA challenge
- Transactions > $5000 are automatically blocked
- Risk scores calculated based on amount, location, and patterns

## 🌐 Routes

### Customer Routes
- `/login` - Customer authentication
- `/dashboard` - Account overview
- `/transfer` - Secure fund transfers

### Analyst Routes
- `/admin/dashboard` - SOC overview
- `/admin/logs` - Transaction logs
- `/admin/alerts` - Case investigation

## 📝 License

© 2025 SecureBank Defense Systems. All rights reserved.

## 🤝 Contributing

This is a demonstration project for a banking cybersecurity system. For production use, additional security measures and compliance certifications would be required.
