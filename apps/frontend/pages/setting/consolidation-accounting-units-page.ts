import { expect } from '@/fixtures/page-fixtures';
import { Locator, Page } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';

export class ConsolidationAccountingUnitsPage extends ConacPage {
  protected readonly path: string = '/consolidation_accounting_units';

  readonly unitHeader: Locator;
  readonly categoryHeader: Locator;
  readonly periodHeader: Locator;
  readonly closingStatusHeader: Locator;
  readonly unlockButton: Locator;
  readonly lockButton: Locator;
  readonly editButton: Locator;
  readonly cloneButton: Locator;
  readonly historyButton: Locator;
  readonly newButton: Locator;

  readonly businessClassificationCombobox: Locator;
  readonly conacUnitJpTextbox: Locator;
  readonly conacUnitEnTextbox: Locator;
  readonly periodFromDateAreaLabel: Locator;
  readonly periodEndDateAreaLabel: Locator;
  readonly companiesSubmissionCheckBox: Locator;
  readonly consolidationProcessSelect: Locator;
  readonly dragButton: Locator;
  readonly remarkTextArea: Locator;
  readonly previousPeriodCombobox: Locator;
  readonly consolidationLinkCombobox: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    super(page);
    this.unitHeader = this.page.getByRole('cell', {
      name: '連結決算単位（日）',
    });

    this.categoryHeader = this.page.getByRole('cell', {
      name: '業務分類',
    });

    this.periodHeader = this.page.getByRole('cell', {
      name: '期間',
    });

    this.closingStatusHeader = this.page.getByRole('cell', {
      name: '決算ステータス',
    });

    this.unlockButton = this.page.getByLabel(
      'Open consolidation accounting unit unlock status dialog'
    );

    this.lockButton = this.page.getByLabel(
      'Open consolidation accounting unit lock status dialog'
    );

    this.editButton = this.page.getByLabel('Navigate edit page');

    this.cloneButton = this.page.getByLabel('Navigate copy new page');

    this.historyButton = this.page.getByLabel('Open operation history drawer');

    this.newButton = this.page.getByTestId('pageTitle').getByLabel('New');

    this.businessClassificationCombobox = this.page.locator(
      '//div[preceding-sibling::label[text()="業務分類"]]//div[@role="combobox"]'
    );

    this.conacUnitJpTextbox = this.page.locator('//input[@name="nameJa"]');

    this.conacUnitEnTextbox = this.page.locator('//input[@name="nameEn"]');

    this.periodFromDateAreaLabel = this.page.locator(
      '(//div[preceding-sibling::label[text()="期間"]]//input[@placeholder="YYYY/MM/DD"])[1]'
    );

    this.periodEndDateAreaLabel = this.page.locator(
      '(//div[preceding-sibling::label[text()="期間"]]//input[@placeholder="YYYY/MM/DD"])[2]'
    );

    this.companiesSubmissionCheckBox = this.page.getByLabel(
      'Submission required'
    );

    this.consolidationProcessSelect = this.page.getByLabel(
      'Consolidation process'
    );

    this.dragButton = this.page.getByLabel('Drag handle');

    this.remarkTextArea = this.page.locator('//textarea[@name="description"]');

    this.previousPeriodCombobox = this.page.locator(
      '//div[preceding-sibling::label[text()="前期末"]]//div[@role="combobox"]'
    );

    this.consolidationLinkCombobox = this.page.locator(
      '//div[preceding-sibling::label[text()="利用連結科目（引き継ぎ元）"]]//div[@role="combobox"]'
    );

