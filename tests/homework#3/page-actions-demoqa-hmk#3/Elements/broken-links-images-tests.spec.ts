import {test, expect} from '@playwright/test';

import { BrokenPage } from './pages/broken-links-images-pages';

test.describe('Test suite for valid and broken links and images', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Broken Links - Images').click();

    }); 

        test('Test for veryfing valid link', async ({ page }) => {
            await page.getByRole('link', { name: 'Click Here for Valid Link' }).click();
            //const brokenPage = new BrokenPage(page);
            //await brokenPage.clickValidLink();
        
            //Assertion
            await expect(page.getByRole('link', { name: 'Selenium Online Training' })).toBeVisible();
    
    });

        test('Test for veryfing broken link', async ({ page }) => {
            await page.getByRole('link', { name: 'Click Here for Broken Link' }).click();
            //const brokenPage = new BrokenPage(page);
            //await brokenPage.clickBrokenLinl();

            //Assertion
            await expect(page.getByText('This page returned a 500')).toBeVisible();

    });

        test('Test for veryfing valid image', async ({ page }) => {
            await page.locator('img').nth(2).click();
            //const brokenPage = new BrokenPage(page);
            //await brokenPage.clickValidImage();

    });

        test('Test for veryfing broken image', async ({ page }) => {
            await page.locator('img').nth(3).click();
            //const brokenPage = new BrokenPage(page);
            //await brokenPage.clickBrokenImage();
    });


});