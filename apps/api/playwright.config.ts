import { workspaceRoot } from '@nx/devkit';
import { defineConfig } from '@playwright/test';
import { join, relative } from 'path';
import { PlaywrightTestConfig } from 'playwright/types/test';

import { config } from 'dotenv';
import { SummaryReporterOption } from '@conac/summary-reporter';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
config();
/**
 * See https://playwright.dev/docs/test-configuration.
 */

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
    return [['blob', { outputDir: reporterOutputDir }]];
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
      [
        'playwright-testrail-reporter',
        {
          outputFile: testResultOuputDir + '/testrail-reporter.xml',
        },
      ],
      [
        '../../libs/summary-reporter/src/index.ts',
        {
          outputFile: testResultOuputDir + `/summary-reporter.json`,
        } as SummaryReporterOption,
      ],
      //Magnus
      // [TestRailReporter], // Add TestRail reporter here
      [require.resolve('libs/playwright-common/src/testrail-reporter/testrail-reporter.ts')], // Correct way to refer to custom reporter
    ];
  }
};

export default defineConfig({
  // testDir: './tests',
  testMatch: ['apps/api/tests/master/consolidated-accounts/get-information.test.ts'],
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: false,

    //slowMo literally slows down browser interactions.
    launchOptions: { slowMo: 1000 },
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    video: 'on', // Record video for each test. You can also use 'retain-on-failure' to only save videos for failed tests.
    // viewport: { width: 1440, height: 900 }, // Set the viewport size for each test, which indirectly affects video size.
    screenshot: 'on', // Capture a screenshot whenever a test fails

  },

  globalSetup: require.resolve('./tests/auth.setup.ts'),

  reporter: getReporterConfig(),
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'api',
      testIgnore: /.*\.setup\.ts/,
    },
  ],
});
