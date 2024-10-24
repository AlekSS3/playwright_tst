import {test, expect} from '@playwright/test';

test.describe('Test suite for download and uploading files', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Upload and Download').click();

    }); 

        test('Test for downloading file', async ({ page }) => {
            const downloadPromise = page.waitForEvent('download');
            await page.getByRole('link', { name: 'Download' }).click();
            const download = await downloadPromise;
            const fileName = download.suggestedFilename();
            console.log(`Downloaded file: ${fileName}`);

    });

        test('Test for uploading file', async ({ page }) => {
            await page.getByLabel('Select a file').click();
            await page.getByLabel('Select a file').setInputFiles('/Users/aleksandra/Group1Playwright');

            //Assertion
            await expect(page.getByText('C:\\fakepath\\Group1Playwright')).toBeVisible();
            
    });



});