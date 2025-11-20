/**
 * Calculates risk score based on transaction parameters
 * @param amount - Transaction amount in USD
 * @param location - Transaction location
 * @param deviceTrust - Device trust score (0-100)
 * @returns Risk score (0-100)
 */
export function calculateRiskScore(
  amount: number,
  location?: string,
  deviceTrust: number = 100
): number {
  let score = 0;

  // Amount-based risk
  if (amount > 5000) score += 40;
  else if (amount > 1000) score += 20;
  else if (amount > 500) score += 10;

  // Location-based risk
  if (location && isHighRiskLocation(location)) {
    score += 30;
  }

  // Device trust factor
  score += (100 - deviceTrust) * 0.3;

  return Math.min(Math.round(score), 100);
}

/**
 * Checks if location is high-risk
 */
function isHighRiskLocation(location: string): boolean {
  const highRiskCountries = ['russia', 'china', 'nigeria', 'cayman'];
  return highRiskCountries.some(country => 
    location.toLowerCase().includes(country)
  );
}

/**
 * Formats currency amount
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Formats date for display
 */
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
}
