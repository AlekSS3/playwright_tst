import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const record = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/users.json', 'utf-8'));

record.forEach((user) => {

    // Added test.fixme for "locked_out_user"
    const Test = user.username === 'locked_out_user' ? test.fixme : test;

    Test(`Test login for user: ${user.username}, password: ${user.password}`, async ({ page }) => {
        // Navigate to page
        await page.goto('https://saucedemo.com');
        await page.locator('[data-test="username"]').fill(user.username);
        await page.locator('[data-test="password"]').fill(user.password);
        await page.locator('[data-test="login-button"]').click();

        // Assertion
        await expect(page.locator('[data-test="title"]')).toContainText('Products');
    });
});