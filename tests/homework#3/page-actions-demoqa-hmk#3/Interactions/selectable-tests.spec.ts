import { test, expect } from '@playwright/test';

    test.describe('Test suite for ', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByRole('heading', { name: 'Interactions' }).click();
  await page.getByText('Sortable').click();
            
        });




    });