import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '@conac/playwright-common';

export const URL_LIST = {
  LOGIN: '/login',
  HOMEPAGE: '/',
  MFID_AUTH: '/mfid/auth',
  ACCEPT_TERM: '/eula',
};

export class LoginPage extends BasePage {
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly agreeAndSignIn: Locator;
  private readonly loginWithMFid: Locator;
  private readonly signInBtn: Locator;
  private readonly noThankBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('[name="mfid_user[email]"]');
    this.passwordInput = page.locator('[name="mfid_user[password]"]');
    this.agreeAndSignIn = page.locator('#submitto');
    this.loginWithMFid = page.locator("button[type='button']");
    // this.loginWithMFid = page.getByRole('button', {
    //   name: 'マネーフォワード IDでログイン',
    // });
    this.signInBtn = page.locator('[id="submitto"]');
    this.noThankBtn = page.locator('//a[contains(@href,"pass") and not(@id)]');
  }

  async login(email: string, password: string) {
    // TODO change process env to options
    await this.page.goto(process.env['BASE_URL'] + '/login');
    await this.page.waitForLoadState();
    await this.loginWithMFid.click();
    //print current url
    console.log(this.page.url());
    // await expect(this.page).toHaveURL(
    //   new RegExp(`^${process.env['MFID_BASE_URL']}/sign_in?`)
    // );
    await this.emailInput.fill(email);
    await this.agreeAndSignIn.click();
    //print current url
    console.log(this.page.url());
    // await expect(this.page).toHaveURL(
    //   new RegExp(`^${process.env['MFID_BASE_URL']}/sign_in/password`)
    // );
    await this.passwordInput.fill(password);
    await this.signInBtn.click();

    try {
      await expect(this.page).toHaveURL(
        new RegExp(`^${process.env['MFID_BASE_URL']}/passkey_promotion`)
      );
      await this.noThankBtn.click();
    } catch (e) {
      // No Passkey Promotion page. So do nothing
    }

    if (
      this.page
        .url()
        .includes(`${process.env['MFID_BASE_URL']}/${URL_LIST.ACCEPT_TERM}`)
    ) {
      await this.page.locator('.accept-eula-button').click();
    }

    try {
      await this.page
        .locator('//div[preceding-sibling::div/p[text()="Automation"]]//button')
        .click({ timeout: 5000 });
    } catch (e) {
      // Select office if display
    }

    await this.page.locator('//header').waitFor({ state: 'visible' });
  }
}
