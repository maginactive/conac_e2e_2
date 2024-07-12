import {
  FULL_PERMISSION_USER,
  SYSTEM_ADMIN,
  VIEWER_USER,
} from '@/constants/auth';
import { chromium } from 'playwright';
import { LoginPage } from '@conac/mfid-login';

async function prepareStorageState() {
  const browser = await chromium.launch();
  let context = await browser.newContext();
  const newPage = await context.newPage();
  const loginPage = new LoginPage(newPage as any);
  await loginPage.login(
    process.env['FULL_PERMISSION_USER_EMAIL'],
    process.env['FULL_PERMISSION_USER_PASSWORD']
  );
  await newPage.context().storageState({ path: FULL_PERMISSION_USER });

  context = await browser.newContext();
  const newViewerPage = await context.newPage();
  const loginViewerPage = new LoginPage(newViewerPage as any);
  await loginViewerPage.login(
    process.env['VIEWER_USER_EMAIL'],
    process.env['VIEWER_USER_PASSWORD']
  );
  await newViewerPage.context().storageState({ path: VIEWER_USER });

  context = await browser.newContext();
  const newSystemAdminPage = await context.newPage();
  const loginSystemAdminPage = new LoginPage(newSystemAdminPage as any);
  await loginSystemAdminPage.login(
    process.env['SYSTEM_ADMIN_EMAIL'],
    process.env['SYSTEM_ADMIN_PASSWORD']
  );
  await newSystemAdminPage.context().storageState({ path: SYSTEM_ADMIN });
}

export default prepareStorageState;
