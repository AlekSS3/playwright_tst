import { test, expect } from '@playwright/test';

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

            //Assertions
            const dropText = await droppable.innerText();
            await expect(dropText).toContain('Dropped!');
            await expect(draggable).toContainText('Acceptable');
        
        });
            



        test('Test for dragging "Not Acceptable" item to drop field', async ({ page }) => {
            // Navigate to the Droppable section and select the Accept tab
            await page.getByRole('tab', { name: 'Accept' }).click();
            
            // Locate draggable "Not Acceptable" and the droppable target field
            const notAcceptableItem = page.getByText('Not Acceptable');
            const dropHereField = page.locator('div#droppable').first();
        
            // Ensure the draggable item is visible
            //await expect(notAcceptableItem).toBeVisible({ timeout: 10000 });
            //await expect(droppable).toBeVisible({ timeout: 10000 });

            // Perform drag-and-drop action
            await notAcceptableItem.dragTo(dropHereField);
        
            // Assertion: Check that the drop field does not accept "Not Acceptable"
            await expect(dropHereField).toContainText('Drop here');
            await expect(notAcceptableItem).toContainText('Not Acceptable');
        });

        test('Test for dragging "Not Acceptable" item to drop field1', async ({ page }) => {
            // Step 1: Navigate to the Droppable section and select the Accept tab
            await page.getByRole('tab', { name: 'Accept' }).click();
        
            await page.locator('#notAcceptable').dragTo(page.locator('#droppable'));
            // Step 2: Locate draggable "Not Acceptable" item and the "Drop here" field
            //const notAcceptableItem = page.locator('#notAcceptable');
            //const dropHereField = page.locator('#droppable').first();
        
            // Step 3: Ensure both items are visible and stable before interaction
            //await expect(notAcceptableItem).toBeVisible({ timeout: 10000 });
            //await expect(dropHereField).toBeVisible({ timeout: 10000 });
        
            // Step 4: Perform drag-and-drop action with a hover and delay
            //await notAcceptableItem.hover(); // Ensure hover before dragging
            //await page.mouse.down();
            //await dropHereField.hover(); // Hover on drop area
            //await page.mouse.up();
        
            // Step 5: Assertion - Verify the "Drop here" field does not accept "Not Acceptable"
            //await expect(dropHereField).toHaveText('Drop here'); // Text should remain unchanged
        });

        test('', async ({ page }) => {
            await page.getByRole('tab', { name: 'Accept' }).click();


        });

            



    });