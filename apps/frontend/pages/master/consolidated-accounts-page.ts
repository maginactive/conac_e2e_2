import { expect, Locator, Page } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';

export class ConsolidatedAccountsPage extends ConacPage {
  protected readonly path: string = '/consolidated_accounts';

  readonly subjectClassificationHeader: Locator;
  readonly loanClassificationHeader: Locator;
  readonly consolidatedItemCodeHeader: Locator;
  readonly consolidatedSubjectNameHeader: Locator;
  readonly conversionHeader: Locator;
  readonly amountClassificationHeader: Locator;
  readonly settingDateAndTimeHeader: Locator;
  readonly lastModifiedHeader: Locator;
  readonly importSettingTab: Locator;
  readonly importButton: Locator;
  readonly additionButton: Locator;
  readonly exportButton: Locator;

  //history
  readonly sheetNameInput: Locator;
  readonly startRowInput: Locator;
  readonly endRowInput: Locator;
  readonly subjectCodeInput: Locator;
  readonly subjectNameJpInput: Locator;
  readonly subjectNameEnInput: Locator;
  readonly subCategoryInput: Locator;
  readonly conversionTypeInput: Locator;
  readonly amountTypeInput: Locator;
  readonly saveButton: Locator;

  //add new page
  readonly accountCodeInput: Locator;
  readonly accountSubCategorySelect: Locator;
  readonly accountNameJpInput: Locator;
  readonly accountNameEnInput: Locator;
  readonly conversionTypeCrCheckBox: Locator;
  readonly conversionTypeArCheckBox: Locator;
  readonly conversionTypeHrCheckBox: Locator;
  readonly amountTypePositiveCheckBox: Locator;
  readonly amountTypeNegativeCheckBox: Locator;
  readonly descriptionTextArea: Locator;
  readonly saveNewAccountButton: Locator;

  constructor(page: Page) {
    super(page);
    this.subjectClassificationHeader = this.page.getByRole('columnheader', {
      name: '科目分類',
    });
    this.loanClassificationHeader = this.page.getByRole('columnheader', {
      name: '貸借区分',
    });
    this.consolidatedItemCodeHeader = this.page.getByRole('columnheader', {
      name: '連結科目コード',
    });
    this.consolidatedSubjectNameHeader = this.page.getByRole('columnheader', {
      name: '連結科目名（日）',
    });
    this.conversionHeader = this.page.getByRole('columnheader', {
      name: '換算区分',
    });
    this.amountClassificationHeader = this.page.getByRole('columnheader', {
      name: '金額区分',
    });
    this.settingDateAndTimeHeader = this.page.getByRole('columnheader', {
      name: '設定日時',
    });
    this.lastModifiedHeader = this.page.getByRole('columnheader', {
      name: '最終更新日時',
    });
    this.importSettingTab = this.page.getByRole('tab', {
      name: 'インポート設定',
    });
    this.importButton = this.page.getByLabel(
      'Open drawer to import consolidated accounts'
    );
    this.additionButton = this.page.getByLabel(
      'Open drawer to create consolidated account'
    );
    this.exportButton = this.page.getByRole('button', { name: 'Export' });

    //import setting
    this.sheetNameInput = this.page.locator('//input[@name="sheetName"]');
    this.startRowInput = this.page.locator('//input[@name="startRow"]');
    this.endRowInput = this.page.locator('//input[@name="endRow"]');
    this.subjectCodeInput = this.page.locator('//input[@name="codeColumn"]');
    this.subjectNameJpInput = this.page.locator(
      '//input[@name="nameJaColumn"]'
    );
    this.subjectNameEnInput = this.page.locator(
      '//input[@name="nameEnColumn"]'
    );
    this.subCategoryInput = this.page.locator(
      '//input[@name="consolidatedAccountSubCategoryColumn"]'
    );
    this.conversionTypeInput = this.page.locator(
      '//input[@name="conversionTypeColumn"]'
    );
    this.amountTypeInput = this.page.locator(
      '//input[@name="amountTypeColumn"]'
    );
    this.saveButton = this.page.locator('//button[@aria-label="Save"]');

    //add new page
    this.accountCodeInput = this.page.getByLabel('Consolidated account code');
    this.accountSubCategorySelect = this.page.getByTestId(
      'consolidatedAccountSubCategoryIdSelect'
    );
    this.accountNameJpInput = this.page.getByLabel(
      'Japanese consolidated account name'
    );
    this.accountNameEnInput = this.page.getByLabel(
      'English consolidated account name'
    );
    this.conversionTypeCrCheckBox = this.page.getByLabel('Conversion type CR');
    this.conversionTypeArCheckBox = this.page.getByLabel('Conversion type AR');
    this.conversionTypeHrCheckBox = this.page.getByLabel('Conversion type HR');
    this.amountTypePositiveCheckBox = this.page.getByLabel(
      'Amount type POSITIVE'
    );
    this.amountTypeNegativeCheckBox = this.page.getByLabel(
      'Amount type NEGATIVE'
    );
    this.descriptionTextArea = this.page.getByLabel('Description');
    this.saveNewAccountButton = this.page.getByLabel('Save');
  }
  async clickOnEditAnAccount(accountCode: string) {
    await this.page
      .getByRole('row', { name: `${accountCode}` })
      .getByLabel('Edit')
      .focus();
    await this.page
      .getByRole('row', { name: accountCode })
      .getByLabel('Edit')
      .click();
  }
  async clickOnAddButton() {
    await this.additionButton.click();
  }
  async clickOnExportButton() {
    await this.exportButton.click();
  }
  async createNewAccount(
    accountCode: string,
    subCategory: string,
    accountNameJp: string,
    accountNameEn: string,
    conversationType: string,
    amountType: string,
    description: string
  ) {
    await this.clickOnAddButton();
    await this.accountCodeInput.fill(accountCode);
    await this.accountSubCategorySelect.click();
    await this.page.getByRole('option', { name: subCategory }).click();
    await this.accountNameJpInput.fill(accountNameJp);
    await this.accountNameEnInput.fill(accountNameEn);
    switch (conversationType) {
      case 'AR':
        await this.conversionTypeArCheckBox.click();
        break;
      case 'CR':
        await this.conversionTypeCrCheckBox.click();
        break;
      case 'HR':
        await this.conversionTypeHrCheckBox.click();
        break;
    }

    switch (amountType) {
      case 'POSITIVE':
        await this.amountTypePositiveCheckBox.click();
        break;
      case 'NEGATIVE':
        await this.amountTypeNegativeCheckBox.click();
        break;
    }

    await this.descriptionTextArea.fill(description);
    await this.saveNewAccountButton.click();
    await this.page.waitForLoadState();
  }
  async updateNewAccount(
    accountCode: string,
    {
      accountNameJp,
      accountNameEn,
      description,
    }: {
      accountNameJp?: string;
      accountNameEn?: string;
      description?: string;
    }
  ) {
    await this.clickOnEditAnAccount(accountCode);
    console.log(description);
    accountNameJp && (await this.accountNameJpInput.fill(accountNameJp));
    accountNameEn && (await this.accountNameEnInput.fill(accountNameEn));
    description && (await this.descriptionTextArea.fill(description));
    await this.saveNewAccountButton.click();
    await this.page.waitForLoadState();
  }

