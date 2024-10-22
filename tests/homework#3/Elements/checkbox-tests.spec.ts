import { test } from '@playwright/test';

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

});