import { test, expect } from '@playwright/test';
import * as fs from 'fs';

import { LoginPage } from './login-page';

const users = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/users.json', 'utf-8'));
const login = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/login.json', 'utf-8'));

users.forEach((user) => {
  test(`Test for login ${user.username} ${user.password}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    //Using method 'goto()' from class'LoginPage'
    await loginPage.goto();  
    await loginPage.typeUsername(user.username);
    await loginPage.typePassword(user.password);
    await loginPage.clickLoginButton();

    // Assertion
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
  });
});
