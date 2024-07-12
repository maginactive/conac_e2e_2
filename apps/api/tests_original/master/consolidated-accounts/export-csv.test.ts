import { FULL_PERMISSION_USER, SYSTEM_ADMIN } from '@/constants/auth';
import { describe, expect, test, use } from '@/fixtures/api-fixtures';
import {
  CreateConsolidatedAccountCsvExportUrlDocument,
  CreateConsolidatedAccountCsvExportUrlMutation,
  CreateConsolidatedAccountCsvExportUrlMutationVariables,
} from '@conac/graphql-schema';

describe('EXPORT CONSOLIDATED ACCOUNTS MASTER AS CSV FILE', () => {
  use({
    storageState: FULL_PERMISSION_USER,
  });

  test('C75752 Export consolidate account master information', async ({
    apolloClient,
  }) => {
    await test.step('Call API export consolidate account master information', async () => {
      const res = await apolloClient.mutate<
        CreateConsolidatedAccountCsvExportUrlMutation,
        CreateConsolidatedAccountCsvExportUrlMutationVariables
      >({
        mutation: CreateConsolidatedAccountCsvExportUrlDocument,
      });
      expect(
        res.data.createConsolidatedAccountCsvExportUrl.downloadUrl
      ).toContain('csv');
    });
  });
});

describe('EXPORT CONSOLIDATED ACCOUNTS MASTER AS CSV FILE WITHOUT PERMISSION', () => {
  use({
    storageState: SYSTEM_ADMIN,
  });

  test('C75754 Verify export with user role is not in consolidation accountant role(連結担当者)', async ({
    apolloClient,
  }) => {
    await test.step('Call API export consolidated accounts information without permission', async () => {
      const res = await apolloClient.mutate<
        CreateConsolidatedAccountCsvExportUrlMutation,
        CreateConsolidatedAccountCsvExportUrlMutationVariables
      >({
        mutation: CreateConsolidatedAccountCsvExportUrlDocument,
      });
      expect(res.errors.at(0).message).toEqual('Denied');
    });
  });
});
