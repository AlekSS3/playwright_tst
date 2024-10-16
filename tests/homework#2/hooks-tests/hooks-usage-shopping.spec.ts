import { test, expect } from '@playwright/test';

//Using test.beforeEach and test.afterEach
test.describe('Test Suite for Shopping Cart Tests', () => {
    test.beforeEach('Navigate to webpage', async({ page }) =>{
        await page.goto('/');
    });

    test.describe('Test Suite for addding products to cart', () => {

        test('Add one product', async ({ page }) => {
        
        });

        test('Add multiple products', async ({ page }) => {
        
        });
    });

    test.describe('Test Suite for removing products from cart', () => {

        test('Remove one product', async ({ page }) => {
        
        });

    });

    test.afterEach('Tear down for our tests', async()=>{

    });

});

