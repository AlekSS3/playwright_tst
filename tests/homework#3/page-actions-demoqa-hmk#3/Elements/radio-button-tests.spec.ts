import {test, expect} from '@playwright/test'

import { RadioButtonsPage } from './pages/radio-button-page';

test.describe('Test suite for radio button actions', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Radio Button').click();
        }); 

    test('@fast est for clicking radio button "Yes"', async ({ page }) => {
        await page.getByText('Yes').click();
        //const radioButtonsPage = new RadioButtonsPage (page);
        //await radioButtonsPage.clickRadioButtonYes();
    });

    test('@fast test for clicking radio button "Impressive"', async ({ page }) => {
        await page.getByText('Impressive').click();
        //const radioButtonsPage = new RadioButtonsPage (page);
       // await radioButtonsPage.clickRadioButtonImpressive();
    });

    test('Test for checking unclickable disabled radio button "No"', async ({ page }) => {
        const noRadioButton = page.locator('input[id="noRadio"]');
        //const noRadioButton = radioPage.noRadioButton;
        //await expect(noRadioButton).toBeDisabled();

        // Assertion to check if the 'No' label is correctly linked and visible
        //const noLabelBtn = radioPage.noLabelBtn;
        //await expect(noLabelBtn).toBeVisible();
        await expect (noRadioButton).toBeDisabled();
    });
        
    test('Test for multiple clicks on radio buttons', async ({ page }) => {
        await page.getByText('Yes').click();
        await page.getByText('Impressive').click();
        await page.getByText('Yes').click();
        await page.getByText('Impressive').click();
        const radioButtonsPage = new RadioButtonsPage (page);
        //await radioButtonsPage.clickRadioButtonYes();
        //await radioButtonsPage.clickRadioButtonYes();
        //await radioButtonsPage.clickRadioButtonYes();
        //await radioButtonsPage.clickRadioButtonYes();
    });


});