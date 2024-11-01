import { test, expect } from '@playwright/test';

    test.describe('Test suite for resizable interactions', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByRole('heading', { name: 'Interactions' }).click();
            await page.getByText('Resizable').click();
    
        });

        test('Test for verifying initial sizes of resizable boxes', async ({ page }) => {
            const restrictedBox = page.locator('#resizableBoxWithRestriction');
            const width = await restrictedBox.evaluate(el => parseFloat(getComputedStyle(el).width));
            const height = await restrictedBox.evaluate(el => parseFloat(getComputedStyle(el).height));
            expect(width).toBe(200);
            expect(height).toBe(200);
        });

        test('Test for resize restricted box within limits', async ({ page }) => {
            const restrictedBox = page.locator('#resizableBoxWithRestriction');
            const resizeHandle = restrictedBox.locator('span');

            //maximum limits
            await resizeHandle.dragTo({ x: 350, y: 150 });
            const maxWidth = await restrictedBox.evaluate(el => parseFloat(getComputedStyle(el).width));
            const maxHeight = await restrictedBox.evaluate(el => parseFloat(getComputedStyle(el).height));
            expect(maxWidth).toBeLessThanOrEqual(500);
            expect(maxHeight).toBeLessThanOrEqual(300);

            //minimum limits
            await resizeHandle.dragTo({ x: -350, y: -150 });
            const minWidth = await restrictedBox.evaluate(el => parseFloat(getComputedStyle(el).width));
            const minHeight = await restrictedBox.evaluate(el => parseFloat(getComputedStyle(el).height));
            expect(minWidth).toBeGreaterThanOrEqual(150);
            expect(minHeight).toBeGreaterThanOrEqual(150);

        });

        test('Keyboard accessibility for resizing', async ({ page }) => {
            const resizeHandle = page.locator('#resizableBoxWithRestriction span');
        
            // Focus on the resize handle
            await resizeHandle.focus();
            await page.keyboard.press('ArrowRight');
            await page.keyboard.press('ArrowDown');
        
            // Verify size change
            const resizedWidth = await resizeHandle.evaluate(el => parseFloat(getComputedStyle(el.parentElement!).width));
            const resizedHeight = await resizeHandle.evaluate(el => parseFloat(getComputedStyle(el.parentElement!).height));
            expect(resizedWidth).toBe(200);
            expect(resizedHeight).toBe(200);
        });
        


    });