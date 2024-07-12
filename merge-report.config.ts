import { PlaywrightTestConfig } from 'playwright/types/test';

const config: PlaywrightTestConfig = {
  reporter: [
    ['json', { outputFile: 'reports/json/results.json' }],
    ['junit', { outputFile: 'reports/junit/results.xml' }],
    ['html', { open: 'never', outputFolder: 'reports/html/' }],
    [
      './libs/summary-reporter/src/index.ts',
      { outputFile: `reports/summary/results.json` },
    ],
  ],
};

export default config;
