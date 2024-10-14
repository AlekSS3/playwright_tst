import { test, expect } from '@playwright/test';
//better organisation of our tests with test.describe
test.describe("Test Suit for Authentication Tests", ()=>{

test('test', async ({ page }) => {
  await page.goto('/');
  //await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  //await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  //await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
});

test('test fail', async ({ page }) => {
    await page.goto('/');
    //await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user1');
    //await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText('Swag Labs')).toBeVisible();
    //await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
    await expect(page.locator('[data-test="title"]')).toContainText('Products');

});

});