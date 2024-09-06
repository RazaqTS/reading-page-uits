const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',  // Directory where your test files are located
  retries: 1,          // Number of retries on failure
  use: {
    headless: true,    // Set to false if you want the browser to open with UI
    trace: 'on-first-retry',  // Enable trace on first retry
    screenshot: 'only-on-failure', // Take screenshots only on failures
    video: 'retain-on-failure',  // Retain video only on failures
  },
  projects: [
    {
      name: 'Desktop Chromium',
      use: { ...devices['Desktop Chrome'] },  // Test using Chrome browser
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },  // Test using Firefox browser
    },
    {
      name: 'Desktop WebKit',
      use: { ...devices['Desktop Safari'] },  // Test using WebKit (Safari)
    },
  ],
};

module.exports = config;
