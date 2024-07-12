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

describe('EXPORT COMPANIES MASTER AS CSV FILE', () => {
  beforeEach(async ({ companyPage, page }) => {
    await test.step('Go to Companies screen', async () => {
      await companyPage.goto();
      await expect(page).toHaveURL(new RegExp('/companies'));
    });
  });

  test('C75325 Export company master information as CSV file', async ({
    page,
    companyPage,
  }) => {
    await test.step('Verify header of companies screen', async () => {
      await page.waitForLoadState();
      await expect(companyPage.companyAbbreviationHeader).toBeVisible();
      await expect(companyPage.companyNameHeader).toBeVisible();
      await expect(companyPage.reportCurrencyHeader).toBeVisible();
      await expect(companyPage.currencyDecimalHeader).toBeVisible();
      await expect(companyPage.settingDateAndTimeHeader).toBeVisible();
      await expect(companyPage.lastModifiedHeader).toBeVisible();
    });

    await test.step('Download and verify data of csv file', async () => {
      const downloadPromise = page.waitForEvent('download');
      await companyPage.clickExportButton();
      const download = await downloadPromise;
      await download.saveAs('./downloads/' + download.suggestedFilename());
      const filePath =
        './downloads/会社マスタ_' + (await getFormattedDate()) + '.csv';
      const dataArray = await convertCsvToArray(filePath);
      const headers = Object.keys(dataArray[0]);
      // expect(headers).toContain('会社略号');
      expect(headers).toContain('会社名（日）');
      expect(headers).toContain('会社名（英）');
      expect(headers).toContain('報告通貨');
      expect(headers).toContain('小数点桁数');
      expect(headers).toContain('備考');
      expect(headers).toContain('設定日時');
      expect(headers).toContain('最終更新日時');
      expect(headers).toHaveLength(8);
    });
  });
});
