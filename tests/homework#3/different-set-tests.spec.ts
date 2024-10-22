import {test, expect} from '@playwright/test';


test.describe ('Skip and fixme tests', () => {

    test('@slow Test to add and remove a product',async ({ page }) => {
        await page.goto('/');
        await page.fill('[data-test="username"]', 'standard_user');
        await page.fill('[data-test="password"]', 'secret_sauce');
        await page.click('[data-test="login-button"]');
        await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
        await page.click('[data-test="shopping-cart-link"]');
        await page.click('button[data-test="remove-sauce-labs-backpack"]');

    //Assertions
        //await expect(page.locator('[data-test="shipping-info-value"]')).toHaveText('Checkout')
        //await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toHaveText('Remove');
        await expect(page.locator('[data-test="continue-shopping"]')).toHaveText('Continue Shopping');
    });

});

    test('@fast Test for user login', async ({ page }) => {
        await page.goto('/');
        await page.fill('[data-test="username"]', 'standard_user');
        await page.fill('[data-test="password"]', 'secret_sauce');
        await page.click('[data-test="login-button"]');

    });

    test('@smoke Add a product to Cart',async ({ page}) => {
        await page.goto('/');
        await page.fill('[data-test="username"]', 'standard_user');
        await page.fill('[data-test="password"]', 'secret_sauce');
        await page.click('[data-test="login-button"]');
        await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
        await page.click('[data-test="shopping-cart-link"]');

    //Assertions
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toHaveText('Remove')
    
});

    test('@regression Remove added product and continue with shopping', async ({ page }) =>{
        await page.goto('/');
        await page.fill('[data-test="username"]', 'standard_user');
        await page.fill('[data-test="password"]', 'secret_sauce');
        await page.click('[data-test="login-button"]');
        await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
        await page.click('[data-test="shopping-cart-link"]');
        await page.click('[data-test="continue-shopping"]');
});


test.describe('Tests for smoke tests', () => {

    test('Successfully login @smoke', async ({ page }) => {

    });

    test('Unsuccessfully login @smoke', async ({ page }) => {
      
    });

});

test.describe('Tests for high priority and regression', () => {

    test('Successfully checkout test @highpriority @regression', async ({ page }) => {
    
    });

    test('Unsuccessfully checkout test @highpriority @regression', async ({ page }) => {
       
    });

});