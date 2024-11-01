import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const userInfo = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/userInfo.json', 'utf-8'));

import { TextBoxPage } from './pages/text-input.page';

test.describe('Test suite for text input actions', () => {
  test.beforeEach(async ({ page }) => {
      await page.goto('https://demoqa.com');
      await page.getByText('Elements').click();
      await page.getByText('Text Box').click();
    });

    test('Test to open webpage', async ({ page }) => {
    });

    test('Test to enter full name', async ({ page }) => {
        await page.getByPlaceholder('Full Name').click();
        await page.getByPlaceholder('Full Name').fill('Aleks Stef');
        //const textBoxPage = new TextBoxPage(page);
        //await textBoxPage.typeFullName(userInfo.fullName);
    });

    test('Test to enter email', async ({ page }) => {
        await page.getByPlaceholder('name@example.com').click();
        await page.getByPlaceholder('name@example.com').fill('astef@mail.com');
        //const textBoxPage = new TextBoxPage(page);
        //await textBoxPage.typeEmail(userInfo.email);
    });

    test('Test to enter current address', async ({ page }) => {
        await page.getByPlaceholder('Current Address').click();
        await page.getByPlaceholder('Current Address').fill('ABC, 1000 - Skopje');
       //const textBoxPage = new TextBoxPage(page);
       //await textBoxPage.typeCurrentAddress(userInfo.currentAddress);
     });

    test('Test to enter permanent address', async ({ page }) => {
        //await page.locator('#permanentAddress').click();
        //await page.locator('#permanentAddress').fill('DEF, 1000 - Skopje');
       const textBoxPage = new TextBoxPage(page);
       await textBoxPage.typePermanentAddress(userInfo.permanentAddress);
    });

    test('Click "Submit" button', async ({ page }) => {
        await page.getByRole('button', { name: 'Submit' }).click();
        //const textBoxPage = new TextBoxPage(page);
        //await textBoxPage.clickSubmitButton();
    });

    test('Fill all text fields and click "Submit" button', async ({ page }) => {
        await page.getByPlaceholder('Full Name').click();
        await page.getByPlaceholder('Full Name').fill('Aleks Stef');
        await page.getByPlaceholder('name@example.com').click();
        await page.getByPlaceholder('name@example.com').fill('astef@mail.com');
        await page.getByPlaceholder('Current Address').click();
        await page.getByPlaceholder('Current Address').fill('ABC, 1000 - Skopje');
        await page.locator('#permanentAddress').click();
        await page.locator('#permanentAddress').fill('DEF, 1000 - Skopje');
        await page.getByRole('button', {name: 'Submit'}).click();
    });

});
