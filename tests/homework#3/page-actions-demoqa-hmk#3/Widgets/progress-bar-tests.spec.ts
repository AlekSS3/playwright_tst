import { test, expect } from '@playwright/test';

test.describe('Test suite for progress bar', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByRole('heading', { name: 'Widgets' }).click();
        await page.getByText('Progress Bar').click();

    });

    test('Test Single Stop on Progress Bar', async ({ page }) => {
        await page.getByRole('button', { name: 'Start' }).click();
        await page.getByRole('button', { name: 'Stop' }).click();
    
  
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
    
    });



});