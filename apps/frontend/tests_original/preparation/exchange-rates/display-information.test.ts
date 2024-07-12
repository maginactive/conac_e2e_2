import {
  beforeEach,
  describe,
  expect,
  test,
  use,
} from '@/fixtures/page-fixtures';
import { FULL_PERMISSION_USER } from '@/constants/auth';
import {
  ConsolidationAccountingUnitsDocument,
  ConsolidationAccountingUnitsQuery,
  ConsolidationAccountingUnitsQueryVariables,
  ExchangeRatesDocument,
  ExchangeRatesQuery,
  ExchangeRatesQueryVariables,
} from '@conac/graphql-schema';

use({
  storageState: FULL_PERMISSION_USER,
});

describe('DISPLAY EXCHANGE RATES PAGE INFORMATION', () => {
  beforeEach(async ({ exchangeRatePage, page }) => {
    await test.step('Go to Exchange Rates screen', async () => {
      await exchangeRatePage.goto();
      await expect(page).toHaveURL(new RegExp('/exchange_rates'));
    });
  });

  test('C78840 Verify show company abbreviation & company name in exchange rate list', async ({
    exchangeRatePage,
    apolloClient,
  }) => {
    await test.step('Verify display company abbreviation & company name in data row', async () => {
      const currentCAUnitQuery = await apolloClient.query<
        ConsolidationAccountingUnitsQuery,
        ConsolidationAccountingUnitsQueryVariables
      >({
        query: ConsolidationAccountingUnitsDocument,
      });
      const id = currentCAUnitQuery.data.office.consolidationAccountingUnits
        .filter((unit) => unit.nameJa == 'Actual financial results for 2023')
        .map((unit) => unit.id)
        .at(0);

      const exchangeRateQuery = await apolloClient.query<
        ExchangeRatesQuery,
        ExchangeRatesQueryVariables
      >({
        query: ExchangeRatesDocument,
        variables: {
          id: `${id}`,
        },
      });
      const nameJa =
        exchangeRateQuery.data.consolidationAccountingUnit.exchangeRates.at(0)
          .company.nameJa;
      const abbreviation =
        exchangeRateQuery.data.consolidationAccountingUnit.exchangeRates.at(0)
          .company.abbreviation;
      const companyName = abbreviation + ' ' + nameJa;
      await exchangeRatePage.verifyCompanyDisplayNameWithAbbreviation(
        companyName
      );
    });
  });
});
