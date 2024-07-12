import {
  beforeEach,
  describe,
  expect,
  test,
  use,
} from '@/fixtures/page-fixtures';
import { VIEWER_USER } from '@/constants/auth';

use({
  storageState: VIEWER_USER,
});

describe('VIEWER ROLE UI TESTING', () => {
  test('C102112 Verify viewer role in Home Page screen', async ({
    homePage,
  }) => {
    await test.step('Verify viewer role in Home Page screen', async () => {
      await homePage.goto();
      await homePage.verifyHomePageView();
    });
  });

  // test('C87558 Verify viewer role in Carry Forward screen', async ({
  //   homePage,
  // }) => {
  //   await test.step('Verify Home Page View', async () => {
  //     await homePage.verifyHomePageView();
  //   });
  // });

  test('C87559 Verify viewer role in Exchange Rate screen', async ({
    exchangeRatePage,
  }) => {
    await test.step('Verify viewer role in Exchange Rate screen', async () => {
      await exchangeRatePage.goto();
      await exchangeRatePage.verifyExchangeRateViewerRole();
    });
  });

  test('C87560 Verify viewer role in Assigned Consolidated Account screen', async ({
    assignedConsolidatedAccountPage,
  }) => {
    await test.step('Verify viewer role in Assigned Consolidated Account screen', async () => {
      await assignedConsolidatedAccountPage.goto();
      await assignedConsolidatedAccountPage.verifyAssignedConsolidatedAccountViewerRole();
    });
  });

  test('C87561 Verify viewer role in Consolidation Package screen ', async ({
    consolidationPackagePage,
  }) => {
    await test.step('Verify viewer role in Consolidation Package screen', async () => {
      await consolidationPackagePage.goto();
      await consolidationPackagePage.verifyConsolidationPackagesViewerRole();
      await consolidationPackagePage.clickOnFirstReportDetail('残高試算表');
      await consolidationPackagePage.verifyConsolidationPackagesDetailViewerRole();
    });
  });

  test('C87562 Verify viewer role in Consolidation Package Detail screen ', async ({
    consolidationPackagePage,
  }) => {
    await test.step('Verify viewer role in Consolidation Package Detail screen', async () => {
      await consolidationPackagePage.goto();
      await consolidationPackagePage.clickOnFirstReportDetail('貸借対照表');
      await consolidationPackagePage.verifyConsolidationPackagesDetailViewerRole();
    });
  });

  test('C87563 Verify viewer role in Consolidation Package Import Settings screen', async ({
    consolidationImportSettingsPage,
  }) => {
    await test.step('Verify viewer role in Consolidation Package Import Settings screen', async () => {
      await consolidationImportSettingsPage.goto();
      await consolidationImportSettingsPage.verifyFileImportSettingViewerRole();
    });
  });

  test('C87564 Verify viewer role in Consolidation Package Import Settings Detail screen', async ({
    consolidationImportSettingsPage,
  }) => {
    await test.step('Verify viewer role in Consolidation Package Import Settings Detail screen', async () => {
      await consolidationImportSettingsPage.goto();
      await consolidationImportSettingsPage.clickOnFirstSettingDetail();
      await consolidationImportSettingsPage.verifyFileImportSettingDetailViewerRole();
    });
  });

  test('C87565 Verify viewer role in Consolidation Journals screen', async ({
    consolidationJournalsPage,
  }) => {
    await test.step('Verify viewer role in Consolidation Journals screen', async () => {
      await consolidationJournalsPage.goto();
      await consolidationJournalsPage.verifyConsolidationJournalsViewerRole();
    });
  });

  test('C87566 Verify viewer role in Consolidation Journals Data screen', async ({
    consolidationJournalsPage,
  }) => {
    await test.step('Verify viewer role in Consolidation Journals Data screen', async () => {
      await consolidationJournalsPage.goto();
      await consolidationJournalsPage.selectJournalType('資本連結');
      await consolidationJournalsPage.verifyConsolidationJournalsDetailViewerRole();
    });
  });

  test('C87568 Verify viewer role in Consolidation Worksheet screen', async ({
    consolidationWorksheetPage,
  }) => {
    await test.step('Verify viewer role in Consolidation Worksheet screen', async () => {
      await consolidationWorksheetPage.goto();
      await consolidationWorksheetPage.verifyConsolidationWorksheetViewerRole();
    });
  });

  test('C87574 Verify viewer role in Company screen', async ({
    companyPage,
  }) => {
    await test.step('Verify viewer role in Company screen', async () => {
      await companyPage.goto();
      await companyPage.verifyCompaniesViewerRole();
    });
  });

  test('C87575 Verify viewer role in Company Details screen', async ({
    companyPage,
  }) => {
    await test.step('Verify viewer role in Company Detail screen', async () => {
      await companyPage.goto();
      await companyPage.clickOnFirstCompaniesDetailButton();
      await companyPage.verifyDetailCompanyViewerRole();
    });
  });

  test('C87569 Verify viewer role in Consolidated Subject screen', async ({
    consolidatedAccountPage,
  }) => {
    await test.step('Verify viewer role in Consolidated Subject screen', async () => {
      await consolidatedAccountPage.goto();
      await consolidatedAccountPage.verifyConsolidatedAccountsViewerRole();
    });
  });

  test('C87570 Verify viewer role in Consolidated Subject Details screen', async ({
    consolidatedAccountPage,
  }) => {
    await test.step('Verify viewer role in Consolidated Subject Details screen', async () => {
      await consolidatedAccountPage.goto();
      await consolidatedAccountPage.clickOnDetailOfFirstAccount();
      await consolidatedAccountPage.verifyConsolidatedAccountsDetailViewerRole();
    });
  });

  test('C87571 Verify viewer role in Consolidated Subject Import Settings screen', async ({
    consolidatedAccountPage,
  }) => {
    await test.step('Verify viewer role in Consolidated Subject Import Settings screen', async () => {
      await consolidatedAccountPage.goto();
      await expect(
        consolidatedAccountPage.consolidatedItemCodeHeader
      ).toBeVisible();
      await consolidatedAccountPage.clickOnImportSettingTab();
      await consolidatedAccountPage.verifyConsolidatedAccountsImportSettingViewerRole();
    });
  });

  test('C87572 Verify viewer role in List of Consolidated Journal Types screen', async ({
    consolidationJournalTypesPage,
  }) => {
    await test.step('Verify viewer role in List of Consolidated Journal Types screen', async () => {
      await consolidationJournalTypesPage.goto();
      await consolidationJournalTypesPage.verifyConsolidationJournalTypeViewerRole();
    });
  });

  test('C87573 Verify viewer role in List of Consolidated Journal Types Detail screen', async ({
    consolidationJournalTypesPage,
  }) => {
    await test.step('Verify viewer role in List of Consolidated Journal Types Detail screen', async () => {
      await consolidationJournalTypesPage.goto();
      await consolidationJournalTypesPage.clickOnFirstJournalTypeDetail();
      await consolidationJournalTypesPage.verifyConsolidationJournalTypeDetailViewerRole();
    });
  });

  test('C102113 Verify viewer role in Segment List screen', async ({
    segmentsPage,
  }) => {
    await test.step('Verify viewer role in Segment List screen', async () => {
      await segmentsPage.goto();
      await segmentsPage.verifySegmentViewerRole();
    });
  });

  test('C102114 Verify viewer role in Segment Detail screen', async ({
    segmentsPage,
  }) => {
    await test.step('Verify viewer role in Segment Detail screen', async () => {
      await segmentsPage.goto();
      await segmentsPage.clickOnFirstSegmentDetail();
      await segmentsPage.verifySegmentDetailViewerRole();
    });
  });

  test('C87557 Verify viewer role in User screen', async ({
    officeMemberPage,
  }) => {
    await test.step('Verify viewer role in User screen', async () => {
      await officeMemberPage.goto();
      await officeMemberPage.verifyOfficeMemberViewerRole();
    });
  });

  test('C87576 Verify viewer role in User Details screen', async ({
    officeMemberPage,
  }) => {
    await test.step('Verify viewer role in User Details screen', async () => {
      await officeMemberPage.goto();
      await officeMemberPage.clickEditOnFirstOfficeMember();
      await officeMemberPage.verifyOfficeMemberDetailViewerRole();
    });
  });

  test('C87577 Verify viewer role in List of Consolidated Accounting Units screen', async ({
    consolidationAccountingUnitsPage,
  }) => {
    await test.step('Verify viewer role in List of Consolidated Accounting Units screen', async () => {
      await consolidationAccountingUnitsPage.goto();
      await consolidationAccountingUnitsPage.verifyConsolidationAccountingUnitViewerRole();
    });
  });

  test('C87578 Verify viewer role in Consolidated Accounting Unit Details screen', async ({
    consolidationAccountingUnitsPage,
    headersPage,
  }) => {
    await test.step('Verify viewer role in Consolidated Accounting Unit Details screen', async () => {
      await consolidationAccountingUnitsPage.goto();
      await headersPage.waitUntilHeaderLoaded();
      await consolidationAccountingUnitsPage.clickOnFirstConsolidationAccountingUnit();
      await consolidationAccountingUnitsPage.verifyConsolidationAccountingUnitDetailViewerRole();
    });
  });

  test('C87579 Verify viewer role in Business Classification List screen', async ({
    workClassificationPage,
  }) => {
    await test.step('Verify viewer role in Business Classification List screen', async () => {
      await workClassificationPage.goto();
      await workClassificationPage.verifyWorkClassificationViewerRole();
    });
  });

  test('C87580 Verify viewer role in Business Classification List Detail screen', async ({
    workClassificationPage,
  }) => {
    await test.step('Verify viewer role in Business Classification List Detail screen', async () => {
      await workClassificationPage.goto();
      await workClassificationPage.clickOnDetailOfFirstWorkClassification();
      await workClassificationPage.verifyWorkClassificationDetailViewerRole();
    });
  });

  test('C87581 Verify viewer role in Collaborative Service screen', async ({
    integrationServicePage,
  }) => {
    await test.step('Verify viewer role in Collaborative Service screen', async () => {
      await integrationServicePage.goto();
      await integrationServicePage.verifyIntegrationServiceViewerRole();
    });
  });
});