  async verifyConsolidatedAccountsViewerRole() {
    await expect(this.subjectClassificationHeader).toBeVisible();
    await expect(this.loanClassificationHeader).toBeVisible();
    await expect(this.consolidatedItemCodeHeader).toBeVisible();
    await expect(this.consolidatedSubjectNameHeader).toBeVisible();
    await expect(this.conversionHeader).toBeVisible();
    await expect(this.amountClassificationHeader).toBeVisible();
    await expect(this.settingDateAndTimeHeader).toBeVisible();
    await expect(this.lastModifiedHeader).toBeVisible();
    await expect(this.exportButton).toBeVisible();
    await expect(this.importButton).toBeHidden();
    await expect(this.additionButton).toBeHidden();
  }

  async verifyConsolidatedAccountsImportSettingViewerRole() {
    await expect(this.sheetNameInput).not.toBeEditable();
    await expect(this.startRowInput).not.toBeEditable();
    await expect(this.endRowInput).not.toBeEditable();
    await expect(this.subjectCodeInput).not.toBeEditable();
    await expect(this.subjectNameJpInput).not.toBeEditable();
    await expect(this.subjectNameEnInput).not.toBeEditable();
    await expect(this.subCategoryInput).not.toBeEditable();
    await expect(this.conversionTypeInput).not.toBeEditable();
    await expect(this.amountTypeInput).not.toBeEditable();
    await expect(this.saveButton).toBeHidden();
  }

  async verifyConsolidatedAccountsDetailViewerRole() {
    await expect(this.accountCodeInput).toBeVisible();
    await expect(this.accountSubCategorySelect).toBeVisible();
    await expect(this.accountNameJpInput).toBeVisible();
    await expect(this.accountNameEnInput).toBeVisible();
    await expect(this.conversionTypeCrCheckBox).toBeVisible();
    await expect(this.conversionTypeArCheckBox).toBeVisible();
    await expect(this.conversionTypeHrCheckBox).toBeVisible();
    await expect(this.amountTypePositiveCheckBox).toBeVisible();
    await expect(this.amountTypeNegativeCheckBox).toBeVisible();
    await expect(this.descriptionTextArea).toBeVisible();
    await expect(this.saveNewAccountButton).toBeDisabled();
  }

  async clickOnDetailOfFirstAccount() {
    await this.page.getByLabel('Edit').first().click();
  }

  async clickOnImportSettingTab() {
    await this.importSettingTab.click();
  }
}
