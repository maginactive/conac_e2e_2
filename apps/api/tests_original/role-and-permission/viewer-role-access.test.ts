import { VIEWER_USER } from '@/constants/auth';
import {
  beforeEach,
  describe,
  expect,
  skip,
  test,
  use,
} from '@/fixtures/api-fixtures';
import {
  AllConsolidationJournalsDocument,
  AllConsolidationJournalsQuery,
  AllConsolidationJournalsQueryVariables,
  AmountType,
  AssignedConsolidatedAccountsDocument,
  AssignedConsolidatedAccountsQuery,
  AssignedConsolidatedAccountsQueryVariables,
  BalanceSheetDocument,
  BalanceSheetQuery,
  BalanceSheetQueryVariables,
  BsConsolidationWorksheetBalanceDocument,
  BsConsolidationWorksheetBalanceQuery,
  BsConsolidationWorksheetBalanceQueryVariables,
  CarryForwardExecutingDocument,
  CarryForwardExecutingInNextConsolidationAccountingUnitDocument,
  CarryForwardExecutingInNextConsolidationAccountingUnitQuery,
  CarryForwardExecutingInNextConsolidationAccountingUnitQueryVariables,
  CarryForwardExecutingQuery,
  CarryForwardExecutingQueryVariables,
  CarryForwardPreviewDocument,
  CarryForwardPreviewQuery,
  CarryForwardPreviewQueryVariables,
  CompaniesDocument,
  CompaniesQuery,
  CompaniesQueryVariables,
  ConsolidatedAccountDocument,
  ConsolidatedAccountImportSettingDocument,
  ConsolidatedAccountImportSettingQuery,
  ConsolidatedAccountImportSettingQueryVariables,
  ConsolidatedAccountQuery,
  ConsolidatedAccountQueryVariables,
  ConsolidatedAccountsDocument,
  ConsolidatedAccountsQuery,
  ConsolidatedAccountsQueryVariables,
  ConsolidationAccountingUnitNewDocument,
  ConsolidationAccountingUnitNewQuery,
  ConsolidationAccountingUnitNewQueryVariables,
  ConsolidationAccountingUnitOperationHistoriesDocument,
  ConsolidationAccountingUnitOperationHistoriesQuery,
  ConsolidationAccountingUnitOperationHistoriesQueryVariables,
  ConsolidationAccountingUnitsCopyNewDocument,
  ConsolidationAccountingUnitsCopyNewQuery,
  ConsolidationAccountingUnitsCopyNewQueryVariables,
  ConsolidationAccountingUnitsDetailDocument,
  ConsolidationAccountingUnitsDetailQuery,
  ConsolidationAccountingUnitsDetailQueryVariables,
  ConsolidationAccountingUnitsDocument,
  ConsolidationAccountingUnitsQuery,
  ConsolidationAccountingUnitsQueryVariables,
  ConsolidationJournalImportSettingDocument,
  ConsolidationJournalImportSettingQuery,
  ConsolidationJournalImportSettingQueryVariables,
  ConsolidationJournalsDocument,
  ConsolidationJournalsQuery,
  ConsolidationJournalsQueryVariables,
  ConsolidationJournalTypesDocument,
  ConsolidationJournalTypesQuery,
  ConsolidationJournalTypesQueryVariables,
  ConsolidationPackageImportSettingsDocument,
  ConsolidationPackageImportSettingsQuery,
  ConsolidationPackageImportSettingsQueryVariables,
  ConsolidationPackageOperationHistoryDocument,
  ConsolidationPackageOperationHistoryQuery,
  ConsolidationPackageOperationHistoryQueryVariables,
  ConsolidationPackagesDocument,
  ConsolidationPackagesQuery,
  ConsolidationPackagesQueryVariables,
  ConversionType,
  CreateCompanyDocument,
  CreateCompanyMasterCsvExportUrlDocument,
  CreateCompanyMasterCsvExportUrlMutation,
  CreateCompanyMasterCsvExportUrlMutationVariables,
  CreateCompanyMutation,
  CreateCompanyMutationVariables,
  CreateConsolidatedAccountCsvExportUrlDocument,
  CreateConsolidatedAccountCsvExportUrlMutation,
  CreateConsolidatedAccountCsvExportUrlMutationVariables,
  CreateConsolidatedAccountDocument,
  CreateConsolidatedAccountMutation,
  CreateConsolidatedAccountMutationVariables,
  CreateConsolidationAccountingUnitDocument,
  CreateConsolidationAccountingUnitMutation,
  CreateConsolidationAccountingUnitMutationVariables,
  CreateConsolidationJournalCsvExportUrlDocument,
  CreateConsolidationJournalCsvExportUrlMutation,
  CreateConsolidationJournalCsvExportUrlMutationVariables,
  CreateConsolidationJournalTypeDocument,
  CreateConsolidationJournalTypeMutation,
  CreateConsolidationJournalTypeMutationVariables,
  CreateConsolidationPackageImportFileUploadUrlDocument,
  CreateConsolidationPackageImportFileUploadUrlMutation,
  CreateConsolidationPackageImportFileUploadUrlMutationVariables,
  CreateConsolidationPackageImportSettingDocument,
  CreateConsolidationPackageImportSettingMutation,
  CreateConsolidationPackageImportSettingMutationVariables,
  CreateConsolidationWorksheetCsvExportUrlDocument,
  CreateConsolidationWorksheetCsvExportUrlMutation,
  CreateConsolidationWorksheetCsvExportUrlMutationVariables,
  CreateOfficeMemberDocument,
  CreateOfficeMemberMutation,
  CreateOfficeMemberMutationVariables,
  CreateSegmentDocument,
  CreateSegmentMutation,
  CreateSegmentMutationVariables,
  Currency,
  DeleteConsolidatedAccountDocument,
  DeleteConsolidatedAccountMutation,
  DeleteConsolidatedAccountMutationVariables,
  DeleteConsolidationJournalTypeDocument,
  DeleteConsolidationJournalTypeMutation,
  DeleteConsolidationJournalTypeMutationVariables,
  DeleteOfficeMemberDocument,
  DeleteOfficeMemberMutation,
  DeleteOfficeMemberMutationVariables,
  ExchangeRatesDocument,
  ExchangeRatesQuery,
  ExchangeRatesQueryVariables,
  ImportConsolidationPackageDocument,
  ImportConsolidationPackageMutation,
  ImportConsolidationPackageMutationVariables,
  ImportingConsolidationPackagesDocument,
  ImportingConsolidationPackagesQuery,
  ImportingConsolidationPackagesQueryVariables,
  OfficeMemberNewDocument,
  OfficeMemberNewQuery,
  OfficeMemberNewQueryVariables,
  OfficeMembersDocument,
  OfficeMembersQuery,
  OfficeMembersQueryVariables,
  OpeningJournalType,
  PlConsolidationWorksheetBalanceDocument,
  PlConsolidationWorksheetBalanceQuery,
  PlConsolidationWorksheetBalanceQueryVariables,
  ProfitAndLossDocument,
  ProfitAndLossQuery,
  ProfitAndLossQueryVariables,
  ReservedConsolidatedAccountsDocument,
  ReservedConsolidatedAccountsQuery,
  ReservedConsolidatedAccountsQueryVariables,
  ResetConsolidationPackageDocument,
  ResetConsolidationPackageMutation,
  ResetConsolidationPackageMutationVariables,
  SegmentDocument,
  SegmentQuery,
  SegmentQueryVariables,
  SegmentsDocument,
  SegmentsQuery,
  SegmentsQueryVariables,
  TrialBalanceDocument,
  TrialBalanceQuery,
  TrialBalanceQueryVariables,
  UpdateConsolidatedAccountDocument,
  UpdateConsolidatedAccountMutation,
  UpdateConsolidatedAccountMutationVariables,
  UpdateConsolidationAccountingUnitDocument,
  UpdateConsolidationAccountingUnitMutation,
  UpdateConsolidationAccountingUnitMutationVariables,
  UpdateConsolidationJournalTypeDocument,
  UpdateConsolidationJournalTypeMutation,
  UpdateConsolidationJournalTypeMutationVariables,
  UpdateConsolidationJournalTypeSortOrderDocument,
  UpdateConsolidationJournalTypeSortOrderMutation,
  UpdateConsolidationJournalTypeSortOrderMutationVariables,
  UpdateExchangeRatesDocument,
  UpdateExchangeRatesMutation,
  UpdateExchangeRatesMutationVariables,
  UpdateOfficeMemberDocument,
  UpdateOfficeMemberMutation,
  UpdateOfficeMemberMutationVariables,
  UpdateOrCreateConsolidationJournalImportSettingDocument,
  UpdateOrCreateConsolidationJournalImportSettingMutation,
  UpdateOrCreateConsolidationJournalImportSettingMutationVariables,
  UpdatePlBalanceAdjustmentDocument,
  UpdatePlBalanceAdjustmentMutation,
  UpdatePlBalanceAdjustmentMutationVariables,
  UpdateReservedConsolidatedAccountsDocument,
  UpdateReservedConsolidatedAccountsMutation,
  UpdateReservedConsolidatedAccountsMutationVariables,
  UpdateSegmentDocument,
  UpdateSegmentMutation,
  UpdateSegmentMutationVariables,
  UpsertConsolidatedAccountImportSettingDocument,
  UpsertConsolidatedAccountImportSettingMutation,
  UpsertConsolidatedAccountImportSettingMutationVariables,
  WorkClassificationsDocument,
  WorkClassificationsQuery,
  WorkClassificationsQueryVariables,
} from '@conac/graphql-schema';
import { randomDateString, randomNumber, randomString } from '@conac/utils';

