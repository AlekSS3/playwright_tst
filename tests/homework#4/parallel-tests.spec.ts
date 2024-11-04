import { test } from '@playwright/test';

test.describe.configure ({ mode: 'parallel'});

    test('runs in parallel 1: Test to accept dialog ', async ({ page }) => { 
            await page.goto('https://demoqa.com');
            await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
            await page.getByText('Alerts', { exact: true }).click();

            page.on('dialog', async dialog => {
                await dialog.accept();
            });

                await page.click('#confirmButton');
        });

    test('runs in parallel 2: Test to dismiss dialog', async ({ page }) => {
        
            await page.goto('https://demoqa.com');
            await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
            await page.getByText('Alerts', { exact: true }).click();

            page.on('dialog', async dialog => {
            await dialog.dismiss();
            });

            await page.click('#confirmButton');

});