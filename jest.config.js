/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/tests/**/*.test.[jt]s'],
  // The test environment that will be used for testing
  
  setupFiles: ['fake-indexeddb/auto'],
  
  testEnvironment: 'jsdom',

  verbose: true,
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};

module.exports = config;
