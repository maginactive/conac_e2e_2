import { Locator, Page, expect } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';

export class AssignedConsolidatedAccountPage extends ConacPage {
  protected readonly path: string = '/assigned_consolidated_accounts';

  readonly balanceSheet: Locator;
  readonly profitAndLossSheet: Locator;
  readonly unusedTable: Locator;
  readonly usedTable: Locator;
  readonly rightArrowButton: Locator;
  readonly leftArrowButton: Locator;
  readonly updateButton: Locator;

  constructor(page: Page) {
    super(page);
    this.balanceSheet = this.page.getByTestId('bsMap').getByText('貸借対照表');
    this.profitAndLossSheet = this.page.getByText('損益計算書');
    this.unusedTable = this.page.locator(
      '//table[@aria-label="Consolidated accounts not assigned yet"]'
    );
    this.usedTable = this.page.locator(
      '//table[@aria-label="Consolidated accounts to be marked as assigned"]'
    );
    this.rightArrowButton = this.page.locator(
      '//button[@aria-label="Add consolidated accounts to the list"]'
    );
    this.leftArrowButton = this.page.locator(
      '//button[@aria-label="Remove consolidated accounts from the list"]'
    );
    this.updateButton = this.page.getByRole('button', {
      name: '保存',
    });
  }
  async verifyAssignedConsolidatedAccountViewerRole() {
    await expect(this.balanceSheet).toBeVisible();
    await expect(this.profitAndLossSheet).toBeVisible();
    await expect(this.unusedTable).toBeVisible();
    await expect(this.usedTable).toBeVisible();
    await expect(this.rightArrowButton).toBeHidden();
    await expect(this.leftArrowButton).toBeHidden();
    await expect(this.updateButton).toBeHidden();
    await expect(
      this.page.locator('//input[@type="checkbox" and not(@disabled)]')
    ).toBeHidden();
  }
}
