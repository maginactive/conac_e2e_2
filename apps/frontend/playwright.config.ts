import { defineConfig, devices } from '@playwright/test';
import { PlaywrightTestConfig } from 'playwright/types/test';
import { join, relative } from 'path';
import { workspaceRoot } from '@nx/devkit';
import dotenv from 'dotenv';
// import {TestRailReporter} from '/Users/mfv-hn-computer-0083/Downloads/automation-tut/conac_automation_test-main_pi/libs/playwright-common/src/testrail-reporter/index';

//Magnus
dotenv.config(); // Load environment variables from .env file

// import { config } from 'dotenv';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// config();
// /**
//  * See https://playwright.dev/docs/test-configuration.
//  */


// Get Reporter Config function
const getReporterConfig = (): PlaywrightTestConfig['reporter'] => {
  const normalizedPath = __dirname;
  const projectPath = relative(workspaceRoot, normalizedPath);
  const offset = relative(normalizedPath, workspaceRoot);
  const testResultOuputDir = join(
    offset,
    'dist',
    '.playwright',
    projectPath,
    'test-output'
  );
  const reporterOutputDir = join(
    offset,
    'dist',
    '.playwright',
    projectPath,
    'playwright-report'
  );

  if (process.env.CI) {
    return [['blob', { outputFile: reporterOutputDir }]];
  } else {
    return [
      ['list'],
      [
        'junit',
        {
          outputFile: testResultOuputDir + '/results.xml',
        },
      ],
      [
        'html',
        {
          outputFolder: reporterOutputDir,
          open: process.env.CI
            ? 'never'
            : process.env.OPEN_HTML_REPORT || 'on-failure',
        },
      ],
      //Magnus
      // [TestRailReporter], // Add TestRail reporter here
      [require.resolve('libs/playwright-common/src/testrail-reporter/testrail-reporter.ts')], // Correct way to refer to custom reporter
    ];
  }
};
export default defineConfig({
  testDir: './tests',
  // testMatch: ['apps/frontend/tests/master/companies/export-csv.test.ts'],
  // Run tests in files in parallel 
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code. 
  forbidOnly: !!process.env.CI,
  // Retry on CI only 
  retries: process.env.CI ? 2 : 0,
  // Opt out of parallel tests on CI. 
  workers: process.env.CI ? 1 : undefined,
  // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions.
  use: {
    // Base URL to use in actions like `await page.goto('/')`. 
    // baseURL: 'https://consolidated-accounting.test.mfw.work',

    // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer 
    trace: 'on-first-retry',

    headless: false,

    //slowMo literally slows down browser interactions.
    launchOptions: { slowMo: 1000 },
    // Maximum time each action such as `click()` can take. Defaults to 0 (no limit). 
    actionTimeout: 0,

    video: 'on', // Record video for each test. You can also use 'retain-on-failure' to only save videos for failed tests.
    // viewport: { width: 1440, height: 900 }, // Set the viewport size for each test, which indirectly affects video size.
    screenshot: 'on', // Capture a screenshot whenever a test fails.
  },
  timeout: 180000,

  globalSetup: require.resolve('./tests/auth.setup.ts'),

  reporter: getReporterConfig(),
  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        actionTimeout: 20000,
      },
    },
  ],
});


/*
import { defineConfig, devices } from '@playwright/test';
import { PlaywrightTestConfig } from 'playwright/types/test';
import { join, relative } from 'path';
import { workspaceRoot } from '@nx/devkit';
import { config } from 'dotenv';
import { TestRailReporter } from '/Users/mfv-hn-computer-0083/Downloads/automation-tut/conac_automation_test-main_pi/libs/playwright-common/src/testrail-reporter/index'; // Chỉnh sửa đường dẫn theo cấu trúc dự án của bạn
// import { TestRailReporter } from '@conac/testrail-reporter';

// Load environment variables
config();

// Function to get reporter configuration
const getReporterConfig = (): PlaywrightTestConfig['reporter'] => {
  const normalizedPath = __dirname;
  const projectPath = relative(workspaceRoot, normalizedPath);
  const offset = relative(normalizedPath, workspaceRoot);
  const testResultOutputDir = join(
    offset,
    'dist',
    '.playwright',
    projectPath,
    'test-output'
  );
  const reporterOutputDir = join(
    offset,
    'dist',
    '.playwright',
    projectPath,
    'playwright-report'
  );

  return [
    ['list'],
    [
      'junit',
      {
        outputFile: testResultOutputDir + '/results.xml',
      },
    ],
    [
      'html',
      {
        outputFolder: reporterOutputDir,
        open: process.env.OPEN_HTML_REPORT || 'on-failure',
      },
    ],
    ['testrail'], // Add TestRailReporter here
  ];
};

export default defineConfig({
  testMatch: ['apps/frontend/tests/master/companies/export-csv.test.ts'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    trace: 'on-first-retry',
    headless: false,
    launchOptions: { slowMo: 1000 },
    actionTimeout: 0,
    video: 'on',
    screenshot: 'on',
  },
  timeout: 180000,
  globalSetup: require.resolve('./tests/auth.setup.ts'),
  reporter: getReporterConfig(), // Use getReporterConfig to include TestRailReporter
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        actionTimeout: 20000,
      },
    },
  ],
});

*/