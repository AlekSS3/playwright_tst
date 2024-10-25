import { test, expect } from '@playwright/test';

test.describe('Test suite for selecting menu', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByRole('heading', { name: 'Widgets' }).click();
        await page.getByText('Select Menu').click();
    
    });

        test('Test for selecting value', async ({ page }) => {
            await page.locator('#withOptGroup svg').click();
            await page.getByText('Group 1, option 1', { exact: true }).click();
            
            //Assertion
            //await expect(page.getByText('Group 1, option 1')).toBeVisible();
            await expect(page.locator('#withOptGroup .css-1uccc91-singleValue')).toHaveText('Group 1, option 1');
    });

        test('Test for selecting "One"', async ({ page }) => {
            await page.locator('#selectOne svg').click();

            //Assertion
            await expect(page.getByText('Ms.', { exact: true })).toBeVisible();

    });

        test('Test for old style select menu', async ({ page }) => {
            await page.locator('#oldSelectMenu').selectOption('4');
            await page.locator('#oldSelectMenu').selectOption('3');

    });

        test('Test for multiselect drop down', async ({ page }) => {
            await page.locator('#selectMenuContainer svg').nth(2).click();
            await page.locator('#react-select-10-option-1').click();
            await page.locator('#react-select-10-option-3').click();
        
    });

        test('Test for standard multiselect', async ({ page }) => {
            await page.locator('#cars').selectOption('volvo');
            await page.locator('#cars').selectOption('saab');
            await page.locator('#cars').selectOption('opel');
            await page.locator('#cars').selectOption('audi');
          });
        
        
        
    });