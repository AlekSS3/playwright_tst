import { test, expect } from '@playwright/test';

test.describe('Test suite for accordian', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com');
    await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
    

});

test('', async ({ page }) => {
    
    //Assertion
  
});

test('T', async ({ page }) => {
    
    
    //Assertion
    
});



});