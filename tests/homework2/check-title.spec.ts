import { test, expect } from '@playwright/test';

test('Check title of a website', async ({ page }) => {
    //Navigate to the website
    await page.goto('https://saucedemo.com');

    const title =await page.title();

    //Assertion
    await expect(page).toHaveTitle(/Swag Labs/);
    expect (title).toBe('Swag Labs');
    
  });