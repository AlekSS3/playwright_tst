import { test, expect } from '@playwright/test';
// Organizing tests by functionality
test.describe('Test Suite for User Update Tests', () => {

    test.beforeEach('Navigate to Login', async({page})=>{
        await page.goto('/');

    
    });

    test.describe('Test Suite for Updating Username', () => {

        test('Update username with valid username', async ({ page }) => {
        
        });

        test('Update username with invalid username', async ({ page }) => {
        
        });

        test('Update username with empty username', async ({ page }) => {
        
        });

    });

    test.describe('Test Suite for Updating Password', () => {

        test('Update password with allowed values', async ({ page }) => {
        
        });

    });

    test.afterEach('Tear down for our tests', async()=>{

    });

});