import { test, expect } from '@playwright/test';

test.describe('Tests for dialogs', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
        await page.getByText('Alerts', { exact: true }).click();
    });

    test('Test to accept dialog', async ({ page }) => {

        page.on('dialog', async dialog => {
            await dialog.accept();
        });

            await page.click('#confirmButton');

            //Assertion
            await expect(page.locator('#confirmResult')).toHaveText('You selected Ok');

    });


    test('Test to dismiss dialog', async ({ page }) => {

        page.on('dialog', async dialog => {
            await dialog.dismiss();
        });

            await page.click('#confirmButton');

            //Assertion
            await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');

    });




})