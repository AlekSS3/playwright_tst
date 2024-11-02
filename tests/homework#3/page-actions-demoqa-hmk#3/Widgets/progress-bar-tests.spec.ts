import { test, expect } from '@playwright/test';

import { ProgressBarPage } from './pages/progress-bar-pages';

test.describe('Test suite for progress bar', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByRole('heading', { name: 'Widgets' }).click();
        await page.getByText('Progress Bar').click();

    });

    test('Test Single Stop on Progress Bar', async ({ page }) => {
        await page.getByRole('button', { name: 'Start' }).click();
        await page.getByRole('button', { name: 'Stop' }).click();
       // const progressBarPage = new ProgressBarPage(page);
       // await progressBarPage.clickStartBtn();
       // await progressBarPage.clickStopBrn();
    
  
    });

    test('Testing Multiple Stops in Progress Bar', async ({ page }) => {
        await page.getByRole('button', { name: 'Start' }).click();
        await page.getByRole('button', { name: 'Stop' }).click();
        await page.getByRole('button', { name: 'Start' }).click();
        await page.getByRole('button', { name: 'Stop' }).click();
        await page.getByRole('button', { name: 'Start' }).click();
        await page.getByRole('button', { name: 'Stop' }).click();
        await page.getByRole('button', { name: 'Start' }).click();
        await page.getByRole('button', { name: 'Stop' }).click();

       // const progressBarPage = new ProgressBarPage(page);
       // await progressBarPage.clickStartBtn();
      //  await progressBarPage.clickStopBrn();
       // await progressBarPage.clickStartBtn();
      //  await progressBarPage.clickStopBrn();
      //  await progressBarPage.clickStartBtn();
       // await progressBarPage.clickStopBrn();
       // await progressBarPage.clickStartBtn();
       // await progressBarPage.clickStopBrn();
       
    });



});