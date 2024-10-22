import {test, expect} from '@playwright/test';

test.describe('Test suite for checkbox actions', () => {

    test('Test to open page "https://demoqa.com/checkbox"', async({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Check Box').click();
    });

    test('Test to expand all check boxes', async({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Check Box').click();
        //getByLabel
        await page.getByLabel('Expand all').click();

    });

    test('Test to collapsе all check boxes', async({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Check Box').click();
        await page.getByLabel('Expand all').click();
        //getByLabel
        await page.getByLabel('Collapse all').click();
    });




});