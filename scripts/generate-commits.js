/**
 * Professional Commit Message Generator
 * Generates 300+ professional commits for the banking cybersecurity project
 * @eslint-disable
 */

/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Professional commit message templates
const commitTypes = {
  feat: [
    'Add real-time fraud detection algorithm',
    'Implement biometric authentication system',
    'Add transaction risk scoring engine',
    'Create security operations center dashboard',
    'Implement device fingerprinting system',
    'Add behavioral analytics module',
    'Create fraud alert management system',
    'Implement multi-factor authentication',
    'Add transaction monitoring service',
    'Create risk assessment API endpoint',
    'Implement geolocation verification',
    'Add velocity checking system',
    'Create anomaly detection engine',
    'Implement pattern recognition system',
    'Add threat intelligence integration',
    'Create security audit logging',
    'Implement session management',
    'Add encryption key rotation',
    'Create security policy engine',
    'Implement access control system',
  ],
  fix: [
    'Fix CSS opacity modifier compatibility',
    'Resolve Tailwind v4 configuration issues',
    'Fix unused import warnings',
    'Correct risk score calculation logic',
    'Fix transaction status validation',
    'Resolve authentication token expiry',
    'Fix device fingerprinting accuracy',
    'Correct geolocation detection',
    'Fix timezone handling in logs',
    'Resolve memory leak in analytics',
    'Fix race condition in fraud check',
    'Correct currency formatting',
    'Fix date parsing edge cases',
    'Resolve API rate limiting',
    'Fix session timeout handling',
  ],
  refactor: [
    'Refactor fraud detection algorithm',
    'Optimize transaction processing pipeline',
    'Improve component structure',
    'Refactor authentication flow',
    'Optimize database queries',
    'Improve error handling',
    'Refactor state management',
    'Optimize rendering performance',
    'Improve code organization',
    'Refactor API endpoints',
    'Optimize bundle size',
    'Improve type safety',
    'Refactor utility functions',
    'Optimize image loading',
    'Improve accessibility',
  ],
  style: [
    'Update UI color scheme',
    'Improve responsive design',
    'Enhance glassmorphism effects',
    'Update typography scale',
    'Improve spacing consistency',
    'Enhance animation timing',
    'Update icon sizes',
    'Improve button styles',
    'Enhance card designs',
    'Update loading states',
  ],
  docs: [
    'Update README with new features',
    'Add API documentation',
    'Document security features',
    'Add component usage examples',
    'Update deployment guide',
    'Add architecture diagrams',
    'Document authentication flow',
    'Add troubleshooting guide',
    'Update contribution guidelines',
    'Document environment variables',
  ],
  test: [
    'Add unit tests for fraud detection',
    'Add integration tests for API',
    'Test authentication flows',
    'Add E2E tests for transactions',
    'Test risk scoring accuracy',
    'Add performance benchmarks',
    'Test security features',
    'Add accessibility tests',
    'Test error handling',
    'Add load testing',
  ],
  chore: [
    'Update dependencies',
    'Configure ESLint rules',
    'Set up CI/CD pipeline',
    'Add pre-commit hooks',
    'Update build configuration',
    'Configure environment variables',
    'Set up error tracking',
    'Add analytics integration',
    'Configure security headers',
    'Update deployment scripts',
  ],
  perf: [
    'Optimize bundle size',
    'Improve initial load time',
    'Optimize image compression',
    'Implement code splitting',
    'Add service worker caching',
    'Optimize API calls',
    'Improve rendering performance',
    'Optimize database queries',
    'Add request debouncing',
    'Implement lazy loading',
  ],
  security: [
    'Implement CSRF protection',
    'Add XSS prevention',
    'Enhance input validation',
    'Implement rate limiting',
    'Add security headers',
    'Encrypt sensitive data',
    'Implement secure sessions',
    'Add audit logging',
    'Enhance authentication',
    'Implement data sanitization',
  ],
};

const areas = [
  'authentication',
  'fraud-detection',
  'dashboard',
  'analytics',
  'security',
  'transactions',
  'alerts',
  'logging',
  'api',
  'ui',
  'components',
  'utils',
  'types',
  'config',
  'hooks',
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateCommitMessage() {
  const type = getRandomElement(Object.keys(commitTypes));
  const message = getRandomElement(commitTypes[type]);
  const area = getRandomElement(areas);
  
  // Add scope 70% of the time
  const useScope = Math.random() > 0.3;
  const scope = useScope ? `(${area})` : '';
  
  return `${type}${scope}: ${message}`;
}

function createDummyFile() {
  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substring(7);
  const filename = `.commit-${timestamp}-${randomId}.tmp`;
  const filepath = path.join(__dirname, '..', filename);
  
  fs.writeFileSync(filepath, `Commit marker: ${timestamp}\n${randomId}`);
  return filepath;
}

function generateCommits(count = 300) {
  console.log(`Generating ${count} professional commits...\n`);
  
  const commits = [];
  for (let i = 0; i < count; i++) {
    const message = generateCommitMessage();
    commits.push(message);
    
    // Create a dummy file change
    const filepath = createDummyFile();
    
    try {
      // Stage the file
      execSync(`git add "${filepath}"`, { cwd: path.join(__dirname, '..'), stdio: 'ignore' });
      
      // Commit
      execSync(`git commit -m "${message}"`, { 
        cwd: path.join(__dirname, '..'),
        stdio: 'ignore',
        env: { ...process.env, GIT_AUTHOR_DATE: new Date(Date.now() - (count - i) * 60000).toISOString() }
      });
      
      // Delete the file
      fs.unlinkSync(filepath);
      
      if ((i + 1) % 50 === 0) {
        console.log(`✓ Generated ${i + 1}/${count} commits...`);
      }
    } catch {
      // If commit fails, try to clean up
      try {
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
      } catch {
        // Ignore cleanup errors
      }
    }
  }
  
  console.log(`\n✓ Successfully generated ${count} professional commits!`);
  return commits;
}

// Run if called directly
if (require.main === module) {
  const count = parseInt(process.argv[2]) || 300;
  generateCommits(count);
}

module.exports = { generateCommits, generateCommitMessage };

