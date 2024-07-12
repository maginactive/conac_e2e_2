import { Locator, Page, expect } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';

export class ConsolidationPackagePage extends ConacPage {
  protected readonly path: string = '/consolidation_packages';

  readonly companyAbbreviationColumnHeader: Locator;
  readonly companyNameColumnHeader: Locator;
  readonly createdDateTimeColumnHeader: Locator;
  readonly updatedDateTimeColumnHeader: Locator;
  readonly trialBalanceColumnHeader: Locator;
  readonly balanceSheetColumnHeader: Locator;
  readonly profitAndLossSheetColumnHeader: Locator;
  readonly resetButton: Locator;
  readonly resetDialogButton: Locator;
  readonly importButton: Locator;
  readonly historyButton: Locator;
  readonly exportButton: Locator;
  readonly correctionButton: Locator;
  readonly trialBalanceTab: Locator;
  readonly balanceSheetTab: Locator;
  readonly profitAndLossTab: Locator;
  readonly accountCodeColumnHeader: Locator;
  readonly accountNameColumnHeader: Locator;
  readonly balanceColumnHeader: Locator;
  readonly intakeBalanceColumnHeader: Locator;
  readonly linkSubjectColumnHeader: Locator;
  readonly resetAllTypeCheckbox: Locator;
  readonly resetBalanceSheetCheckbox: Locator;
  readonly resetProfitAndLossCheckbox: Locator;
  readonly resetSuccessMessageLabel: Locator;
  readonly importFileTrialBalanceButton: Locator;
  readonly importSettingCombobox: Locator;
  readonly selectFileButton: Locator;
  readonly saveButton: Locator;
  //balance sheet
  readonly beforeAdjustmentTab: Locator;
  readonly afterAdjustmentTab: Locator;
  readonly balanceSheetSummaryView: Locator;
  readonly subjectClassificationColumnHeader: Locator;
  readonly consolidatedItemCodeColumnHeader: Locator;
  readonly linkedAccountNameColumnHeader: Locator;
  readonly individualCorrectionsColumnHeader: Locator;
  readonly amountMoneyColumnHeader: Locator;
  readonly summaryColumnHeader: Locator;
  readonly adjustmentButton: Locator;
  readonly addFixButton: Locator;
  readonly saveAdjustmentButton: Locator;
  //profit and loss sheet
  readonly profitAndLossSummaryView: Locator;

