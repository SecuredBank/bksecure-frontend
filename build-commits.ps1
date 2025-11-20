# Build script to generate commit history
# This will create granular commits for the project

$commits = @(
    @{file="tailwind.config.ts"; msg="style: configure tailwind with cybersecurity theme colors"},
    @{file="app/globals.css"; msg="style: add global styles with glassmorphism effects"},
    @{file="lib/utils.ts"; msg="feat: add utility function for class merging"},
    @{file="components/ui/input.tsx"; msg="feat: create Input component with focus glow"},
    @{file="components/ui/card.tsx"; msg="feat: create Card component with glassmorphism"},
    @{file="components/ui/button.tsx"; msg="feat: create Button component with motion animations"},
    @{file="components/ui/badge.tsx"; msg="feat: create Badge component for status indicators"},
    @{file="components/navbar.tsx"; msg="feat: implement responsive navigation bar"},
    @{file="app/layout.tsx"; msg="feat: configure root layout with Inter font"},
    @{file="lib/mock-data.ts"; msg="feat: add mock data for accounts and transactions"},
    @{file="components/security/biometric-prompt.tsx"; msg="feat: implement biometric authentication prompt"},
    @{file="components/security/fraud-challenge.tsx"; msg="feat: create fraud challenge OTP component"},
    @{file="app/(customer)/login/page.tsx"; msg="feat: implement secure login page with biometrics"},
    @{file="components/dashboard/transaction-table.tsx"; msg="feat: create transaction table with risk scores"},
    @{file="app/(customer)/dashboard/page.tsx"; msg="feat: implement customer dashboard with account cards"},
    @{file="app/(customer)/transfer/page.tsx"; msg="feat: create transfer flow with fraud detection"},
    @{file="components/dashboard/risk-gauge.tsx"; msg="feat: implement risk gauge visualization"},
    @{file="app/(analyst)/admin/dashboard/page.tsx"; msg="feat: create analyst SOC dashboard"},
    @{file="app/(analyst)/admin/logs/page.tsx"; msg="feat: implement transaction logs page"},
    @{file="app/(analyst)/admin/alerts/page.tsx"; msg="feat: create case investigation view"},
    @{file="app/page.tsx"; msg="feat: design premium landing page"},
    @{file="app/api/fraud-check/route.ts"; msg="feat: implement fraud detection API endpoint"},
    @{file="hooks/use-device-fingerprint.ts"; msg="feat: add device fingerprinting hook"}
)

Write-Host "Creating granular commits..."
$count = 0

foreach ($commit in $commits) {
    if (Test-Path $commit.file) {
        git add $commit.file
        git commit -m $commit.msg
        $count++
        Write-Host "[$count] Committed: $($commit.msg)"
    }
}

Write-Host "`nTotal commits created: $count"
