import {
  beforeEach,
  describe,
  expect,
  skip,
  test,
  use,
} from '@/fixtures/page-fixtures';
import { FULL_PERMISSION_USER } from '@/constants/auth';
import {
  ConsolidationAccountingUnitsDocument,
  ConsolidationAccountingUnitsQuery,
  ConsolidationAccountingUnitsQueryVariables,
  ConsolidationPackagesDocument,
  ConsolidationPackagesQuery,
  ConsolidationPackagesQueryVariables,
} from '@conac/graphql-schema';
import { randomString } from '@conac/utils';

use({
  storageState: FULL_PERMISSION_USER,
});

describe('DISPLAY CONSOLIDATION PACKAGE PAGE INFORMATION', () => {
  beforeEach(async ({ consolidationPackagePage, page }) => {
    await test.step('Go to Consolidation Package screen', async () => {
      await consolidationPackagePage.goto();
      await expect(page).toHaveURL(new RegExp('/consolidation_packages'));
    });
  });

  test('C78844 Verify header of consolidation package detail', async ({
    consolidationPackagePage,
    page,
    apolloClient,
  }) => {
    let abbreviation: string;
    let nameJa: string;
    await test.step('Go to report detail of a company', async () => {
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

      const consolidationPackageQuery = await apolloClient.query<
        ConsolidationPackagesQuery,
        ConsolidationPackagesQueryVariables
      >({
        query: ConsolidationPackagesDocument,
        variables: {
          id: id,
        },
      });
      console.log(consolidationPackageQuery);
      abbreviation =
        consolidationPackageQuery.data.consolidationAccountingUnit.submissionRequiredConsolidationPackages.at(
          0
        ).company.abbreviation;
      nameJa =
        consolidationPackageQuery.data.consolidationAccountingUnit.submissionRequiredConsolidationPackages.at(
          0
        ).company.nameJa;
    });
    await test.step('Verify header of consolidation package detail', async () => {
      await consolidationPackagePage.clickOnReportDetail(
        abbreviation,
        '残高試算表'
      );
      const headerCompanyName =
        '連結パッケージ : ' + abbreviation + ' ' + nameJa;
      await expect(
        page.getByRole('heading', { name: `${headerCompanyName}` })
      ).toBeVisible();
    });
  });

  skip('C86979 Verify header of consolidation package detail', async ({
    consolidationPackagePage,
    consolidationAccountingUnitsPage,
    headersPage,
    page,
  }) => {
    const conacUnitJpName = await randomString(5);
    await test.step('Create new consolidation accounting unit', async () => {
      await consolidationAccountingUnitsPage.goto();
      await consolidationAccountingUnitsPage.clickOnNewButton();
      await consolidationAccountingUnitsPage.createNewConacUnit(
        conacUnitJpName,
        '全ての連結科目を利用'
      );
      const successPopup = '「' + conacUnitJpName + '」を作成しました。';
      await expect(page.getByText(successPopup)).toBeVisible();
      await headersPage.selectConsolidationAccountingUnit(conacUnitJpName);
    });

    await test.step('Verify date time of new consolidation package', async () => {
      await consolidationPackagePage.goto();
      const createdDate =
        await consolidationPackagePage.getFirstCompanyConsolidationPackageInformation(
          '設定日時'
        );
      const updatedDate =
        await consolidationPackagePage.getFirstCompanyConsolidationPackageInformation(
          '最終更新日時'
        );
      expect(createdDate).toEqual(updatedDate);
    });
  });

  test('C86981 Verify consolidation package updated time change after modify data', async ({
    consolidationPackagePage,
    consolidationAccountingUnitsPage,
    headersPage,
  }) => {
    const rand = await randomString(5);
    let updatedConacUnit: string;
    let updatedTime: string;

    await test.step('Get updated time of a company in consolidation package', async () => {
      await consolidationAccountingUnitsPage.goto();
      updatedConacUnit =
        await consolidationAccountingUnitsPage.getFirstUnlockUnit();
      await headersPage.selectConsolidationAccountingUnit(updatedConacUnit);
      await consolidationPackagePage.goto();
      updatedTime =
        await consolidationPackagePage.getFirstCompanyConsolidationPackageInformation(
          '最終更新日時'
        );
    });

    await test.step('Update a consolidation accounting unit', async () => {
      await consolidationAccountingUnitsPage.goto();
      await consolidationAccountingUnitsPage.clickOnEditButton(
        updatedConacUnit
      );
      await consolidationAccountingUnitsPage.updateConacUnit(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        rand
      );
    });

    await test.step('Verify updated time of new consolidation package', async () => {
      await consolidationPackagePage.goto();
      const newUpdatedTime =
        await consolidationPackagePage.getFirstCompanyConsolidationPackageInformation(
          '最終更新日時'
        );
      expect(newUpdatedTime).not.toEqual(updatedTime);
    });
  });
});