  constructor(page: Page) {
    super(page);
    this.companyAbbreviationColumnHeader = this.page.getByRole('columnheader', {
      name: '会社略号',
    });
    this.companyNameColumnHeader = this.page.getByRole('columnheader', {
      name: '会社名',
    });
    this.createdDateTimeColumnHeader = this.page.getByRole('columnheader', {
      name: '設定日時',
    });
    this.updatedDateTimeColumnHeader = this.page.getByRole('columnheader', {
      name: '最終更新日時',
    });
    this.trialBalanceColumnHeader = this.page.getByRole('columnheader', {
      name: '残高試算表',
    });
    this.balanceSheetColumnHeader = this.page.getByRole('columnheader', {
      name: '貸借対照表',
    });
    this.profitAndLossSheetColumnHeader = this.page.getByRole('columnheader', {
      name: '損益計算書',
    });
    this.resetButton = this.page.getByLabel('Open reset dialog');
    this.resetDialogButton = this.page.getByLabel('Reset', { exact: true });
    this.importButton = this.page.getByLabel('Import trial balance');
    this.historyButton = this.page.getByLabel(
      'Open drawer to show operation histories'
    );
    this.exportButton = this.page.getByLabel('Export dropdown');
    this.correctionButton = this.page.getByTestId(
      'openAdjustmentAndRemarkFormDrawerBtn'
    );
    this.trialBalanceTab = this.page.getByRole('tab', { name: '残高試算表' });
    this.balanceSheetTab = this.page.getByRole('tab', { name: '貸借対照表' });
    this.profitAndLossTab = this.page.getByRole('tab', { name: '損益計算書' });

    this.accountCodeColumnHeader = this.page.getByRole('columnheader', {
      name: '勘定科目コード',
    });
    this.accountNameColumnHeader = this.page
      .getByTestId('mainContent')
      .getByRole('columnheader', { name: '勘定科目名' });
    this.balanceColumnHeader = this.page.getByRole('columnheader', {
      name: '期末残高',
    });
    this.intakeBalanceColumnHeader = this.page.getByRole('columnheader', {
      name: '取込残高',
    });
    this.linkSubjectColumnHeader = this.page
      .getByTestId('mainContent')
      .getByRole('columnheader', { name: '連結科目' });
    this.beforeAdjustmentTab = this.page.getByLabel('Before adjustment');
    this.afterAdjustmentTab = this.page.getByLabel('After adjustment');
    this.balanceSheetSummaryView = this.page.locator(
      '//div[@data-testid="balanceSheetSummary"]'
    );
    this.subjectClassificationColumnHeader = this.page.getByRole(
      'columnheader',
      {
        name: '科目分類',
      }
    );
    this.consolidatedItemCodeColumnHeader = this.page.getByRole(
      'columnheader',
      {
        name: '連結科目コード',
      }
    );
    this.linkedAccountNameColumnHeader = this.page.getByRole('columnheader', {
      name: '連結科目名',
    });
    this.individualCorrectionsColumnHeader = this.page.getByRole(
      'columnheader',
      {
        name: '個別修正',
      }
    );
    this.amountMoneyColumnHeader = this.page.getByRole('columnheader', {
      name: '金額',
    });
    this.summaryColumnHeader = this.page.getByRole('columnheader', {
      name: '金額',
    });
    this.profitAndLossSummaryView = this.page.locator(
      '//div[@data-testid="profitAndLossSummary"]'
    );
    this.resetAllTypeCheckbox = this.page.getByLabel(
      'Trial Balance, Balance Sheet, Profit and Loss checkbox'
    );
    this.resetBalanceSheetCheckbox = this.page.getByLabel(
      'Balance Adjustment checkbox'
    );
    this.resetProfitAndLossCheckbox = this.page.getByLabel(
      'Translation Adjustment checkbox'
    );
    this.resetSuccessMessageLabel =
      this.page.getByText('連結パッケージをリセットしました');
    this.importFileTrialBalanceButton = this.page.getByLabel(
      'Open drawer to import from file'
    );
    this.importSettingCombobox = this.page.locator(
      '//div[@aria-label="Select import setting"]'
    );
    this.selectFileButton = this.page.getByLabel('Select file');
    this.saveButton = this.page.getByLabel('Save');
    this.adjustmentButton = this.page.getByLabel(
      'Open adjustment and remark form drawer'
    );
    this.addFixButton = this.page.getByLabel('Add condition');
    this.saveAdjustmentButton = this.page.locator(
      '//div[@aria-label="連結決算単位が確定しているため、操作できません。"]/button'
    );
  }

  async verifyTrialBalanceImport(
    row: number,
    accountCode: string,
    accountName: string,
    closingAmount: string,
    importedAmount: string,
    consolidationAccount: string
  ) {
    await expect(
      this.page
        .locator(
          '//tr[@data-testid="trialBalanceRow"]/td[count(//div[@id="tabpanel-0"]//th[following-sibling::th[text()="勘定科目コード"]])+1]'
        )
        .nth(row)
    ).toHaveText(accountCode);
    await expect(
      this.page
        .locator(
          '//tr[@data-testid="trialBalanceRow"]/td[count(//div[@id="tabpanel-0"]//th[following-sibling::th[text()="勘定科目名"]])+1]'
        )
        .nth(row)
    ).toHaveText(accountName);
    await expect(
      this.page
        .locator(
          '//tr[@data-testid="trialBalanceRow"]/td[count(//div[@id="tabpanel-0"]//th[following-sibling::th[text()="期末残高"]])+1]'
        )
        .nth(row)
    ).toHaveText(closingAmount);
    await expect(
      this.page
        .locator(
          '//tr[@data-testid="trialBalanceRow"]/td[count(//div[@id="tabpanel-0"]//th[following-sibling::th[text()="取込残高"]])+1]'
        )
        .nth(row)
    ).toHaveText(importedAmount);
    await expect(
      this.page
        .locator(
          '//tr[@data-testid="trialBalanceRow"]/td[count(//div[@id="tabpanel-0"]//th[following-sibling::th[text()="連結科目"]])+1]'
        )
        .nth(row)
    ).toHaveText(consolidationAccount);
  }

