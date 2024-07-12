import {
  beforeEach,
  describe,
  expect,
  test,
  use,
} from '@/fixtures/page-fixtures';
import { FULL_PERMISSION_USER } from '@/constants/auth';
import { convertCsvToArray, getFormattedDate } from '@conac/utils';

use({
  storageState: FULL_PERMISSION_USER,
});

describe('EXPORT CONSOLIDATED ACCOUNTS MASTER AS CSV FILE', () => {
  beforeEach(async ({ consolidatedAccountPage, page }) => {
    await test.step('Go to Consolidated Accounts screen', async () => {
      await consolidatedAccountPage.goto();
      await expect(page).toHaveURL(new RegExp('/consolidated_accounts'));
      await page.waitForLoadState();
    });
  });

  test('C75749 Export consolidated account master information as CSV file', async ({
    page,
    consolidatedAccountPage,
  }) => {
    await test.step('Click export button and verify CSV file', async () => {
      const downloadPromise = page.waitForEvent('download');
      await consolidatedAccountPage.clickOnExportButton();
      const download = await downloadPromise;

      await download.saveAs('./downloads/' + download.suggestedFilename());
      const filePath =
        './downloads/連結科目マスタ_' + (await getFormattedDate()) + '.csv';
      const dataArray = await convertCsvToArray(filePath);
      const headers = Object.keys(dataArray[0]);
      expect(headers).toContain('科目分類');
      expect(headers).toContain('貸借区分');
      expect(headers).toContain('連結科目コード');
      expect(headers).toContain('連結科目名（日）');
      expect(headers).toContain('連結科目名（英）');
      expect(headers).toContain('換算区分');
      expect(headers).toContain('金額区分');
      expect(headers).toContain('備考');
      expect(headers).toContain('設定日時');
      expect(headers).toContain('最終更新日時');
      expect(headers).toHaveLength(10);
    });
  });
});
