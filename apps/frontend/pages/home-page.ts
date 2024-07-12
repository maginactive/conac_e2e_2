import { Locator, Page, expect } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';

export class HomePage extends ConacPage {
  protected readonly path: string = '';

  readonly conacUnitHeader: Locator;
  readonly periodHeader: Locator;
  readonly defaultClassification: Locator;

  constructor(page: Page) {
    super(page);
    this.defaultClassification = this.page.getByRole('tab', {
      name: '10：実績',
    });

    this.conacUnitHeader = this.page.getByRole('cell', {
      name: '連結決算単位（日）',
    });
    this.periodHeader = this.page.getByRole('cell', {
      name: '期間',
    });
  }
  async verifyHomePageView() {
    await expect(this.defaultClassification).toBeVisible();
    await expect(this.conacUnitHeader).toBeVisible();
    await expect(this.periodHeader).toBeVisible();
  }
}