  async clickOnReportDetail(companyAbbreviation: string, reportType: string) {
    await this.page
      .locator(
        `(//td[preceding-sibling::td[text()="${companyAbbreviation}"]])[count(//th[following-sibling::th[text()="${reportType}"]])]`
      )
      .click();
  }

  async clickResetButton() {
    await this.resetButton.click();
  }

  async addAdjustmentData(account: string, amount: string) {
    await this.adjustmentButton.click();
    await this.addFixButton.click();
    await this.page
      .locator('//div[@aria-label="Select consolidated account"]')
      .last()
      .click();
    await this.page.locator(`//li[text()="${account}"]`).click();
    await this.page
      .getByLabel('adjustment', { exact: true })
      .last()
      .fill(amount);
    await this.saveAdjustmentButton.click();
    await this.page
      .locator('//div[text()="個別修正を保存しました"]')
      .waitFor({ state: 'visible' });
    await this.page
      .locator('//div[text()="個別修正を保存しました"]')
      .waitFor({ state: 'hidden' });
  }

  async verifyBalanceSheetData(
    account: string,
    correctionAmount: string,
    totalAmount: string
  ) {
    await expect(
      this.page.locator(
        `//tr[@data-testid="financialStatementRow"]/td[count(//th[following-sibling::th[text()="個別修正"]])+1][preceding-sibling::td[text()="${account}"]]`
      )
    ).toHaveText(correctionAmount);
    await expect(
      this.page.locator(
        `//tr[@data-testid="financialStatementRow"]/td[count(//th[following-sibling::th[text()="金額"]])+1][preceding-sibling::td[text()="${account}"]]`
      )
    ).toHaveText(totalAmount);
  }

  async verifyBalanceSheetConversionData(
    account: string,
    beforeAmount: string,
    afterAmount: string
  ) {
    await expect(
      this.page.locator(
        `//table[@data-testid="exchanged-financial-statement"]//tr/td[count(//th[following-sibling::th[text()="個別修正"]])+1][preceding-sibling::td[text()="${account}"]]`
      )
    ).toHaveText(beforeAmount);
    await expect(
      this.page.locator(
        `//table[@data-testid="exchanged-financial-statement"]//tr/td[count(//th[following-sibling::th[text()="換算後金額"]])+1][preceding-sibling::td[text()="${account}"]]`
      )
    ).toHaveText(afterAmount);
  }

  async resetAllData() {
    await this.resetButton.click();
    await this.resetAllTypeCheckbox.click();
    await this.resetDialogButton.click();
    await this.resetSuccessMessageLabel.waitFor({
      state: 'visible',
      timeout: 30000,
    });
  }

  async resetBalanceSheet() {
    await this.resetButton.click();
    await this.resetBalanceSheetCheckbox.click();
    await this.resetDialogButton.click();
    await this.resetSuccessMessageLabel.waitFor({
      state: 'visible',
      timeout: 30000,
    });
    await this.resetSuccessMessageLabel.waitFor({
      state: 'hidden',
      timeout: 10000,
    });
  }

  async importFileTrialBalance(filePath: string, importSetting: string) {
    await this.importButton.click();
    await this.importFileTrialBalanceButton.click();
    await this.importSettingCombobox.click();
    await this.page
      .locator(`//ul[@role="listbox"]/li[text()="${importSetting}"]`)
      .click();
    await this.selectFileButton.setInputFiles(filePath);
    await this.page
      .locator('//tr[@data-testid="accountConversionRulePreviewTableRow"]')
      .first()
      .waitFor({
        state: 'visible',
        timeout: 30000,
      });
    await this.saveButton.click();
    await this.page
      .locator('//tr[@data-testid="trialBalanceRow"]')
      .first()
      .waitFor({
        state: 'visible',
        timeout: 60000,
      });
  }

