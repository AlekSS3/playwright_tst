import { test, expect } from '@playwright/test';

test.describe('Test suite for browser windows', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com');
    await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
    await page.getByText('Browser Windows').click();

});
    test('Test for clicking button "New Tab"', async ({ page }) => {
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('button', { name: 'New Tab' }).click();
        const page1 = await page1Promise;

        //Assertion
        await expect(page1.getByRole('heading', { name: 'This is a sample page' })).toBeVisible();

});

    test('Test for clicking button "New Window"', async ({ page }) => {
        const page2Promise = page.waitForEvent('popup');
        await page.getByRole('button', { name: 'New Window', exact: true }).click();
        const page2 = await page2Promise;

        //Assertion
        await expect(page2.getByRole('heading', { name: 'This is a sample page' })).toBeVisible();


    });


    test('Test for clicking button "New Window Message"', async ({ page }) => {
        const page4Promise = page.waitForEvent('popup');
        await page.getByRole('button', { name: 'New Window Message' }).click();
        const page4 = await page4Promise;

        //Assertion
        await expect(page4.getByText('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.')).toBeVisible();


    });




 });
