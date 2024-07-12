import { test as baseTest } from '@playwright/test';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { LoginPage } from '@conac/mfid-login';
import { createClient } from '@conac/playwright-common';

type ApiFixtures = {
  loginPage: LoginPage;
  apolloClient: ApolloClient<NormalizedCacheObject>;
};

const apiFixtures = baseTest.extend<ApiFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  apolloClient: async ({ page }, use) => {
    const cookies = await page.context().cookies();
    const client = createClient(cookies);
    await use(client);
  },
});

export const test = apiFixtures;
export const {
  expect,
  use,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  describe,
  skip,
} = apiFixtures;
