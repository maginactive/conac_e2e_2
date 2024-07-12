import { FullConfig, Reporter, Suite } from '@playwright/test/reporter';
import * as fs from 'fs';
import * as path from 'path';

export type SummaryReporterOption = {
  outputFile: string;
};

class SummaryReporter implements Reporter {
  private config: FullConfig;
  private suiteList: Suite[] = [];
  private readonly outputFile: string;

  constructor({ outputFile }: SummaryReporterOption) {
    this.outputFile = outputFile;
  }

  onBegin(config: FullConfig, suite: Suite) {
    this.config = config;
    this.suiteList.push(suite);
  }

  onEnd() {
    let total = 0;
    let totalPassed = 0;
    let totalFailed = 0;
    let totalFlaky = 0;
    let totalSkipped = 0;
    let totalTimedOut = 0;
    let totalInterrupted = 0;
    let totalDuration = 0;

    this.suiteList.forEach((suite) => {
      if (suite.title != 'setup') {
        suite.allTests().forEach((test) => {
          let isPassed = false;
          let isFailed = false;
          let isFlaky = false;
          test.results.forEach((result) => {
            result.status === 'skipped' && totalSkipped++;
            result.status === 'timedOut' && totalTimedOut++;
            result.status === 'interrupted' && totalInterrupted++;
            result.duration;

            if (result.retry === 0) {
              isPassed = result.status === 'passed';
              isFailed = result.status === 'failed';
            } else {
              if (
                (result.status === 'passed' && isFailed) ||
                (result.status === 'passed' && isPassed)
              ) {
                isFlaky = true;
                isPassed = false;
                isFailed = false;
              }
            }

            totalDuration += result.duration;
          });

          isPassed && totalPassed++;
          isFailed && totalFailed++;
          isFlaky && totalFlaky++;
          total++;
        });

        const passedRatio = (totalPassed / total) * 100;
        const outputFile = this.config.configFile
          ? path.resolve(path.dirname(this.config.configFile), this.outputFile)
          : this.outputFile;
        fs.mkdirSync(path.dirname(outputFile), {
          recursive: true,
        });
        console.log('=====');
        console.log(outputFile);
        console.log(this.config.configFile);
        fs.writeFileSync(
          outputFile,
          JSON.stringify({
            total,
            totalPassed,
            totalFailed,
            totalFlaky,
            totalSkipped,
            totalTimedOut,
            totalInterrupted,
            totalDuration:
              totalDuration === 0 ? 'N/A' : convertMsToTime(totalDuration),
            passedRatio: isNaN(passedRatio)
              ? 'N/A'
              : `${passedRatio.toFixed(2)}%`,
          })
        );
      }
    });
  }
}

export function convertMsToTime(milliseconds: number) {
  const result = [];
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  // hours = hours % 24

  if (hours > 0) {
    result.push(`${hours}h`);
  }

  if (minutes > 0) {
    result.push(`${minutes}m`);
  }

  if (seconds > 0) {
    result.push(`${seconds}s`);
  }

  return result.join('');
}
export default SummaryReporter;
