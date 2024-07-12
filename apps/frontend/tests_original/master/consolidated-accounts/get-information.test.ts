import {
  beforeEach,
  describe,
  expect,
  test,
  use,
} from '@/fixtures/page-fixtures';
import { FULL_PERMISSION_USER } from '@/constants/auth';
import { randomString } from '@conac/utils';
import {
  ConsolidatedAccountsDocument,
  ConsolidatedAccountsQuery,
  ConsolidatedAccountsQueryVariables,
  DeleteConsolidatedAccountDocument,
  DeleteConsolidatedAccountMutation,
  DeleteConsolidatedAccountMutationVariables,
} from '@conac/graphql-schema';

use({
  storageState: FULL_PERMISSION_USER,
});

describe('VERIFY INFORMATION OF CONSOLIDATED ACCOUNTS', () => {
  beforeEach(async ({ consolidatedAccountPage, page }) => {
    await test.step('Go to Consolidated Accounts screen', async () => {
      await consolidatedAccountPage.goto();
      await expect(page).toHaveURL(new RegExp('/consolidated_accounts'));
      await page.waitForLoadState();
    });
  });

  test('C75761 Verify date time fields in list of consolidated accounts', async ({
    apolloClient,
    page,
    consolidatedAccountPage,
  }) => {
    await test.step('Prepare test data', async () => {
      const resQuery = await apolloClient.query<
        ConsolidatedAccountsQuery,
        ConsolidatedAccountsQueryVariables
      >({
        query: ConsolidatedAccountsDocument,
      });
      const id = resQuery.data.office.consolidatedAccounts
        .filter((account) => account.code.code == '9999')
        .map((account) => account.id)
        .at(0);

      await apolloClient.mutate<
        DeleteConsolidatedAccountMutation,
        DeleteConsolidatedAccountMutationVariables
      >({
        mutation: DeleteConsolidatedAccountDocument,
        variables: {
          input: {
            id: `${id}`,
          },
        },
      });
    });

    await test.step('Create new consolidated account', async () => {
      await consolidatedAccountPage.createNewAccount(
        '9999',
        '固定資産',
        'testJP',
        'testEN',
        'HR',
        'NEGATIVE',
        'testDes'
      );
    });

    let createdTime: string;
    let updatedTime: string;

    await test.step('Verify date time of the created consolidated account', async () => {
      await page.getByRole('row', { name: '9999' }).getByLabel('Edit').focus();
      createdTime = await page
        .getByRole('row', { name: '9999' })
        .getByRole('cell')
        .nth(6)
        .innerText();
      updatedTime = await page
        .getByRole('row', { name: '9999' })
        .getByRole('cell')
        .nth(7)
        .innerText();
      expect(createdTime).toEqual(updatedTime);
    });
  });

  test('C75762 Verify date time fields for updated consolidated account', async ({
    page,
    consolidatedAccountPage,
  }) => {
    let createdTime: string;
    let updatedTime: string;

    await test.step('Get the date time of created consolidated account', async () => {
      createdTime = await page
        .getByRole('row', { name: '711200' })
        .getByRole('cell')
        .nth(6)
        .innerText();
      updatedTime = await page
        .getByRole('row', { name: '711200' })
        .getByRole('cell')
        .nth(7)
        .innerText();

      expect(createdTime).toEqual(updatedTime);
    });

    const randDesc = await randomString(10);
    await test.step('Update the created consolidated accounts', async () => {
      await consolidatedAccountPage.updateNewAccount('711200', {
        description: randDesc,
      });
    });

    await test.step('Verify the updated consolidated account created time and updated time', async () => {
      const newCreatedTime = await page
        .getByRole('row', { name: '711200' })
        .getByRole('cell')
        .nth(6)
        .innerText();
      const newUpdatedTime = await page
        .getByRole('row', { name: '711200' })
        .getByRole('cell')
        .nth(7)
        .innerText();

      expect(createdTime).toEqual(newCreatedTime);
      expect(updatedTime).not.toEqual(newUpdatedTime);
    });
  });
});
