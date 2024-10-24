import { test, expect } from '@playwright/test';

test.describe('Test suite for checkbox actions', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the checkbox page before each test
    await page.goto('https://demoqa.com');
    await page.getByText('Elements').click();
    await page.getByText('Check Box').click();
  });

  test('Test to expand all check boxes', async ({ page }) => {
    await page.getByLabel('Expand all').click();
  });

  test('Test to collapse all check boxes', async ({ page }) => {
    await page.getByLabel('Expand all').click(); // Expand all checkboxes first
    await page.getByLabel('Collapse all').click(); // Then collapse them
  });

  test('@slow test to check folders under "Home"', async ({ page }) => {
    //Expand toggle
    await page.getByLabel('Toggle').click();
    //Check folders under "Home"
    await page.locator('label').filter({ hasText: 'Home' }).getByRole('img').first().click();
  
  });

  test('@slow test to uncheck folders under "Home"', async ({ page }) => {
    //Expand toggle
    await page.getByLabel('Toggle').click();
    //Check folders under "Home"
    await page.locator('label').filter({ hasText: 'Home' }).getByRole('img').first().click();
    //Uncheck folders under "Home"
    await page.locator('label').filter({ hasText: 'Home' }).locator('path').first().click();
  });

  test('@slow test for check and uncheck folders under "Home" previosly checked and expand the toggle', async ({ page }) => {
    //Check button "Home"
    await page.locator('#tree-node').getByRole('img').nth(3).click();
    //Expand toggle
    await page.getByLabel('Toggle').click();
    //Ucheck folders under "Home"
    await page.locator('label').filter({ hasText: 'Home' }).locator('path').first().click();
  });

  test('@fast test for check separate folders', async ({ page }) => {
    await page.getByLabel('Toggle').click();
    //Expanding toggle for folder "Desktop"
    await page.locator('li').filter({ hasText: /^Desktop$/ }).getByLabel('Toggle').click();
    //Expanding toggle for folder "Documents"
    await page.locator('li').filter({ hasText: /^Documents$/ }).getByLabel('Toggle').click();
    //Expanding toggle for folder "Downloads"
    await page.locator('li').filter({ hasText: /^Downloads$/ }).getByLabel('Toggle').click();
    //Checked all folders under "Desktop"
    await page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img').first().click();
    //Checked all folders under "Documents"
    await page.locator('label').filter({ hasText: 'Downloads' }).getByRole('img').first().click();
    //Checked all folders under "Downloads"
    await page.locator('label').filter({ hasText: 'Documents' }).getByRole('img').first().click();

});

test('Test for unchecked separate folders ', async ({ page }) => {
  await page.getByLabel('Toggle').click();
  //Expanding toggle for folder "Desktop"
  await page.locator('li').filter({ hasText: /^Desktop$/ }).getByLabel('Toggle').click();
  //Expanding toggle for folder "Documents"
  await page.locator('li').filter({ hasText: /^Documents$/ }).getByLabel('Toggle').click();
  //Expanding toggle for folder "Downloads"
  await page.locator('li').filter({ hasText: /^Downloads$/ }).getByLabel('Toggle').click();
  //Checked all folders under "Desktop"
  await page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img').first().click();
  //Checked all folders under "Documents"
  await page.locator('label').filter({ hasText: 'Downloads' }).getByRole('img').first().click();
  //Checked all folders under "Downloads"
  await page.locator('label').filter({ hasText: 'Documents' }).getByRole('img').first().click();
  //Uncheck folders under "Desktop"
  await page.locator('label').filter({ hasText: 'Desktop' }).locator('path').first().click();
  //Uncheck folders under "Downloads"
  await page.locator('label').filter({ hasText: 'Downloads' }).locator('path').first().click();
  //Uncheck folders under "Documents"
  await page.locator('label').filter({ hasText: 'Documents' }).locator('path').first().click();

});

  });