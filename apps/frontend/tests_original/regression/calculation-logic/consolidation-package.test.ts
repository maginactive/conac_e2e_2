import {
  beforeEach,
  describe,
  expect,
  test,
  use,
} from '@/fixtures/page-fixtures';
import { FULL_PERMISSION_USER } from '@/constants/auth';

use({
  storageState: FULL_PERMISSION_USER,
});

describe('EXPORT COMPANIES MASTER AS CSV FILE', () => {
  beforeEach(async ({ consolidationPackagePage, page }) => {
    await test.step('Go to Consolidation Package screen', async () => {
      await consolidationPackagePage.goto();
      await expect(page).toHaveURL(new RegExp('/consolidation_packages'));
    });
  });

  test('C65559 Round of decimal point', async ({
    consolidationPackagePage,
  }) => {
    await consolidationPackagePage.clickOnReportDetail('ROUND0', '残高試算表');
    await consolidationPackagePage.resetAllData();
    await consolidationPackagePage.importFileTrialBalance(
      'apps/frontend/resources/consolidation-package.xlsx',
      'Integer'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      0,
      '1111',
      '現金',
      '1',
      '1',
      '111100 現金'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      1,
      '1112',
      '普通預金',
      '0',
      '0',
      '111300 普通預金'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      2,
      '2111',
      '建物',
      '1',
      '1',
      '121100 建物'
    );

    await consolidationPackagePage.goto();
    await consolidationPackagePage.clickOnReportDetail('ROUND1', '残高試算表');
    await consolidationPackagePage.resetAllData();
    await consolidationPackagePage.importFileTrialBalance(
      'apps/frontend/resources/consolidation-package.xlsx',
      'One decimal place'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      0,
      '1140',
      '有価証券',
      '1',
      '1',
      '113100 有価証券'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      1,
      '1220',
      '製品',
      '0.1',
      '0.1',
      '114500 製品'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      2,
      '1270',
      '貯蔵品',
      '0.1',
      '0.1',
      '114200 貯蔵品'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      3,
      '1421',
      '前払費用',
      '0.2',
      '0.2',
      '115150 前払費用'
    );

    await consolidationPackagePage.goto();
    await consolidationPackagePage.clickOnReportDetail('ROUND2', '残高試算表');
    await consolidationPackagePage.resetAllData();
    await consolidationPackagePage.importFileTrialBalance(
      'apps/frontend/resources/consolidation-package.xlsx',
      'Two decimal place'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      0,
      '1140',
      '有価証券',
      '1',
      '1',
      '113100 有価証券'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      1,
      '1210',
      '商品',
      '0.1',
      '0.1',
      '114100 商品'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      2,
      '1220',
      '製品',
      '0.12',
      '0.12',
      '114500 製品'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      3,
      '1270',
      '貯蔵品',
      '0.12',
      '0.12',
      '114200 貯蔵品'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      4,
      '1421',
      '前払費用',
      '0.13',
      '0.13',
      '115150 前払費用'
    );

    await consolidationPackagePage.goto();
    await consolidationPackagePage.clickOnReportDetail('ROUND3', '残高試算表');
    await consolidationPackagePage.resetAllData();
    await consolidationPackagePage.importFileTrialBalance(
      'apps/frontend/resources/consolidation-package.xlsx',
      'Three decimal place'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      0,
      '1140',
      '有価証券',
      '1',
      '1',
      '113100 有価証券'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      1,
      '1210',
      '商品',
      '0.12',
      '0.12',
      '114100 商品'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      2,
      '1220',
      '製品',
      '0.123',
      '0.123',
      '114500 製品'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      3,
      '1270',
      '貯蔵品',
      '0.123',
      '0.123',
      '114200 貯蔵品'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      4,
      '1421',
      '前払費用',
      '0.124',
      '0.124',
      '115150 前払費用'
    );
  });

  test('C65585 Conversion in accordance with exchange rates', async ({
    consolidationPackagePage,
  }) => {
    await consolidationPackagePage.clickOnReportDetail('JPY0', '残高試算表');
    await consolidationPackagePage.resetAllData();
    await consolidationPackagePage.importFileTrialBalance(
      'apps/frontend/resources/consolidation-package.xlsx',
      'JPY0'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      0,
      '410000',
      '売上高',
      '1',
      '1',
      '410000 売上高'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      1,
      '111900',
      '現金及び預金',
      '1',
      '1',
      '111900 現金及び預金'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      2,
      '312000',
      '新株式申込証拠金',
      '1',
      '1',
      '312000 新株式申込証拠金'
    );

    await consolidationPackagePage.goto();
    await consolidationPackagePage.clickOnReportDetail('JPY3', '残高試算表');
    await consolidationPackagePage.resetAllData();
    await consolidationPackagePage.importFileTrialBalance(
      'apps/frontend/resources/consolidation-package.xlsx',
      'JPY3'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      0,
      '410000',
      '売上高',
      '1,000.124',
      '1,000.124',
      '410000 売上高'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      1,
      '111900',
      '現金及び預金',
      '1,000.124',
      '1,000.124',
      '111900 現金及び預金'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      2,
      '312000',
      '新株式申込証拠金',
      '1,000.124',
      '1,000.124',
      '312000 新株式申込証拠金'
    );

    await consolidationPackagePage.goto();
    await consolidationPackagePage.clickOnReportDetail('VND0', '残高試算表');
    await consolidationPackagePage.resetAllData();
    await consolidationPackagePage.importFileTrialBalance(
      'apps/frontend/resources/consolidation-package.xlsx',
      'VND0'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      0,
      '410000',
      '売上高',
      '1,000',
      '1,000',
      '410000 売上高'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      1,
      '111900',
      '現金及び預金',
      '1,000',
      '1,000',
      '111900 現金及び預金'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      2,
      '312000',
      '新株式申込証拠金',
      '1,000',
      '1,000',
      '312000 新株式申込証拠金'
    );

    await consolidationPackagePage.goto();
    await consolidationPackagePage.clickOnReportDetail('VND3', '残高試算表');
    await consolidationPackagePage.resetAllData();
    await consolidationPackagePage.importFileTrialBalance(
      'apps/frontend/resources/consolidation-package.xlsx',
      'VND3'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      0,
      '410000',
      '売上高',
      '1,000.124',
      '1,000.124',
      '410000 売上高'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      1,
      '111900',
      '現金及び預金',
      '1,000.124',
      '1,000.124',
      '111900 現金及び預金'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      2,
      '312000',
      '新株式申込証拠金',
      '1,000.124',
      '1,000.124',
      '312000 新株式申込証拠金'
    );

    await consolidationPackagePage.goto();
    await consolidationPackagePage.clickOnReportDetail('USD0', '残高試算表');
    await consolidationPackagePage.resetAllData();
    await consolidationPackagePage.importFileTrialBalance(
      'apps/frontend/resources/consolidation-package.xlsx',
      'USD0'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      0,
      '410000',
      '売上高',
      '1',
      '1',
      '410000 売上高'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      1,
      '111900',
      '現金及び預金',
      '1',
      '1',
      '111900 現金及び預金'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      2,
      '312000',
      '新株式申込証拠金',
      '1',
      '1',
      '312000 新株式申込証拠金'
    );

    await consolidationPackagePage.goto();
    await consolidationPackagePage.clickOnReportDetail('USD3', '残高試算表');
    await consolidationPackagePage.resetAllData();
    await consolidationPackagePage.importFileTrialBalance(
      'apps/frontend/resources/consolidation-package.xlsx',
      'USD3'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      0,
      '410000',
      '売上高',
      '0.124',
      '0.124',
      '410000 売上高'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      1,
      '111900',
      '現金及び預金',
      '0.124',
      '0.124',
      '111900 現金及び預金'
    );
    await consolidationPackagePage.verifyTrialBalanceImport(
      2,
      '312000',
      '新株式申込証拠金',
      '0.124',
      '0.124',
      '312000 新株式申込証拠金'
    );
  });

  test('C65587 Adjustment', async ({ consolidationPackagePage }) => {
    await consolidationPackagePage.clickOnReportDetail('JPY0', '貸借対照表');
    await consolidationPackagePage.resetBalanceSheet();
    await consolidationPackagePage.addAdjustmentData(
      '111500 その他の預金',
      '2000'
    );
    await consolidationPackagePage.addAdjustmentData(
      '111900 現金及び預金',
      '1000'
    );
    await consolidationPackagePage.verifyBalanceSheetData(
      '111500',
      '2,000',
      '2,000'
    );
    await consolidationPackagePage.verifyBalanceSheetData(
      '111900',
      '1,000',
      '1,001'
    );

    await consolidationPackagePage.goto();
    await consolidationPackagePage.clickOnReportDetail('VND0', '貸借対照表');
    await consolidationPackagePage.resetBalanceSheet();
    await consolidationPackagePage.addAdjustmentData(
      '111500 その他の預金',
      '2000'
    );
    await consolidationPackagePage.addAdjustmentData(
      '111900 現金及び預金',
      '1000'
    );
    await consolidationPackagePage.verifyBalanceSheetData(
      '111500',
      '2,000',
      '2,000'
    );
    await consolidationPackagePage.verifyBalanceSheetData(
      '111900',
      '1,000',
      '2,000'
    );
    await consolidationPackagePage.afterAdjustmentTab.click();
    await consolidationPackagePage.verifyBalanceSheetConversionData(
      '111500',
      '2,000',
      '0'
    );
    await consolidationPackagePage.verifyBalanceSheetConversionData(
      '111900',
      '2,000',
      '0'
    );
  });
});
