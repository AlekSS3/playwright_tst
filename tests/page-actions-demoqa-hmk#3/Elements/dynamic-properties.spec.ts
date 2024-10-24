import {test, expect} from '@playwright/test';

test.describe('Test suite for dynamic properties', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Dynamic Properties').click();

    }); 

        test('Test for enabling button afer 5 seconds delay', async ({ page }) => {
            //const button = page.getByAltText('Will enable 5 seconds');
            await page.getByRole('button', { name: 'Will enable 5 seconds' }).click();
            await page.getByRole('button', { name: 'Visible After 5 Seconds' }).click();
    });

        test('', async ({ page }) => {
            await page.getByRole('button', { name: 'Color Change' }).click();
    });


});