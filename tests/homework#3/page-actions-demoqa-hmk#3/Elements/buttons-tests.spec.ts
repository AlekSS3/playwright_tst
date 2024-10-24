import {test, expect} from '@playwright/test';

test.describe('Test suite for clicking buttons actions', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Buttons').click();
    }); 

    test('Test for double click button', async ({ page }) => {
        await page.getByRole('button', { name: 'Double Click Me' }).dblclick();

    });

    test('Test for right click button', async ({ page }) => {
        await page.getByRole('button', { name: 'Right Click Me' }).click();

    });

    test('Test for click button', async ({ page }) => {
        await page.getByRole('button', { name: 'Click Me', exact: true }).click();

    });


});