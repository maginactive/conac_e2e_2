import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ConacPage extends BasePage {
  constructor(page: Page) {
    // TODO: define locator of layout
    super(page);
  }
  public async goto(path?: string) {
    await this.page.goto(process.env['BASE_URL'] + (path ?? this.path));
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.locator('//header').waitFor({ state: 'visible' });
  }
}
