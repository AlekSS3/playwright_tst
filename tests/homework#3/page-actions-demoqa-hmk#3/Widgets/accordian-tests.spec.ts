import { test, expect } from '@playwright/test';

import { WidgetsPage } from './pages/accordian-pages';

test.describe('Test suite for accordians', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com');
    await page.getByRole('heading', { name: 'Widgets' }).click();
    await page.getByText('Accordian').click();

});

test('Test to collapse and expand first accordian on the webpage', async ({ page }) => {
    //Collapse first accordian
      await page.getByText('What is Lorem Ipsum?').click(); 
      await page.getByText('What is Lorem Ipsum?').click();
    //const widgetsPage = new WidgetsPage(page);
    //await widgetsPage.clickAccordianOne();
    //await widgetsPage.clickAccordianOne();

    //Assertion
    await expect(page.getByText('Lorem Ipsum is simply dummy')).toBeVisible(); 

});

test('Test to collapse and expand second accordian on the webpage', async ({ page }) => {
    //Expand first accordian
    await page.getByText('Where does it come from?').click();
    await page.getByText('Contrary to popular belief,').click();
    //Collapse second accordian
    await page.getByText('Where does it come from?').click();
    //const widgetsPage = new WidgetsPage(page);
    //await widgetsPage.clickAccordianTwo();
    //await widgetsPage.clickAccordianTwo();

    //Assertion
    await expect(page.getByText('Contrary to popular belief')).toBeVisible(); 

});

test('Test to collapse and expand third accordian on the webpage', async ({ page }) => {
    //Expand third accordian
    await page.getByText('Why do we use it?').click();
    await page.getByText('It is a long established fact').click();
    //Collapse third accordian
    await page.getByText('Why do we use it?').click();
    //const widgetsPage = new WidgetsPage(page);
    //await widgetsPage.clickAccordianThree();
    //await widgetsPage.clickAccordianThree();

    //Assertion
    await expect(page.getByText('It is a long established fact')).toBeVisible(); 

});



});