  async clickOnFirstReportDetail(reportType: string) {
    await this.page
      .locator(
        `//td[count(//th[following-sibling::th[text()="${reportType}"]])+1]`
      )
      .first()
      .click();
  }

  async getFirstCompanyConsolidationPackageInformation(
    column: string
  ): Promise<string> {
    return await this.page
      .locator(
        `(//td[preceding-sibling::td])[count(//th[following-sibling::th[text()="${column}"]])]`
      )
      .innerText();
  }

  async clickOnTrialBalanceTab() {
    await this.trialBalanceTab.click();
  }
  async clickOnBalanceSheetTab() {
    await this.balanceSheetTab.click();
  }

  async clickOnProfitAndLossTab() {
    await this.profitAndLossTab.click();
  }

  async verifyConsolidationPackagesViewerRole() {
    await expect(this.companyAbbreviationColumnHeader).toBeVisible();
    await expect(this.companyNameColumnHeader).toBeVisible();
    await expect(this.createdDateTimeColumnHeader).toBeVisible();
    await expect(this.updatedDateTimeColumnHeader).toBeVisible();
    await expect(this.trialBalanceColumnHeader).toBeVisible();
    await expect(this.balanceSheetColumnHeader).toBeVisible();
    await expect(this.profitAndLossSheetColumnHeader).toBeVisible();
  }

  async verifyConsolidationPackagesDetailViewerRole() {
    await expect(this.resetButton).toBeHidden();
    await expect(this.importButton).toBeHidden();
    await expect(this.historyButton).toBeVisible();
    await expect(this.exportButton).toBeVisible();
    await expect(this.trialBalanceTab).toBeVisible();
    await expect(this.balanceSheetTab).toBeVisible();
    await expect(this.profitAndLossTab).toBeVisible();
    await this.clickOnTrialBalanceTab();
    await expect(this.accountCodeColumnHeader).toBeVisible();
    await expect(this.accountNameColumnHeader).toBeVisible();
    await expect(this.balanceColumnHeader).toBeVisible();
    await expect(this.intakeBalanceColumnHeader).toBeVisible();
    await expect(this.linkSubjectColumnHeader).toBeVisible();
    await expect(this.profitAndLossTab).toBeVisible();
    await expect(this.profitAndLossTab).toBeVisible();
    await expect(this.profitAndLossTab).toBeVisible();
    await this.clickOnBalanceSheetTab();
    await expect(this.beforeAdjustmentTab).toBeVisible();
    await expect(this.afterAdjustmentTab).toBeVisible();
    await expect(this.balanceSheetSummaryView).toBeVisible();
    await expect(this.subjectClassificationColumnHeader).toBeVisible();
    await expect(this.consolidatedItemCodeColumnHeader).toBeVisible();
    await expect(this.linkedAccountNameColumnHeader).toBeVisible();
    await expect(this.intakeBalanceColumnHeader).toBeVisible();
    await expect(this.individualCorrectionsColumnHeader).toBeVisible();
    await expect(this.amountMoneyColumnHeader).toBeVisible();
    await expect(this.summaryColumnHeader).toBeVisible();
    await this.clickOnProfitAndLossTab();
    await expect(this.beforeAdjustmentTab).toBeVisible();
    await expect(this.afterAdjustmentTab).toBeVisible();
    await expect(this.profitAndLossSummaryView).toBeVisible();
    await expect(this.subjectClassificationColumnHeader).toBeVisible();
    await expect(this.consolidatedItemCodeColumnHeader).toBeVisible();
    await expect(this.linkedAccountNameColumnHeader).toBeVisible();
    await expect(this.intakeBalanceColumnHeader).toBeVisible();
    await expect(this.individualCorrectionsColumnHeader).toBeVisible();
    await expect(this.amountMoneyColumnHeader).toBeVisible();
    await expect(this.summaryColumnHeader).toBeVisible();
  }
}
