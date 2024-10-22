import { test, expect } from '@playwright/test';


test.describe('Validations for e-commerc flows', () => {

    test('Test for login page', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
            
        // Assertions
        await expect(page.locator('[data-test="title"]')).toContainText('Products');
        await expect(page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toContainText('Add to cart');
        const buttonText = await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').textContent();
        expect(buttonText).toMatch('Add to cart');
        await expect(page.getByText('Swag Labs')).toBeVisible();
        await expect(page.getByText('$49.99')).toBeVisible();
        await expect(page.getByText('Name (A to Z)Name (A to Z)')).toBeVisible();
        await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveClass('shopping_cart_link');
        await expect(page.getByRole('button', { name: 'Open Menu' })).toBeEnabled();


    });

    test('Test for adding product to a cart', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
            
        // Assertions

        await expect(page.getByText('Swag Labs')).toBeVisible();
        await expect(page.locator('[data-test="cart-desc-label"]')).toContainText('Description');
        //Alternative
        const descriptionText = await page.locator('[data-test="cart-desc-label"]').textContent();
        expect(descriptionText).toMatch('Description');
        await expect(page.locator('[data-test="title"]')).toContainText('Your Cart');
        await expect(page.locator('[data-test="item-quantity"]')).toContainText('1');
        await expect(page.locator('[data-test="continue-shopping"]')).toBeEnabled();
        await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
        await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$15.99');
    });

    test('Test for checkout flow', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('Ale');
        await page.locator('[data-test="lastName"]').click();
        await page.locator('[data-test="lastName"]').fill('Ste');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('1000');
            
        // Assertions
        await expect(page.getByText('Swag Labs')).toBeVisible();
        await expect(page.locator('[data-test="continue"]')).toContainText('Continue');
        await expect(page.locator('[data-test="continue"]')).toBeEnabled();
        await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Your Information');
        await expect(page.getByRole('button', { name: 'Open Menu' })).toBeEnabled();
        //Alternative
        const isEnabled = await page.getByRole('button', { name: 'Open Menu' }).isEnabled();
        expect(isEnabled).toBe(true);
        await expect(page.locator('[data-test="cancel"]')).toContainText('Cancel');
        await expect(page.locator('[data-test="cancel"]')).toBeVisible();
        await expect(page.locator('[data-test="cancel"]')).toBeEnabled();
        //Alternatives
        const cancelButton = await page.locator('[data-test="cancel"]');
        expect(await cancelButton.isEnabled()).toBe(true);
        const isDisabled = await page.locator('[data-test="cancel"]').getAttribute('disabled');
        expect(isDisabled).toBeNull();
        
    });

    test('Test for unfinished checkout', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('Ale');
        await page.locator('[data-test="lastName"]').click();
        await page.locator('[data-test="lastName"]').fill('Ste');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('1000');
        await page.locator('[data-test="continue"]').click();

            
        // Assertions
        await expect(page.getByText('Swag Labs')).toBeVisible();
        await expect(page.locator('[data-test="title"]')).toBeVisible();
        await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
        await expect(page.locator('[data-test="payment-info-value"]')).toContainText('SauceCard #31337');
        //Alternative
        const paymentInfo = await page.locator('[data-test="payment-info-value"]').innerText();
        expect(paymentInfo).toContain('SauceCard #31337');
        await expect(page.locator('[data-test="subtotal-label"]')).toContainText('Item total: $15.99');
        //Alternative
        const subtotal = await page.locator('[data-test="subtotal-label"]').textContent();
        expect(subtotal).toMatch('Item total: \$15\.99');
        await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $17.27');
        await expect(page.locator('[data-test="finish"]')).toContainText('Finish');
    });

    test('Test for completed checkout', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('Tab');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('Ale');
        await page.locator('[data-test="lastName"]').click();
        await page.locator('[data-test="lastName"]').fill('Ste');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('1000');
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="finish"]').click();

            
        // Assertions
        await expect(page.getByText('Swag Labs')).toBeVisible();
        await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
        //Alternative
        const titleText = await page.locator('[data-test="title"]').textContent();
        expect(titleText).toContain('Checkout: Complete!');
        await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!')
        await expect(page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        //Alternative
        const completeText = await page.locator('[data-test="complete-text"]').textContent();
        expect(completeText).toMatch('Your order has been dispatched');
        await expect(page.locator('[data-test="back-to-products"]')).toBeEnabled('Back Home');
    });





});