import { FULL_PERMISSION_USER } from '@/constants/auth';
import { describe, expect, test, use } from '@/fixtures/api-fixtures';
import {
  AmountType,
  ConsolidatedAccountsDocument,
  ConsolidatedAccountsQuery,
  ConsolidatedAccountsQueryVariables,
  ConversionType,
  CreateConsolidatedAccountDocument,
  CreateConsolidatedAccountMutation,
  CreateConsolidatedAccountMutationVariables,
  DeleteConsolidatedAccountDocument,
  DeleteConsolidatedAccountMutation,
  DeleteConsolidatedAccountMutationVariables,
  UpdateConsolidatedAccountDocument,
  UpdateConsolidatedAccountMutation,
  UpdateConsolidatedAccountMutationVariables,
} from '@conac/graphql-schema';
import { randomString } from '@conac/utils';

describe('VERIFY INFORMATION OF CONSOLIDATED ACCOUNTS', () => {
  use({
    storageState: FULL_PERMISSION_USER,
  });
  test('C75759 Verify date time fields in list of consolidated accounts', async ({
    apolloClient,
  }) => {
    await test.step('Prepare data for test', async () => {
      const resQuery = await apolloClient.query<
        ConsolidatedAccountsQuery,
        ConsolidatedAccountsQueryVariables
      >({
        query: ConsolidatedAccountsDocument,
      });
      const id = resQuery.data.office.consolidatedAccounts
        .filter((account) => account.code.code == 'test4132')
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

    let createdId: string;
    let createdDate: string;
    let updatedDate: string;

    await test.step('Create a consolidated account', async () => {
      await apolloClient.mutate<
        CreateConsolidatedAccountMutation,
        CreateConsolidatedAccountMutationVariables
      >({
        mutation: CreateConsolidatedAccountDocument,
        variables: {
          input: {
            code: 'test4132',
            amountType: AmountType.Positive,
            consolidatedAccountSubCategoryId:
              'Q29uc29saWRhdGVkQWNjb3VudFN1YkNhdGVnb3J5OjI',
            conversionType: ConversionType.Ar,
            nameJa: 'test4132JP',
            nameEn: 'test4132EN',
            description: 'test4132DESC',
          },
        },
      });

      const resQuery = await apolloClient.query<
        ConsolidatedAccountsQuery,
        ConsolidatedAccountsQueryVariables
      >({
        query: ConsolidatedAccountsDocument,
      });

      createdId = resQuery.data.office.consolidatedAccounts
        .filter((account) => account.code.code == 'test4132')
        .map((account) => account.id)
        .at(0);

      createdDate = resQuery.data.office.consolidatedAccounts
        .filter((account) => account.code.code == 'test4132')
        .map((account) => account.createdAt)
        .at(0);

      updatedDate = resQuery.data.office.consolidatedAccounts
        .filter((account) => account.code.code == 'test4132')
        .map((account) => account.updatedAt)
        .at(0);
    });

    await test.step('Verify created date and updated date after creating consolidated account', async () => {
      expect(createdDate).toEqual(updatedDate);
    });

    let newCreatedDate: string;
    let newUpdatedDate: string;

    const randDesc = await randomString(10);

    await test.step('Update the created consolidated account', async () => {
      await apolloClient.mutate<
        UpdateConsolidatedAccountMutation,
        UpdateConsolidatedAccountMutationVariables
      >({
        mutation: UpdateConsolidatedAccountDocument,
        variables: {
          input: {
            id: `${createdId}`,
            description: `${randDesc}`,
            nameJa: 'test4132JP',
          },
        },
      });

      const resQuery = await apolloClient.query<
        ConsolidatedAccountsQuery,
        ConsolidatedAccountsQueryVariables
      >({
        query: ConsolidatedAccountsDocument,
      });

      newCreatedDate = resQuery.data.office.consolidatedAccounts
        .filter((account) => account.code.code == 'test4132')
        .map((account) => account.createdAt)
        .at(0);

      newUpdatedDate = resQuery.data.office.consolidatedAccounts
        .filter((account) => account.code.code == 'test4132')
        .map((account) => account.updatedAt)
        .at(0);
    });
    await test.step('Verify created date and updated date after updating consolidated account', async () => {
      expect(createdDate).toEqual(newCreatedDate);
      expect(updatedDate).not.toEqual(newUpdatedDate);
    });
  });
});
