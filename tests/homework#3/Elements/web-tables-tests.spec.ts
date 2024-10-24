import {test, expect} from '@playwright/test';

test.describe('Test suite for web tables actios', async() =>{
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Web Tables').click();
    });

    test('Test the "search" field', async ({ page }) => {
        await page.getByPlaceholder('Type to search').click();
        await page.getByPlaceholder('Type to search').fill('Cierra');
    });

    test('Test the "Add" button', async ({ page }) => {

    });


    test('Test for edit registration form', async ({ page }) => {

    });
    test('Test for deleting registration form', async ({ page }) => {

    });

    test('Test for ordering column "First Name" in ascending and descending order', async ({ page }) => {

    });

    test('Test for ordering column "Last Name" in ascending and descending order', async ({ page }) => {

    });

    test('Test for ordering column "Age" in ascending and descending order', async ({ page }) => {

    });

    test('Test for ordering column "Email" in ascending and descending order', async ({ page }) => {

    });
    test('Test for ordering column "Salary" in ascending and descending order', async ({ page }) => {

    });

    test('Test for ordering column "Department" in ascending and descending order', async ({ page }) => {

    });

    test('Test for pagination', async ({ page }) => {

    });


});