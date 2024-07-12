import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An RFC-3339 compliant Full Date Scalar */
  Date: { input: string; output: string; }
  /** A slightly refined version of RFC-3339 compliant DateTime Scalar */
  DateTime: { input: string; output: string; }
  LocalDateTime: { input: any; output: any; }
};

export enum AccountCodeError {
  AccountCodeRequired = 'ACCOUNT_CODE_REQUIRED',
  CorrespondingAccountNotFound = 'CORRESPONDING_ACCOUNT_NOT_FOUND',
  InvalidFormatAccountCode = 'INVALID_FORMAT_ACCOUNT_CODE',
  ProfitBsAndRetainedEarningsBroughtForwardCannotBeAssigned = 'PROFIT_BS_AND_RETAINED_EARNINGS_BROUGHT_FORWARD_CANNOT_BE_ASSIGNED',
  TooLongAccountCode = 'TOO_LONG_ACCOUNT_CODE'
}

export type AccountCodePreview = {
  __typename?: 'AccountCodePreview';
  assignedConsolidatedAccount?: Maybe<AssignedConsolidatedAccount>;
  errors: Array<PreviewConsolidationJournal>;
  value: Scalars['String']['output'];
};

export type AccountCodePreviewInput = {
  errors: Array<PreviewConsolidationJournalInput>;
  value: Scalars['String']['input'];
};

export type AccountConversionRulePreview = {
  __typename?: 'AccountConversionRulePreview';
  code: Scalars['String']['output'];
  consolidatedAccount?: Maybe<ConsolidatedAccount>;
  consolidatedAccountId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  inversionMultiplier: InversionMultiplier;
  isAdd: Scalars['Boolean']['output'];
  names: Array<Scalars['String']['output']>;
  skipReason?: Maybe<ConversionRuleSkipReason>;
  workClassificationId: Scalars['ID']['output'];
};

export type AccountConversionRulePreviewInput = {
  code: Scalars['String']['input'];
  consolidatedAccountId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inversionMultiplier: InversionMultiplier;
  isAdd: Scalars['Boolean']['input'];
  names: Array<Scalars['String']['input']>;
  skipReason?: InputMaybe<ConversionRuleSkipReason>;
  workClassificationId: Scalars['ID']['input'];
};

export type AccountConversionRuleRecommendCandidate = {
  __typename?: 'AccountConversionRuleRecommendCandidate';
  autoFill: Scalars['Boolean']['output'];
  consolidatedAccount: ConsolidatedAccount;
  similarity: Scalars['Float']['output'];
};

export type AccountConversionRuleRecommendItemType = {
  __typename?: 'AccountConversionRuleRecommendItemType';
  code: Scalars['String']['output'];
  recommends: Array<AccountConversionRuleRecommendCandidate>;
};

export type AccountConversionRuleRecommendation = {
  __typename?: 'AccountConversionRuleRecommendation';
  error?: Maybe<SimilarAccountRecommendationFailureReason>;
  results: Array<AccountConversionRuleRecommendItemType>;
};

export type AccountConversionRuleRecommendationQueryInput = {
  accountTargets: Array<AccountRecommendationTargetTypeInput>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
};

export type AccountRecommendationTargetTypeInput = {
  accountCode: Scalars['String']['input'];
  accountName: Scalars['String']['input'];
};

export enum AccountSide {
  Cr = 'CR',
  Dr = 'DR'
}

export enum AccountType {
  ForeignCurrencyTranslationAdjustment = 'FOREIGN_CURRENCY_TRANSLATION_ADJUSTMENT',
  ForeignExchangeLossesNoe = 'FOREIGN_EXCHANGE_LOSSES_NOE',
  Normal = 'NORMAL',
  ProfitBs = 'PROFIT_BS',
  RetainedEarningsBroughtForward = 'RETAINED_EARNINGS_BROUGHT_FORWARD'
}

export enum AccountingUnitUseType {
  SystemRequired = 'SYSTEM_REQUIRED',
  Unused = 'UNUSED',
  Using = 'USING'
}

export type AmountPerConsolidatedAccount = {
  __typename?: 'AmountPerConsolidatedAccount';
  amount?: Maybe<Scalars['Float']['output']>;
  consolidatedAccount: ConsolidatedAccount;
};

export type AmountPerConsolidationJournalType = {
  __typename?: 'AmountPerConsolidationJournalType';
  amount: Scalars['Float']['output'];
  consolidationJournalType: ConsolidationJournalType;
};

export enum AmountType {
  Negative = 'NEGATIVE',
  Positive = 'POSITIVE'
}

export type AssignedConsolidatedAccount = {
  __typename?: 'AssignedConsolidatedAccount';
  consolidatedAccount: ConsolidatedAccount;
  id: Scalars['ID']['output'];
  isDeletable: Scalars['Boolean']['output'];
  sortOrder: Scalars['Int']['output'];
  workClassificationId: Scalars['ID']['output'];
};

export type AssignedConsolidatedAccountInputTypeInput = {
  consolidatedAccountId: Scalars['ID']['input'];
  newSortOrder: Scalars['Int']['input'];
};

export type BsConsolidationWorksheet = {
  __typename?: 'BSConsolidationWorksheet';
  consolidationAccountingUnitId: Scalars['ID']['output'];
  rows: Array<BsConsolidationWorksheetBalanceRow>;
  summary: BsSummary;
};

export type BsConsolidationWorksheetBalanceRow = {
  __typename?: 'BSConsolidationWorksheetBalanceRow';
  adjustedBalance: Scalars['Float']['output'];
  adjustmentBalance: Scalars['Float']['output'];
  assignedConsolidatedAccount: AssignedConsolidatedAccount;
  totalBalance: Scalars['Float']['output'];
};

export type BsSummary = {
  __typename?: 'BSSummary';
  assetsAmount: Scalars['Float']['output'];
  assetsItems: Array<FsSummaryRow>;
  balanceAmount: Scalars['Float']['output'];
  liabilitiesAmount: Scalars['Float']['output'];
  liabilitiesItems: Array<FsSummaryRow>;
  netAssetsAmount: Scalars['Float']['output'];
  netAssetsItems: Array<FsSummaryRow>;
};

export type BsTranslationAdjustment = {
  __typename?: 'BSTranslationAdjustment';
  afterTranslationBalance: Scalars['Float']['output'];
  assignedConsolidatedAccountId: Scalars['ID']['output'];
  beforeTranslationBalance?: Maybe<Scalars['Float']['output']>;
  financialStatementId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  openingClassification: OpeningClassification;
  remark?: Maybe<Scalars['String']['output']>;
  tenantUid: Scalars['ID']['output'];
};

export type BalanceAdjustment = {
  __typename?: 'BalanceAdjustment';
  amount: Scalars['Float']['output'];
  assignedConsolidatedAccountId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  remark?: Maybe<Scalars['String']['output']>;
};

export enum BalanceError {
  DecimalValue = 'DECIMAL_VALUE',
  InvalidFormatBalance = 'INVALID_FORMAT_BALANCE',
  NegativeValue = 'NEGATIVE_VALUE',
  TooLongBalance = 'TOO_LONG_BALANCE'
}

export type BalancePreview = {
  __typename?: 'BalancePreview';
  errors: Array<BalancePreviewError>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type BalancePreviewError = {
  __typename?: 'BalancePreviewError';
  error: BalanceError;
  message: Scalars['String']['output'];
};

export type BalancePreviewErrorInput = {
  error: BalanceError;
  message: Scalars['String']['input'];
};

export type BalancePreviewInput = {
  errors: Array<BalancePreviewErrorInput>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type BalanceSheet = {
  __typename?: 'BalanceSheet';
  adjustedSummary: BsSummary;
  balanceAdjustments: Array<BalanceAdjustment>;
  id: Scalars['ID']['output'];
  rows: Array<FinancialStatementRow>;
  translatedSummary: BsSummary;
  translationAdjustments: Array<BsTranslationAdjustment>;
};

export type BuildCaAccountConversionRulePreviewMutationInput = {
  caIntegrationSettingId: Scalars['ID']['input'];
  consolidationAccountingUnitId: Scalars['ID']['input'];
  consolidationPackageId: Scalars['ID']['input'];
  endMonth: Scalars['Int']['input'];
  fiscalYear: Scalars['Int']['input'];
  startMonth: Scalars['Int']['input'];
};

export type BuildCaAccountConversionRulePreviewMutationPayload = {
  __typename?: 'BuildCaAccountConversionRulePreviewMutationPayload';
  accountConversionRulePreviews: Array<AccountConversionRulePreview>;
  errors: Array<Scalars['String']['output']>;
  trialBalancePreviewsBeforeConversionForCa: Array<TrialBalancePreviewBeforeConversionRowType>;
};

export type BuildCamidAccountConversionRulePreviewMutationInput = {
  camidIntegrationSettingId: Scalars['ID']['input'];
  consolidationAccountingUnitId: Scalars['ID']['input'];
  consolidationPackageId: Scalars['ID']['input'];
  endDate: Scalars['LocalDateTime']['input'];
  startDate: Scalars['LocalDateTime']['input'];
};

export type BuildCamidAccountConversionRulePreviewMutationPayload = {
  __typename?: 'BuildCamidAccountConversionRulePreviewMutationPayload';
  accountConversionRulePreviews: Array<AccountConversionRulePreview>;
  errors: Array<Scalars['String']['output']>;
  trialBalancePreviewsBeforeConversionForCamid: Array<TrialBalancePreviewBeforeConversionRowType>;
};

export type BuildConsolidatedAccountsPreviewMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fileKey: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
};

export type BuildConsolidatedAccountsPreviewMutationPayload = {
  __typename?: 'BuildConsolidatedAccountsPreviewMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  preview: ConsolidatedAccountPreview;
};

export enum CaIntegrationResource {
  TrialBalance = 'TRIAL_BALANCE'
}

export type CaIntegrationResourceType = {
  __typename?: 'CaIntegrationResourceType';
  name: Scalars['String']['output'];
  type: CaIntegrationResource;
};

export type CaIntegrationSetting = IntegrationSetting & {
  __typename?: 'CaIntegrationSetting';
  caIntegrationResources: Array<CaIntegrationResourceType>;
  company: Company;
  id: Scalars['ID']['output'];
  integratedAt: Scalars['DateTime']['output'];
  integratedCompanyName?: Maybe<Scalars['String']['output']>;
  integrationService: IntegrationService;
};

export enum CamidIntegrationResource {
  TrialBalance = 'TRIAL_BALANCE'
}

export type CamidIntegrationResourceType = {
  __typename?: 'CamidIntegrationResourceType';
  name: Scalars['String']['output'];
  type: CamidIntegrationResource;
};

export type CamidIntegrationSetting = IntegrationSetting & {
  __typename?: 'CamidIntegrationSetting';
  camidIntegrationResources: Array<CamidIntegrationResourceType>;
  company: Company;
  id: Scalars['ID']['output'];
  integratedAt: Scalars['DateTime']['output'];
  integratedCompanyName?: Maybe<Scalars['String']['output']>;
  integrationService: IntegrationService;
};

export type CarryForwardConsolidationJournalError = {
  __typename?: 'CarryForwardConsolidationJournalError';
  consolidationJournalTypeId: Scalars['ID']['output'];
  consolidationJournalTypeName: Scalars['String']['output'];
  journalGroupKeys: Array<Scalars['String']['output']>;
};

export type CarryForwardConsolidationPackageError = {
  __typename?: 'CarryForwardConsolidationPackageError';
  error: Scalars['String']['output'];
};

export type CarryForwardError = {
  __typename?: 'CarryForwardError';
  currentConsolidationAccountingUnit: ConsolidationAccountingUnit;
  errorsPerAssignedConsolidatedAccountOfRetainedEarningsBroughtForward: Array<ErrorsPerAssignedConsolidatedAccount>;
  errorsPerConPkgOfRetainedEarningsBroughtForward: Array<ErrorsPerConsolidationPackage>;
  lackingAssignedConsolidatedAccountsOfTranslationAdjustment: Array<ConsolidatedAccount>;
};

export type CarryForwardExecuteOperationHistory = CarryForwardOperationHistory & {
  __typename?: 'CarryForwardExecuteOperationHistory';
  beginningTranslationAdjustmentCsvFileId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  officeMemberName?: Maybe<Scalars['String']['output']>;
  openingJournalEntriesCsvFileId: Scalars['ID']['output'];
  preConsolidationAccountingUnit: ConsolidationAccountingUnit;
  preConsolidationJournalEntriesCsvFileId: Scalars['ID']['output'];
  preRetainedEarningsCsvFileId: Scalars['ID']['output'];
  preTranslationAdjustmentCsvFileId: Scalars['ID']['output'];
  retainedEarningsBroughtForwardCsvFileId: Scalars['ID']['output'];
  tenantUid: Scalars['ID']['output'];
};

export type CarryForwardExecutingStatusNotification = {
  __typename?: 'CarryForwardExecutingStatusNotification';
  consolidationAccountingUnitId: Scalars['ID']['output'];
  status: JobStatus;
};

export type CarryForwardExecutingStatusSubscriptionInput = {
  currentConsolidationAccountingUnitId: Scalars['ID']['input'];
};

export enum CarryForwardInexecutableReasonType {
  NoPrevConsolidationAccountingUnit = 'NO_PREV_CONSOLIDATION_ACCOUNTING_UNIT',
  PreviousConsolidationAccountingUnitIsUnlocked = 'PREVIOUS_CONSOLIDATION_ACCOUNTING_UNIT_IS_UNLOCKED'
}

export type CarryForwardInput = {
  consolidationAccountingUnitId: Scalars['ID']['input'];
};

export enum CarryForwardJobType {
  CarryForward = 'CARRY_FORWARD',
  Reset = 'RESET'
}

export type CarryForwardOperationHistory = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  officeMemberName?: Maybe<Scalars['String']['output']>;
  preConsolidationAccountingUnit: ConsolidationAccountingUnit;
  tenantUid: Scalars['ID']['output'];
};

export type CarryForwardPayload = {
  __typename?: 'CarryForwardPayload';
  error?: Maybe<CarryForwardError>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
};

export type CarryForwardPerAssignedConsolidatedAccountError = {
  __typename?: 'CarryForwardPerAssignedConsolidatedAccountError';
  consolidationJournalTypeId: Scalars['ID']['output'];
  consolidationJournalTypeName: Scalars['String']['output'];
  journalGroupKeys: Array<Scalars['String']['output']>;
};

export type CarryForwardPerCompanyError = CarryForwardConsolidationJournalError | CarryForwardConsolidationPackageError;

export type CarryForwardPreview = {
  __typename?: 'CarryForwardPreview';
  inexecutableReason: Array<CarryForwardInexecutableReasonType>;
  retainedEarningsBroughtForwardPreview?: Maybe<RetainedEarningsBroughtForwardPreview>;
  translationAdjustmentPreview: TranslationAdjustmentPreview;
};

export type CarryForwardResetOperationHistory = CarryForwardOperationHistory & {
  __typename?: 'CarryForwardResetOperationHistory';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  officeMemberName?: Maybe<Scalars['String']['output']>;
  preConsolidationAccountingUnit: ConsolidationAccountingUnit;
  tenantUid: Scalars['ID']['output'];
};

export type Company = {
  __typename?: 'Company';
  abbreviation: Scalars['String']['output'];
  associatedData: Array<CompanyRelatingDataByUnit>;
  associatedRoles: Array<Role>;
  createdAt: Scalars['DateTime']['output'];
  currency: Currency;
  decimalPlace: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** integration setting list for external services */
  integrationSettings: Array<IntegrationSetting>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameJa: Scalars['String']['output'];
  remarks?: Maybe<Scalars['String']['output']>;
  sortOrder: Scalars['Int']['output'];
  tenantUid: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum CompanyAbbreviationError {
  CompanyAbbreviationRequired = 'COMPANY_ABBREVIATION_REQUIRED',
  CorrespondingCompanyNotFound = 'CORRESPONDING_COMPANY_NOT_FOUND',
  CorrespondingConsolidationPackageNotIncluded = 'CORRESPONDING_CONSOLIDATION_PACKAGE_NOT_INCLUDED',
  InvalidFormatCompanyAbbreviation = 'INVALID_FORMAT_COMPANY_ABBREVIATION',
  TooLongCompanyAbbreviation = 'TOO_LONG_COMPANY_ABBREVIATION'
}

export type CompanyAbbreviationPreview = {
  __typename?: 'CompanyAbbreviationPreview';
  companyId?: Maybe<Scalars['ID']['output']>;
  errors: Array<CompanyAbbreviationPreviewError>;
  value: Scalars['String']['output'];
};

export type CompanyAbbreviationPreviewError = {
  __typename?: 'CompanyAbbreviationPreviewError';
  error: CompanyAbbreviationError;
  message: Scalars['String']['output'];
};

export type CompanyAbbreviationPreviewErrorInput = {
  error: CompanyAbbreviationError;
  message: Scalars['String']['input'];
};

export type CompanyAbbreviationPreviewInput = {
  companyId?: InputMaybe<Scalars['ID']['input']>;
  errors: Array<CompanyAbbreviationPreviewErrorInput>;
  value: Scalars['String']['input'];
};

export type CompanyIdSortOrderInput = {
  id: Scalars['ID']['input'];
  sortOrder: Scalars['Int']['input'];
};

export type CompanyInput = {
  abbreviation: Scalars['String']['input'];
  currency: Currency;
  decimalPlace: Scalars['Int']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameJa: Scalars['String']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyRelatingDataByUnit = {
  __typename?: 'CompanyRelatingDataByUnit';
  consolidationAccountingUnit: ConsolidationAccountingUnit;
  data: Array<CompanyRelatingDataType>;
};

export enum CompanyRelatingDataType {
  BalanceAdjustments = 'BALANCE_ADJUSTMENTS',
  ConsolidationJournals = 'CONSOLIDATION_JOURNALS',
  TranslationAdjustments = 'TRANSLATION_ADJUSTMENTS',
  TrialBalances = 'TRIAL_BALANCES'
}

export type ConsolidatedAccount = {
  __typename?: 'ConsolidatedAccount';
  accountSide: AccountSide;
  accountType: AccountType;
  amountType: AmountType;
  associatedConsolidationAccountingUnits: Array<ConsolidationAccountingUnit>;
  code: ConsolidatedAccountCode;
  consolidatedAccountSubCategory: ConsolidatedAccountSubCategory;
  conversionType: ConversionType;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nameEn?: Maybe<Scalars['String']['output']>;
  nameJa: Scalars['String']['output'];
  tenantUid: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ConsolidatedAccountAmountTypePreview = {
  __typename?: 'ConsolidatedAccountAmountTypePreview';
  amountType?: Maybe<AmountType>;
  errors: Array<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type ConsolidatedAccountAmountTypePreviewInput = {
  amountType?: InputMaybe<AmountType>;
  errors: Array<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type ConsolidatedAccountCategory = {
  __typename?: 'ConsolidatedAccountCategory';
  accountSide: AccountSide;
  financialStatementType: FinancialStatementType;
  id: Scalars['ID']['output'];
  nameEn: Scalars['String']['output'];
  nameJa: Scalars['String']['output'];
};

export type ConsolidatedAccountCode = {
  __typename?: 'ConsolidatedAccountCode';
  code: Scalars['String']['output'];
};

export type ConsolidatedAccountCodePreview = {
  __typename?: 'ConsolidatedAccountCodePreview';
  errors: Array<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type ConsolidatedAccountCodePreviewInput = {
  errors: Array<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type ConsolidatedAccountConversionTypePreview = {
  __typename?: 'ConsolidatedAccountConversionTypePreview';
  errors: Array<Scalars['String']['output']>;
  type?: Maybe<ConversionType>;
  value: Scalars['String']['output'];
};

export type ConsolidatedAccountConversionTypePreviewInput = {
  errors: Array<Scalars['String']['input']>;
  type?: InputMaybe<ConversionType>;
  value: Scalars['String']['input'];
};

export type ConsolidatedAccountError = {
  __typename?: 'ConsolidatedAccountError';
  message: Scalars['String']['output'];
};

export type ConsolidatedAccountImportSetting = {
  __typename?: 'ConsolidatedAccountImportSetting';
  amountTypeColumn: Scalars['String']['output'];
  codeColumn: Scalars['String']['output'];
  consolidatedAccountSubCategoryColumn: Scalars['String']['output'];
  conversionTypeColumn: Scalars['String']['output'];
  endRow: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  nameEnColumn?: Maybe<Scalars['String']['output']>;
  nameJaColumn: Scalars['String']['output'];
  sheetName: Scalars['String']['output'];
  startRow: Scalars['Int']['output'];
  tenantUid: Scalars['ID']['output'];
};

export type ConsolidatedAccountImportSettingInput = {
  amountTypeColumn: Scalars['String']['input'];
  codeColumn: Scalars['String']['input'];
  consolidatedAccountSubCategoryColumn: Scalars['String']['input'];
  conversionTypeColumn: Scalars['String']['input'];
  endRow: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  nameEnColumn?: InputMaybe<Scalars['String']['input']>;
  nameJaColumn: Scalars['String']['input'];
  sheetName: Scalars['String']['input'];
  startRow: Scalars['Int']['input'];
};

export type ConsolidatedAccountNameEnPreview = {
  __typename?: 'ConsolidatedAccountNameEnPreview';
  errors: Array<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ConsolidatedAccountNameEnPreviewInput = {
  errors: Array<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ConsolidatedAccountNameJaPreview = {
  __typename?: 'ConsolidatedAccountNameJaPreview';
  errors: Array<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type ConsolidatedAccountNameJaPreviewInput = {
  errors: Array<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type ConsolidatedAccountPreview = {
  __typename?: 'ConsolidatedAccountPreview';
  aggregatedErrors: Array<ConsolidatedAccountPreviewAggregatedError>;
  errors: Array<ConsolidatedAccountError>;
  previews: Array<ConsolidatedAccountPreviewRow>;
};

export type ConsolidatedAccountPreviewAggregatedError = {
  __typename?: 'ConsolidatedAccountPreviewAggregatedError';
  message: Scalars['String']['output'];
  positions: Array<ExcelRowErrorPositionType>;
};

export type ConsolidatedAccountPreviewRow = {
  __typename?: 'ConsolidatedAccountPreviewRow';
  accountSide?: Maybe<AccountSide>;
  amountType: ConsolidatedAccountAmountTypePreview;
  code: ConsolidatedAccountCodePreview;
  conversionType: ConsolidatedAccountConversionTypePreview;
  nameEn: ConsolidatedAccountNameEnPreview;
  nameJa: ConsolidatedAccountNameJaPreview;
  subCategory: ConsolidatedAccountSubCategoryPreview;
};

export type ConsolidatedAccountPreviewRowInput = {
  accountSide?: InputMaybe<AccountSide>;
  amountType: ConsolidatedAccountAmountTypePreviewInput;
  code: ConsolidatedAccountCodePreviewInput;
  conversionType: ConsolidatedAccountConversionTypePreviewInput;
  nameEn: ConsolidatedAccountNameEnPreviewInput;
  nameJa: ConsolidatedAccountNameJaPreviewInput;
  subCategory: ConsolidatedAccountSubCategoryPreviewInput;
};

export type ConsolidatedAccountSubCategory = {
  __typename?: 'ConsolidatedAccountSubCategory';
  accountSide: AccountSide;
  consolidatedAccountCategory: ConsolidatedAccountCategory;
  id: Scalars['ID']['output'];
  nameEn: Scalars['String']['output'];
  nameJa: Scalars['String']['output'];
  sortOrder: Scalars['Int']['output'];
};

export type ConsolidatedAccountSubCategoryPreview = {
  __typename?: 'ConsolidatedAccountSubCategoryPreview';
  errors: Array<Scalars['String']['output']>;
  subCategoryId?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type ConsolidatedAccountSubCategoryPreviewInput = {
  errors: Array<Scalars['String']['input']>;
  subCategoryId?: InputMaybe<Scalars['ID']['input']>;
  value: Scalars['String']['input'];
};

export type ConsolidationAccountingUnit = {
  __typename?: 'ConsolidationAccountingUnit';
  allConsolidationJournals: Array<ConsolidationJournalRowType>;
  allConsolidationPackages: Array<ConsolidationPackage>;
  assignedConsolidatedAccounts: Array<AssignedConsolidatedAccount>;
  bsConsolidationWorksheetBalance: BsConsolidationWorksheet;
  carryForwardDataExists: Scalars['Boolean']['output'];
  /** Check if carry forward is executing in this unit */
  carryForwardExecuting?: Maybe<CarryForwardJobType>;
  /** Check if carry forward is executing in the next unit to unlock current unit */
  carryForwardExecutingInNextConsolidationAccountingUnit: Scalars['Boolean']['output'];
  carryForwardOperationHistories: Array<CarryForwardOperationHistory>;
  carryForwardPreview: CarryForwardPreview;
  consolidationJournalImportSetting?: Maybe<ConsolidationJournalImportSetting>;
  consolidationJournals: Array<ConsolidationJournal>;
  consolidationPackage: ConsolidationPackage;
  description?: Maybe<Scalars['String']['output']>;
  end: Scalars['String']['output'];
  exchangeRate?: Maybe<ExchangeRate>;
  exchangeRates: Array<ExchangeRate>;
  id: Scalars['ID']['output'];
  importingConsolidationPackages: Scalars['Boolean']['output'];
  includedConsolidationProcessTypeConsolidationPackages: Array<ConsolidationPackage>;
  lockStatus: UnitLockStatus;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameJa: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  plConsolidationWorksheetBalance: PlConsolidationWorksheetBalance;
  preConsolidationAccountingUnit?: Maybe<ConsolidationAccountingUnit>;
  preConsolidationAccountingUnitId?: Maybe<Scalars['ID']['output']>;
  start: Scalars['String']['output'];
  submissionRequiredConsolidationPackages: Array<ConsolidationPackage>;
  tenantUid: Scalars['ID']['output'];
  workClassification: WorkClassification;
  workClassificationId: Scalars['ID']['output'];
};


export type ConsolidationAccountingUnitConsolidationJournalImportSettingArgs = {
  consolidationJournalTypeId: Scalars['ID']['input'];
};


export type ConsolidationAccountingUnitConsolidationJournalsArgs = {
  journalTypeId: Scalars['ID']['input'];
};


export type ConsolidationAccountingUnitConsolidationPackageArgs = {
  id: Scalars['ID']['input'];
};


export type ConsolidationAccountingUnitExchangeRateArgs = {
  companyId: Scalars['ID']['input'];
};

export type ConsolidationAccountingUnitOperationHistory = {
  __typename?: 'ConsolidationAccountingUnitOperationHistory';
  consolidationAccountingUnit: ConsolidationAccountingUnit;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  officeMember?: Maybe<OfficeMember>;
  tenantUid: Scalars['ID']['output'];
  type: ConsolidationAccountingUnitOperationType;
};

export enum ConsolidationAccountingUnitOperationType {
  Create = 'CREATE',
  Lock = 'LOCK',
  Unlock = 'UNLOCK',
  Update = 'UPDATE'
}

export type ConsolidationJournal = {
  __typename?: 'ConsolidationJournal';
  creditTotalBalance: Scalars['Float']['output'];
  debitTotalBalance: Scalars['Float']['output'];
  journalGroupKey: Scalars['String']['output'];
  rows: Array<ConsolidationJournalRowType>;
};

export enum ConsolidationJournalError {
  NotBalanced = 'NOT_BALANCED'
}

export type ConsolidationJournalImportSetting = {
  __typename?: 'ConsolidationJournalImportSetting';
  companyAbbreviationColumn: Scalars['String']['output'];
  consolidatedAccountCodeColumn: Scalars['String']['output'];
  consolidationAccountingUnitId: Scalars['ID']['output'];
  consolidationJournalGroupKeyColumn: Scalars['String']['output'];
  consolidationJournalTypeId: Scalars['ID']['output'];
  creditBalanceColumn: Scalars['String']['output'];
  debitBalanceColumn: Scalars['String']['output'];
  endRow: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  remarkColumn?: Maybe<Scalars['String']['output']>;
  segmentAbbreviationColumn?: Maybe<Scalars['String']['output']>;
  sheetName: Scalars['String']['output'];
  startRow: Scalars['Int']['output'];
  tenantUid: Scalars['ID']['output'];
};

export type ConsolidationJournalOperationHistory = {
  __typename?: 'ConsolidationJournalOperationHistory';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  officeMember?: Maybe<OfficeMember>;
  operation: JournalOperation;
  uploadedFile?: Maybe<UploadedFile>;
};

export type ConsolidationJournalPreview = {
  __typename?: 'ConsolidationJournalPreview';
  errors: Array<ConsolidationJournalPreviewError>;
  journalGroupKey: JournalGroupKeyPreview;
  rows: Array<ConsolidationJournalPreviewRow>;
  totalCreditBalance: Scalars['Float']['output'];
  totalDebitBalance: Scalars['Float']['output'];
};

export type ConsolidationJournalPreviewError = {
  __typename?: 'ConsolidationJournalPreviewError';
  error: ConsolidationJournalError;
  message: Scalars['String']['output'];
};

export type ConsolidationJournalPreviewErrorInput = {
  error: ConsolidationJournalError;
  message: Scalars['String']['input'];
};

export type ConsolidationJournalPreviewInput = {
  errors: Array<ConsolidationJournalPreviewErrorInput>;
  journalGroupKey: JournalGroupKeyPreviewInput;
  rows: Array<ConsolidationJournalPreviewRowInput>;
  totalCreditBalance: Scalars['Float']['input'];
  totalDebitBalance: Scalars['Float']['input'];
};

export type ConsolidationJournalPreviewRow = {
  __typename?: 'ConsolidationJournalPreviewRow';
  accountCode: AccountCodePreview;
  companyAbbreviation: CompanyAbbreviationPreview;
  creditBalance: BalancePreview;
  debitBalance: BalancePreview;
  errors: Array<ConsolidationJournalPreviewRowError>;
  id: Scalars['ID']['output'];
  journalGroupKey: JournalGroupKeyPreview;
  openingClassification: OpeningClassification;
  remark: RemarkPreview;
  segmentAbbreviation: SegmentAbbreviationPreview;
};

export type ConsolidationJournalPreviewRowError = {
  __typename?: 'ConsolidationJournalPreviewRowError';
  error: ConsolidationJournalRowError;
  message: Scalars['String']['output'];
};

export type ConsolidationJournalPreviewRowErrorInput = {
  error: ConsolidationJournalRowError;
  message: Scalars['String']['input'];
};

export type ConsolidationJournalPreviewRowInput = {
  accountCode: AccountCodePreviewInput;
  companyAbbreviation: CompanyAbbreviationPreviewInput;
  creditBalance: BalancePreviewInput;
  debitBalance: BalancePreviewInput;
  errors: Array<ConsolidationJournalPreviewRowErrorInput>;
  id: Scalars['ID']['input'];
  journalGroupKey: JournalGroupKeyPreviewInput;
  openingClassification: OpeningClassification;
  remark: RemarkPreviewInput;
  segmentAbbreviation: SegmentAbbreviationPreviewInput;
};

export enum ConsolidationJournalRowError {
  EitherDebitOrCreditShouldBeEmpty = 'EITHER_DEBIT_OR_CREDIT_SHOULD_BE_EMPTY'
}

export type ConsolidationJournalRowType = {
  __typename?: 'ConsolidationJournalRowType';
  assignedConsolidatedAccount: AssignedConsolidatedAccount;
  company: Company;
  consolidationAccountingUnitId: Scalars['ID']['output'];
  consolidationJournalType: ConsolidationJournalType;
  creditBalance?: Maybe<Scalars['Float']['output']>;
  debitBalance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  journalGroupKey: Scalars['String']['output'];
  openingClassification: OpeningClassification;
  remark?: Maybe<Scalars['String']['output']>;
  segment?: Maybe<Segment>;
  tenantUid: Scalars['ID']['output'];
};

export type ConsolidationJournalSummaryRowType = {
  __typename?: 'ConsolidationJournalSummaryRowType';
  assignedConsolidatedAccount: AssignedConsolidatedAccount;
  consolidationAccountingUnitId: Scalars['ID']['output'];
  consolidationJournalType: ConsolidationJournalType;
  creditBalance: Scalars['Float']['output'];
  debitBalance: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  tenantUid: Scalars['ID']['output'];
  totalBalance: Scalars['Float']['output'];
};

export type ConsolidationJournalSummaryType = {
  __typename?: 'ConsolidationJournalSummaryType';
  rows: Array<ConsolidationJournalSummaryRowType>;
};

export type ConsolidationJournalType = {
  __typename?: 'ConsolidationJournalType';
  associatedConsolidationAccountingUnits: Array<ConsolidationAccountingUnit>;
  bsConsolidationJournalSummary: ConsolidationJournalSummaryType;
  consolidationJournalOperationHistory: Array<ConsolidationJournalOperationHistory>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  openingJournalType: OpeningJournalType;
  plConsolidationJournalSummary: ConsolidationJournalSummaryType;
  remarks?: Maybe<Scalars['String']['output']>;
  sortOrder: Scalars['Int']['output'];
  tenantUid: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type ConsolidationJournalTypeBsConsolidationJournalSummaryArgs = {
  consolidationAccountingUnitId: Scalars['ID']['input'];
};


export type ConsolidationJournalTypeConsolidationJournalOperationHistoryArgs = {
  consolidationAccountingUnitId: Scalars['ID']['input'];
};


export type ConsolidationJournalTypePlConsolidationJournalSummaryArgs = {
  consolidationAccountingUnitId: Scalars['ID']['input'];
};

export type ConsolidationPackage = {
  __typename?: 'ConsolidationPackage';
  balanceSheet?: Maybe<BalanceSheet>;
  company: Company;
  consolidationPackageOperationHistories: Array<ConsolidationPackageOperationHistory>;
  consolidationProcess: ConsolidationProcessType;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  importingConsolidationPackageJob?: Maybe<ConsolidationPackageImportJob>;
  isUsedConPkg: Scalars['Boolean']['output'];
  isUsedConacJournal: Scalars['Boolean']['output'];
  latestUpdatedAt: Scalars['DateTime']['output'];
  profitAndLoss?: Maybe<ProfitAndLoss>;
  segmentStructure: ConsolidationPackageSegmentStructure;
  sortOrder: Scalars['Int']['output'];
  submissionRequired: Scalars['Boolean']['output'];
  trialBalance?: Maybe<TrialBalance>;
};

export enum ConsolidationPackageHistoryType {
  ConsolidationPackageReset = 'CONSOLIDATION_PACKAGE_RESET',
  FinancialStatementModification = 'FINANCIAL_STATEMENT_MODIFICATION',
  TrialBalanceImport = 'TRIAL_BALANCE_IMPORT',
  TrialBalanceImportFromCa = 'TRIAL_BALANCE_IMPORT_FROM_CA',
  TrialBalanceImportFromCamid = 'TRIAL_BALANCE_IMPORT_FROM_CAMID'
}

export type ConsolidationPackageImportFromCaJob = ConsolidationPackageImportJob & {
  __typename?: 'ConsolidationPackageImportFromCaJob';
  jobType: ConsolidationPackageImportJobType;
  resource: CaIntegrationResource;
  serviceName: Scalars['String']['output'];
};

export type ConsolidationPackageImportFromCamidJob = ConsolidationPackageImportJob & {
  __typename?: 'ConsolidationPackageImportFromCamidJob';
  jobType: ConsolidationPackageImportJobType;
  resource: CamidIntegrationResource;
  serviceName: Scalars['String']['output'];
};

export type ConsolidationPackageImportFromExcelJob = ConsolidationPackageImportJob & {
  __typename?: 'ConsolidationPackageImportFromExcelJob';
  excelFileName: Scalars['String']['output'];
  jobType: ConsolidationPackageImportJobType;
};

export type ConsolidationPackageImportJob = {
  jobType: ConsolidationPackageImportJobType;
};

export enum ConsolidationPackageImportJobType {
  ImportConsolidationPackageFromCa = 'IMPORT_CONSOLIDATION_PACKAGE_FROM_CA',
  ImportConsolidationPackageFromCamid = 'IMPORT_CONSOLIDATION_PACKAGE_FROM_CAMID',
  ImportConsolidationPackageFromExcelFile = 'IMPORT_CONSOLIDATION_PACKAGE_FROM_EXCEL_FILE'
}

export type ConsolidationPackageImportSetting = {
  __typename?: 'ConsolidationPackageImportSetting';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  operatedAt: Scalars['DateTime']['output'];
  tenantUid: Scalars['ID']['output'];
  trialBalanceImportSettings: Array<TrialBalanceImportSetting>;
};

export type ConsolidationPackageImportStatusesNotification = {
  __typename?: 'ConsolidationPackageImportStatusesNotification';
  consolidationAccountingUnitId: Scalars['ID']['output'];
  status: JobStatus;
};

export type ConsolidationPackageImportStatusesSubscriptionInput = {
  consolidationAccountingUnitId: Scalars['ID']['input'];
};

export type ConsolidationPackageOperationHistory = {
  createdAt: Scalars['DateTime']['output'];
  historyType: ConsolidationPackageHistoryType;
  id: Scalars['ID']['output'];
  officeMemberName?: Maybe<Scalars['String']['output']>;
};

export enum ConsolidationPackageOperationTarget {
  Bs = 'BS',
  Pl = 'PL',
  Tb = 'TB'
}

export type ConsolidationPackageResetOperationHistory = ConsolidationPackageOperationHistory & {
  __typename?: 'ConsolidationPackageResetOperationHistory';
  createdAt: Scalars['DateTime']['output'];
  historyType: ConsolidationPackageHistoryType;
  id: Scalars['ID']['output'];
  officeMemberName?: Maybe<Scalars['String']['output']>;
  resetBalanceAdjustment: Scalars['Boolean']['output'];
  resetConsolidationPackage: Scalars['Boolean']['output'];
  resetTranslationAdjustment: Scalars['Boolean']['output'];
};

export type ConsolidationPackageSegmentStructure = {
  __typename?: 'ConsolidationPackageSegmentStructure';
  lastModifiedAt: Scalars['DateTime']['output'];
  rows: Array<ConsolidationPackageSegmentStructureRow>;
};

export type ConsolidationPackageSegmentStructureRow = {
  __typename?: 'ConsolidationPackageSegmentStructureRow';
  segment: Segment;
  segmentIdentificationKeys: Array<Scalars['String']['output']>;
  sortOrder: Scalars['Int']['output'];
};

export enum ConsolidationProcessType {
  Included = 'INCLUDED',
  NotIncluded = 'NOT_INCLUDED'
}

export enum ConversionRuleSkipReason {
  NotRequired = 'NOT_REQUIRED',
  NotSet = 'NOT_SET'
}

export enum ConversionType {
  Ar = 'AR',
  Cr = 'CR',
  Hr = 'HR'
}

export type CreateAccountConversionRulePreviewInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  consolidationPackageId: Scalars['ID']['input'];
  consolidationPackageImportSettingId: Scalars['ID']['input'];
  fileName: Scalars['String']['input'];
  fileUrl: Scalars['String']['input'];
};

export type CreateAccountConversionRulePreviewPayload = {
  __typename?: 'CreateAccountConversionRulePreviewPayload';
  accountConversionRulePreviews: Array<AccountConversionRulePreview>;
  errors?: Maybe<TrialBalancePreviewErrors>;
  uploadedFileId: Scalars['ID']['output'];
};

export type CreateCompanyMasterCsvExportUrlMutationPayload = {
  __typename?: 'CreateCompanyMasterCsvExportUrlMutationPayload';
  downloadUrl: Scalars['String']['output'];
};

export type CreateCompanyMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyInput: CompanyInput;
};

export type CreateCompanyMutationPayload = {
  __typename?: 'CreateCompanyMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  userErrors: Array<UserError>;
};

export type CreateConsolidatedAccountCsvExportUrlMutationPayload = {
  __typename?: 'CreateConsolidatedAccountCsvExportUrlMutationPayload';
  downloadUrl: Scalars['String']['output'];
};

export type CreateConsolidatedAccountMutationInput = {
  amountType: AmountType;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  consolidatedAccountSubCategoryId: Scalars['ID']['input'];
  conversionType: ConversionType;
  description?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameJa: Scalars['String']['input'];
};

export type CreateConsolidatedAccountMutationPayload = {
  __typename?: 'CreateConsolidatedAccountMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consolidatedAccount?: Maybe<ConsolidatedAccount>;
  userErrors: Array<UserError>;
};

export type CreateConsolidationAccountingUnitCompanyInput = {
  companyId: Scalars['ID']['input'];
  consolidationProcessType: ConsolidationProcessType;
  sortOrder: Scalars['Int']['input'];
  submissionRequired: Scalars['Boolean']['input'];
};

export type CreateConsolidationAccountingUnitMutationInput = {
  assignedAccountsCopySourceConsolidationAccountingUnitId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companies: Array<CreateConsolidationAccountingUnitCompanyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['Date']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameJa: Scalars['String']['input'];
  preConsolidationAccountingUnitId?: InputMaybe<Scalars['ID']['input']>;
  startDate: Scalars['Date']['input'];
  workClassificationId: Scalars['ID']['input'];
};

export type CreateConsolidationAccountingUnitMutationPayload = {
  __typename?: 'CreateConsolidationAccountingUnitMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consolidationAccountingUnit?: Maybe<ConsolidationAccountingUnit>;
  userErrors: Array<UserError>;
};

export type CreateConsolidationJournalCsvExportUrlMutationInput = {
  consolidationAccountingUnitId: Scalars['ID']['input'];
};

export type CreateConsolidationJournalCsvExportUrlMutationPayload = {
  __typename?: 'CreateConsolidationJournalCsvExportUrlMutationPayload';
  downloadUrl: Scalars['String']['output'];
};

export type CreateConsolidationJournalImportFileDownloadUrlMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  uploadedFileId: Scalars['ID']['input'];
};

export type CreateConsolidationJournalImportFileDownloadUrlMutationPayload = {
  __typename?: 'CreateConsolidationJournalImportFileDownloadUrlMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type CreateConsolidationJournalImportFileUploadUrlMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  fileName: Scalars['String']['input'];
};

export type CreateConsolidationJournalImportFileUploadUrlMutationPayLoad = {
  __typename?: 'CreateConsolidationJournalImportFileUploadUrlMutationPayLoad';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type CreateConsolidationJournalPreviewMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  fileName: Scalars['String']['input'];
  journalTypeId: Scalars['ID']['input'];
  key: Scalars['String']['input'];
};

export type CreateConsolidationJournalPreviewMutationPayload = {
  __typename?: 'CreateConsolidationJournalPreviewMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  previews: Array<ConsolidationJournalPreview>;
  uploadedFileId: Scalars['ID']['output'];
};

export type CreateConsolidationJournalTypeMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  openingJournalType: OpeningJournalType;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsolidationJournalTypeMutationPayload = {
  __typename?: 'CreateConsolidationJournalTypeMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consolidationJournalType?: Maybe<ConsolidationJournalType>;
  userErrors: Array<UserError>;
};

export type CreateConsolidationPackageImportFileUploadUrlMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  fileName: Scalars['String']['input'];
};

export type CreateConsolidationPackageImportFileUploadUrlMutationPayload = {
  __typename?: 'CreateConsolidationPackageImportFileUploadUrlMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type CreateConsolidationPackageImportSettingMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  trialBalanceImportSettings: Array<CreateTrialBalanceImportSettingInput>;
};

export type CreateConsolidationPackageImportSettingMutationPayload = {
  __typename?: 'CreateConsolidationPackageImportSettingMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consolidationPackageImportSetting?: Maybe<ConsolidationPackageImportSetting>;
  userErrors: Array<UserError>;
};

export type CreateConsolidationWorksheetCsvExportUrlMutationInput = {
  consolidationAccountingUnitId: Scalars['ID']['input'];
};

export type CreateConsolidationWorksheetCsvExportUrlMutationPayload = {
  __typename?: 'CreateConsolidationWorksheetCsvExportUrlMutationPayload';
  downloadUrl: Scalars['String']['output'];
};

export type CreateOfficeMemberMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  roleIds: Array<Scalars['ID']['input']>;
  tenantUserUid: Scalars['String']['input'];
};

export type CreateOfficeMemberMutationPayload = {
  __typename?: 'CreateOfficeMemberMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  officeMember: OfficeMember;
};

export type CreateOfficeMutationInput = {
  accountingUnitEndDate: Scalars['Date']['input'];
  accountingUnitNameJa: Scalars['String']['input'];
  accountingUnitStartDate: Scalars['Date']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  tenantUid: Scalars['ID']['input'];
  tenantUserUid: Scalars['ID']['input'];
};

export type CreateOfficeMutationPayload = {
  __typename?: 'CreateOfficeMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateSegmentMutationInput = {
  abbreviation: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameJa: Scalars['String']['input'];
};

export type CreateSegmentMutationPayload = {
  __typename?: 'CreateSegmentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  segment?: Maybe<Segment>;
  userErrors: Array<UserError>;
};

export type CreateTimeLimitedDownloadUrlMutationInput = {
  uploadedFileId: Scalars['ID']['input'];
};

export type CreateTimeLimitedDownloadUrlMutationPayload = {
  __typename?: 'CreateTimeLimitedDownloadUrlMutationPayload';
  downloadUrl: Scalars['String']['output'];
};

export type CreateTrialBalanceImportSettingInput = {
  accountCodeColumn: Scalars['String']['input'];
  accountNameColumn: Scalars['String']['input'];
  balanceColumn: Scalars['String']['input'];
  endRow: Scalars['Int']['input'];
  sheetName: Scalars['String']['input'];
  startRow: Scalars['Int']['input'];
};

export type CreateWorkClassificationMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: WorkClassificationCodeInput;
  description?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameJa: Scalars['String']['input'];
};

export type CreateWorkClassificationMutationPayload = {
  __typename?: 'CreateWorkClassificationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userErrors: Array<UserError>;
  workClassification?: Maybe<WorkClassification>;
};

export enum Currency {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Bov = 'BOV',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byr = 'BYR',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Che = 'CHE',
  Chf = 'CHF',
  Chw = 'CHW',
  Clf = 'CLF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Cou = 'COU',
  Crc = 'CRC',
  Cuc = 'CUC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mru = 'MRU',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Mxv = 'MXV',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Stn = 'STN',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Usn = 'USN',
  Uyi = 'UYI',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vef = 'VEF',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xdr = 'XDR',
  Xof = 'XOF',
  Xpf = 'XPF',
  Xsu = 'XSU',
  Xua = 'XUA',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW',
  Zwl = 'ZWL'
}

export type CurrentAmountPerCompany = ExcludedInCurrentConsolidationProcess | IncludedInCurrentConsolidationProcess;

export type DeleteCaIntegrationSettingMutationInput = {
  caIntegrationSettingId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteCaIntegrationSettingMutationPayload = {
  __typename?: 'DeleteCaIntegrationSettingMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteCamidIntegrationSettingMutationInput = {
  camidIntegrationSettingId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteCamidIntegrationSettingMutationPayload = {
  __typename?: 'DeleteCamidIntegrationSettingMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteCompanyMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteCompanyMutationPayload = {
  __typename?: 'DeleteCompanyMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteConsolidatedAccountMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteConsolidatedAccountMutationPayload = {
  __typename?: 'DeleteConsolidatedAccountMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteConsolidationJournalRowsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  journalTypeId: Scalars['ID']['input'];
};

export type DeleteConsolidationJournalRowsMutationPayload = {
  __typename?: 'DeleteConsolidationJournalRowsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteConsolidationJournalTypeMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationJournalTypeId: Scalars['ID']['input'];
};

export type DeleteConsolidationJournalTypeMutationPayLoad = {
  __typename?: 'DeleteConsolidationJournalTypeMutationPayLoad';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteConsolidationPackageImportSettingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteConsolidationPackageImportSettingPayload = {
  __typename?: 'DeleteConsolidationPackageImportSettingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteOfficeMemberMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  officeMemberId: Scalars['ID']['input'];
};

export type DeleteOfficeMemberMutationPayload = {
  __typename?: 'DeleteOfficeMemberMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteWorkClassificationMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteWorkClassificationMutationPayload = {
  __typename?: 'DeleteWorkClassificationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DifferenceAmountPerCompany = {
  __typename?: 'DifferenceAmountPerCompany';
  amount: Scalars['Float']['output'];
  company: Company;
};

export type ErrorsPerAssignedConsolidatedAccount = {
  __typename?: 'ErrorsPerAssignedConsolidatedAccount';
  errors: Array<CarryForwardPerAssignedConsolidatedAccountError>;
  previousAssignedConsolidatedAccount: AssignedConsolidatedAccount;
};

export type ErrorsPerConsolidationPackage = {
  __typename?: 'ErrorsPerConsolidationPackage';
  errors: Array<CarryForwardPerCompanyError>;
  previousConsolidationPackage: ConsolidationPackage;
};

export type ExcelRowErrorPositionType = {
  __typename?: 'ExcelRowErrorPositionType';
  column: Scalars['String']['output'];
  rows: Array<Scalars['String']['output']>;
};

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  averageRate: Scalars['Float']['output'];
  company: Company;
  companyId: Scalars['ID']['output'];
  consolidationAccountingUnitId: Scalars['ID']['output'];
  currentRate: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  tenantUid: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ExcludedInCurrentConsolidationProcess = {
  __typename?: 'ExcludedInCurrentConsolidationProcess';
  company: Company;
};

export type ExcludedInCurrentConsolidationProcessForTa = {
  __typename?: 'ExcludedInCurrentConsolidationProcessForTA';
  company: Company;
  items: Array<TranslationAdjustmentPreviewCurrentRowItem>;
};

export type ExportBalanceSheetBySubCategoryMutationInput = {
  conacUnitID: Scalars['ID']['input'];
  packageID: Scalars['ID']['input'];
};

export type ExportBalanceSheetBySubCategoryMutationPayload = {
  __typename?: 'ExportBalanceSheetBySubCategoryMutationPayload';
  downloadUrl: Scalars['String']['output'];
};

export type ExportBalanceSheetMutationInput = {
  conacUnitID: Scalars['ID']['input'];
  packageID: Scalars['ID']['input'];
};

export type ExportBalanceSheetMutationPayload = {
  __typename?: 'ExportBalanceSheetMutationPayload';
  downloadUrl: Scalars['String']['output'];
};

export type ExportPlSheetMutationInput = {
  conacUnitID: Scalars['ID']['input'];
  packageID: Scalars['ID']['input'];
};

export type ExportPlSheetMutationPayload = {
  __typename?: 'ExportPLSheetMutationPayload';
  downloadUrl: Scalars['String']['output'];
};

export type ExportProfitLossSheetBySubCategoryMutationInput = {
  conacUnitID: Scalars['ID']['input'];
  packageID: Scalars['ID']['input'];
};

export type ExportProfitLossSheetBySubCategoryMutationPayload = {
  __typename?: 'ExportProfitLossSheetBySubCategoryMutationPayload';
  downloadUrl: Scalars['String']['output'];
};

export type FsSummaryRow = {
  __typename?: 'FSSummaryRow';
  amount: Scalars['Float']['output'];
  subCategory: ConsolidatedAccountSubCategory;
};

export type FeatureFlags = {
  __typename?: 'FeatureFlags';
  isCarryForwardOpsHistoryEnabled: Scalars['Boolean']['output'];
  isCarryForwardTranslationAdjustmentEnabled: Scalars['Boolean']['output'];
  isExportBalanceAndProfitLossEnabled: Scalars['Boolean']['output'];
  isMultipleLanguagesEnabled: Scalars['Boolean']['output'];
  isSegmentWorksheetEnabled: Scalars['Boolean']['output'];
  isSortOrderCompanySegmentEnabled: Scalars['Boolean']['output'];
  isSsoEnabled: Scalars['Boolean']['output'];
  isViewerRoleEnabled: Scalars['Boolean']['output'];
};

export type FinancialStatementModificationOperationHistory = ConsolidationPackageOperationHistory & {
  __typename?: 'FinancialStatementModificationOperationHistory';
  accountNamesEn?: Maybe<Scalars['String']['output']>;
  accountNamesJa: Scalars['String']['output'];
  consolidationPackageOperationTarget: ConsolidationPackageOperationTarget;
  createdAt: Scalars['DateTime']['output'];
  financialStatementOperationTarget: FinancialStatementModificationOperationTarget;
  historyType: ConsolidationPackageHistoryType;
  id: Scalars['ID']['output'];
  officeMemberName?: Maybe<Scalars['String']['output']>;
};

export enum FinancialStatementModificationOperationTarget {
  Adjustment = 'ADJUSTMENT',
  Remark = 'REMARK',
  TranslationAdjustment = 'TRANSLATION_ADJUSTMENT'
}

export type FinancialStatementRow = {
  __typename?: 'FinancialStatementRow';
  adjustedBalance: Scalars['Float']['output'];
  adjustedTranslatedBalance?: Maybe<Scalars['Float']['output']>;
  assignedConsolidatedAccount: AssignedConsolidatedAccount;
  balance: Scalars['Float']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  translatedBalance: Scalars['Float']['output'];
};

export enum FinancialStatementType {
  Bs = 'BS',
  Pl = 'PL'
}

export type GenerateConsolidatedAccountFileUploadUrlMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fileName: Scalars['String']['input'];
};

export type GenerateConsolidatedAccountFileUploadUrlMutationPayload = {
  __typename?: 'GenerateConsolidatedAccountFileUploadUrlMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type IdSortOrderInput = {
  id: Scalars['ID']['input'];
  sortOrder: Scalars['Int']['input'];
};

export type ImportConsolidatedAccountMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  previewRows: Array<ConsolidatedAccountPreviewRowInput>;
};

export type ImportConsolidatedAccountMutationPayload = {
  __typename?: 'ImportConsolidatedAccountMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ImportConsolidationJournalsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  consolidationJournalPreviews: Array<ConsolidationJournalPreviewInput>;
  consolidationJournalTypeId: Scalars['ID']['input'];
  uploadedFileId: Scalars['ID']['input'];
};

export type ImportConsolidationJournalsMutationPayload = {
  __typename?: 'ImportConsolidationJournalsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ImportConsolidationPackageFromExternalServiceMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  consolidationPackageId: Scalars['ID']['input'];
  integrationServiceType: IntegrationServiceType;
  subscriptionId: Scalars['String']['input'];
  trialBalancePreviews: Array<TrialBalancePreviewInput>;
};

export type ImportConsolidationPackageFromExternalServiceMutationPayload = {
  __typename?: 'ImportConsolidationPackageFromExternalServiceMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ImportConsolidationPackageMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  consolidationPackageId: Scalars['ID']['input'];
  consolidationPackageImportSettingId: Scalars['ID']['input'];
  subscriptionId: Scalars['String']['input'];
  uploadedFileId: Scalars['ID']['input'];
};

export type ImportConsolidationPackageMutationPayload = {
  __typename?: 'ImportConsolidationPackageMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userErrors: Array<UserError>;
};

export enum ImportStatus {
  ConversionUnnecessary = 'CONVERSION_UNNECESSARY',
  Converted = 'CONVERTED',
  NoRulesFound = 'NO_RULES_FOUND'
}

export type IncludedInCurrentConsolidationProcess = {
  __typename?: 'IncludedInCurrentConsolidationProcess';
  amount: Scalars['Float']['output'];
  consolidationPackage: ConsolidationPackage;
};

export type IncludedInCurrentConsolidationProcessForTa = {
  __typename?: 'IncludedInCurrentConsolidationProcessForTA';
  consolidationPackage: ConsolidationPackage;
  items: Array<TranslationAdjustmentPreviewCurrentRowItem>;
};

export type IntegrationService = {
  __typename?: 'IntegrationService';
  name: Scalars['String']['output'];
  type: IntegrationServiceType;
};

export enum IntegrationServiceType {
  Ca = 'CA',
  CaMid = 'CA_MID'
}

export type IntegrationSetting = {
  id: Scalars['ID']['output'];
  integratedAt: Scalars['DateTime']['output'];
  integrationService: IntegrationService;
};

export enum InversionMultiplier {
  Minus = 'MINUS',
  Plus = 'PLUS'
}

export type JobNotification = {
  __typename?: 'JobNotification';
  jobId: Scalars['String']['output'];
  status: JobStatus;
  type: JobStatusMessageType;
};

export enum JobStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export enum JobStatusMessageType {
  CarryForward = 'CARRY_FORWARD',
  CarryForwardReset = 'CARRY_FORWARD_RESET',
  ImportConsolidationPackageFromCa = 'IMPORT_CONSOLIDATION_PACKAGE_FROM_CA',
  ImportConsolidationPackageFromCamid = 'IMPORT_CONSOLIDATION_PACKAGE_FROM_CAMID',
  ImportConsolidationPackageFromExcelFile = 'IMPORT_CONSOLIDATION_PACKAGE_FROM_EXCEL_FILE'
}

export type JobSubscriptionInput = {
  jobId: Scalars['ID']['input'];
};

export enum JournalGroupKeyError {
  EmptyKey = 'EMPTY_KEY',
  NeitherAlphanumericNorAvailableSymbolKey = 'NEITHER_ALPHANUMERIC_NOR_AVAILABLE_SYMBOL_KEY',
  TooLongKey = 'TOO_LONG_KEY'
}

export type JournalGroupKeyPreview = {
  __typename?: 'JournalGroupKeyPreview';
  errors: Array<JournalGroupKeyPreviewError>;
  value: Scalars['String']['output'];
};

export type JournalGroupKeyPreviewError = {
  __typename?: 'JournalGroupKeyPreviewError';
  error: JournalGroupKeyError;
  message: Scalars['String']['output'];
};

export type JournalGroupKeyPreviewErrorInput = {
  error: JournalGroupKeyError;
  message: Scalars['String']['input'];
};

export type JournalGroupKeyPreviewInput = {
  errors: Array<JournalGroupKeyPreviewErrorInput>;
  value: Scalars['String']['input'];
};

export enum JournalOperation {
  Import = 'IMPORT',
  Reset = 'RESET'
}

export type LoginOffice = {
  __typename?: 'LoginOffice';
  identificationCode: Scalars['String']['output'];
  isUnderContract: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  tenantUid: Scalars['ID']['output'];
};

export type LoginOfficeMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  tenantUid: Scalars['ID']['input'];
};

export type LoginOfficeMutationPayload = {
  __typename?: 'LoginOfficeMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type LoginOfficeSsoMutationInput = {
  tenantUidLongValue: Scalars['String']['input'];
};

export type LoginOfficeSsoMutationPayload = {
  __typename?: 'LoginOfficeSsoMutationPayload';
  hasPermission: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Build a ca account conversion rule preview */
  buildCaAccountConversionRulePreview: BuildCaAccountConversionRulePreviewMutationPayload;
  /** Build a camid account conversion rule preview */
  buildCamidAccountConversionRulePreview: BuildCamidAccountConversionRulePreviewMutationPayload;
  buildConsolidatedAccountsPreview: BuildConsolidatedAccountsPreviewMutationPayload;
  /** Carry retained earnings and HR accounts forward, and execute opening journal entry */
  carryForward: CarryForwardPayload;
  createAccountConversionRulePreview: CreateAccountConversionRulePreviewPayload;
  /** Create company */
  createCompany: CreateCompanyMutationPayload;
  /** Generate company master csv file url */
  createCompanyMasterCsvExportUrl: CreateCompanyMasterCsvExportUrlMutationPayload;
  /** Create a consolidated account */
  createConsolidatedAccount: CreateConsolidatedAccountMutationPayload;
  /** Generate consolidated account master csv file url */
  createConsolidatedAccountCsvExportUrl: CreateConsolidatedAccountCsvExportUrlMutationPayload;
  /** Create a consolidation accounting unit */
  createConsolidationAccountingUnit: CreateConsolidationAccountingUnitMutationPayload;
  /** Generate a url for a CSV file of consolidated journal entries data */
  createConsolidationJournalCsvExportUrl: CreateConsolidationJournalCsvExportUrlMutationPayload;
  createConsolidationJournalImportFileDownloadUrl: CreateConsolidationJournalImportFileDownloadUrlMutationPayload;
  /** Retrieve upload url for uploading consolidation journal excel file */
  createConsolidationJournalImportFileUploadUrl: CreateConsolidationJournalImportFileUploadUrlMutationPayLoad;
  /** Generate Preview of ConsolidationJournal, or ConsolidationJournalPreview entity */
  createConsolidationJournalPreview: CreateConsolidationJournalPreviewMutationPayload;
  /** Create a ConsolidationJournalType */
  createConsolidationJournalType: CreateConsolidationJournalTypeMutationPayload;
  /** Create url for uploading file of consolidation package import */
  createConsolidationPackageImportFileUploadUrl: CreateConsolidationPackageImportFileUploadUrlMutationPayload;
  /** Create a consolidation package import setting */
  createConsolidationPackageImportSetting: CreateConsolidationPackageImportSettingMutationPayload;
  /** Generate CSV export URL by current consolidationAccountingUnitId and tenantUid */
  createConsolidationWorksheetCsvExportUrl: CreateConsolidationWorksheetCsvExportUrlMutationPayload;
  /** Create office */
  createOffice: CreateOfficeMutationPayload;
  /** Create a office member */
  createOfficeMember: CreateOfficeMemberMutationPayload;
  /** Create segment */
  createSegment: CreateSegmentMutationPayload;
  /** Generate time limited download URL of uploaded file */
  createTimeLimitedDownloadUrl: CreateTimeLimitedDownloadUrlMutationPayload;
  /** Create workClassification */
  createWorkClassification: CreateWorkClassificationMutationPayload;
  /** Delete ca integration setting */
  deleteCaIntegrationSetting: DeleteCaIntegrationSettingMutationPayload;
  /** Delete camid integration setting */
  deleteCamidIntegrationSetting: DeleteCamidIntegrationSettingMutationPayload;
  /** Delete company */
  deleteCompany: DeleteCompanyMutationPayload;
  /** Delete consolidated account */
  deleteConsolidatedAccount: DeleteConsolidatedAccountMutationPayload;
  /** Delete ConsolidationJournalRows only CURRENT data */
  deleteConsolidationJournalRows: DeleteConsolidationJournalRowsMutationPayload;
  /** Delete ConsolidationJournalType */
  deleteConsolidationJournalType: DeleteConsolidationJournalTypeMutationPayLoad;
  deleteConsolidationPackageImportSetting: DeleteConsolidationPackageImportSettingPayload;
  deleteOfficeMember: DeleteOfficeMemberMutationPayload;
  /** Delete work classification */
  deleteWorkClassification: DeleteWorkClassificationMutationPayload;
  exportBSBySubCategory: ExportBalanceSheetBySubCategoryMutationPayload;
  exportBalanceSheet: ExportBalanceSheetMutationPayload;
  exportPLSheet: ExportPlSheetMutationPayload;
  exportPLSheetBySubCategory: ExportProfitLossSheetBySubCategoryMutationPayload;
  generateConsolidatedAccountFileUploadUrl: GenerateConsolidatedAccountFileUploadUrlMutationPayload;
  importConsolidatedAccount: ImportConsolidatedAccountMutationPayload;
  /** Import consolidation journals from front end request data */
  importConsolidationJournals: ImportConsolidationJournalsMutationPayload;
  /** Create a new consolidation package import job */
  importConsolidationPackage: ImportConsolidationPackageMutationPayload;
  /** Import consolidation package from external service */
  importConsolidationPackageFromExternalService: ImportConsolidationPackageFromExternalServiceMutationPayload;
  /** Login office */
  loginOffice: LoginOfficeMutationPayload;
  /** Login office when sso */
  loginOfficeSso: LoginOfficeSsoMutationPayload;
  resetCarryForward: ResetCarryForwardMutationPayload;
  resetConsolidationPackage: ResetConsolidationPackageMutationPayload;
  updateAccountConversionRule: UpdateAccountConversionRuleMutationPayload;
  /** Update AssignedConsolidatedAccounts */
  updateAssignedConsolidatedAccounts: UpdateAssignedConsolidatedAccountsMutationPayLoad;
  /** Update translation adjustments of balance sheet */
  updateBSTranslationAdjustments: UpdateBsTranslationAdjustmentsMutationPayload;
  updateBsBalanceAdjustment: UpdateBsBalanceAdjustmentsMutationPayload;
  /** Update company */
  updateCompany: UpdateCompanyMutationPayload;
  updateCompanySortOrder: UpdateCompanySortOrderMutationPayload;
  updateConsolidatedAccount: UpdateConsolidatedAccountMutationPayload;
  /** Update a consolidation accounting unit */
  updateConsolidationAccountingUnit: UpdateConsolidationAccountingUnitMutationPayload;
  /** Update a lock status of consolidation accounting unit */
  updateConsolidationAccountingUnitLockStatus: UpdateConsolidationAccountingUnitLockStatusMutationPayload;
  /** Update a ConsolidationJournalType */
  updateConsolidationJournalType: UpdateConsolidationJournalTypeMutationPayload;
  /** Update ConsolidationJournalType sortOrder */
  updateConsolidationJournalTypeSortOrder: UpdateConsolidationJournalTypeSortOrderMutationPayload;
  /** Update a consolidation package import setting */
  updateConsolidationPackageImportSetting: UpdateConsolidationPackageImportSettingMutationPayload;
  /** Update exchange rates */
  updateExchangeRates: UpdateExchangeRatesMutationPayload;
  updateOfficeMember: UpdateOfficeMemberMutationPayload;
  /** Update or create consolidation journal import setting */
  updateOrCreateConsolidationJournalImportSetting: UpdateOrCreateConsolidationJournalImportSettingMutationPayLoad;
  /** Update translation adjustments of profit and loss */
  updatePLTranslationAdjustments: UpdatePlTranslationAdjustmentsMutationPayload;
  updatePlBalanceAdjustment: UpdatePlBalanceAdjustmentsMutationPayload;
  /** Update reserved consolidated accounts */
  updateReservedConsolidatedAccounts: UpdateReservedConsolidatedAccountsMutationPayload;
  /** Update segment */
  updateSegment: UpdateSegmentMutationPayload;
  /** Update Segment sortOrder */
  updateSegmentSortOrder: UpdateSegmentSortOrderMutationPayload;
  /** Update user language */
  updateUserLanguage: UpdateUserStatusMutationPayload;
  /** Update user status */
  updateUserStatus: UpdateUserStatusMutationPayload;
  /** Update workClassification */
  updateWorkClassification: UpdateWorkClassificationMutationPayload;
  upsertConsolidatedAccountImportSetting: UpsertConsolidatedAccountImportSettingMutationPayload;
};


export type MutationBuildCaAccountConversionRulePreviewArgs = {
  input: BuildCaAccountConversionRulePreviewMutationInput;
};


export type MutationBuildCamidAccountConversionRulePreviewArgs = {
  input: BuildCamidAccountConversionRulePreviewMutationInput;
};


export type MutationBuildConsolidatedAccountsPreviewArgs = {
  input: BuildConsolidatedAccountsPreviewMutationInput;
};


export type MutationCarryForwardArgs = {
  input: CarryForwardInput;
};


export type MutationCreateAccountConversionRulePreviewArgs = {
  input: CreateAccountConversionRulePreviewInput;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyMutationInput;
};


export type MutationCreateConsolidatedAccountArgs = {
  input: CreateConsolidatedAccountMutationInput;
};


export type MutationCreateConsolidationAccountingUnitArgs = {
  input: CreateConsolidationAccountingUnitMutationInput;
};


export type MutationCreateConsolidationJournalCsvExportUrlArgs = {
  input: CreateConsolidationJournalCsvExportUrlMutationInput;
};


export type MutationCreateConsolidationJournalImportFileDownloadUrlArgs = {
  input: CreateConsolidationJournalImportFileDownloadUrlMutationInput;
};


export type MutationCreateConsolidationJournalImportFileUploadUrlArgs = {
  input: CreateConsolidationJournalImportFileUploadUrlMutationInput;
};


export type MutationCreateConsolidationJournalPreviewArgs = {
  input: CreateConsolidationJournalPreviewMutationInput;
};


export type MutationCreateConsolidationJournalTypeArgs = {
  input: CreateConsolidationJournalTypeMutationInput;
};


export type MutationCreateConsolidationPackageImportFileUploadUrlArgs = {
  input: CreateConsolidationPackageImportFileUploadUrlMutationInput;
};


export type MutationCreateConsolidationPackageImportSettingArgs = {
  input: CreateConsolidationPackageImportSettingMutationInput;
};


export type MutationCreateConsolidationWorksheetCsvExportUrlArgs = {
  input: CreateConsolidationWorksheetCsvExportUrlMutationInput;
};


export type MutationCreateOfficeArgs = {
  input: CreateOfficeMutationInput;
};


export type MutationCreateOfficeMemberArgs = {
  input: CreateOfficeMemberMutationInput;
};


export type MutationCreateSegmentArgs = {
  input: CreateSegmentMutationInput;
};


export type MutationCreateTimeLimitedDownloadUrlArgs = {
  input: CreateTimeLimitedDownloadUrlMutationInput;
};


export type MutationCreateWorkClassificationArgs = {
  input: CreateWorkClassificationMutationInput;
};


export type MutationDeleteCaIntegrationSettingArgs = {
  input: DeleteCaIntegrationSettingMutationInput;
};


export type MutationDeleteCamidIntegrationSettingArgs = {
  input: DeleteCamidIntegrationSettingMutationInput;
};


export type MutationDeleteCompanyArgs = {
  input: DeleteCompanyMutationInput;
};


export type MutationDeleteConsolidatedAccountArgs = {
  input: DeleteConsolidatedAccountMutationInput;
};


export type MutationDeleteConsolidationJournalRowsArgs = {
  input: DeleteConsolidationJournalRowsMutationInput;
};


export type MutationDeleteConsolidationJournalTypeArgs = {
  input: DeleteConsolidationJournalTypeMutationInput;
};


export type MutationDeleteConsolidationPackageImportSettingArgs = {
  input: DeleteConsolidationPackageImportSettingInput;
};


export type MutationDeleteOfficeMemberArgs = {
  input: DeleteOfficeMemberMutationInput;
};


export type MutationDeleteWorkClassificationArgs = {
  input: DeleteWorkClassificationMutationInput;
};


export type MutationExportBsBySubCategoryArgs = {
  input: ExportBalanceSheetBySubCategoryMutationInput;
};


export type MutationExportBalanceSheetArgs = {
  input: ExportBalanceSheetMutationInput;
};


export type MutationExportPlSheetArgs = {
  input: ExportPlSheetMutationInput;
};


export type MutationExportPlSheetBySubCategoryArgs = {
  input: ExportProfitLossSheetBySubCategoryMutationInput;
};


export type MutationGenerateConsolidatedAccountFileUploadUrlArgs = {
  input: GenerateConsolidatedAccountFileUploadUrlMutationInput;
};


export type MutationImportConsolidatedAccountArgs = {
  input: ImportConsolidatedAccountMutationInput;
};


export type MutationImportConsolidationJournalsArgs = {
  input: ImportConsolidationJournalsMutationInput;
};


export type MutationImportConsolidationPackageArgs = {
  input: ImportConsolidationPackageMutationInput;
};


export type MutationImportConsolidationPackageFromExternalServiceArgs = {
  input: ImportConsolidationPackageFromExternalServiceMutationInput;
};


export type MutationLoginOfficeArgs = {
  input: LoginOfficeMutationInput;
};


export type MutationLoginOfficeSsoArgs = {
  input: LoginOfficeSsoMutationInput;
};


export type MutationResetCarryForwardArgs = {
  input: ResetCarryForwardMutationInput;
};


export type MutationResetConsolidationPackageArgs = {
  input: ResetConsolidationPackageMutationInput;
};


export type MutationUpdateAccountConversionRuleArgs = {
  input: UpdateAccountConversionRuleMutationInput;
};


export type MutationUpdateAssignedConsolidatedAccountsArgs = {
  input: UpdateAssignedConsolidatedAccountsMutationInput;
};


export type MutationUpdateBsTranslationAdjustmentsArgs = {
  input: UpdateBsTranslationAdjustmentsMutationInput;
};


export type MutationUpdateBsBalanceAdjustmentArgs = {
  input: UpdateBsBalanceAdjustmentsMutationInput;
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyMutationInput;
};


export type MutationUpdateCompanySortOrderArgs = {
  input: UpdateCompanySortOrderMutationInput;
};


export type MutationUpdateConsolidatedAccountArgs = {
  input: UpdateConsolidatedAccountMutationInput;
};


export type MutationUpdateConsolidationAccountingUnitArgs = {
  input: UpdateConsolidationAccountingUnitMutationInput;
};


export type MutationUpdateConsolidationAccountingUnitLockStatusArgs = {
  input: UpdateConsolidationAccountingUnitLockStatusMutationInput;
};


export type MutationUpdateConsolidationJournalTypeArgs = {
  input: UpdateConsolidationJournalTypeMutationInput;
};


export type MutationUpdateConsolidationJournalTypeSortOrderArgs = {
  input: UpdateConsolidationJournalTypeSortOrderMutationInput;
};


export type MutationUpdateConsolidationPackageImportSettingArgs = {
  input: UpdateConsolidationPackageImportSettingMutationInput;
};


export type MutationUpdateExchangeRatesArgs = {
  input: UpdateExchangeRatesMutationInput;
};


export type MutationUpdateOfficeMemberArgs = {
  input: UpdateOfficeMemberMutationInput;
};


export type MutationUpdateOrCreateConsolidationJournalImportSettingArgs = {
  input: UpdateOrCreateConsolidationJournalImportSettingMutationInput;
};


export type MutationUpdatePlTranslationAdjustmentsArgs = {
  input: UpdatePlTranslationAdjustmentsMutationInput;
};


export type MutationUpdatePlBalanceAdjustmentArgs = {
  input: UpdatePlBalanceAdjustmentsMutationInput;
};


export type MutationUpdateReservedConsolidatedAccountsArgs = {
  input: UpdateReservedConsolidatedAccountsMutationInput;
};


export type MutationUpdateSegmentArgs = {
  input: UpdateSegmentMutationInput;
};


export type MutationUpdateSegmentSortOrderArgs = {
  input: UpdateSegmentSortOrderMutationInput;
};


export type MutationUpdateUserLanguageArgs = {
  input: UpdateUserStatusMutationInput;
};


export type MutationUpdateUserStatusArgs = {
  input: UpdateUserStatusMutationInput;
};


export type MutationUpdateWorkClassificationArgs = {
  input: UpdateWorkClassificationMutationInput;
};


export type MutationUpsertConsolidatedAccountImportSettingArgs = {
  input: UpsertConsolidatedAccountImportSettingMutationInput;
};

export type Office = {
  __typename?: 'Office';
  companies: Array<Company>;
  company: Company;
  conacUnitOperationHistories: Array<ConsolidationAccountingUnitOperationHistory>;
  consolidatedAccount: ConsolidatedAccount;
  consolidatedAccountImportSetting?: Maybe<ConsolidatedAccountImportSetting>;
  consolidatedAccountSubCategories: Array<ConsolidatedAccountSubCategory>;
  consolidatedAccounts: Array<ConsolidatedAccount>;
  consolidationAccountingUnit: ConsolidationAccountingUnit;
  consolidationAccountingUnits: Array<ConsolidationAccountingUnit>;
  consolidationCurrency: Currency;
  consolidationJournalType: ConsolidationJournalType;
  consolidationJournalTypes: Array<ConsolidationJournalType>;
  consolidationPackageImportSetting: ConsolidationPackageImportSetting;
  consolidationPackageImportSettings: Array<ConsolidationPackageImportSetting>;
  featureFlags: FeatureFlags;
  identificationCode: Scalars['String']['output'];
  /** integration setting list for external services */
  integrationSettings: Array<IntegrationSetting>;
  isUpdatableReservedConsolidatedAccounts: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  officeMember: OfficeMember;
  officeMembers: Array<OfficeMember>;
  roles: Array<Role>;
  segment: Segment;
  segments: Array<Segment>;
  tenantUid: Scalars['ID']['output'];
  toBeReservedConsolidatedAccounts: ToBeReservedConsolidatedAccounts;
  unregisteredTenantUsers: Array<TenantUser>;
  workClassification: WorkClassificationDetailType;
  workClassifications: Array<WorkClassification>;
};


export type OfficeCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type OfficeConsolidatedAccountArgs = {
  id: Scalars['ID']['input'];
};


export type OfficeConsolidationAccountingUnitArgs = {
  id: Scalars['ID']['input'];
};


export type OfficeConsolidationJournalTypeArgs = {
  id: Scalars['ID']['input'];
};


export type OfficeConsolidationPackageImportSettingArgs = {
  id: Scalars['ID']['input'];
};


export type OfficeOfficeMemberArgs = {
  officeMemberId: Scalars['ID']['input'];
};


export type OfficeSegmentArgs = {
  segmentId: Scalars['ID']['input'];
};


export type OfficeWorkClassificationArgs = {
  id: Scalars['ID']['input'];
};

export type OfficeMember = {
  __typename?: 'OfficeMember';
  description?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  roles: Array<Role>;
  undeletableReason?: Maybe<OfficeMemberUndeletableReason>;
};

export enum OfficeMemberError {
  HasOtherRoleBesideViewerRole = 'HAS_OTHER_ROLE_BESIDE_VIEWER_ROLE',
  NoOfficeMemberCanManageUsers = 'NO_OFFICE_MEMBER_CAN_MANAGE_USERS'
}

export enum OfficeMemberUndeletableReason {
  LastUserManager = 'LAST_USER_MANAGER'
}

export type OfficeMemberUpdateError = {
  __typename?: 'OfficeMemberUpdateError';
  error: OfficeMemberError;
  message: Scalars['String']['output'];
};

export enum OpeningClassification {
  Beginning = 'BEGINNING',
  Current = 'CURRENT'
}

export enum OpeningJournalType {
  CarryForward = 'CARRY_FORWARD',
  Elimination = 'ELIMINATION'
}

export type PlConsolidationWorksheetBalance = {
  __typename?: 'PLConsolidationWorksheetBalance';
  consolidationAccountingUnitId: Scalars['ID']['output'];
  rows: Array<PlConsolidationWorksheetBalanceRow>;
  summary: PlSummary;
};

export type PlConsolidationWorksheetBalanceRow = {
  __typename?: 'PLConsolidationWorksheetBalanceRow';
  adjustedBalance: Scalars['Float']['output'];
  adjustmentBalance: Scalars['Float']['output'];
  assignedConsolidatedAccount: AssignedConsolidatedAccount;
  totalBalance: Scalars['Float']['output'];
};

export type PlSummary = {
  __typename?: 'PLSummary';
  grossProfitAmount: Scalars['Float']['output'];
  grossProfitItems: Array<FsSummaryRow>;
  operatingProfitAmount: Scalars['Float']['output'];
  operatingProfitItems: Array<FsSummaryRow>;
  ordinaryProfitAmount: Scalars['Float']['output'];
  ordinaryProfitItems: Array<FsSummaryRow>;
  profitAttributableToOwnersOfParentAmount: Scalars['Float']['output'];
  profitAttributableToOwnersOfParentItems: Array<FsSummaryRow>;
  profitBeforeIncomeTaxesAmount: Scalars['Float']['output'];
  profitBeforeIncomeTaxesItems: Array<FsSummaryRow>;
};

export type PlTranslationAdjustment = {
  __typename?: 'PLTranslationAdjustment';
  afterTranslationBalance: Scalars['Float']['output'];
  assignedConsolidatedAccountId: Scalars['ID']['output'];
  beforeTranslationBalance?: Maybe<Scalars['Float']['output']>;
  financialStatementId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  openingClassification: OpeningClassification;
  remark?: Maybe<Scalars['String']['output']>;
  tenantUid: Scalars['ID']['output'];
};

export type Permission = {
  __typename?: 'Permission';
  companyId?: Maybe<Scalars['ID']['output']>;
  function: PermissionFunction;
  id: Scalars['ID']['output'];
  roleId: Scalars['ID']['output'];
  tenantUid: Scalars['ID']['output'];
};

export enum PermissionFunction {
  ConsolidationAccounting = 'CONSOLIDATION_ACCOUNTING',
  ConsolidationAccountingView = 'CONSOLIDATION_ACCOUNTING_VIEW',
  ImportSettingManagement = 'IMPORT_SETTING_MANAGEMENT',
  ImportSettingView = 'IMPORT_SETTING_VIEW',
  PkgImportAll = 'PKG_IMPORT_ALL',
  PkgImportByCompany = 'PKG_IMPORT_BY_COMPANY',
  PkgViewAll = 'PKG_VIEW_ALL',
  PkgViewByCompany = 'PKG_VIEW_BY_COMPANY',
  UserManagement = 'USER_MANAGEMENT',
  UserView = 'USER_VIEW'
}

export type PreviousAmountPerConsolidationPackage = {
  __typename?: 'PreviousAmountPerConsolidationPackage';
  amount: Scalars['Float']['output'];
  consolidationPackage: ConsolidationPackage;
};

export type ProfitAndLoss = {
  __typename?: 'ProfitAndLoss';
  adjustedSummary: PlSummary;
  balanceAdjustments: Array<BalanceAdjustment>;
  id: Scalars['ID']['output'];
  rows: Array<FinancialStatementRow>;
  translatedSummary: PlSummary;
  translationAdjustments: Array<PlTranslationAdjustment>;
};

export type Query = {
  __typename?: 'Query';
  /** fetch account conversion rule recommendation */
  accountConversionRuleRecommendation: AccountConversionRuleRecommendation;
  /** fetch consolidation accounting unit */
  consolidationAccountingUnit: ConsolidationAccountingUnit;
  currentUserPermissions: Array<Permission>;
  /** fetch offices for tenants select page */
  loginOffices: Array<LoginOffice>;
  /** fetch office */
  office: Office;
  /** fetch offices */
  offices: Array<Office>;
  /** fetch URL for tenant registration */
  tenantRegistrationUrl: TenantRegistrationUrlType;
  /** fetch tenant users */
  tenantUsers: Array<TenantUser>;
  /** fetch tenants */
  tenants: Array<Tenant>;
  /** User's current state. */
  userStatus: UserStatus;
};


export type QueryAccountConversionRuleRecommendationArgs = {
  input: AccountConversionRuleRecommendationQueryInput;
};


export type QueryConsolidationAccountingUnitArgs = {
  consolidationAccountingUnitId: Scalars['ID']['input'];
};

export enum RemarkError {
  InvalidFormatRemark = 'INVALID_FORMAT_REMARK',
  TooLongRemark = 'TOO_LONG_REMARK'
}

export type RemarkPreview = {
  __typename?: 'RemarkPreview';
  errors: Array<RemarkPreviewError>;
  value: Scalars['String']['output'];
};

export type RemarkPreviewError = {
  __typename?: 'RemarkPreviewError';
  error: RemarkError;
  message: Scalars['String']['output'];
};

export type RemarkPreviewErrorInput = {
  error: RemarkError;
  message: Scalars['String']['input'];
};

export type RemarkPreviewInput = {
  errors: Array<RemarkPreviewErrorInput>;
  value: Scalars['String']['input'];
};

export enum ReservedConsolidatedAccountsError {
  CurrentReservedConsolidatedAccountsAreInUse = 'CURRENT_RESERVED_CONSOLIDATED_ACCOUNTS_ARE_IN_USE',
  ToBeReservedConsolidatedAccountsAreInUse = 'TO_BE_RESERVED_CONSOLIDATED_ACCOUNTS_ARE_IN_USE',
  ToBeReservedConsolidatedAccountsAreNotAssigned = 'TO_BE_RESERVED_CONSOLIDATED_ACCOUNTS_ARE_NOT_ASSIGNED',
  ToBeReservedConsolidatedAccountsSomePropertiesNotMatched = 'TO_BE_RESERVED_CONSOLIDATED_ACCOUNTS_SOME_PROPERTIES_NOT_MATCHED'
}

export type ResetCarryForwardMutationInput = {
  consolidationAccountingUnitId: Scalars['ID']['input'];
};

export type ResetCarryForwardMutationPayload = {
  __typename?: 'ResetCarryForwardMutationPayload';
  subscriptionId: Scalars['String']['output'];
};

export type ResetConsolidationPackageMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  consolidationPackageId: Scalars['ID']['input'];
  resetBalanceAdjustment: Scalars['Boolean']['input'];
  resetConsolidationPackage: Scalars['Boolean']['input'];
  resetTranslationAdjustment: Scalars['Boolean']['input'];
};

export type ResetConsolidationPackageMutationPayload = {
  __typename?: 'ResetConsolidationPackageMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RetainedEarningsBroughtForwardPreview = {
  __typename?: 'RetainedEarningsBroughtForwardPreview';
  diff: RetainedEarningsDifference;
  prevRetainedEarningsSummary: RetainedEarningsSummary;
  retainedEarningsBroughtForward: RetainedEarningsBroughtForwardRow;
  rows: Array<RetainedEarningsPreviewRow>;
  warnings: Array<RetainedEarningsPreviewWarning>;
};

export type RetainedEarningsBroughtForwardRow = {
  __typename?: 'RetainedEarningsBroughtForwardRow';
  adjustedBalance: Scalars['Float']['output'];
  adjustmentBalance: Scalars['Float']['output'];
  amountPerCompany: Array<CurrentAmountPerCompany>;
  amountPerConsolidationJournal: Array<AmountPerConsolidationJournalType>;
  assignedConsolidatedAccount: AssignedConsolidatedAccount;
  totalBalance: Scalars['Float']['output'];
};

export type RetainedEarningsDifference = {
  __typename?: 'RetainedEarningsDifference';
  adjustedBalance: Scalars['Float']['output'];
  adjustmentBalance: Scalars['Float']['output'];
  amountPerCompany: Array<DifferenceAmountPerCompany>;
  amountPerConsolidationJournal: Array<AmountPerConsolidationJournalType>;
  totalBalance: Scalars['Float']['output'];
};

export type RetainedEarningsPreviewRow = {
  __typename?: 'RetainedEarningsPreviewRow';
  adjustedBalance: Scalars['Float']['output'];
  adjustmentBalance: Scalars['Float']['output'];
  amountPerConsolidationJournal: Array<AmountPerConsolidationJournalType>;
  amountPerConsolidationPackage: Array<PreviousAmountPerConsolidationPackage>;
  assignedConsolidatedAccount: AssignedConsolidatedAccount;
  totalBalance: Scalars['Float']['output'];
};

export enum RetainedEarningsPreviewWarning {
  InconsistentAmountOfRetainedEarnings = 'INCONSISTENT_AMOUNT_OF_RETAINED_EARNINGS'
}

export type RetainedEarningsSummary = {
  __typename?: 'RetainedEarningsSummary';
  adjustedBalance: Scalars['Float']['output'];
  adjustmentBalance: Scalars['Float']['output'];
  amountPerConsolidationJournal: Array<AmountPerConsolidationJournalType>;
  amountPerConsolidationPackage: Array<PreviousAmountPerConsolidationPackage>;
  totalBalance: Scalars['Float']['output'];
};

export type Role = {
  __typename?: 'Role';
  associatedOfficeMembers: Array<OfficeMember>;
  id: Scalars['ID']['output'];
  isUserManagement: Scalars['Boolean']['output'];
  nameJa: Scalars['String']['output'];
};

export type Segment = {
  __typename?: 'Segment';
  abbreviation: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nameEn?: Maybe<Scalars['String']['output']>;
  nameJa: Scalars['String']['output'];
  sortOrder: Scalars['Int']['output'];
  tenantUid: Scalars['ID']['output'];
};

export enum SegmentAbbreviationError {
  CorrespondingSegmentNotFound = 'CORRESPONDING_SEGMENT_NOT_FOUND',
  InvalidFormatSegmentAbbreviation = 'INVALID_FORMAT_SEGMENT_ABBREVIATION',
  TooLongSegmentAbbreviation = 'TOO_LONG_SEGMENT_ABBREVIATION'
}

export type SegmentAbbreviationPreview = {
  __typename?: 'SegmentAbbreviationPreview';
  errors: Array<SegmentAbbreviationPreviewError>;
  segmentId?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type SegmentAbbreviationPreviewError = {
  __typename?: 'SegmentAbbreviationPreviewError';
  error: SegmentAbbreviationError;
  message: Scalars['String']['output'];
};

export type SegmentAbbreviationPreviewErrorInput = {
  error: SegmentAbbreviationError;
  message: Scalars['String']['input'];
};

export type SegmentAbbreviationPreviewInput = {
  errors: Array<SegmentAbbreviationPreviewErrorInput>;
  segmentId?: InputMaybe<Scalars['ID']['input']>;
  value: Scalars['String']['input'];
};

export type SegmentIdSortOrderInput = {
  id: Scalars['ID']['input'];
  sortOrder: Scalars['Int']['input'];
};

export enum SimilarAccountRecommendationFailureReason {
  InvalidRequest = 'INVALID_REQUEST',
  ServerError = 'SERVER_ERROR'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Subscribe carry forward execution status */
  carryForwardExecutingStatus: CarryForwardExecutingStatusNotification;
  /** Subscribe consolidation package import statuses */
  consolidationPackageImportStatuses: ConsolidationPackageImportStatusesNotification;
  /** Subscribe job status */
  jobStatusByJobId: JobNotification;
  /** This is sample Subscription */
  subscribeToAllEvents: JobNotification;
  trialBalanceImportStatus: TrialBalanceImportStatusNotification;
};


export type SubscriptionCarryForwardExecutingStatusArgs = {
  input: CarryForwardExecutingStatusSubscriptionInput;
};


export type SubscriptionConsolidationPackageImportStatusesArgs = {
  input: ConsolidationPackageImportStatusesSubscriptionInput;
};


export type SubscriptionJobStatusByJobIdArgs = {
  input: JobSubscriptionInput;
};


export type SubscriptionTrialBalanceImportStatusArgs = {
  input: TrialBalanceImportStatusSubscriptionInput;
};

export type Tenant = {
  __typename?: 'Tenant';
  id: Scalars['ID']['output'];
  identificationCode: Scalars['String']['output'];
  isCreatable: Scalars['Boolean']['output'];
  isUnderContract: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  tenantUsers: Array<TenantUser>;
};

export type TenantRegistrationUrlType = {
  __typename?: 'TenantRegistrationUrlType';
  url: Scalars['String']['output'];
};

export type TenantUser = {
  __typename?: 'TenantUser';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ToBeReservedConsolidatedAccounts = {
  __typename?: 'ToBeReservedConsolidatedAccounts';
  foreignCurrencyTranslationAdjustmentAccounts: Array<ConsolidatedAccount>;
  foreignExchangeLossesNoeAccounts: Array<ConsolidatedAccount>;
  profitBSAccounts: Array<ConsolidatedAccount>;
  retainedEarningsBroughtForwardAccounts: Array<ConsolidatedAccount>;
};

export type TranslationAdjustmentPreview = {
  __typename?: 'TranslationAdjustmentPreview';
  currentRows: Array<TranslationAdjustmentPreviewCurrentRow>;
  diffs: Array<TranslationAdjustmentPreviewDifference>;
  prevRows: Array<TranslationAdjustmentPreviewPrevRow>;
  warnings: Array<TranslationAdjustmentPreviewWarning>;
};

export type TranslationAdjustmentPreviewCurrentRow = ExcludedInCurrentConsolidationProcessForTa | IncludedInCurrentConsolidationProcessForTa;

export type TranslationAdjustmentPreviewCurrentRowItem = {
  __typename?: 'TranslationAdjustmentPreviewCurrentRowItem';
  adjustedTranslatedBalance?: Maybe<Scalars['Float']['output']>;
  consolidatedAccount: ConsolidatedAccount;
};

export type TranslationAdjustmentPreviewDifference = {
  __typename?: 'TranslationAdjustmentPreviewDifference';
  amountPerConsolidatedAccount: Array<AmountPerConsolidatedAccount>;
  company: Company;
};

export type TranslationAdjustmentPreviewPrevRow = {
  __typename?: 'TranslationAdjustmentPreviewPrevRow';
  consolidationPackage: ConsolidationPackage;
  items: Array<TranslationAdjustmentPreviewPrevRowItem>;
};

export type TranslationAdjustmentPreviewPrevRowItem = {
  __typename?: 'TranslationAdjustmentPreviewPrevRowItem';
  adjustedTranslatedBalance: Scalars['Float']['output'];
  assignedConsolidatedAccount: AssignedConsolidatedAccount;
};

export enum TranslationAdjustmentPreviewWarning {
  InconsistentAmountOfTranslationAdjustments = 'INCONSISTENT_AMOUNT_OF_TRANSLATION_ADJUSTMENTS'
}

export type TrialBalance = {
  __typename?: 'TrialBalance';
  rows: Array<TrialBalanceRow>;
};

export type TrialBalanceImportFromCaOperationHistory = ConsolidationPackageOperationHistory & {
  __typename?: 'TrialBalanceImportFromCaOperationHistory';
  beforeConversionTbFileId: Scalars['ID']['output'];
  consolidationPackageOperationTarget: ConsolidationPackageOperationTarget;
  conversionRuleFileId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  historyType: ConsolidationPackageHistoryType;
  id: Scalars['ID']['output'];
  officeMemberName?: Maybe<Scalars['String']['output']>;
};

export type TrialBalanceImportFromCamidOperationHistory = ConsolidationPackageOperationHistory & {
  __typename?: 'TrialBalanceImportFromCamidOperationHistory';
  consolidationPackageOperationTarget: ConsolidationPackageOperationTarget;
  conversionRuleFileId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  historyType: ConsolidationPackageHistoryType;
  id: Scalars['ID']['output'];
  officeMemberName?: Maybe<Scalars['String']['output']>;
  rawResponseFileId: Scalars['ID']['output'];
};

export type TrialBalanceImportOperationHistory = ConsolidationPackageOperationHistory & {
  __typename?: 'TrialBalanceImportOperationHistory';
  consolidationPackageOperationTarget: ConsolidationPackageOperationTarget;
  conversionRuleFileId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  historyType: ConsolidationPackageHistoryType;
  id: Scalars['ID']['output'];
  officeMemberName?: Maybe<Scalars['String']['output']>;
  rawExcelFileId: Scalars['ID']['output'];
  rawExcelFileName: Scalars['String']['output'];
};

export type TrialBalanceImportSetting = {
  __typename?: 'TrialBalanceImportSetting';
  accountCodeColumn: Scalars['String']['output'];
  accountNameColumn: Scalars['String']['output'];
  balanceColumn: Scalars['String']['output'];
  endRow: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  sheetName: Scalars['String']['output'];
  startRow: Scalars['Int']['output'];
};

export type TrialBalanceImportStatusNotification = {
  __typename?: 'TrialBalanceImportStatusNotification';
  consolidationPackageId: Scalars['ID']['output'];
  status: JobStatus;
};

export type TrialBalanceImportStatusSubscriptionInput = {
  consolidationPackageId: Scalars['ID']['input'];
};

export type TrialBalancePreviewBeforeConversionRowType = {
  __typename?: 'TrialBalancePreviewBeforeConversionRowType';
  accountCode: Scalars['String']['output'];
  accountName: Scalars['String']['output'];
  balance: Scalars['Float']['output'];
};

export type TrialBalancePreviewErrors = {
  __typename?: 'TrialBalancePreviewErrors';
  rowErrors: Array<TrialBalancePreviewRowError>;
  sheetErrors: Array<TrialBalancePreviewSheetError>;
};

export type TrialBalancePreviewInput = {
  accountCode: Scalars['String']['input'];
  accountName: Scalars['String']['input'];
  balance: Scalars['Float']['input'];
};

export type TrialBalancePreviewRowError = {
  __typename?: 'TrialBalancePreviewRowError';
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  sheets: Array<TrialBalancePreviewRowErrorSheet>;
};

export type TrialBalancePreviewRowErrorSheet = {
  __typename?: 'TrialBalancePreviewRowErrorSheet';
  positions: Array<ExcelRowErrorPositionType>;
  sheetName: Scalars['String']['output'];
};

export type TrialBalancePreviewSheetError = {
  __typename?: 'TrialBalancePreviewSheetError';
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  sheetNames: Array<Scalars['String']['output']>;
};

export type TrialBalanceRow = {
  __typename?: 'TrialBalanceRow';
  accountCode?: Maybe<Scalars['String']['output']>;
  accountName?: Maybe<Scalars['String']['output']>;
  assignedConsolidatedAccount?: Maybe<AssignedConsolidatedAccount>;
  balance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  importStatus: ImportStatus;
  importedBalance?: Maybe<Scalars['Float']['output']>;
};

export enum UnitLockStatus {
  Locked = 'LOCKED',
  Unlocked = 'UNLOCKED'
}

export type UpdateAccountConversionRuleMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationPackageId: Scalars['ID']['input'];
  rulePreviews: Array<AccountConversionRulePreviewInput>;
};

export type UpdateAccountConversionRuleMutationPayload = {
  __typename?: 'UpdateAccountConversionRuleMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateAssignedConsolidatedAccountsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  items: Array<AssignedConsolidatedAccountInputTypeInput>;
};

export type UpdateAssignedConsolidatedAccountsMutationPayLoad = {
  __typename?: 'UpdateAssignedConsolidatedAccountsMutationPayLoad';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateBsTranslationAdjustmentInput = {
  afterTranslationBalance: Scalars['Float']['input'];
  assignedConsolidatedAccountId: Scalars['ID']['input'];
  beforeTranslationBalance?: InputMaybe<Scalars['Float']['input']>;
  openingClassification: OpeningClassification;
  remark?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBsTranslationAdjustmentsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  financialStatementId: Scalars['ID']['input'];
  translationAdjustments: Array<UpdateBsTranslationAdjustmentInput>;
};

export type UpdateBsTranslationAdjustmentsMutationPayload = {
  __typename?: 'UpdateBSTranslationAdjustmentsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userErrors: Array<UserError>;
};

export type UpdateBsBalanceAdjustmentsMutationInput = {
  balanceAdjustments: Array<UpdateBsBalanceAdjustmentsMutationInputItemInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  financialStatementId: Scalars['ID']['input'];
};

export type UpdateBsBalanceAdjustmentsMutationInputItemInput = {
  adjustment: Scalars['Float']['input'];
  assignedConsolidatedAccountId: Scalars['ID']['input'];
  remark: Scalars['String']['input'];
};

export type UpdateBsBalanceAdjustmentsMutationPayload = {
  __typename?: 'UpdateBsBalanceAdjustmentsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateCompanyMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameJa: Scalars['String']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCompanyMutationPayload = {
  __typename?: 'UpdateCompanyMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  userErrors: Array<UserError>;
};

export type UpdateCompanySortOrderMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idSortOrders: Array<CompanyIdSortOrderInput>;
};

export type UpdateCompanySortOrderMutationPayload = {
  __typename?: 'UpdateCompanySortOrderMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateConsolidatedAccountMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameJa: Scalars['String']['input'];
};

export type UpdateConsolidatedAccountMutationPayload = {
  __typename?: 'UpdateConsolidatedAccountMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consolidatedAccount?: Maybe<ConsolidatedAccount>;
  userErrors: Array<UserError>;
};

export type UpdateConsolidationAccountingUnitCompanyInput = {
  companyId: Scalars['ID']['input'];
  consolidationProcessType: ConsolidationProcessType;
  sortOrder: Scalars['Int']['input'];
  submissionRequired: Scalars['Boolean']['input'];
};

export type UpdateConsolidationAccountingUnitLockStatusMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  lockStatus: UnitLockStatus;
};

export type UpdateConsolidationAccountingUnitLockStatusMutationPayload = {
  __typename?: 'UpdateConsolidationAccountingUnitLockStatusMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consolidationAccountingUnit: ConsolidationAccountingUnit;
};

export type UpdateConsolidationAccountingUnitMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companies: Array<UpdateConsolidationAccountingUnitCompanyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['Date']['input'];
  id: Scalars['ID']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameJa: Scalars['String']['input'];
  preConsolidationAccountingUnitId?: InputMaybe<Scalars['ID']['input']>;
  startDate: Scalars['Date']['input'];
  workClassificationId: Scalars['ID']['input'];
};

export type UpdateConsolidationAccountingUnitMutationPayload = {
  __typename?: 'UpdateConsolidationAccountingUnitMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consolidationAccountingUnit?: Maybe<ConsolidationAccountingUnit>;
  userErrors: Array<UserError>;
};

export type UpdateConsolidationJournalTypeMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  openingJournalType: OpeningJournalType;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConsolidationJournalTypeMutationPayload = {
  __typename?: 'UpdateConsolidationJournalTypeMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consolidationJournalType?: Maybe<ConsolidationJournalType>;
  userErrors: Array<UserError>;
};

export type UpdateConsolidationJournalTypeSortOrderMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idSortOrders: Array<IdSortOrderInput>;
};

export type UpdateConsolidationJournalTypeSortOrderMutationPayload = {
  __typename?: 'UpdateConsolidationJournalTypeSortOrderMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateConsolidationPackageImportSettingMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  trialBalanceImportSettings: Array<UpdateTrialBalanceImportSettingInput>;
};

export type UpdateConsolidationPackageImportSettingMutationPayload = {
  __typename?: 'UpdateConsolidationPackageImportSettingMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consolidationPackageImportSetting?: Maybe<ConsolidationPackageImportSetting>;
  userErrors: Array<UserError>;
};

export type UpdateExchangeRateInput = {
  averageRate: Scalars['Float']['input'];
  currentRate: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};

export type UpdateExchangeRatesMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  exchangeRateInputs: Array<UpdateExchangeRateInput>;
};

export type UpdateExchangeRatesMutationPayload = {
  __typename?: 'UpdateExchangeRatesMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateOfficeMemberMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  officeMemberId: Scalars['ID']['input'];
  roleIds: Array<Scalars['ID']['input']>;
};

export type UpdateOfficeMemberMutationPayload = {
  __typename?: 'UpdateOfficeMemberMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<OfficeMemberUpdateError>;
  officeMember?: Maybe<OfficeMember>;
};

export type UpdateOrCreateConsolidationJournalImportSettingMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyAbbreviationColumn: Scalars['String']['input'];
  consolidatedAccountCodeColumn: Scalars['String']['input'];
  consolidationAccountingUnitId: Scalars['ID']['input'];
  consolidationJournalGroupKeyColumn: Scalars['String']['input'];
  consolidationJournalTypeId: Scalars['ID']['input'];
  creditBalanceColumn: Scalars['String']['input'];
  debitBalanceColumn: Scalars['String']['input'];
  endRow: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  remarkColumn?: InputMaybe<Scalars['String']['input']>;
  segmentAbbreviationColumn?: InputMaybe<Scalars['String']['input']>;
  sheetName: Scalars['String']['input'];
  startRow: Scalars['Int']['input'];
};

export type UpdateOrCreateConsolidationJournalImportSettingMutationPayLoad = {
  __typename?: 'UpdateOrCreateConsolidationJournalImportSettingMutationPayLoad';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consolidationJournalImportSetting: ConsolidationJournalImportSetting;
};

export type UpdatePlTranslationAdjustmentInput = {
  afterTranslationBalance: Scalars['Float']['input'];
  assignedConsolidatedAccountId: Scalars['ID']['input'];
  beforeTranslationBalance?: InputMaybe<Scalars['Float']['input']>;
  openingClassification: OpeningClassification;
  remark?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePlTranslationAdjustmentsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  financialStatementId: Scalars['ID']['input'];
  translationAdjustments: Array<UpdatePlTranslationAdjustmentInput>;
};

export type UpdatePlTranslationAdjustmentsMutationPayload = {
  __typename?: 'UpdatePLTranslationAdjustmentsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userErrors: Array<UserError>;
};

export type UpdatePlBalanceAdjustmentsMutationInput = {
  balanceAdjustments: Array<UpdatePlBalanceAdjustmentsMutationInputItemInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidationAccountingUnitId: Scalars['ID']['input'];
  financialStatementId: Scalars['ID']['input'];
};

export type UpdatePlBalanceAdjustmentsMutationInputItemInput = {
  adjustment: Scalars['Float']['input'];
  assignedConsolidatedAccountId: Scalars['ID']['input'];
  remark: Scalars['String']['input'];
};

export type UpdatePlBalanceAdjustmentsMutationPayload = {
  __typename?: 'UpdatePlBalanceAdjustmentsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateReservedConsolidatedAccountsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  foreignCurrencyTranslationAdjustmentAccountId: Scalars['ID']['input'];
  foreignExchangeLossesNoeAccountId: Scalars['ID']['input'];
  profitBSAccountId: Scalars['ID']['input'];
  retainedEarningsBroughtForwardAccountId: Scalars['ID']['input'];
};

export type UpdateReservedConsolidatedAccountsMutationPayload = {
  __typename?: 'UpdateReservedConsolidatedAccountsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  reservedConsolidatedAccountsError?: Maybe<ReservedConsolidatedAccountsError>;
  updatedReservedConsolidatedAccounts: Array<ConsolidatedAccount>;
};

export type UpdateSegmentMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameJa: Scalars['String']['input'];
};

export type UpdateSegmentMutationPayload = {
  __typename?: 'UpdateSegmentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  segment?: Maybe<Segment>;
  userErrors: Array<UserError>;
};

export type UpdateSegmentSortOrderMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idSortOrders: Array<SegmentIdSortOrderInput>;
};

export type UpdateSegmentSortOrderMutationPayload = {
  __typename?: 'UpdateSegmentSortOrderMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateTrialBalanceImportSettingInput = {
  accountCodeColumn: Scalars['String']['input'];
  accountNameColumn: Scalars['String']['input'];
  balanceColumn: Scalars['String']['input'];
  endRow: Scalars['Int']['input'];
  sheetName: Scalars['String']['input'];
  startRow: Scalars['Int']['input'];
};

export type UpdateUserStatusMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newUnitId: Scalars['ID']['input'];
};

export type UpdateUserStatusMutationPayload = {
  __typename?: 'UpdateUserStatusMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateWorkClassificationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameJa: Scalars['String']['input'];
};

export type UpdateWorkClassificationMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  workClassificationInput: UpdateWorkClassificationInput;
};

export type UpdateWorkClassificationMutationPayload = {
  __typename?: 'UpdateWorkClassificationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userErrors: Array<UserError>;
  workClassification?: Maybe<WorkClassification>;
};

export type UploadedFile = {
  __typename?: 'UploadedFile';
  fileName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  tenantUid: Scalars['ID']['output'];
};

export type UpsertConsolidatedAccountImportSettingMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  consolidatedAccountImportSetting: ConsolidatedAccountImportSettingInput;
};

export type UpsertConsolidatedAccountImportSettingMutationPayload = {
  __typename?: 'UpsertConsolidatedAccountImportSettingMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consolidatedAccountImportSetting?: Maybe<ConsolidatedAccountImportSetting>;
};

export type UserError = {
  __typename?: 'UserError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export enum UserLanguage {
  En = 'EN',
  Ja = 'JA'
}

export type UserStatus = {
  __typename?: 'UserStatus';
  currentOffice: Office;
  currentOfficeMember: OfficeMember;
  language?: Maybe<UserLanguage>;
  lastOperatedConsolidationAccountingUnit: ConsolidationAccountingUnit;
  mfidIdentificationCode: Scalars['String']['output'];
};

export type WorkClassification = {
  __typename?: 'WorkClassification';
  code: WorkClassificationCode;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nameEn?: Maybe<Scalars['String']['output']>;
  nameJa: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type WorkClassificationCode = {
  __typename?: 'WorkClassificationCode';
  code: Scalars['String']['output'];
};

export type WorkClassificationCodeInput = {
  code: Scalars['String']['input'];
};

export type WorkClassificationDetailType = {
  __typename?: 'WorkClassificationDetailType';
  accountingUnitUseType: AccountingUnitUseType;
  workClassification: WorkClassification;
};

export type PreviewConsolidationJournal = {
  __typename?: 'previewConsolidationJournal';
  error: AccountCodeError;
  message: Scalars['String']['output'];
};

export type PreviewConsolidationJournalInput = {
  error: AccountCodeError;
  message: Scalars['String']['input'];
};

export type UpdateCompanySortOrderMutationVariables = Exact<{
  input: UpdateCompanySortOrderMutationInput;
}>;


export type UpdateCompanySortOrderMutation = { __typename?: 'Mutation', updateCompanySortOrder: { __typename?: 'UpdateCompanySortOrderMutationPayload', clientMutationId?: string | null } };

export type BuildCaAccountConversionRulePreviewMutationVariables = Exact<{
  input: BuildCaAccountConversionRulePreviewMutationInput;
}>;


export type BuildCaAccountConversionRulePreviewMutation = { __typename?: 'Mutation', buildCaAccountConversionRulePreview: { __typename?: 'BuildCaAccountConversionRulePreviewMutationPayload', errors: Array<string>, accountConversionRulePreviews: Array<{ __typename?: 'AccountConversionRulePreview', code: string, id?: string | null, inversionMultiplier: InversionMultiplier, isAdd: boolean, names: Array<string>, skipReason?: ConversionRuleSkipReason | null, workClassificationId: string, consolidatedAccount?: { __typename?: 'ConsolidatedAccount', id: string, nameJa: string, accountType: AccountType, code: { __typename?: 'ConsolidatedAccountCode', code: string } } | null }>, trialBalancePreviewsBeforeConversionForCa: Array<{ __typename?: 'TrialBalancePreviewBeforeConversionRowType', accountCode: string, accountName: string, balance: number }> } };

export type BuildCamidAccountConversionRulePreviewMutationVariables = Exact<{
  input: BuildCamidAccountConversionRulePreviewMutationInput;
}>;


export type BuildCamidAccountConversionRulePreviewMutation = { __typename?: 'Mutation', buildCamidAccountConversionRulePreview: { __typename?: 'BuildCamidAccountConversionRulePreviewMutationPayload', errors: Array<string>, accountConversionRulePreviews: Array<{ __typename?: 'AccountConversionRulePreview', code: string, id?: string | null, inversionMultiplier: InversionMultiplier, isAdd: boolean, names: Array<string>, skipReason?: ConversionRuleSkipReason | null, workClassificationId: string, consolidatedAccount?: { __typename?: 'ConsolidatedAccount', id: string, nameJa: string, accountType: AccountType, code: { __typename?: 'ConsolidatedAccountCode', code: string } } | null }>, trialBalancePreviewsBeforeConversionForCamid: Array<{ __typename?: 'TrialBalancePreviewBeforeConversionRowType', accountCode: string, accountName: string, balance: number }> } };

export type BuildConsolidatedAccountsPreviewMutationVariables = Exact<{
  input: BuildConsolidatedAccountsPreviewMutationInput;
}>;


export type BuildConsolidatedAccountsPreviewMutation = { __typename?: 'Mutation', buildConsolidatedAccountsPreview: { __typename?: 'BuildConsolidatedAccountsPreviewMutationPayload', preview: { __typename?: 'ConsolidatedAccountPreview', errors: Array<{ __typename?: 'ConsolidatedAccountError', message: string }>, aggregatedErrors: Array<{ __typename?: 'ConsolidatedAccountPreviewAggregatedError', message: string, positions: Array<{ __typename?: 'ExcelRowErrorPositionType', column: string, rows: Array<string> }> }>, previews: Array<{ __typename?: 'ConsolidatedAccountPreviewRow', accountSide?: AccountSide | null, amountType: { __typename?: 'ConsolidatedAccountAmountTypePreview', amountType?: AmountType | null, errors: Array<string>, value: string }, code: { __typename?: 'ConsolidatedAccountCodePreview', errors: Array<string>, value: string }, conversionType: { __typename?: 'ConsolidatedAccountConversionTypePreview', errors: Array<string>, type?: ConversionType | null, value: string }, nameEn: { __typename?: 'ConsolidatedAccountNameEnPreview', errors: Array<string>, value?: string | null }, nameJa: { __typename?: 'ConsolidatedAccountNameJaPreview', errors: Array<string>, value: string }, subCategory: { __typename?: 'ConsolidatedAccountSubCategoryPreview', errors: Array<string>, subCategoryId?: string | null, value: string } }> } } };

export type CarryForwardMutationVariables = Exact<{
  input: CarryForwardInput;
}>;


export type CarryForwardMutation = { __typename?: 'Mutation', carryForward: { __typename: 'CarryForwardPayload', subscriptionId?: string | null, error?: { __typename?: 'CarryForwardError', currentConsolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', preConsolidationAccountingUnitId?: string | null }, errorsPerConPkgOfRetainedEarningsBroughtForward: Array<{ __typename?: 'ErrorsPerConsolidationPackage', errors: Array<{ __typename: 'CarryForwardConsolidationJournalError', consolidationJournalTypeName: string, consolidationJournalTypeId: string, journalGroupKeys: Array<string> } | { __typename: 'CarryForwardConsolidationPackageError', error: string }>, previousConsolidationPackage: { __typename: 'ConsolidationPackage', id: string, sortOrder: number, company: { __typename: 'Company', nameJa: string } } }>, errorsPerAssignedConsolidatedAccountOfRetainedEarningsBroughtForward: Array<{ __typename?: 'ErrorsPerAssignedConsolidatedAccount', previousAssignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', id: string, sortOrder: number, consolidatedAccount: { __typename?: 'ConsolidatedAccount', nameJa: string } }, errors: Array<{ __typename?: 'CarryForwardPerAssignedConsolidatedAccountError', consolidationJournalTypeName: string, consolidationJournalTypeId: string, journalGroupKeys: Array<string> }> }>, lackingAssignedConsolidatedAccountsOfTranslationAdjustment: Array<{ __typename?: 'ConsolidatedAccount', id: string, nameJa: string }> } | null } };

export type CreateAccountConversionRulePreviewMutationVariables = Exact<{
  input: CreateAccountConversionRulePreviewInput;
}>;


export type CreateAccountConversionRulePreviewMutation = { __typename?: 'Mutation', createAccountConversionRulePreview: { __typename?: 'CreateAccountConversionRulePreviewPayload', uploadedFileId: string, accountConversionRulePreviews: Array<{ __typename?: 'AccountConversionRulePreview', id?: string | null, code: string, names: Array<string>, isAdd: boolean, skipReason?: ConversionRuleSkipReason | null, inversionMultiplier: InversionMultiplier, consolidatedAccount?: { __typename?: 'ConsolidatedAccount', id: string, accountType: AccountType } | null }>, errors?: { __typename?: 'TrialBalancePreviewErrors', sheetErrors: Array<{ __typename?: 'TrialBalancePreviewSheetError', id: string, message: string, sheetNames: Array<string> }>, rowErrors: Array<{ __typename?: 'TrialBalancePreviewRowError', id: string, message: string, sheets: Array<{ __typename?: 'TrialBalancePreviewRowErrorSheet', sheetName: string, positions: Array<{ __typename?: 'ExcelRowErrorPositionType', column: string, rows: Array<string> }> }> }> } | null } };

export type CreateCompanyMutationVariables = Exact<{
  input: CreateCompanyMutationInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: { __typename?: 'CreateCompanyMutationPayload', clientMutationId?: string | null, company?: { __typename?: 'Company', id: string, tenantUid: string, nameEn?: string | null, nameJa: string, decimalPlace: number, remarks?: string | null, currency: Currency, abbreviation: string } | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }> } };

export type CreateCompanyMasterCsvExportUrlMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCompanyMasterCsvExportUrlMutation = { __typename?: 'Mutation', createCompanyMasterCsvExportUrl: { __typename?: 'CreateCompanyMasterCsvExportUrlMutationPayload', downloadUrl: string } };

export type CreateConsolidatedAccountMutationVariables = Exact<{
  input: CreateConsolidatedAccountMutationInput;
}>;


export type CreateConsolidatedAccountMutation = { __typename?: 'Mutation', createConsolidatedAccount: { __typename?: 'CreateConsolidatedAccountMutationPayload', clientMutationId?: string | null, userErrors: Array<{ __typename?: 'UserError', message: string, field: Array<string> }>, consolidatedAccount?: { __typename?: 'ConsolidatedAccount', nameJa: string, nameEn?: string | null } | null } };

export type CreateConsolidatedAccountCsvExportUrlMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateConsolidatedAccountCsvExportUrlMutation = { __typename?: 'Mutation', createConsolidatedAccountCsvExportUrl: { __typename?: 'CreateConsolidatedAccountCsvExportUrlMutationPayload', downloadUrl: string } };

export type CreateConsolidationAccountingUnitMutationVariables = Exact<{
  input: CreateConsolidationAccountingUnitMutationInput;
}>;


export type CreateConsolidationAccountingUnitMutation = { __typename?: 'Mutation', createConsolidationAccountingUnit: { __typename?: 'CreateConsolidationAccountingUnitMutationPayload', clientMutationId?: string | null, userErrors: Array<{ __typename?: 'UserError', message: string, field: Array<string> }>, consolidationAccountingUnit?: { __typename?: 'ConsolidationAccountingUnit', nameJa: string } | null } };

export type CreateConsolidationJournalCsvExportUrlMutationVariables = Exact<{
  input: CreateConsolidationJournalCsvExportUrlMutationInput;
}>;


export type CreateConsolidationJournalCsvExportUrlMutation = { __typename?: 'Mutation', createConsolidationJournalCsvExportUrl: { __typename?: 'CreateConsolidationJournalCsvExportUrlMutationPayload', downloadUrl: string } };

export type CreateConsolidationJournalImportFileDownloadUrlMutationVariables = Exact<{
  input: CreateConsolidationJournalImportFileDownloadUrlMutationInput;
}>;


export type CreateConsolidationJournalImportFileDownloadUrlMutation = { __typename?: 'Mutation', createConsolidationJournalImportFileDownloadUrl: { __typename?: 'CreateConsolidationJournalImportFileDownloadUrlMutationPayload', url: string } };

export type CreateConsolidationJournalImportFileUploadUrlMutationVariables = Exact<{
  input: CreateConsolidationJournalImportFileUploadUrlMutationInput;
}>;


export type CreateConsolidationJournalImportFileUploadUrlMutation = { __typename?: 'Mutation', createConsolidationJournalImportFileUploadUrl: { __typename?: 'CreateConsolidationJournalImportFileUploadUrlMutationPayLoad', key: string, url: string } };

export type CreateConsolidationJournalPreviewMutationVariables = Exact<{
  input: CreateConsolidationJournalPreviewMutationInput;
}>;


export type CreateConsolidationJournalPreviewMutation = { __typename?: 'Mutation', createConsolidationJournalPreview: { __typename?: 'CreateConsolidationJournalPreviewMutationPayload', uploadedFileId: string, error?: string | null, previews: Array<{ __typename?: 'ConsolidationJournalPreview', totalCreditBalance: number, totalDebitBalance: number, journalGroupKey: { __typename?: 'JournalGroupKeyPreview', value: string, errors: Array<{ __typename?: 'JournalGroupKeyPreviewError', error: JournalGroupKeyError, message: string }> }, rows: Array<{ __typename?: 'ConsolidationJournalPreviewRow', id: string, openingClassification: OpeningClassification, accountCode: { __typename?: 'AccountCodePreview', value: string, assignedConsolidatedAccount?: { __typename?: 'AssignedConsolidatedAccount', id: string, consolidatedAccount: { __typename?: 'ConsolidatedAccount', nameJa: string, nameEn?: string | null } } | null, errors: Array<{ __typename?: 'previewConsolidationJournal', error: AccountCodeError, message: string }> }, companyAbbreviation: { __typename?: 'CompanyAbbreviationPreview', companyId?: string | null, value: string, errors: Array<{ __typename?: 'CompanyAbbreviationPreviewError', error: CompanyAbbreviationError, message: string }> }, creditBalance: { __typename?: 'BalancePreview', value?: number | null, errors: Array<{ __typename?: 'BalancePreviewError', error: BalanceError, message: string }> }, debitBalance: { __typename?: 'BalancePreview', value?: number | null, errors: Array<{ __typename?: 'BalancePreviewError', error: BalanceError, message: string }> }, segmentAbbreviation: { __typename?: 'SegmentAbbreviationPreview', segmentId?: string | null, value: string, errors: Array<{ __typename?: 'SegmentAbbreviationPreviewError', error: SegmentAbbreviationError, message: string }> }, remark: { __typename?: 'RemarkPreview', value: string, errors: Array<{ __typename?: 'RemarkPreviewError', error: RemarkError, message: string }> }, errors: Array<{ __typename?: 'ConsolidationJournalPreviewRowError', error: ConsolidationJournalRowError, message: string }> }>, errors: Array<{ __typename?: 'ConsolidationJournalPreviewError', error: ConsolidationJournalError, message: string }> }> } };

export type CreateConsolidationJournalTypeMutationVariables = Exact<{
  input: CreateConsolidationJournalTypeMutationInput;
}>;


export type CreateConsolidationJournalTypeMutation = { __typename?: 'Mutation', createConsolidationJournalType: { __typename?: 'CreateConsolidationJournalTypeMutationPayload', clientMutationId?: string | null, consolidationJournalType?: { __typename?: 'ConsolidationJournalType', name: string } | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }> } };

export type CreateConsolidationPackageImportFileUploadUrlMutationVariables = Exact<{
  input: CreateConsolidationPackageImportFileUploadUrlMutationInput;
}>;


export type CreateConsolidationPackageImportFileUploadUrlMutation = { __typename?: 'Mutation', createConsolidationPackageImportFileUploadUrl: { __typename?: 'CreateConsolidationPackageImportFileUploadUrlMutationPayload', key: string, url: string } };

export type CreateConsolidationPackageImportSettingMutationVariables = Exact<{
  input: CreateConsolidationPackageImportSettingMutationInput;
}>;


export type CreateConsolidationPackageImportSettingMutation = { __typename?: 'Mutation', createConsolidationPackageImportSetting: { __typename?: 'CreateConsolidationPackageImportSettingMutationPayload', clientMutationId?: string | null, consolidationPackageImportSetting?: { __typename?: 'ConsolidationPackageImportSetting', name: string } | null, userErrors: Array<{ __typename?: 'UserError', message: string, field: Array<string> }> } };

export type CreateConsolidationWorksheetCsvExportUrlMutationVariables = Exact<{
  input: CreateConsolidationWorksheetCsvExportUrlMutationInput;
}>;


export type CreateConsolidationWorksheetCsvExportUrlMutation = { __typename?: 'Mutation', createConsolidationWorksheetCsvExportUrl: { __typename?: 'CreateConsolidationWorksheetCsvExportUrlMutationPayload', downloadUrl: string } };

export type CreateOfficeMutationVariables = Exact<{
  input: CreateOfficeMutationInput;
}>;


export type CreateOfficeMutation = { __typename?: 'Mutation', createOffice: { __typename?: 'CreateOfficeMutationPayload', clientMutationId?: string | null } };

export type CreateOfficeMemberMutationVariables = Exact<{
  input: CreateOfficeMemberMutationInput;
}>;


export type CreateOfficeMemberMutation = { __typename?: 'Mutation', createOfficeMember: { __typename?: 'CreateOfficeMemberMutationPayload', officeMember: { __typename?: 'OfficeMember', name: string } } };

export type CreateSegmentMutationVariables = Exact<{
  input: CreateSegmentMutationInput;
}>;


export type CreateSegmentMutation = { __typename?: 'Mutation', createSegment: { __typename?: 'CreateSegmentMutationPayload', clientMutationId?: string | null, segment?: { __typename?: 'Segment', nameJa: string } | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }> } };

export type CreateTimeLimitedDownloadUrlMutationVariables = Exact<{
  uploadedFileId: Scalars['ID']['input'];
}>;


export type CreateTimeLimitedDownloadUrlMutation = { __typename?: 'Mutation', createTimeLimitedDownloadUrl: { __typename?: 'CreateTimeLimitedDownloadUrlMutationPayload', downloadUrl: string } };

export type CreateWorkClassificationMutationVariables = Exact<{
  input: CreateWorkClassificationMutationInput;
}>;


export type CreateWorkClassificationMutation = { __typename?: 'Mutation', createWorkClassification: { __typename?: 'CreateWorkClassificationMutationPayload', clientMutationId?: string | null, workClassification?: { __typename?: 'WorkClassification', id: string, nameEn?: string | null, nameJa: string, description?: string | null, code: { __typename?: 'WorkClassificationCode', code: string } } | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }> } };

export type DeleteCaIntegrationSettingMutationVariables = Exact<{
  input: DeleteCaIntegrationSettingMutationInput;
}>;


export type DeleteCaIntegrationSettingMutation = { __typename?: 'Mutation', deleteCaIntegrationSetting: { __typename?: 'DeleteCaIntegrationSettingMutationPayload', clientMutationId?: string | null } };

export type DeleteCamidIntegrationSettingMutationVariables = Exact<{
  input: DeleteCamidIntegrationSettingMutationInput;
}>;


export type DeleteCamidIntegrationSettingMutation = { __typename?: 'Mutation', deleteCamidIntegrationSetting: { __typename?: 'DeleteCamidIntegrationSettingMutationPayload', clientMutationId?: string | null } };

export type DeleteCompanyMutationVariables = Exact<{
  input: DeleteCompanyMutationInput;
}>;


export type DeleteCompanyMutation = { __typename?: 'Mutation', deleteCompany: { __typename?: 'DeleteCompanyMutationPayload', clientMutationId?: string | null } };

export type DeleteConsolidatedAccountMutationVariables = Exact<{
  input: DeleteConsolidatedAccountMutationInput;
}>;


export type DeleteConsolidatedAccountMutation = { __typename?: 'Mutation', deleteConsolidatedAccount: { __typename?: 'DeleteConsolidatedAccountMutationPayload', clientMutationId?: string | null } };

export type DeleteConsolidationJournalRowsMutationVariables = Exact<{
  input: DeleteConsolidationJournalRowsMutationInput;
}>;


export type DeleteConsolidationJournalRowsMutation = { __typename?: 'Mutation', deleteConsolidationJournalRows: { __typename?: 'DeleteConsolidationJournalRowsMutationPayload', clientMutationId?: string | null } };

export type DeleteConsolidationJournalTypeMutationVariables = Exact<{
  input: DeleteConsolidationJournalTypeMutationInput;
}>;


export type DeleteConsolidationJournalTypeMutation = { __typename?: 'Mutation', deleteConsolidationJournalType: { __typename?: 'DeleteConsolidationJournalTypeMutationPayLoad', clientMutationId?: string | null } };

export type DeleteConsolidationPackageImportSettingMutationVariables = Exact<{
  input: DeleteConsolidationPackageImportSettingInput;
}>;


export type DeleteConsolidationPackageImportSettingMutation = { __typename?: 'Mutation', deleteConsolidationPackageImportSetting: { __typename?: 'DeleteConsolidationPackageImportSettingPayload', clientMutationId?: string | null } };

export type DeleteOfficeMemberMutationVariables = Exact<{
  input: DeleteOfficeMemberMutationInput;
}>;


export type DeleteOfficeMemberMutation = { __typename?: 'Mutation', deleteOfficeMember: { __typename?: 'DeleteOfficeMemberMutationPayload', clientMutationId?: string | null } };

export type DeleteWorkClassificationMutationVariables = Exact<{
  input: DeleteWorkClassificationMutationInput;
}>;


export type DeleteWorkClassificationMutation = { __typename?: 'Mutation', deleteWorkClassification: { __typename?: 'DeleteWorkClassificationMutationPayload', clientMutationId?: string | null } };

export type ExportBsBySubCategoryMutationVariables = Exact<{
  input: ExportBalanceSheetBySubCategoryMutationInput;
}>;


export type ExportBsBySubCategoryMutation = { __typename?: 'Mutation', exportBSBySubCategory: { __typename?: 'ExportBalanceSheetBySubCategoryMutationPayload', downloadUrl: string } };

export type ExportBalanceSheetMutationVariables = Exact<{
  input: ExportBalanceSheetMutationInput;
}>;


export type ExportBalanceSheetMutation = { __typename?: 'Mutation', exportBalanceSheet: { __typename?: 'ExportBalanceSheetMutationPayload', downloadUrl: string } };

export type ExportPlSheetBySubCategoryMutationVariables = Exact<{
  input: ExportProfitLossSheetBySubCategoryMutationInput;
}>;


export type ExportPlSheetBySubCategoryMutation = { __typename?: 'Mutation', exportPLSheetBySubCategory: { __typename?: 'ExportProfitLossSheetBySubCategoryMutationPayload', downloadUrl: string } };

export type ExportPlSheetMutationVariables = Exact<{
  input: ExportPlSheetMutationInput;
}>;


export type ExportPlSheetMutation = { __typename?: 'Mutation', exportPLSheet: { __typename?: 'ExportPLSheetMutationPayload', downloadUrl: string } };

export type GenerateConsolidatedAccountFileUploadUrlMutationVariables = Exact<{
  input: GenerateConsolidatedAccountFileUploadUrlMutationInput;
}>;


export type GenerateConsolidatedAccountFileUploadUrlMutation = { __typename?: 'Mutation', generateConsolidatedAccountFileUploadUrl: { __typename?: 'GenerateConsolidatedAccountFileUploadUrlMutationPayload', key: string, url: string } };

export type ImportConsolidatedAccountMutationVariables = Exact<{
  input: ImportConsolidatedAccountMutationInput;
}>;


export type ImportConsolidatedAccountMutation = { __typename?: 'Mutation', importConsolidatedAccount: { __typename?: 'ImportConsolidatedAccountMutationPayload', clientMutationId?: string | null } };

export type ImportConsolidationJournalsMutationVariables = Exact<{
  input: ImportConsolidationJournalsMutationInput;
}>;


export type ImportConsolidationJournalsMutation = { __typename?: 'Mutation', importConsolidationJournals: { __typename?: 'ImportConsolidationJournalsMutationPayload', clientMutationId?: string | null } };

export type ImportConsolidationPackageMutationVariables = Exact<{
  input: ImportConsolidationPackageMutationInput;
}>;


export type ImportConsolidationPackageMutation = { __typename?: 'Mutation', importConsolidationPackage: { __typename?: 'ImportConsolidationPackageMutationPayload', clientMutationId?: string | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }> } };

export type ImportConsolidationPackageFromExternalServiceMutationVariables = Exact<{
  input: ImportConsolidationPackageFromExternalServiceMutationInput;
}>;


export type ImportConsolidationPackageFromExternalServiceMutation = { __typename?: 'Mutation', importConsolidationPackageFromExternalService: { __typename?: 'ImportConsolidationPackageFromExternalServiceMutationPayload', clientMutationId?: string | null } };

export type LoginOfficeMutationVariables = Exact<{
  tenantUid: Scalars['ID']['input'];
}>;


export type LoginOfficeMutation = { __typename?: 'Mutation', loginOffice: { __typename?: 'LoginOfficeMutationPayload', clientMutationId?: string | null } };

export type LoginOfficeSsoMutationVariables = Exact<{
  originalTenantUid: Scalars['String']['input'];
}>;


export type LoginOfficeSsoMutation = { __typename?: 'Mutation', loginOfficeSso: { __typename?: 'LoginOfficeSsoMutationPayload', hasPermission: boolean } };

export type ResetCarryForwardMutationVariables = Exact<{
  input: ResetCarryForwardMutationInput;
}>;


export type ResetCarryForwardMutation = { __typename?: 'Mutation', resetCarryForward: { __typename?: 'ResetCarryForwardMutationPayload', subscriptionId: string } };

export type ResetConsolidationPackageMutationVariables = Exact<{
  input: ResetConsolidationPackageMutationInput;
}>;


export type ResetConsolidationPackageMutation = { __typename?: 'Mutation', resetConsolidationPackage: { __typename?: 'ResetConsolidationPackageMutationPayload', clientMutationId?: string | null } };

export type UpdateAccountConversionRuleMutationVariables = Exact<{
  input: UpdateAccountConversionRuleMutationInput;
}>;


export type UpdateAccountConversionRuleMutation = { __typename?: 'Mutation', updateAccountConversionRule: { __typename?: 'UpdateAccountConversionRuleMutationPayload', clientMutationId?: string | null } };

export type UpdateAssignedConsolidatedAccountsMutationVariables = Exact<{
  input: UpdateAssignedConsolidatedAccountsMutationInput;
}>;


export type UpdateAssignedConsolidatedAccountsMutation = { __typename?: 'Mutation', updateAssignedConsolidatedAccounts: { __typename?: 'UpdateAssignedConsolidatedAccountsMutationPayLoad', clientMutationId?: string | null } };

export type UpdateBsTranslationAdjustmentsMutationVariables = Exact<{
  input: UpdateBsTranslationAdjustmentsMutationInput;
}>;


export type UpdateBsTranslationAdjustmentsMutation = { __typename?: 'Mutation', updateBSTranslationAdjustments: { __typename?: 'UpdateBSTranslationAdjustmentsMutationPayload', clientMutationId?: string | null, userErrors: Array<{ __typename?: 'UserError', message: string, field: Array<string> }> } };

export type UpdateBsBalanceAdjustmentMutationVariables = Exact<{
  input: UpdateBsBalanceAdjustmentsMutationInput;
}>;


export type UpdateBsBalanceAdjustmentMutation = { __typename?: 'Mutation', updateBsBalanceAdjustment: { __typename?: 'UpdateBsBalanceAdjustmentsMutationPayload', clientMutationId?: string | null } };

export type UpdateCompanyMutationVariables = Exact<{
  input: UpdateCompanyMutationInput;
}>;


export type UpdateCompanyMutation = { __typename?: 'Mutation', updateCompany: { __typename?: 'UpdateCompanyMutationPayload', clientMutationId?: string | null, company?: { __typename?: 'Company', nameJa: string } | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }> } };

export type UpdateConsolidatedAccountMutationVariables = Exact<{
  input: UpdateConsolidatedAccountMutationInput;
}>;


export type UpdateConsolidatedAccountMutation = { __typename?: 'Mutation', updateConsolidatedAccount: { __typename?: 'UpdateConsolidatedAccountMutationPayload', consolidatedAccount?: { __typename?: 'ConsolidatedAccount', nameJa: string } | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }> } };

export type UpdateConsolidationAccountingUnitMutationVariables = Exact<{
  input: UpdateConsolidationAccountingUnitMutationInput;
}>;


export type UpdateConsolidationAccountingUnitMutation = { __typename?: 'Mutation', updateConsolidationAccountingUnit: { __typename?: 'UpdateConsolidationAccountingUnitMutationPayload', consolidationAccountingUnit?: { __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string, lockStatus: UnitLockStatus, workClassificationId: string } | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }> } };

export type UpdateConsolidationAccountingUnitLockStatusMutationVariables = Exact<{
  input: UpdateConsolidationAccountingUnitLockStatusMutationInput;
}>;


export type UpdateConsolidationAccountingUnitLockStatusMutation = { __typename?: 'Mutation', updateConsolidationAccountingUnitLockStatus: { __typename?: 'UpdateConsolidationAccountingUnitLockStatusMutationPayload', clientMutationId?: string | null, consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string, lockStatus: UnitLockStatus } } };

export type UpdateConsolidationJournalTypeMutationVariables = Exact<{
  input: UpdateConsolidationJournalTypeMutationInput;
}>;


export type UpdateConsolidationJournalTypeMutation = { __typename?: 'Mutation', updateConsolidationJournalType: { __typename?: 'UpdateConsolidationJournalTypeMutationPayload', consolidationJournalType?: { __typename?: 'ConsolidationJournalType', name: string } | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }> } };

export type UpdateConsolidationJournalTypeSortOrderMutationVariables = Exact<{
  input: UpdateConsolidationJournalTypeSortOrderMutationInput;
}>;


export type UpdateConsolidationJournalTypeSortOrderMutation = { __typename?: 'Mutation', updateConsolidationJournalTypeSortOrder: { __typename?: 'UpdateConsolidationJournalTypeSortOrderMutationPayload', clientMutationId?: string | null } };

export type UpdateConsolidationPackageImportSettingMutationVariables = Exact<{
  input: UpdateConsolidationPackageImportSettingMutationInput;
}>;


export type UpdateConsolidationPackageImportSettingMutation = { __typename?: 'Mutation', updateConsolidationPackageImportSetting: { __typename?: 'UpdateConsolidationPackageImportSettingMutationPayload', clientMutationId?: string | null, consolidationPackageImportSetting?: { __typename?: 'ConsolidationPackageImportSetting', name: string } | null, userErrors: Array<{ __typename?: 'UserError', message: string, field: Array<string> }> } };

export type UpdateExchangeRatesMutationVariables = Exact<{
  input: UpdateExchangeRatesMutationInput;
}>;


export type UpdateExchangeRatesMutation = { __typename?: 'Mutation', updateExchangeRates: { __typename?: 'UpdateExchangeRatesMutationPayload', clientMutationId?: string | null } };

export type UpdateOfficeMemberMutationVariables = Exact<{
  input: UpdateOfficeMemberMutationInput;
}>;


export type UpdateOfficeMemberMutation = { __typename?: 'Mutation', updateOfficeMember: { __typename?: 'UpdateOfficeMemberMutationPayload', errors: Array<{ __typename?: 'OfficeMemberUpdateError', error: OfficeMemberError, message: string }>, officeMember?: { __typename?: 'OfficeMember', name: string } | null } };

export type UpdateOrCreateConsolidationJournalImportSettingMutationVariables = Exact<{
  input: UpdateOrCreateConsolidationJournalImportSettingMutationInput;
}>;


export type UpdateOrCreateConsolidationJournalImportSettingMutation = { __typename?: 'Mutation', updateOrCreateConsolidationJournalImportSetting: { __typename?: 'UpdateOrCreateConsolidationJournalImportSettingMutationPayLoad', consolidationJournalImportSetting: { __typename?: 'ConsolidationJournalImportSetting', companyAbbreviationColumn: string, consolidatedAccountCodeColumn: string, consolidationAccountingUnitId: string, consolidationJournalGroupKeyColumn: string, consolidationJournalTypeId: string, creditBalanceColumn: string, debitBalanceColumn: string, endRow: number, id: string, tenantUid: string, remarkColumn?: string | null, segmentAbbreviationColumn?: string | null, sheetName: string, startRow: number } } };

export type UpdatePlTranslationAdjustmentsMutationVariables = Exact<{
  input: UpdatePlTranslationAdjustmentsMutationInput;
}>;


export type UpdatePlTranslationAdjustmentsMutation = { __typename?: 'Mutation', updatePLTranslationAdjustments: { __typename?: 'UpdatePLTranslationAdjustmentsMutationPayload', clientMutationId?: string | null, userErrors: Array<{ __typename?: 'UserError', message: string, field: Array<string> }> } };

export type UpdatePlBalanceAdjustmentMutationVariables = Exact<{
  input: UpdatePlBalanceAdjustmentsMutationInput;
}>;


export type UpdatePlBalanceAdjustmentMutation = { __typename?: 'Mutation', updatePlBalanceAdjustment: { __typename?: 'UpdatePlBalanceAdjustmentsMutationPayload', clientMutationId?: string | null } };

export type UpdateReservedConsolidatedAccountsMutationVariables = Exact<{
  input: UpdateReservedConsolidatedAccountsMutationInput;
}>;


export type UpdateReservedConsolidatedAccountsMutation = { __typename?: 'Mutation', updateReservedConsolidatedAccounts: { __typename?: 'UpdateReservedConsolidatedAccountsMutationPayload', clientMutationId?: string | null, reservedConsolidatedAccountsError?: ReservedConsolidatedAccountsError | null } };

export type UpdateSegmentMutationVariables = Exact<{
  input: UpdateSegmentMutationInput;
}>;


export type UpdateSegmentMutation = { __typename?: 'Mutation', updateSegment: { __typename?: 'UpdateSegmentMutationPayload', clientMutationId?: string | null, segment?: { __typename?: 'Segment', nameJa: string } | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }> } };

export type UpdateSegmentSortOrderMutationVariables = Exact<{
  input: UpdateSegmentSortOrderMutationInput;
}>;


export type UpdateSegmentSortOrderMutation = { __typename?: 'Mutation', updateSegmentSortOrder: { __typename?: 'UpdateSegmentSortOrderMutationPayload', clientMutationId?: string | null } };

export type UpdateUserStatusMutationVariables = Exact<{
  input: UpdateUserStatusMutationInput;
}>;


export type UpdateUserStatusMutation = { __typename?: 'Mutation', updateUserStatus: { __typename?: 'UpdateUserStatusMutationPayload', clientMutationId?: string | null } };

export type UpdateWorkClassificationMutationVariables = Exact<{
  input: UpdateWorkClassificationMutationInput;
}>;


export type UpdateWorkClassificationMutation = { __typename?: 'Mutation', updateWorkClassification: { __typename?: 'UpdateWorkClassificationMutationPayload', clientMutationId?: string | null, workClassification?: { __typename?: 'WorkClassification', id: string, nameEn?: string | null, nameJa: string, description?: string | null, code: { __typename?: 'WorkClassificationCode', code: string } } | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }> } };

export type UpsertConsolidatedAccountImportSettingMutationVariables = Exact<{
  input: UpsertConsolidatedAccountImportSettingMutationInput;
}>;


export type UpsertConsolidatedAccountImportSettingMutation = { __typename?: 'Mutation', upsertConsolidatedAccountImportSetting: { __typename?: 'UpsertConsolidatedAccountImportSettingMutationPayload', clientMutationId?: string | null } };

export type AccountConversionRuleRecommendationQueryVariables = Exact<{
  input: AccountConversionRuleRecommendationQueryInput;
}>;


export type AccountConversionRuleRecommendationQuery = { __typename?: 'Query', accountConversionRuleRecommendation: { __typename?: 'AccountConversionRuleRecommendation', error?: SimilarAccountRecommendationFailureReason | null, results: Array<{ __typename?: 'AccountConversionRuleRecommendItemType', code: string, recommends: Array<{ __typename?: 'AccountConversionRuleRecommendCandidate', similarity: number, autoFill: boolean, consolidatedAccount: { __typename?: 'ConsolidatedAccount', id: string, nameJa: string, nameEn?: string | null, accountType: AccountType, code: { __typename?: 'ConsolidatedAccountCode', code: string }, consolidatedAccountSubCategory: { __typename?: 'ConsolidatedAccountSubCategory', consolidatedAccountCategory: { __typename?: 'ConsolidatedAccountCategory', financialStatementType: FinancialStatementType } } } }> }> } };

export type AllConsolidationJournalsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AllConsolidationJournalsQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', allConsolidationJournals: Array<{ __typename?: 'ConsolidationJournalRowType', id: string, openingClassification: OpeningClassification, journalGroupKey: string, debitBalance?: number | null, creditBalance?: number | null, remark?: string | null, company: { __typename?: 'Company', abbreviation: string }, segment?: { __typename?: 'Segment', abbreviation: string } | null, consolidationJournalType: { __typename?: 'ConsolidationJournalType', name: string, sortOrder: number }, assignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', consolidatedAccount: { __typename?: 'ConsolidatedAccount', nameJa: string, code: { __typename?: 'ConsolidatedAccountCode', code: string } } } }> } };

export type AssignedConsolidatedAccountsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AssignedConsolidatedAccountsQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', assignedConsolidatedAccounts: Array<{ __typename?: 'AssignedConsolidatedAccount', id: string, sortOrder: number, isDeletable: boolean, consolidatedAccount: { __typename?: 'ConsolidatedAccount', id: string, nameJa: string, accountType: AccountType, code: { __typename?: 'ConsolidatedAccountCode', code: string }, consolidatedAccountSubCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string } } }> }, office: { __typename?: 'Office', consolidatedAccountSubCategories: Array<{ __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string, consolidatedAccountCategory: { __typename?: 'ConsolidatedAccountCategory', id: string, nameJa: string, financialStatementType: FinancialStatementType } }>, consolidatedAccounts: Array<{ __typename?: 'ConsolidatedAccount', id: string, nameJa: string, code: { __typename?: 'ConsolidatedAccountCode', code: string }, consolidatedAccountSubCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string } }> } };

export type AssignedConsolidatedAccountsForConsolidationPackageImportQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AssignedConsolidatedAccountsForConsolidationPackageImportQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', id: string, assignedConsolidatedAccounts: Array<{ __typename?: 'AssignedConsolidatedAccount', id: string, consolidatedAccount: { __typename?: 'ConsolidatedAccount', id: string, nameJa: string, nameEn?: string | null, accountType: AccountType, code: { __typename?: 'ConsolidatedAccountCode', code: string }, consolidatedAccountSubCategory: { __typename?: 'ConsolidatedAccountSubCategory', consolidatedAccountCategory: { __typename?: 'ConsolidatedAccountCategory', financialStatementType: FinancialStatementType } } } }> } };

export type BalanceSheetQueryVariables = Exact<{
  conacUnitId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  companyId: Scalars['ID']['input'];
}>;


export type BalanceSheetQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationCurrency: Currency }, consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', consolidationPackage: { __typename?: 'ConsolidationPackage', balanceSheet?: { __typename?: 'BalanceSheet', id: string, rows: Array<{ __typename?: 'FinancialStatementRow', translatedBalance: number, adjustedTranslatedBalance?: number | null, adjustedBalance: number, balance: number, assignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', id: string, workClassificationId: string, sortOrder: number, consolidatedAccount: { __typename?: 'ConsolidatedAccount', accountType: AccountType, conversionType: ConversionType, id: string, nameEn?: string | null, nameJa: string, tenantUid: string, consolidatedAccountSubCategory: { __typename?: 'ConsolidatedAccountSubCategory', sortOrder: number, id: string, nameEn: string, nameJa: string }, code: { __typename?: 'ConsolidatedAccountCode', code: string } } } }>, balanceAdjustments: Array<{ __typename?: 'BalanceAdjustment', id: string, assignedConsolidatedAccountId: string, amount: number, remark?: string | null }>, translationAdjustments: Array<{ __typename?: 'BSTranslationAdjustment', afterTranslationBalance: number, assignedConsolidatedAccountId: string, beforeTranslationBalance?: number | null, id: string, openingClassification: OpeningClassification, remark?: string | null }>, adjustedSummary: { __typename?: 'BSSummary', assetsAmount: number, balanceAmount: number, liabilitiesAmount: number, netAssetsAmount: number, assetsItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, liabilitiesItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, netAssetsItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }> }, translatedSummary: { __typename?: 'BSSummary', assetsAmount: number, balanceAmount: number, liabilitiesAmount: number, netAssetsAmount: number, assetsItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, liabilitiesItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, netAssetsItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }> } } | null }, exchangeRate?: { __typename?: 'ExchangeRate', currentRate: number, averageRate: number } | null } };

export type BsConsolidationWorksheetBalanceQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
}>;


export type BsConsolidationWorksheetBalanceQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationJournalTypes: Array<{ __typename?: 'ConsolidationJournalType', id: string, name: string, bsConsolidationJournalSummary: { __typename?: 'ConsolidationJournalSummaryType', rows: Array<{ __typename?: 'ConsolidationJournalSummaryRowType', id: string, totalBalance: number, assignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', id: string } }> } }> }, consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', includedConsolidationProcessTypeConsolidationPackages: Array<{ __typename?: 'ConsolidationPackage', id: string, submissionRequired: boolean, company: { __typename?: 'Company', id: string, abbreviation: string }, balanceSheet?: { __typename?: 'BalanceSheet', rows: Array<{ __typename?: 'FinancialStatementRow', translatedBalance: number, adjustedTranslatedBalance?: number | null, assignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', id: string } }> } | null }>, bsConsolidationWorksheetBalance: { __typename?: 'BSConsolidationWorksheet', rows: Array<{ __typename?: 'BSConsolidationWorksheetBalanceRow', totalBalance: number, adjustmentBalance: number, adjustedBalance: number, assignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', id: string, sortOrder: number, consolidatedAccount: { __typename?: 'ConsolidatedAccount', nameJa: string, consolidatedAccountSubCategory: { __typename?: 'ConsolidatedAccountSubCategory', sortOrder: number, id: string, nameJa: string }, code: { __typename?: 'ConsolidatedAccountCode', code: string } } } }>, summary: { __typename?: 'BSSummary', assetsAmount: number, balanceAmount: number, liabilitiesAmount: number, netAssetsAmount: number, assetsItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, liabilitiesItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, netAssetsItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }> } } } };

export type CarryForwardExecutingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CarryForwardExecutingQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', carryForwardExecuting?: CarryForwardJobType | null } } };

export type CarryForwardExecutingInNextConsolidationAccountingUnitQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CarryForwardExecutingInNextConsolidationAccountingUnitQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', carryForwardExecutingInNextConsolidationAccountingUnit: boolean } } };

export type CarryForwardOperationHistoryQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
}>;


export type CarryForwardOperationHistoryQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', carryForwardOperationHistories: Array<{ __typename?: 'CarryForwardExecuteOperationHistory', id: string, createdAt: string, officeMemberName?: string | null, beginningTranslationAdjustmentCsvFileId: string, openingJournalEntriesCsvFileId: string, preConsolidationJournalEntriesCsvFileId: string, preRetainedEarningsCsvFileId: string, preTranslationAdjustmentCsvFileId: string, retainedEarningsBroughtForwardCsvFileId: string, preConsolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', nameJa: string } } | { __typename?: 'CarryForwardResetOperationHistory', id: string, createdAt: string, officeMemberName?: string | null, preConsolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', nameJa: string } }> } };

export type CarryForwardPreviewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CarryForwardPreviewQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename: 'ConsolidationAccountingUnit', id: string, nameJa: string, preConsolidationAccountingUnit?: { __typename: 'ConsolidationAccountingUnit', id: string, nameJa: string } | null, carryForwardPreview: { __typename?: 'CarryForwardPreview', inexecutableReason: Array<CarryForwardInexecutableReasonType>, retainedEarningsBroughtForwardPreview?: { __typename: 'RetainedEarningsBroughtForwardPreview', warnings: Array<RetainedEarningsPreviewWarning>, rows: Array<{ __typename: 'RetainedEarningsPreviewRow', adjustedBalance: number, totalBalance: number, adjustmentBalance: number, assignedConsolidatedAccount: { __typename: 'AssignedConsolidatedAccount', id: string, sortOrder: number, consolidatedAccount: { __typename: 'ConsolidatedAccount', id: string, nameJa: string, code: { __typename?: 'ConsolidatedAccountCode', code: string }, consolidatedAccountSubCategory: { __typename: 'ConsolidatedAccountSubCategory', id: string, sortOrder: number, nameJa: string } } }, amountPerConsolidationPackage: Array<{ __typename: 'PreviousAmountPerConsolidationPackage', amount: number, consolidationPackage: { __typename: 'ConsolidationPackage', id: string, sortOrder: number, company: { __typename: 'Company', id: string, abbreviation: string } } }>, amountPerConsolidationJournal: Array<{ __typename: 'AmountPerConsolidationJournalType', amount: number, consolidationJournalType: { __typename: 'ConsolidationJournalType', id: string, name: string, sortOrder: number } }> }>, prevRetainedEarningsSummary: { __typename: 'RetainedEarningsSummary', adjustedBalance: number, totalBalance: number, adjustmentBalance: number, amountPerConsolidationPackage: Array<{ __typename: 'PreviousAmountPerConsolidationPackage', amount: number, consolidationPackage: { __typename: 'ConsolidationPackage', id: string, sortOrder: number, company: { __typename: 'Company', id: string, abbreviation: string } } }>, amountPerConsolidationJournal: Array<{ __typename: 'AmountPerConsolidationJournalType', amount: number, consolidationJournalType: { __typename: 'ConsolidationJournalType', id: string, name: string, sortOrder: number } }> }, retainedEarningsBroughtForward: { __typename: 'RetainedEarningsBroughtForwardRow', adjustedBalance: number, totalBalance: number, adjustmentBalance: number, assignedConsolidatedAccount: { __typename: 'AssignedConsolidatedAccount', id: string, sortOrder: number, consolidatedAccount: { __typename: 'ConsolidatedAccount', id: string, nameJa: string, code: { __typename?: 'ConsolidatedAccountCode', code: string }, consolidatedAccountSubCategory: { __typename: 'ConsolidatedAccountSubCategory', id: string, sortOrder: number, nameJa: string } } }, amountPerCompany: Array<{ __typename: 'ExcludedInCurrentConsolidationProcess', company: { __typename: 'Company', id: string, abbreviation: string } } | { __typename: 'IncludedInCurrentConsolidationProcess', amount: number, consolidationPackage: { __typename: 'ConsolidationPackage', id: string, sortOrder: number, company: { __typename: 'Company', id: string, abbreviation: string } } }>, amountPerConsolidationJournal: Array<{ __typename: 'AmountPerConsolidationJournalType', amount: number, consolidationJournalType: { __typename: 'ConsolidationJournalType', id: string, name: string, sortOrder: number } }> }, diff: { __typename: 'RetainedEarningsDifference', adjustedBalance: number, totalBalance: number, adjustmentBalance: number, amountPerCompany: Array<{ __typename: 'DifferenceAmountPerCompany', amount: number, company: { __typename: 'Company', id: string, abbreviation: string } }>, amountPerConsolidationJournal: Array<{ __typename: 'AmountPerConsolidationJournalType', amount: number, consolidationJournalType: { __typename: 'ConsolidationJournalType', id: string, name: string, sortOrder: number } }> } } | null, translationAdjustmentPreview: { __typename?: 'TranslationAdjustmentPreview', warnings: Array<TranslationAdjustmentPreviewWarning>, prevRows: Array<{ __typename?: 'TranslationAdjustmentPreviewPrevRow', consolidationPackage: { __typename?: 'ConsolidationPackage', id: string, sortOrder: number, company: { __typename?: 'Company', id: string, abbreviation: string } }, items: Array<{ __typename?: 'TranslationAdjustmentPreviewPrevRowItem', adjustedTranslatedBalance: number, assignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', sortOrder: number, consolidatedAccount: { __typename?: 'ConsolidatedAccount', id: string, nameJa: string } } }> }>, currentRows: Array<{ __typename?: 'ExcludedInCurrentConsolidationProcessForTA', company: { __typename?: 'Company', id: string, abbreviation: string }, items: Array<{ __typename?: 'TranslationAdjustmentPreviewCurrentRowItem', adjustedTranslatedBalance?: number | null, consolidatedAccount: { __typename?: 'ConsolidatedAccount', id: string, nameJa: string } }> } | { __typename?: 'IncludedInCurrentConsolidationProcessForTA', consolidationPackage: { __typename?: 'ConsolidationPackage', id: string, company: { __typename?: 'Company', id: string, abbreviation: string } }, items: Array<{ __typename?: 'TranslationAdjustmentPreviewCurrentRowItem', adjustedTranslatedBalance?: number | null, consolidatedAccount: { __typename?: 'ConsolidatedAccount', id: string, nameJa: string } }> }>, diffs: Array<{ __typename?: 'TranslationAdjustmentPreviewDifference', company: { __typename?: 'Company', id: string, abbreviation: string }, amountPerConsolidatedAccount: Array<{ __typename?: 'AmountPerConsolidatedAccount', amount?: number | null, consolidatedAccount: { __typename?: 'ConsolidatedAccount', id: string, nameJa: string } }> }> } } } };

export type CompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type CompaniesQuery = { __typename?: 'Query', office: { __typename?: 'Office', companies: Array<{ __typename?: 'Company', id: string, nameJa: string, nameEn?: string | null, tenantUid: string, decimalPlace: number, abbreviation: string, currency: Currency, sortOrder: number, createdAt: string, updatedAt: string }> } };

export type CompanyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CompanyQuery = { __typename?: 'Query', office: { __typename?: 'Office', company: { __typename?: 'Company', id: string, abbreviation: string, nameJa: string, nameEn?: string | null, decimalPlace: number, currency: Currency, remarks?: string | null, associatedData: Array<{ __typename?: 'CompanyRelatingDataByUnit', data: Array<CompanyRelatingDataType>, consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string } }>, associatedRoles: Array<{ __typename?: 'Role', associatedOfficeMembers: Array<{ __typename?: 'OfficeMember', id: string, name: string }> }> } } };

export type ConsolidatedAccountQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ConsolidatedAccountQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidatedAccount: { __typename?: 'ConsolidatedAccount', accountSide: AccountSide, accountType: AccountType, amountType: AmountType, description?: string | null, conversionType: ConversionType, id: string, nameEn?: string | null, nameJa: string, code: { __typename?: 'ConsolidatedAccountCode', code: string }, consolidatedAccountSubCategory: { __typename?: 'ConsolidatedAccountSubCategory', nameJa: string }, associatedConsolidationAccountingUnits: Array<{ __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string }> } } };

export type ConsolidatedAccountImportSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type ConsolidatedAccountImportSettingQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidatedAccountSubCategories: Array<{ __typename?: 'ConsolidatedAccountSubCategory', nameJa: string, consolidatedAccountCategory: { __typename?: 'ConsolidatedAccountCategory', financialStatementType: FinancialStatementType } }>, consolidatedAccountImportSetting?: { __typename?: 'ConsolidatedAccountImportSetting', id: string, sheetName: string, startRow: number, endRow: number, nameJaColumn: string, nameEnColumn?: string | null, codeColumn: string, amountTypeColumn: string, conversionTypeColumn: string, consolidatedAccountSubCategoryColumn: string } | null } };

export type ConsolidatedAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type ConsolidatedAccountsQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidatedAccountImportSetting?: { __typename?: 'ConsolidatedAccountImportSetting', id: string } | null, consolidatedAccountSubCategories: Array<{ __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string, accountSide: AccountSide }>, consolidatedAccounts: Array<{ __typename?: 'ConsolidatedAccount', accountSide: AccountSide, accountType: AccountType, amountType: AmountType, conversionType: ConversionType, id: string, nameJa: string, createdAt: string, updatedAt: string, code: { __typename?: 'ConsolidatedAccountCode', code: string }, consolidatedAccountSubCategory: { __typename?: 'ConsolidatedAccountSubCategory', nameJa: string } }> } };

export type ConsolidatedAccountsNameAndCodeQueryVariables = Exact<{ [key: string]: never; }>;


export type ConsolidatedAccountsNameAndCodeQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidatedAccounts: Array<{ __typename?: 'ConsolidatedAccount', id: string, nameJa: string, accountType: AccountType, code: { __typename?: 'ConsolidatedAccountCode', code: string } }> } };

export type ConsolidationAccountingUnitNewQueryVariables = Exact<{ [key: string]: never; }>;


export type ConsolidationAccountingUnitNewQuery = { __typename?: 'Query', office: { __typename?: 'Office', workClassifications: Array<{ __typename?: 'WorkClassification', id: string, nameJa: string, code: { __typename?: 'WorkClassificationCode', code: string } }>, consolidationAccountingUnits: Array<{ __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string, workClassificationId: string }>, companies: Array<{ __typename?: 'Company', id: string, nameJa: string, abbreviation: string }> } };

export type ConsolidationAccountingUnitOperationHistoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ConsolidationAccountingUnitOperationHistoriesQuery = { __typename?: 'Query', office: { __typename?: 'Office', conacUnitOperationHistories: Array<{ __typename?: 'ConsolidationAccountingUnitOperationHistory', id: string, createdAt: string, type: ConsolidationAccountingUnitOperationType, officeMember?: { __typename?: 'OfficeMember', name: string } | null, consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', nameJa: string } }> } };

export type ConsolidationAccountingUnitsQueryVariables = Exact<{ [key: string]: never; }>;


export type ConsolidationAccountingUnitsQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationAccountingUnits: Array<{ __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string, start: string, end: string, order: number, lockStatus: UnitLockStatus, workClassification: { __typename?: 'WorkClassification', nameJa: string, code: { __typename?: 'WorkClassificationCode', code: string } } }> } };

export type ConsolidationAccountingUnitsCopyNewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ConsolidationAccountingUnitsCopyNewQuery = { __typename?: 'Query', office: { __typename?: 'Office', workClassifications: Array<{ __typename?: 'WorkClassification', id: string, nameJa: string, code: { __typename?: 'WorkClassificationCode', code: string } }>, consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string, nameEn?: string | null, start: string, end: string, preConsolidationAccountingUnitId?: string | null, description?: string | null, workClassification: { __typename?: 'WorkClassification', id: string, nameJa: string, code: { __typename?: 'WorkClassificationCode', code: string } }, allConsolidationPackages: Array<{ __typename?: 'ConsolidationPackage', id: string, consolidationProcess: ConsolidationProcessType, sortOrder: number, submissionRequired: boolean, company: { __typename?: 'Company', id: string, nameJa: string } }> }, consolidationAccountingUnits: Array<{ __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string, workClassificationId: string }>, companies: Array<{ __typename?: 'Company', id: string, nameJa: string, abbreviation: string }> } };

export type ConsolidationAccountingUnitsDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ConsolidationAccountingUnitsDetailQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', lockStatus: UnitLockStatus, id: string, nameJa: string, nameEn?: string | null, start: string, end: string, preConsolidationAccountingUnitId?: string | null, description?: string | null, carryForwardDataExists: boolean, workClassification: { __typename?: 'WorkClassification', id: string, nameJa: string, code: { __typename?: 'WorkClassificationCode', code: string } }, allConsolidationPackages: Array<{ __typename?: 'ConsolidationPackage', id: string, consolidationProcess: ConsolidationProcessType, sortOrder: number, submissionRequired: boolean, isUsedConPkg: boolean, isUsedConacJournal: boolean, company: { __typename?: 'Company', id: string, nameJa: string } }> }, consolidationAccountingUnits: Array<{ __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string }>, companies: Array<{ __typename?: 'Company', id: string, nameJa: string, abbreviation: string }>, workClassifications: Array<{ __typename?: 'WorkClassification', id: string, nameJa: string, code: { __typename?: 'WorkClassificationCode', code: string } }> } };

export type ConsolidationJournalImportSettingQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
  typeId: Scalars['ID']['input'];
}>;


export type ConsolidationJournalImportSettingQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', id: string, consolidationJournalImportSetting?: { __typename?: 'ConsolidationJournalImportSetting', companyAbbreviationColumn: string, consolidatedAccountCodeColumn: string, consolidationJournalGroupKeyColumn: string, consolidationJournalTypeId: string, creditBalanceColumn: string, debitBalanceColumn: string, endRow: number, id: string, remarkColumn?: string | null, segmentAbbreviationColumn?: string | null, sheetName: string, startRow: number } | null } };

export type ConsolidationJournalOperationHistoryQueryVariables = Exact<{
  typeId: Scalars['ID']['input'];
  consolidationAccountingUnitId: Scalars['ID']['input'];
}>;


export type ConsolidationJournalOperationHistoryQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationJournalType: { __typename?: 'ConsolidationJournalType', consolidationJournalOperationHistory: Array<{ __typename?: 'ConsolidationJournalOperationHistory', id: string, operation: JournalOperation, createdAt: string, uploadedFile?: { __typename?: 'UploadedFile', id: string, fileName: string } | null, officeMember?: { __typename?: 'OfficeMember', name: string } | null }> } } };

export type ConsolidationJournalTypeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ConsolidationJournalTypeQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationJournalType: { __typename?: 'ConsolidationJournalType', id: string, name: string, openingJournalType: OpeningJournalType, remarks?: string | null, associatedConsolidationAccountingUnits: Array<{ __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string }> } } };

export type ConsolidationJournalTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type ConsolidationJournalTypesQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationJournalTypes: Array<{ __typename?: 'ConsolidationJournalType', id: string, name: string, sortOrder: number, openingJournalType: OpeningJournalType, createdAt: string, updatedAt: string }> } };

export type ConsolidationJournalsQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
  typeId: Scalars['ID']['input'];
}>;


export type ConsolidationJournalsQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', consolidationJournalImportSetting?: { __typename?: 'ConsolidationJournalImportSetting', id: string } | null, consolidationJournals: Array<{ __typename?: 'ConsolidationJournal', journalGroupKey: string, debitTotalBalance: number, creditTotalBalance: number, rows: Array<{ __typename?: 'ConsolidationJournalRowType', id: string, openingClassification: OpeningClassification, debitBalance?: number | null, creditBalance?: number | null, remark?: string | null, company: { __typename?: 'Company', abbreviation: string }, segment?: { __typename?: 'Segment', abbreviation: string } | null, assignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', consolidatedAccount: { __typename?: 'ConsolidatedAccount', nameJa: string, code: { __typename?: 'ConsolidatedAccountCode', code: string } } } }> }> } };

export type ConsolidationPackageImportSettingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ConsolidationPackageImportSettingQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationPackageImportSetting: { __typename?: 'ConsolidationPackageImportSetting', id: string, name: string, trialBalanceImportSettings: Array<{ __typename?: 'TrialBalanceImportSetting', sheetName: string, startRow: number, endRow: number, accountCodeColumn: string, accountNameColumn: string, balanceColumn: string }> } } };

export type ConsolidationPackageImportSettingsIdAndNameQueryVariables = Exact<{ [key: string]: never; }>;


export type ConsolidationPackageImportSettingsIdAndNameQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationPackageImportSettings: Array<{ __typename?: 'ConsolidationPackageImportSetting', id: string, name: string }> } };

export type ConsolidationPackageOperationHistoryQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type ConsolidationPackageOperationHistoryQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', consolidationPackage: { __typename?: 'ConsolidationPackage', consolidationPackageOperationHistories: Array<{ __typename?: 'ConsolidationPackageResetOperationHistory', id: string, createdAt: string, historyType: ConsolidationPackageHistoryType, officeMemberName?: string | null, resetBalanceAdjustment: boolean, resetConsolidationPackage: boolean, resetTranslationAdjustment: boolean } | { __typename?: 'FinancialStatementModificationOperationHistory', id: string, createdAt: string, historyType: ConsolidationPackageHistoryType, officeMemberName?: string | null, consolidationPackageOperationTarget: ConsolidationPackageOperationTarget, financialStatementOperationTarget: FinancialStatementModificationOperationTarget, accountNamesJa: string, accountNamesEn?: string | null } | { __typename?: 'TrialBalanceImportFromCaOperationHistory', id: string, createdAt: string, historyType: ConsolidationPackageHistoryType, officeMemberName?: string | null, conversionRuleFileId: string, beforeConversionTbFileId: string, consolidationPackageOperationTarget: ConsolidationPackageOperationTarget } | { __typename?: 'TrialBalanceImportFromCamidOperationHistory', id: string, createdAt: string, historyType: ConsolidationPackageHistoryType, officeMemberName?: string | null, conversionRuleFileId: string, rawResponseFileId: string, consolidationPackageOperationTarget: ConsolidationPackageOperationTarget } | { __typename?: 'TrialBalanceImportOperationHistory', id: string, createdAt: string, historyType: ConsolidationPackageHistoryType, officeMemberName?: string | null, rawExcelFileId: string, rawExcelFileName: string, conversionRuleFileId: string }> } } };

export type ConsolidationPackagesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ConsolidationPackagesQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', id: string, start: string, end: string, workClassification: { __typename?: 'WorkClassification', nameJa: string }, submissionRequiredConsolidationPackages: Array<{ __typename?: 'ConsolidationPackage', id: string, createdAt: string, latestUpdatedAt: string, company: { __typename?: 'Company', abbreviation: string, nameJa: string } }> } };

export type ConsolidationPackagesDetailQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
  conPkgId: Scalars['ID']['input'];
}>;


export type ConsolidationPackagesDetailQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string, start: string, end: string, workClassification: { __typename?: 'WorkClassification', id: string, nameJa: string }, submissionRequiredConsolidationPackages: Array<{ __typename?: 'ConsolidationPackage', id: string, company: { __typename?: 'Company', id: string, nameJa: string, nameEn?: string | null, abbreviation: string, currency: Currency, decimalPlace: number } }>, consolidationPackage: { __typename?: 'ConsolidationPackage', company: { __typename?: 'Company', integrationSettings: Array<{ __typename?: 'CaIntegrationSetting', id: string, integratedCompanyName?: string | null, integrationService: { __typename?: 'IntegrationService', type: IntegrationServiceType, name: string }, caIntegrationResources: Array<{ __typename?: 'CaIntegrationResourceType', name: string }> } | { __typename?: 'CamidIntegrationSetting', id: string, integratedCompanyName?: string | null, integrationService: { __typename?: 'IntegrationService', type: IntegrationServiceType, name: string }, camidIntegrationResources: Array<{ __typename?: 'CamidIntegrationResourceType', name: string }> }> } } } };

export type ConsolidationPackageImportSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type ConsolidationPackageImportSettingsQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationPackageImportSettings: Array<{ __typename?: 'ConsolidationPackageImportSetting', id: string, name: string, operatedAt: string, createdAt: string }> } };

export type CurrentConsolidationAccountingUnitQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
}>;


export type CurrentConsolidationAccountingUnitQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string, lockStatus: UnitLockStatus } };

export type CurrentUserPermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserPermissionsQuery = { __typename?: 'Query', currentUserPermissions: Array<{ __typename?: 'Permission', companyId?: string | null, function: PermissionFunction, id: string, tenantUid: string }> };

export type ExchangeRatesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ExchangeRatesQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationCurrency: Currency }, consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', exchangeRates: Array<{ __typename?: 'ExchangeRate', id: string, averageRate: number, currentRate: number, updatedAt: string, company: { __typename?: 'Company', id: string, abbreviation: string, nameJa: string, currency: Currency, createdAt: string, decimalPlace: number } }> } };

export type ImportingConsolidationPackageJobQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type ImportingConsolidationPackageJobQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', consolidationPackage: { __typename?: 'ConsolidationPackage', importingConsolidationPackageJob?: { __typename?: 'ConsolidationPackageImportFromCaJob', serviceName: string, caResource: CaIntegrationResource } | { __typename?: 'ConsolidationPackageImportFromCamidJob', serviceName: string, camidResource: CamidIntegrationResource } | { __typename?: 'ConsolidationPackageImportFromExcelJob', excelFileName: string } | null } } };

export type ImportingConsolidationPackagesQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
}>;


export type ImportingConsolidationPackagesQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', id: string, importingConsolidationPackages: boolean } };

export type IntegrationSettingNewQueryVariables = Exact<{ [key: string]: never; }>;


export type IntegrationSettingNewQuery = { __typename?: 'Query', office: { __typename?: 'Office', companies: Array<{ __typename?: 'Company', id: string, nameJa: string }>, integrationSettings: Array<{ __typename?: 'CaIntegrationSetting', id: string, company: { __typename?: 'Company', id: string, nameJa: string }, integrationService: { __typename?: 'IntegrationService', type: IntegrationServiceType, name: string } } | { __typename?: 'CamidIntegrationSetting', id: string, company: { __typename?: 'Company', id: string, nameJa: string }, integrationService: { __typename?: 'IntegrationService', type: IntegrationServiceType, name: string } }> } };

export type IntegrationSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type IntegrationSettingsQuery = { __typename?: 'Query', office: { __typename?: 'Office', integrationSettings: Array<{ __typename?: 'CaIntegrationSetting', id: string, integratedAt: string, integratedCompanyName?: string | null, integrationService: { __typename?: 'IntegrationService', name: string }, caIntegrationResources: Array<{ __typename?: 'CaIntegrationResourceType', type: CaIntegrationResource, name: string }>, company: { __typename?: 'Company', abbreviation: string, nameJa: string } } | { __typename?: 'CamidIntegrationSetting', id: string, integratedAt: string, integratedCompanyName?: string | null, integrationService: { __typename?: 'IntegrationService', name: string }, camidIntegrationResources: Array<{ __typename?: 'CamidIntegrationResourceType', type: CamidIntegrationResource, name: string }>, company: { __typename?: 'Company', abbreviation: string, nameJa: string } }>, companies: Array<{ __typename?: 'Company', id: string }> } };

export type LoginOfficesQueryVariables = Exact<{ [key: string]: never; }>;


export type LoginOfficesQuery = { __typename?: 'Query', loginOffices: Array<{ __typename?: 'LoginOffice', tenantUid: string, name: string, identificationCode: string, isUnderContract: boolean }> };

export type OfficeMemberDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OfficeMemberDetailQuery = { __typename?: 'Query', office: { __typename?: 'Office', officeMember: { __typename?: 'OfficeMember', id: string, name: string, email: string, description?: string | null, undeletableReason?: OfficeMemberUndeletableReason | null, roles: Array<{ __typename?: 'Role', id: string, nameJa: string }> }, roles: Array<{ __typename?: 'Role', id: string, nameJa: string, isUserManagement: boolean }> } };

export type OfficeMemberNewQueryVariables = Exact<{ [key: string]: never; }>;


export type OfficeMemberNewQuery = { __typename?: 'Query', office: { __typename?: 'Office', unregisteredTenantUsers: Array<{ __typename?: 'TenantUser', id: string, name: string, email: string }>, roles: Array<{ __typename?: 'Role', id: string, nameJa: string }> } };

export type OfficeMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type OfficeMembersQuery = { __typename?: 'Query', office: { __typename?: 'Office', officeMembers: Array<{ __typename?: 'OfficeMember', id: string, name: string, email: string, roles: Array<{ __typename?: 'Role', nameJa: string }> }> } };

export type PlConsolidationWorksheetBalanceQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
}>;


export type PlConsolidationWorksheetBalanceQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationJournalTypes: Array<{ __typename?: 'ConsolidationJournalType', id: string, name: string, plConsolidationJournalSummary: { __typename?: 'ConsolidationJournalSummaryType', rows: Array<{ __typename?: 'ConsolidationJournalSummaryRowType', id: string, totalBalance: number, assignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', id: string } }> } }> }, consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', includedConsolidationProcessTypeConsolidationPackages: Array<{ __typename?: 'ConsolidationPackage', id: string, submissionRequired: boolean, company: { __typename?: 'Company', id: string, abbreviation: string }, profitAndLoss?: { __typename?: 'ProfitAndLoss', rows: Array<{ __typename?: 'FinancialStatementRow', translatedBalance: number, adjustedTranslatedBalance?: number | null, assignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', id: string } }> } | null }>, plConsolidationWorksheetBalance: { __typename?: 'PLConsolidationWorksheetBalance', rows: Array<{ __typename?: 'PLConsolidationWorksheetBalanceRow', totalBalance: number, adjustmentBalance: number, adjustedBalance: number, assignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', id: string, sortOrder: number, consolidatedAccount: { __typename?: 'ConsolidatedAccount', nameJa: string, consolidatedAccountSubCategory: { __typename?: 'ConsolidatedAccountSubCategory', sortOrder: number, id: string, nameJa: string }, code: { __typename?: 'ConsolidatedAccountCode', code: string } } } }>, summary: { __typename?: 'PLSummary', grossProfitAmount: number, operatingProfitAmount: number, ordinaryProfitAmount: number, profitAttributableToOwnersOfParentAmount: number, profitBeforeIncomeTaxesAmount: number, grossProfitItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, operatingProfitItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, ordinaryProfitItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, profitAttributableToOwnersOfParentItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, profitBeforeIncomeTaxesItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }> } } } };

export type ProfitAndLossQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  companyId: Scalars['ID']['input'];
}>;


export type ProfitAndLossQuery = { __typename?: 'Query', office: { __typename?: 'Office', consolidationCurrency: Currency }, consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', consolidationPackage: { __typename?: 'ConsolidationPackage', profitAndLoss?: { __typename?: 'ProfitAndLoss', id: string, rows: Array<{ __typename?: 'FinancialStatementRow', adjustedTranslatedBalance?: number | null, adjustedBalance: number, balance: number, translatedBalance: number, assignedConsolidatedAccount: { __typename?: 'AssignedConsolidatedAccount', id: string, workClassificationId: string, sortOrder: number, consolidatedAccount: { __typename?: 'ConsolidatedAccount', accountType: AccountType, conversionType: ConversionType, id: string, nameEn?: string | null, nameJa: string, tenantUid: string, consolidatedAccountSubCategory: { __typename?: 'ConsolidatedAccountSubCategory', sortOrder: number, id: string, nameEn: string, nameJa: string }, code: { __typename?: 'ConsolidatedAccountCode', code: string } } } }>, balanceAdjustments: Array<{ __typename?: 'BalanceAdjustment', id: string, assignedConsolidatedAccountId: string, amount: number, remark?: string | null }>, translationAdjustments: Array<{ __typename?: 'PLTranslationAdjustment', afterTranslationBalance: number, assignedConsolidatedAccountId: string, beforeTranslationBalance?: number | null, id: string, openingClassification: OpeningClassification, remark?: string | null }>, adjustedSummary: { __typename?: 'PLSummary', grossProfitAmount: number, operatingProfitAmount: number, ordinaryProfitAmount: number, profitAttributableToOwnersOfParentAmount: number, profitBeforeIncomeTaxesAmount: number, grossProfitItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, operatingProfitItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, ordinaryProfitItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, profitAttributableToOwnersOfParentItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, profitBeforeIncomeTaxesItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }> }, translatedSummary: { __typename?: 'PLSummary', grossProfitAmount: number, operatingProfitAmount: number, ordinaryProfitAmount: number, profitAttributableToOwnersOfParentAmount: number, profitBeforeIncomeTaxesAmount: number, grossProfitItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, operatingProfitItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, ordinaryProfitItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, profitAttributableToOwnersOfParentItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }>, profitBeforeIncomeTaxesItems: Array<{ __typename?: 'FSSummaryRow', amount: number, subCategory: { __typename?: 'ConsolidatedAccountSubCategory', id: string, nameJa: string } }> } } | null }, exchangeRate?: { __typename?: 'ExchangeRate', currentRate: number, averageRate: number } | null } };

export type ReservedConsolidatedAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReservedConsolidatedAccountsQuery = { __typename?: 'Query', office: { __typename?: 'Office', isUpdatableReservedConsolidatedAccounts: boolean, toBeReservedConsolidatedAccounts: { __typename?: 'ToBeReservedConsolidatedAccounts', foreignCurrencyTranslationAdjustmentAccounts: Array<{ __typename?: 'ConsolidatedAccount', id: string, nameJa: string, accountType: AccountType, code: { __typename?: 'ConsolidatedAccountCode', code: string } }>, foreignExchangeLossesNoeAccounts: Array<{ __typename?: 'ConsolidatedAccount', id: string, nameJa: string, accountType: AccountType, code: { __typename?: 'ConsolidatedAccountCode', code: string } }>, profitBSAccounts: Array<{ __typename?: 'ConsolidatedAccount', id: string, nameJa: string, accountType: AccountType, code: { __typename?: 'ConsolidatedAccountCode', code: string } }>, retainedEarningsBroughtForwardAccounts: Array<{ __typename?: 'ConsolidatedAccount', id: string, nameJa: string, accountType: AccountType, code: { __typename?: 'ConsolidatedAccountCode', code: string } }> } } };

export type SegmentQueryVariables = Exact<{
  segmentId: Scalars['ID']['input'];
}>;


export type SegmentQuery = { __typename?: 'Query', office: { __typename?: 'Office', segment: { __typename?: 'Segment', id: string, nameJa: string, nameEn?: string | null, abbreviation: string, description?: string | null } } };

export type SegmentStructuresQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
}>;


export type SegmentStructuresQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', submissionRequiredConsolidationPackages: Array<{ __typename?: 'ConsolidationPackage', id: string, company: { __typename?: 'Company', nameJa: string }, segmentStructure: { __typename?: 'ConsolidationPackageSegmentStructure', lastModifiedAt: string, rows: Array<{ __typename?: 'ConsolidationPackageSegmentStructureRow', segmentIdentificationKeys: Array<string>, sortOrder: number, segment: { __typename?: 'Segment', nameJa: string } }> } }> } };

export type SegmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type SegmentsQuery = { __typename?: 'Query', office: { __typename?: 'Office', segments: Array<{ __typename?: 'Segment', id: string, nameJa: string, abbreviation: string, sortOrder: number }> } };

export type TenantRegistrationUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type TenantRegistrationUrlQuery = { __typename?: 'Query', tenantRegistrationUrl: { __typename?: 'TenantRegistrationUrlType', url: string } };

export type TenantUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type TenantUsersQuery = { __typename?: 'Query', tenantUsers: Array<{ __typename?: 'TenantUser', id: string, name: string, email: string }> };

export type TenantsQueryVariables = Exact<{ [key: string]: never; }>;


export type TenantsQuery = { __typename?: 'Query', tenants: Array<{ __typename?: 'Tenant', id: string, name: string, identificationCode: string, isCreatable: boolean, isUnderContract: boolean, tenantUsers: Array<{ __typename?: 'TenantUser', id: string }> }> };

export type TrialBalanceQueryVariables = Exact<{
  consolidationAccountingUnitId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type TrialBalanceQuery = { __typename?: 'Query', consolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', consolidationPackage: { __typename?: 'ConsolidationPackage', trialBalance?: { __typename?: 'TrialBalance', rows: Array<{ __typename?: 'TrialBalanceRow', id: string, accountCode?: string | null, accountName?: string | null, balance?: number | null, importStatus: ImportStatus, importedBalance?: number | null, assignedConsolidatedAccount?: { __typename?: 'AssignedConsolidatedAccount', consolidatedAccount: { __typename?: 'ConsolidatedAccount', nameJa: string, code: { __typename?: 'ConsolidatedAccountCode', code: string } } } | null }> } | null } } };

export type UserStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type UserStatusQuery = { __typename?: 'Query', userStatus: { __typename?: 'UserStatus', mfidIdentificationCode: string, currentOffice: { __typename?: 'Office', tenantUid: string, identificationCode: string, name: string, featureFlags: { __typename?: 'FeatureFlags', isCarryForwardTranslationAdjustmentEnabled: boolean, isCarryForwardOpsHistoryEnabled: boolean, isExportBalanceAndProfitLossEnabled: boolean, isMultipleLanguagesEnabled: boolean, isSsoEnabled: boolean, isViewerRoleEnabled: boolean, isSortOrderCompanySegmentEnabled: boolean, isSegmentWorksheetEnabled: boolean } }, currentOfficeMember: { __typename?: 'OfficeMember', id: string, name: string, email: string }, lastOperatedConsolidationAccountingUnit: { __typename?: 'ConsolidationAccountingUnit', id: string, nameJa: string, lockStatus: UnitLockStatus } } };

export type WorkClassificationQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type WorkClassificationQuery = { __typename?: 'Query', office: { __typename?: 'Office', workClassification: { __typename?: 'WorkClassificationDetailType', accountingUnitUseType: AccountingUnitUseType, workClassification: { __typename?: 'WorkClassification', id: string, nameJa: string, nameEn?: string | null, description?: string | null, createdAt: string, updatedAt: string, code: { __typename?: 'WorkClassificationCode', code: string } } } } };

export type WorkClassificationMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkClassificationMenuQuery = { __typename?: 'Query', office: { __typename?: 'Office', workClassifications: Array<{ __typename?: 'WorkClassification', id: string, nameJa: string, code: { __typename?: 'WorkClassificationCode', code: string } }> } };

export type WorkClassificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkClassificationsQuery = { __typename?: 'Query', office: { __typename?: 'Office', workClassifications: Array<{ __typename?: 'WorkClassification', id: string, nameJa: string, nameEn?: string | null, createdAt: string, updatedAt: string, code: { __typename?: 'WorkClassificationCode', code: string } }> } };

export type JobStatusSubscriptionVariables = Exact<{
  input: JobSubscriptionInput;
}>;


export type JobStatusSubscription = { __typename?: 'Subscription', jobStatusByJobId: { __typename?: 'JobNotification', jobId: string, status: JobStatus, type: JobStatusMessageType } };

export type CarryForwardExecutingStatusSubscriptionVariables = Exact<{
  input: CarryForwardExecutingStatusSubscriptionInput;
}>;


export type CarryForwardExecutingStatusSubscription = { __typename?: 'Subscription', carryForwardExecutingStatus: { __typename?: 'CarryForwardExecutingStatusNotification', consolidationAccountingUnitId: string, status: JobStatus } };

export type ConsolidationPackageImportStatusesSubscriptionVariables = Exact<{
  input: ConsolidationPackageImportStatusesSubscriptionInput;
}>;


export type ConsolidationPackageImportStatusesSubscription = { __typename?: 'Subscription', consolidationPackageImportStatuses: { __typename?: 'ConsolidationPackageImportStatusesNotification', consolidationAccountingUnitId: string, status: JobStatus } };

export type TbImportStatusSubscriptionVariables = Exact<{
  input: TrialBalanceImportStatusSubscriptionInput;
}>;


export type TbImportStatusSubscription = { __typename?: 'Subscription', trialBalanceImportStatus: { __typename?: 'TrialBalanceImportStatusNotification', consolidationPackageId: string, status: JobStatus } };


export const UpdateCompanySortOrderDocument = gql`
    mutation UpdateCompanySortOrder($input: UpdateCompanySortOrderMutationInput!) {
  updateCompanySortOrder(input: $input) {
    clientMutationId
  }
}
    `;
export type UpdateCompanySortOrderMutationFn = Apollo.MutationFunction<UpdateCompanySortOrderMutation, UpdateCompanySortOrderMutationVariables>;

/**
 * __useUpdateCompanySortOrderMutation__
 *
 * To run a mutation, you first call `useUpdateCompanySortOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanySortOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanySortOrderMutation, { data, loading, error }] = useUpdateCompanySortOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanySortOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompanySortOrderMutation, UpdateCompanySortOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCompanySortOrderMutation, UpdateCompanySortOrderMutationVariables>(UpdateCompanySortOrderDocument, options);
      }
export type UpdateCompanySortOrderMutationHookResult = ReturnType<typeof useUpdateCompanySortOrderMutation>;
export type UpdateCompanySortOrderMutationResult = Apollo.MutationResult<UpdateCompanySortOrderMutation>;
export type UpdateCompanySortOrderMutationOptions = Apollo.BaseMutationOptions<UpdateCompanySortOrderMutation, UpdateCompanySortOrderMutationVariables>;
export const BuildCaAccountConversionRulePreviewDocument = gql`
    mutation BuildCaAccountConversionRulePreview($input: BuildCaAccountConversionRulePreviewMutationInput!) {
  buildCaAccountConversionRulePreview(input: $input) {
    accountConversionRulePreviews {
      code
      consolidatedAccount {
        id
        nameJa
        code {
          code
        }
        accountType
      }
      id
      inversionMultiplier
      isAdd
      names
      skipReason
      workClassificationId
    }
    errors
    trialBalancePreviewsBeforeConversionForCa {
      accountCode
      accountName
      balance
    }
  }
}
    `;
export type BuildCaAccountConversionRulePreviewMutationFn = Apollo.MutationFunction<BuildCaAccountConversionRulePreviewMutation, BuildCaAccountConversionRulePreviewMutationVariables>;

/**
 * __useBuildCaAccountConversionRulePreviewMutation__
 *
 * To run a mutation, you first call `useBuildCaAccountConversionRulePreviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBuildCaAccountConversionRulePreviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [buildCaAccountConversionRulePreviewMutation, { data, loading, error }] = useBuildCaAccountConversionRulePreviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBuildCaAccountConversionRulePreviewMutation(baseOptions?: Apollo.MutationHookOptions<BuildCaAccountConversionRulePreviewMutation, BuildCaAccountConversionRulePreviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BuildCaAccountConversionRulePreviewMutation, BuildCaAccountConversionRulePreviewMutationVariables>(BuildCaAccountConversionRulePreviewDocument, options);
      }
export type BuildCaAccountConversionRulePreviewMutationHookResult = ReturnType<typeof useBuildCaAccountConversionRulePreviewMutation>;
export type BuildCaAccountConversionRulePreviewMutationResult = Apollo.MutationResult<BuildCaAccountConversionRulePreviewMutation>;
export type BuildCaAccountConversionRulePreviewMutationOptions = Apollo.BaseMutationOptions<BuildCaAccountConversionRulePreviewMutation, BuildCaAccountConversionRulePreviewMutationVariables>;
export const BuildCamidAccountConversionRulePreviewDocument = gql`
    mutation BuildCamidAccountConversionRulePreview($input: BuildCamidAccountConversionRulePreviewMutationInput!) {
  buildCamidAccountConversionRulePreview(input: $input) {
    accountConversionRulePreviews {
      code
      consolidatedAccount {
        id
        nameJa
        code {
          code
        }
        accountType
      }
      id
      inversionMultiplier
      isAdd
      names
      skipReason
      workClassificationId
    }
    errors
    trialBalancePreviewsBeforeConversionForCamid {
      accountCode
      accountName
      balance
    }
  }
}
    `;
export type BuildCamidAccountConversionRulePreviewMutationFn = Apollo.MutationFunction<BuildCamidAccountConversionRulePreviewMutation, BuildCamidAccountConversionRulePreviewMutationVariables>;

/**
 * __useBuildCamidAccountConversionRulePreviewMutation__
 *
 * To run a mutation, you first call `useBuildCamidAccountConversionRulePreviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBuildCamidAccountConversionRulePreviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [buildCamidAccountConversionRulePreviewMutation, { data, loading, error }] = useBuildCamidAccountConversionRulePreviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBuildCamidAccountConversionRulePreviewMutation(baseOptions?: Apollo.MutationHookOptions<BuildCamidAccountConversionRulePreviewMutation, BuildCamidAccountConversionRulePreviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BuildCamidAccountConversionRulePreviewMutation, BuildCamidAccountConversionRulePreviewMutationVariables>(BuildCamidAccountConversionRulePreviewDocument, options);
      }
export type BuildCamidAccountConversionRulePreviewMutationHookResult = ReturnType<typeof useBuildCamidAccountConversionRulePreviewMutation>;
export type BuildCamidAccountConversionRulePreviewMutationResult = Apollo.MutationResult<BuildCamidAccountConversionRulePreviewMutation>;
export type BuildCamidAccountConversionRulePreviewMutationOptions = Apollo.BaseMutationOptions<BuildCamidAccountConversionRulePreviewMutation, BuildCamidAccountConversionRulePreviewMutationVariables>;
export const BuildConsolidatedAccountsPreviewDocument = gql`
    mutation BuildConsolidatedAccountsPreview($input: BuildConsolidatedAccountsPreviewMutationInput!) {
  buildConsolidatedAccountsPreview(input: $input) {
    preview {
      errors {
        message
      }
      aggregatedErrors {
        message
        positions {
          column
          rows
        }
      }
      previews {
        accountSide
        amountType {
          amountType
          errors
          value
        }
        code {
          errors
          value
        }
        conversionType {
          errors
          type
          value
        }
        nameEn {
          errors
          value
        }
        nameJa {
          errors
          value
        }
        subCategory {
          errors
          subCategoryId
          value
        }
      }
    }
  }
}
    `;
export type BuildConsolidatedAccountsPreviewMutationFn = Apollo.MutationFunction<BuildConsolidatedAccountsPreviewMutation, BuildConsolidatedAccountsPreviewMutationVariables>;

/**
 * __useBuildConsolidatedAccountsPreviewMutation__
 *
 * To run a mutation, you first call `useBuildConsolidatedAccountsPreviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBuildConsolidatedAccountsPreviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [buildConsolidatedAccountsPreviewMutation, { data, loading, error }] = useBuildConsolidatedAccountsPreviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBuildConsolidatedAccountsPreviewMutation(baseOptions?: Apollo.MutationHookOptions<BuildConsolidatedAccountsPreviewMutation, BuildConsolidatedAccountsPreviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BuildConsolidatedAccountsPreviewMutation, BuildConsolidatedAccountsPreviewMutationVariables>(BuildConsolidatedAccountsPreviewDocument, options);
      }
export type BuildConsolidatedAccountsPreviewMutationHookResult = ReturnType<typeof useBuildConsolidatedAccountsPreviewMutation>;
export type BuildConsolidatedAccountsPreviewMutationResult = Apollo.MutationResult<BuildConsolidatedAccountsPreviewMutation>;
export type BuildConsolidatedAccountsPreviewMutationOptions = Apollo.BaseMutationOptions<BuildConsolidatedAccountsPreviewMutation, BuildConsolidatedAccountsPreviewMutationVariables>;
export const CarryForwardDocument = gql`
    mutation CarryForward($input: CarryForwardInput!) {
  carryForward(input: $input) {
    __typename
    subscriptionId
    error {
      currentConsolidationAccountingUnit {
        preConsolidationAccountingUnitId
      }
      errorsPerConPkgOfRetainedEarningsBroughtForward {
        errors {
          ... on CarryForwardConsolidationPackageError {
            __typename
            error
          }
          ... on CarryForwardConsolidationJournalError {
            __typename
            consolidationJournalTypeName
            consolidationJournalTypeId
            journalGroupKeys
          }
        }
        previousConsolidationPackage {
          __typename
          id
          sortOrder
          company {
            __typename
            nameJa
          }
        }
      }
      errorsPerAssignedConsolidatedAccountOfRetainedEarningsBroughtForward {
        previousAssignedConsolidatedAccount {
          id
          sortOrder
          consolidatedAccount {
            nameJa
          }
        }
        errors {
          consolidationJournalTypeName
          consolidationJournalTypeId
          journalGroupKeys
        }
      }
      lackingAssignedConsolidatedAccountsOfTranslationAdjustment {
        id
        nameJa
      }
    }
  }
}
    `;
export type CarryForwardMutationFn = Apollo.MutationFunction<CarryForwardMutation, CarryForwardMutationVariables>;

/**
 * __useCarryForwardMutation__
 *
 * To run a mutation, you first call `useCarryForwardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCarryForwardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [carryForwardMutation, { data, loading, error }] = useCarryForwardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCarryForwardMutation(baseOptions?: Apollo.MutationHookOptions<CarryForwardMutation, CarryForwardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CarryForwardMutation, CarryForwardMutationVariables>(CarryForwardDocument, options);
      }
export type CarryForwardMutationHookResult = ReturnType<typeof useCarryForwardMutation>;
export type CarryForwardMutationResult = Apollo.MutationResult<CarryForwardMutation>;
export type CarryForwardMutationOptions = Apollo.BaseMutationOptions<CarryForwardMutation, CarryForwardMutationVariables>;
export const CreateAccountConversionRulePreviewDocument = gql`
    mutation CreateAccountConversionRulePreview($input: CreateAccountConversionRulePreviewInput!) {
  createAccountConversionRulePreview(input: $input) {
    uploadedFileId
    accountConversionRulePreviews {
      id
      code
      names
      isAdd
      skipReason
      inversionMultiplier
      consolidatedAccount {
        id
        accountType
      }
    }
    errors {
      sheetErrors {
        id
        message
        sheetNames
      }
      rowErrors {
        id
        message
        sheets {
          positions {
            column
            rows
          }
          sheetName
        }
      }
    }
  }
}
    `;
export type CreateAccountConversionRulePreviewMutationFn = Apollo.MutationFunction<CreateAccountConversionRulePreviewMutation, CreateAccountConversionRulePreviewMutationVariables>;

/**
 * __useCreateAccountConversionRulePreviewMutation__
 *
 * To run a mutation, you first call `useCreateAccountConversionRulePreviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountConversionRulePreviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountConversionRulePreviewMutation, { data, loading, error }] = useCreateAccountConversionRulePreviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAccountConversionRulePreviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountConversionRulePreviewMutation, CreateAccountConversionRulePreviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountConversionRulePreviewMutation, CreateAccountConversionRulePreviewMutationVariables>(CreateAccountConversionRulePreviewDocument, options);
      }
export type CreateAccountConversionRulePreviewMutationHookResult = ReturnType<typeof useCreateAccountConversionRulePreviewMutation>;
export type CreateAccountConversionRulePreviewMutationResult = Apollo.MutationResult<CreateAccountConversionRulePreviewMutation>;
export type CreateAccountConversionRulePreviewMutationOptions = Apollo.BaseMutationOptions<CreateAccountConversionRulePreviewMutation, CreateAccountConversionRulePreviewMutationVariables>;
export const CreateCompanyDocument = gql`
    mutation CreateCompany($input: CreateCompanyMutationInput!) {
  createCompany(input: $input) {
    clientMutationId
    company {
      id
      tenantUid
      nameEn
      nameJa
      decimalPlace
      remarks
      currency
      abbreviation
    }
    userErrors {
      field
      message
    }
  }
}
    `;
export type CreateCompanyMutationFn = Apollo.MutationFunction<CreateCompanyMutation, CreateCompanyMutationVariables>;

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompanyMutation, CreateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CreateCompanyDocument, options);
      }
export type CreateCompanyMutationHookResult = ReturnType<typeof useCreateCompanyMutation>;
export type CreateCompanyMutationResult = Apollo.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const CreateCompanyMasterCsvExportUrlDocument = gql`
    mutation CreateCompanyMasterCsvExportUrl {
  createCompanyMasterCsvExportUrl {
    downloadUrl
  }
}
    `;
export type CreateCompanyMasterCsvExportUrlMutationFn = Apollo.MutationFunction<CreateCompanyMasterCsvExportUrlMutation, CreateCompanyMasterCsvExportUrlMutationVariables>;

/**
 * __useCreateCompanyMasterCsvExportUrlMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMasterCsvExportUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMasterCsvExportUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMasterCsvExportUrlMutation, { data, loading, error }] = useCreateCompanyMasterCsvExportUrlMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCompanyMasterCsvExportUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompanyMasterCsvExportUrlMutation, CreateCompanyMasterCsvExportUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompanyMasterCsvExportUrlMutation, CreateCompanyMasterCsvExportUrlMutationVariables>(CreateCompanyMasterCsvExportUrlDocument, options);
      }
export type CreateCompanyMasterCsvExportUrlMutationHookResult = ReturnType<typeof useCreateCompanyMasterCsvExportUrlMutation>;
export type CreateCompanyMasterCsvExportUrlMutationResult = Apollo.MutationResult<CreateCompanyMasterCsvExportUrlMutation>;
export type CreateCompanyMasterCsvExportUrlMutationOptions = Apollo.BaseMutationOptions<CreateCompanyMasterCsvExportUrlMutation, CreateCompanyMasterCsvExportUrlMutationVariables>;
export const CreateConsolidatedAccountDocument = gql`
    mutation CreateConsolidatedAccount($input: CreateConsolidatedAccountMutationInput!) {
  createConsolidatedAccount(input: $input) {
    clientMutationId
    userErrors {
      message
      field
    }
    consolidatedAccount {
      nameJa
      nameEn
    }
  }
}
    `;
export type CreateConsolidatedAccountMutationFn = Apollo.MutationFunction<CreateConsolidatedAccountMutation, CreateConsolidatedAccountMutationVariables>;

/**
 * __useCreateConsolidatedAccountMutation__
 *
 * To run a mutation, you first call `useCreateConsolidatedAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsolidatedAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsolidatedAccountMutation, { data, loading, error }] = useCreateConsolidatedAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsolidatedAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsolidatedAccountMutation, CreateConsolidatedAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsolidatedAccountMutation, CreateConsolidatedAccountMutationVariables>(CreateConsolidatedAccountDocument, options);
      }
export type CreateConsolidatedAccountMutationHookResult = ReturnType<typeof useCreateConsolidatedAccountMutation>;
export type CreateConsolidatedAccountMutationResult = Apollo.MutationResult<CreateConsolidatedAccountMutation>;
export type CreateConsolidatedAccountMutationOptions = Apollo.BaseMutationOptions<CreateConsolidatedAccountMutation, CreateConsolidatedAccountMutationVariables>;
export const CreateConsolidatedAccountCsvExportUrlDocument = gql`
    mutation CreateConsolidatedAccountCsvExportUrl {
  createConsolidatedAccountCsvExportUrl {
    downloadUrl
  }
}
    `;
export type CreateConsolidatedAccountCsvExportUrlMutationFn = Apollo.MutationFunction<CreateConsolidatedAccountCsvExportUrlMutation, CreateConsolidatedAccountCsvExportUrlMutationVariables>;

/**
 * __useCreateConsolidatedAccountCsvExportUrlMutation__
 *
 * To run a mutation, you first call `useCreateConsolidatedAccountCsvExportUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsolidatedAccountCsvExportUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsolidatedAccountCsvExportUrlMutation, { data, loading, error }] = useCreateConsolidatedAccountCsvExportUrlMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateConsolidatedAccountCsvExportUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsolidatedAccountCsvExportUrlMutation, CreateConsolidatedAccountCsvExportUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsolidatedAccountCsvExportUrlMutation, CreateConsolidatedAccountCsvExportUrlMutationVariables>(CreateConsolidatedAccountCsvExportUrlDocument, options);
      }
export type CreateConsolidatedAccountCsvExportUrlMutationHookResult = ReturnType<typeof useCreateConsolidatedAccountCsvExportUrlMutation>;
export type CreateConsolidatedAccountCsvExportUrlMutationResult = Apollo.MutationResult<CreateConsolidatedAccountCsvExportUrlMutation>;
export type CreateConsolidatedAccountCsvExportUrlMutationOptions = Apollo.BaseMutationOptions<CreateConsolidatedAccountCsvExportUrlMutation, CreateConsolidatedAccountCsvExportUrlMutationVariables>;
export const CreateConsolidationAccountingUnitDocument = gql`
    mutation CreateConsolidationAccountingUnit($input: CreateConsolidationAccountingUnitMutationInput!) {
  createConsolidationAccountingUnit(input: $input) {
    clientMutationId
    userErrors {
      message
      field
    }
    consolidationAccountingUnit {
      nameJa
    }
  }
}
    `;
export type CreateConsolidationAccountingUnitMutationFn = Apollo.MutationFunction<CreateConsolidationAccountingUnitMutation, CreateConsolidationAccountingUnitMutationVariables>;

/**
 * __useCreateConsolidationAccountingUnitMutation__
 *
 * To run a mutation, you first call `useCreateConsolidationAccountingUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsolidationAccountingUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsolidationAccountingUnitMutation, { data, loading, error }] = useCreateConsolidationAccountingUnitMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsolidationAccountingUnitMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsolidationAccountingUnitMutation, CreateConsolidationAccountingUnitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsolidationAccountingUnitMutation, CreateConsolidationAccountingUnitMutationVariables>(CreateConsolidationAccountingUnitDocument, options);
      }
export type CreateConsolidationAccountingUnitMutationHookResult = ReturnType<typeof useCreateConsolidationAccountingUnitMutation>;
export type CreateConsolidationAccountingUnitMutationResult = Apollo.MutationResult<CreateConsolidationAccountingUnitMutation>;
export type CreateConsolidationAccountingUnitMutationOptions = Apollo.BaseMutationOptions<CreateConsolidationAccountingUnitMutation, CreateConsolidationAccountingUnitMutationVariables>;
export const CreateConsolidationJournalCsvExportUrlDocument = gql`
    mutation CreateConsolidationJournalCsvExportUrl($input: CreateConsolidationJournalCsvExportUrlMutationInput!) {
  createConsolidationJournalCsvExportUrl(input: $input) {
    downloadUrl
  }
}
    `;
export type CreateConsolidationJournalCsvExportUrlMutationFn = Apollo.MutationFunction<CreateConsolidationJournalCsvExportUrlMutation, CreateConsolidationJournalCsvExportUrlMutationVariables>;

/**
 * __useCreateConsolidationJournalCsvExportUrlMutation__
 *
 * To run a mutation, you first call `useCreateConsolidationJournalCsvExportUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsolidationJournalCsvExportUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsolidationJournalCsvExportUrlMutation, { data, loading, error }] = useCreateConsolidationJournalCsvExportUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsolidationJournalCsvExportUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsolidationJournalCsvExportUrlMutation, CreateConsolidationJournalCsvExportUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsolidationJournalCsvExportUrlMutation, CreateConsolidationJournalCsvExportUrlMutationVariables>(CreateConsolidationJournalCsvExportUrlDocument, options);
      }
export type CreateConsolidationJournalCsvExportUrlMutationHookResult = ReturnType<typeof useCreateConsolidationJournalCsvExportUrlMutation>;
export type CreateConsolidationJournalCsvExportUrlMutationResult = Apollo.MutationResult<CreateConsolidationJournalCsvExportUrlMutation>;
export type CreateConsolidationJournalCsvExportUrlMutationOptions = Apollo.BaseMutationOptions<CreateConsolidationJournalCsvExportUrlMutation, CreateConsolidationJournalCsvExportUrlMutationVariables>;
export const CreateConsolidationJournalImportFileDownloadUrlDocument = gql`
    mutation CreateConsolidationJournalImportFileDownloadUrl($input: CreateConsolidationJournalImportFileDownloadUrlMutationInput!) {
  createConsolidationJournalImportFileDownloadUrl(input: $input) {
    url
  }
}
    `;
export type CreateConsolidationJournalImportFileDownloadUrlMutationFn = Apollo.MutationFunction<CreateConsolidationJournalImportFileDownloadUrlMutation, CreateConsolidationJournalImportFileDownloadUrlMutationVariables>;

/**
 * __useCreateConsolidationJournalImportFileDownloadUrlMutation__
 *
 * To run a mutation, you first call `useCreateConsolidationJournalImportFileDownloadUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsolidationJournalImportFileDownloadUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsolidationJournalImportFileDownloadUrlMutation, { data, loading, error }] = useCreateConsolidationJournalImportFileDownloadUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsolidationJournalImportFileDownloadUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsolidationJournalImportFileDownloadUrlMutation, CreateConsolidationJournalImportFileDownloadUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsolidationJournalImportFileDownloadUrlMutation, CreateConsolidationJournalImportFileDownloadUrlMutationVariables>(CreateConsolidationJournalImportFileDownloadUrlDocument, options);
      }
export type CreateConsolidationJournalImportFileDownloadUrlMutationHookResult = ReturnType<typeof useCreateConsolidationJournalImportFileDownloadUrlMutation>;
export type CreateConsolidationJournalImportFileDownloadUrlMutationResult = Apollo.MutationResult<CreateConsolidationJournalImportFileDownloadUrlMutation>;
export type CreateConsolidationJournalImportFileDownloadUrlMutationOptions = Apollo.BaseMutationOptions<CreateConsolidationJournalImportFileDownloadUrlMutation, CreateConsolidationJournalImportFileDownloadUrlMutationVariables>;
export const CreateConsolidationJournalImportFileUploadUrlDocument = gql`
    mutation CreateConsolidationJournalImportFileUploadUrl($input: CreateConsolidationJournalImportFileUploadUrlMutationInput!) {
  createConsolidationJournalImportFileUploadUrl(input: $input) {
    key
    url
  }
}
    `;
export type CreateConsolidationJournalImportFileUploadUrlMutationFn = Apollo.MutationFunction<CreateConsolidationJournalImportFileUploadUrlMutation, CreateConsolidationJournalImportFileUploadUrlMutationVariables>;

/**
 * __useCreateConsolidationJournalImportFileUploadUrlMutation__
 *
 * To run a mutation, you first call `useCreateConsolidationJournalImportFileUploadUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsolidationJournalImportFileUploadUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsolidationJournalImportFileUploadUrlMutation, { data, loading, error }] = useCreateConsolidationJournalImportFileUploadUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsolidationJournalImportFileUploadUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsolidationJournalImportFileUploadUrlMutation, CreateConsolidationJournalImportFileUploadUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsolidationJournalImportFileUploadUrlMutation, CreateConsolidationJournalImportFileUploadUrlMutationVariables>(CreateConsolidationJournalImportFileUploadUrlDocument, options);
      }
export type CreateConsolidationJournalImportFileUploadUrlMutationHookResult = ReturnType<typeof useCreateConsolidationJournalImportFileUploadUrlMutation>;
export type CreateConsolidationJournalImportFileUploadUrlMutationResult = Apollo.MutationResult<CreateConsolidationJournalImportFileUploadUrlMutation>;
export type CreateConsolidationJournalImportFileUploadUrlMutationOptions = Apollo.BaseMutationOptions<CreateConsolidationJournalImportFileUploadUrlMutation, CreateConsolidationJournalImportFileUploadUrlMutationVariables>;
export const CreateConsolidationJournalPreviewDocument = gql`
    mutation CreateConsolidationJournalPreview($input: CreateConsolidationJournalPreviewMutationInput!) {
  createConsolidationJournalPreview(input: $input) {
    previews {
      totalCreditBalance
      totalDebitBalance
      journalGroupKey {
        value
        errors {
          error
          message
        }
      }
      rows {
        id
        accountCode {
          assignedConsolidatedAccount {
            id
            consolidatedAccount {
              nameJa
              nameEn
            }
          }
          value
          errors {
            error
            message
          }
        }
        companyAbbreviation {
          companyId
          value
          errors {
            error
            message
          }
        }
        creditBalance {
          value
          errors {
            error
            message
          }
        }
        debitBalance {
          value
          errors {
            error
            message
          }
        }
        segmentAbbreviation {
          segmentId
          value
          errors {
            error
            message
          }
        }
        openingClassification
        remark {
          value
          errors {
            error
            message
          }
        }
        errors {
          error
          message
        }
      }
      errors {
        error
        message
      }
    }
    uploadedFileId
    error
  }
}
    `;
export type CreateConsolidationJournalPreviewMutationFn = Apollo.MutationFunction<CreateConsolidationJournalPreviewMutation, CreateConsolidationJournalPreviewMutationVariables>;

/**
 * __useCreateConsolidationJournalPreviewMutation__
 *
 * To run a mutation, you first call `useCreateConsolidationJournalPreviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsolidationJournalPreviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsolidationJournalPreviewMutation, { data, loading, error }] = useCreateConsolidationJournalPreviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsolidationJournalPreviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsolidationJournalPreviewMutation, CreateConsolidationJournalPreviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsolidationJournalPreviewMutation, CreateConsolidationJournalPreviewMutationVariables>(CreateConsolidationJournalPreviewDocument, options);
      }
export type CreateConsolidationJournalPreviewMutationHookResult = ReturnType<typeof useCreateConsolidationJournalPreviewMutation>;
export type CreateConsolidationJournalPreviewMutationResult = Apollo.MutationResult<CreateConsolidationJournalPreviewMutation>;
export type CreateConsolidationJournalPreviewMutationOptions = Apollo.BaseMutationOptions<CreateConsolidationJournalPreviewMutation, CreateConsolidationJournalPreviewMutationVariables>;
export const CreateConsolidationJournalTypeDocument = gql`
    mutation CreateConsolidationJournalType($input: CreateConsolidationJournalTypeMutationInput!) {
  createConsolidationJournalType(input: $input) {
    clientMutationId
    consolidationJournalType {
      name
    }
    userErrors {
      field
      message
    }
  }
}
    `;
export type CreateConsolidationJournalTypeMutationFn = Apollo.MutationFunction<CreateConsolidationJournalTypeMutation, CreateConsolidationJournalTypeMutationVariables>;

/**
 * __useCreateConsolidationJournalTypeMutation__
 *
 * To run a mutation, you first call `useCreateConsolidationJournalTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsolidationJournalTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsolidationJournalTypeMutation, { data, loading, error }] = useCreateConsolidationJournalTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsolidationJournalTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsolidationJournalTypeMutation, CreateConsolidationJournalTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsolidationJournalTypeMutation, CreateConsolidationJournalTypeMutationVariables>(CreateConsolidationJournalTypeDocument, options);
      }
export type CreateConsolidationJournalTypeMutationHookResult = ReturnType<typeof useCreateConsolidationJournalTypeMutation>;
export type CreateConsolidationJournalTypeMutationResult = Apollo.MutationResult<CreateConsolidationJournalTypeMutation>;
export type CreateConsolidationJournalTypeMutationOptions = Apollo.BaseMutationOptions<CreateConsolidationJournalTypeMutation, CreateConsolidationJournalTypeMutationVariables>;
export const CreateConsolidationPackageImportFileUploadUrlDocument = gql`
    mutation CreateConsolidationPackageImportFileUploadUrl($input: CreateConsolidationPackageImportFileUploadUrlMutationInput!) {
  createConsolidationPackageImportFileUploadUrl(input: $input) {
    key
    url
  }
}
    `;
export type CreateConsolidationPackageImportFileUploadUrlMutationFn = Apollo.MutationFunction<CreateConsolidationPackageImportFileUploadUrlMutation, CreateConsolidationPackageImportFileUploadUrlMutationVariables>;

/**
 * __useCreateConsolidationPackageImportFileUploadUrlMutation__
 *
 * To run a mutation, you first call `useCreateConsolidationPackageImportFileUploadUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsolidationPackageImportFileUploadUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsolidationPackageImportFileUploadUrlMutation, { data, loading, error }] = useCreateConsolidationPackageImportFileUploadUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsolidationPackageImportFileUploadUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsolidationPackageImportFileUploadUrlMutation, CreateConsolidationPackageImportFileUploadUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsolidationPackageImportFileUploadUrlMutation, CreateConsolidationPackageImportFileUploadUrlMutationVariables>(CreateConsolidationPackageImportFileUploadUrlDocument, options);
      }
export type CreateConsolidationPackageImportFileUploadUrlMutationHookResult = ReturnType<typeof useCreateConsolidationPackageImportFileUploadUrlMutation>;
export type CreateConsolidationPackageImportFileUploadUrlMutationResult = Apollo.MutationResult<CreateConsolidationPackageImportFileUploadUrlMutation>;
export type CreateConsolidationPackageImportFileUploadUrlMutationOptions = Apollo.BaseMutationOptions<CreateConsolidationPackageImportFileUploadUrlMutation, CreateConsolidationPackageImportFileUploadUrlMutationVariables>;
export const CreateConsolidationPackageImportSettingDocument = gql`
    mutation CreateConsolidationPackageImportSetting($input: CreateConsolidationPackageImportSettingMutationInput!) {
  createConsolidationPackageImportSetting(input: $input) {
    clientMutationId
    consolidationPackageImportSetting {
      name
    }
    userErrors {
      message
      field
    }
  }
}
    `;
export type CreateConsolidationPackageImportSettingMutationFn = Apollo.MutationFunction<CreateConsolidationPackageImportSettingMutation, CreateConsolidationPackageImportSettingMutationVariables>;

/**
 * __useCreateConsolidationPackageImportSettingMutation__
 *
 * To run a mutation, you first call `useCreateConsolidationPackageImportSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsolidationPackageImportSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsolidationPackageImportSettingMutation, { data, loading, error }] = useCreateConsolidationPackageImportSettingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsolidationPackageImportSettingMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsolidationPackageImportSettingMutation, CreateConsolidationPackageImportSettingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsolidationPackageImportSettingMutation, CreateConsolidationPackageImportSettingMutationVariables>(CreateConsolidationPackageImportSettingDocument, options);
      }
export type CreateConsolidationPackageImportSettingMutationHookResult = ReturnType<typeof useCreateConsolidationPackageImportSettingMutation>;
export type CreateConsolidationPackageImportSettingMutationResult = Apollo.MutationResult<CreateConsolidationPackageImportSettingMutation>;
export type CreateConsolidationPackageImportSettingMutationOptions = Apollo.BaseMutationOptions<CreateConsolidationPackageImportSettingMutation, CreateConsolidationPackageImportSettingMutationVariables>;
export const CreateConsolidationWorksheetCsvExportUrlDocument = gql`
    mutation CreateConsolidationWorksheetCsvExportUrl($input: CreateConsolidationWorksheetCsvExportUrlMutationInput!) {
  createConsolidationWorksheetCsvExportUrl(input: $input) {
    downloadUrl
  }
}
    `;
export type CreateConsolidationWorksheetCsvExportUrlMutationFn = Apollo.MutationFunction<CreateConsolidationWorksheetCsvExportUrlMutation, CreateConsolidationWorksheetCsvExportUrlMutationVariables>;

/**
 * __useCreateConsolidationWorksheetCsvExportUrlMutation__
 *
 * To run a mutation, you first call `useCreateConsolidationWorksheetCsvExportUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsolidationWorksheetCsvExportUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsolidationWorksheetCsvExportUrlMutation, { data, loading, error }] = useCreateConsolidationWorksheetCsvExportUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsolidationWorksheetCsvExportUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsolidationWorksheetCsvExportUrlMutation, CreateConsolidationWorksheetCsvExportUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsolidationWorksheetCsvExportUrlMutation, CreateConsolidationWorksheetCsvExportUrlMutationVariables>(CreateConsolidationWorksheetCsvExportUrlDocument, options);
      }
export type CreateConsolidationWorksheetCsvExportUrlMutationHookResult = ReturnType<typeof useCreateConsolidationWorksheetCsvExportUrlMutation>;
export type CreateConsolidationWorksheetCsvExportUrlMutationResult = Apollo.MutationResult<CreateConsolidationWorksheetCsvExportUrlMutation>;
export type CreateConsolidationWorksheetCsvExportUrlMutationOptions = Apollo.BaseMutationOptions<CreateConsolidationWorksheetCsvExportUrlMutation, CreateConsolidationWorksheetCsvExportUrlMutationVariables>;
export const CreateOfficeDocument = gql`
    mutation CreateOffice($input: CreateOfficeMutationInput!) {
  createOffice(input: $input) {
    clientMutationId
  }
}
    `;
export type CreateOfficeMutationFn = Apollo.MutationFunction<CreateOfficeMutation, CreateOfficeMutationVariables>;

/**
 * __useCreateOfficeMutation__
 *
 * To run a mutation, you first call `useCreateOfficeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOfficeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOfficeMutation, { data, loading, error }] = useCreateOfficeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOfficeMutation(baseOptions?: Apollo.MutationHookOptions<CreateOfficeMutation, CreateOfficeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOfficeMutation, CreateOfficeMutationVariables>(CreateOfficeDocument, options);
      }
export type CreateOfficeMutationHookResult = ReturnType<typeof useCreateOfficeMutation>;
export type CreateOfficeMutationResult = Apollo.MutationResult<CreateOfficeMutation>;
export type CreateOfficeMutationOptions = Apollo.BaseMutationOptions<CreateOfficeMutation, CreateOfficeMutationVariables>;
export const CreateOfficeMemberDocument = gql`
    mutation CreateOfficeMember($input: CreateOfficeMemberMutationInput!) {
  createOfficeMember(input: $input) {
    officeMember {
      name
    }
  }
}
    `;
export type CreateOfficeMemberMutationFn = Apollo.MutationFunction<CreateOfficeMemberMutation, CreateOfficeMemberMutationVariables>;

/**
 * __useCreateOfficeMemberMutation__
 *
 * To run a mutation, you first call `useCreateOfficeMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOfficeMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOfficeMemberMutation, { data, loading, error }] = useCreateOfficeMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOfficeMemberMutation(baseOptions?: Apollo.MutationHookOptions<CreateOfficeMemberMutation, CreateOfficeMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOfficeMemberMutation, CreateOfficeMemberMutationVariables>(CreateOfficeMemberDocument, options);
      }
export type CreateOfficeMemberMutationHookResult = ReturnType<typeof useCreateOfficeMemberMutation>;
export type CreateOfficeMemberMutationResult = Apollo.MutationResult<CreateOfficeMemberMutation>;
export type CreateOfficeMemberMutationOptions = Apollo.BaseMutationOptions<CreateOfficeMemberMutation, CreateOfficeMemberMutationVariables>;
export const CreateSegmentDocument = gql`
    mutation CreateSegment($input: CreateSegmentMutationInput!) {
  createSegment(input: $input) {
    clientMutationId
    segment {
      nameJa
    }
    userErrors {
      field
      message
    }
  }
}
    `;
export type CreateSegmentMutationFn = Apollo.MutationFunction<CreateSegmentMutation, CreateSegmentMutationVariables>;

/**
 * __useCreateSegmentMutation__
 *
 * To run a mutation, you first call `useCreateSegmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSegmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSegmentMutation, { data, loading, error }] = useCreateSegmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSegmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateSegmentMutation, CreateSegmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSegmentMutation, CreateSegmentMutationVariables>(CreateSegmentDocument, options);
      }
export type CreateSegmentMutationHookResult = ReturnType<typeof useCreateSegmentMutation>;
export type CreateSegmentMutationResult = Apollo.MutationResult<CreateSegmentMutation>;
export type CreateSegmentMutationOptions = Apollo.BaseMutationOptions<CreateSegmentMutation, CreateSegmentMutationVariables>;
export const CreateTimeLimitedDownloadUrlDocument = gql`
    mutation CreateTimeLimitedDownloadUrl($uploadedFileId: ID!) {
  createTimeLimitedDownloadUrl(input: {uploadedFileId: $uploadedFileId}) {
    downloadUrl
  }
}
    `;
export type CreateTimeLimitedDownloadUrlMutationFn = Apollo.MutationFunction<CreateTimeLimitedDownloadUrlMutation, CreateTimeLimitedDownloadUrlMutationVariables>;

/**
 * __useCreateTimeLimitedDownloadUrlMutation__
 *
 * To run a mutation, you first call `useCreateTimeLimitedDownloadUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTimeLimitedDownloadUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTimeLimitedDownloadUrlMutation, { data, loading, error }] = useCreateTimeLimitedDownloadUrlMutation({
 *   variables: {
 *      uploadedFileId: // value for 'uploadedFileId'
 *   },
 * });
 */
export function useCreateTimeLimitedDownloadUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateTimeLimitedDownloadUrlMutation, CreateTimeLimitedDownloadUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTimeLimitedDownloadUrlMutation, CreateTimeLimitedDownloadUrlMutationVariables>(CreateTimeLimitedDownloadUrlDocument, options);
      }
export type CreateTimeLimitedDownloadUrlMutationHookResult = ReturnType<typeof useCreateTimeLimitedDownloadUrlMutation>;
export type CreateTimeLimitedDownloadUrlMutationResult = Apollo.MutationResult<CreateTimeLimitedDownloadUrlMutation>;
export type CreateTimeLimitedDownloadUrlMutationOptions = Apollo.BaseMutationOptions<CreateTimeLimitedDownloadUrlMutation, CreateTimeLimitedDownloadUrlMutationVariables>;
export const CreateWorkClassificationDocument = gql`
    mutation CreateWorkClassification($input: CreateWorkClassificationMutationInput!) {
  createWorkClassification(input: $input) {
    clientMutationId
    workClassification {
      id
      nameEn
      nameJa
      code {
        code
      }
      description
    }
    userErrors {
      field
      message
    }
  }
}
    `;
export type CreateWorkClassificationMutationFn = Apollo.MutationFunction<CreateWorkClassificationMutation, CreateWorkClassificationMutationVariables>;

/**
 * __useCreateWorkClassificationMutation__
 *
 * To run a mutation, you first call `useCreateWorkClassificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkClassificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkClassificationMutation, { data, loading, error }] = useCreateWorkClassificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWorkClassificationMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkClassificationMutation, CreateWorkClassificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkClassificationMutation, CreateWorkClassificationMutationVariables>(CreateWorkClassificationDocument, options);
      }
export type CreateWorkClassificationMutationHookResult = ReturnType<typeof useCreateWorkClassificationMutation>;
export type CreateWorkClassificationMutationResult = Apollo.MutationResult<CreateWorkClassificationMutation>;
export type CreateWorkClassificationMutationOptions = Apollo.BaseMutationOptions<CreateWorkClassificationMutation, CreateWorkClassificationMutationVariables>;
export const DeleteCaIntegrationSettingDocument = gql`
    mutation DeleteCaIntegrationSetting($input: DeleteCaIntegrationSettingMutationInput!) {
  deleteCaIntegrationSetting(input: $input) {
    clientMutationId
  }
}
    `;
export type DeleteCaIntegrationSettingMutationFn = Apollo.MutationFunction<DeleteCaIntegrationSettingMutation, DeleteCaIntegrationSettingMutationVariables>;

/**
 * __useDeleteCaIntegrationSettingMutation__
 *
 * To run a mutation, you first call `useDeleteCaIntegrationSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCaIntegrationSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCaIntegrationSettingMutation, { data, loading, error }] = useDeleteCaIntegrationSettingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCaIntegrationSettingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCaIntegrationSettingMutation, DeleteCaIntegrationSettingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCaIntegrationSettingMutation, DeleteCaIntegrationSettingMutationVariables>(DeleteCaIntegrationSettingDocument, options);
      }
export type DeleteCaIntegrationSettingMutationHookResult = ReturnType<typeof useDeleteCaIntegrationSettingMutation>;
export type DeleteCaIntegrationSettingMutationResult = Apollo.MutationResult<DeleteCaIntegrationSettingMutation>;
export type DeleteCaIntegrationSettingMutationOptions = Apollo.BaseMutationOptions<DeleteCaIntegrationSettingMutation, DeleteCaIntegrationSettingMutationVariables>;
export const DeleteCamidIntegrationSettingDocument = gql`
    mutation DeleteCamidIntegrationSetting($input: DeleteCamidIntegrationSettingMutationInput!) {
  deleteCamidIntegrationSetting(input: $input) {
    clientMutationId
  }
}
    `;
export type DeleteCamidIntegrationSettingMutationFn = Apollo.MutationFunction<DeleteCamidIntegrationSettingMutation, DeleteCamidIntegrationSettingMutationVariables>;

/**
 * __useDeleteCamidIntegrationSettingMutation__
 *
 * To run a mutation, you first call `useDeleteCamidIntegrationSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCamidIntegrationSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCamidIntegrationSettingMutation, { data, loading, error }] = useDeleteCamidIntegrationSettingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCamidIntegrationSettingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCamidIntegrationSettingMutation, DeleteCamidIntegrationSettingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCamidIntegrationSettingMutation, DeleteCamidIntegrationSettingMutationVariables>(DeleteCamidIntegrationSettingDocument, options);
      }
export type DeleteCamidIntegrationSettingMutationHookResult = ReturnType<typeof useDeleteCamidIntegrationSettingMutation>;
export type DeleteCamidIntegrationSettingMutationResult = Apollo.MutationResult<DeleteCamidIntegrationSettingMutation>;
export type DeleteCamidIntegrationSettingMutationOptions = Apollo.BaseMutationOptions<DeleteCamidIntegrationSettingMutation, DeleteCamidIntegrationSettingMutationVariables>;
export const DeleteCompanyDocument = gql`
    mutation DeleteCompany($input: DeleteCompanyMutationInput!) {
  deleteCompany(input: $input) {
    clientMutationId
  }
}
    `;
export type DeleteCompanyMutationFn = Apollo.MutationFunction<DeleteCompanyMutation, DeleteCompanyMutationVariables>;

/**
 * __useDeleteCompanyMutation__
 *
 * To run a mutation, you first call `useDeleteCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompanyMutation, { data, loading, error }] = useDeleteCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCompanyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCompanyMutation, DeleteCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCompanyMutation, DeleteCompanyMutationVariables>(DeleteCompanyDocument, options);
      }
export type DeleteCompanyMutationHookResult = ReturnType<typeof useDeleteCompanyMutation>;
export type DeleteCompanyMutationResult = Apollo.MutationResult<DeleteCompanyMutation>;
export type DeleteCompanyMutationOptions = Apollo.BaseMutationOptions<DeleteCompanyMutation, DeleteCompanyMutationVariables>;
export const DeleteConsolidatedAccountDocument = gql`
    mutation DeleteConsolidatedAccount($input: DeleteConsolidatedAccountMutationInput!) {
  deleteConsolidatedAccount(input: $input) {
    clientMutationId
  }
}
    `;
export type DeleteConsolidatedAccountMutationFn = Apollo.MutationFunction<DeleteConsolidatedAccountMutation, DeleteConsolidatedAccountMutationVariables>;

/**
 * __useDeleteConsolidatedAccountMutation__
 *
 * To run a mutation, you first call `useDeleteConsolidatedAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteConsolidatedAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteConsolidatedAccountMutation, { data, loading, error }] = useDeleteConsolidatedAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteConsolidatedAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteConsolidatedAccountMutation, DeleteConsolidatedAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteConsolidatedAccountMutation, DeleteConsolidatedAccountMutationVariables>(DeleteConsolidatedAccountDocument, options);
      }
export type DeleteConsolidatedAccountMutationHookResult = ReturnType<typeof useDeleteConsolidatedAccountMutation>;
export type DeleteConsolidatedAccountMutationResult = Apollo.MutationResult<DeleteConsolidatedAccountMutation>;
export type DeleteConsolidatedAccountMutationOptions = Apollo.BaseMutationOptions<DeleteConsolidatedAccountMutation, DeleteConsolidatedAccountMutationVariables>;
export const DeleteConsolidationJournalRowsDocument = gql`
    mutation DeleteConsolidationJournalRows($input: DeleteConsolidationJournalRowsMutationInput!) {
  deleteConsolidationJournalRows(input: $input) {
    clientMutationId
  }
}
    `;
export type DeleteConsolidationJournalRowsMutationFn = Apollo.MutationFunction<DeleteConsolidationJournalRowsMutation, DeleteConsolidationJournalRowsMutationVariables>;

/**
 * __useDeleteConsolidationJournalRowsMutation__
 *
 * To run a mutation, you first call `useDeleteConsolidationJournalRowsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteConsolidationJournalRowsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteConsolidationJournalRowsMutation, { data, loading, error }] = useDeleteConsolidationJournalRowsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteConsolidationJournalRowsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteConsolidationJournalRowsMutation, DeleteConsolidationJournalRowsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteConsolidationJournalRowsMutation, DeleteConsolidationJournalRowsMutationVariables>(DeleteConsolidationJournalRowsDocument, options);
      }
export type DeleteConsolidationJournalRowsMutationHookResult = ReturnType<typeof useDeleteConsolidationJournalRowsMutation>;
export type DeleteConsolidationJournalRowsMutationResult = Apollo.MutationResult<DeleteConsolidationJournalRowsMutation>;
export type DeleteConsolidationJournalRowsMutationOptions = Apollo.BaseMutationOptions<DeleteConsolidationJournalRowsMutation, DeleteConsolidationJournalRowsMutationVariables>;
export const DeleteConsolidationJournalTypeDocument = gql`
    mutation DeleteConsolidationJournalType($input: DeleteConsolidationJournalTypeMutationInput!) {
  deleteConsolidationJournalType(input: $input) {
    clientMutationId
  }
}
    `;
export type DeleteConsolidationJournalTypeMutationFn = Apollo.MutationFunction<DeleteConsolidationJournalTypeMutation, DeleteConsolidationJournalTypeMutationVariables>;

/**
 * __useDeleteConsolidationJournalTypeMutation__
 *
 * To run a mutation, you first call `useDeleteConsolidationJournalTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteConsolidationJournalTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteConsolidationJournalTypeMutation, { data, loading, error }] = useDeleteConsolidationJournalTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteConsolidationJournalTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteConsolidationJournalTypeMutation, DeleteConsolidationJournalTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteConsolidationJournalTypeMutation, DeleteConsolidationJournalTypeMutationVariables>(DeleteConsolidationJournalTypeDocument, options);
      }
export type DeleteConsolidationJournalTypeMutationHookResult = ReturnType<typeof useDeleteConsolidationJournalTypeMutation>;
export type DeleteConsolidationJournalTypeMutationResult = Apollo.MutationResult<DeleteConsolidationJournalTypeMutation>;
export type DeleteConsolidationJournalTypeMutationOptions = Apollo.BaseMutationOptions<DeleteConsolidationJournalTypeMutation, DeleteConsolidationJournalTypeMutationVariables>;
export const DeleteConsolidationPackageImportSettingDocument = gql`
    mutation DeleteConsolidationPackageImportSetting($input: DeleteConsolidationPackageImportSettingInput!) {
  deleteConsolidationPackageImportSetting(input: $input) {
    clientMutationId
  }
}
    `;
export type DeleteConsolidationPackageImportSettingMutationFn = Apollo.MutationFunction<DeleteConsolidationPackageImportSettingMutation, DeleteConsolidationPackageImportSettingMutationVariables>;

/**
 * __useDeleteConsolidationPackageImportSettingMutation__
 *
 * To run a mutation, you first call `useDeleteConsolidationPackageImportSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteConsolidationPackageImportSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteConsolidationPackageImportSettingMutation, { data, loading, error }] = useDeleteConsolidationPackageImportSettingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteConsolidationPackageImportSettingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteConsolidationPackageImportSettingMutation, DeleteConsolidationPackageImportSettingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteConsolidationPackageImportSettingMutation, DeleteConsolidationPackageImportSettingMutationVariables>(DeleteConsolidationPackageImportSettingDocument, options);
      }
export type DeleteConsolidationPackageImportSettingMutationHookResult = ReturnType<typeof useDeleteConsolidationPackageImportSettingMutation>;
export type DeleteConsolidationPackageImportSettingMutationResult = Apollo.MutationResult<DeleteConsolidationPackageImportSettingMutation>;
export type DeleteConsolidationPackageImportSettingMutationOptions = Apollo.BaseMutationOptions<DeleteConsolidationPackageImportSettingMutation, DeleteConsolidationPackageImportSettingMutationVariables>;
export const DeleteOfficeMemberDocument = gql`
    mutation DeleteOfficeMember($input: DeleteOfficeMemberMutationInput!) {
  deleteOfficeMember(input: $input) {
    clientMutationId
  }
}
    `;
export type DeleteOfficeMemberMutationFn = Apollo.MutationFunction<DeleteOfficeMemberMutation, DeleteOfficeMemberMutationVariables>;

/**
 * __useDeleteOfficeMemberMutation__
 *
 * To run a mutation, you first call `useDeleteOfficeMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOfficeMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOfficeMemberMutation, { data, loading, error }] = useDeleteOfficeMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOfficeMemberMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOfficeMemberMutation, DeleteOfficeMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOfficeMemberMutation, DeleteOfficeMemberMutationVariables>(DeleteOfficeMemberDocument, options);
      }
export type DeleteOfficeMemberMutationHookResult = ReturnType<typeof useDeleteOfficeMemberMutation>;
export type DeleteOfficeMemberMutationResult = Apollo.MutationResult<DeleteOfficeMemberMutation>;
export type DeleteOfficeMemberMutationOptions = Apollo.BaseMutationOptions<DeleteOfficeMemberMutation, DeleteOfficeMemberMutationVariables>;
export const DeleteWorkClassificationDocument = gql`
    mutation DeleteWorkClassification($input: DeleteWorkClassificationMutationInput!) {
  deleteWorkClassification(input: $input) {
    clientMutationId
  }
}
    `;
export type DeleteWorkClassificationMutationFn = Apollo.MutationFunction<DeleteWorkClassificationMutation, DeleteWorkClassificationMutationVariables>;

/**
 * __useDeleteWorkClassificationMutation__
 *
 * To run a mutation, you first call `useDeleteWorkClassificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkClassificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkClassificationMutation, { data, loading, error }] = useDeleteWorkClassificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteWorkClassificationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkClassificationMutation, DeleteWorkClassificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkClassificationMutation, DeleteWorkClassificationMutationVariables>(DeleteWorkClassificationDocument, options);
      }
export type DeleteWorkClassificationMutationHookResult = ReturnType<typeof useDeleteWorkClassificationMutation>;
export type DeleteWorkClassificationMutationResult = Apollo.MutationResult<DeleteWorkClassificationMutation>;
export type DeleteWorkClassificationMutationOptions = Apollo.BaseMutationOptions<DeleteWorkClassificationMutation, DeleteWorkClassificationMutationVariables>;
export const ExportBsBySubCategoryDocument = gql`
    mutation ExportBSBySubCategory($input: ExportBalanceSheetBySubCategoryMutationInput!) {
  exportBSBySubCategory(input: $input) {
    downloadUrl
  }
}
    `;
export type ExportBsBySubCategoryMutationFn = Apollo.MutationFunction<ExportBsBySubCategoryMutation, ExportBsBySubCategoryMutationVariables>;

/**
 * __useExportBsBySubCategoryMutation__
 *
 * To run a mutation, you first call `useExportBsBySubCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportBsBySubCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportBsBySubCategoryMutation, { data, loading, error }] = useExportBsBySubCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExportBsBySubCategoryMutation(baseOptions?: Apollo.MutationHookOptions<ExportBsBySubCategoryMutation, ExportBsBySubCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExportBsBySubCategoryMutation, ExportBsBySubCategoryMutationVariables>(ExportBsBySubCategoryDocument, options);
      }
export type ExportBsBySubCategoryMutationHookResult = ReturnType<typeof useExportBsBySubCategoryMutation>;
export type ExportBsBySubCategoryMutationResult = Apollo.MutationResult<ExportBsBySubCategoryMutation>;
export type ExportBsBySubCategoryMutationOptions = Apollo.BaseMutationOptions<ExportBsBySubCategoryMutation, ExportBsBySubCategoryMutationVariables>;
export const ExportBalanceSheetDocument = gql`
    mutation ExportBalanceSheet($input: ExportBalanceSheetMutationInput!) {
  exportBalanceSheet(input: $input) {
    downloadUrl
  }
}
    `;
export type ExportBalanceSheetMutationFn = Apollo.MutationFunction<ExportBalanceSheetMutation, ExportBalanceSheetMutationVariables>;

/**
 * __useExportBalanceSheetMutation__
 *
 * To run a mutation, you first call `useExportBalanceSheetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportBalanceSheetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportBalanceSheetMutation, { data, loading, error }] = useExportBalanceSheetMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExportBalanceSheetMutation(baseOptions?: Apollo.MutationHookOptions<ExportBalanceSheetMutation, ExportBalanceSheetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExportBalanceSheetMutation, ExportBalanceSheetMutationVariables>(ExportBalanceSheetDocument, options);
      }
export type ExportBalanceSheetMutationHookResult = ReturnType<typeof useExportBalanceSheetMutation>;
export type ExportBalanceSheetMutationResult = Apollo.MutationResult<ExportBalanceSheetMutation>;
export type ExportBalanceSheetMutationOptions = Apollo.BaseMutationOptions<ExportBalanceSheetMutation, ExportBalanceSheetMutationVariables>;
export const ExportPlSheetBySubCategoryDocument = gql`
    mutation ExportPLSheetBySubCategory($input: ExportProfitLossSheetBySubCategoryMutationInput!) {
  exportPLSheetBySubCategory(input: $input) {
    downloadUrl
  }
}
    `;
export type ExportPlSheetBySubCategoryMutationFn = Apollo.MutationFunction<ExportPlSheetBySubCategoryMutation, ExportPlSheetBySubCategoryMutationVariables>;

/**
 * __useExportPlSheetBySubCategoryMutation__
 *
 * To run a mutation, you first call `useExportPlSheetBySubCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportPlSheetBySubCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportPlSheetBySubCategoryMutation, { data, loading, error }] = useExportPlSheetBySubCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExportPlSheetBySubCategoryMutation(baseOptions?: Apollo.MutationHookOptions<ExportPlSheetBySubCategoryMutation, ExportPlSheetBySubCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExportPlSheetBySubCategoryMutation, ExportPlSheetBySubCategoryMutationVariables>(ExportPlSheetBySubCategoryDocument, options);
      }
export type ExportPlSheetBySubCategoryMutationHookResult = ReturnType<typeof useExportPlSheetBySubCategoryMutation>;
export type ExportPlSheetBySubCategoryMutationResult = Apollo.MutationResult<ExportPlSheetBySubCategoryMutation>;
export type ExportPlSheetBySubCategoryMutationOptions = Apollo.BaseMutationOptions<ExportPlSheetBySubCategoryMutation, ExportPlSheetBySubCategoryMutationVariables>;
export const ExportPlSheetDocument = gql`
    mutation ExportPLSheet($input: ExportPLSheetMutationInput!) {
  exportPLSheet(input: $input) {
    downloadUrl
  }
}
    `;
export type ExportPlSheetMutationFn = Apollo.MutationFunction<ExportPlSheetMutation, ExportPlSheetMutationVariables>;

/**
 * __useExportPlSheetMutation__
 *
 * To run a mutation, you first call `useExportPlSheetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportPlSheetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportPlSheetMutation, { data, loading, error }] = useExportPlSheetMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExportPlSheetMutation(baseOptions?: Apollo.MutationHookOptions<ExportPlSheetMutation, ExportPlSheetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExportPlSheetMutation, ExportPlSheetMutationVariables>(ExportPlSheetDocument, options);
      }
export type ExportPlSheetMutationHookResult = ReturnType<typeof useExportPlSheetMutation>;
export type ExportPlSheetMutationResult = Apollo.MutationResult<ExportPlSheetMutation>;
export type ExportPlSheetMutationOptions = Apollo.BaseMutationOptions<ExportPlSheetMutation, ExportPlSheetMutationVariables>;
export const GenerateConsolidatedAccountFileUploadUrlDocument = gql`
    mutation GenerateConsolidatedAccountFileUploadUrl($input: GenerateConsolidatedAccountFileUploadUrlMutationInput!) {
  generateConsolidatedAccountFileUploadUrl(input: $input) {
    key
    url
  }
}
    `;
export type GenerateConsolidatedAccountFileUploadUrlMutationFn = Apollo.MutationFunction<GenerateConsolidatedAccountFileUploadUrlMutation, GenerateConsolidatedAccountFileUploadUrlMutationVariables>;

/**
 * __useGenerateConsolidatedAccountFileUploadUrlMutation__
 *
 * To run a mutation, you first call `useGenerateConsolidatedAccountFileUploadUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateConsolidatedAccountFileUploadUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateConsolidatedAccountFileUploadUrlMutation, { data, loading, error }] = useGenerateConsolidatedAccountFileUploadUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateConsolidatedAccountFileUploadUrlMutation(baseOptions?: Apollo.MutationHookOptions<GenerateConsolidatedAccountFileUploadUrlMutation, GenerateConsolidatedAccountFileUploadUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateConsolidatedAccountFileUploadUrlMutation, GenerateConsolidatedAccountFileUploadUrlMutationVariables>(GenerateConsolidatedAccountFileUploadUrlDocument, options);
      }
export type GenerateConsolidatedAccountFileUploadUrlMutationHookResult = ReturnType<typeof useGenerateConsolidatedAccountFileUploadUrlMutation>;
export type GenerateConsolidatedAccountFileUploadUrlMutationResult = Apollo.MutationResult<GenerateConsolidatedAccountFileUploadUrlMutation>;
export type GenerateConsolidatedAccountFileUploadUrlMutationOptions = Apollo.BaseMutationOptions<GenerateConsolidatedAccountFileUploadUrlMutation, GenerateConsolidatedAccountFileUploadUrlMutationVariables>;
export const ImportConsolidatedAccountDocument = gql`
    mutation ImportConsolidatedAccount($input: ImportConsolidatedAccountMutationInput!) {
  importConsolidatedAccount(input: $input) {
    clientMutationId
  }
}
    `;
export type ImportConsolidatedAccountMutationFn = Apollo.MutationFunction<ImportConsolidatedAccountMutation, ImportConsolidatedAccountMutationVariables>;

/**
 * __useImportConsolidatedAccountMutation__
 *
 * To run a mutation, you first call `useImportConsolidatedAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportConsolidatedAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importConsolidatedAccountMutation, { data, loading, error }] = useImportConsolidatedAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useImportConsolidatedAccountMutation(baseOptions?: Apollo.MutationHookOptions<ImportConsolidatedAccountMutation, ImportConsolidatedAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImportConsolidatedAccountMutation, ImportConsolidatedAccountMutationVariables>(ImportConsolidatedAccountDocument, options);
      }
export type ImportConsolidatedAccountMutationHookResult = ReturnType<typeof useImportConsolidatedAccountMutation>;
export type ImportConsolidatedAccountMutationResult = Apollo.MutationResult<ImportConsolidatedAccountMutation>;
export type ImportConsolidatedAccountMutationOptions = Apollo.BaseMutationOptions<ImportConsolidatedAccountMutation, ImportConsolidatedAccountMutationVariables>;
export const ImportConsolidationJournalsDocument = gql`
    mutation ImportConsolidationJournals($input: ImportConsolidationJournalsMutationInput!) {
  importConsolidationJournals(input: $input) {
    clientMutationId
  }
}
    `;
export type ImportConsolidationJournalsMutationFn = Apollo.MutationFunction<ImportConsolidationJournalsMutation, ImportConsolidationJournalsMutationVariables>;

/**
 * __useImportConsolidationJournalsMutation__
 *
 * To run a mutation, you first call `useImportConsolidationJournalsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportConsolidationJournalsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importConsolidationJournalsMutation, { data, loading, error }] = useImportConsolidationJournalsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useImportConsolidationJournalsMutation(baseOptions?: Apollo.MutationHookOptions<ImportConsolidationJournalsMutation, ImportConsolidationJournalsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImportConsolidationJournalsMutation, ImportConsolidationJournalsMutationVariables>(ImportConsolidationJournalsDocument, options);
      }
export type ImportConsolidationJournalsMutationHookResult = ReturnType<typeof useImportConsolidationJournalsMutation>;
export type ImportConsolidationJournalsMutationResult = Apollo.MutationResult<ImportConsolidationJournalsMutation>;
export type ImportConsolidationJournalsMutationOptions = Apollo.BaseMutationOptions<ImportConsolidationJournalsMutation, ImportConsolidationJournalsMutationVariables>;
export const ImportConsolidationPackageDocument = gql`
    mutation ImportConsolidationPackage($input: ImportConsolidationPackageMutationInput!) {
  importConsolidationPackage(input: $input) {
    clientMutationId
    userErrors {
      field
      message
    }
  }
}
    `;
export type ImportConsolidationPackageMutationFn = Apollo.MutationFunction<ImportConsolidationPackageMutation, ImportConsolidationPackageMutationVariables>;

/**
 * __useImportConsolidationPackageMutation__
 *
 * To run a mutation, you first call `useImportConsolidationPackageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportConsolidationPackageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importConsolidationPackageMutation, { data, loading, error }] = useImportConsolidationPackageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useImportConsolidationPackageMutation(baseOptions?: Apollo.MutationHookOptions<ImportConsolidationPackageMutation, ImportConsolidationPackageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImportConsolidationPackageMutation, ImportConsolidationPackageMutationVariables>(ImportConsolidationPackageDocument, options);
      }
export type ImportConsolidationPackageMutationHookResult = ReturnType<typeof useImportConsolidationPackageMutation>;
export type ImportConsolidationPackageMutationResult = Apollo.MutationResult<ImportConsolidationPackageMutation>;
export type ImportConsolidationPackageMutationOptions = Apollo.BaseMutationOptions<ImportConsolidationPackageMutation, ImportConsolidationPackageMutationVariables>;
export const ImportConsolidationPackageFromExternalServiceDocument = gql`
    mutation ImportConsolidationPackageFromExternalService($input: ImportConsolidationPackageFromExternalServiceMutationInput!) {
  importConsolidationPackageFromExternalService(input: $input) {
    clientMutationId
  }
}
    `;
export type ImportConsolidationPackageFromExternalServiceMutationFn = Apollo.MutationFunction<ImportConsolidationPackageFromExternalServiceMutation, ImportConsolidationPackageFromExternalServiceMutationVariables>;

/**
 * __useImportConsolidationPackageFromExternalServiceMutation__
 *
 * To run a mutation, you first call `useImportConsolidationPackageFromExternalServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportConsolidationPackageFromExternalServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importConsolidationPackageFromExternalServiceMutation, { data, loading, error }] = useImportConsolidationPackageFromExternalServiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useImportConsolidationPackageFromExternalServiceMutation(baseOptions?: Apollo.MutationHookOptions<ImportConsolidationPackageFromExternalServiceMutation, ImportConsolidationPackageFromExternalServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImportConsolidationPackageFromExternalServiceMutation, ImportConsolidationPackageFromExternalServiceMutationVariables>(ImportConsolidationPackageFromExternalServiceDocument, options);
      }
export type ImportConsolidationPackageFromExternalServiceMutationHookResult = ReturnType<typeof useImportConsolidationPackageFromExternalServiceMutation>;
export type ImportConsolidationPackageFromExternalServiceMutationResult = Apollo.MutationResult<ImportConsolidationPackageFromExternalServiceMutation>;
export type ImportConsolidationPackageFromExternalServiceMutationOptions = Apollo.BaseMutationOptions<ImportConsolidationPackageFromExternalServiceMutation, ImportConsolidationPackageFromExternalServiceMutationVariables>;
export const LoginOfficeDocument = gql`
    mutation LoginOffice($tenantUid: ID!) {
  loginOffice(input: {tenantUid: $tenantUid}) {
    clientMutationId
  }
}
    `;
export type LoginOfficeMutationFn = Apollo.MutationFunction<LoginOfficeMutation, LoginOfficeMutationVariables>;

/**
 * __useLoginOfficeMutation__
 *
 * To run a mutation, you first call `useLoginOfficeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginOfficeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginOfficeMutation, { data, loading, error }] = useLoginOfficeMutation({
 *   variables: {
 *      tenantUid: // value for 'tenantUid'
 *   },
 * });
 */
export function useLoginOfficeMutation(baseOptions?: Apollo.MutationHookOptions<LoginOfficeMutation, LoginOfficeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginOfficeMutation, LoginOfficeMutationVariables>(LoginOfficeDocument, options);
      }
export type LoginOfficeMutationHookResult = ReturnType<typeof useLoginOfficeMutation>;
export type LoginOfficeMutationResult = Apollo.MutationResult<LoginOfficeMutation>;
export type LoginOfficeMutationOptions = Apollo.BaseMutationOptions<LoginOfficeMutation, LoginOfficeMutationVariables>;
export const LoginOfficeSsoDocument = gql`
    mutation LoginOfficeSso($originalTenantUid: String!) {
  loginOfficeSso(input: {tenantUidLongValue: $originalTenantUid}) {
    hasPermission
  }
}
    `;
export type LoginOfficeSsoMutationFn = Apollo.MutationFunction<LoginOfficeSsoMutation, LoginOfficeSsoMutationVariables>;

/**
 * __useLoginOfficeSsoMutation__
 *
 * To run a mutation, you first call `useLoginOfficeSsoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginOfficeSsoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginOfficeSsoMutation, { data, loading, error }] = useLoginOfficeSsoMutation({
 *   variables: {
 *      originalTenantUid: // value for 'originalTenantUid'
 *   },
 * });
 */
export function useLoginOfficeSsoMutation(baseOptions?: Apollo.MutationHookOptions<LoginOfficeSsoMutation, LoginOfficeSsoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginOfficeSsoMutation, LoginOfficeSsoMutationVariables>(LoginOfficeSsoDocument, options);
      }
export type LoginOfficeSsoMutationHookResult = ReturnType<typeof useLoginOfficeSsoMutation>;
export type LoginOfficeSsoMutationResult = Apollo.MutationResult<LoginOfficeSsoMutation>;
export type LoginOfficeSsoMutationOptions = Apollo.BaseMutationOptions<LoginOfficeSsoMutation, LoginOfficeSsoMutationVariables>;
export const ResetCarryForwardDocument = gql`
    mutation ResetCarryForward($input: ResetCarryForwardMutationInput!) {
  resetCarryForward(input: $input) {
    subscriptionId
  }
}
    `;
export type ResetCarryForwardMutationFn = Apollo.MutationFunction<ResetCarryForwardMutation, ResetCarryForwardMutationVariables>;

/**
 * __useResetCarryForwardMutation__
 *
 * To run a mutation, you first call `useResetCarryForwardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetCarryForwardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetCarryForwardMutation, { data, loading, error }] = useResetCarryForwardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetCarryForwardMutation(baseOptions?: Apollo.MutationHookOptions<ResetCarryForwardMutation, ResetCarryForwardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetCarryForwardMutation, ResetCarryForwardMutationVariables>(ResetCarryForwardDocument, options);
      }
export type ResetCarryForwardMutationHookResult = ReturnType<typeof useResetCarryForwardMutation>;
export type ResetCarryForwardMutationResult = Apollo.MutationResult<ResetCarryForwardMutation>;
export type ResetCarryForwardMutationOptions = Apollo.BaseMutationOptions<ResetCarryForwardMutation, ResetCarryForwardMutationVariables>;
export const ResetConsolidationPackageDocument = gql`
    mutation ResetConsolidationPackage($input: ResetConsolidationPackageMutationInput!) {
  resetConsolidationPackage(input: $input) {
    clientMutationId
  }
}
    `;
export type ResetConsolidationPackageMutationFn = Apollo.MutationFunction<ResetConsolidationPackageMutation, ResetConsolidationPackageMutationVariables>;

/**
 * __useResetConsolidationPackageMutation__
 *
 * To run a mutation, you first call `useResetConsolidationPackageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetConsolidationPackageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetConsolidationPackageMutation, { data, loading, error }] = useResetConsolidationPackageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetConsolidationPackageMutation(baseOptions?: Apollo.MutationHookOptions<ResetConsolidationPackageMutation, ResetConsolidationPackageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetConsolidationPackageMutation, ResetConsolidationPackageMutationVariables>(ResetConsolidationPackageDocument, options);
      }
export type ResetConsolidationPackageMutationHookResult = ReturnType<typeof useResetConsolidationPackageMutation>;
export type ResetConsolidationPackageMutationResult = Apollo.MutationResult<ResetConsolidationPackageMutation>;
export type ResetConsolidationPackageMutationOptions = Apollo.BaseMutationOptions<ResetConsolidationPackageMutation, ResetConsolidationPackageMutationVariables>;
export const UpdateAccountConversionRuleDocument = gql`
    mutation UpdateAccountConversionRule($input: UpdateAccountConversionRuleMutationInput!) {
  updateAccountConversionRule(input: $input) {
    clientMutationId
  }
}
    `;
export type UpdateAccountConversionRuleMutationFn = Apollo.MutationFunction<UpdateAccountConversionRuleMutation, UpdateAccountConversionRuleMutationVariables>;

/**
 * __useUpdateAccountConversionRuleMutation__
 *
 * To run a mutation, you first call `useUpdateAccountConversionRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountConversionRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountConversionRuleMutation, { data, loading, error }] = useUpdateAccountConversionRuleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAccountConversionRuleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountConversionRuleMutation, UpdateAccountConversionRuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAccountConversionRuleMutation, UpdateAccountConversionRuleMutationVariables>(UpdateAccountConversionRuleDocument, options);
      }
export type UpdateAccountConversionRuleMutationHookResult = ReturnType<typeof useUpdateAccountConversionRuleMutation>;
export type UpdateAccountConversionRuleMutationResult = Apollo.MutationResult<UpdateAccountConversionRuleMutation>;
export type UpdateAccountConversionRuleMutationOptions = Apollo.BaseMutationOptions<UpdateAccountConversionRuleMutation, UpdateAccountConversionRuleMutationVariables>;
export const UpdateAssignedConsolidatedAccountsDocument = gql`
    mutation updateAssignedConsolidatedAccounts($input: UpdateAssignedConsolidatedAccountsMutationInput!) {
  updateAssignedConsolidatedAccounts(input: $input) {
    clientMutationId
  }
}
    `;
export type UpdateAssignedConsolidatedAccountsMutationFn = Apollo.MutationFunction<UpdateAssignedConsolidatedAccountsMutation, UpdateAssignedConsolidatedAccountsMutationVariables>;

/**
 * __useUpdateAssignedConsolidatedAccountsMutation__
 *
 * To run a mutation, you first call `useUpdateAssignedConsolidatedAccountsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssignedConsolidatedAccountsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssignedConsolidatedAccountsMutation, { data, loading, error }] = useUpdateAssignedConsolidatedAccountsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAssignedConsolidatedAccountsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAssignedConsolidatedAccountsMutation, UpdateAssignedConsolidatedAccountsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAssignedConsolidatedAccountsMutation, UpdateAssignedConsolidatedAccountsMutationVariables>(UpdateAssignedConsolidatedAccountsDocument, options);
      }
export type UpdateAssignedConsolidatedAccountsMutationHookResult = ReturnType<typeof useUpdateAssignedConsolidatedAccountsMutation>;
export type UpdateAssignedConsolidatedAccountsMutationResult = Apollo.MutationResult<UpdateAssignedConsolidatedAccountsMutation>;
export type UpdateAssignedConsolidatedAccountsMutationOptions = Apollo.BaseMutationOptions<UpdateAssignedConsolidatedAccountsMutation, UpdateAssignedConsolidatedAccountsMutationVariables>;
export const UpdateBsTranslationAdjustmentsDocument = gql`
    mutation UpdateBSTranslationAdjustments($input: UpdateBSTranslationAdjustmentsMutationInput!) {
  updateBSTranslationAdjustments(input: $input) {
    clientMutationId
    userErrors {
      message
      field
    }
  }
}
    `;
export type UpdateBsTranslationAdjustmentsMutationFn = Apollo.MutationFunction<UpdateBsTranslationAdjustmentsMutation, UpdateBsTranslationAdjustmentsMutationVariables>;

/**
 * __useUpdateBsTranslationAdjustmentsMutation__
 *
 * To run a mutation, you first call `useUpdateBsTranslationAdjustmentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBsTranslationAdjustmentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBsTranslationAdjustmentsMutation, { data, loading, error }] = useUpdateBsTranslationAdjustmentsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBsTranslationAdjustmentsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBsTranslationAdjustmentsMutation, UpdateBsTranslationAdjustmentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBsTranslationAdjustmentsMutation, UpdateBsTranslationAdjustmentsMutationVariables>(UpdateBsTranslationAdjustmentsDocument, options);
      }
export type UpdateBsTranslationAdjustmentsMutationHookResult = ReturnType<typeof useUpdateBsTranslationAdjustmentsMutation>;
export type UpdateBsTranslationAdjustmentsMutationResult = Apollo.MutationResult<UpdateBsTranslationAdjustmentsMutation>;
export type UpdateBsTranslationAdjustmentsMutationOptions = Apollo.BaseMutationOptions<UpdateBsTranslationAdjustmentsMutation, UpdateBsTranslationAdjustmentsMutationVariables>;
export const UpdateBsBalanceAdjustmentDocument = gql`
    mutation UpdateBsBalanceAdjustment($input: UpdateBsBalanceAdjustmentsMutationInput!) {
  updateBsBalanceAdjustment(input: $input) {
    clientMutationId
  }
}
    `;
export type UpdateBsBalanceAdjustmentMutationFn = Apollo.MutationFunction<UpdateBsBalanceAdjustmentMutation, UpdateBsBalanceAdjustmentMutationVariables>;

/**
 * __useUpdateBsBalanceAdjustmentMutation__
 *
 * To run a mutation, you first call `useUpdateBsBalanceAdjustmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBsBalanceAdjustmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBsBalanceAdjustmentMutation, { data, loading, error }] = useUpdateBsBalanceAdjustmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBsBalanceAdjustmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBsBalanceAdjustmentMutation, UpdateBsBalanceAdjustmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBsBalanceAdjustmentMutation, UpdateBsBalanceAdjustmentMutationVariables>(UpdateBsBalanceAdjustmentDocument, options);
      }
export type UpdateBsBalanceAdjustmentMutationHookResult = ReturnType<typeof useUpdateBsBalanceAdjustmentMutation>;
export type UpdateBsBalanceAdjustmentMutationResult = Apollo.MutationResult<UpdateBsBalanceAdjustmentMutation>;
export type UpdateBsBalanceAdjustmentMutationOptions = Apollo.BaseMutationOptions<UpdateBsBalanceAdjustmentMutation, UpdateBsBalanceAdjustmentMutationVariables>;
export const UpdateCompanyDocument = gql`
    mutation updateCompany($input: UpdateCompanyMutationInput!) {
  updateCompany(input: $input) {
    clientMutationId
    company {
      nameJa
    }
    userErrors {
      field
      message
    }
  }
}
    `;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<UpdateCompanyMutation, UpdateCompanyMutationVariables>;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCompanyMutation, UpdateCompanyMutationVariables>(UpdateCompanyDocument, options);
      }
export type UpdateCompanyMutationHookResult = ReturnType<typeof useUpdateCompanyMutation>;
export type UpdateCompanyMutationResult = Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const UpdateConsolidatedAccountDocument = gql`
    mutation UpdateConsolidatedAccount($input: UpdateConsolidatedAccountMutationInput!) {
  updateConsolidatedAccount(input: $input) {
    consolidatedAccount {
      nameJa
    }
    userErrors {
      field
      message
    }
  }
}
    `;
export type UpdateConsolidatedAccountMutationFn = Apollo.MutationFunction<UpdateConsolidatedAccountMutation, UpdateConsolidatedAccountMutationVariables>;

/**
 * __useUpdateConsolidatedAccountMutation__
 *
 * To run a mutation, you first call `useUpdateConsolidatedAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConsolidatedAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConsolidatedAccountMutation, { data, loading, error }] = useUpdateConsolidatedAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConsolidatedAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConsolidatedAccountMutation, UpdateConsolidatedAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConsolidatedAccountMutation, UpdateConsolidatedAccountMutationVariables>(UpdateConsolidatedAccountDocument, options);
      }
export type UpdateConsolidatedAccountMutationHookResult = ReturnType<typeof useUpdateConsolidatedAccountMutation>;
export type UpdateConsolidatedAccountMutationResult = Apollo.MutationResult<UpdateConsolidatedAccountMutation>;
export type UpdateConsolidatedAccountMutationOptions = Apollo.BaseMutationOptions<UpdateConsolidatedAccountMutation, UpdateConsolidatedAccountMutationVariables>;
export const UpdateConsolidationAccountingUnitDocument = gql`
    mutation UpdateConsolidationAccountingUnit($input: UpdateConsolidationAccountingUnitMutationInput!) {
  updateConsolidationAccountingUnit(input: $input) {
    consolidationAccountingUnit {
      id
      nameJa
      lockStatus
      workClassificationId
    }
    userErrors {
      field
      message
    }
  }
}
    `;
export type UpdateConsolidationAccountingUnitMutationFn = Apollo.MutationFunction<UpdateConsolidationAccountingUnitMutation, UpdateConsolidationAccountingUnitMutationVariables>;

/**
 * __useUpdateConsolidationAccountingUnitMutation__
 *
 * To run a mutation, you first call `useUpdateConsolidationAccountingUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConsolidationAccountingUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConsolidationAccountingUnitMutation, { data, loading, error }] = useUpdateConsolidationAccountingUnitMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConsolidationAccountingUnitMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConsolidationAccountingUnitMutation, UpdateConsolidationAccountingUnitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConsolidationAccountingUnitMutation, UpdateConsolidationAccountingUnitMutationVariables>(UpdateConsolidationAccountingUnitDocument, options);
      }
export type UpdateConsolidationAccountingUnitMutationHookResult = ReturnType<typeof useUpdateConsolidationAccountingUnitMutation>;
export type UpdateConsolidationAccountingUnitMutationResult = Apollo.MutationResult<UpdateConsolidationAccountingUnitMutation>;
export type UpdateConsolidationAccountingUnitMutationOptions = Apollo.BaseMutationOptions<UpdateConsolidationAccountingUnitMutation, UpdateConsolidationAccountingUnitMutationVariables>;
export const UpdateConsolidationAccountingUnitLockStatusDocument = gql`
    mutation updateConsolidationAccountingUnitLockStatus($input: UpdateConsolidationAccountingUnitLockStatusMutationInput!) {
  updateConsolidationAccountingUnitLockStatus(input: $input) {
    consolidationAccountingUnit {
      id
      nameJa
      lockStatus
    }
    clientMutationId
  }
}
    `;
export type UpdateConsolidationAccountingUnitLockStatusMutationFn = Apollo.MutationFunction<UpdateConsolidationAccountingUnitLockStatusMutation, UpdateConsolidationAccountingUnitLockStatusMutationVariables>;

/**
 * __useUpdateConsolidationAccountingUnitLockStatusMutation__
 *
 * To run a mutation, you first call `useUpdateConsolidationAccountingUnitLockStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConsolidationAccountingUnitLockStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConsolidationAccountingUnitLockStatusMutation, { data, loading, error }] = useUpdateConsolidationAccountingUnitLockStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConsolidationAccountingUnitLockStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConsolidationAccountingUnitLockStatusMutation, UpdateConsolidationAccountingUnitLockStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConsolidationAccountingUnitLockStatusMutation, UpdateConsolidationAccountingUnitLockStatusMutationVariables>(UpdateConsolidationAccountingUnitLockStatusDocument, options);
      }
export type UpdateConsolidationAccountingUnitLockStatusMutationHookResult = ReturnType<typeof useUpdateConsolidationAccountingUnitLockStatusMutation>;
export type UpdateConsolidationAccountingUnitLockStatusMutationResult = Apollo.MutationResult<UpdateConsolidationAccountingUnitLockStatusMutation>;
export type UpdateConsolidationAccountingUnitLockStatusMutationOptions = Apollo.BaseMutationOptions<UpdateConsolidationAccountingUnitLockStatusMutation, UpdateConsolidationAccountingUnitLockStatusMutationVariables>;
export const UpdateConsolidationJournalTypeDocument = gql`
    mutation UpdateConsolidationJournalType($input: UpdateConsolidationJournalTypeMutationInput!) {
  updateConsolidationJournalType(input: $input) {
    consolidationJournalType {
      name
    }
    userErrors {
      field
      message
    }
  }
}
    `;
export type UpdateConsolidationJournalTypeMutationFn = Apollo.MutationFunction<UpdateConsolidationJournalTypeMutation, UpdateConsolidationJournalTypeMutationVariables>;

/**
 * __useUpdateConsolidationJournalTypeMutation__
 *
 * To run a mutation, you first call `useUpdateConsolidationJournalTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConsolidationJournalTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConsolidationJournalTypeMutation, { data, loading, error }] = useUpdateConsolidationJournalTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConsolidationJournalTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConsolidationJournalTypeMutation, UpdateConsolidationJournalTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConsolidationJournalTypeMutation, UpdateConsolidationJournalTypeMutationVariables>(UpdateConsolidationJournalTypeDocument, options);
      }
export type UpdateConsolidationJournalTypeMutationHookResult = ReturnType<typeof useUpdateConsolidationJournalTypeMutation>;
export type UpdateConsolidationJournalTypeMutationResult = Apollo.MutationResult<UpdateConsolidationJournalTypeMutation>;
export type UpdateConsolidationJournalTypeMutationOptions = Apollo.BaseMutationOptions<UpdateConsolidationJournalTypeMutation, UpdateConsolidationJournalTypeMutationVariables>;
export const UpdateConsolidationJournalTypeSortOrderDocument = gql`
    mutation UpdateConsolidationJournalTypeSortOrder($input: UpdateConsolidationJournalTypeSortOrderMutationInput!) {
  updateConsolidationJournalTypeSortOrder(input: $input) {
    clientMutationId
  }
}
    `;
export type UpdateConsolidationJournalTypeSortOrderMutationFn = Apollo.MutationFunction<UpdateConsolidationJournalTypeSortOrderMutation, UpdateConsolidationJournalTypeSortOrderMutationVariables>;

/**
 * __useUpdateConsolidationJournalTypeSortOrderMutation__
 *
 * To run a mutation, you first call `useUpdateConsolidationJournalTypeSortOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConsolidationJournalTypeSortOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConsolidationJournalTypeSortOrderMutation, { data, loading, error }] = useUpdateConsolidationJournalTypeSortOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConsolidationJournalTypeSortOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConsolidationJournalTypeSortOrderMutation, UpdateConsolidationJournalTypeSortOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConsolidationJournalTypeSortOrderMutation, UpdateConsolidationJournalTypeSortOrderMutationVariables>(UpdateConsolidationJournalTypeSortOrderDocument, options);
      }
export type UpdateConsolidationJournalTypeSortOrderMutationHookResult = ReturnType<typeof useUpdateConsolidationJournalTypeSortOrderMutation>;
export type UpdateConsolidationJournalTypeSortOrderMutationResult = Apollo.MutationResult<UpdateConsolidationJournalTypeSortOrderMutation>;
export type UpdateConsolidationJournalTypeSortOrderMutationOptions = Apollo.BaseMutationOptions<UpdateConsolidationJournalTypeSortOrderMutation, UpdateConsolidationJournalTypeSortOrderMutationVariables>;
export const UpdateConsolidationPackageImportSettingDocument = gql`
    mutation UpdateConsolidationPackageImportSetting($input: UpdateConsolidationPackageImportSettingMutationInput!) {
  updateConsolidationPackageImportSetting(input: $input) {
    clientMutationId
    consolidationPackageImportSetting {
      name
    }
    userErrors {
      message
      field
    }
  }
}
    `;
export type UpdateConsolidationPackageImportSettingMutationFn = Apollo.MutationFunction<UpdateConsolidationPackageImportSettingMutation, UpdateConsolidationPackageImportSettingMutationVariables>;

/**
 * __useUpdateConsolidationPackageImportSettingMutation__
 *
 * To run a mutation, you first call `useUpdateConsolidationPackageImportSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConsolidationPackageImportSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConsolidationPackageImportSettingMutation, { data, loading, error }] = useUpdateConsolidationPackageImportSettingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConsolidationPackageImportSettingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConsolidationPackageImportSettingMutation, UpdateConsolidationPackageImportSettingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConsolidationPackageImportSettingMutation, UpdateConsolidationPackageImportSettingMutationVariables>(UpdateConsolidationPackageImportSettingDocument, options);
      }
export type UpdateConsolidationPackageImportSettingMutationHookResult = ReturnType<typeof useUpdateConsolidationPackageImportSettingMutation>;
export type UpdateConsolidationPackageImportSettingMutationResult = Apollo.MutationResult<UpdateConsolidationPackageImportSettingMutation>;
export type UpdateConsolidationPackageImportSettingMutationOptions = Apollo.BaseMutationOptions<UpdateConsolidationPackageImportSettingMutation, UpdateConsolidationPackageImportSettingMutationVariables>;
export const UpdateExchangeRatesDocument = gql`
    mutation UpdateExchangeRates($input: UpdateExchangeRatesMutationInput!) {
  updateExchangeRates(input: $input) {
    clientMutationId
  }
}
    `;
export type UpdateExchangeRatesMutationFn = Apollo.MutationFunction<UpdateExchangeRatesMutation, UpdateExchangeRatesMutationVariables>;

/**
 * __useUpdateExchangeRatesMutation__
 *
 * To run a mutation, you first call `useUpdateExchangeRatesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExchangeRatesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExchangeRatesMutation, { data, loading, error }] = useUpdateExchangeRatesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateExchangeRatesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExchangeRatesMutation, UpdateExchangeRatesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateExchangeRatesMutation, UpdateExchangeRatesMutationVariables>(UpdateExchangeRatesDocument, options);
      }
export type UpdateExchangeRatesMutationHookResult = ReturnType<typeof useUpdateExchangeRatesMutation>;
export type UpdateExchangeRatesMutationResult = Apollo.MutationResult<UpdateExchangeRatesMutation>;
export type UpdateExchangeRatesMutationOptions = Apollo.BaseMutationOptions<UpdateExchangeRatesMutation, UpdateExchangeRatesMutationVariables>;
export const UpdateOfficeMemberDocument = gql`
    mutation UpdateOfficeMember($input: UpdateOfficeMemberMutationInput!) {
  updateOfficeMember(input: $input) {
    errors {
      error
      message
    }
    officeMember {
      name
    }
  }
}
    `;
export type UpdateOfficeMemberMutationFn = Apollo.MutationFunction<UpdateOfficeMemberMutation, UpdateOfficeMemberMutationVariables>;

/**
 * __useUpdateOfficeMemberMutation__
 *
 * To run a mutation, you first call `useUpdateOfficeMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOfficeMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOfficeMemberMutation, { data, loading, error }] = useUpdateOfficeMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOfficeMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOfficeMemberMutation, UpdateOfficeMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOfficeMemberMutation, UpdateOfficeMemberMutationVariables>(UpdateOfficeMemberDocument, options);
      }
export type UpdateOfficeMemberMutationHookResult = ReturnType<typeof useUpdateOfficeMemberMutation>;
export type UpdateOfficeMemberMutationResult = Apollo.MutationResult<UpdateOfficeMemberMutation>;
export type UpdateOfficeMemberMutationOptions = Apollo.BaseMutationOptions<UpdateOfficeMemberMutation, UpdateOfficeMemberMutationVariables>;
export const UpdateOrCreateConsolidationJournalImportSettingDocument = gql`
    mutation UpdateOrCreateConsolidationJournalImportSetting($input: UpdateOrCreateConsolidationJournalImportSettingMutationInput!) {
  updateOrCreateConsolidationJournalImportSetting(input: $input) {
    consolidationJournalImportSetting {
      companyAbbreviationColumn
      consolidatedAccountCodeColumn
      consolidationAccountingUnitId
      consolidationJournalGroupKeyColumn
      consolidationJournalTypeId
      creditBalanceColumn
      debitBalanceColumn
      endRow
      id
      tenantUid
      remarkColumn
      segmentAbbreviationColumn
      sheetName
      startRow
    }
  }
}
    `;
export type UpdateOrCreateConsolidationJournalImportSettingMutationFn = Apollo.MutationFunction<UpdateOrCreateConsolidationJournalImportSettingMutation, UpdateOrCreateConsolidationJournalImportSettingMutationVariables>;

/**
 * __useUpdateOrCreateConsolidationJournalImportSettingMutation__
 *
 * To run a mutation, you first call `useUpdateOrCreateConsolidationJournalImportSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrCreateConsolidationJournalImportSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrCreateConsolidationJournalImportSettingMutation, { data, loading, error }] = useUpdateOrCreateConsolidationJournalImportSettingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrCreateConsolidationJournalImportSettingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrCreateConsolidationJournalImportSettingMutation, UpdateOrCreateConsolidationJournalImportSettingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrCreateConsolidationJournalImportSettingMutation, UpdateOrCreateConsolidationJournalImportSettingMutationVariables>(UpdateOrCreateConsolidationJournalImportSettingDocument, options);
      }
export type UpdateOrCreateConsolidationJournalImportSettingMutationHookResult = ReturnType<typeof useUpdateOrCreateConsolidationJournalImportSettingMutation>;
export type UpdateOrCreateConsolidationJournalImportSettingMutationResult = Apollo.MutationResult<UpdateOrCreateConsolidationJournalImportSettingMutation>;
export type UpdateOrCreateConsolidationJournalImportSettingMutationOptions = Apollo.BaseMutationOptions<UpdateOrCreateConsolidationJournalImportSettingMutation, UpdateOrCreateConsolidationJournalImportSettingMutationVariables>;
export const UpdatePlTranslationAdjustmentsDocument = gql`
    mutation UpdatePLTranslationAdjustments($input: UpdatePLTranslationAdjustmentsMutationInput!) {
  updatePLTranslationAdjustments(input: $input) {
    clientMutationId
    userErrors {
      message
      field
    }
  }
}
    `;
export type UpdatePlTranslationAdjustmentsMutationFn = Apollo.MutationFunction<UpdatePlTranslationAdjustmentsMutation, UpdatePlTranslationAdjustmentsMutationVariables>;

/**
 * __useUpdatePlTranslationAdjustmentsMutation__
 *
 * To run a mutation, you first call `useUpdatePlTranslationAdjustmentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlTranslationAdjustmentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlTranslationAdjustmentsMutation, { data, loading, error }] = useUpdatePlTranslationAdjustmentsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePlTranslationAdjustmentsMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlTranslationAdjustmentsMutation, UpdatePlTranslationAdjustmentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlTranslationAdjustmentsMutation, UpdatePlTranslationAdjustmentsMutationVariables>(UpdatePlTranslationAdjustmentsDocument, options);
      }
export type UpdatePlTranslationAdjustmentsMutationHookResult = ReturnType<typeof useUpdatePlTranslationAdjustmentsMutation>;
export type UpdatePlTranslationAdjustmentsMutationResult = Apollo.MutationResult<UpdatePlTranslationAdjustmentsMutation>;
export type UpdatePlTranslationAdjustmentsMutationOptions = Apollo.BaseMutationOptions<UpdatePlTranslationAdjustmentsMutation, UpdatePlTranslationAdjustmentsMutationVariables>;
export const UpdatePlBalanceAdjustmentDocument = gql`
    mutation UpdatePlBalanceAdjustment($input: UpdatePlBalanceAdjustmentsMutationInput!) {
  updatePlBalanceAdjustment(input: $input) {
    clientMutationId
  }
}
    `;
export type UpdatePlBalanceAdjustmentMutationFn = Apollo.MutationFunction<UpdatePlBalanceAdjustmentMutation, UpdatePlBalanceAdjustmentMutationVariables>;

/**
 * __useUpdatePlBalanceAdjustmentMutation__
 *
 * To run a mutation, you first call `useUpdatePlBalanceAdjustmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlBalanceAdjustmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlBalanceAdjustmentMutation, { data, loading, error }] = useUpdatePlBalanceAdjustmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePlBalanceAdjustmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlBalanceAdjustmentMutation, UpdatePlBalanceAdjustmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlBalanceAdjustmentMutation, UpdatePlBalanceAdjustmentMutationVariables>(UpdatePlBalanceAdjustmentDocument, options);
      }
export type UpdatePlBalanceAdjustmentMutationHookResult = ReturnType<typeof useUpdatePlBalanceAdjustmentMutation>;
export type UpdatePlBalanceAdjustmentMutationResult = Apollo.MutationResult<UpdatePlBalanceAdjustmentMutation>;
export type UpdatePlBalanceAdjustmentMutationOptions = Apollo.BaseMutationOptions<UpdatePlBalanceAdjustmentMutation, UpdatePlBalanceAdjustmentMutationVariables>;
export const UpdateReservedConsolidatedAccountsDocument = gql`
    mutation UpdateReservedConsolidatedAccounts($input: UpdateReservedConsolidatedAccountsMutationInput!) {
  updateReservedConsolidatedAccounts(input: $input) {
    clientMutationId
    reservedConsolidatedAccountsError
  }
}
    `;
export type UpdateReservedConsolidatedAccountsMutationFn = Apollo.MutationFunction<UpdateReservedConsolidatedAccountsMutation, UpdateReservedConsolidatedAccountsMutationVariables>;

/**
 * __useUpdateReservedConsolidatedAccountsMutation__
 *
 * To run a mutation, you first call `useUpdateReservedConsolidatedAccountsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReservedConsolidatedAccountsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReservedConsolidatedAccountsMutation, { data, loading, error }] = useUpdateReservedConsolidatedAccountsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateReservedConsolidatedAccountsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReservedConsolidatedAccountsMutation, UpdateReservedConsolidatedAccountsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReservedConsolidatedAccountsMutation, UpdateReservedConsolidatedAccountsMutationVariables>(UpdateReservedConsolidatedAccountsDocument, options);
      }
export type UpdateReservedConsolidatedAccountsMutationHookResult = ReturnType<typeof useUpdateReservedConsolidatedAccountsMutation>;
export type UpdateReservedConsolidatedAccountsMutationResult = Apollo.MutationResult<UpdateReservedConsolidatedAccountsMutation>;
export type UpdateReservedConsolidatedAccountsMutationOptions = Apollo.BaseMutationOptions<UpdateReservedConsolidatedAccountsMutation, UpdateReservedConsolidatedAccountsMutationVariables>;
export const UpdateSegmentDocument = gql`
    mutation UpdateSegment($input: UpdateSegmentMutationInput!) {
  updateSegment(input: $input) {
    clientMutationId
    segment {
      nameJa
    }
    userErrors {
      field
      message
    }
  }
}
    `;
export type UpdateSegmentMutationFn = Apollo.MutationFunction<UpdateSegmentMutation, UpdateSegmentMutationVariables>;

/**
 * __useUpdateSegmentMutation__
 *
 * To run a mutation, you first call `useUpdateSegmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSegmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSegmentMutation, { data, loading, error }] = useUpdateSegmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSegmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSegmentMutation, UpdateSegmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSegmentMutation, UpdateSegmentMutationVariables>(UpdateSegmentDocument, options);
      }
export type UpdateSegmentMutationHookResult = ReturnType<typeof useUpdateSegmentMutation>;
export type UpdateSegmentMutationResult = Apollo.MutationResult<UpdateSegmentMutation>;
export type UpdateSegmentMutationOptions = Apollo.BaseMutationOptions<UpdateSegmentMutation, UpdateSegmentMutationVariables>;
export const UpdateSegmentSortOrderDocument = gql`
    mutation UpdateSegmentSortOrder($input: UpdateSegmentSortOrderMutationInput!) {
  updateSegmentSortOrder(input: $input) {
    clientMutationId
  }
}
    `;
export type UpdateSegmentSortOrderMutationFn = Apollo.MutationFunction<UpdateSegmentSortOrderMutation, UpdateSegmentSortOrderMutationVariables>;

/**
 * __useUpdateSegmentSortOrderMutation__
 *
 * To run a mutation, you first call `useUpdateSegmentSortOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSegmentSortOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSegmentSortOrderMutation, { data, loading, error }] = useUpdateSegmentSortOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSegmentSortOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSegmentSortOrderMutation, UpdateSegmentSortOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSegmentSortOrderMutation, UpdateSegmentSortOrderMutationVariables>(UpdateSegmentSortOrderDocument, options);
      }
export type UpdateSegmentSortOrderMutationHookResult = ReturnType<typeof useUpdateSegmentSortOrderMutation>;
export type UpdateSegmentSortOrderMutationResult = Apollo.MutationResult<UpdateSegmentSortOrderMutation>;
export type UpdateSegmentSortOrderMutationOptions = Apollo.BaseMutationOptions<UpdateSegmentSortOrderMutation, UpdateSegmentSortOrderMutationVariables>;
export const UpdateUserStatusDocument = gql`
    mutation UpdateUserStatus($input: UpdateUserStatusMutationInput!) {
  updateUserStatus(input: $input) {
    clientMutationId
  }
}
    `;
export type UpdateUserStatusMutationFn = Apollo.MutationFunction<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>;

/**
 * __useUpdateUserStatusMutation__
 *
 * To run a mutation, you first call `useUpdateUserStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserStatusMutation, { data, loading, error }] = useUpdateUserStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>(UpdateUserStatusDocument, options);
      }
export type UpdateUserStatusMutationHookResult = ReturnType<typeof useUpdateUserStatusMutation>;
export type UpdateUserStatusMutationResult = Apollo.MutationResult<UpdateUserStatusMutation>;
export type UpdateUserStatusMutationOptions = Apollo.BaseMutationOptions<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>;
export const UpdateWorkClassificationDocument = gql`
    mutation updateWorkClassification($input: UpdateWorkClassificationMutationInput!) {
  updateWorkClassification(input: $input) {
    clientMutationId
    workClassification {
      id
      nameEn
      nameJa
      code {
        code
      }
      description
    }
    userErrors {
      field
      message
    }
  }
}
    `;
export type UpdateWorkClassificationMutationFn = Apollo.MutationFunction<UpdateWorkClassificationMutation, UpdateWorkClassificationMutationVariables>;

/**
 * __useUpdateWorkClassificationMutation__
 *
 * To run a mutation, you first call `useUpdateWorkClassificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkClassificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkClassificationMutation, { data, loading, error }] = useUpdateWorkClassificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateWorkClassificationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkClassificationMutation, UpdateWorkClassificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkClassificationMutation, UpdateWorkClassificationMutationVariables>(UpdateWorkClassificationDocument, options);
      }
export type UpdateWorkClassificationMutationHookResult = ReturnType<typeof useUpdateWorkClassificationMutation>;
export type UpdateWorkClassificationMutationResult = Apollo.MutationResult<UpdateWorkClassificationMutation>;
export type UpdateWorkClassificationMutationOptions = Apollo.BaseMutationOptions<UpdateWorkClassificationMutation, UpdateWorkClassificationMutationVariables>;
export const UpsertConsolidatedAccountImportSettingDocument = gql`
    mutation UpsertConsolidatedAccountImportSetting($input: UpsertConsolidatedAccountImportSettingMutationInput!) {
  upsertConsolidatedAccountImportSetting(input: $input) {
    clientMutationId
  }
}
    `;
export type UpsertConsolidatedAccountImportSettingMutationFn = Apollo.MutationFunction<UpsertConsolidatedAccountImportSettingMutation, UpsertConsolidatedAccountImportSettingMutationVariables>;

/**
 * __useUpsertConsolidatedAccountImportSettingMutation__
 *
 * To run a mutation, you first call `useUpsertConsolidatedAccountImportSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertConsolidatedAccountImportSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertConsolidatedAccountImportSettingMutation, { data, loading, error }] = useUpsertConsolidatedAccountImportSettingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertConsolidatedAccountImportSettingMutation(baseOptions?: Apollo.MutationHookOptions<UpsertConsolidatedAccountImportSettingMutation, UpsertConsolidatedAccountImportSettingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertConsolidatedAccountImportSettingMutation, UpsertConsolidatedAccountImportSettingMutationVariables>(UpsertConsolidatedAccountImportSettingDocument, options);
      }
export type UpsertConsolidatedAccountImportSettingMutationHookResult = ReturnType<typeof useUpsertConsolidatedAccountImportSettingMutation>;
export type UpsertConsolidatedAccountImportSettingMutationResult = Apollo.MutationResult<UpsertConsolidatedAccountImportSettingMutation>;
export type UpsertConsolidatedAccountImportSettingMutationOptions = Apollo.BaseMutationOptions<UpsertConsolidatedAccountImportSettingMutation, UpsertConsolidatedAccountImportSettingMutationVariables>;
export const AccountConversionRuleRecommendationDocument = gql`
    query AccountConversionRuleRecommendation($input: AccountConversionRuleRecommendationQueryInput!) {
  accountConversionRuleRecommendation(input: $input) {
    error
    results {
      code
      recommends {
        consolidatedAccount {
          id
          nameJa
          nameEn
          accountType
          code {
            code
          }
          consolidatedAccountSubCategory {
            consolidatedAccountCategory {
              financialStatementType
            }
          }
        }
        similarity
        autoFill
      }
    }
  }
}
    `;

/**
 * __useAccountConversionRuleRecommendationQuery__
 *
 * To run a query within a React component, call `useAccountConversionRuleRecommendationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountConversionRuleRecommendationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountConversionRuleRecommendationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAccountConversionRuleRecommendationQuery(baseOptions: Apollo.QueryHookOptions<AccountConversionRuleRecommendationQuery, AccountConversionRuleRecommendationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountConversionRuleRecommendationQuery, AccountConversionRuleRecommendationQueryVariables>(AccountConversionRuleRecommendationDocument, options);
      }
export function useAccountConversionRuleRecommendationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountConversionRuleRecommendationQuery, AccountConversionRuleRecommendationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountConversionRuleRecommendationQuery, AccountConversionRuleRecommendationQueryVariables>(AccountConversionRuleRecommendationDocument, options);
        }
export type AccountConversionRuleRecommendationQueryHookResult = ReturnType<typeof useAccountConversionRuleRecommendationQuery>;
export type AccountConversionRuleRecommendationLazyQueryHookResult = ReturnType<typeof useAccountConversionRuleRecommendationLazyQuery>;
export type AccountConversionRuleRecommendationQueryResult = Apollo.QueryResult<AccountConversionRuleRecommendationQuery, AccountConversionRuleRecommendationQueryVariables>;
export const AllConsolidationJournalsDocument = gql`
    query AllConsolidationJournals($id: ID!) {
  consolidationAccountingUnit(consolidationAccountingUnitId: $id) {
    allConsolidationJournals {
      id
      openingClassification
      journalGroupKey
      debitBalance
      creditBalance
      remark
      company {
        abbreviation
      }
      segment {
        abbreviation
      }
      consolidationJournalType {
        name
        sortOrder
      }
      assignedConsolidatedAccount {
        consolidatedAccount {
          code {
            code
          }
          nameJa
        }
      }
    }
  }
}
    `;

/**
 * __useAllConsolidationJournalsQuery__
 *
 * To run a query within a React component, call `useAllConsolidationJournalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllConsolidationJournalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllConsolidationJournalsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAllConsolidationJournalsQuery(baseOptions: Apollo.QueryHookOptions<AllConsolidationJournalsQuery, AllConsolidationJournalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllConsolidationJournalsQuery, AllConsolidationJournalsQueryVariables>(AllConsolidationJournalsDocument, options);
      }
export function useAllConsolidationJournalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllConsolidationJournalsQuery, AllConsolidationJournalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllConsolidationJournalsQuery, AllConsolidationJournalsQueryVariables>(AllConsolidationJournalsDocument, options);
        }
export type AllConsolidationJournalsQueryHookResult = ReturnType<typeof useAllConsolidationJournalsQuery>;
export type AllConsolidationJournalsLazyQueryHookResult = ReturnType<typeof useAllConsolidationJournalsLazyQuery>;
export type AllConsolidationJournalsQueryResult = Apollo.QueryResult<AllConsolidationJournalsQuery, AllConsolidationJournalsQueryVariables>;
export const AssignedConsolidatedAccountsDocument = gql`
    query AssignedConsolidatedAccounts($id: ID!) {
  consolidationAccountingUnit(consolidationAccountingUnitId: $id) {
    assignedConsolidatedAccounts {
      id
      sortOrder
      consolidatedAccount {
        id
        nameJa
        accountType
        code {
          code
        }
        consolidatedAccountSubCategory {
          id
        }
      }
      isDeletable
    }
  }
  office {
    consolidatedAccountSubCategories {
      id
      nameJa
      consolidatedAccountCategory {
        id
        nameJa
        financialStatementType
      }
    }
    consolidatedAccounts {
      id
      nameJa
      code {
        code
      }
      consolidatedAccountSubCategory {
        id
      }
    }
  }
}
    `;

/**
 * __useAssignedConsolidatedAccountsQuery__
 *
 * To run a query within a React component, call `useAssignedConsolidatedAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssignedConsolidatedAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssignedConsolidatedAccountsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAssignedConsolidatedAccountsQuery(baseOptions: Apollo.QueryHookOptions<AssignedConsolidatedAccountsQuery, AssignedConsolidatedAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AssignedConsolidatedAccountsQuery, AssignedConsolidatedAccountsQueryVariables>(AssignedConsolidatedAccountsDocument, options);
      }
export function useAssignedConsolidatedAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AssignedConsolidatedAccountsQuery, AssignedConsolidatedAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AssignedConsolidatedAccountsQuery, AssignedConsolidatedAccountsQueryVariables>(AssignedConsolidatedAccountsDocument, options);
        }
export type AssignedConsolidatedAccountsQueryHookResult = ReturnType<typeof useAssignedConsolidatedAccountsQuery>;
export type AssignedConsolidatedAccountsLazyQueryHookResult = ReturnType<typeof useAssignedConsolidatedAccountsLazyQuery>;
export type AssignedConsolidatedAccountsQueryResult = Apollo.QueryResult<AssignedConsolidatedAccountsQuery, AssignedConsolidatedAccountsQueryVariables>;
export const AssignedConsolidatedAccountsForConsolidationPackageImportDocument = gql`
    query AssignedConsolidatedAccountsForConsolidationPackageImport($id: ID!) {
  consolidationAccountingUnit(consolidationAccountingUnitId: $id) {
    id
    assignedConsolidatedAccounts {
      id
      consolidatedAccount {
        id
        nameJa
        nameEn
        accountType
        code {
          code
        }
        consolidatedAccountSubCategory {
          consolidatedAccountCategory {
            financialStatementType
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAssignedConsolidatedAccountsForConsolidationPackageImportQuery__
 *
 * To run a query within a React component, call `useAssignedConsolidatedAccountsForConsolidationPackageImportQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssignedConsolidatedAccountsForConsolidationPackageImportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssignedConsolidatedAccountsForConsolidationPackageImportQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAssignedConsolidatedAccountsForConsolidationPackageImportQuery(baseOptions: Apollo.QueryHookOptions<AssignedConsolidatedAccountsForConsolidationPackageImportQuery, AssignedConsolidatedAccountsForConsolidationPackageImportQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AssignedConsolidatedAccountsForConsolidationPackageImportQuery, AssignedConsolidatedAccountsForConsolidationPackageImportQueryVariables>(AssignedConsolidatedAccountsForConsolidationPackageImportDocument, options);
      }
export function useAssignedConsolidatedAccountsForConsolidationPackageImportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AssignedConsolidatedAccountsForConsolidationPackageImportQuery, AssignedConsolidatedAccountsForConsolidationPackageImportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AssignedConsolidatedAccountsForConsolidationPackageImportQuery, AssignedConsolidatedAccountsForConsolidationPackageImportQueryVariables>(AssignedConsolidatedAccountsForConsolidationPackageImportDocument, options);
        }
export type AssignedConsolidatedAccountsForConsolidationPackageImportQueryHookResult = ReturnType<typeof useAssignedConsolidatedAccountsForConsolidationPackageImportQuery>;
export type AssignedConsolidatedAccountsForConsolidationPackageImportLazyQueryHookResult = ReturnType<typeof useAssignedConsolidatedAccountsForConsolidationPackageImportLazyQuery>;
export type AssignedConsolidatedAccountsForConsolidationPackageImportQueryResult = Apollo.QueryResult<AssignedConsolidatedAccountsForConsolidationPackageImportQuery, AssignedConsolidatedAccountsForConsolidationPackageImportQueryVariables>;
export const BalanceSheetDocument = gql`
    query BalanceSheet($conacUnitId: ID!, $id: ID!, $companyId: ID!) {
  office {
    consolidationCurrency
  }
  consolidationAccountingUnit(consolidationAccountingUnitId: $conacUnitId) {
    consolidationPackage(id: $id) {
      balanceSheet {
        id
        rows {
          translatedBalance
          adjustedTranslatedBalance
          adjustedBalance
          balance
          assignedConsolidatedAccount {
            id
            workClassificationId
            sortOrder
            consolidatedAccount {
              consolidatedAccountSubCategory {
                sortOrder
                id
              }
              accountType
              code {
                code
              }
              conversionType
              id
              nameEn
              nameJa
              tenantUid
              consolidatedAccountSubCategory {
                id
                nameEn
                nameJa
              }
            }
          }
        }
        balanceAdjustments {
          id
          assignedConsolidatedAccountId
          amount
          remark
        }
        translationAdjustments {
          afterTranslationBalance
          assignedConsolidatedAccountId
          beforeTranslationBalance
          id
          openingClassification
          remark
        }
        adjustedSummary {
          assetsAmount
          assetsItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          balanceAmount
          liabilitiesAmount
          liabilitiesItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          netAssetsAmount
          netAssetsItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
        }
        translatedSummary {
          assetsAmount
          assetsItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          balanceAmount
          liabilitiesAmount
          liabilitiesItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          netAssetsAmount
          netAssetsItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
        }
      }
    }
    exchangeRate(companyId: $companyId) {
      currentRate
      averageRate
    }
  }
}
    `;

/**
 * __useBalanceSheetQuery__
 *
 * To run a query within a React component, call `useBalanceSheetQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalanceSheetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalanceSheetQuery({
 *   variables: {
 *      conacUnitId: // value for 'conacUnitId'
 *      id: // value for 'id'
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useBalanceSheetQuery(baseOptions: Apollo.QueryHookOptions<BalanceSheetQuery, BalanceSheetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BalanceSheetQuery, BalanceSheetQueryVariables>(BalanceSheetDocument, options);
      }
export function useBalanceSheetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BalanceSheetQuery, BalanceSheetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BalanceSheetQuery, BalanceSheetQueryVariables>(BalanceSheetDocument, options);
        }
export type BalanceSheetQueryHookResult = ReturnType<typeof useBalanceSheetQuery>;
export type BalanceSheetLazyQueryHookResult = ReturnType<typeof useBalanceSheetLazyQuery>;
export type BalanceSheetQueryResult = Apollo.QueryResult<BalanceSheetQuery, BalanceSheetQueryVariables>;
export const BsConsolidationWorksheetBalanceDocument = gql`
    query BSConsolidationWorksheetBalance($consolidationAccountingUnitId: ID!) {
  office {
    consolidationJournalTypes {
      id
      name
      bsConsolidationJournalSummary(
        consolidationAccountingUnitId: $consolidationAccountingUnitId
      ) {
        rows {
          assignedConsolidatedAccount {
            id
          }
          id
          totalBalance
        }
      }
    }
  }
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    includedConsolidationProcessTypeConsolidationPackages {
      id
      company {
        id
        abbreviation
      }
      submissionRequired
      balanceSheet {
        rows {
          assignedConsolidatedAccount {
            id
          }
          translatedBalance
          adjustedTranslatedBalance
        }
      }
    }
    bsConsolidationWorksheetBalance {
      rows {
        assignedConsolidatedAccount {
          id
          sortOrder
          consolidatedAccount {
            consolidatedAccountSubCategory {
              sortOrder
            }
            nameJa
            code {
              code
            }
            consolidatedAccountSubCategory {
              id
              nameJa
            }
          }
        }
        totalBalance
        adjustmentBalance
        adjustedBalance
      }
      summary {
        assetsAmount
        assetsItems {
          subCategory {
            id
            nameJa
          }
          amount
        }
        balanceAmount
        liabilitiesAmount
        liabilitiesItems {
          subCategory {
            id
            nameJa
          }
          amount
        }
        netAssetsAmount
        netAssetsItems {
          subCategory {
            id
            nameJa
          }
          amount
        }
      }
    }
  }
}
    `;

/**
 * __useBsConsolidationWorksheetBalanceQuery__
 *
 * To run a query within a React component, call `useBsConsolidationWorksheetBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useBsConsolidationWorksheetBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBsConsolidationWorksheetBalanceQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *   },
 * });
 */
export function useBsConsolidationWorksheetBalanceQuery(baseOptions: Apollo.QueryHookOptions<BsConsolidationWorksheetBalanceQuery, BsConsolidationWorksheetBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BsConsolidationWorksheetBalanceQuery, BsConsolidationWorksheetBalanceQueryVariables>(BsConsolidationWorksheetBalanceDocument, options);
      }
export function useBsConsolidationWorksheetBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BsConsolidationWorksheetBalanceQuery, BsConsolidationWorksheetBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BsConsolidationWorksheetBalanceQuery, BsConsolidationWorksheetBalanceQueryVariables>(BsConsolidationWorksheetBalanceDocument, options);
        }
export type BsConsolidationWorksheetBalanceQueryHookResult = ReturnType<typeof useBsConsolidationWorksheetBalanceQuery>;
export type BsConsolidationWorksheetBalanceLazyQueryHookResult = ReturnType<typeof useBsConsolidationWorksheetBalanceLazyQuery>;
export type BsConsolidationWorksheetBalanceQueryResult = Apollo.QueryResult<BsConsolidationWorksheetBalanceQuery, BsConsolidationWorksheetBalanceQueryVariables>;
export const CarryForwardExecutingDocument = gql`
    query CarryForwardExecuting($id: ID!) {
  office {
    consolidationAccountingUnit(id: $id) {
      carryForwardExecuting
    }
  }
}
    `;

/**
 * __useCarryForwardExecutingQuery__
 *
 * To run a query within a React component, call `useCarryForwardExecutingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarryForwardExecutingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarryForwardExecutingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCarryForwardExecutingQuery(baseOptions: Apollo.QueryHookOptions<CarryForwardExecutingQuery, CarryForwardExecutingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarryForwardExecutingQuery, CarryForwardExecutingQueryVariables>(CarryForwardExecutingDocument, options);
      }
export function useCarryForwardExecutingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarryForwardExecutingQuery, CarryForwardExecutingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarryForwardExecutingQuery, CarryForwardExecutingQueryVariables>(CarryForwardExecutingDocument, options);
        }
export type CarryForwardExecutingQueryHookResult = ReturnType<typeof useCarryForwardExecutingQuery>;
export type CarryForwardExecutingLazyQueryHookResult = ReturnType<typeof useCarryForwardExecutingLazyQuery>;
export type CarryForwardExecutingQueryResult = Apollo.QueryResult<CarryForwardExecutingQuery, CarryForwardExecutingQueryVariables>;
export const CarryForwardExecutingInNextConsolidationAccountingUnitDocument = gql`
    query CarryForwardExecutingInNextConsolidationAccountingUnit($id: ID!) {
  office {
    consolidationAccountingUnit(id: $id) {
      carryForwardExecutingInNextConsolidationAccountingUnit
    }
  }
}
    `;

/**
 * __useCarryForwardExecutingInNextConsolidationAccountingUnitQuery__
 *
 * To run a query within a React component, call `useCarryForwardExecutingInNextConsolidationAccountingUnitQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarryForwardExecutingInNextConsolidationAccountingUnitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarryForwardExecutingInNextConsolidationAccountingUnitQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCarryForwardExecutingInNextConsolidationAccountingUnitQuery(baseOptions: Apollo.QueryHookOptions<CarryForwardExecutingInNextConsolidationAccountingUnitQuery, CarryForwardExecutingInNextConsolidationAccountingUnitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarryForwardExecutingInNextConsolidationAccountingUnitQuery, CarryForwardExecutingInNextConsolidationAccountingUnitQueryVariables>(CarryForwardExecutingInNextConsolidationAccountingUnitDocument, options);
      }
export function useCarryForwardExecutingInNextConsolidationAccountingUnitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarryForwardExecutingInNextConsolidationAccountingUnitQuery, CarryForwardExecutingInNextConsolidationAccountingUnitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarryForwardExecutingInNextConsolidationAccountingUnitQuery, CarryForwardExecutingInNextConsolidationAccountingUnitQueryVariables>(CarryForwardExecutingInNextConsolidationAccountingUnitDocument, options);
        }
export type CarryForwardExecutingInNextConsolidationAccountingUnitQueryHookResult = ReturnType<typeof useCarryForwardExecutingInNextConsolidationAccountingUnitQuery>;
export type CarryForwardExecutingInNextConsolidationAccountingUnitLazyQueryHookResult = ReturnType<typeof useCarryForwardExecutingInNextConsolidationAccountingUnitLazyQuery>;
export type CarryForwardExecutingInNextConsolidationAccountingUnitQueryResult = Apollo.QueryResult<CarryForwardExecutingInNextConsolidationAccountingUnitQuery, CarryForwardExecutingInNextConsolidationAccountingUnitQueryVariables>;
export const CarryForwardOperationHistoryDocument = gql`
    query CarryForwardOperationHistory($consolidationAccountingUnitId: ID!) {
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    carryForwardOperationHistories {
      ... on CarryForwardExecuteOperationHistory {
        id
        createdAt
        officeMemberName
        preConsolidationAccountingUnit {
          nameJa
        }
        beginningTranslationAdjustmentCsvFileId
        openingJournalEntriesCsvFileId
        preConsolidationJournalEntriesCsvFileId
        preRetainedEarningsCsvFileId
        preTranslationAdjustmentCsvFileId
        retainedEarningsBroughtForwardCsvFileId
      }
      ... on CarryForwardResetOperationHistory {
        id
        createdAt
        officeMemberName
        preConsolidationAccountingUnit {
          nameJa
        }
      }
    }
  }
}
    `;

/**
 * __useCarryForwardOperationHistoryQuery__
 *
 * To run a query within a React component, call `useCarryForwardOperationHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarryForwardOperationHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarryForwardOperationHistoryQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *   },
 * });
 */
export function useCarryForwardOperationHistoryQuery(baseOptions: Apollo.QueryHookOptions<CarryForwardOperationHistoryQuery, CarryForwardOperationHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarryForwardOperationHistoryQuery, CarryForwardOperationHistoryQueryVariables>(CarryForwardOperationHistoryDocument, options);
      }
export function useCarryForwardOperationHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarryForwardOperationHistoryQuery, CarryForwardOperationHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarryForwardOperationHistoryQuery, CarryForwardOperationHistoryQueryVariables>(CarryForwardOperationHistoryDocument, options);
        }
export type CarryForwardOperationHistoryQueryHookResult = ReturnType<typeof useCarryForwardOperationHistoryQuery>;
export type CarryForwardOperationHistoryLazyQueryHookResult = ReturnType<typeof useCarryForwardOperationHistoryLazyQuery>;
export type CarryForwardOperationHistoryQueryResult = Apollo.QueryResult<CarryForwardOperationHistoryQuery, CarryForwardOperationHistoryQueryVariables>;
export const CarryForwardPreviewDocument = gql`
    query CarryForwardPreview($id: ID!) {
  consolidationAccountingUnit(consolidationAccountingUnitId: $id) {
    __typename
    id
    nameJa
    preConsolidationAccountingUnit {
      __typename
      id
      nameJa
    }
    carryForwardPreview {
      inexecutableReason
      retainedEarningsBroughtForwardPreview {
        __typename
        warnings
        rows {
          __typename
          assignedConsolidatedAccount {
            __typename
            id
            sortOrder
            consolidatedAccount {
              __typename
              id
              code {
                code
              }
              nameJa
              consolidatedAccountSubCategory {
                __typename
                id
                sortOrder
                nameJa
              }
            }
          }
          adjustedBalance
          totalBalance
          adjustmentBalance
          amountPerConsolidationPackage {
            __typename
            consolidationPackage {
              __typename
              id
              sortOrder
              company {
                __typename
                id
                abbreviation
              }
            }
            amount
          }
          amountPerConsolidationJournal {
            __typename
            consolidationJournalType {
              __typename
              id
              name
              sortOrder
            }
            amount
          }
        }
        prevRetainedEarningsSummary {
          __typename
          adjustedBalance
          totalBalance
          adjustmentBalance
          amountPerConsolidationPackage {
            __typename
            consolidationPackage {
              __typename
              id
              sortOrder
              company {
                __typename
                id
                abbreviation
              }
            }
            amount
          }
          amountPerConsolidationJournal {
            __typename
            consolidationJournalType {
              __typename
              id
              name
              sortOrder
            }
            amount
          }
        }
        retainedEarningsBroughtForward {
          __typename
          assignedConsolidatedAccount {
            __typename
            id
            sortOrder
            consolidatedAccount {
              __typename
              id
              code {
                code
              }
              nameJa
              consolidatedAccountSubCategory {
                __typename
                id
                sortOrder
                nameJa
              }
            }
          }
          adjustedBalance
          totalBalance
          adjustmentBalance
          amountPerCompany {
            ... on ExcludedInCurrentConsolidationProcess {
              __typename
              company {
                __typename
                id
                abbreviation
              }
            }
            ... on IncludedInCurrentConsolidationProcess {
              __typename
              consolidationPackage {
                __typename
                id
                sortOrder
                company {
                  __typename
                  id
                  abbreviation
                }
              }
              amount
            }
          }
          amountPerConsolidationJournal {
            __typename
            consolidationJournalType {
              __typename
              id
              name
              sortOrder
            }
            amount
          }
        }
        diff {
          __typename
          adjustedBalance
          totalBalance
          adjustmentBalance
          amountPerCompany {
            __typename
            company {
              __typename
              id
              abbreviation
            }
            amount
          }
          amountPerConsolidationJournal {
            __typename
            consolidationJournalType {
              __typename
              id
              name
              sortOrder
            }
            amount
          }
        }
      }
      translationAdjustmentPreview {
        warnings
        prevRows {
          consolidationPackage {
            id
            sortOrder
            company {
              id
              abbreviation
            }
          }
          items {
            assignedConsolidatedAccount {
              sortOrder
              consolidatedAccount {
                id
                nameJa
              }
            }
            adjustedTranslatedBalance
          }
        }
        currentRows {
          ... on IncludedInCurrentConsolidationProcessForTA {
            consolidationPackage {
              id
              company {
                id
                abbreviation
              }
            }
            items {
              adjustedTranslatedBalance
              consolidatedAccount {
                id
                nameJa
              }
            }
          }
          ... on ExcludedInCurrentConsolidationProcessForTA {
            company {
              id
              abbreviation
            }
            items {
              adjustedTranslatedBalance
              consolidatedAccount {
                id
                nameJa
              }
            }
          }
        }
        diffs {
          company {
            id
            abbreviation
          }
          amountPerConsolidatedAccount {
            consolidatedAccount {
              id
              nameJa
            }
            amount
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCarryForwardPreviewQuery__
 *
 * To run a query within a React component, call `useCarryForwardPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarryForwardPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarryForwardPreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCarryForwardPreviewQuery(baseOptions: Apollo.QueryHookOptions<CarryForwardPreviewQuery, CarryForwardPreviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarryForwardPreviewQuery, CarryForwardPreviewQueryVariables>(CarryForwardPreviewDocument, options);
      }
export function useCarryForwardPreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarryForwardPreviewQuery, CarryForwardPreviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarryForwardPreviewQuery, CarryForwardPreviewQueryVariables>(CarryForwardPreviewDocument, options);
        }
export type CarryForwardPreviewQueryHookResult = ReturnType<typeof useCarryForwardPreviewQuery>;
export type CarryForwardPreviewLazyQueryHookResult = ReturnType<typeof useCarryForwardPreviewLazyQuery>;
export type CarryForwardPreviewQueryResult = Apollo.QueryResult<CarryForwardPreviewQuery, CarryForwardPreviewQueryVariables>;
export const CompaniesDocument = gql`
    query Companies {
  office {
    companies {
      id
      nameJa
      nameEn
      tenantUid
      decimalPlace
      abbreviation
      currency
      sortOrder
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useCompaniesQuery__
 *
 * To run a query within a React component, call `useCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, options);
      }
export function useCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, options);
        }
export type CompaniesQueryHookResult = ReturnType<typeof useCompaniesQuery>;
export type CompaniesLazyQueryHookResult = ReturnType<typeof useCompaniesLazyQuery>;
export type CompaniesQueryResult = Apollo.QueryResult<CompaniesQuery, CompaniesQueryVariables>;
export const CompanyDocument = gql`
    query Company($id: ID!) {
  office {
    company(id: $id) {
      id
      abbreviation
      nameJa
      nameEn
      decimalPlace
      currency
      remarks
      associatedData {
        consolidationAccountingUnit {
          id
          nameJa
        }
        data
      }
      associatedRoles {
        associatedOfficeMembers {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useCompanyQuery__
 *
 * To run a query within a React component, call `useCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCompanyQuery(baseOptions: Apollo.QueryHookOptions<CompanyQuery, CompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompanyQuery, CompanyQueryVariables>(CompanyDocument, options);
      }
export function useCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanyQuery, CompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompanyQuery, CompanyQueryVariables>(CompanyDocument, options);
        }
export type CompanyQueryHookResult = ReturnType<typeof useCompanyQuery>;
export type CompanyLazyQueryHookResult = ReturnType<typeof useCompanyLazyQuery>;
export type CompanyQueryResult = Apollo.QueryResult<CompanyQuery, CompanyQueryVariables>;
export const ConsolidatedAccountDocument = gql`
    query ConsolidatedAccount($id: ID!) {
  office {
    consolidatedAccount(id: $id) {
      accountSide
      accountType
      amountType
      code {
        code
      }
      description
      conversionType
      id
      nameEn
      nameJa
      consolidatedAccountSubCategory {
        nameJa
      }
      associatedConsolidationAccountingUnits {
        id
        nameJa
      }
    }
  }
}
    `;

/**
 * __useConsolidatedAccountQuery__
 *
 * To run a query within a React component, call `useConsolidatedAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidatedAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidatedAccountQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConsolidatedAccountQuery(baseOptions: Apollo.QueryHookOptions<ConsolidatedAccountQuery, ConsolidatedAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidatedAccountQuery, ConsolidatedAccountQueryVariables>(ConsolidatedAccountDocument, options);
      }
export function useConsolidatedAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidatedAccountQuery, ConsolidatedAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidatedAccountQuery, ConsolidatedAccountQueryVariables>(ConsolidatedAccountDocument, options);
        }
export type ConsolidatedAccountQueryHookResult = ReturnType<typeof useConsolidatedAccountQuery>;
export type ConsolidatedAccountLazyQueryHookResult = ReturnType<typeof useConsolidatedAccountLazyQuery>;
export type ConsolidatedAccountQueryResult = Apollo.QueryResult<ConsolidatedAccountQuery, ConsolidatedAccountQueryVariables>;
export const ConsolidatedAccountImportSettingDocument = gql`
    query ConsolidatedAccountImportSetting {
  office {
    consolidatedAccountSubCategories {
      nameJa
      consolidatedAccountCategory {
        financialStatementType
      }
    }
    consolidatedAccountImportSetting {
      id
      sheetName
      startRow
      endRow
      nameJaColumn
      nameEnColumn
      codeColumn
      amountTypeColumn
      conversionTypeColumn
      consolidatedAccountSubCategoryColumn
    }
  }
}
    `;

/**
 * __useConsolidatedAccountImportSettingQuery__
 *
 * To run a query within a React component, call `useConsolidatedAccountImportSettingQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidatedAccountImportSettingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidatedAccountImportSettingQuery({
 *   variables: {
 *   },
 * });
 */
export function useConsolidatedAccountImportSettingQuery(baseOptions?: Apollo.QueryHookOptions<ConsolidatedAccountImportSettingQuery, ConsolidatedAccountImportSettingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidatedAccountImportSettingQuery, ConsolidatedAccountImportSettingQueryVariables>(ConsolidatedAccountImportSettingDocument, options);
      }
export function useConsolidatedAccountImportSettingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidatedAccountImportSettingQuery, ConsolidatedAccountImportSettingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidatedAccountImportSettingQuery, ConsolidatedAccountImportSettingQueryVariables>(ConsolidatedAccountImportSettingDocument, options);
        }
export type ConsolidatedAccountImportSettingQueryHookResult = ReturnType<typeof useConsolidatedAccountImportSettingQuery>;
export type ConsolidatedAccountImportSettingLazyQueryHookResult = ReturnType<typeof useConsolidatedAccountImportSettingLazyQuery>;
export type ConsolidatedAccountImportSettingQueryResult = Apollo.QueryResult<ConsolidatedAccountImportSettingQuery, ConsolidatedAccountImportSettingQueryVariables>;
export const ConsolidatedAccountsDocument = gql`
    query ConsolidatedAccounts {
  office {
    consolidatedAccountImportSetting {
      id
    }
    consolidatedAccountSubCategories {
      id
      nameJa
      accountSide
    }
    consolidatedAccounts {
      accountSide
      accountType
      amountType
      code {
        code
      }
      conversionType
      id
      nameJa
      consolidatedAccountSubCategory {
        nameJa
      }
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useConsolidatedAccountsQuery__
 *
 * To run a query within a React component, call `useConsolidatedAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidatedAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidatedAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useConsolidatedAccountsQuery(baseOptions?: Apollo.QueryHookOptions<ConsolidatedAccountsQuery, ConsolidatedAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidatedAccountsQuery, ConsolidatedAccountsQueryVariables>(ConsolidatedAccountsDocument, options);
      }
export function useConsolidatedAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidatedAccountsQuery, ConsolidatedAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidatedAccountsQuery, ConsolidatedAccountsQueryVariables>(ConsolidatedAccountsDocument, options);
        }
export type ConsolidatedAccountsQueryHookResult = ReturnType<typeof useConsolidatedAccountsQuery>;
export type ConsolidatedAccountsLazyQueryHookResult = ReturnType<typeof useConsolidatedAccountsLazyQuery>;
export type ConsolidatedAccountsQueryResult = Apollo.QueryResult<ConsolidatedAccountsQuery, ConsolidatedAccountsQueryVariables>;
export const ConsolidatedAccountsNameAndCodeDocument = gql`
    query ConsolidatedAccountsNameAndCode {
  office {
    consolidatedAccounts {
      id
      nameJa
      code {
        code
      }
      accountType
    }
  }
}
    `;

/**
 * __useConsolidatedAccountsNameAndCodeQuery__
 *
 * To run a query within a React component, call `useConsolidatedAccountsNameAndCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidatedAccountsNameAndCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidatedAccountsNameAndCodeQuery({
 *   variables: {
 *   },
 * });
 */
export function useConsolidatedAccountsNameAndCodeQuery(baseOptions?: Apollo.QueryHookOptions<ConsolidatedAccountsNameAndCodeQuery, ConsolidatedAccountsNameAndCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidatedAccountsNameAndCodeQuery, ConsolidatedAccountsNameAndCodeQueryVariables>(ConsolidatedAccountsNameAndCodeDocument, options);
      }
export function useConsolidatedAccountsNameAndCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidatedAccountsNameAndCodeQuery, ConsolidatedAccountsNameAndCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidatedAccountsNameAndCodeQuery, ConsolidatedAccountsNameAndCodeQueryVariables>(ConsolidatedAccountsNameAndCodeDocument, options);
        }
export type ConsolidatedAccountsNameAndCodeQueryHookResult = ReturnType<typeof useConsolidatedAccountsNameAndCodeQuery>;
export type ConsolidatedAccountsNameAndCodeLazyQueryHookResult = ReturnType<typeof useConsolidatedAccountsNameAndCodeLazyQuery>;
export type ConsolidatedAccountsNameAndCodeQueryResult = Apollo.QueryResult<ConsolidatedAccountsNameAndCodeQuery, ConsolidatedAccountsNameAndCodeQueryVariables>;
export const ConsolidationAccountingUnitNewDocument = gql`
    query ConsolidationAccountingUnitNew {
  office {
    workClassifications {
      id
      nameJa
      code {
        code
      }
    }
    consolidationAccountingUnits {
      id
      nameJa
      workClassificationId
    }
    companies {
      id
      nameJa
      abbreviation
    }
  }
}
    `;

/**
 * __useConsolidationAccountingUnitNewQuery__
 *
 * To run a query within a React component, call `useConsolidationAccountingUnitNewQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationAccountingUnitNewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationAccountingUnitNewQuery({
 *   variables: {
 *   },
 * });
 */
export function useConsolidationAccountingUnitNewQuery(baseOptions?: Apollo.QueryHookOptions<ConsolidationAccountingUnitNewQuery, ConsolidationAccountingUnitNewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationAccountingUnitNewQuery, ConsolidationAccountingUnitNewQueryVariables>(ConsolidationAccountingUnitNewDocument, options);
      }
export function useConsolidationAccountingUnitNewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationAccountingUnitNewQuery, ConsolidationAccountingUnitNewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationAccountingUnitNewQuery, ConsolidationAccountingUnitNewQueryVariables>(ConsolidationAccountingUnitNewDocument, options);
        }
export type ConsolidationAccountingUnitNewQueryHookResult = ReturnType<typeof useConsolidationAccountingUnitNewQuery>;
export type ConsolidationAccountingUnitNewLazyQueryHookResult = ReturnType<typeof useConsolidationAccountingUnitNewLazyQuery>;
export type ConsolidationAccountingUnitNewQueryResult = Apollo.QueryResult<ConsolidationAccountingUnitNewQuery, ConsolidationAccountingUnitNewQueryVariables>;
export const ConsolidationAccountingUnitOperationHistoriesDocument = gql`
    query ConsolidationAccountingUnitOperationHistories {
  office {
    conacUnitOperationHistories {
      id
      createdAt
      officeMember {
        name
      }
      type
      consolidationAccountingUnit {
        nameJa
      }
    }
  }
}
    `;

/**
 * __useConsolidationAccountingUnitOperationHistoriesQuery__
 *
 * To run a query within a React component, call `useConsolidationAccountingUnitOperationHistoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationAccountingUnitOperationHistoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationAccountingUnitOperationHistoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useConsolidationAccountingUnitOperationHistoriesQuery(baseOptions?: Apollo.QueryHookOptions<ConsolidationAccountingUnitOperationHistoriesQuery, ConsolidationAccountingUnitOperationHistoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationAccountingUnitOperationHistoriesQuery, ConsolidationAccountingUnitOperationHistoriesQueryVariables>(ConsolidationAccountingUnitOperationHistoriesDocument, options);
      }
export function useConsolidationAccountingUnitOperationHistoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationAccountingUnitOperationHistoriesQuery, ConsolidationAccountingUnitOperationHistoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationAccountingUnitOperationHistoriesQuery, ConsolidationAccountingUnitOperationHistoriesQueryVariables>(ConsolidationAccountingUnitOperationHistoriesDocument, options);
        }
export type ConsolidationAccountingUnitOperationHistoriesQueryHookResult = ReturnType<typeof useConsolidationAccountingUnitOperationHistoriesQuery>;
export type ConsolidationAccountingUnitOperationHistoriesLazyQueryHookResult = ReturnType<typeof useConsolidationAccountingUnitOperationHistoriesLazyQuery>;
export type ConsolidationAccountingUnitOperationHistoriesQueryResult = Apollo.QueryResult<ConsolidationAccountingUnitOperationHistoriesQuery, ConsolidationAccountingUnitOperationHistoriesQueryVariables>;
export const ConsolidationAccountingUnitsDocument = gql`
    query ConsolidationAccountingUnits {
  office {
    consolidationAccountingUnits {
      id
      workClassification {
        code {
          code
        }
        nameJa
      }
      nameJa
      start
      end
      order
      lockStatus
    }
  }
}
    `;

/**
 * __useConsolidationAccountingUnitsQuery__
 *
 * To run a query within a React component, call `useConsolidationAccountingUnitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationAccountingUnitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationAccountingUnitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useConsolidationAccountingUnitsQuery(baseOptions?: Apollo.QueryHookOptions<ConsolidationAccountingUnitsQuery, ConsolidationAccountingUnitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationAccountingUnitsQuery, ConsolidationAccountingUnitsQueryVariables>(ConsolidationAccountingUnitsDocument, options);
      }
export function useConsolidationAccountingUnitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationAccountingUnitsQuery, ConsolidationAccountingUnitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationAccountingUnitsQuery, ConsolidationAccountingUnitsQueryVariables>(ConsolidationAccountingUnitsDocument, options);
        }
export type ConsolidationAccountingUnitsQueryHookResult = ReturnType<typeof useConsolidationAccountingUnitsQuery>;
export type ConsolidationAccountingUnitsLazyQueryHookResult = ReturnType<typeof useConsolidationAccountingUnitsLazyQuery>;
export type ConsolidationAccountingUnitsQueryResult = Apollo.QueryResult<ConsolidationAccountingUnitsQuery, ConsolidationAccountingUnitsQueryVariables>;
export const ConsolidationAccountingUnitsCopyNewDocument = gql`
    query ConsolidationAccountingUnitsCopyNew($id: ID!) {
  office {
    workClassifications {
      id
      nameJa
      code {
        code
      }
    }
    consolidationAccountingUnit(id: $id) {
      id
      nameJa
      nameEn
      start
      end
      preConsolidationAccountingUnitId
      workClassification {
        id
        nameJa
        code {
          code
        }
      }
      description
      allConsolidationPackages {
        id
        consolidationProcess
        sortOrder
        submissionRequired
        company {
          id
          nameJa
        }
      }
    }
    consolidationAccountingUnits {
      id
      nameJa
      workClassificationId
    }
    companies {
      id
      nameJa
      abbreviation
    }
  }
}
    `;

/**
 * __useConsolidationAccountingUnitsCopyNewQuery__
 *
 * To run a query within a React component, call `useConsolidationAccountingUnitsCopyNewQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationAccountingUnitsCopyNewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationAccountingUnitsCopyNewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConsolidationAccountingUnitsCopyNewQuery(baseOptions: Apollo.QueryHookOptions<ConsolidationAccountingUnitsCopyNewQuery, ConsolidationAccountingUnitsCopyNewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationAccountingUnitsCopyNewQuery, ConsolidationAccountingUnitsCopyNewQueryVariables>(ConsolidationAccountingUnitsCopyNewDocument, options);
      }
export function useConsolidationAccountingUnitsCopyNewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationAccountingUnitsCopyNewQuery, ConsolidationAccountingUnitsCopyNewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationAccountingUnitsCopyNewQuery, ConsolidationAccountingUnitsCopyNewQueryVariables>(ConsolidationAccountingUnitsCopyNewDocument, options);
        }
export type ConsolidationAccountingUnitsCopyNewQueryHookResult = ReturnType<typeof useConsolidationAccountingUnitsCopyNewQuery>;
export type ConsolidationAccountingUnitsCopyNewLazyQueryHookResult = ReturnType<typeof useConsolidationAccountingUnitsCopyNewLazyQuery>;
export type ConsolidationAccountingUnitsCopyNewQueryResult = Apollo.QueryResult<ConsolidationAccountingUnitsCopyNewQuery, ConsolidationAccountingUnitsCopyNewQueryVariables>;
export const ConsolidationAccountingUnitsDetailDocument = gql`
    query ConsolidationAccountingUnitsDetail($id: ID!) {
  office {
    consolidationAccountingUnit(id: $id) {
      lockStatus
      id
      nameJa
      nameEn
      start
      end
      preConsolidationAccountingUnitId
      workClassification {
        id
        nameJa
        code {
          code
        }
      }
      description
      allConsolidationPackages {
        id
        consolidationProcess
        sortOrder
        submissionRequired
        company {
          id
          nameJa
        }
        isUsedConPkg
        isUsedConacJournal
      }
      carryForwardDataExists
    }
    consolidationAccountingUnits {
      id
      nameJa
    }
    companies {
      id
      nameJa
      abbreviation
    }
    workClassifications {
      id
      nameJa
      code {
        code
      }
    }
  }
}
    `;

/**
 * __useConsolidationAccountingUnitsDetailQuery__
 *
 * To run a query within a React component, call `useConsolidationAccountingUnitsDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationAccountingUnitsDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationAccountingUnitsDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConsolidationAccountingUnitsDetailQuery(baseOptions: Apollo.QueryHookOptions<ConsolidationAccountingUnitsDetailQuery, ConsolidationAccountingUnitsDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationAccountingUnitsDetailQuery, ConsolidationAccountingUnitsDetailQueryVariables>(ConsolidationAccountingUnitsDetailDocument, options);
      }
export function useConsolidationAccountingUnitsDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationAccountingUnitsDetailQuery, ConsolidationAccountingUnitsDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationAccountingUnitsDetailQuery, ConsolidationAccountingUnitsDetailQueryVariables>(ConsolidationAccountingUnitsDetailDocument, options);
        }
export type ConsolidationAccountingUnitsDetailQueryHookResult = ReturnType<typeof useConsolidationAccountingUnitsDetailQuery>;
export type ConsolidationAccountingUnitsDetailLazyQueryHookResult = ReturnType<typeof useConsolidationAccountingUnitsDetailLazyQuery>;
export type ConsolidationAccountingUnitsDetailQueryResult = Apollo.QueryResult<ConsolidationAccountingUnitsDetailQuery, ConsolidationAccountingUnitsDetailQueryVariables>;
export const ConsolidationJournalImportSettingDocument = gql`
    query ConsolidationJournalImportSetting($consolidationAccountingUnitId: ID!, $typeId: ID!) {
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    id
    consolidationJournalImportSetting(consolidationJournalTypeId: $typeId) {
      companyAbbreviationColumn
      consolidatedAccountCodeColumn
      consolidationJournalGroupKeyColumn
      consolidationJournalTypeId
      creditBalanceColumn
      debitBalanceColumn
      endRow
      id
      remarkColumn
      segmentAbbreviationColumn
      sheetName
      startRow
    }
  }
}
    `;

/**
 * __useConsolidationJournalImportSettingQuery__
 *
 * To run a query within a React component, call `useConsolidationJournalImportSettingQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationJournalImportSettingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationJournalImportSettingQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *      typeId: // value for 'typeId'
 *   },
 * });
 */
export function useConsolidationJournalImportSettingQuery(baseOptions: Apollo.QueryHookOptions<ConsolidationJournalImportSettingQuery, ConsolidationJournalImportSettingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationJournalImportSettingQuery, ConsolidationJournalImportSettingQueryVariables>(ConsolidationJournalImportSettingDocument, options);
      }
export function useConsolidationJournalImportSettingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationJournalImportSettingQuery, ConsolidationJournalImportSettingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationJournalImportSettingQuery, ConsolidationJournalImportSettingQueryVariables>(ConsolidationJournalImportSettingDocument, options);
        }
export type ConsolidationJournalImportSettingQueryHookResult = ReturnType<typeof useConsolidationJournalImportSettingQuery>;
export type ConsolidationJournalImportSettingLazyQueryHookResult = ReturnType<typeof useConsolidationJournalImportSettingLazyQuery>;
export type ConsolidationJournalImportSettingQueryResult = Apollo.QueryResult<ConsolidationJournalImportSettingQuery, ConsolidationJournalImportSettingQueryVariables>;
export const ConsolidationJournalOperationHistoryDocument = gql`
    query ConsolidationJournalOperationHistory($typeId: ID!, $consolidationAccountingUnitId: ID!) {
  office {
    consolidationJournalType(id: $typeId) {
      consolidationJournalOperationHistory(
        consolidationAccountingUnitId: $consolidationAccountingUnitId
      ) {
        id
        uploadedFile {
          id
          fileName
        }
        officeMember {
          name
        }
        operation
        createdAt
      }
    }
  }
}
    `;

/**
 * __useConsolidationJournalOperationHistoryQuery__
 *
 * To run a query within a React component, call `useConsolidationJournalOperationHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationJournalOperationHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationJournalOperationHistoryQuery({
 *   variables: {
 *      typeId: // value for 'typeId'
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *   },
 * });
 */
export function useConsolidationJournalOperationHistoryQuery(baseOptions: Apollo.QueryHookOptions<ConsolidationJournalOperationHistoryQuery, ConsolidationJournalOperationHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationJournalOperationHistoryQuery, ConsolidationJournalOperationHistoryQueryVariables>(ConsolidationJournalOperationHistoryDocument, options);
      }
export function useConsolidationJournalOperationHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationJournalOperationHistoryQuery, ConsolidationJournalOperationHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationJournalOperationHistoryQuery, ConsolidationJournalOperationHistoryQueryVariables>(ConsolidationJournalOperationHistoryDocument, options);
        }
export type ConsolidationJournalOperationHistoryQueryHookResult = ReturnType<typeof useConsolidationJournalOperationHistoryQuery>;
export type ConsolidationJournalOperationHistoryLazyQueryHookResult = ReturnType<typeof useConsolidationJournalOperationHistoryLazyQuery>;
export type ConsolidationJournalOperationHistoryQueryResult = Apollo.QueryResult<ConsolidationJournalOperationHistoryQuery, ConsolidationJournalOperationHistoryQueryVariables>;
export const ConsolidationJournalTypeDocument = gql`
    query ConsolidationJournalType($id: ID!) {
  office {
    consolidationJournalType(id: $id) {
      id
      name
      openingJournalType
      remarks
      associatedConsolidationAccountingUnits {
        id
        nameJa
      }
    }
  }
}
    `;

/**
 * __useConsolidationJournalTypeQuery__
 *
 * To run a query within a React component, call `useConsolidationJournalTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationJournalTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationJournalTypeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConsolidationJournalTypeQuery(baseOptions: Apollo.QueryHookOptions<ConsolidationJournalTypeQuery, ConsolidationJournalTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationJournalTypeQuery, ConsolidationJournalTypeQueryVariables>(ConsolidationJournalTypeDocument, options);
      }
export function useConsolidationJournalTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationJournalTypeQuery, ConsolidationJournalTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationJournalTypeQuery, ConsolidationJournalTypeQueryVariables>(ConsolidationJournalTypeDocument, options);
        }
export type ConsolidationJournalTypeQueryHookResult = ReturnType<typeof useConsolidationJournalTypeQuery>;
export type ConsolidationJournalTypeLazyQueryHookResult = ReturnType<typeof useConsolidationJournalTypeLazyQuery>;
export type ConsolidationJournalTypeQueryResult = Apollo.QueryResult<ConsolidationJournalTypeQuery, ConsolidationJournalTypeQueryVariables>;
export const ConsolidationJournalTypesDocument = gql`
    query ConsolidationJournalTypes {
  office {
    consolidationJournalTypes {
      id
      name
      sortOrder
      openingJournalType
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useConsolidationJournalTypesQuery__
 *
 * To run a query within a React component, call `useConsolidationJournalTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationJournalTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationJournalTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useConsolidationJournalTypesQuery(baseOptions?: Apollo.QueryHookOptions<ConsolidationJournalTypesQuery, ConsolidationJournalTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationJournalTypesQuery, ConsolidationJournalTypesQueryVariables>(ConsolidationJournalTypesDocument, options);
      }
export function useConsolidationJournalTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationJournalTypesQuery, ConsolidationJournalTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationJournalTypesQuery, ConsolidationJournalTypesQueryVariables>(ConsolidationJournalTypesDocument, options);
        }
export type ConsolidationJournalTypesQueryHookResult = ReturnType<typeof useConsolidationJournalTypesQuery>;
export type ConsolidationJournalTypesLazyQueryHookResult = ReturnType<typeof useConsolidationJournalTypesLazyQuery>;
export type ConsolidationJournalTypesQueryResult = Apollo.QueryResult<ConsolidationJournalTypesQuery, ConsolidationJournalTypesQueryVariables>;
export const ConsolidationJournalsDocument = gql`
    query ConsolidationJournals($consolidationAccountingUnitId: ID!, $typeId: ID!) {
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    consolidationJournalImportSetting(consolidationJournalTypeId: $typeId) {
      id
    }
    consolidationJournals(journalTypeId: $typeId) {
      journalGroupKey
      debitTotalBalance
      creditTotalBalance
      rows {
        id
        openingClassification
        company {
          abbreviation
        }
        segment {
          abbreviation
        }
        assignedConsolidatedAccount {
          consolidatedAccount {
            code {
              code
            }
            nameJa
          }
        }
        debitBalance
        creditBalance
        remark
      }
    }
  }
}
    `;

/**
 * __useConsolidationJournalsQuery__
 *
 * To run a query within a React component, call `useConsolidationJournalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationJournalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationJournalsQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *      typeId: // value for 'typeId'
 *   },
 * });
 */
export function useConsolidationJournalsQuery(baseOptions: Apollo.QueryHookOptions<ConsolidationJournalsQuery, ConsolidationJournalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationJournalsQuery, ConsolidationJournalsQueryVariables>(ConsolidationJournalsDocument, options);
      }
export function useConsolidationJournalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationJournalsQuery, ConsolidationJournalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationJournalsQuery, ConsolidationJournalsQueryVariables>(ConsolidationJournalsDocument, options);
        }
export type ConsolidationJournalsQueryHookResult = ReturnType<typeof useConsolidationJournalsQuery>;
export type ConsolidationJournalsLazyQueryHookResult = ReturnType<typeof useConsolidationJournalsLazyQuery>;
export type ConsolidationJournalsQueryResult = Apollo.QueryResult<ConsolidationJournalsQuery, ConsolidationJournalsQueryVariables>;
export const ConsolidationPackageImportSettingDocument = gql`
    query ConsolidationPackageImportSetting($id: ID!) {
  office {
    consolidationPackageImportSetting(id: $id) {
      id
      name
      trialBalanceImportSettings {
        sheetName
        startRow
        endRow
        accountCodeColumn
        accountNameColumn
        balanceColumn
      }
    }
  }
}
    `;

/**
 * __useConsolidationPackageImportSettingQuery__
 *
 * To run a query within a React component, call `useConsolidationPackageImportSettingQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationPackageImportSettingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationPackageImportSettingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConsolidationPackageImportSettingQuery(baseOptions: Apollo.QueryHookOptions<ConsolidationPackageImportSettingQuery, ConsolidationPackageImportSettingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationPackageImportSettingQuery, ConsolidationPackageImportSettingQueryVariables>(ConsolidationPackageImportSettingDocument, options);
      }
export function useConsolidationPackageImportSettingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationPackageImportSettingQuery, ConsolidationPackageImportSettingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationPackageImportSettingQuery, ConsolidationPackageImportSettingQueryVariables>(ConsolidationPackageImportSettingDocument, options);
        }
export type ConsolidationPackageImportSettingQueryHookResult = ReturnType<typeof useConsolidationPackageImportSettingQuery>;
export type ConsolidationPackageImportSettingLazyQueryHookResult = ReturnType<typeof useConsolidationPackageImportSettingLazyQuery>;
export type ConsolidationPackageImportSettingQueryResult = Apollo.QueryResult<ConsolidationPackageImportSettingQuery, ConsolidationPackageImportSettingQueryVariables>;
export const ConsolidationPackageImportSettingsIdAndNameDocument = gql`
    query ConsolidationPackageImportSettingsIdAndName {
  office {
    consolidationPackageImportSettings {
      id
      name
    }
  }
}
    `;

/**
 * __useConsolidationPackageImportSettingsIdAndNameQuery__
 *
 * To run a query within a React component, call `useConsolidationPackageImportSettingsIdAndNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationPackageImportSettingsIdAndNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationPackageImportSettingsIdAndNameQuery({
 *   variables: {
 *   },
 * });
 */
export function useConsolidationPackageImportSettingsIdAndNameQuery(baseOptions?: Apollo.QueryHookOptions<ConsolidationPackageImportSettingsIdAndNameQuery, ConsolidationPackageImportSettingsIdAndNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationPackageImportSettingsIdAndNameQuery, ConsolidationPackageImportSettingsIdAndNameQueryVariables>(ConsolidationPackageImportSettingsIdAndNameDocument, options);
      }
export function useConsolidationPackageImportSettingsIdAndNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationPackageImportSettingsIdAndNameQuery, ConsolidationPackageImportSettingsIdAndNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationPackageImportSettingsIdAndNameQuery, ConsolidationPackageImportSettingsIdAndNameQueryVariables>(ConsolidationPackageImportSettingsIdAndNameDocument, options);
        }
export type ConsolidationPackageImportSettingsIdAndNameQueryHookResult = ReturnType<typeof useConsolidationPackageImportSettingsIdAndNameQuery>;
export type ConsolidationPackageImportSettingsIdAndNameLazyQueryHookResult = ReturnType<typeof useConsolidationPackageImportSettingsIdAndNameLazyQuery>;
export type ConsolidationPackageImportSettingsIdAndNameQueryResult = Apollo.QueryResult<ConsolidationPackageImportSettingsIdAndNameQuery, ConsolidationPackageImportSettingsIdAndNameQueryVariables>;
export const ConsolidationPackageOperationHistoryDocument = gql`
    query ConsolidationPackageOperationHistory($consolidationAccountingUnitId: ID!, $id: ID!) {
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    consolidationPackage(id: $id) {
      consolidationPackageOperationHistories {
        ... on TrialBalanceImportOperationHistory {
          id
          createdAt
          historyType
          officeMemberName
          rawExcelFileId
          rawExcelFileName
          conversionRuleFileId
        }
        ... on FinancialStatementModificationOperationHistory {
          id
          createdAt
          historyType
          officeMemberName
          consolidationPackageOperationTarget
          financialStatementOperationTarget
          accountNamesJa
          accountNamesEn
        }
        ... on ConsolidationPackageResetOperationHistory {
          id
          createdAt
          historyType
          officeMemberName
          resetBalanceAdjustment
          resetConsolidationPackage
          resetTranslationAdjustment
        }
        ... on TrialBalanceImportFromCamidOperationHistory {
          id
          createdAt
          historyType
          officeMemberName
          conversionRuleFileId
          rawResponseFileId
          consolidationPackageOperationTarget
        }
        ... on TrialBalanceImportFromCaOperationHistory {
          id
          createdAt
          historyType
          officeMemberName
          conversionRuleFileId
          beforeConversionTbFileId
          consolidationPackageOperationTarget
        }
      }
    }
  }
}
    `;

/**
 * __useConsolidationPackageOperationHistoryQuery__
 *
 * To run a query within a React component, call `useConsolidationPackageOperationHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationPackageOperationHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationPackageOperationHistoryQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConsolidationPackageOperationHistoryQuery(baseOptions: Apollo.QueryHookOptions<ConsolidationPackageOperationHistoryQuery, ConsolidationPackageOperationHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationPackageOperationHistoryQuery, ConsolidationPackageOperationHistoryQueryVariables>(ConsolidationPackageOperationHistoryDocument, options);
      }
export function useConsolidationPackageOperationHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationPackageOperationHistoryQuery, ConsolidationPackageOperationHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationPackageOperationHistoryQuery, ConsolidationPackageOperationHistoryQueryVariables>(ConsolidationPackageOperationHistoryDocument, options);
        }
export type ConsolidationPackageOperationHistoryQueryHookResult = ReturnType<typeof useConsolidationPackageOperationHistoryQuery>;
export type ConsolidationPackageOperationHistoryLazyQueryHookResult = ReturnType<typeof useConsolidationPackageOperationHistoryLazyQuery>;
export type ConsolidationPackageOperationHistoryQueryResult = Apollo.QueryResult<ConsolidationPackageOperationHistoryQuery, ConsolidationPackageOperationHistoryQueryVariables>;
export const ConsolidationPackagesDocument = gql`
    query ConsolidationPackages($id: ID!) {
  consolidationAccountingUnit(consolidationAccountingUnitId: $id) {
    id
    start
    end
    workClassification {
      nameJa
    }
    submissionRequiredConsolidationPackages {
      id
      company {
        abbreviation
        nameJa
      }
      createdAt
      latestUpdatedAt
    }
  }
}
    `;

/**
 * __useConsolidationPackagesQuery__
 *
 * To run a query within a React component, call `useConsolidationPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationPackagesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConsolidationPackagesQuery(baseOptions: Apollo.QueryHookOptions<ConsolidationPackagesQuery, ConsolidationPackagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationPackagesQuery, ConsolidationPackagesQueryVariables>(ConsolidationPackagesDocument, options);
      }
export function useConsolidationPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationPackagesQuery, ConsolidationPackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationPackagesQuery, ConsolidationPackagesQueryVariables>(ConsolidationPackagesDocument, options);
        }
export type ConsolidationPackagesQueryHookResult = ReturnType<typeof useConsolidationPackagesQuery>;
export type ConsolidationPackagesLazyQueryHookResult = ReturnType<typeof useConsolidationPackagesLazyQuery>;
export type ConsolidationPackagesQueryResult = Apollo.QueryResult<ConsolidationPackagesQuery, ConsolidationPackagesQueryVariables>;
export const ConsolidationPackagesDetailDocument = gql`
    query ConsolidationPackagesDetail($consolidationAccountingUnitId: ID!, $conPkgId: ID!) {
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    id
    nameJa
    start
    end
    workClassification {
      id
      nameJa
    }
    submissionRequiredConsolidationPackages {
      id
      company {
        id
        nameJa
        nameEn
        abbreviation
        currency
        decimalPlace
      }
    }
    consolidationPackage(id: $conPkgId) {
      company {
        integrationSettings {
          ... on CamidIntegrationSetting {
            id
            integratedCompanyName
            integrationService {
              type
              name
            }
            camidIntegrationResources {
              name
            }
          }
          ... on CaIntegrationSetting {
            id
            integratedCompanyName
            integrationService {
              type
              name
            }
            caIntegrationResources {
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useConsolidationPackagesDetailQuery__
 *
 * To run a query within a React component, call `useConsolidationPackagesDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationPackagesDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationPackagesDetailQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *      conPkgId: // value for 'conPkgId'
 *   },
 * });
 */
export function useConsolidationPackagesDetailQuery(baseOptions: Apollo.QueryHookOptions<ConsolidationPackagesDetailQuery, ConsolidationPackagesDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationPackagesDetailQuery, ConsolidationPackagesDetailQueryVariables>(ConsolidationPackagesDetailDocument, options);
      }
export function useConsolidationPackagesDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationPackagesDetailQuery, ConsolidationPackagesDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationPackagesDetailQuery, ConsolidationPackagesDetailQueryVariables>(ConsolidationPackagesDetailDocument, options);
        }
export type ConsolidationPackagesDetailQueryHookResult = ReturnType<typeof useConsolidationPackagesDetailQuery>;
export type ConsolidationPackagesDetailLazyQueryHookResult = ReturnType<typeof useConsolidationPackagesDetailLazyQuery>;
export type ConsolidationPackagesDetailQueryResult = Apollo.QueryResult<ConsolidationPackagesDetailQuery, ConsolidationPackagesDetailQueryVariables>;
export const ConsolidationPackageImportSettingsDocument = gql`
    query ConsolidationPackageImportSettings {
  office {
    consolidationPackageImportSettings {
      id
      name
      operatedAt
      createdAt
    }
  }
}
    `;

/**
 * __useConsolidationPackageImportSettingsQuery__
 *
 * To run a query within a React component, call `useConsolidationPackageImportSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationPackageImportSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationPackageImportSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useConsolidationPackageImportSettingsQuery(baseOptions?: Apollo.QueryHookOptions<ConsolidationPackageImportSettingsQuery, ConsolidationPackageImportSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsolidationPackageImportSettingsQuery, ConsolidationPackageImportSettingsQueryVariables>(ConsolidationPackageImportSettingsDocument, options);
      }
export function useConsolidationPackageImportSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsolidationPackageImportSettingsQuery, ConsolidationPackageImportSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsolidationPackageImportSettingsQuery, ConsolidationPackageImportSettingsQueryVariables>(ConsolidationPackageImportSettingsDocument, options);
        }
export type ConsolidationPackageImportSettingsQueryHookResult = ReturnType<typeof useConsolidationPackageImportSettingsQuery>;
export type ConsolidationPackageImportSettingsLazyQueryHookResult = ReturnType<typeof useConsolidationPackageImportSettingsLazyQuery>;
export type ConsolidationPackageImportSettingsQueryResult = Apollo.QueryResult<ConsolidationPackageImportSettingsQuery, ConsolidationPackageImportSettingsQueryVariables>;
export const CurrentConsolidationAccountingUnitDocument = gql`
    query CurrentConsolidationAccountingUnit($consolidationAccountingUnitId: ID!) {
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    id
    nameJa
    lockStatus
  }
}
    `;

/**
 * __useCurrentConsolidationAccountingUnitQuery__
 *
 * To run a query within a React component, call `useCurrentConsolidationAccountingUnitQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentConsolidationAccountingUnitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentConsolidationAccountingUnitQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *   },
 * });
 */
export function useCurrentConsolidationAccountingUnitQuery(baseOptions: Apollo.QueryHookOptions<CurrentConsolidationAccountingUnitQuery, CurrentConsolidationAccountingUnitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentConsolidationAccountingUnitQuery, CurrentConsolidationAccountingUnitQueryVariables>(CurrentConsolidationAccountingUnitDocument, options);
      }
export function useCurrentConsolidationAccountingUnitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentConsolidationAccountingUnitQuery, CurrentConsolidationAccountingUnitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentConsolidationAccountingUnitQuery, CurrentConsolidationAccountingUnitQueryVariables>(CurrentConsolidationAccountingUnitDocument, options);
        }
export type CurrentConsolidationAccountingUnitQueryHookResult = ReturnType<typeof useCurrentConsolidationAccountingUnitQuery>;
export type CurrentConsolidationAccountingUnitLazyQueryHookResult = ReturnType<typeof useCurrentConsolidationAccountingUnitLazyQuery>;
export type CurrentConsolidationAccountingUnitQueryResult = Apollo.QueryResult<CurrentConsolidationAccountingUnitQuery, CurrentConsolidationAccountingUnitQueryVariables>;
export const CurrentUserPermissionsDocument = gql`
    query CurrentUserPermissions {
  currentUserPermissions {
    companyId
    function
    id
    tenantUid
  }
}
    `;

/**
 * __useCurrentUserPermissionsQuery__
 *
 * To run a query within a React component, call `useCurrentUserPermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserPermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserPermissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserPermissionsQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserPermissionsQuery, CurrentUserPermissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserPermissionsQuery, CurrentUserPermissionsQueryVariables>(CurrentUserPermissionsDocument, options);
      }
export function useCurrentUserPermissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserPermissionsQuery, CurrentUserPermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserPermissionsQuery, CurrentUserPermissionsQueryVariables>(CurrentUserPermissionsDocument, options);
        }
export type CurrentUserPermissionsQueryHookResult = ReturnType<typeof useCurrentUserPermissionsQuery>;
export type CurrentUserPermissionsLazyQueryHookResult = ReturnType<typeof useCurrentUserPermissionsLazyQuery>;
export type CurrentUserPermissionsQueryResult = Apollo.QueryResult<CurrentUserPermissionsQuery, CurrentUserPermissionsQueryVariables>;
export const ExchangeRatesDocument = gql`
    query ExchangeRates($id: ID!) {
  office {
    consolidationCurrency
  }
  consolidationAccountingUnit(consolidationAccountingUnitId: $id) {
    exchangeRates {
      id
      averageRate
      currentRate
      updatedAt
      company {
        id
        abbreviation
        nameJa
        currency
        createdAt
        decimalPlace
      }
    }
  }
}
    `;

/**
 * __useExchangeRatesQuery__
 *
 * To run a query within a React component, call `useExchangeRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExchangeRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExchangeRatesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useExchangeRatesQuery(baseOptions: Apollo.QueryHookOptions<ExchangeRatesQuery, ExchangeRatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExchangeRatesQuery, ExchangeRatesQueryVariables>(ExchangeRatesDocument, options);
      }
export function useExchangeRatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExchangeRatesQuery, ExchangeRatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExchangeRatesQuery, ExchangeRatesQueryVariables>(ExchangeRatesDocument, options);
        }
export type ExchangeRatesQueryHookResult = ReturnType<typeof useExchangeRatesQuery>;
export type ExchangeRatesLazyQueryHookResult = ReturnType<typeof useExchangeRatesLazyQuery>;
export type ExchangeRatesQueryResult = Apollo.QueryResult<ExchangeRatesQuery, ExchangeRatesQueryVariables>;
export const ImportingConsolidationPackageJobDocument = gql`
    query ImportingConsolidationPackageJob($consolidationAccountingUnitId: ID!, $id: ID!) {
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    consolidationPackage(id: $id) {
      importingConsolidationPackageJob {
        ... on ConsolidationPackageImportFromCamidJob {
          serviceName
          camidResource: resource
        }
        ... on ConsolidationPackageImportFromCaJob {
          serviceName
          caResource: resource
        }
        ... on ConsolidationPackageImportFromExcelJob {
          excelFileName
        }
      }
    }
  }
}
    `;

/**
 * __useImportingConsolidationPackageJobQuery__
 *
 * To run a query within a React component, call `useImportingConsolidationPackageJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useImportingConsolidationPackageJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImportingConsolidationPackageJobQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useImportingConsolidationPackageJobQuery(baseOptions: Apollo.QueryHookOptions<ImportingConsolidationPackageJobQuery, ImportingConsolidationPackageJobQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImportingConsolidationPackageJobQuery, ImportingConsolidationPackageJobQueryVariables>(ImportingConsolidationPackageJobDocument, options);
      }
export function useImportingConsolidationPackageJobLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImportingConsolidationPackageJobQuery, ImportingConsolidationPackageJobQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImportingConsolidationPackageJobQuery, ImportingConsolidationPackageJobQueryVariables>(ImportingConsolidationPackageJobDocument, options);
        }
export type ImportingConsolidationPackageJobQueryHookResult = ReturnType<typeof useImportingConsolidationPackageJobQuery>;
export type ImportingConsolidationPackageJobLazyQueryHookResult = ReturnType<typeof useImportingConsolidationPackageJobLazyQuery>;
export type ImportingConsolidationPackageJobQueryResult = Apollo.QueryResult<ImportingConsolidationPackageJobQuery, ImportingConsolidationPackageJobQueryVariables>;
export const ImportingConsolidationPackagesDocument = gql`
    query ImportingConsolidationPackages($consolidationAccountingUnitId: ID!) {
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    id
    importingConsolidationPackages
  }
}
    `;

/**
 * __useImportingConsolidationPackagesQuery__
 *
 * To run a query within a React component, call `useImportingConsolidationPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useImportingConsolidationPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImportingConsolidationPackagesQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *   },
 * });
 */
export function useImportingConsolidationPackagesQuery(baseOptions: Apollo.QueryHookOptions<ImportingConsolidationPackagesQuery, ImportingConsolidationPackagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImportingConsolidationPackagesQuery, ImportingConsolidationPackagesQueryVariables>(ImportingConsolidationPackagesDocument, options);
      }
export function useImportingConsolidationPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImportingConsolidationPackagesQuery, ImportingConsolidationPackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImportingConsolidationPackagesQuery, ImportingConsolidationPackagesQueryVariables>(ImportingConsolidationPackagesDocument, options);
        }
export type ImportingConsolidationPackagesQueryHookResult = ReturnType<typeof useImportingConsolidationPackagesQuery>;
export type ImportingConsolidationPackagesLazyQueryHookResult = ReturnType<typeof useImportingConsolidationPackagesLazyQuery>;
export type ImportingConsolidationPackagesQueryResult = Apollo.QueryResult<ImportingConsolidationPackagesQuery, ImportingConsolidationPackagesQueryVariables>;
export const IntegrationSettingNewDocument = gql`
    query IntegrationSettingNew {
  office {
    companies {
      id
      nameJa
    }
    integrationSettings {
      ... on CamidIntegrationSetting {
        id
        company {
          id
          nameJa
        }
      }
      ... on CaIntegrationSetting {
        id
        company {
          id
          nameJa
        }
      }
      integrationService {
        type
        name
      }
    }
  }
}
    `;

/**
 * __useIntegrationSettingNewQuery__
 *
 * To run a query within a React component, call `useIntegrationSettingNewQuery` and pass it any options that fit your needs.
 * When your component renders, `useIntegrationSettingNewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIntegrationSettingNewQuery({
 *   variables: {
 *   },
 * });
 */
export function useIntegrationSettingNewQuery(baseOptions?: Apollo.QueryHookOptions<IntegrationSettingNewQuery, IntegrationSettingNewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IntegrationSettingNewQuery, IntegrationSettingNewQueryVariables>(IntegrationSettingNewDocument, options);
      }
export function useIntegrationSettingNewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IntegrationSettingNewQuery, IntegrationSettingNewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IntegrationSettingNewQuery, IntegrationSettingNewQueryVariables>(IntegrationSettingNewDocument, options);
        }
export type IntegrationSettingNewQueryHookResult = ReturnType<typeof useIntegrationSettingNewQuery>;
export type IntegrationSettingNewLazyQueryHookResult = ReturnType<typeof useIntegrationSettingNewLazyQuery>;
export type IntegrationSettingNewQueryResult = Apollo.QueryResult<IntegrationSettingNewQuery, IntegrationSettingNewQueryVariables>;
export const IntegrationSettingsDocument = gql`
    query IntegrationSettings {
  office {
    integrationSettings {
      ... on CamidIntegrationSetting {
        id
        integratedAt
        integratedCompanyName
        integrationService {
          name
        }
        camidIntegrationResources {
          type
          name
        }
        company {
          abbreviation
          nameJa
        }
      }
      ... on CaIntegrationSetting {
        id
        integratedAt
        integratedCompanyName
        integrationService {
          name
        }
        caIntegrationResources {
          type
          name
        }
        company {
          abbreviation
          nameJa
        }
      }
    }
    companies {
      id
    }
  }
}
    `;

/**
 * __useIntegrationSettingsQuery__
 *
 * To run a query within a React component, call `useIntegrationSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIntegrationSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIntegrationSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useIntegrationSettingsQuery(baseOptions?: Apollo.QueryHookOptions<IntegrationSettingsQuery, IntegrationSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IntegrationSettingsQuery, IntegrationSettingsQueryVariables>(IntegrationSettingsDocument, options);
      }
export function useIntegrationSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IntegrationSettingsQuery, IntegrationSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IntegrationSettingsQuery, IntegrationSettingsQueryVariables>(IntegrationSettingsDocument, options);
        }
export type IntegrationSettingsQueryHookResult = ReturnType<typeof useIntegrationSettingsQuery>;
export type IntegrationSettingsLazyQueryHookResult = ReturnType<typeof useIntegrationSettingsLazyQuery>;
export type IntegrationSettingsQueryResult = Apollo.QueryResult<IntegrationSettingsQuery, IntegrationSettingsQueryVariables>;
export const LoginOfficesDocument = gql`
    query LoginOffices {
  loginOffices {
    tenantUid
    name
    identificationCode
    isUnderContract
  }
}
    `;

/**
 * __useLoginOfficesQuery__
 *
 * To run a query within a React component, call `useLoginOfficesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginOfficesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginOfficesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginOfficesQuery(baseOptions?: Apollo.QueryHookOptions<LoginOfficesQuery, LoginOfficesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginOfficesQuery, LoginOfficesQueryVariables>(LoginOfficesDocument, options);
      }
export function useLoginOfficesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginOfficesQuery, LoginOfficesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginOfficesQuery, LoginOfficesQueryVariables>(LoginOfficesDocument, options);
        }
export type LoginOfficesQueryHookResult = ReturnType<typeof useLoginOfficesQuery>;
export type LoginOfficesLazyQueryHookResult = ReturnType<typeof useLoginOfficesLazyQuery>;
export type LoginOfficesQueryResult = Apollo.QueryResult<LoginOfficesQuery, LoginOfficesQueryVariables>;
export const OfficeMemberDetailDocument = gql`
    query OfficeMemberDetail($id: ID!) {
  office {
    officeMember(officeMemberId: $id) {
      id
      name
      email
      description
      roles {
        id
        nameJa
      }
      undeletableReason
    }
    roles {
      id
      nameJa
      isUserManagement
    }
  }
}
    `;

/**
 * __useOfficeMemberDetailQuery__
 *
 * To run a query within a React component, call `useOfficeMemberDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfficeMemberDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfficeMemberDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOfficeMemberDetailQuery(baseOptions: Apollo.QueryHookOptions<OfficeMemberDetailQuery, OfficeMemberDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OfficeMemberDetailQuery, OfficeMemberDetailQueryVariables>(OfficeMemberDetailDocument, options);
      }
export function useOfficeMemberDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfficeMemberDetailQuery, OfficeMemberDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OfficeMemberDetailQuery, OfficeMemberDetailQueryVariables>(OfficeMemberDetailDocument, options);
        }
export type OfficeMemberDetailQueryHookResult = ReturnType<typeof useOfficeMemberDetailQuery>;
export type OfficeMemberDetailLazyQueryHookResult = ReturnType<typeof useOfficeMemberDetailLazyQuery>;
export type OfficeMemberDetailQueryResult = Apollo.QueryResult<OfficeMemberDetailQuery, OfficeMemberDetailQueryVariables>;
export const OfficeMemberNewDocument = gql`
    query OfficeMemberNew {
  office {
    unregisteredTenantUsers {
      id
      name
      email
    }
    roles {
      id
      nameJa
    }
  }
}
    `;

/**
 * __useOfficeMemberNewQuery__
 *
 * To run a query within a React component, call `useOfficeMemberNewQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfficeMemberNewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfficeMemberNewQuery({
 *   variables: {
 *   },
 * });
 */
export function useOfficeMemberNewQuery(baseOptions?: Apollo.QueryHookOptions<OfficeMemberNewQuery, OfficeMemberNewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OfficeMemberNewQuery, OfficeMemberNewQueryVariables>(OfficeMemberNewDocument, options);
      }
export function useOfficeMemberNewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfficeMemberNewQuery, OfficeMemberNewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OfficeMemberNewQuery, OfficeMemberNewQueryVariables>(OfficeMemberNewDocument, options);
        }
export type OfficeMemberNewQueryHookResult = ReturnType<typeof useOfficeMemberNewQuery>;
export type OfficeMemberNewLazyQueryHookResult = ReturnType<typeof useOfficeMemberNewLazyQuery>;
export type OfficeMemberNewQueryResult = Apollo.QueryResult<OfficeMemberNewQuery, OfficeMemberNewQueryVariables>;
export const OfficeMembersDocument = gql`
    query OfficeMembers {
  office {
    officeMembers {
      id
      name
      email
      roles {
        nameJa
      }
    }
  }
}
    `;

/**
 * __useOfficeMembersQuery__
 *
 * To run a query within a React component, call `useOfficeMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfficeMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfficeMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useOfficeMembersQuery(baseOptions?: Apollo.QueryHookOptions<OfficeMembersQuery, OfficeMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OfficeMembersQuery, OfficeMembersQueryVariables>(OfficeMembersDocument, options);
      }
export function useOfficeMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfficeMembersQuery, OfficeMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OfficeMembersQuery, OfficeMembersQueryVariables>(OfficeMembersDocument, options);
        }
export type OfficeMembersQueryHookResult = ReturnType<typeof useOfficeMembersQuery>;
export type OfficeMembersLazyQueryHookResult = ReturnType<typeof useOfficeMembersLazyQuery>;
export type OfficeMembersQueryResult = Apollo.QueryResult<OfficeMembersQuery, OfficeMembersQueryVariables>;
export const PlConsolidationWorksheetBalanceDocument = gql`
    query PLConsolidationWorksheetBalance($consolidationAccountingUnitId: ID!) {
  office {
    consolidationJournalTypes {
      id
      name
      plConsolidationJournalSummary(
        consolidationAccountingUnitId: $consolidationAccountingUnitId
      ) {
        rows {
          assignedConsolidatedAccount {
            id
          }
          id
          totalBalance
        }
      }
    }
  }
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    includedConsolidationProcessTypeConsolidationPackages {
      id
      company {
        id
        abbreviation
      }
      submissionRequired
      profitAndLoss {
        rows {
          assignedConsolidatedAccount {
            id
          }
          translatedBalance
          adjustedTranslatedBalance
        }
      }
    }
    plConsolidationWorksheetBalance {
      rows {
        assignedConsolidatedAccount {
          id
          sortOrder
          consolidatedAccount {
            consolidatedAccountSubCategory {
              sortOrder
            }
            nameJa
            code {
              code
            }
            consolidatedAccountSubCategory {
              id
              nameJa
            }
          }
        }
        totalBalance
        adjustmentBalance
        adjustedBalance
      }
      summary {
        grossProfitAmount
        grossProfitItems {
          subCategory {
            id
            nameJa
          }
          amount
        }
        operatingProfitAmount
        operatingProfitItems {
          subCategory {
            id
            nameJa
          }
          amount
        }
        ordinaryProfitAmount
        ordinaryProfitItems {
          subCategory {
            id
            nameJa
          }
          amount
        }
        profitAttributableToOwnersOfParentAmount
        profitAttributableToOwnersOfParentItems {
          subCategory {
            id
            nameJa
          }
          amount
        }
        profitBeforeIncomeTaxesAmount
        profitBeforeIncomeTaxesItems {
          subCategory {
            id
            nameJa
          }
          amount
        }
      }
    }
  }
}
    `;

/**
 * __usePlConsolidationWorksheetBalanceQuery__
 *
 * To run a query within a React component, call `usePlConsolidationWorksheetBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlConsolidationWorksheetBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlConsolidationWorksheetBalanceQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *   },
 * });
 */
export function usePlConsolidationWorksheetBalanceQuery(baseOptions: Apollo.QueryHookOptions<PlConsolidationWorksheetBalanceQuery, PlConsolidationWorksheetBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlConsolidationWorksheetBalanceQuery, PlConsolidationWorksheetBalanceQueryVariables>(PlConsolidationWorksheetBalanceDocument, options);
      }
export function usePlConsolidationWorksheetBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlConsolidationWorksheetBalanceQuery, PlConsolidationWorksheetBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlConsolidationWorksheetBalanceQuery, PlConsolidationWorksheetBalanceQueryVariables>(PlConsolidationWorksheetBalanceDocument, options);
        }
export type PlConsolidationWorksheetBalanceQueryHookResult = ReturnType<typeof usePlConsolidationWorksheetBalanceQuery>;
export type PlConsolidationWorksheetBalanceLazyQueryHookResult = ReturnType<typeof usePlConsolidationWorksheetBalanceLazyQuery>;
export type PlConsolidationWorksheetBalanceQueryResult = Apollo.QueryResult<PlConsolidationWorksheetBalanceQuery, PlConsolidationWorksheetBalanceQueryVariables>;
export const ProfitAndLossDocument = gql`
    query ProfitAndLoss($consolidationAccountingUnitId: ID!, $id: ID!, $companyId: ID!) {
  office {
    consolidationCurrency
  }
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    consolidationPackage(id: $id) {
      profitAndLoss {
        id
        rows {
          adjustedTranslatedBalance
          adjustedBalance
          balance
          translatedBalance
          assignedConsolidatedAccount {
            id
            workClassificationId
            sortOrder
            consolidatedAccount {
              consolidatedAccountSubCategory {
                sortOrder
                id
              }
              accountType
              code {
                code
              }
              conversionType
              id
              nameEn
              nameJa
              tenantUid
              consolidatedAccountSubCategory {
                id
                nameEn
                nameJa
              }
            }
          }
        }
        balanceAdjustments {
          id
          assignedConsolidatedAccountId
          amount
          remark
        }
        translationAdjustments {
          afterTranslationBalance
          assignedConsolidatedAccountId
          beforeTranslationBalance
          id
          openingClassification
          remark
        }
        adjustedSummary {
          grossProfitAmount
          grossProfitItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          operatingProfitAmount
          operatingProfitItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          ordinaryProfitAmount
          ordinaryProfitItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          profitAttributableToOwnersOfParentAmount
          profitAttributableToOwnersOfParentItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          profitBeforeIncomeTaxesAmount
          profitBeforeIncomeTaxesItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
        }
        translatedSummary {
          grossProfitAmount
          grossProfitItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          operatingProfitAmount
          operatingProfitItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          ordinaryProfitAmount
          ordinaryProfitItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          profitAttributableToOwnersOfParentAmount
          profitAttributableToOwnersOfParentItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
          profitBeforeIncomeTaxesAmount
          profitBeforeIncomeTaxesItems {
            subCategory {
              id
              nameJa
            }
            amount
          }
        }
      }
    }
    exchangeRate(companyId: $companyId) {
      currentRate
      averageRate
    }
  }
}
    `;

/**
 * __useProfitAndLossQuery__
 *
 * To run a query within a React component, call `useProfitAndLossQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfitAndLossQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfitAndLossQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *      id: // value for 'id'
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useProfitAndLossQuery(baseOptions: Apollo.QueryHookOptions<ProfitAndLossQuery, ProfitAndLossQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfitAndLossQuery, ProfitAndLossQueryVariables>(ProfitAndLossDocument, options);
      }
export function useProfitAndLossLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfitAndLossQuery, ProfitAndLossQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfitAndLossQuery, ProfitAndLossQueryVariables>(ProfitAndLossDocument, options);
        }
export type ProfitAndLossQueryHookResult = ReturnType<typeof useProfitAndLossQuery>;
export type ProfitAndLossLazyQueryHookResult = ReturnType<typeof useProfitAndLossLazyQuery>;
export type ProfitAndLossQueryResult = Apollo.QueryResult<ProfitAndLossQuery, ProfitAndLossQueryVariables>;
export const ReservedConsolidatedAccountsDocument = gql`
    query ReservedConsolidatedAccounts {
  office {
    toBeReservedConsolidatedAccounts {
      foreignCurrencyTranslationAdjustmentAccounts {
        id
        nameJa
        accountType
        code {
          code
        }
      }
      foreignExchangeLossesNoeAccounts {
        id
        nameJa
        accountType
        code {
          code
        }
      }
      profitBSAccounts {
        id
        nameJa
        accountType
        code {
          code
        }
      }
      retainedEarningsBroughtForwardAccounts {
        id
        nameJa
        accountType
        code {
          code
        }
      }
    }
    isUpdatableReservedConsolidatedAccounts
  }
}
    `;

/**
 * __useReservedConsolidatedAccountsQuery__
 *
 * To run a query within a React component, call `useReservedConsolidatedAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservedConsolidatedAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservedConsolidatedAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useReservedConsolidatedAccountsQuery(baseOptions?: Apollo.QueryHookOptions<ReservedConsolidatedAccountsQuery, ReservedConsolidatedAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReservedConsolidatedAccountsQuery, ReservedConsolidatedAccountsQueryVariables>(ReservedConsolidatedAccountsDocument, options);
      }
export function useReservedConsolidatedAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReservedConsolidatedAccountsQuery, ReservedConsolidatedAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReservedConsolidatedAccountsQuery, ReservedConsolidatedAccountsQueryVariables>(ReservedConsolidatedAccountsDocument, options);
        }
export type ReservedConsolidatedAccountsQueryHookResult = ReturnType<typeof useReservedConsolidatedAccountsQuery>;
export type ReservedConsolidatedAccountsLazyQueryHookResult = ReturnType<typeof useReservedConsolidatedAccountsLazyQuery>;
export type ReservedConsolidatedAccountsQueryResult = Apollo.QueryResult<ReservedConsolidatedAccountsQuery, ReservedConsolidatedAccountsQueryVariables>;
export const SegmentDocument = gql`
    query Segment($segmentId: ID!) {
  office {
    segment(segmentId: $segmentId) {
      id
      nameJa
      nameEn
      abbreviation
      description
    }
  }
}
    `;

/**
 * __useSegmentQuery__
 *
 * To run a query within a React component, call `useSegmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useSegmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSegmentQuery({
 *   variables: {
 *      segmentId: // value for 'segmentId'
 *   },
 * });
 */
export function useSegmentQuery(baseOptions: Apollo.QueryHookOptions<SegmentQuery, SegmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SegmentQuery, SegmentQueryVariables>(SegmentDocument, options);
      }
export function useSegmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SegmentQuery, SegmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SegmentQuery, SegmentQueryVariables>(SegmentDocument, options);
        }
export type SegmentQueryHookResult = ReturnType<typeof useSegmentQuery>;
export type SegmentLazyQueryHookResult = ReturnType<typeof useSegmentLazyQuery>;
export type SegmentQueryResult = Apollo.QueryResult<SegmentQuery, SegmentQueryVariables>;
export const SegmentStructuresDocument = gql`
    query SegmentStructures($consolidationAccountingUnitId: ID!) {
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    submissionRequiredConsolidationPackages {
      id
      company {
        nameJa
      }
      segmentStructure {
        rows {
          segment {
            nameJa
          }
          segmentIdentificationKeys
          sortOrder
        }
        lastModifiedAt
      }
    }
  }
}
    `;

/**
 * __useSegmentStructuresQuery__
 *
 * To run a query within a React component, call `useSegmentStructuresQuery` and pass it any options that fit your needs.
 * When your component renders, `useSegmentStructuresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSegmentStructuresQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *   },
 * });
 */
export function useSegmentStructuresQuery(baseOptions: Apollo.QueryHookOptions<SegmentStructuresQuery, SegmentStructuresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SegmentStructuresQuery, SegmentStructuresQueryVariables>(SegmentStructuresDocument, options);
      }
export function useSegmentStructuresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SegmentStructuresQuery, SegmentStructuresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SegmentStructuresQuery, SegmentStructuresQueryVariables>(SegmentStructuresDocument, options);
        }
export type SegmentStructuresQueryHookResult = ReturnType<typeof useSegmentStructuresQuery>;
export type SegmentStructuresLazyQueryHookResult = ReturnType<typeof useSegmentStructuresLazyQuery>;
export type SegmentStructuresQueryResult = Apollo.QueryResult<SegmentStructuresQuery, SegmentStructuresQueryVariables>;
export const SegmentsDocument = gql`
    query Segments {
  office {
    segments {
      id
      nameJa
      abbreviation
      sortOrder
    }
  }
}
    `;

/**
 * __useSegmentsQuery__
 *
 * To run a query within a React component, call `useSegmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSegmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSegmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSegmentsQuery(baseOptions?: Apollo.QueryHookOptions<SegmentsQuery, SegmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SegmentsQuery, SegmentsQueryVariables>(SegmentsDocument, options);
      }
export function useSegmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SegmentsQuery, SegmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SegmentsQuery, SegmentsQueryVariables>(SegmentsDocument, options);
        }
export type SegmentsQueryHookResult = ReturnType<typeof useSegmentsQuery>;
export type SegmentsLazyQueryHookResult = ReturnType<typeof useSegmentsLazyQuery>;
export type SegmentsQueryResult = Apollo.QueryResult<SegmentsQuery, SegmentsQueryVariables>;
export const TenantRegistrationUrlDocument = gql`
    query TenantRegistrationUrl {
  tenantRegistrationUrl {
    url
  }
}
    `;

/**
 * __useTenantRegistrationUrlQuery__
 *
 * To run a query within a React component, call `useTenantRegistrationUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useTenantRegistrationUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTenantRegistrationUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useTenantRegistrationUrlQuery(baseOptions?: Apollo.QueryHookOptions<TenantRegistrationUrlQuery, TenantRegistrationUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TenantRegistrationUrlQuery, TenantRegistrationUrlQueryVariables>(TenantRegistrationUrlDocument, options);
      }
export function useTenantRegistrationUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TenantRegistrationUrlQuery, TenantRegistrationUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TenantRegistrationUrlQuery, TenantRegistrationUrlQueryVariables>(TenantRegistrationUrlDocument, options);
        }
export type TenantRegistrationUrlQueryHookResult = ReturnType<typeof useTenantRegistrationUrlQuery>;
export type TenantRegistrationUrlLazyQueryHookResult = ReturnType<typeof useTenantRegistrationUrlLazyQuery>;
export type TenantRegistrationUrlQueryResult = Apollo.QueryResult<TenantRegistrationUrlQuery, TenantRegistrationUrlQueryVariables>;
export const TenantUsersDocument = gql`
    query TenantUsers {
  tenantUsers {
    id
    name
    email
  }
}
    `;

/**
 * __useTenantUsersQuery__
 *
 * To run a query within a React component, call `useTenantUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTenantUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTenantUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useTenantUsersQuery(baseOptions?: Apollo.QueryHookOptions<TenantUsersQuery, TenantUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TenantUsersQuery, TenantUsersQueryVariables>(TenantUsersDocument, options);
      }
export function useTenantUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TenantUsersQuery, TenantUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TenantUsersQuery, TenantUsersQueryVariables>(TenantUsersDocument, options);
        }
export type TenantUsersQueryHookResult = ReturnType<typeof useTenantUsersQuery>;
export type TenantUsersLazyQueryHookResult = ReturnType<typeof useTenantUsersLazyQuery>;
export type TenantUsersQueryResult = Apollo.QueryResult<TenantUsersQuery, TenantUsersQueryVariables>;
export const TenantsDocument = gql`
    query Tenants {
  tenants {
    id
    name
    identificationCode
    isCreatable
    isUnderContract
    tenantUsers {
      id
    }
  }
}
    `;

/**
 * __useTenantsQuery__
 *
 * To run a query within a React component, call `useTenantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTenantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTenantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTenantsQuery(baseOptions?: Apollo.QueryHookOptions<TenantsQuery, TenantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TenantsQuery, TenantsQueryVariables>(TenantsDocument, options);
      }
export function useTenantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TenantsQuery, TenantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TenantsQuery, TenantsQueryVariables>(TenantsDocument, options);
        }
export type TenantsQueryHookResult = ReturnType<typeof useTenantsQuery>;
export type TenantsLazyQueryHookResult = ReturnType<typeof useTenantsLazyQuery>;
export type TenantsQueryResult = Apollo.QueryResult<TenantsQuery, TenantsQueryVariables>;
export const TrialBalanceDocument = gql`
    query TrialBalance($consolidationAccountingUnitId: ID!, $id: ID!) {
  consolidationAccountingUnit(
    consolidationAccountingUnitId: $consolidationAccountingUnitId
  ) {
    consolidationPackage(id: $id) {
      trialBalance {
        rows {
          id
          accountCode
          assignedConsolidatedAccount {
            consolidatedAccount {
              code {
                code
              }
              nameJa
            }
          }
          accountName
          balance
          importStatus
          importedBalance
        }
      }
    }
  }
}
    `;

/**
 * __useTrialBalanceQuery__
 *
 * To run a query within a React component, call `useTrialBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrialBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrialBalanceQuery({
 *   variables: {
 *      consolidationAccountingUnitId: // value for 'consolidationAccountingUnitId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTrialBalanceQuery(baseOptions: Apollo.QueryHookOptions<TrialBalanceQuery, TrialBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrialBalanceQuery, TrialBalanceQueryVariables>(TrialBalanceDocument, options);
      }
export function useTrialBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrialBalanceQuery, TrialBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrialBalanceQuery, TrialBalanceQueryVariables>(TrialBalanceDocument, options);
        }
export type TrialBalanceQueryHookResult = ReturnType<typeof useTrialBalanceQuery>;
export type TrialBalanceLazyQueryHookResult = ReturnType<typeof useTrialBalanceLazyQuery>;
export type TrialBalanceQueryResult = Apollo.QueryResult<TrialBalanceQuery, TrialBalanceQueryVariables>;
export const UserStatusDocument = gql`
    query UserStatus {
  userStatus {
    currentOffice {
      tenantUid
      identificationCode
      name
      featureFlags {
        isCarryForwardTranslationAdjustmentEnabled
        isCarryForwardOpsHistoryEnabled
        isExportBalanceAndProfitLossEnabled
        isMultipleLanguagesEnabled
        isSsoEnabled
        isViewerRoleEnabled
        isSortOrderCompanySegmentEnabled
        isSegmentWorksheetEnabled
      }
    }
    currentOfficeMember {
      id
      name
      email
    }
    lastOperatedConsolidationAccountingUnit {
      id
      nameJa
      lockStatus
    }
    mfidIdentificationCode
  }
}
    `;

/**
 * __useUserStatusQuery__
 *
 * To run a query within a React component, call `useUserStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserStatusQuery(baseOptions?: Apollo.QueryHookOptions<UserStatusQuery, UserStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserStatusQuery, UserStatusQueryVariables>(UserStatusDocument, options);
      }
export function useUserStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserStatusQuery, UserStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserStatusQuery, UserStatusQueryVariables>(UserStatusDocument, options);
        }
export type UserStatusQueryHookResult = ReturnType<typeof useUserStatusQuery>;
export type UserStatusLazyQueryHookResult = ReturnType<typeof useUserStatusLazyQuery>;
export type UserStatusQueryResult = Apollo.QueryResult<UserStatusQuery, UserStatusQueryVariables>;
export const WorkClassificationDocument = gql`
    query WorkClassification($id: ID!) {
  office {
    workClassification(id: $id) {
      workClassification {
        id
        code {
          code
        }
        nameJa
        nameEn
        description
        createdAt
        updatedAt
      }
      accountingUnitUseType
    }
  }
}
    `;

/**
 * __useWorkClassificationQuery__
 *
 * To run a query within a React component, call `useWorkClassificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkClassificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkClassificationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWorkClassificationQuery(baseOptions: Apollo.QueryHookOptions<WorkClassificationQuery, WorkClassificationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkClassificationQuery, WorkClassificationQueryVariables>(WorkClassificationDocument, options);
      }
export function useWorkClassificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkClassificationQuery, WorkClassificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkClassificationQuery, WorkClassificationQueryVariables>(WorkClassificationDocument, options);
        }
export type WorkClassificationQueryHookResult = ReturnType<typeof useWorkClassificationQuery>;
export type WorkClassificationLazyQueryHookResult = ReturnType<typeof useWorkClassificationLazyQuery>;
export type WorkClassificationQueryResult = Apollo.QueryResult<WorkClassificationQuery, WorkClassificationQueryVariables>;
export const WorkClassificationMenuDocument = gql`
    query WorkClassificationMenu {
  office {
    workClassifications {
      id
      nameJa
      code {
        code
      }
    }
  }
}
    `;

/**
 * __useWorkClassificationMenuQuery__
 *
 * To run a query within a React component, call `useWorkClassificationMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkClassificationMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkClassificationMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkClassificationMenuQuery(baseOptions?: Apollo.QueryHookOptions<WorkClassificationMenuQuery, WorkClassificationMenuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkClassificationMenuQuery, WorkClassificationMenuQueryVariables>(WorkClassificationMenuDocument, options);
      }
export function useWorkClassificationMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkClassificationMenuQuery, WorkClassificationMenuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkClassificationMenuQuery, WorkClassificationMenuQueryVariables>(WorkClassificationMenuDocument, options);
        }
export type WorkClassificationMenuQueryHookResult = ReturnType<typeof useWorkClassificationMenuQuery>;
export type WorkClassificationMenuLazyQueryHookResult = ReturnType<typeof useWorkClassificationMenuLazyQuery>;
export type WorkClassificationMenuQueryResult = Apollo.QueryResult<WorkClassificationMenuQuery, WorkClassificationMenuQueryVariables>;
export const WorkClassificationsDocument = gql`
    query WorkClassifications {
  office {
    workClassifications {
      id
      code {
        code
      }
      nameJa
      nameEn
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useWorkClassificationsQuery__
 *
 * To run a query within a React component, call `useWorkClassificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkClassificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkClassificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkClassificationsQuery(baseOptions?: Apollo.QueryHookOptions<WorkClassificationsQuery, WorkClassificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkClassificationsQuery, WorkClassificationsQueryVariables>(WorkClassificationsDocument, options);
      }
export function useWorkClassificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkClassificationsQuery, WorkClassificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkClassificationsQuery, WorkClassificationsQueryVariables>(WorkClassificationsDocument, options);
        }
export type WorkClassificationsQueryHookResult = ReturnType<typeof useWorkClassificationsQuery>;
export type WorkClassificationsLazyQueryHookResult = ReturnType<typeof useWorkClassificationsLazyQuery>;
export type WorkClassificationsQueryResult = Apollo.QueryResult<WorkClassificationsQuery, WorkClassificationsQueryVariables>;
export const JobStatusDocument = gql`
    subscription JobStatus($input: JobSubscriptionInput!) {
  jobStatusByJobId(input: $input) {
    jobId
    status
    type
  }
}
    `;

/**
 * __useJobStatusSubscription__
 *
 * To run a query within a React component, call `useJobStatusSubscription` and pass it any options that fit your needs.
 * When your component renders, `useJobStatusSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobStatusSubscription({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useJobStatusSubscription(baseOptions: Apollo.SubscriptionHookOptions<JobStatusSubscription, JobStatusSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<JobStatusSubscription, JobStatusSubscriptionVariables>(JobStatusDocument, options);
      }
export type JobStatusSubscriptionHookResult = ReturnType<typeof useJobStatusSubscription>;
export type JobStatusSubscriptionResult = Apollo.SubscriptionResult<JobStatusSubscription>;
export const CarryForwardExecutingStatusDocument = gql`
    subscription CarryForwardExecutingStatus($input: CarryForwardExecutingStatusSubscriptionInput!) {
  carryForwardExecutingStatus(input: $input) {
    consolidationAccountingUnitId
    status
  }
}
    `;

/**
 * __useCarryForwardExecutingStatusSubscription__
 *
 * To run a query within a React component, call `useCarryForwardExecutingStatusSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCarryForwardExecutingStatusSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarryForwardExecutingStatusSubscription({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCarryForwardExecutingStatusSubscription(baseOptions: Apollo.SubscriptionHookOptions<CarryForwardExecutingStatusSubscription, CarryForwardExecutingStatusSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CarryForwardExecutingStatusSubscription, CarryForwardExecutingStatusSubscriptionVariables>(CarryForwardExecutingStatusDocument, options);
      }
export type CarryForwardExecutingStatusSubscriptionHookResult = ReturnType<typeof useCarryForwardExecutingStatusSubscription>;
export type CarryForwardExecutingStatusSubscriptionResult = Apollo.SubscriptionResult<CarryForwardExecutingStatusSubscription>;
export const ConsolidationPackageImportStatusesDocument = gql`
    subscription ConsolidationPackageImportStatuses($input: ConsolidationPackageImportStatusesSubscriptionInput!) {
  consolidationPackageImportStatuses(input: $input) {
    consolidationAccountingUnitId
    status
  }
}
    `;

/**
 * __useConsolidationPackageImportStatusesSubscription__
 *
 * To run a query within a React component, call `useConsolidationPackageImportStatusesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useConsolidationPackageImportStatusesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsolidationPackageImportStatusesSubscription({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConsolidationPackageImportStatusesSubscription(baseOptions: Apollo.SubscriptionHookOptions<ConsolidationPackageImportStatusesSubscription, ConsolidationPackageImportStatusesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ConsolidationPackageImportStatusesSubscription, ConsolidationPackageImportStatusesSubscriptionVariables>(ConsolidationPackageImportStatusesDocument, options);
      }
export type ConsolidationPackageImportStatusesSubscriptionHookResult = ReturnType<typeof useConsolidationPackageImportStatusesSubscription>;
export type ConsolidationPackageImportStatusesSubscriptionResult = Apollo.SubscriptionResult<ConsolidationPackageImportStatusesSubscription>;
export const TbImportStatusDocument = gql`
    subscription TbImportStatus($input: TrialBalanceImportStatusSubscriptionInput!) {
  trialBalanceImportStatus(input: $input) {
    consolidationPackageId
    status
  }
}
    `;

/**
 * __useTbImportStatusSubscription__
 *
 * To run a query within a React component, call `useTbImportStatusSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTbImportStatusSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTbImportStatusSubscription({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTbImportStatusSubscription(baseOptions: Apollo.SubscriptionHookOptions<TbImportStatusSubscription, TbImportStatusSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TbImportStatusSubscription, TbImportStatusSubscriptionVariables>(TbImportStatusDocument, options);
      }
export type TbImportStatusSubscriptionHookResult = ReturnType<typeof useTbImportStatusSubscription>;
export type TbImportStatusSubscriptionResult = Apollo.SubscriptionResult<TbImportStatusSubscription>;
export const namedOperations = {
  Query: {
    AccountConversionRuleRecommendation: 'AccountConversionRuleRecommendation',
    AllConsolidationJournals: 'AllConsolidationJournals',
    AssignedConsolidatedAccounts: 'AssignedConsolidatedAccounts',
    AssignedConsolidatedAccountsForConsolidationPackageImport: 'AssignedConsolidatedAccountsForConsolidationPackageImport',
    BalanceSheet: 'BalanceSheet',
    BSConsolidationWorksheetBalance: 'BSConsolidationWorksheetBalance',
    CarryForwardExecuting: 'CarryForwardExecuting',
    CarryForwardExecutingInNextConsolidationAccountingUnit: 'CarryForwardExecutingInNextConsolidationAccountingUnit',
    CarryForwardOperationHistory: 'CarryForwardOperationHistory',
    CarryForwardPreview: 'CarryForwardPreview',
    Companies: 'Companies',
    Company: 'Company',
    ConsolidatedAccount: 'ConsolidatedAccount',
    ConsolidatedAccountImportSetting: 'ConsolidatedAccountImportSetting',
    ConsolidatedAccounts: 'ConsolidatedAccounts',
    ConsolidatedAccountsNameAndCode: 'ConsolidatedAccountsNameAndCode',
    ConsolidationAccountingUnitNew: 'ConsolidationAccountingUnitNew',
    ConsolidationAccountingUnitOperationHistories: 'ConsolidationAccountingUnitOperationHistories',
    ConsolidationAccountingUnits: 'ConsolidationAccountingUnits',
    ConsolidationAccountingUnitsCopyNew: 'ConsolidationAccountingUnitsCopyNew',
    ConsolidationAccountingUnitsDetail: 'ConsolidationAccountingUnitsDetail',
    ConsolidationJournalImportSetting: 'ConsolidationJournalImportSetting',
    ConsolidationJournalOperationHistory: 'ConsolidationJournalOperationHistory',
    ConsolidationJournalType: 'ConsolidationJournalType',
    ConsolidationJournalTypes: 'ConsolidationJournalTypes',
    ConsolidationJournals: 'ConsolidationJournals',
    ConsolidationPackageImportSetting: 'ConsolidationPackageImportSetting',
    ConsolidationPackageImportSettingsIdAndName: 'ConsolidationPackageImportSettingsIdAndName',
    ConsolidationPackageOperationHistory: 'ConsolidationPackageOperationHistory',
    ConsolidationPackages: 'ConsolidationPackages',
    ConsolidationPackagesDetail: 'ConsolidationPackagesDetail',
    ConsolidationPackageImportSettings: 'ConsolidationPackageImportSettings',
    CurrentConsolidationAccountingUnit: 'CurrentConsolidationAccountingUnit',
    CurrentUserPermissions: 'CurrentUserPermissions',
    ExchangeRates: 'ExchangeRates',
    ImportingConsolidationPackageJob: 'ImportingConsolidationPackageJob',
    ImportingConsolidationPackages: 'ImportingConsolidationPackages',
    IntegrationSettingNew: 'IntegrationSettingNew',
    IntegrationSettings: 'IntegrationSettings',
    LoginOffices: 'LoginOffices',
    OfficeMemberDetail: 'OfficeMemberDetail',
    OfficeMemberNew: 'OfficeMemberNew',
    OfficeMembers: 'OfficeMembers',
    PLConsolidationWorksheetBalance: 'PLConsolidationWorksheetBalance',
    ProfitAndLoss: 'ProfitAndLoss',
    ReservedConsolidatedAccounts: 'ReservedConsolidatedAccounts',
    Segment: 'Segment',
    SegmentStructures: 'SegmentStructures',
    Segments: 'Segments',
    TenantRegistrationUrl: 'TenantRegistrationUrl',
    TenantUsers: 'TenantUsers',
    Tenants: 'Tenants',
    TrialBalance: 'TrialBalance',
    UserStatus: 'UserStatus',
    WorkClassification: 'WorkClassification',
    WorkClassificationMenu: 'WorkClassificationMenu',
    WorkClassifications: 'WorkClassifications'
  },
  Mutation: {
    UpdateCompanySortOrder: 'UpdateCompanySortOrder',
    BuildCaAccountConversionRulePreview: 'BuildCaAccountConversionRulePreview',
    BuildCamidAccountConversionRulePreview: 'BuildCamidAccountConversionRulePreview',
    BuildConsolidatedAccountsPreview: 'BuildConsolidatedAccountsPreview',
    CarryForward: 'CarryForward',
    CreateAccountConversionRulePreview: 'CreateAccountConversionRulePreview',
    CreateCompany: 'CreateCompany',
    CreateCompanyMasterCsvExportUrl: 'CreateCompanyMasterCsvExportUrl',
    CreateConsolidatedAccount: 'CreateConsolidatedAccount',
    CreateConsolidatedAccountCsvExportUrl: 'CreateConsolidatedAccountCsvExportUrl',
    CreateConsolidationAccountingUnit: 'CreateConsolidationAccountingUnit',
    CreateConsolidationJournalCsvExportUrl: 'CreateConsolidationJournalCsvExportUrl',
    CreateConsolidationJournalImportFileDownloadUrl: 'CreateConsolidationJournalImportFileDownloadUrl',
    CreateConsolidationJournalImportFileUploadUrl: 'CreateConsolidationJournalImportFileUploadUrl',
    CreateConsolidationJournalPreview: 'CreateConsolidationJournalPreview',
    CreateConsolidationJournalType: 'CreateConsolidationJournalType',
    CreateConsolidationPackageImportFileUploadUrl: 'CreateConsolidationPackageImportFileUploadUrl',
    CreateConsolidationPackageImportSetting: 'CreateConsolidationPackageImportSetting',
    CreateConsolidationWorksheetCsvExportUrl: 'CreateConsolidationWorksheetCsvExportUrl',
    CreateOffice: 'CreateOffice',
    CreateOfficeMember: 'CreateOfficeMember',
    CreateSegment: 'CreateSegment',
    CreateTimeLimitedDownloadUrl: 'CreateTimeLimitedDownloadUrl',
    CreateWorkClassification: 'CreateWorkClassification',
    DeleteCaIntegrationSetting: 'DeleteCaIntegrationSetting',
    DeleteCamidIntegrationSetting: 'DeleteCamidIntegrationSetting',
    DeleteCompany: 'DeleteCompany',
    DeleteConsolidatedAccount: 'DeleteConsolidatedAccount',
    DeleteConsolidationJournalRows: 'DeleteConsolidationJournalRows',
    DeleteConsolidationJournalType: 'DeleteConsolidationJournalType',
    DeleteConsolidationPackageImportSetting: 'DeleteConsolidationPackageImportSetting',
    DeleteOfficeMember: 'DeleteOfficeMember',
    DeleteWorkClassification: 'DeleteWorkClassification',
    ExportBSBySubCategory: 'ExportBSBySubCategory',
    ExportBalanceSheet: 'ExportBalanceSheet',
    ExportPLSheetBySubCategory: 'ExportPLSheetBySubCategory',
    ExportPLSheet: 'ExportPLSheet',
    GenerateConsolidatedAccountFileUploadUrl: 'GenerateConsolidatedAccountFileUploadUrl',
    ImportConsolidatedAccount: 'ImportConsolidatedAccount',
    ImportConsolidationJournals: 'ImportConsolidationJournals',
    ImportConsolidationPackage: 'ImportConsolidationPackage',
    ImportConsolidationPackageFromExternalService: 'ImportConsolidationPackageFromExternalService',
    LoginOffice: 'LoginOffice',
    LoginOfficeSso: 'LoginOfficeSso',
    ResetCarryForward: 'ResetCarryForward',
    ResetConsolidationPackage: 'ResetConsolidationPackage',
    UpdateAccountConversionRule: 'UpdateAccountConversionRule',
    updateAssignedConsolidatedAccounts: 'updateAssignedConsolidatedAccounts',
    UpdateBSTranslationAdjustments: 'UpdateBSTranslationAdjustments',
    UpdateBsBalanceAdjustment: 'UpdateBsBalanceAdjustment',
    updateCompany: 'updateCompany',
    UpdateConsolidatedAccount: 'UpdateConsolidatedAccount',
    UpdateConsolidationAccountingUnit: 'UpdateConsolidationAccountingUnit',
    updateConsolidationAccountingUnitLockStatus: 'updateConsolidationAccountingUnitLockStatus',
    UpdateConsolidationJournalType: 'UpdateConsolidationJournalType',
    UpdateConsolidationJournalTypeSortOrder: 'UpdateConsolidationJournalTypeSortOrder',
    UpdateConsolidationPackageImportSetting: 'UpdateConsolidationPackageImportSetting',
    UpdateExchangeRates: 'UpdateExchangeRates',
    UpdateOfficeMember: 'UpdateOfficeMember',
    UpdateOrCreateConsolidationJournalImportSetting: 'UpdateOrCreateConsolidationJournalImportSetting',
    UpdatePLTranslationAdjustments: 'UpdatePLTranslationAdjustments',
    UpdatePlBalanceAdjustment: 'UpdatePlBalanceAdjustment',
    UpdateReservedConsolidatedAccounts: 'UpdateReservedConsolidatedAccounts',
    UpdateSegment: 'UpdateSegment',
    UpdateSegmentSortOrder: 'UpdateSegmentSortOrder',
    UpdateUserStatus: 'UpdateUserStatus',
    updateWorkClassification: 'updateWorkClassification',
    UpsertConsolidatedAccountImportSetting: 'UpsertConsolidatedAccountImportSetting'
  },
  Subscription: {
    JobStatus: 'JobStatus',
    CarryForwardExecutingStatus: 'CarryForwardExecutingStatus',
    ConsolidationPackageImportStatuses: 'ConsolidationPackageImportStatuses',
    TbImportStatus: 'TbImportStatus'
  }
}