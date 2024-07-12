import { Locator, Page, expect } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';

export class ConsolidationWorksheetPage extends ConacPage {
  protected readonly path: string = '/consolidation_worksheets';

  readonly consolidatedBalanceSheetTab: Locator;
  readonly consolidatedIncomeStatementTab: Locator;
  readonly balanceSheetSummaryView: Locator;
  readonly profitAndLossSummaryView: Locator;
  readonly subjectClassificationColumnHeader: Locator;
  readonly subjectCodeColumnHeader: Locator;
  readonly subjectNameColumnHeader: Locator;
  readonly consolidatedAmountColumnHeader: Locator;
  readonly totalColumnHeader: Locator;
  readonly consolidatedJournalTotalColumnHeader: Locator;
  readonly exportButton: Locator;

  constructor(page: Page) {
    super(page);
    this.consolidatedBalanceSheetTab = this.page.locator(
      '//button[@aria-label="Consolidation balance sheet tab"]'
    );
    this.consolidatedIncomeStatementTab = this.page.locator(
      '//button[@aria-label="Consolidation profit and loss tab"]'
    );
    this.balanceSheetSummaryView = this.page.locator(
      '//div[@data-testid="balanceSheetSummary"]'
    );
    this.profitAndLossSummaryView = this.page.locator(
      '//div[@data-testid="profitAndLossSummary"]'
    );
    this.subjectClassificationColumnHeader = this.page.getByRole('cell', {
      name: '科目分類',
    });
    this.subjectCodeColumnHeader = this.page.getByRole('cell', {
      name: '科目コード',
    });
    this.subjectNameColumnHeader = this.page.getByRole('cell', {
      name: '科目名',
    });
    this.consolidatedAmountColumnHeader = this.page.getByRole('cell', {
      name: '連結金額',
    });
    this.totalColumnHeader = this.page.getByRole('cell', {
      name: '単純合算計',
    });
    this.consolidatedJournalTotalColumnHeader = this.page.getByRole('cell', {
      name: '連結仕訳計',
    });
    this.exportButton = this.page.locator('//button[@aria-label="Export"]');
  }
  async verifyConsolidationWorksheetViewerRole() {
    await expect(this.exportButton).toBeVisible();
    await this.consolidatedBalanceSheetTab.click();
    await expect(this.balanceSheetSummaryView).toBeVisible();
    await expect(this.subjectClassificationColumnHeader).toBeVisible();
    await expect(this.subjectCodeColumnHeader).toBeVisible();
    await expect(this.subjectNameColumnHeader).toBeVisible();
    await expect(this.consolidatedAmountColumnHeader).toBeVisible();
    await expect(this.totalColumnHeader).toBeVisible();
    await expect(this.consolidatedJournalTotalColumnHeader).toBeVisible();
    await expect(this.consolidatedIncomeStatementTab).toBeVisible();
    await this.consolidatedIncomeStatementTab.click();
    await expect(this.profitAndLossSummaryView).toBeVisible();
    await expect(this.subjectClassificationColumnHeader).toBeVisible();
    await expect(this.subjectCodeColumnHeader).toBeVisible();
    await expect(this.subjectNameColumnHeader).toBeVisible();
    await expect(this.consolidatedAmountColumnHeader).toBeVisible();
    await expect(this.totalColumnHeader).toBeVisible();
    await expect(this.consolidatedJournalTotalColumnHeader).toBeVisible();
  }
}
