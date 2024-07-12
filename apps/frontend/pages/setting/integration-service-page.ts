import { Locator, Page } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';
import { expect } from '@/fixtures/page-fixtures';
export class IntegrationServicePage extends ConacPage {
  protected readonly path: string = '/integration_services';

  readonly companyAbbreviationHeader: Locator;
  readonly companyNameHeader: Locator;
  readonly caIntegrationResourcesHeader: Locator;
  readonly serviceHeader: Locator;
  readonly partnerBusinessHeader: Locator;
  readonly startDateHeader: Locator;
  readonly cancelButtonHeader: Locator;
  readonly newButton: Locator;

  constructor(page: Page) {
    super(page);
    this.companyAbbreviationHeader = this.page.getByRole('cell', {
      name: '会社略号',
    });

    this.companyNameHeader = this.page.getByRole('cell', {
      name: '会社略号',
    });

    this.caIntegrationResourcesHeader = this.page.getByRole('cell', {
      name: '連結パッケージ項目',
    });

    this.serviceHeader = this.page.getByRole('cell', {
      name: '連携サービス',
    });

    this.partnerBusinessHeader = this.page.getByRole('cell', {
      name: '連携先事業者名',
    });

    this.startDateHeader = this.page.getByRole('cell', {
      name: '連携開始日時',
    });

    this.cancelButtonHeader = this.page.getByLabel(
      'Open delete setting dialog'
    );

    this.newButton = this.page.getByLabel(
      'Navigate new integration service page'
    );
  }

  async verifyIntegrationServiceViewerRole() {
    await expect(this.companyAbbreviationHeader).toBeVisible();
    await expect(this.companyNameHeader).toBeVisible();
    await expect(this.serviceHeader).toBeVisible();
    await expect(this.partnerBusinessHeader).toBeVisible();
    await expect(this.caIntegrationResourcesHeader).toBeVisible();
    await expect(this.startDateHeader).toBeVisible();
    await expect(this.cancelButtonHeader).toBeHidden();
    await expect(this.newButton).toBeHidden();
  }
}
