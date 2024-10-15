import { test, expect } from '@playwright/test';
import * as fs from 'fs';
//const data1 = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/users.json', 'utf-8'));
//const login = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/locators/login.json', 'utf-8'));

const data1 = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/users.json', 'utf-8'));

data1.forEach((user)=>{
    test (`test ${user.username} ${user.password}`, async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill(user.username);
    await page.locator('[data-test="password"]').fill(user.password);
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).
    toContainText('Products');
});

})