import { test as baseTest } from '@playwright/test';
import { createClient } from '@conac/playwright-common';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { LoginPage } from '@conac/mfid-login';
import { HeadersPage } from '@/pages/headers-page';
import { HomePage } from '@/pages/home-page';
import { CarryForwardPage } from '@/pages/pre-settings/carry-forward-page';
import { ExchangeRatesPage } from '@/pages/pre-settings/exchange-rates-page';
import { AssignedConsolidatedAccountPage } from '@/pages/pre-settings/assigned-consolidated-account-page';
import { ConsolidationPackagePage } from '@/pages/group-companies-financial-report/consolidation-package-page';
import { FileImportSettingsPage } from '@/pages/group-companies-financial-report/file-import-settings-page';
import { ConsolidationJournalsPage } from '@/pages/consolidation-process/consolidation-journals-page';
import { ConsolidationWorksheetPage } from '@/pages/consolidation-reports/consolidation-worksheet-page';
import { CompaniesPage } from '@/pages/master/companies-page';
import { ConsolidatedAccountsPage } from '@/pages/master/consolidated-accounts-page';
import { ConsolidationAccountingUnitsPage } from '@/pages/setting/consolidation-accounting-units-page';
import { ConsolidationJournalTypesPage } from '@/pages/master/consolidation-journal-types-page';
import { SegmentsPage } from '@/pages/master/segments-page';
import { OfficeMemberPage } from '@/pages/setting/office-member-page';
import { WorkClassificationPage } from '@/pages/setting/work-classification-page';
import { IntegrationServicePage } from '@/pages/setting/integration-service-page';

type PageFixtures = {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  loginPage: LoginPage;
  headersPage: HeadersPage;
  homePage: HomePage;
  carryForwardPage: CarryForwardPage;
  exchangeRatePage: ExchangeRatesPage;
  assignedConsolidatedAccountPage: AssignedConsolidatedAccountPage;
  consolidationPackagePage: ConsolidationPackagePage;
  consolidationImportSettingsPage: FileImportSettingsPage;
  consolidationJournalsPage: ConsolidationJournalsPage;
  consolidationWorksheetPage: ConsolidationWorksheetPage;
  companyPage: CompaniesPage;
  consolidatedAccountPage: ConsolidatedAccountsPage;
  consolidationJournalTypesPage: ConsolidationJournalTypesPage;
  segmentsPage: SegmentsPage;
  officeMemberPage: OfficeMemberPage;
  workClassificationPage: WorkClassificationPage;
  integrationServicePage: IntegrationServicePage;
  consolidationAccountingUnitsPage: ConsolidationAccountingUnitsPage;
};

const pageFixtures = baseTest.extend<PageFixtures>({
  apolloClient: async ({ page }, use) => {
    const cookies = await page.context().cookies();
    const client = createClient(cookies);
    await use(client);
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  headersPage: async ({ page }, use) => {
    await use(new HeadersPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  carryForwardPage: async ({ page }, use) => {
    await use(new CarryForwardPage(page));
  },

  exchangeRatePage: async ({ page }, use) => {
    await use(new ExchangeRatesPage(page));
  },

  assignedConsolidatedAccountPage: async ({ page }, use) => {
    await use(new AssignedConsolidatedAccountPage(page));
  },

  consolidationPackagePage: async ({ page }, use) => {
    await use(new ConsolidationPackagePage(page));
  },

  consolidationImportSettingsPage: async ({ page }, use) => {
    await use(new FileImportSettingsPage(page));
  },

  consolidationJournalsPage: async ({ page }, use) => {
    await use(new ConsolidationJournalsPage(page));
  },

  consolidationWorksheetPage: async ({ page }, use) => {
    await use(new ConsolidationWorksheetPage(page));
  },

  companyPage: async ({ page }, use) => {
    await use(new CompaniesPage(page));
  },

  consolidatedAccountPage: async ({ page }, use) => {
    await use(new ConsolidatedAccountsPage(page));
  },

  consolidationJournalTypesPage: async ({ page }, use) => {
    await use(new ConsolidationJournalTypesPage(page));
  },

  segmentsPage: async ({ page }, use) => {
    await use(new SegmentsPage(page));
  },

  officeMemberPage: async ({ page }, use) => {
    await use(new OfficeMemberPage(page));
  },

  consolidationAccountingUnitsPage: async ({ page }, use) => {
    await use(new ConsolidationAccountingUnitsPage(page));
  },

  workClassificationPage: async ({ page }, use) => {
    await use(new WorkClassificationPage(page));
  },

  integrationServicePage: async ({ page }, use) => {
    await use(new IntegrationServicePage(page));
  },
});

export const test = pageFixtures;
export const {
  expect,
  use,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  describe,
  skip,
} = pageFixtures;
