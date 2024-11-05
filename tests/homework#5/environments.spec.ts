import { test } from '@playwright/test';


test.only('Working with environments', async ({ page }) => {
    console.log(process.env.URL);
    console.log(process.env.USERNAME);
  
});