    this.saveButton = this.page.getByLabel('Save');
  }

  async clickOnNewButton() {
    await this.newButton.click();
  }

  async clickOnCopyNewButton(unit: string) {
    await this.page
      .getByRole('row', { name: `${unit}` })
      .getByRole('cell', { name: 'Navigate copy new page' })
      .click();
  }

  async clickOnCopyNewButtonOfFirstItem() {
    await this.page
      .getByRole('cell', { name: 'Navigate copy new page' })
      .first()
      .click();
  }

  async clickOnEditButton(unit: string) {
    await this.page
      .locator(`//td[preceding-sibling::td[text()="${unit}"]]/a[text()="編集"]`)
      .click();
  }

  async clickOnEditButtonOfFirstItem() {
    await this.page
      .getByRole('cell', { name: 'Navigate edit page' })
      .first()
      .click();
  }

  async getFirstUnlockUnit(): Promise<string> {
    return await this.page
      .locator(
        '//tr[@aria-label="Consolidation accounting unit item"]//td[count(//th[following-sibling::th[text()="連結決算単位（日）"]])+1][following-sibling::td//button[text()="確定"]]'
      )
      .first()
      .innerText();
  }

  async clickOnFirstRowCopyNewButton() {
    await this.page
      .getByRole('cell', { name: 'Navigate copy new page' })
      .nth(1)
      .click();
  }

  async clickOnFirstRowEditButton() {
    await this.page
      .getByRole('cell', { name: 'Navigate edit page' })
      .nth(1)
      .click();
  }

  async createNewConacUnit(
    unitJp: string,
    consolidationLink: string,
    unitEn?: string,
    businessClassify?: string,
    fromDate?: string,
    endDate?: string,
    previousPeriod?: string,
    remark?: string
  ) {
    if (businessClassify) {
      await this.businessClassificationCombobox.click();
      await this.page
        .locator(`//li[@data-value and contains(text(),"${businessClassify}")]`)
        .click();
    }
    await this.conacUnitJpTextbox.fill(unitJp);
    if (unitEn) await this.conacUnitEnTextbox.fill(unitEn);
    if (fromDate) await this.periodFromDateAreaLabel.fill(fromDate);
    if (endDate) await this.periodEndDateAreaLabel.fill(endDate);
    if (previousPeriod) {
      await this.previousPeriodCombobox.click();
      await this.page
        .locator(`//li[@data-value and contains(text(),"${previousPeriod}")]`)
        .click();
    }
    await this.consolidationLinkCombobox.click();
    await this.page
      .locator(`//li[@data-value and contains(text(),"${consolidationLink}")]`)
      .click();
    if (remark) await this.remarkTextArea.fill(remark);
    await this.page
      .locator('//input[@aria-label="Submission required"]')
      .first()
      .setChecked(true);
    await this.saveButton.click();
  }

  async updateConacUnit(
    unitJp?: string,
    unitEn?: string,
    fromDate?: string,
    endDate?: string,
    previousPeriod?: string,
    remark?: string
  ) {
    if (unitJp) await this.conacUnitJpTextbox.fill(unitJp);
    if (unitEn) await this.conacUnitEnTextbox.fill(unitEn);
    if (fromDate) await this.periodFromDateAreaLabel.fill(fromDate);
    if (endDate) await this.periodEndDateAreaLabel.fill(endDate);
    if (previousPeriod) {
      await this.previousPeriodCombobox.click();
      await this.page
        .locator(`//li[@data-value and contains(text(),"${previousPeriod}")]`)
        .click();
    }
    if (remark) await this.remarkTextArea.fill(remark);
    await this.saveButton.click();
  }

  async verifyCompanyAbbreviationWithName(companyName: string) {
    expect(
      this.page.getByRole('cell', { name: `${companyName}` }).isVisible()
    ).toBeTruthy();
  }

  async verifyConsolidationAccountingUnitViewerRole() {
    await expect(this.unitHeader).toBeVisible();
    await expect(this.categoryHeader).toBeVisible();
    await expect(this.periodHeader).toBeVisible();
    await expect(this.closingStatusHeader).toBeVisible();
    await expect(this.lockButton.first()).toBeDisabled();
    await expect(this.unlockButton.first()).toBeDisabled();
    await expect(this.editButton.first()).toBeVisible();
    await expect(this.cloneButton.first()).toBeHidden();
    await expect(this.historyButton).toBeVisible();
    await expect(this.newButton).toBeHidden();
  }

  async clickOnFirstConsolidationAccountingUnit() {
    await this.editButton.first().click();
  }

  async verifyConsolidationAccountingUnitDetailViewerRole() {
    expect(
      await this.businessClassificationCombobox.getAttribute('class')
    ).toContain('readOnly');
    await expect(this.conacUnitJpTextbox).not.toBeEditable();
    await expect(this.conacUnitEnTextbox).not.toBeEditable();
    await expect(this.periodFromDateAreaLabel).not.toBeEditable();
    await expect(this.periodEndDateAreaLabel).not.toBeEditable();
    expect(await this.previousPeriodCombobox.getAttribute('class')).toContain(
      'readOnly'
    );
    await expect(this.companiesSubmissionCheckBox.first()).toBeDisabled();
    expect(
      await this.consolidationProcessSelect.first().getAttribute('class')
    ).toContain('readOnly');
    await expect(this.dragButton.first()).toBeHidden();
    await expect(this.remarkTextArea).not.toBeEditable();
    await expect(this.saveButton).toBeHidden();
  }
}
