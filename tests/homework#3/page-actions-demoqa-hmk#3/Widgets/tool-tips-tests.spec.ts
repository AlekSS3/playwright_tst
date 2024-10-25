import { test, expect } from '@playwright/test';

test.describe('Test suite for tool tips', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByRole('heading', { name: 'Widgets' }).click();
        await page.getByText('Tool Tips').click();

    });

    test('Test button "Hover me to see"', async ({ page }) => {
        await page.getByRole('button', { name: 'Hover me to see' }).hover();
    
        //Assertion
        await expect(page.getByText('You hovered over the Button')).toBeVisible();

    });

    test('Test hover over text field', async ({ page }) => {
        await page.getByPlaceholder('Hover me to see').hover();
        
        //Assertion
        await expect(page.getByText('You hovered over the text')).toBeVisible();
        
    });


    test('Test hover over a text link', async ({ page }) => {
        await page.getByRole('link', { name: 'Contrary' }).hover();

        //Assertion
        await expect(page.getByText('You hovered over the Contrary')).toBeVisible();
        
    });
    

    test('Test hover over a link', async ({ page }) => {
        await page.getByRole('link', { name: '1.10.32' }).hover();

        //Assertions
        await expect(page.getByText('You hovered over the')).toBeVisible();

        });
   
   
    });