import { test, expect } from '@playwright/test';

test('Test to register new user to Book Store', async ({ page }) => {
    await page.goto('https://demoqa.com');
    await page.getByRole('heading', { name: 'Book Store Application' }).click();
    await page.getByText('Book Store API').click();


});
