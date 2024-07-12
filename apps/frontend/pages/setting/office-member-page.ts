import { Locator, Page } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';
import { expect } from '@/fixtures/page-fixtures';
export class OfficeMemberPage extends ConacPage {
  protected readonly path: string = '/office_members';

  readonly userNameHeader: Locator;
  readonly emailHeader: Locator;
  readonly roleHeader: Locator;

  readonly editButton: Locator;
  readonly addButton: Locator;

  readonly userNameLabel: Locator;
  readonly emailLabel: Locator;
  readonly roleSelect: Locator;
  readonly remarkTextArea: Locator;
  readonly saveButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameHeader = this.page.getByRole('cell', {
      name: 'ユーザー名',
    });

    this.emailHeader = this.page.getByRole('cell', {
      name: 'メールアドレス',
    });

    this.roleHeader = this.page.getByRole('cell', {
      name: 'ロール',
    });

    this.editButton = this.page.getByLabel('Navigate to edit page');
    this.addButton = this.page.getByLabel('New');

    this.userNameLabel = this.page.locator(
      '//p[preceding-sibling::label[text()="ユーザー名"]]'
    );
    this.emailLabel = this.page.locator(
      '//p[preceding-sibling::label[text()="メールアドレス"]]'
    );
    this.roleSelect = this.page.getByRole('cell', { name: 'ロール' });
    this.remarkTextArea = this.page.getByLabel('Description');
    this.saveButton = this.page.getByLabel('Save');
    this.deleteButton = this.page.getByLabel('Delete User');
  }

  async verifyOfficeMemberViewerRole() {
    await expect(this.userNameHeader).toBeVisible();
    await expect(this.emailHeader).toBeVisible();
    await expect(this.roleHeader).toBeVisible();
    await expect(this.editButton.first()).toBeVisible();
    await expect(this.addButton).toBeHidden();
  }

  async clickEditOnFirstOfficeMember() {
    await this.editButton.first().click();
  }

  async verifyOfficeMemberDetailViewerRole() {
    await expect(this.userNameLabel).toBeVisible();
    await expect(this.emailLabel).toBeVisible();
    await expect(this.roleSelect).toBeVisible();
    await expect(this.remarkTextArea).not.toBeEditable();
    await expect(this.saveButton).toBeHidden();
    await expect(this.deleteButton).toBeHidden();
  }
}
