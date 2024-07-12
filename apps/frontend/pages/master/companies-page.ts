import { expect, Locator, Page } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';

export class CompaniesPage extends ConacPage {
  protected readonly path: string = '/companies';

  readonly companyAbbreviationHeader: Locator;
  readonly companyNameHeader: Locator;
  readonly reportCurrencyHeader: Locator;
  readonly currencyDecimalHeader: Locator;
  readonly settingDateAndTimeHeader: Locator;
  readonly lastModifiedHeader: Locator;
  readonly exportButton: Locator;
  readonly createButton: Locator;

  readonly companyAbbreviationLabel: Locator;
  readonly companyNameJpInput: Locator;
  readonly companyNameEnInput: Locator;
  readonly currencyLabel: Locator;
  readonly currencyDecimalLabel: Locator;
  readonly remarkInput: Locator;
  readonly saveButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    super(page);
    this.companyAbbreviationHeader = this.page.getByRole('columnheader', {
      name: '会社略号',
    });
    this.companyNameHeader = this.page.getByRole('columnheader', {
      name: '会社名',
    });
    this.reportCurrencyHeader = this.page.getByRole('columnheader', {
      name: '報告通貨',
    });
    this.currencyDecimalHeader = this.page.getByRole('columnheader', {
      name: '小数点桁数',
    });
    this.settingDateAndTimeHeader = this.page.getByRole('columnheader', {
      name: '設定日時',
    });
    this.lastModifiedHeader = this.page.getByRole('columnheader', {
      name: '最終更新日時',
    });
    this.exportButton = this.page.getByRole('button', { name: 'Export' });
    this.createButton = this.page.locator('//button[@aria-label="Create"]');

    this.companyAbbreviationLabel = this.page.locator(
      '//p[preceding-sibling::label[text()="略号"]]'
    );
    this.companyNameJpInput = this.page.getByLabel('Japanese company name');
    this.companyNameEnInput = this.page.getByLabel('English company name');
    this.currencyLabel = this.page.locator(
      '//p[preceding-sibling::label[text()="報告通貨"]]'
    );
    this.currencyDecimalLabel = this.page.locator(
      '//p[preceding-sibling::label[text()="小数点桁数"]]'
    );
    this.remarkInput = this.page.getByLabel('Remark');
    this.saveButton = this.page.getByLabel('Save');
    this.deleteButton = this.page.getByLabel('Open Delete Dialog');
  }
  async clickExportButton() {
    await this.exportButton.click();
  }

  async verifyCompaniesViewerRole() {
    await expect(this.companyAbbreviationHeader).toBeVisible();
    await expect(this.companyNameHeader).toBeVisible();
    await expect(this.reportCurrencyHeader).toBeVisible();
    await expect(this.currencyDecimalHeader).toBeVisible();
    await expect(this.settingDateAndTimeHeader).toBeVisible();
    await expect(this.lastModifiedHeader).toBeVisible();
    await expect(this.exportButton).toBeVisible();
    await expect(this.createButton).toBeHidden();
  }

  async clickOnFirstCompaniesDetailButton() {
    this.page.getByLabel('Detail');
  }

  async verifyDetailCompanyViewerRole() {
    await expect(this.companyAbbreviationLabel).toBeVisible();
    await expect(this.companyNameJpInput).not.toBeEditable();
    await expect(this.companyNameEnInput).not.toBeEditable();
    await expect(this.currencyLabel).toBeVisible();
    await expect(this.currencyDecimalLabel).toBeVisible();
    await expect(this.remarkInput).not.toBeEditable();
    await expect(this.saveButton).toBeHidden();
    await expect(this.deleteButton).toBeHidden();
  }
}
