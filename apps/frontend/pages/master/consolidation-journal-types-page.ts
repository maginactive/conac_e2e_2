import { Locator, Page } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';
import { expect } from '@/fixtures/page-fixtures';
export class ConsolidationJournalTypesPage extends ConacPage {
  protected readonly path: string = '/consolidation_journal_types';

  readonly nameHeader: Locator;
  readonly openingJournalTypeHeader: Locator;
  readonly createdDateHeader: Locator;
  readonly updatedDateHeader: Locator;
  readonly editButton: Locator;
  readonly sortButton: Locator;
  readonly addButton: Locator;

  readonly nameInput: Locator;
  readonly journalTypeSelect: Locator;
  readonly remarkTextArea: Locator;

  readonly saveButton: Locator;
  readonly deleteButton: Locator;
  constructor(page: Page) {
    super(page);
    this.nameHeader = this.page.getByRole('cell', {
      name: '種別名',
    });
    this.openingJournalTypeHeader = this.page.getByRole('cell', {
      name: '開始仕訳作成区分',
    });
    this.createdDateHeader = this.page.getByRole('cell', {
      name: '設定日時',
    });
    this.updatedDateHeader = this.page.getByRole('cell', {
      name: '更新日時',
    });

    this.editButton = this.page.getByText('編集');
    this.sortButton = this.page.getByLabel('Sort consolidation journal types');
    this.addButton = this.page.getByLabel(
      'Create new consolidation journal types'
    );
    this.nameInput = this.page.getByLabel('ConsolidationJournalTypeName');
    this.journalTypeSelect = this.page.getByLabel('openingJournalType');
    this.remarkTextArea = this.page.getByLabel(
      'ConsolidationJournalTypeRemarks'
    );
    this.saveButton = this.page.getByLabel('Save');
    this.deleteButton = this.page.locator(
      '//button[@data-testid="openDeleteConsolidationJournalTypeDialogBtn"]'
    );
  }

  async verifyConsolidationJournalTypeViewerRole() {
    await expect(this.nameHeader).toBeVisible();
    await expect(this.openingJournalTypeHeader).toBeVisible();
    await expect(this.createdDateHeader).toBeVisible();
    await expect(this.updatedDateHeader).toBeVisible();
    await expect(this.editButton.first()).toBeVisible();
    await expect(this.sortButton).toBeHidden();
    await expect(this.addButton).toBeHidden();
  }

  async clickOnFirstJournalTypeDetail() {
    await this.editButton.first().click();
  }

  async verifyConsolidationJournalTypeDetailViewerRole() {
    await expect(this.nameInput).not.toBeEditable();
    await expect(this.journalTypeSelect).toBeVisible();
    await expect(this.remarkTextArea).not.toBeEditable();
    await expect(this.saveButton).toBeHidden();
    await expect(this.deleteButton).toBeHidden();
  }
}
