import { FULL_PERMISSION_USER, SYSTEM_ADMIN } from '@/constants/auth';
import { describe, expect, test, use } from '@/fixtures/api-fixtures';
import {
  CreateCompanyMasterCsvExportUrlDocument,
  CreateCompanyMasterCsvExportUrlMutation,
  CreateCompanyMasterCsvExportUrlMutationVariables,
} from '@conac/graphql-schema';

describe('EXPORT COMPANIES MASTER AS CSV FILE', () => {
  use({
    storageState: FULL_PERMISSION_USER,
  });
  test('C75325 Export company master information as CSV file @smoke', async ({
    apolloClient,
  }) => {
    await test.step('Call API export company master information', async () => {
      const res = await apolloClient.mutate<
        CreateCompanyMasterCsvExportUrlMutation,
        CreateCompanyMasterCsvExportUrlMutationVariables
      >({
        mutation: CreateCompanyMasterCsvExportUrlDocument,
      });
      expect(res.data.createCompanyMasterCsvExportUrl.downloadUrl).toContain(
        'csv'
      );
    });
  });
});

describe('EXPORT COMPANY MASTER BY ADMIN SYSTEM ROLE', () => {
  use({
    storageState: SYSTEM_ADMIN,
  });
  test('C75170 Verify export with user role is not in consolidation accountant role(連結担当者)', async ({
    apolloClient,
  }) => {
    await test.step('Call API export company master information without permission', async () => {
      const res = await apolloClient.mutate<
        CreateCompanyMasterCsvExportUrlMutation,
        CreateCompanyMasterCsvExportUrlMutationVariables
      >({
        mutation: CreateCompanyMasterCsvExportUrlDocument,
      });
      expect(res.errors.at(0).message).toEqual('Denied');
    });
  });
});
