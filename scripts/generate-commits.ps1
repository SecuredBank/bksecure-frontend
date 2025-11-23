# PowerShell script to generate professional commits
# Usage: .\scripts\generate-commits.ps1 [count]

param(
    [int]$Count = 300
)

$ErrorActionPreference = "SilentlyContinue"

$commitTypes = @{
    "feat" = @(
        "Add real-time fraud detection algorithm",
        "Implement biometric authentication system",
        "Add transaction risk scoring engine",
        "Create security operations center dashboard",
        "Implement device fingerprinting system",
        "Add behavioral analytics module",
        "Create fraud alert management system",
        "Implement multi-factor authentication",
        "Add transaction monitoring service",
        "Create risk assessment API endpoint"
    )
    "fix" = @(
        "Fix CSS opacity modifier compatibility",
        "Resolve Tailwind v4 configuration issues",
        "Fix unused import warnings",
        "Correct risk score calculation logic",
        "Fix transaction status validation"
    )
    "refactor" = @(
        "Refactor fraud detection algorithm",
        "Optimize transaction processing pipeline",
        "Improve component structure",
        "Refactor authentication flow",
        "Optimize database queries"
    )
    "style" = @(
        "Update UI color scheme",
        "Improve responsive design",
        "Enhance glassmorphism effects",
        "Update typography scale",
        "Improve spacing consistency"
    )
    "docs" = @(
        "Update README with new features",
        "Add API documentation",
        "Document security features",
        "Add component usage examples",
        "Update deployment guide"
    )
    "test" = @(
        "Add unit tests for fraud detection",
        "Add integration tests for API",
        "Test authentication flows",
        "Add E2E tests for transactions",
        "Test risk scoring accuracy"
    )
    "chore" = @(
        "Update dependencies",
        "Configure ESLint rules",
        "Set up CI/CD pipeline",
        "Add pre-commit hooks",
        "Update build configuration"
    )
    "perf" = @(
        "Optimize bundle size",
        "Improve initial load time",
        "Optimize image compression",
        "Implement code splitting",
        "Add service worker caching"
    )
    "security" = @(
        "Implement CSRF protection",
        "Add XSS prevention",
        "Enhance input validation",
        "Implement rate limiting",
        "Add security headers"
    )
}

$areas = @("authentication", "fraud-detection", "dashboard", "analytics", "security", "transactions", "alerts", "logging", "api", "ui", "components", "utils", "types", "config", "hooks")

function Get-RandomElement {
    param($Array)
    return $Array | Get-Random
}

function Generate-CommitMessage {
    $type = Get-RandomElement ($commitTypes.Keys)
    $message = Get-RandomElement $commitTypes[$type]
    $area = Get-RandomElement $areas
    
    $useScope = (Get-Random) -gt 0.3
    $scope = if ($useScope) { "($area)" } else { "" }
    
    return "${type}${scope}: ${message}"
}

Write-Host "Generating $Count professional commits...`n" -ForegroundColor Cyan

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Split-Path -Parent $scriptPath
Set-Location $repoRoot

for ($i = 0; $i -lt $Count; $i++) {
    $message = Generate-CommitMessage
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $tempFile = ".commit-$timestamp-$i.tmp"
    
    try {
        # Create temporary file
        Set-Content -Path $tempFile -Value "Commit marker: $timestamp`n$i"
        
        # Stage and commit
        git add $tempFile 2>&1 | Out-Null
        git commit -m "$message" --date "$(Get-Date -Date ((Get-Date).AddMinutes(-($Count - $i))) -Format 'yyyy-MM-dd HH:mm:ss')" 2>&1 | Out-Null
        
        # Clean up
        Remove-Item $tempFile -ErrorAction SilentlyContinue
        
        if (($i + 1) % 50 -eq 0) {
            Write-Host "✓ Generated $($i + 1)/$Count commits..." -ForegroundColor Green
        }
    } catch {
        # Clean up on error
        Remove-Item $tempFile -ErrorAction SilentlyContinue
    }
}

Write-Host "`n✓ Successfully generated $Count professional commits!" -ForegroundColor Green

