import { test, expect } from '@playwright/test';
// Organizing tests by functionality
test.describe("Test Suite for User Update Tests", () => {

    test.beforeEach("Navigate to Login", async({page})=>{
        await page.goto('/');

    
    });

    test.describe("Test Suite for Updating Username", () => {

        test('update username with valid username', async ({ page }) => {
        
        });

        test('update username with invalid username', async ({ page }) => {
        
        });

        test('update username with empty username', async ({ page }) => {
        
        });

    });

    test.describe("Test Suite for Updating Password", () => {

        test('update password with allowed values', async ({ page }) => {
        
        });

    });

    test.afterEach("tear down for our tests", async()=>{

    });

});