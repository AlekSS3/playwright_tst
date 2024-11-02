import { test, expect } from '@playwright/test';

import { DatePickerPage } from './pages/date-picker-pages';

test.describe('Test suite for date picker', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByRole('heading', { name: 'Widgets' }).click();
        await page.getByText('Date Picker').click();

});

test('Test for selecting "Date"', async ({ page }) => {
    await page.locator('#datePickerMonthYearInput').click();
    await page.getByLabel('Choose Thursday, October 24th,').click();
    //const datePickerPage = new DatePickerPage(page);
    //await datePickerPage.selectDate();
  
});

test('Test for selecting "Date And Time"', async ({ page }) => {
    await page.locator('#dateAndTimePickerInput').click();
    await page.getByLabel('Choose Thursday, October 24th,').click();
    await page.getByText('01:30').click();
    //const datePickerPage = new DatePickerPage(page);
    //await datePickerPage.selectDateAndTime();

});


});