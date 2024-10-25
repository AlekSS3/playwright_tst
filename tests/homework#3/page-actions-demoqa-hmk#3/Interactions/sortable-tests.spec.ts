import { test, expect } from '@playwright/test';

    test.describe('Test suite for sorting of items', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByRole('heading', { name: 'Interactions' }).click();
            await page.getByText('Sortable').click();
        });

        test('Test for verifying initial order of items in list', async({ page }) => {
            await page.getByLabel('List').getByText('One').click();
            await page.getByLabel('List').getByText('Two').click();
            await page.getByLabel('List').getByText('Three').click();
            await page.getByLabel('List').getByText('Four').click();
            await page.getByLabel('List').getByText('Five').click();
            await page.getByLabel('List').getByText('Six').click();

            //Assertions
            const items = await page.locator('.vertical-list-container .list-group-item').allTextContents();
            await expect(items).toEqual(['One', 'Two', 'Three', 'Four', 'Five', 'Six']);

        });

        test('Test for verifying initial order of items in list_01', async ({ page }) => {
            const items = await page.locator('.vertical-list-container .list-group-item').allTextContents();
            expect(items).toEqual(['One', 'Two', 'Three', 'Four', 'Five', 'Six']); 
        });

        test('Test for changing list order by drag and dropt to other item', async ({ page }) => {
         
            const itemOne = page.locator('.vertical-list-container .list-group-item', { hasText: 'One' });
            const itemThree = page.locator('.vertical-list-container .list-group-item', { hasText: 'Three' });
            const itemFour = page.locator('.vertical-list-container .list-group-item', { hasText: 'Four' });

            await itemOne.hover();
            // Drag item "One" and drop it after item "Three"
            await itemOne.dragTo(itemThree);

            //Assertion
            const items = await page.locator('.vertical-list-container .list-group-item').allTextContents();
            expect(items).toEqual(['Two', 'Three', 'One', 'Four', 'Five', 'Six']); 
        });

        test('Test for changing list order by drag and drop two items', async ({ page }) => {
            // Drag item "One" to the position of item "Three"
            await page.dragAndDrop(
                '.vertical-list-container .list-group-item:text("One")', 
                '.vertical-list-container .list-group-item:text("Three")');
        
            // Drag item "Four" to the position of item "Three" (after "One")
            await page.dragAndDrop(
                '.vertical-list-container .list-group-item:text("Four")', 
                '.vertical-list-container .list-group-item:text("One")'
            );
            // Assertion
            const items = await page.locator('.vertical-list-container .list-group-item').allTextContents();
            expect(items).toEqual(['Two', 'Three', 'Four', 'One', 'Five', 'Six']);
        });

        test('Test for verifying initial order of items in grid', async ({ page }) => {
            const items = await page.locator('.vertical-list-container .list-group-item').allTextContents();
            expect(items).toEqual(['One', 'Two', 'Three', 'Four', 'Five', 'Six']); 
        });

        test('Test for sorting items in grid layout', async ({ page }) => {
            //Grid layout
            //await page.click('#demo-tab-grid');
            await page.getByRole('tab', { name: 'Grid' }).click();

            const itemOne = page.locator('.vertical-list-container .list-group-item', { hasText: 'One' });
            const itemFive = page.locator('.vertical-list-container .list-group-item', { hasText: 'Five' });
            await itemOne.dragTo(itemFive);
            
            //Assertion
            const items = await page.locator('.create-grid .list-group-item').allTextContents();
            expect(items).toEqual(['Two', 'Three', 'Four', 'One', 'Five', 'Six']);
        });
        
        


        
        




    });