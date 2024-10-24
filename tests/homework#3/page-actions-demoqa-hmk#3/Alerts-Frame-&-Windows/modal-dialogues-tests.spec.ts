import { test, expect } from '@playwright/test';

test.describe('Test suite for nested frames', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com');
    await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
    await page.getByText('Modal Dialogs').click();

});

test('Test to very displaying of small modal', async ({ page }) => {
    await page.getByRole('button', { name: 'Small modal' }).click();
    await page.getByText('This is a small modal. It has').click();
    //click button "Close"
    await page.locator('#closeSmallModal').click();
    
    //Assertion
    await expect(page.getByText('This is a small modal. It has very less content')).toBeVisible();
});

test('Test to verify displaying of large modal', async ({ page }) => {
    await page.getByRole('button', { name: 'Large modal' }).click();
    await page.getByText('Lorem Ipsum is simply dummy').click();
    //click button "Close"
    await page.locator('#closeLargeModal').click();
    
    //Assertion
    await expect(page.getByText('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')).toBeVisible();
});



});