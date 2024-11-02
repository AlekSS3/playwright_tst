import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const colors = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/colors.json', 'utf-8'));

import { AutoCompletePage } from './pages/auto-complete-pages';

test.describe('Test suite for autocompletion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com');
    await page.getByRole('heading', { name: 'Widgets' }).click();
    await page.getByText('Auto Complete').click();

});

test('Test for multiple color names', async ({ page }) => {
    await page.locator('.auto-complete__value-container').first().click();
    await page.locator('#autoCompleteMultipleInput').fill('r');
    await page.getByText('Red', { exact: true }).click();
    await page.locator('#autoCompleteMultipleInput').fill('g');
    await page.getByText('Green', { exact: true }).click();
    //const autoCompletePage = new AutoCompletePage(page);
    //await autoCompletePage.clickInputField();
    //await autoCompletePage.typeInputField1(colors.colorOne);
    //await page.waitForSelector('.auto-complete__option');

    
    
    //Assertions
    await expect(page.getByText('Red')).toBeVisible();
    await expect(page.getByText('Green', { exact: true })).toBeVisible();
  
});

test('Test for single color name', async ({ page }) => {
    await page.locator('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container').click();
    await page.locator('#autoCompleteSingleInput').fill('Bl');
    await page.getByText('Blue', { exact: true }).click();

    //Assertion
   //await expect(page.locator('#autoCompleteSingleInput')).toHaveValue('Blue');

});



});