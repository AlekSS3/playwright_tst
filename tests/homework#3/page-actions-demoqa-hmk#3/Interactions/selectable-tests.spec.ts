import { test, expect } from '@playwright/test';

    test.describe('Test suite for selectable interactions', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByRole('heading', { name: 'Interactions' }).click();
            await page.getByText('Selectable').click();
            
        });

        test('Test for selecting all items from the list', async ({ page }) => {
            await page.getByText('Cras justo odio').click();
            await page.getByText('Dapibus ac facilisis in').click();
            await page.getByText('Morbi leo risus').click();
            await page.getByText('Porta ac consectetur ac').click();

            //Assertions
            await expect(page.getByText('Cras justo odio')).toBeVisible();

        });
        test('Test for unselecting all items from the list', async ({ page }) => {
            await page.getByText('Cras justo odio').click();
            await page.getByText('Dapibus ac facilisis in').click();
            await page.getByText('Morbi leo risus').click();
            await page.getByText('Porta ac consectetur ac').click();
            await page.getByText('Cras justo odio').click();
            await page.getByText('Dapibus ac facilisis in').click();
            await page.getByText('Morbi leo risus').click();
            await page.getByText('Porta ac consectetur ac').click();

            //Assertions
            await expect(page.getByText('Cras justo odio')).toBeVisible();

        });

        test('Test for unselecting all items from the list_01', async ({ page }) => {
            const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac'];
            for (const itemText of items) {
                await page.getByText(itemText).click(); // Select item
                await page.getByText(itemText).click(); // Deselect item
            }
        
            // Assertions - Check that all items are in an unselected state
            for (const itemText of items) {
                await expect(page.getByText(itemText)).toBeVisible();
            }
        });
        


        test('Test for selecting all items from the grid', async ({ page }) => {
            await page.getByRole('tab', { name: 'Grid' }).click();
            await page.getByText('One').click();
            await page.getByText('Two').click();
            await page.getByText('Three').click();
            await page.getByText('Four').click();
            await page.getByText('Five').click();
            await page.getByText('Six').click();
            await page.getByText('Seven').click();
            await page.getByText('Eight').click();
            await page.getByText('Nine').click();

        });


        test('Test for selecting and unselecting all items from the grid', async ({ page }) => {
            await page.getByRole('tab', { name: 'Grid' }).click();
            const items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
            for (const itemText of items) {
                await page.getByText(itemText).click(); // Select item
                await page.getByText(itemText).click(); // Deselect item
            }

            // Assertion
            for (const itemText of items) {
                await expect(page.getByText(itemText)).toBeVisible();
            }

        });



    });