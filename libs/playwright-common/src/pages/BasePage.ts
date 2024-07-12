import { Page } from '@playwright/test';

export class BasePage {
  protected readonly path: string;
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public async goto() {
    await this.page.goto(this.path);
    await this.page.waitForLoadState();
  }
}
