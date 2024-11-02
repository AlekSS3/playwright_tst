import { test, expect } from '@playwright/test';

import { TabsPage } from './pages/tabs-pages';

test.describe('Test suite for tabs', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByRole('heading', { name: 'Widgets' }).click();
        await page.getByText('Tabs').click();

});

    test('Test for verifying first tab on the webapage', async ({ page }) => {
     
        //Assertion
        await expect(page.getByText('Lorem Ipsum is simply dummy')).toBeVisible();

    });

    test('Test for verifying second tab on the webapage', async ({ page }) => {
        await page.getByRole('tab', { name: 'Origin' }).click();
        await page.getByText('Contrary to popular belief,').click();
        await page.getByText('The standard chunk of Lorem').click();
        //const tabsPage = new TabsPage(page);
        //await tabsPage.clickTabOrigin();
        
        //Assertions
        await expect(page.getByText('Contrary to popular belief,')).toBeVisible();
        await expect(page.getByText('The standard chunk of Lorem')).toBeVisible();
    });

    test('Test for verifying third tab on the webapage', async ({ page }) => {
        await page.getByRole('tab', { name: 'Use' }).click();
        //const tabsPage = new TabsPage(page);
        //await tabsPage.clickTabUse();

        //Assertion

        await expect(page.getByText('It is a long established fact')).toBeVisible();

    });

    test('Test for verifying fourth tab on the webapage', async ({ page }) => {
         await page.getByText('WhatOriginUseMore').click();
        //const tabsPage = new TabsPage(page);
        //await tabsPage.clickTabMore();



    });

    test('Test for clicking on multiple tabs on the webpage', async ({ page }) => {
         await page.getByRole('tab', { name: 'Origin' }).click();
         await page.getByRole('tab', { name: 'Use' }).click();
         await page.getByRole('tab', { name: 'What' }).click();
         await page.getByText('WhatOriginUseMore').click();
        //const tabsPage = new TabsPage(page);
       // await tabsPage.clickTabOrigin();
       // await tabsPage.clickTabUse();
       // await tabsPage.clickTabWhat();
       // await tabsPage.clickTabMore();



    });



});



