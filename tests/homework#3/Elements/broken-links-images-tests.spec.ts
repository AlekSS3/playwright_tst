import {test, expect} from '@playwright/test';

test.describe('Test suite for clicking links', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Broken Links - Images').click();

    }); 

        test('Test for veryfing valid link', async ({ page }) => {
            await page.getByRole('link', { name: 'Click Here for Valid Link' }).click();
        
            //Assertion
            await expect(page.getByRole('link', { name: 'Selenium Online Training' })).toBeVisible();
    
    });

        test('Test for veryfing broken link', async ({ page }) => {
            await page.getByRole('link', { name: 'Click Here for Broken Link' }).click();

            //Assertion
            await expect(page.getByText('This page returned a 500')).toBeVisible();
        

    });

        test('Test for veryfing valid image', async ({ page }) => {
            await page.locator('img').nth(2).click();

    });

        test('Test for veryfing broken image', async ({ page }) => {
            await page.locator('img').nth(3).click();

    });





});