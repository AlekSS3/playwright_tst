import { test, expect } from '@playwright/test';

test.describe('Test Suites for e-commerce website titles', () => {

    test('Check title of the login page', async ({ page }) => {
        await page.goto('https://saucedemo.com');
        
        const title =await page.title();

        // Assertion
        await expect(page).toHaveTitle('Swag Labs');
        expect (title).toBe('Swag Labs');

    });

    test('Check title of the products page', async ({ page }) => {
        await page.goto('https://saucedemo.com');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        const title1 =await page.title();

        // Assertion
        expect (title1).toBe('Products');
    

    });

});