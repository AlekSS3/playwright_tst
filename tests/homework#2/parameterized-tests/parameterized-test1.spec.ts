import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const user = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/admin-user.json', 'utf-8'));

test(`Login test for user: ${user.username}`, async ({ page }) => {

  //Navigate to website
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('[name="username"]').fill(user.username);
    await page.locator('[name="password"]').fill(user.password);
    await page.locator('[type="submit"]').click(); // Corrected the login button selector to "submit"
    
    // Assertion
    await expect(page.locator('h2')).toContainText('Secure Area');
});