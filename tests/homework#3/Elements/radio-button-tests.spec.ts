import {test, expect} from '@playwright/test'

test.describe('Test suite for radio button actions', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Radio Button').click();

        }); 

    test('@fast est for clicking radio button "Yes"', async ({ page }) => {
        await page.getByText('Yes').click();
    });

    test('@fast test for clicking radio button "Impressive"', async ({ page }) => {
        await page.getByText('Impressive').click();
    });

    test('Test for checking unclickable disabled radio button "No"', async ({ page }) => {
        const noRadioButton = page.locator('input[id="noRadio"]');
        //Assertion
        await expect (noRadioButton).toBeDisabled();
    });

    test('Test for multiple clicks on radio buttons', async ({ page }) => {
        await page.getByText('Yes').click();
        await page.getByText('Impressive').click();
        await page.getByText('Yes').click();
        await page.getByText('Impressive').click();
    });


});