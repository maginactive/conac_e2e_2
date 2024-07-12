import {
  beforeEach,
  describe,
  expect,
  test,
  use,
} from '@/fixtures/page-fixtures';
import { FULL_PERMISSION_USER } from '@/constants/auth';
import {
  CompaniesDocument,
  CompaniesQuery,
  CompaniesQueryVariables,
  ConsolidationAccountingUnitsDocument,
  ConsolidationAccountingUnitsQuery,
  ConsolidationAccountingUnitsQueryVariables,
} from '@conac/graphql-schema';

use({
  storageState: FULL_PERMISSION_USER,
});

describe('DISPLAY CONSOLIDATION ACCOUNTING UNITS PAGE INFORMATION', () => {
  beforeEach(async ({ consolidationAccountingUnitsPage, page }) => {
    await test.step('Go to Consolidation Accounting Units screen', async () => {
      await consolidationAccountingUnitsPage.goto();
      await expect(page).toHaveURL(
        new RegExp('/consolidation_accounting_units')
      );
    });
  });

  test('C78841 Verify company abbreviation & company name in consolidation account unit new', async ({
    consolidationAccountingUnitsPage,
    apolloClient,
  }) => {
    await test.step('Click on New button', async () => {
      await consolidationAccountingUnitsPage.clickOnNewButton();
    });
    await test.step('Verify display company abbreviation & company name in list consolidated company', async () => {
      const companyQuery = await apolloClient.query<
        CompaniesQuery,
        CompaniesQueryVariables
      >({
        query: CompaniesDocument,
      });
      const nameJa = companyQuery.data.office.companies.at(0).nameJa;
      const abbreviation =
        companyQuery.data.office.companies.at(0).abbreviation;
      const companyName = abbreviation + ' ' + nameJa;
      await consolidationAccountingUnitsPage.verifyCompanyAbbreviationWithName(
        companyName
      );
    });
  });

  test('C78842 Verify company abbreviation & company name in consolidation account unit copy new', async ({
    consolidationAccountingUnitsPage,
    apolloClient,
  }) => {
    await test.step('Click on New button', async () => {
      await consolidationAccountingUnitsPage.clickOnCopyNewButtonOfFirstItem();
    });

    await test.step('Verify display company abbreviation & company name in list consolidated company', async () => {
      const companyQuery = await apolloClient.query<
        CompaniesQuery,
        CompaniesQueryVariables
      >({
        query: CompaniesDocument,
      });
      const nameJa = companyQuery.data.office.companies.at(0).nameJa;
      const abbreviation =
        companyQuery.data.office.companies.at(0).abbreviation;
      const companyName = abbreviation + ' ' + nameJa;
      await consolidationAccountingUnitsPage.verifyCompanyAbbreviationWithName(
        companyName
      );
    });
  });

  test('C78843 Verify company abbreviation & company name in consolidation account unit detail (update) page', async ({
    consolidationAccountingUnitsPage,
    apolloClient,
  }) => {
    await test.step('Click on New button', async () => {
      await consolidationAccountingUnitsPage.clickOnEditButtonOfFirstItem();
    });

    await test.step('Verify display company abbreviation & company name in list consolidated company', async () => {
      const companyQuery = await apolloClient.query<
        CompaniesQuery,
        CompaniesQueryVariables
      >({
        query: CompaniesDocument,
      });
      const nameJa = companyQuery.data.office.companies.at(0).nameJa;
      const abbreviation =
        companyQuery.data.office.companies.at(0).abbreviation;
      const companyName = abbreviation + ' ' + nameJa;
      await consolidationAccountingUnitsPage.verifyCompanyAbbreviationWithName(
        companyName
      );
    });
  });
});
