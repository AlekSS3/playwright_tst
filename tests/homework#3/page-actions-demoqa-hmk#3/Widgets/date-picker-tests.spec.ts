import { test, expect } from '@playwright/test';

test.describe('Test suite for accordian', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByRole('heading', { name: 'Widgets' }).click();
        await page.getByText('Date Picker').click();

});

test('Test for selecting "Date"', async ({ page }) => {
    await page.locator('#datePickerMonthYearInput').click();
    await page.getByLabel('Choose Thursday, October 24th,').click();
  
});

test('Test for selecting "Date And Time"', async ({ page }) => {
    await page.locator('#dateAndTimePickerInput').click();
    await page.getByLabel('Choose Thursday, October 24th,').click();
    await page.getByText('01:30').click();
    
});



});