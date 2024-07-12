import { Locator, Page } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';
import { expect } from '@/fixtures/page-fixtures';
export class WorkClassificationPage extends ConacPage {
  protected readonly path: string = '/work_classifications';

  readonly classificationCodeHeader: Locator;
  readonly classificationNameHeader: Locator;
  readonly createDateHeader: Locator;
  readonly updatedDateHeader: Locator;
  readonly detailButton: Locator;
  readonly addButton: Locator;

  readonly classificationCodeLabel: Locator;
  readonly classificationNameJpInput: Locator;
  readonly classificationNameEnInput: Locator;
  readonly remarkTextArea: Locator;
  readonly saveButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    super(page);
    this.classificationCodeHeader = this.page.getByRole('columnheader', {
      name: '業務分類コード',
    });

    this.classificationNameHeader = this.page.getByRole('columnheader', {
      name: '業務分類名',
    });

    this.createDateHeader = this.page.getByRole('columnheader', {
      name: '設定日時',
    });

    this.updatedDateHeader = this.page.getByRole('columnheader', {
      name: '更新日時',
    });

    this.detailButton = this.page.getByLabel('Navigate to detail page');

    this.addButton = this.page.getByLabel('Create');

    this.classificationCodeLabel = this.page.locator(
      '//p[preceding-sibling::label[text()="業務分類コード"]]'
    );

    this.classificationNameJpInput = this.page.getByLabel(
      'Work classification japanese name'
    );

    this.classificationNameEnInput = this.page.getByLabel(
      'Work classification english name'
    );

    this.remarkTextArea = this.page.getByLabel(
      'Work classification description'
    );

    this.saveButton = this.page.getByLabel('Save');

    this.deleteButton = this.page.getByLabel(
      'Open delete work classification dialog'
    );
  }

  async verifyWorkClassificationViewerRole() {
    await expect(this.classificationCodeHeader).toBeVisible();
    await expect(this.classificationNameHeader).toBeVisible();
    await expect(this.createDateHeader).toBeVisible();
    await expect(this.updatedDateHeader).toBeVisible();
    await expect(this.detailButton.first()).toBeVisible();
    await expect(this.addButton).toBeHidden();
  }

  async clickOnDetailOfFirstWorkClassification() {
    await this.detailButton.first().click();
  }

  async verifyWorkClassificationDetailViewerRole() {
    await expect(this.classificationCodeLabel).toBeVisible();
    await expect(this.classificationNameJpInput).not.toBeEditable();
    await expect(this.classificationNameEnInput).not.toBeEditable();
    await expect(this.remarkTextArea).not.toBeEditable();
    await expect(this.saveButton).toBeHidden();
    await expect(this.deleteButton).toBeHidden();
  }
}
