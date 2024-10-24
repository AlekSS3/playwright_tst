import { test, expect } from '@playwright/test';

test.describe('Test suite for alerts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com');
    await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
    await page.getByText('Alerts', { exact: true }).click();
});

test('Test for displaying alert by clickng button "Click me"', async ({ page }) => {
    const dialogPromise = new Promise((resolve) => {
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            resolve(dialog.message()); // Resolve with the dialog message
            dialog.dismiss().catch(() => {});
        });
    });

    await page.locator('#alertButton').click();

    // Assertion
    const dialogMessage = await dialogPromise;
    await expect(dialogMessage).toBe('You clicked a button');
});

    test('Test for displaying alert 5 seconds after clicking button "Click me"', async ({ page }) => {
        const dialogPromise = new Promise((resolve) => {
            page.once('dialog', dialog => {
                console.log(`Dialog message: ${dialog.message()}`);
                resolve(dialog.message());
                dialog.dismiss().catch(() => {});
            });
        });
    
        await page.locator('#timerAlertButton').click();
    
        // Wait for 5 seconds for the alert to appear
        await page.waitForTimeout(5000);

    // Assertion
    const dialogMessage = await dialogPromise;
    await expect(dialogMessage).toBe('This alert appeared after 5 seconds');
});

    test('Test for displaying confirm box after clicking button "Click me"', async ({ page }) => {
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
        });
        await page.locator('#timerAlertButton').click();
        const confirmDialogPromise = new Promise((resolve) => {
            page.once('dialog', dialog => {
            console.log(`Confirm dialog message: ${dialog.message()}`);
            resolve(dialog.message()); 
            dialog.dismiss().catch(() => {});
            });
        });
        await page.locator('#confirmButton').click();
    
        // Assertions
        const confirmDialogMessage = await confirmDialogPromise;
        await expect(confirmDialogMessage).toBe('Do you confirm action?');
        //await expect(page.getByText('You selected Ok')).toBeVisible();
    });

    test('Test for clicking "Cancel" on the confirm dialog after clicking button "Click me"', async ({ page }) => {
        page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
        });
        await page.locator('#timerAlertButton').click();
    
        
        const confirmDialogPromise = new Promise((resolve) => {
        page.once('dialog', dialog => {
        console.log(`Confirm dialog message: ${dialog.message()}`);
        resolve(dialog.message());
        dialog.dismiss().catch(() => {});
        });
        });
        await page.locator('#confirmButton').click();
    
        // Assertions
        const confirmDialogMessage = await confirmDialogPromise;
        await expect(confirmDialogMessage).toBe('Do you confirm action?');
        await expect(page.getByText('You selected Cancel')).toBeVisible();

    });
    
    test('Test for displaying prompt box after clicking button "Click me"', async ({ page }) => {
        const promptDialogPromise = new Promise((resolve) => {
            page.once('dialog', dialog => {
                console.log(`Dialog message: ${dialog.message()}`);
                dialog.accept('Alex').catch(() => {});
                resolve(dialog.message());
            });
        });
        await page.locator('#promtButton').click();
        const promptDialogMessage = await promptDialogPromise;
    
        // Assertions:
        await expect(promptDialogMessage).toBe('Please enter your name');
        await expect(page.getByText('You entered Alex')).toBeVisible();
    });



});


