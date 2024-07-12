import { Locator, Page, expect } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';

export class ConsolidationJournalsPage extends ConacPage {
  protected readonly path: string = '/consolidation_journals';

  readonly menuView: Locator;
  readonly exportButton: Locator;
  readonly journalTypeColumnHeader: Locator;
  readonly journalKeyColumnHeader: Locator;
  readonly startColumnHeader: Locator;
  readonly companyAbbColumnHeader: Locator;
  readonly segmentAbbColumnHeader: Locator;
  readonly subjectColumnHeader: Locator;
  readonly debitAmountColumnHeader: Locator;
  readonly creditAmountColumnHeader: Locator;
  readonly abstractColumnHeader: Locator;
  readonly resetButton: Locator;
  readonly importButton: Locator;
  readonly journalDataTab: Locator;
  readonly historyTab: Locator;
  readonly importSettingsTab: Locator;
  //history
  readonly dateTimeColumnHeader: Locator;
  readonly userColumnHeader: Locator;
  readonly importFileColumnHeader: Locator;
  //importSetting
  readonly sheetNameInput: Locator;
  readonly startRowInput: Locator;
  readonly endRowInput: Locator;
  readonly journalKeyInput: Locator;
  readonly companyAbbInput: Locator;
  readonly segmentAbbInput: Locator;
  readonly subjectCodeInput: Locator;
  readonly debitAmountInput: Locator;
  readonly creditAmountInput: Locator;
  readonly summaryInput: Locator;

  constructor(page: Page) {
    super(page);
    this.menuView = this.page.locator('//div[@role="menu"]');
    this.exportButton = this.page.locator('//button[@aria-label="Export"]');
    this.journalTypeColumnHeader = this.page.getByRole('columnheader', {
      name: '仕訳種別',
    });
    this.journalKeyColumnHeader = this.page.getByRole('columnheader', {
      name: '仕訳キー',
    });
    this.startColumnHeader = this.page.getByRole('columnheader', {
      name: '開始区分',
    });
    this.companyAbbColumnHeader = this.page.getByRole('columnheader', {
      name: '会社略号',
    });
    this.segmentAbbColumnHeader = this.page.getByRole('columnheader', {
      name: 'セグメント略号',
    });
    this.subjectColumnHeader = this.page.getByRole('columnheader', {
      name: '連結科目',
    });
    this.debitAmountColumnHeader = this.page.getByRole('columnheader', {
      name: '借方金額',
    });
    this.creditAmountColumnHeader = this.page.getByRole('columnheader', {
      name: '貸方金額',
    });
    this.abstractColumnHeader = this.page.getByRole('columnheader', {
      name: '摘要',
    });
    this.resetButton = this.page.locator('//button[@aria-label="Reset"]');
    this.importButton = this.page.locator('//button[@aria-label="Import"]');
    this.journalDataTab = this.page.getByText('仕訳データ');
    this.historyTab = this.page.getByText('履歴');
    this.importSettingsTab = this.page.locator(
      "//button[text()='インポート設定']"
    );
    this.dateTimeColumnHeader = this.page.getByRole('columnheader', {
      name: '日時',
    });
    this.userColumnHeader = this.page.getByRole('columnheader', {
      name: 'ユーザー',
    });
    this.importFileColumnHeader = this.page.getByRole('columnheader', {
      name: '変更内容およびインポートファイル',
    });
    this.sheetNameInput = this.page.locator('//input[@name="sheetName"]');
    this.startRowInput = this.page.locator('//input[@name="startRow"]');
    this.endRowInput = this.page.locator('//input[@name="endRow"]');
    this.journalKeyInput = this.page.locator(
      '//input[@name="consolidationJournalGroupKeyColumn"]'
    );
    this.companyAbbInput = this.page.locator(
      '//input[@name="companyAbbreviationColumn"]'
    );
    this.segmentAbbInput = this.page.locator(
      '//input[@name="segmentAbbreviationColumn"]'
    );
    this.subjectCodeInput = this.page.locator(
      '//input[@name="consolidatedAccountCodeColumn"]'
    );
    this.debitAmountInput = this.page.locator(
      '//input[@name="debitBalanceColumn"]'
    );
    this.creditAmountInput = this.page.locator(
      '//input[@name="creditBalanceColumn"]'
    );
    this.summaryInput = this.page.locator('//input[@name="remarkColumn"]');
  }

  async verifyConsolidationJournalsViewerRole() {
    await expect(this.menuView).toBeVisible();
    await expect(this.exportButton).toBeVisible();
    await expect(this.journalTypeColumnHeader).toBeVisible();
    await expect(this.journalKeyColumnHeader).toBeVisible();
    await expect(this.startColumnHeader).toBeVisible();
    await expect(this.companyAbbColumnHeader).toBeVisible();
    await expect(this.segmentAbbColumnHeader).toBeVisible();
    await expect(this.subjectColumnHeader).toBeVisible();
    await expect(this.debitAmountColumnHeader).toBeVisible();
    await expect(this.creditAmountColumnHeader).toBeVisible();
    await expect(this.abstractColumnHeader).toBeVisible();
    await expect(this.resetButton).toBeHidden();
  }

  async verifyConsolidationJournalsDetailViewerRole() {
    await this.journalDataTab.click();
    await expect(this.resetButton).toBeHidden();
    await expect(this.importButton).toBeHidden();
    await expect(this.startColumnHeader.first()).toBeVisible();
    await expect(this.companyAbbColumnHeader.first()).toBeVisible();
    await expect(this.segmentAbbColumnHeader.first()).toBeVisible();
    await expect(this.subjectColumnHeader.first()).toBeVisible();
    await expect(this.debitAmountColumnHeader.first()).toBeVisible();
    await expect(this.creditAmountColumnHeader.first()).toBeVisible();
    await expect(this.abstractColumnHeader.first()).toBeVisible();
    await this.historyTab.click();
    await expect(this.dateTimeColumnHeader.first()).toBeVisible();
    await expect(this.userColumnHeader.first()).toBeVisible();
    await expect(this.importFileColumnHeader.first()).toBeVisible();
    await this.importSettingsTab.click();
    await expect(this.sheetNameInput).toBeVisible();
    await expect(this.startRowInput).toBeVisible();
    await expect(this.endRowInput).toBeVisible();
    await expect(this.journalKeyInput).toBeVisible();
    await expect(this.companyAbbInput).toBeVisible();
    await expect(this.segmentAbbInput).toBeVisible();
    await expect(this.subjectCodeInput).toBeVisible();
    await expect(this.debitAmountInput).toBeVisible();
    await expect(this.creditAmountInput).toBeVisible();
    await expect(this.summaryInput).toBeVisible();
  }

  async selectJournalType(journalType: string) {
    await this.page.getByText(journalType).click();
  }
}
