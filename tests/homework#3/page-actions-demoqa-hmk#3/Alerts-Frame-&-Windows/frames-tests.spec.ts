import { test, expect } from '@playwright/test';

import { FramesPage } from './pages/frames-pages';

test.describe('Test suite for frames', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com');
    await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
    await page.getByText('Frames', { exact: true }).click();

});

    test('Testing presence of two framse on the webpage', async ({ page }) => {
        await expect(page.frameLocator('#frame1')).toBeDefined();
        await expect(page.frameLocator('#frame2')).toBeDefined();
        const framesPage = new FramesPage(page);
        await framesPage.frameOne();
    });

    test('Testing content inside the two frames on the webpage', async ({ page }) => {
        await page.locator('#frame1').contentFrame().locator('html').click();
        await page.locator('#frame2').contentFrame().getByRole('heading', { name: 'This is a sample page' }).click();

        //Assertion:
        const frame1 = page.frameLocator('#frame1');
        const frame2 = page.frameLocator('#frame2');
        await expect(frame1.locator('h1')).toHaveText('This is a sample page');
        await expect(frame2.locator('h1')).toHaveText('This is a sample page');
    });
       

});