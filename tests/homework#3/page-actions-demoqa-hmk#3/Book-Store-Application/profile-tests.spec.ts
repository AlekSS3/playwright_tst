import { test, expect } from '@playwright/test';

import * as fs from 'fs';

const bookUser = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/bookUser.json', 'utf-8'));


test.describe('Test suite for bookstore application profile', () => {
    test.beforeEach(async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByRole('heading', { name: 'Book Store Application' }).click();
            await page.getByText('Profile').click();
    });

    test('Test to navigate to login page', async ({ page }) => {
        await page.getByRole('link', { name: 'login' }).click();
        await page.getByPlaceholder('UserName').click();
        await page.getByPlaceholder('UserName').fill('aleks_stef');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('1234568910');
        //await page.getByRole('button', { name: 'Login' }).click();
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill('Aleks');
        await page.getByPlaceholder('Last Name').click();
        await page.getByPlaceholder('Last Name').fill('Stef');
        await page.getByPlaceholder('UserName').click();
        await page.getByPlaceholder('UserName').fill('aleks_stef');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('1234568910');
        await page.getByRole('button', { name: 'Register' }).click();


            //const loginPage = new LoginPage(page);
            //await loginPage.clickRegisterLink();
            //await loginPage.clickNewUser();
            //await loginPage.enterFirstName(bookUser.firstName);
            //await loginPage.enterLastName(bookUser.lastName);
            //await loginPage.enterUserName(bookUser.username);
            //await loginPage.enterPassword(bookUser.password);
            //await loginPage.clickRegisterBtn();

    });

    test('Test to navigate to registation page', async ({ page }) => {
        await page.getByRole('link', { name: 'register' }).click();
        await page.getByPlaceholder('UserName').click();
        await page.getByPlaceholder('UserName').fill('aleks_stef');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('1234568910');
        await page.getByRole('button', { name: 'Login' }).click();


            //const loginPage = new LoginPage(page);
            //await loginPage.clickLoginLink();
            //await loginPage.enterUserName(bookUser.username);
            //await loginPage.clickLoginBtn();
            //await loginPage.clickRegisterBtn();

    });


});
