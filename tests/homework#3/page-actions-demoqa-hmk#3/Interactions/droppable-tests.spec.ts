import { test, expect } from '@playwright/test';

import { DragAndDropPage } from './pages/droppable-pages';

    test.describe('Test suite for droppable interactions', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByRole('heading', { name: 'Interactions' }).click();
            await page.getByText('Droppable').click();
            
        });

        test('Test for drag and drop option', async ({ page }) => {
            await page.getByText('Drag me', { exact: true }).click();
            const draggable = page.locator('#draggable');
              //const droppable = page.locator('#droppable');
            const droppable = page.locator('div#droppable').first();
            await expect(draggable).toBeVisible();

            await draggable.hover();
            await page.mouse.down();

            await droppable.hover();
            await page.mouse.up();

            //const dragAndDropPage = new DragAndDropPage(page);
            //await dragAndDropPage.dragAndDrop()
            //await dragAndDropPage.verifyDragAndDrop();

            //Assertions
            const dropText = await droppable.innerText();
            await expect(dropText).toContain('Dropped!');
            await expect(draggable).toContainText('Drag me');
        
        });

        test('Test for drag to not acceptable drop field', async ({ page }) => {
           await page.getByRole('tab', { name: 'Accept' }).click();
            await page.getByText('Not Acceptable').click();
                //const draggable = page.locator('#draggable');
                //const notAcceptableDropField = page.locator('#notAcceptableDropField').first();
            const notAcceptableDropField = page.getByTestId('Not Acceptable').first();
            const droppable = page.locator('div#droppable').first();
                //await expect(draggable).toBeVisible();
                //await expect(draggable).toBeVisible({timeout: 10000});

            await notAcceptableDropField.hover();
            await page.mouse.down();

            await droppable.hover();
            await page.mouse.up();

            //const dragAndDropPage = new DragAndDropPage(page);
            //await dragAndDropPage.clickAcceptBtn();
            //await dragAndDropPage.selectNotAcceptableField();
           // await dragAndDropPage.dragToNotAcceptableDropField();
            //await dragAndDropPage.verifyDragToNotAcceptable();
                    

            //Assertions
            const dropText = await notAcceptableDropField.innerText();
            await expect(dropText).toContain('Drop here');
            await expect(notAcceptableDropField).toContainText('Not Accepting');
            
        
        });

        test('Test to drag to acceptable drop field', async ({ page }) => {
              await page.getByText('Drag me', { exact: true }).click();
              const draggable = page.locator('#draggable');
                //const droppable = page.locator('#droppable');
            const droppable = page.locator('div#droppable').first();
            await expect(draggable).toBeVisible();

            await draggable.hover();
            await page.mouse.down();

            await droppable.hover();
            await page.mouse.up();

            //const dragAndDropPage = new DragAndDropPage(page);
            //await dragAndDropPage.selectDraggable();
            //await dragAndDropPage.dragAndDrop();
            //await dragAndDropPage.verifyDragToAcceptable();

            //Assertions
            const dropText = await droppable.innerText();
            await expect(dropText).toContain('Dropped!');
            //await expect(draggable).toContainText('Acceptable');
        
        });
            



        test('Test for dragging "Not Acceptable" item to drop field', async ({ page }) => {
            await page.getByRole('tab', { name: 'Accept' }).click();
            
            const notAcceptableItem = page.getByText('Not Acceptable');
            const dropHereField = page.locator('div#droppable').first();
        
            await notAcceptableItem.dragTo(dropHereField);
        
            //Assertions
            await expect(dropHereField).toContainText('Drop here');
            await expect(notAcceptableItem).toContainText('Not Acceptable');
        });

        test('Test for dragging "Not Acceptable" item to drop field1', async ({ page }) => {
    
            await page.getByRole('tab', { name: 'Accept' }).click();
        
            await page.locator('#notAcceptable').dragTo(page.locator('#droppable'));
        });

    

            



    });