import { Locator, Page } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';
import { expect } from '@/fixtures/page-fixtures';
export class SegmentsPage extends ConacPage {
  protected readonly path: string = '/segments';

  readonly segmentAbbreviationHeader: Locator;
  readonly segmentNameHeader: Locator;
  readonly detailButton: Locator;
  readonly sortButton: Locator;
  readonly addButton: Locator;

  readonly abbreviationInput: Locator;
  readonly nameJpInput: Locator;
  readonly nameEnInput: Locator;
  readonly remarkTextArea: Locator;

  readonly saveButton: Locator;

  constructor(page: Page) {
    super(page);
    this.segmentAbbreviationHeader = this.page.getByRole('cell', {
      name: 'セグメント略号',
    });
    this.segmentNameHeader = this.page.getByRole('cell', {
      name: 'セグメント名（日）',
    });

    this.detailButton = this.page.getByText('詳細');
    this.sortButton = this.page.getByLabel('Open update sort order drawer');
    this.addButton = this.page.getByLabel('Create new segment');
    this.abbreviationInput = this.page.locator(
      '//p[preceding-sibling::label[text()="略号"]]'
    );
    this.nameJpInput = this.page.getByLabel('Update segment name Ja');
    this.nameEnInput = this.page.getByLabel('Update segment name En');
    this.remarkTextArea = this.page.getByLabel('Update segment description');
    this.saveButton = this.page.getByLabel('Save');
  }

  async verifySegmentViewerRole() {
    await expect(this.segmentAbbreviationHeader).toBeVisible();
    await expect(this.segmentNameHeader).toBeVisible();
    await expect(this.detailButton.first()).toBeVisible();
    await expect(this.sortButton).toBeHidden();
    await expect(this.addButton).toBeHidden();
  }

  async clickOnFirstSegmentDetail() {
    await this.detailButton.first().click();
  }

  async verifySegmentDetailViewerRole() {
    await expect(this.abbreviationInput).toBeVisible();
    await expect(this.nameJpInput).not.toBeEditable();
    await expect(this.nameEnInput).not.toBeEditable();
    await expect(this.remarkTextArea).not.toBeEditable();
    await expect(this.saveButton).toBeHidden();
  }
}
