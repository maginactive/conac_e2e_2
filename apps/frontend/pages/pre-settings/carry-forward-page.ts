import { Locator, Page, expect } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';

export class CarryForwardPage extends ConacPage {
  protected readonly path: string = '/carry_forward';

  readonly carryForwardTab: Locator;
  readonly currentPeriodTableHeader: Locator;
  readonly previousPeriodTableHeader: Locator;
  readonly carryForwardExecuteButton: Locator;

  constructor(page: Page) {
    super(page);
    this.carryForwardTab = this.page.getByText('利益剰余金');
    this.currentPeriodTableHeader = this.page.getByText('前期末 : ');
    this.previousPeriodTableHeader = this.page.getByText('当期 : ');
    this.carryForwardExecuteButton = this.page.getByRole('button', {
      name: '前期末引継',
    });
  }
  async verifyCarryForwardViewerRole() {
    await expect(this.carryForwardTab).toBeVisible();
    await expect(this.currentPeriodTableHeader).toBeVisible();
    await expect(this.previousPeriodTableHeader).toBeVisible();
    await expect(this.carryForwardExecuteButton).toBeHidden();
  }
}
