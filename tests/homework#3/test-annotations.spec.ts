import {test, expect} from '@playwright/test';


test.describe ('Skip and fixeme tests', () => {

test.skip('Skit test for add and remove a product',async ({ page }) => {
    await page.goto('/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="shopping-cart-link"]');
    await page.click('button[data-test="remove-sauce-labs-backpack"]');

    //Assertions
    await expect(page.locator('[data-test="shipping-info-value"]')).toHaveText('Checkout')
    await expect(page.locator('[data-test="shipping-info-value"]')).toHaveText('Continue Shopping')

});

test('Add a product to Cart',async ({ page }) => {
    await page.goto('/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="shopping-cart-link"]');


    //Assertions
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toHaveText('Remove')
    
});

test.fixme('Remove added product and continue with shopping', async ({ page }) =>{
    await page.goto('/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="shopping-cart-link"]');
    await page.click('[data-test="continue-shopping"]');

    //Assertion
   // await expect(page.)

});

});