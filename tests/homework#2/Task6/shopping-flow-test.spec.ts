import { test, expect } from '@playwright/test';

test('Test for shopping flow', async ({ page }) => {
    //Navigate to webpage
  await page.goto('/');

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Aleksandra');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Stefanovska');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('1000');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  //Assertions
  await expect (page).toHaveTitle('Swag Labs');
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');



});