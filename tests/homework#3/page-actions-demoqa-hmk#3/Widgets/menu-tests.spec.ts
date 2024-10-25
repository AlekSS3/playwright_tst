import { test, expect } from '@playwright/test';

    test.describe('Test suite for Menu', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByRole('heading', { name: 'Widgets' }).click();
            await page.getByText('Menu', { exact: true }).click();
            
        });

        test('Test for clicking Main Item 1', async ({ page }) => {
            await page.getByRole('link', { name: 'Main Item 1' }).click();

            //Assertion
            await expect(page.getByRole('link', { name: 'Main Item 1' })).toHaveText('Main Item 1');
    
        });

        test('Test for clicking Main Item 2', async ({ page }) => {
            await page.getByRole('link', { name: 'Main Item 2' }).hover();
            await page.getByRole('link', { name: 'Sub Item' }).first().click();
            await page.getByRole('link', { name: 'Main Item 2' }).hover();
            await page.getByRole('link', { name: 'SUB SUB LIST »' }).hover();
            await page.getByRole('link', { name: 'Sub Sub Item 1' }).click();
            await page.getByRole('link', { name: 'Main Item 2' }).hover();
            await page.getByRole('link', { name: 'SUB SUB LIST »' }).hover();
            await page.getByRole('link', { name: 'Sub Sub Item 2' }).click();

            //Assertions
            await expect(page.getByRole('link', { name: 'Main Item 2' })).toHaveText('Main Item 2');
            await expect(page.getByRole('link', { name: 'SUB SUB LIST »' })).toHaveText('SUB SUB LIST »');
            await expect(page.getByRole('link', { name: 'Sub Sub Item 2'})).toHaveText('Sub Sub Item 2');
        
        });

        test('Test for clicking Main Item 3', async ({ page }) => {
            await page.getByRole('link', { name: 'Main Item 3' }).click();

            //Assertion
            await expect(page.getByRole('link', { name: 'Main Item 3' })).toHaveText('Main Item 3');
    
        });

});