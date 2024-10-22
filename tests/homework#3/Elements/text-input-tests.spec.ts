import {test, expect} from '@playwright/test';

test.describe('Test suite for text input actions', () => {

        test('Test to open webpage', async ({ page }) => {
            //Navigate to page
            await page.goto('https://demoqa.com');
            //getByText
            await page.getByText('Elements').click();

        });

        test('Test to enter full name', async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByText('Elements').click();
            await page.getByText('Text Box').click();

                //getByPlaceholder
            await page.getByPlaceholder('Full Name').click();
            await page.getByPlaceholder('Full Name').fill('Aleks Stef');

        });

        test('Test to enter email', async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByText('Elements').click();
            await page.getByText('Text Box').click();
    
            await page.getByPlaceholder('Full Name').click();
            await page.getByPlaceholder('Full Name').fill('Aleks Stef');
             //getByPlaceholder
            await page.getByPlaceholder('name@example.com').click();
            await page.getByPlaceholder('name@example.com').fill('astef@mail.com');
        });
    
        test('Test to enter current address', async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByText('Elements').click();
            await page.getByText('Text Box').click();
            await page.getByPlaceholder('Full Name').click();
            await page.getByPlaceholder('Full Name').fill('Aleks Stef');
            await page.getByPlaceholder('name@example.com').click();
            await page.getByPlaceholder('name@example.com').fill('astef@mail.com');
            //getByPlaceholder
            await page.getByPlaceholder('Current Address').click();
            await page.getByPlaceholder('Current Address').fill('ABC, 1000 - Skopje');
        });

        test('Test to enter permanent address', async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByText('Elements').click();
            await page.getByText('Text Box').click();
            await page.getByPlaceholder('Full Name').click();
            await page.getByPlaceholder('Full Name').fill('Aleks Stef');
            await page.getByPlaceholder('name@example.com').click();
            await page.getByPlaceholder('name@example.com').fill('astef@mail.com');
            await page.getByPlaceholder('Current Address').click();
            await page.getByPlaceholder('Current Address').fill('ABC, 1000 - Skopje');
             //getByPlaceholder
            await page.locator('#permanentAddress').click();
            await page.locator('#permanentAddress').fill('DEF, 1000 - Skopje');
        });
        
        test('Fill all text fields and click "Submit" button', async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByText('Elements').click();
            await page.getByText('Text Box').click();
            await page.getByPlaceholder('Full Name').click();
            await page.getByPlaceholder('Full Name').fill('Aleks Stef');
            await page.getByPlaceholder('name@example.com').click();
            await page.getByPlaceholder('name@example.com').fill('astef@mail.com');
            await page.getByPlaceholder('Current Address').click();
            await page.getByPlaceholder('Current Address').fill('ABC, 1000 - Skopje');
            await page.locator('#permanentAddress').click();
            await page.locator('#permanentAddress').fill('DEF, 1000 - Skopje');
            //getByRole
            await page.getByRole('button', {name: 'Submit'}).click();
        });

        
    });