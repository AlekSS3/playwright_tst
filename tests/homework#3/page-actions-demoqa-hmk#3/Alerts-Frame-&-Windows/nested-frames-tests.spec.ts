import { test, expect } from '@playwright/test';

test.describe('Test suite for nested frames', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com');
    await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
    await page.getByText('Nested Frames').click();


});

    test('Test for veryfing presence of parent frame and nested frame on the webpage', async ({ page }) => {
        const parentFrame = page.frameLocator('#frame1');
        const nestedFrame = parentFrame.frameLocator('#frame2');
        
        //Assertions:
        await expect(parentFrame).toBeDefined();
        await expect(nestedFrame).toBeDefined();
    });

    test('Testing content inside the parent and nested frames on the webpage', async ({ page }) => {
        const parentFrame = page.frameLocator('#frame1');
        const childFrame = parentFrame.frameLocator('iframe');
    
        // Assertions:
        await expect(childFrame.getByText('Child Iframe')).toBeVisible();
        await expect(parentFrame.getByText('Parent frame')).toBeVisible();
    });
       

});