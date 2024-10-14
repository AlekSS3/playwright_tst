import { test, expect } from '@playwright/test';

test.describe("Test Suite for Sorting Products Tests", () => {
    test.beforeEach("Navigate to webpage", async({ page }) =>{
        await page.goto('/');

    });


    test.describe("Test Suite for sorting products by name", () => {

        test('sorting products from A to Z', async ({ page }) => {
        
        });

        test('sorting products from Z to A', async ({ page }) => {
        
        });
    });

    test.describe("Test Suite for sorting products by price", () => {

        test('sorting products from low to high', async ({ page }) => {
        
        });

        test('sorting products from high to low', async ({ page }) => {
        
        });

    });

    test.afterEach("tear down for our tests", async()=>{

    });


});