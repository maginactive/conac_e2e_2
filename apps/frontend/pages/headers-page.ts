import { expect, Locator, Page } from '@playwright/test';
import { ConacPage } from '@conac/playwright-common';

export class HeadersPage extends ConacPage {
  readonly consolidationAccountingUnitSelectionButton: Locator;

  constructor(page: Page) {
    super(page);
    this.consolidationAccountingUnitSelectionButton = this.page.locator(
      '//p[preceding-sibling::button[@data-testid="helpIconButton"]]//*[local-name() = "svg"]'
    );
  }
  async selectConsolidationAccountingUnit(unit: string) {
    await this.consolidationAccountingUnitSelectionButton.click();
    await this.page
      .locator(`//li[@role="menuitem" and text()="${unit}"]`)
      .click();
  }

  async waitUntilHeaderLoaded() {
    await expect(this.page.locator('//header')).toBeVisible();
  }
}
