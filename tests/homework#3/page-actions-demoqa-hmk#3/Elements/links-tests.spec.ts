import {test, expect} from '@playwright/test';

import { LinksPage } from './pages/links-pages';
import { link } from 'fs';

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
            //const linksPage = new LinksPage(page);
            //await linksPage.clickHomeSimpleLink();
           
            //Open new Page
            await newPage.waitForLoadState();
        });
        
         test('Test for opening link "Homeavc29" ', async ({ page }) => {
            await page.locator('path').first().click();
            await page.getByText('Links', { exact: true }).click();
            const page1Promise = page.waitForEvent('popup');
            await page.getByRole('link', { name: 'Homeavc29' }).click();
            const page1 = await page1Promise;
            //const linksPage = new LinksPage(page);
            //await linksPage.clickHome3fu5xDynamicLink();


        });

        test('Test for clicking link "Created"', async ({ page }) => {
            await page.getByRole('link', { name: 'Created' }).click();
            //const linksPage = new LinksPage(page);
            //await linksPage.clickCreatedLink();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 201 and status text Created')
            
        });

        test('Test for clicking link "No Content" ', async ({ page }) => {
            await page.getByRole('link', { name: 'No Content' }).click();
            //const linksPage = new LinksPage(page);
            //await linksPage.clickNoContentLink();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 204 and status text No Content');
    
        });

        test('Test for clicking link "Moved" ', async ({ page }) => {
            await page.getByRole('link', { name: 'Moved' }).click();
            //const linksPage = new LinksPage(page);
            //await LinksPage.clickMovedLink();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 301 and status text Moved Permanently');
    
        });

        test('Test for clicking link "Bad Request" ', async ({ page }) => {
            await page.getByRole('link', { name: 'Bad Request' }).click();
            //const linksPage = new LinksPage(page);
            //await LinksPage.clickBadRequest();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 400 and status text Bad Request');
    
        });

        test('Test for clicking link "Unauthorized" ', async ({ page }) => {
            await page.getByRole('link', { name: 'Unauthorized' }).click();
            //const linksPage = new LinksPage(page);
            //await LinksPage.clickUnauthorizedLink();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 401 and status text Unauthorized');
    
        });

        test('Test for clicking link "Forbidden" ', async ({ page }) => {
            await page.getByRole('link', { name: 'Forbidden' }).click();
            //const linksPage = new LinksPage(page);
            //await LinksPage.clickForbiddenLink();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 403 and status text Forbidden');
    
        });

        test('Test for clicking link "Not Foundt" ', async ({ page }) => {
            await page.getByRole('link', { name: 'Not Found' }).click();
            //const linksPage = new LinksPage(page);
            //await LinksPage.clickNotFoundLink();

            //Assertion
            await expect(page.getByText('Link has responded with staus')).toContainText('Link has responded with staus 404 and status text Not Found');
    
        });









    
        

    });

