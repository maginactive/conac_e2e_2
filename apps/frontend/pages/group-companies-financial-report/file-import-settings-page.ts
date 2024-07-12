import { Locator, Page, expect } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';

export class FileImportSettingsPage extends ConacPage {
  protected readonly path: string = '/consolidation_package_import_settings';

  readonly addButton: Locator;
  readonly settingNameColumnHeader: Locator;
  readonly settingDateTimeColumnHeader: Locator;
  readonly lastUpdatedDateTimeColumnHeader: Locator;
  //add or update settings
  readonly settingNameInput: Locator;
  readonly sheetNameInput: Locator;
  readonly startRowInput: Locator;
  readonly endRowInput: Locator;
  readonly accountCodeInput: Locator;
  readonly accountNameInput: Locator;
  readonly endingBalanceInput: Locator;
  readonly deleteButton: Locator;
  readonly saveButton: Locator;
  readonly updateButton: Locator;

  constructor(page: Page) {
    super(page);
    this.addButton = this.page.locator('//button[@aria-label="Create"]');
    this.settingNameColumnHeader = this.page.getByRole('columnheader', {
      name: '設定名',
    });
    this.settingDateTimeColumnHeader = this.page.getByRole('columnheader', {
      name: '設定日時',
    });
    this.lastUpdatedDateTimeColumnHeader = this.page.getByRole('columnheader', {
      name: '最終更新日時',
    });
    this.settingNameInput = this.page.locator(
      '//input[@aria-label="Setting Name Input"]'
    );
    this.sheetNameInput = this.page.locator('//input[@aria-label="SheetName"]');
    this.startRowInput = this.page.locator(
      '//div[@data-testid="startRowInput"]//input'
    );
    this.endRowInput = this.page.locator(
      '//div[@data-testid="endRowInput"]//input'
    );
    this.accountCodeInput = this.page.locator(
      '//input[@aria-label="codeColumn"]'
    );
    this.accountNameInput = this.page.locator(
      '//input[@aria-label="nameColumn"]'
    );
    this.endingBalanceInput = this.page.locator(
      '//input[@aria-label="balance"]'
    );
    this.deleteButton = this.page.locator(
      '//button[@data-testid="deleteTrialBalanceImportSettingBtn"]'
    );
    this.saveButton = this.page.locator('//button[@aria-label="Save"]');
    this.updateButton = this.page.locator(
      '//button[@data-testid="createConPkgImportSettingBtn"]'
    );
  }
  async verifyFileImportSettingViewerRole() {
    await expect(this.settingNameColumnHeader).toBeVisible();
    await expect(this.settingDateTimeColumnHeader).toBeVisible();
    await expect(this.lastUpdatedDateTimeColumnHeader).toBeVisible();
    await expect(this.addButton).toBeHidden();
  }

  async clickOnFirstSettingDetail() {
    await this.page.getByLabel('Detail').first().click();
  }
  async verifyFileImportSettingDetailViewerRole() {
    await expect(this.settingNameInput).not.toBeEditable();
    await expect(this.sheetNameInput).not.toBeEditable();
    await expect(this.startRowInput).not.toBeEditable();
    await expect(this.endRowInput).not.toBeEditable();
    await expect(this.accountCodeInput).not.toBeEditable();
    await expect(this.accountNameInput).not.toBeEditable();
    await expect(this.endingBalanceInput).not.toBeEditable();
    await expect(this.deleteButton).toBeHidden();
    await expect(this.updateButton).toBeHidden();
  }
}