class WorkClassificationsMenuQueryVariables {}

describe('VIEWER ROLE API TESTING', () => {
  use({
    storageState: VIEWER_USER,
  });

  let conacId: string;
  let randString: string;

  beforeEach(async ({ apolloClient }) => {
    const currentCAUnitQuery = await apolloClient.query<
      ConsolidationAccountingUnitsQuery,
      ConsolidationAccountingUnitsQueryVariables
    >({
      query: ConsolidationAccountingUnitsDocument,
    });
    conacId = currentCAUnitQuery.data.office.consolidationAccountingUnits
      .filter((unit) => unit.nameJa == 'Actual financial results for 2023')
      .map((unit) => unit.id)
      .at(0);
  });

  test('C102115 Verify viewer role call API WorkClassifications', async ({
    apolloClient,
  }) => {
    await test.step('Call API WorkClassifications', async () => {
      const res = await apolloClient.query<
        WorkClassificationsQuery,
        WorkClassificationsMenuQueryVariables
      >({
        query: WorkClassificationsDocument,
      });
      expect(res.data.office.workClassifications.length).toBeGreaterThan(0);
    });
  });

  test('C102116 Verify viewer role call API ConsolidationAccountingUnits', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidationAccountingUnits', async () => {
      const res = await apolloClient.query<
        ConsolidationAccountingUnitsQuery,
        ConsolidationAccountingUnitsQueryVariables
      >({
        query: ConsolidationAccountingUnitsDocument,
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102117 Verify viewer role call API CarryForwardPreview', async ({
    apolloClient,
  }) => {
    // add test step of preparation
    await test.step('Call API CarryForwardPreview', async () => {
      const res = await apolloClient.query<
        CarryForwardPreviewQuery,
        CarryForwardPreviewQueryVariables
      >({
        query: CarryForwardPreviewDocument,
        variables: {
          id: conacId,
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102118 Verify viewer role call API ImportingConsolidationPackages', async ({
    apolloClient,
  }) => {
    // add test step of preparation
    await test.step('Call API ImportingConsolidationPackages', async () => {
      const res = await apolloClient.query<
        ImportingConsolidationPackagesQuery,
        ImportingConsolidationPackagesQueryVariables
      >({
        query: ImportingConsolidationPackagesDocument,
        variables: {
          consolidationAccountingUnitId: conacId,
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102120 Verify viewer role call API CarryForwardExecuting', async ({
    apolloClient,
  }) => {
    // add test step of preparation
    await test.step('Call API CarryForwardExecuting', async () => {
      const res = await apolloClient.query<
        CarryForwardExecutingQuery,
        CarryForwardExecutingQueryVariables
      >({
        query: CarryForwardExecutingDocument,
        variables: {
          id: conacId,
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102121 Verify viewer role call API ExchangeRates', async ({
    apolloClient,
  }) => {
    // add test step of preparation
    await test.step('Call API ExchangeRates', async () => {
      const res = await apolloClient.query<
        ExchangeRatesQuery,
        ExchangeRatesQueryVariables
      >({
        query: ExchangeRatesDocument,
        variables: { id: conacId },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102122 Verify viewer role call API UpdateExchangeRates', async ({
    apolloClient,
  }) => {
    // add test step of preparation
    await test.step('Call API UpdateExchangeRates', async () => {
      const resExchangeRate = await apolloClient.query<
        ExchangeRatesQuery,
        ExchangeRatesQueryVariables
      >({
        query: ExchangeRatesDocument,
        variables: { id: conacId },
      });
      const exchangeRateId =
        resExchangeRate.data.consolidationAccountingUnit.exchangeRates
          .filter(
            (exchangeRate) => exchangeRate.company.abbreviation == 'APPLE'
          )
          .map((exchangeRate) => exchangeRate.id)
          .at(0);

      const randNum = await randomNumber(1, 1000);
      const res = await apolloClient.mutate<
        UpdateExchangeRatesMutation,
        UpdateExchangeRatesMutationVariables
      >({
        mutation: UpdateExchangeRatesDocument,
        variables: {
          input: {
            exchangeRateInputs: [
              {
                averageRate: randNum,
                currentRate: randNum,
                id: exchangeRateId,
              },
            ],
            consolidationAccountingUnitId: conacId,
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102123 Verify viewer role call API AssignedConsolidatedAccounts', async ({
    apolloClient,
  }) => {
    // add test step of preparation
    await test.step('Call API AssignedConsolidatedAccounts', async () => {
      const res = await apolloClient.query<
        AssignedConsolidatedAccountsQuery,
        AssignedConsolidatedAccountsQueryVariables
      >({
        query: AssignedConsolidatedAccountsDocument,
        variables: { id: conacId },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102124 Verify viewer role call API UpdateAssignedConsolidatedAccounts', async ({
    apolloClient,
  }) => {
    // add test step of preparation
    await test.step('Call API UpdateAssignedConsolidatedAccounts', async () => {
      const res = await apolloClient.query<
        AssignedConsolidatedAccountsQuery,
        AssignedConsolidatedAccountsQueryVariables
      >({
        query: AssignedConsolidatedAccountsDocument,
        variables: { id: conacId },
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102125 Verify viewer role call API ConsolidationPackages', async ({
    apolloClient,
  }) => {
    // add test step of preparation
    await test.step('Call API ConsolidationPackages', async () => {
      const res = await apolloClient.query<
        ConsolidationPackagesQuery,
        ConsolidationPackagesQueryVariables
      >({
        query: ConsolidationPackagesDocument,
        variables: { id: conacId },
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102126 Verify viewer role call API TrialBalance', async ({
    apolloClient,
  }) => {
    // add test step of preparation
    const resConsolidationPackage = await apolloClient.query<
      ConsolidationPackagesQuery,
      ConsolidationPackagesQueryVariables
    >({
      query: ConsolidationPackagesDocument,
      variables: { id: conacId },
    });
    const packageId =
      resConsolidationPackage.data.consolidationAccountingUnit.submissionRequiredConsolidationPackages.at(
        0
      ).id;

    await test.step('Call API TrialBalance', async () => {
      const res = await apolloClient.query<
        TrialBalanceQuery,
        TrialBalanceQueryVariables
      >({
        query: TrialBalanceDocument,
        variables: {
          id: packageId,
          consolidationAccountingUnitId: conacId,
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102127 Verify viewer role call API BalanceSheet', async ({
    apolloClient,
  }) => {
    // add test step of preparation
    const resConsolidationPackage = await apolloClient.query<
      ConsolidationPackagesQuery,
      ConsolidationPackagesQueryVariables
    >({
      query: ConsolidationPackagesDocument,
      variables: { id: conacId },
    });
    const packageId =
      resConsolidationPackage.data.consolidationAccountingUnit.submissionRequiredConsolidationPackages.at(
        0
      ).id;
    const companyAbb =
      resConsolidationPackage.data.consolidationAccountingUnit.submissionRequiredConsolidationPackages.at(
        0
      ).company.abbreviation;

    const companyId = (
      await apolloClient.query<CompaniesQuery, CompaniesQueryVariables>({
        query: CompaniesDocument,
      })
    ).data.office.companies
      .filter((id) => id.abbreviation == companyAbb)
      .map((id) => id.id)
      .at(0);

    await test.step('Call API BalanceSheet', async () => {
      const res = await apolloClient.query<
        BalanceSheetQuery,
        BalanceSheetQueryVariables
      >({
        query: BalanceSheetDocument,
        variables: {
          id: packageId,
          conacUnitId: conacId,
          companyId: companyId,
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102128 Verify viewer role call API ProfitAndLoss', async ({
    apolloClient,
  }) => {
    // add test step of preparation
    const resConsolidationPackage = await apolloClient.query<
      ConsolidationPackagesQuery,
      ConsolidationPackagesQueryVariables
    >({
      query: ConsolidationPackagesDocument,
      variables: { id: conacId },
    });
    const packageId =
      resConsolidationPackage.data.consolidationAccountingUnit.submissionRequiredConsolidationPackages.at(
        0
      ).id;
    const companyAbb =
      resConsolidationPackage.data.consolidationAccountingUnit.submissionRequiredConsolidationPackages.at(
        0
      ).company.abbreviation;

    const companyId = (
      await apolloClient.query<CompaniesQuery, CompaniesQueryVariables>({
        query: CompaniesDocument,
      })
    ).data.office.companies
      .filter((id) => id.abbreviation == companyAbb)
      .map((id) => id.id)
      .at(0);

    await test.step('Call API ProfitAndLoss', async () => {
      const res = await apolloClient.query<
        ProfitAndLossQuery,
        ProfitAndLossQueryVariables
      >({
        query: ProfitAndLossDocument,
        variables: {
          id: packageId,
          companyId: companyId,
          consolidationAccountingUnitId: conacId,
        },
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102129 Verify viewer role call API UpdatePlBalanceAdjustment', async ({
    apolloClient,
  }) => {
    await test.step('Call API UpdatePlBalanceAdjustment', async () => {
      const res = await apolloClient.mutate<
        UpdatePlBalanceAdjustmentMutation,
        UpdatePlBalanceAdjustmentMutationVariables
      >({
        mutation: UpdatePlBalanceAdjustmentDocument,
        variables: {
          input: {
            balanceAdjustments: [],
            clientMutationId: '',
            consolidationAccountingUnitId: conacId,
            financialStatementId: '',
          },
        },
      });
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102130 Verify viewer role call API ConsolidationPackageOperationHistory', async ({
    apolloClient,
  }) => {
    const resConsolidationPackage = await apolloClient.query<
      ConsolidationPackagesQuery,
      ConsolidationPackagesQueryVariables
    >({
      query: ConsolidationPackagesDocument,
      variables: { id: conacId },
    });
    const historyId =
      resConsolidationPackage.data.consolidationAccountingUnit.submissionRequiredConsolidationPackages.at(
        0
      ).id;
    await test.step('Call API ConsolidationPackageOperationHistory', async () => {
      const res = await apolloClient.query<
        ConsolidationPackageOperationHistoryQuery,
        ConsolidationPackageOperationHistoryQueryVariables
      >({
        query: ConsolidationPackageOperationHistoryDocument,
        variables: {
          consolidationAccountingUnitId: conacId,
          id: historyId,
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102131 Verify viewer role call API ResetConsolidationPackage', async ({
    apolloClient,
  }) => {
    const resConsolidationPackage = await apolloClient.query<
      ConsolidationPackagesQuery,
      ConsolidationPackagesQueryVariables
    >({
      query: ConsolidationPackagesDocument,
      variables: { id: conacId },
    });
    const packageId =
      resConsolidationPackage.data.consolidationAccountingUnit.submissionRequiredConsolidationPackages.at(
        0
      ).id;

    await test.step('Call API ResetConsolidationPackage', async () => {
      const res = await apolloClient.mutate<
        ResetConsolidationPackageMutation,
        ResetConsolidationPackageMutationVariables
      >({
        mutation: ResetConsolidationPackageDocument,
        variables: {
          input: {
            consolidationAccountingUnitId: conacId,
            consolidationPackageId: packageId,
            resetBalanceAdjustment: true,
            resetConsolidationPackage: false,
            resetTranslationAdjustment: false,
          },
        },
      });
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102132 Verify viewer role call API ConsolidationPackageImportSettings', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidationPackageImportSettings', async () => {
      const res = await apolloClient.query<
        ConsolidationPackageImportSettingsQuery,
        ConsolidationPackageImportSettingsQueryVariables
      >({
        query: ConsolidationPackageImportSettingsDocument,
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102133 Verify viewer role call API CreateConsolidationPackageImportSetting', async ({
    apolloClient,
  }) => {
    await test.step('Call API CreateConsolidationPackageImportSetting', async () => {
      randString = await randomString(5);
      const res = await apolloClient.mutate<
        CreateConsolidationPackageImportSettingMutation,
        CreateConsolidationPackageImportSettingMutationVariables
      >({
        mutation: CreateConsolidationPackageImportSettingDocument,
        variables: {
          input: {
            name: randString,
            trialBalanceImportSettings: [
              {
                accountCodeColumn: 'A',
                accountNameColumn: 'B',
                balanceColumn: 'C',
                endRow: 1,
                sheetName: 'test',
                startRow: 1,
              },
            ],
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102134 Verify viewer role call API CreateConsolidationPackageImportFileUploadUrl', async ({
    apolloClient,
  }) => {
    await test.step('Call API CreateConsolidationPackageImportFileUploadUrl', async () => {
      randString = await randomString(5);
      const res = await apolloClient.mutate<
        CreateConsolidationPackageImportFileUploadUrlMutation,
        CreateConsolidationPackageImportFileUploadUrlMutationVariables
      >({
        mutation: CreateConsolidationPackageImportFileUploadUrlDocument,
        variables: {
          input: {
            consolidationAccountingUnitId: conacId,
            fileName: '123',
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102135 Verify viewer role call API ImportConsolidationPackage', async ({
    apolloClient,
  }) => {
    await test.step('Call API ImportConsolidationPackage', async () => {
      randString = await randomString(5);
      const res = await apolloClient.mutate<
        ImportConsolidationPackageMutation,
        ImportConsolidationPackageMutationVariables
      >({
        mutation: ImportConsolidationPackageDocument,
        variables: {
          input: {
            consolidationAccountingUnitId: conacId,
            consolidationPackageId: '',
            consolidationPackageImportSettingId: '',
            subscriptionId: '',
            uploadedFileId: '',
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102137 Verify viewer role call API ConsolidationJournalTypes', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidationJournalTypes', async () => {
      const res = await apolloClient.query<
        ConsolidationJournalTypesQuery,
        ConsolidationJournalTypesQueryVariables
      >({
        query: ConsolidationJournalTypesDocument,
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102138 Verify viewer role call API AllConsolidationJournals', async ({
    apolloClient,
  }) => {
    await test.step('Call API AllConsolidationJournals', async () => {
      const res = await apolloClient.query<
        AllConsolidationJournalsQuery,
        AllConsolidationJournalsQueryVariables
      >({
        query: AllConsolidationJournalsDocument,
        variables: {
          id: conacId,
        },
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102139 Verify viewer role call API ConsolidationJournals', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidationJournalTypes', async () => {
      const resType = await apolloClient.query<
        ConsolidationJournalTypesQuery,
        ConsolidationJournalTypesQueryVariables
      >({
        query: ConsolidationJournalTypesDocument,
      });
      const typeId = resType.data.office.consolidationJournalTypes.at(0).id;
      const res = await apolloClient.query<
        ConsolidationJournalsQuery,
        ConsolidationJournalsQueryVariables
      >({
        query: ConsolidationJournalsDocument,
        variables: {
          consolidationAccountingUnitId: conacId,
          typeId: typeId,
        },
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102140 Verify viewer role call API ConsolidationJournalImportSetting', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidationJournalImportSetting', async () => {
      const resType = await apolloClient.query<
        ConsolidationJournalTypesQuery,
        ConsolidationJournalTypesQueryVariables
      >({
        query: ConsolidationJournalTypesDocument,
      });
      const typeId = resType.data.office.consolidationJournalTypes.at(0).id;
      const res = await apolloClient.query<
        ConsolidationJournalImportSettingQuery,
        ConsolidationJournalImportSettingQueryVariables
      >({
        query: ConsolidationJournalImportSettingDocument,
        variables: {
          consolidationAccountingUnitId: conacId,
          typeId: typeId,
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102141 Verify viewer role call API UpdateOrCreateConsolidationJournalImportSetting', async ({
    apolloClient,
  }) => {
    await test.step('Call API UpdateOrCreateConsolidationJournalImportSetting', async () => {
      const res = await apolloClient.mutate<
        UpdateOrCreateConsolidationJournalImportSettingMutation,
        UpdateOrCreateConsolidationJournalImportSettingMutationVariables
      >({
        mutation: UpdateOrCreateConsolidationJournalImportSettingDocument,
        variables: {
          input: {
            companyAbbreviationColumn: 'a',
            consolidatedAccountCodeColumn: 'b',
            consolidationAccountingUnitId: conacId,
            consolidationJournalGroupKeyColumn: 'c',
            id: 'Q29uc29saWRhdGlvbkpvdXJuYWxJbXBvcnRTZXR0aW5nOjY2OA', //hard code
            consolidationJournalTypeId:
              'Q29uc29saWRhdGlvbkpvdXJuYWxUeXBlOjQwNg',
            creditBalanceColumn: 'd',
            debitBalanceColumn: 'e',
            endRow: 1,
            remarkColumn: 'f',
            segmentAbbreviationColumn: 'g',
            sheetName: 'test',
            startRow: 1,
          },
        },
      });
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102142 Verify viewer role call API CreateConsolidationJournalCsvExportUrl', async ({
    apolloClient,
  }) => {
    await test.step('Call API CreateConsolidationJournalCsvExportUrl', async () => {
      const res = await apolloClient.mutate<
        CreateConsolidationJournalCsvExportUrlMutation,
        CreateConsolidationJournalCsvExportUrlMutationVariables
      >({
        mutation: CreateConsolidationJournalCsvExportUrlDocument,
        variables: {
          input: {
            consolidationAccountingUnitId: conacId,
          },
        },
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102143 Verify viewer role call API BSConsolidationWorksheetBalance', async ({
    apolloClient,
  }) => {
    await test.step('Call API BSConsolidationWorksheetBalance', async () => {
      const res = await apolloClient.query<
        BsConsolidationWorksheetBalanceQuery,
        BsConsolidationWorksheetBalanceQueryVariables
      >({
        query: BsConsolidationWorksheetBalanceDocument,
        variables: {
          consolidationAccountingUnitId: conacId,
        },
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102144 Verify viewer role call API PLConsolidationWorksheetBalance', async ({
    apolloClient,
  }) => {
    await test.step('Call API PLConsolidationWorksheetBalance', async () => {
      const res = await apolloClient.query<
        PlConsolidationWorksheetBalanceQuery,
        PlConsolidationWorksheetBalanceQueryVariables
      >({
        query: PlConsolidationWorksheetBalanceDocument,
        variables: {
          consolidationAccountingUnitId: conacId,
        },
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102145 Verify viewer role call API CreateConsolidationWorksheetCsvExportUrl', async ({
    apolloClient,
  }) => {
    await test.step('Call API CreateConsolidationWorksheetCsvExportUrl', async () => {
      const res = await apolloClient.mutate<
        CreateConsolidationWorksheetCsvExportUrlMutation,
        CreateConsolidationWorksheetCsvExportUrlMutationVariables
      >({
        mutation: CreateConsolidationWorksheetCsvExportUrlDocument,
        variables: {
          input: {
            consolidationAccountingUnitId: conacId,
          },
        },
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102146 Verify viewer role call API Companies', async ({
    apolloClient,
  }) => {
    await test.step('Call API Companies', async () => {
      const res = await apolloClient.query<
        CompaniesQuery,
        CompaniesQueryVariables
      >({
        query: CompaniesDocument,
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102147 Verify viewer role call API CreateCompanyMasterCsvExportUrl', async ({
    apolloClient,
  }) => {
    await test.step('Call API CreateCompanyMasterCsvExportUrl', async () => {
      const res = await apolloClient.mutate<
        CreateCompanyMasterCsvExportUrlMutation,
        CreateCompanyMasterCsvExportUrlMutationVariables
      >({
        mutation: CreateCompanyMasterCsvExportUrlDocument,
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102148 Verify viewer role call API CreateCompany', async ({
    apolloClient,
  }) => {
    await test.step('Call API CreateCompany', async () => {
      randString = await randomString(5);
      const res = await apolloClient.mutate<
        CreateCompanyMutation,
        CreateCompanyMutationVariables
      >({
        mutation: CreateCompanyDocument,
        variables: {
          input: {
            companyInput: {
              abbreviation: randString,
              currency: Currency.Eur,
              decimalPlace: 1,
              nameJa: randString,
            },
          },
        },
      });
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102149 Verify viewer role call API ConsolidatedAccounts', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidatedAccounts', async () => {
      const res = await apolloClient.query<
        ConsolidatedAccountsQuery,
        ConsolidatedAccountsQueryVariables
      >({
        query: ConsolidatedAccountsDocument,
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102150 Verify viewer role call API ConsolidatedAccount', async ({
    apolloClient,
  }) => {
    const resAccounts = await apolloClient.query<
      ConsolidatedAccountsQuery,
      ConsolidatedAccountsQueryVariables
    >({
      query: ConsolidatedAccountsDocument,
    });
    const accountId = resAccounts.data.office.consolidatedAccounts.at(0).id;

    await test.step('Call API ConsolidatedAccount', async () => {
      const res = await apolloClient.query<
        ConsolidatedAccountQuery,
        ConsolidatedAccountQueryVariables
      >({
        query: ConsolidatedAccountDocument,
        variables: {
          id: accountId,
        },
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102151 Verify viewer role call API UpdateConsolidatedAccount', async ({
    apolloClient,
  }) => {
    const resAccounts = await apolloClient.query<
      ConsolidatedAccountsQuery,
      ConsolidatedAccountsQueryVariables
    >({
      query: ConsolidatedAccountsDocument,
    });
    const accountId = resAccounts.data.office.consolidatedAccounts.at(0).id;
    const nameJa = resAccounts.data.office.consolidatedAccounts.at(0).nameJa;
    randString = await randomString(5);

    await test.step('Call API UpdateConsolidatedAccount', async () => {
      const res = await apolloClient.mutate<
        UpdateConsolidatedAccountMutation,
        UpdateConsolidatedAccountMutationVariables
      >({
        mutation: UpdateConsolidatedAccountDocument,
        variables: {
          input: {
            description: randString,
            id: accountId,
            nameJa: nameJa,
          },
        },
      });
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102152 Verify viewer role call API CreateConsolidatedAccount', async ({
    apolloClient,
  }) => {
    randString = await randomString(5);

    await test.step('Call API CreateConsolidatedAccount', async () => {
      const res = await apolloClient.mutate<
        CreateConsolidatedAccountMutation,
        CreateConsolidatedAccountMutationVariables
      >({
        mutation: CreateConsolidatedAccountDocument,
        variables: {
          input: {
            amountType: AmountType.Negative,
            code: randString,
            consolidatedAccountSubCategoryId:
              'Q29uc29saWRhdGVkQWNjb3VudFN1YkNhdGVnb3J5OjI',
            conversionType: ConversionType.Ar,
            nameJa: randString,
          },
        },
      });
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102153 Verify viewer role call API DeleteConsolidatedAccount', async ({
    apolloClient,
  }) => {
    const resAccounts = await apolloClient.query<
      ConsolidatedAccountsQuery,
      ConsolidatedAccountsQueryVariables
    >({
      query: ConsolidatedAccountsDocument,
    });
    const accountId = resAccounts.data.office.consolidatedAccounts
      .filter((account) => account.code.code == 'rNhFi')
      .map((account) => account.id)
      .at(0);

    await test.step('Call API DeleteConsolidatedAccount', async () => {
      const res = await apolloClient.mutate<
        DeleteConsolidatedAccountMutation,
        DeleteConsolidatedAccountMutationVariables
      >({
        mutation: DeleteConsolidatedAccountDocument,
        variables: {
          input: {
            id: accountId,
          },
        },
      });
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102154 Verify viewer role call API CreateConsolidatedAccountCsvExportUrl', async ({
    apolloClient,
  }) => {
    await test.step('Call API CreateConsolidatedAccountCsvExportUrl', async () => {
      const res = await apolloClient.mutate<
        CreateConsolidatedAccountCsvExportUrlMutation,
        CreateConsolidatedAccountCsvExportUrlMutationVariables
      >({
        mutation: CreateConsolidatedAccountCsvExportUrlDocument,
      });
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102155 Verify viewer role call API ConsolidatedAccountImportSetting', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidatedAccountImportSetting', async () => {
      const res = await apolloClient.query<
        ConsolidatedAccountImportSettingQuery,
        ConsolidatedAccountImportSettingQueryVariables
      >({
        query: ConsolidatedAccountImportSettingDocument,
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102156 Verify viewer role call API UpsertConsolidatedAccountImportSetting', async ({
    apolloClient,
  }) => {
    await test.step('Call API UpsertConsolidatedAccountImportSetting', async () => {
      const res = await apolloClient.mutate<
        UpsertConsolidatedAccountImportSettingMutation,
        UpsertConsolidatedAccountImportSettingMutationVariables
      >({
        mutation: UpsertConsolidatedAccountImportSettingDocument,
        variables: {
          input: {
            consolidatedAccountImportSetting: {
              amountTypeColumn: 'a',
              codeColumn: 'b',
              consolidatedAccountSubCategoryColumn: 'c',
              conversionTypeColumn: 'd',
              endRow: 1,
              nameEnColumn: 'e',
              nameJaColumn: 'f',
              sheetName: 'test',
              startRow: 1,
            },
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102157 Verify viewer role call API ReservedConsolidatedAccounts', async ({
    apolloClient,
  }) => {
    await test.step('Call API ReservedConsolidatedAccounts', async () => {
      const res = await apolloClient.query<
        ReservedConsolidatedAccountsQuery,
        ReservedConsolidatedAccountsQueryVariables
      >({
        query: ReservedConsolidatedAccountsDocument,
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  skip('C102158 Verify viewer role call API UpdateReservedConsolidatedAccounts', async ({
    apolloClient,
  }) => {
    //fix
    await test.step('Call API UpdateReservedConsolidatedAccounts', async () => {
      const res = await apolloClient.mutate<
        UpdateReservedConsolidatedAccountsMutation,
        UpdateReservedConsolidatedAccountsMutationVariables
      >({
        mutation: UpdateReservedConsolidatedAccountsDocument,
        variables: {
          input: {
            clientMutationId: 'abc',
            foreignCurrencyTranslationAdjustmentAccountId: 'abc',
            foreignExchangeLossesNoeAccountId: 'abc',
            profitBSAccountId: 'abc',
            retainedEarningsBroughtForwardAccountId: 'abc',
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102159 Verify viewer role call API ConsolidationJournalTypes', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidationJournalTypes', async () => {
      const res = await apolloClient.query<
        ConsolidationJournalTypesQuery,
        ConsolidationJournalTypesQueryVariables
      >({
        query: ConsolidationJournalTypesDocument,
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102160 Verify viewer role call API UpdateConsolidationJournalTypeSortOrder', async ({
    apolloClient,
  }) => {
    await test.step('Call API UpdateConsolidationJournalTypeSortOrder', async () => {
      const res = await apolloClient.mutate<
        UpdateConsolidationJournalTypeSortOrderMutation,
        UpdateConsolidationJournalTypeSortOrderMutationVariables
      >({
        mutation: UpdateConsolidationJournalTypeSortOrderDocument,
        variables: {
          input: {
            idSortOrders: [],
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102161 Verify viewer role call API CreateConsolidationJournalType', async ({
    apolloClient,
  }) => {
    await test.step('Call API CreateConsolidationJournalType', async () => {
      randString = await randomString(5);
      const res = await apolloClient.mutate<
        CreateConsolidationJournalTypeMutation,
        CreateConsolidationJournalTypeMutationVariables
      >({
        mutation: CreateConsolidationJournalTypeDocument,
        variables: {
          input: {
            name: randString,
            openingJournalType: OpeningJournalType.CarryForward,
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102162 Verify viewer role call API UpdateConsolidationJournalType', async ({
    apolloClient,
  }) => {
    const resQuery = await apolloClient.query<
      ConsolidationJournalTypesQuery,
      ConsolidationJournalTypesQueryVariables
    >({
      query: ConsolidationJournalTypesDocument,
    });
    const id = resQuery.data.office.consolidationJournalTypes
      .filter((type) => type.name == 'TEST')
      .map((type) => type.id)
      .at(0);
    await test.step('Call API UpdateConsolidationJournalType', async () => {
      randString = await randomString(5);
      const res = await apolloClient.mutate<
        UpdateConsolidationJournalTypeMutation,
        UpdateConsolidationJournalTypeMutationVariables
      >({
        mutation: UpdateConsolidationJournalTypeDocument,
        variables: {
          input: {
            id: id,
            name: 'TEST',
            openingJournalType: OpeningJournalType.CarryForward,
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102163 Verify viewer role call API DeleteConsolidationJournalType', async ({
    apolloClient,
  }) => {
    const resQuery = await apolloClient.query<
      ConsolidationJournalTypesQuery,
      ConsolidationJournalTypesQueryVariables
    >({
      query: ConsolidationJournalTypesDocument,
    });
    const id = resQuery.data.office.consolidationJournalTypes
      .filter((type) => type.name == 'TEST')
      .map((type) => type.id)
      .at(0);
    await test.step('Call API DeleteConsolidationJournalType', async () => {
      randString = await randomString(5);
      const res = await apolloClient.mutate<
        DeleteConsolidationJournalTypeMutation,
        DeleteConsolidationJournalTypeMutationVariables
      >({
        mutation: DeleteConsolidationJournalTypeDocument,
        variables: {
          input: {
            consolidationJournalTypeId: id,
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102164 Verify viewer role call API Segments', async ({
    apolloClient,
  }) => {
    await test.step('Call API Segments', async () => {
      const res = await apolloClient.query<
        SegmentsQuery,
        SegmentsQueryVariables
      >({
        query: SegmentsDocument,
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102165 Verify viewer role call API Segment', async ({
    apolloClient,
  }) => {
    const resQuery = await apolloClient.query<
      SegmentsQuery,
      SegmentsQueryVariables
    >({
      query: SegmentsDocument,
    });
    const id = resQuery.data.office.segments
      .filter((segment) => segment.abbreviation == 'TEST')
      .map((segment) => segment.id)
      .at(0);

    await test.step('Call API Segment', async () => {
      const res = await apolloClient.query<SegmentQuery, SegmentQueryVariables>(
        {
          query: SegmentDocument,
          variables: {
            segmentId: id,
          },
        }
      );
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102166 Verify viewer role call API CreateSegment', async ({
    apolloClient,
  }) => {
    randString = await randomString(5);
    await test.step('Call API CreateSegment', async () => {
      const res = await apolloClient.mutate<
        CreateSegmentMutation,
        CreateSegmentMutationVariables
      >({
        mutation: CreateSegmentDocument,
        variables: {
          input: {
            abbreviation: randString,
            nameJa: randString,
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102167 Verify viewer role call API UpdateSegment', async ({
    apolloClient,
  }) => {
    const resQuery = await apolloClient.query<
      SegmentsQuery,
      SegmentsQueryVariables
    >({
      query: SegmentsDocument,
    });
    const id = resQuery.data.office.segments
      .filter((segment) => segment.abbreviation == 'TEST')
      .map((segment) => segment.id)
      .at(0);
    randString = await randomString(5);
    await test.step('Call API UpdateSegment', async () => {
      const res = await apolloClient.mutate<
        UpdateSegmentMutation,
        UpdateSegmentMutationVariables
      >({
        mutation: UpdateSegmentDocument,
        variables: {
          input: {
            id: id,
            nameJa: randString,
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102168 Verify viewer role call API OfficeMembers', async ({
    apolloClient,
  }) => {
    await test.step('Call API OfficeMembers', async () => {
      const res = await apolloClient.query<
        OfficeMembersQuery,
        OfficeMembersQueryVariables
      >({
        query: OfficeMembersDocument,
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102169 Verify viewer role call API OfficeMemberNew', async ({
    apolloClient,
  }) => {
    await test.step('Call API OfficeMemberNew', async () => {
      const res = await apolloClient.query<
        OfficeMemberNewQuery,
        OfficeMemberNewQueryVariables
      >({
        query: OfficeMemberNewDocument,
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102170 Verify viewer role call API CreateOfficeMember', async ({
    apolloClient,
  }) => {
    await test.step('Call API CreateOfficeMember', async () => {
      const resQuery = await apolloClient.query<
        OfficeMemberNewQuery,
        OfficeMemberNewQueryVariables
      >({
        query: OfficeMemberNewDocument,
      });
      const id = resQuery.data.office.unregisteredTenantUsers.at(0).id;
      const res = await apolloClient.mutate<
        CreateOfficeMemberMutation,
        CreateOfficeMemberMutationVariables
      >({
        mutation: CreateOfficeMemberDocument,
        variables: {
          input: {
            roleIds: [],
            tenantUserUid: id,
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102171 Verify viewer role call API UpdateOfficeMember', async ({
    apolloClient,
  }) => {
    const resQuery = await apolloClient.query<
      OfficeMembersQuery,
      OfficeMembersQueryVariables
    >({
      query: OfficeMembersDocument,
    });
    const id = resQuery.data.office.officeMembers.at(0).id;
    await test.step('Call API UpdateOfficeMember', async () => {
      const res = await apolloClient.mutate<
        UpdateOfficeMemberMutation,
        UpdateOfficeMemberMutationVariables
      >({
        mutation: UpdateOfficeMemberDocument,
        variables: {
          input: {
            officeMemberId: id,
            roleIds: [],
          },
        },
      });
      console.log(res);
      expect(res.errors).toBeDefined();
    });
  });

  test('C102172 Verify viewer role call API OfficeMembers', async ({
    apolloClient,
  }) => {
    const resQuery = await apolloClient.query<
      OfficeMembersQuery,
      OfficeMembersQueryVariables
    >({
      query: OfficeMembersDocument,
    });
    const id = resQuery.data.office.officeMembers
      .filter((user) => user.name == 'testuser')
      .map((user) => user.id)
      .at(0);
    await test.step('Call API DeleteOfficeMember', async () => {
      const res = await apolloClient.mutate<
        DeleteOfficeMemberMutation,
        DeleteOfficeMemberMutationVariables
      >({
        mutation: DeleteOfficeMemberDocument,
        variables: {
          input: {
            officeMemberId: id,
          },
        },
      });
      console.log(res);
      expect(res.errors).toBeDefined();
    });
  });

  test('C102172 Verify viewer role call API DeleteOfficeMember', async ({
    apolloClient,
  }) => {
    const resQuery = await apolloClient.query<
      OfficeMembersQuery,
      OfficeMembersQueryVariables
    >({
      query: OfficeMembersDocument,
    });
    const id = resQuery.data.office.officeMembers
      .filter((user) => user.name == 'testuser')
      .map((user) => user.id)
      .at(0);
    await test.step('Call API DeleteOfficeMember', async () => {
      const res = await apolloClient.mutate<
        DeleteOfficeMemberMutation,
        DeleteOfficeMemberMutationVariables
      >({
        mutation: DeleteOfficeMemberDocument,
        variables: {
          input: {
            officeMemberId: id,
          },
        },
      });
      console.log(res);
      expect(res.errors).toBeDefined();
    });
  });

  test('C102175 Verify viewer role call API ConsolidationAccountingUnitOperationHistories', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidationAccountingUnitOperationHistories', async () => {
      const res = await apolloClient.query<
        ConsolidationAccountingUnitOperationHistoriesQuery,
        ConsolidationAccountingUnitOperationHistoriesQueryVariables
      >({
        query: ConsolidationAccountingUnitOperationHistoriesDocument,
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102176 Verify viewer role call API ConsolidationAccountingUnits', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidationAccountingUnits', async () => {
      const res = await apolloClient.query<
        ConsolidationAccountingUnitsQuery,
        ConsolidationAccountingUnitsQueryVariables
      >({
        query: ConsolidationAccountingUnitsDocument,
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102177 Verify viewer role call API ConsolidationAccountingUnitNew', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidationAccountingUnitNew', async () => {
      const res = await apolloClient.query<
        ConsolidationAccountingUnitNewQuery,
        ConsolidationAccountingUnitNewQueryVariables
      >({
        query: ConsolidationAccountingUnitNewDocument,
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102178 Verify viewer role call API ConsolidationAccountingUnitsDetail', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidationAccountingUnitsDetail', async () => {
      const res = await apolloClient.query<
        ConsolidationAccountingUnitsDetailQuery,
        ConsolidationAccountingUnitsDetailQueryVariables
      >({
        query: ConsolidationAccountingUnitsDetailDocument,
        variables: {
          id: conacId,
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102179 Verify viewer role call API CreateConsolidationAccountingUnit', async ({
    apolloClient,
  }) => {
    randString = await randomString(5);
    const randDate = await randomDateString('YYYY/MM/DD');
    const resQuery = await apolloClient.query<
      WorkClassificationsQuery,
      WorkClassificationsQueryVariables
    >({
      query: WorkClassificationsDocument,
    });
    const workClassificationId =
      resQuery.data.office.workClassifications.at(0).id;
    await test.step('Call API CreateConsolidationAccountingUnit', async () => {
      const res = await apolloClient.mutate<
        CreateConsolidationAccountingUnitMutation,
        CreateConsolidationAccountingUnitMutationVariables
      >({
        mutation: CreateConsolidationAccountingUnitDocument,
        variables: {
          input: {
            companies: [],
            endDate: randDate,
            nameJa: randString,
            startDate: randDate,
            workClassificationId: workClassificationId,
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102180 Verify viewer role call API UpdateConsolidationAccountingUnit', async ({
    apolloClient,
  }) => {
    const resQuery = await apolloClient.query<
      ConsolidationAccountingUnitsQuery,
      ConsolidationAccountingUnitsQueryVariables
    >({
      query: ConsolidationAccountingUnitsDocument,
    });
    const id = resQuery.data.office.consolidationAccountingUnits
      .filter((unit) => unit.nameJa == 'autotest')
      .map((unit) => unit.id)
      .at(0);
    randString = await randomString(5);
    const randDate = await randomDateString('YYYY/MM/DD');
    await test.step('Call API UpdateConsolidationAccountingUnit', async () => {
      const res = await apolloClient.query<
        UpdateConsolidationAccountingUnitMutation,
        UpdateConsolidationAccountingUnitMutationVariables
      >({
        query: UpdateConsolidationAccountingUnitDocument,
        variables: {
          input: {
            companies: [],
            description: randString,
            endDate: randDate,
            id: id,
            nameJa: 'autotest',
            startDate: randDate,
            workClassificationId: '',
          },
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).toContain('"errors"');
    });
  });

  test('C102181 Verify viewer role call API ConsolidationAccountingUnitsCopyNew', async ({
    apolloClient,
  }) => {
    await test.step('Call API ConsolidationAccountingUnitsCopyNew', async () => {
      const resQuery = await apolloClient.query<
        ConsolidationAccountingUnitsQuery,
        ConsolidationAccountingUnitsQueryVariables
      >({
        query: ConsolidationAccountingUnitsDocument,
      });
      const id = resQuery.data.office.consolidationAccountingUnits.at(0).id;

      const res = await apolloClient.query<
        ConsolidationAccountingUnitsCopyNewQuery,
        ConsolidationAccountingUnitsCopyNewQueryVariables
      >({
        query: ConsolidationAccountingUnitsCopyNewDocument,
        variables: {
          id: id,
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });

  test('C102182 Verify viewer role call API CarryForwardExecutingInNextConsolidationAccountingUnit', async ({
    apolloClient,
  }) => {
    await test.step('Call API CarryForwardExecutingInNextConsolidationAccountingUnit', async () => {
      const res = await apolloClient.query<
        CarryForwardExecutingInNextConsolidationAccountingUnitQuery,
        CarryForwardExecutingInNextConsolidationAccountingUnitQueryVariables
      >({
        query: CarryForwardExecutingInNextConsolidationAccountingUnitDocument,
        variables: {
          id: conacId,
        },
      });
      console.log(res);
      expect(JSON.stringify(res)).not.toContain('"errors"');
    });
  });
});
