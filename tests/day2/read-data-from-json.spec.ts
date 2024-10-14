import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const data1 = JSON.parse(fs.readFileSync('../playwright-tst/tests/day2/single-user.json', 'utf-8'));

test('Login test with user credentials', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill(data1.username);
    await page.locator('[data-test="password"]').fill(data1.password);
    await page.locator('[data-test="login-button"]').click();
    //await expect(page.locator('[data-test="title"]')).toContainText(data1.title);
});

