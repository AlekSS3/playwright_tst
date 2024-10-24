import { test, expect } from '@playwright/test';

test.describe('Test suite for practice form', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByRole('heading', { name: 'Forms' }).click();
        await page.getByText('Practice Form').click();
        });
    
        test('Test to enter "First Name"', async ({ page }) => {
            await page.getByPlaceholder('First Name').click();
            await page.getByPlaceholder('First Name').fill('Alex');

        });


        test('Test to enter "Last Name"', async ({ page }) => {
            await page.getByPlaceholder('Last Name').click();
            await page.getByPlaceholder('Last Name').fill('Stef');

        });

        test('Test to enter email', async ({ page }) => {
            await page.getByPlaceholder('name@example.com').click();
            await page.getByPlaceholder('name@example.com').fill('alex@mail.com');

        });

        test('Test to select gender', async ({ page }) => {
            await page.getByText('Female').click();

        });

        test('Test to enter mobile number', async ({ page }) => {
            await page.getByPlaceholder('Mobile Number').click();
            await page.getByPlaceholder('Mobile Number').fill('1234567891');

        });


        test('Test to select date of birth', async ({ page }) => {
            await page.locator('#dateOfBirthInput').click();
            await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('5');
            await page.getByRole('combobox').nth(1).selectOption('1983');

        });


        test('Test to enter "Subjects"', async ({ page }) => {
            await page.locator('.subjects-auto-complete__value-container').click();
            await page.locator('#subjectsInput').fill('psychology, social behaviour');

        });

        test('Test to check hobbies', async ({ page }) => {
            await page.locator('#hobbiesWrapper div').filter({ hasText: 'Hobbies' }).click();
            await page.getByText('Sports').click();
            await page.getByText('Reading').click();

        });


        test('Test to select picture', async ({ page }) => {
            await page.getByLabel('Select picture').click();
            await page.getByLabel('Select picture').setInputFiles('/Users/aleksandra/Group1Playwright');

        });


        test('Test to enter "Current Address"', async ({ page }) => {
            await page.getByPlaceholder('Current Address').click();
            await page.getByPlaceholder('Current Address').fill('BDAS Comunity');

        });

        test('Test to select "State"', async ({ page }) => {
            await page.locator('.css-tlfecz-indicatorContainer').first().click();
            await page.getByText('NCR', { exact: true }).click();

        });


        test('Test select "City"', async ({ page }) => {
            await page.locator('.css-tlfecz-indicatorContainer').first().click();
            await page.getByText('NCR', { exact: true }).click();
            await page.locator('#city svg').click();
            await page.getByText('Noida').click();
            ;
        });

        test('Test to click button "Submit"', async ({ page }) => {
            await page.getByRole('button', { name: 'Submit' }).click();

        });

        test('Test for completing the student registration form flow', async ({ page }) => {
            await page.getByPlaceholder('First Name').click();
            await page.getByPlaceholder('First Name').fill('Alex');
            await page.getByPlaceholder('Last Name').click();
            await page.getByPlaceholder('Last Name').fill('Stef');
            await page.getByPlaceholder('name@example.com').click();
            await page.getByPlaceholder('name@example.com').fill('alex@mail.com');
            await page.getByText('Female').click();
            await page.getByPlaceholder('Mobile Number').click();
            await page.getByPlaceholder('Mobile Number').fill('1234567891');
            await page.locator('#dateOfBirthInput').click();
            await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('5');
            await page.getByRole('combobox').nth(1).selectOption('1983');
            await page.locator('.subjects-auto-complete__value-container').click();
            await page.locator('#subjectsInput').fill('psychology, social behaviour');await page.locator('#hobbiesWrapper div').filter({ hasText: 'Hobbies' }).click();
            await page.getByText('Sports').click();
            await page.getByText('Reading').click();await page.getByLabel('Select picture').click();
            await page.getByLabel('Select picture').setInputFiles('/Users/aleksandra/Group1Playwright');
            await page.getByPlaceholder('Current Address').click();
            await page.getByPlaceholder('Current Address').fill('BDAS Comunity');
            await page.locator('.css-tlfecz-indicatorContainer').first().click();
            await page.getByText('NCR', { exact: true }).click();
            await page.locator('#city svg').click();
            await page.getByText('Noida').click();
            await page.getByRole('button', { name: 'Submit' }).click();


        });
        


});