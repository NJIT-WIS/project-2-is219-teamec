// Import necessary modules and functions
const { defineConfig, devices } = require('@playwright/test');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Define the configuration object for the Playwright test runner
module.exports = defineConfig({
  testDir: path.join(__dirname, './tests'),
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',

  // Define shared settings for all projects
  use: {
    baseURL: process.env.DEFAULT_SITE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    video: 'on',
    timeout: 30000, // Global timeout for tests (in milliseconds)
  },

  // Define the projects to run, each with its own settings
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
      },
      outputDir: path.join(__dirname, 'reports', 'desktop-chrome'),
    },
    {
      name: 'Mobile iPhone 12',
      use: {
        ...devices['iPhone 12'],
        browserName: 'webkit',
      },
      outputDir: path.join(__dirname, 'reports', 'mobile-iphone-12'),
    },
  ],

  // Specify the local development server to run before the tests
  webServer: {
    command: 'next dev',
    port: 3000,
    reuseExistingServer: true,
  },

  // Specify the directory to save the test report files
  reporterOptions: {
    html: path.join(__dirname, 'reports', 'test-results', 'report.html'),
    junit: ({ result }) => path.join(__dirname, 'reports', 'playwright', `${result.testFile.replace(/\.js$/, '.xml')}`),

    // Add video report option
    video: path.join(__dirname, 'reports', 'test-results', 'video.webm'),
  },
});
