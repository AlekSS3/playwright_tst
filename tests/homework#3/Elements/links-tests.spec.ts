import {test, expect} from '@playwright/test';

test.describe('Test suite for clicking links', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText('Elements').click();
        await page.getByText('Links', { exact: true }).click();
    }); 

    test('Test for opening link "Home"', async ({ page }) => {
            const [newPage] = await Promise.all([
                page.waitForEvent('popup'),
                page.getByRole('link', { name: 'Home', exact: true }).click(),
            ]);
            //Open new Page
            await newPage.waitForLoadState();
        });
        
         test('Test for opening link "Homeavc29" ', async ({ page }) => {
            await page.locator('path').first().click();
            await page.getByText('Links', { exact: true }).click();
            const page1Promise = page.waitForEvent('popup');
            await page.getByRole('link', { name: 'Homeavc29' }).click();
            const page1 = await page1Promise;

        });

        test('Test for clicking link "Created"', async ({ page }) => {
            await page.getByRole('link', { name: 'Created' }).click();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 201 and status text Created')

        });

        test('Test for clicking link "No Content" ', async ({ page }) => {
            await page.getByRole('link', { name: 'No Content' }).click();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 204 and status text No Content');
    
        });

        test('Test for clicking link "Moved" ', async ({ page }) => {
            await page.getByRole('link', { name: 'Moved' }).click();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 301 and status text Moved Permanently');
    
        });

        test('Test for clicking link "Bad Request" ', async ({ page }) => {
            await page.getByRole('link', { name: 'Bad Request' }).click();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 400 and status text Bad Request');
    
        });

        test('Test for clicking link "Unauthorized" ', async ({ page }) => {
            await page.getByRole('link', { name: 'Unauthorized' }).click();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 401 and status text Unauthorized');
    
        });

        test('Test for clicking link "Forbidden" ', async ({ page }) => {
            await page.getByRole('link', { name: 'Forbidden' }).click();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 403 and status text Forbidden');
    
        });

        test('Test for clicking link "Not Foundt" ', async ({ page }) => {
            await page.getByRole('link', { name: 'Not Found' }).click();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 404 and status text Not Found');
    
        });









    
        

    });

