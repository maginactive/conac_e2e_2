import { Locator, Page } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';
import { expect } from '@/fixtures/page-fixtures';
export class ExchangeRatesPage extends ConacPage {
  protected readonly path: string = '/exchange_rates';

  readonly companyHeader: Locator;
  readonly conversationButton: Locator;

  constructor(page: Page) {
    super(page);
    this.companyHeader = this.page.getByRole('cell', {
      name: '会社',
    });
    this.conversationButton = this.page.getByRole('button', {
      name: '換算',
    });
  }

  async verifyCompanyDisplayNameWithAbbreviation(companyName: string) {
    expect(
      this.page.getByRole('cell', { name: `${companyName}` }).isVisible()
    ).toBeTruthy();
  }

  async verifyExchangeRateViewerRole() {
    await expect(this.companyHeader).toBeVisible();
    await expect(
      this.page.locator('//input[@aria-label="Average rate input"]').nth(0)
    ).not.toBeEditable();
    await expect(
      this.page.locator('//input[@aria-label="Current rate input"]').nth(0)
    ).not.toBeEditable();
    await expect(this.conversationButton).toBeHidden();
  }
}
