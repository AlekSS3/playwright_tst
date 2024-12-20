import {test, expect} from '@playwright/test';
import exp from 'constants';
import * as fs from 'fs';
const register = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/register.json', 'utf-8'));

import { WebTablesPage } from './pages/web-tables-pages';


test.describe('Test suite for web tables actios', async() =>{
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Web Tables').click();
    });

    test('Test the "search" field', async ({ page }) => {
          await page.getByPlaceholder('Type to search').click();
          await page.getByPlaceholder('Type to search').fill('Cierra');
       // const webTablesPage = new WebTablesPage(page);
       // await webTablesPage.clickSearchBtn();
       // await webTablesPage.typeSearchBtn(register.searchBtn);
    });

    test('Test the "Add" button', async ({ page }) => {
        await page.getByRole('button', { name: 'Add' }).click();
        //const webTablesPage = new WebTablesPage(page);
        //await webTablesPage.clickAddBtn();
    });

    test('Test the "Registration Form"', async ({ page }) => {
          await page.getByRole('button', { name: 'Add' }).click();
          await page.getByPlaceholder('First Name').click();
          await page.getByPlaceholder('First Name').fill('Aleks');
          await page.getByPlaceholder('Last Name').click();
          await page.getByPlaceholder('Last Name').fill('Stef');
          await page.getByPlaceholder('name@example.com').click();
          await page.getByPlaceholder('name@example.com').fill('aleks@mail.com');
          await page.getByPlaceholder('Age').click();
          await page.getByPlaceholder('Age').fill('41');
          await page.getByPlaceholder('Salary').click();
          await page.getByPlaceholder('Salary').fill('2000');
          await page.getByPlaceholder('Department').click();
          await page.getByPlaceholder('Department').fill('Quality Assurance');
        //const webTablesPage = new WebTablesPage(page);
        //await webTablesPage.clickAddBtn();
       // await webTablesPage.clickFirstName();
        //await webTablesPage.typeFirstName(register.firstName);
       // await webTablesPage.clickAge1();
        //await webTablesPage.typeAge(register.age);
        //await webTablesPage.clickSalary();
        //await webTablesPage.typeSalary(register.salary);
        //await webTablesPage.clickDepartment();
        //await webTablesPage.typeDepartment(register.department);
       // await webTablesPage.clickSubmitBtn();
    });

    test('Test for edit registration form', async ({ page }) => {
        await page.locator('#edit-record-1 path').click();
        await page.getByPlaceholder('name@example.com').click();
        await page.getByPlaceholder('name@example.com').fill('cierra1@example.com');
        await page.getByPlaceholder('Age').click();
        await page.getByPlaceholder('Age').fill('41');
        await page.getByRole('button', { name: 'Submit' }).click();

        //Assertions for checking edited age
        await expect(page.getByRole('gridcell', { name: '40' })).toBeVisible();


    });
    test('Test for deleting registration form', async ({ page }) => {
        await page.locator('#delete-record-1 path').click();
        //const webTablesPage = new WebTablesPage(page);
       // await webTablesPage.clickRemoveBtn();
    });

    test.describe('Column Ordering Tests', () => {

        test('Test for ordering column "First Name" in ascending and descending order', async ({ page }) => {
            await page.getByText('First Name').click();
            await page.getByRole('columnheader', { name: 'First Name' }).click();
            //const webTablesPage = new WebTablesPage(page);
            //await webTablesPage.clickFirstNameBtn();
            //await webTablesPage.clickFirstNameBtn();
        });
    
        test('Test for ordering column "Last Name" in ascending and descending order', async ({ page }) => {
            await page.getByText('Last Name').click();
            await page.getByText('Last Name').click();
            //const webTablesPage = new WebTablesPage(page);
            //await webTablesPage.clickLastNameBtn();
            //await webTablesPage.clickLastNameBtn();
        });
    
        test('Test for ordering column "Age" in ascending and descending order', async ({ page }) => {
            await page.getByText('Age', { exact: true }).click();
            await page.getByText('Age', { exact: true }).click();
            //const webTablesPage = new WebTablesPage(page);
            //await webTablesPage.clickAgeBtn();
            //await webTablesPage.clickAgeBtn();
        });
    
        test('Test for ordering column "Email" in ascending and descending order', async ({ page }) => {
            await page.getByText('Email').click();
            await page.getByRole('columnheader', { name: 'Email' }).click();
             //const webTablesPage = new WebTablesPage(page);
             //await webTablesPage.clickEmailBtn();
             //await webTablesPage.clickEmailBtn();
        });
    
        test('Test for ordering column "Salary" in ascending and descending order', async ({ page }) => {
            await page.getByText('Salary').click();
            await page.getByRole('columnheader', { name: 'Salary' }).click();
            //const webTablesPage = new WebTablesPage(page);
             //await webTablesPage.clickSalaryBtn();
             //await webTablesPage.clickSalaryBtn();
            
        });
    
        test('Test for ordering column "Department" in ascending and descending order', async ({ page }) => {
            await page.getByText('Department').click();
            await page.getByRole('columnheader', { name: 'Department' }).click();
            //const webTablesPage = new WebTablesPage(page);
             //await webTablesPage.clickDepartmentBtn();
             //await webTablesPage.clickDepartmentBtn();
        });
    });

    test('Test for pagination', async ({ page }) => {
        await page.getByLabel('rows per page').selectOption('5');
        await page.getByLabel('rows per page').selectOption('20');
    });

    test('@slow test the "Registration Form" for multiple users', async ({ page }) => {
        async function registerUser(page, firstName, lastName, email, age, salary, department) {
            await page.getByRole('button', { name: 'Add' }).click();
            await page.getByPlaceholder('First Name').click();
            await page.getByPlaceholder('First Name').fill(firstName);
            await page.getByPlaceholder('Last Name').click();
            await page.getByPlaceholder('Last Name').fill(lastName);
            await page.getByPlaceholder('name@example.com').click();
            await page.getByPlaceholder('name@example.com').fill(email);
            await page.getByPlaceholder('Age').click();
            await page.getByPlaceholder('Age').fill(age);
            await page.getByPlaceholder('Salary').click();
            await page.getByPlaceholder('Salary').fill(salary);
            await page.getByPlaceholder('Department').click();
            await page.getByPlaceholder('Department').fill(department);
            await page.getByRole('button', { name: 'Submit' }).click();
        }
        
        await registerUser(page, 'Aleks', 'Stef', 'aleks@mail.com', '41', '2000', 'Quality Assurance');
        await registerUser(page, 'Elena', 'Aleks', 'elena@mail.com', '40', '1000', 'Quality Assurance');
        await registerUser(page, 'Stole', 'Popov', 'stole@mail.com', '33', '8000', 'Call Center');
        await registerUser(page, 'Rex', 'Dex', 'rex@mail.com', '41', '2000', 'SEO');
        await registerUser(page, 'Max', 'Dex', 'max@mail.com', '41', '2000', 'SEO');
        //Clicking buttons "Next" and "Previous"
        //await page.getByRole('button', { name: 'Next' }).click();
        //await page.getByRole('button', { name: 'Previous' }).click();

    })

});