import { test as baseTest, expect } from '@playwright/test';

import { LoginPage }  from '../homework5/saucedemo-pages.ts/login-page1.ts';
import * as fs from 'fs';

const users = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/users.json', 'utf-8'));

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';