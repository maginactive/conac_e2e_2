//module "/Users/mfv-hn-computer-0083/Downloads/automation-tut/conac_automation_test-main_pi/node_modules/@dlenroc/testrail/dist/TestRail"
import TestRail, { AddResultsForCases } from '@dlenroc/testrail';
import {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestError,
  TestResult,
} from '@playwright/test/reporter';
//module "/Users/mfv-hn-computer-0083/Downloads/automation-tut/conac_automation_test-main_pi/node_modules/@playwright/test/reporter"


const StatusMap = new Map<string, number>([
  ['failed', 5],
  ['passed', 1],
  ['skipped', 3],
  ['timedout', 5],
  ['interrupted', 5],
]);

const executionDateTime = Date().toString().slice(4, 25);

const api = new TestRail({
  host: process.env.TESTRAIL_HOST as string,
  password: process.env.TESTRAIL_PASSWORD as string,
  username: process.env.TESTRAIL_USERNAME as string,
});

const runName =
  process.env.TESTRAIL_RUN_NAME + ' - Created On ' + executionDateTime;
const projectId = parseInt(process.env.TESTRAIL_PROJECT_ID as string);
const suiteId = parseInt(process.env.TESTRAIL_SUITE_ID as string);

const testResults: AddResultsForCases[] = [];

//start of class
export class TestRailReporter implements Reporter {

  async onBegin?(config: FullConfig, suite: Suite) {
    if (!process.env.TESTRAIL_RUN_ID) {
      console.log("No Existing 'TESTRAIL_RUN_ID' provided by user...");
      console.log('Automatically creating a run...');
      await this.addTestRailRun(projectId);
    } else {
      console.log(
        'Existing Test Run with ID ' +
          process.env.TESTRAIL_RUN_ID +
          ' will be used'
      );
    }
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(
      `Test Case Completed : ${test.title} Status : ${result.status}`
    );

    const testCaseMatches = this.getTestCaseName(test.title);
    if (testCaseMatches != null) {
      testCaseMatches.forEach((testCaseMatch) => {
        const testId = parseInt(testCaseMatch.substring(1), 10);
        if (result.status != 'skipped') {
          const testComment = this.setTestComment(result);
          const payload = {
            case_id: testId,
            status_id: StatusMap.get(result.status),
            comment: testComment,
          };
          testResults.push(payload);
        }
      });
    }
    
  }

  async onEnd(result: FullResult): Promise<void> {
    const runId = parseInt(process.env.TESTRAIL_RUN_ID as string);
    console.log(
      'Updating test status for the following TestRail Run ID: ' + runId
    );
    await this.updateResultCases(runId, testResults);
  }

  onError(error: TestError): void {
    console.log(error.message);
  }

  private getTestCaseName(testname: string) {
    const testCaseIdRegex = /\bC(\d+)\b/g;
    const testCaseMatches = [testname.match(testCaseIdRegex)];

    if (testCaseMatches[0] != null) {
      testCaseMatches[0].forEach((testCaseMatch) => {
        const testCaseId = parseInt(testCaseMatch.substring(1), 10);
        console.log('Matched Test Case ID: ' + testCaseId);
      });
    } else {
      console.log('No test case matches available');
    }
    return testCaseMatches[0];
  }

  private async addTestRailRun(projectId: number) {
    return await api
      .addRun(projectId, {
        include_all: true,
        name: runName,
        suite_id: suiteId,
      })
      .then(
        (res) => {
          console.log(
            'New TestRail run has been created: ' +
              process.env.TESTRAIL_HOST +
              '/index.php?/runs/view/' +
              res.id
          );
          process.env.TESTRAIL_RUN_ID = res.id.toString();
        },
        (reason) => {
          console.log('Failed to create new TestRail run: ' + reason);
        }
      );
  }

  
  private async addResultForSuite(
    api: TestRail,
    runId: number,
    caseId: number,
    status: number,
    comment: string
  ) {
    await api
      .addResultForCase(runId, caseId, {
        status_id: status,
        comment: comment,
      })
      .then(
        (res) => {
          console.log(
            'Updated status for caseId ' + caseId + ' for runId ' + runId
          );
        },
        (reason) => {
          console.log(
            'Failed to call Update Api due to ' + JSON.stringify(reason)
          );
        }
      );
  }

  private setTestComment(result: TestResult) {
    if (
      result.status == 'failed' ||
      result.status == 'timedOut' ||
      result.status == 'interrupted'
    ) {
      return (
        'Test Status is ' + result.status + ' ' + JSON.stringify(result.error)
      );
    } else {
      return 'Test Passed within ' + result.duration + ' ms';
    }
  }

  private async updateResultCases(runId: number, payload: any) {
    await api
      .addResultsForCases(runId, {
        results: payload,
      })
      .then(
        (result) => {
          console.log(
            'Updated test results for Test Run: ' +
              process.env.TESTRAIL_HOST +
              '/index.php?/runs/view/' +
              runId
          );
        },
        (reason) => {
          console.log('Failed to update test results: ' + JSON.stringify(reason));
        }
      );
  }

}   //end of class
export default TestRailReporter;
