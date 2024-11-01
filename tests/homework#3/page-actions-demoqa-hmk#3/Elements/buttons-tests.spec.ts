import {test, expect} from '@playwright/test';

import { ButtonsPage } from './pages/buttons-page';

test.describe('Test suite for clicking buttons actions', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Buttons').click();
    }); 

    test('Test for double click button', async ({ page }) => {
        await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
        //const buttonsPage = new ButtonsPage (page);
        //await buttonsPage.doubleClick();
    });


    test('Test for right click button', async ({ page }) => {
        await page.getByRole('button', { name: 'Right Click Me' }).click();
       // const buttonsPage = new ButtonsPage (page);
        //await buttonsPage.rightClick();
    });

    test('Test for click button', async ({ page }) => {
        await page.getByRole('button', { name: 'Click Me', exact: true }).click();
        //const buttonsPage = new ButtonsPage (page);
        //await buttonsPage.click();
    });


});