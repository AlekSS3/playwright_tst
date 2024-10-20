import { test, expect } from '@playwright/test';
import * as fs from 'fs';

import { LoginPage } from './login-page';
import { ProductsPage } from './products-page';

const users = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/users.json', 'utf-8'));
const login = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/login.json', 'utf-8'));


test.describe('Shopping flow tests', () => {

    test('Add a product to Cart', async ({page}) =>{
        const productPage=new ProductsPage(page);
        const loginPage=new LoginPage(page);
        await loginPage.simpleLogin();
        await productPage.clickAddToCartButton();
    
    //Assertion
    await expect(page.locator('button[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');


    })

    test('User completes checkout process without selecting a product', async ({ page }) =>{ 
        const productPage=new ProductsPage(page);
        const loginPage=new LoginPage(page);
        await loginPage.simpleLogin();
        await productPage.clickOnCartButton();
        await productPage.clickCheckoutButton();
        await productPage.typeFirstName();
        await productPage.typeLastName();
        await productPage.typePostalCode();
        await productPage.clickContinueButton();
        

    //Assertion
    await expect(page.locator('[data-test="shipping-info-value"]')).toHaveText('Free Pony Express Delivery!');
    

    });

    test('Removing product from Cart', async ({page}) =>{
        const productPage=new ProductsPage(page);
        const loginPage=new LoginPage(page);
        await loginPage.simpleLogin();
        await productPage.clickAddToCartButton();
        await productPage.clickOnCartButton();
        await productPage.clickRemoveProductButton();

    //Assertion
    await expect(page.locator('button[data-test="checkout"]')).toContainText('Checkout');

    });

    test('Continue shopping flow', async ({ page }) =>{
        const productPage=new ProductsPage(page);
        const loginPage=new LoginPage(page);
        await loginPage.simpleLogin();
        await productPage.clickAddToCartButton();
        await productPage.clickOnCartButton();
        await productPage.clickRemoveProductButton();
        await productPage.clickContinueShoppingButton();

        // Assertion
        await expect(page.locator('[data-test="title"]')).toContainText('Products');

    });

    test('Add product to cart, cancel checkout, and remove product', async ({ page }) =>{
        const productPage=new ProductsPage(page);
        const loginPage=new LoginPage(page);
        await loginPage.simpleLogin();
        await productPage.clickAddToCartButton();
        await productPage.clickOnCartButton();
        await productPage.clickCancelButton;
        await productPage.clickRemoveProductButton();


        //Assertion
        await expect(page.locator('[data-test="continue-shopping"]')).toContainText('Continue Shopping');

    })

    test('User completes checkout process with selecting a product', async ({ page }) =>{
        const productPage=new ProductsPage(page);
        const loginPage=new LoginPage(page);
        await loginPage.simpleLogin();
        await productPage.clickAddToCartButton();
        await productPage.clickOnCartButton();
        await productPage.clickCheckoutButton();
        await productPage.typeFirstName();
        await productPage.typeLastName();
        await productPage.typePostalCode();
        await productPage.clickContinueButton();

        //Assertion
        await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');

    });
    

});
