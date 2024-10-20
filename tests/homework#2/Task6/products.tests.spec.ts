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
    
    //Assertion to be added


    })

    test('User completes the checkout process successfully', async ({ page }) =>{ 
        const productPage=new ProductsPage(page);
        const loginPage=new LoginPage(page);
        await loginPage.simpleLogin();
        await productPage.clickOnFirstProduct();
        await productPage.clickAddToCartButton();
        await productPage.clickOnCartButton();
        await productPage.clickCheckoutButton();
        await productPage.typeFirstName();
        await productPage.typeLastName();
        await productPage.typePostalCode();
        await productPage.clickContinueButton();
        await productPage.clickFinishButton();

    //Assertions to be added


    });

    test('Removing product from Cart', async ({page}) =>{
        const productPage=new ProductsPage(page);
        const loginPage=new LoginPage(page);
        await loginPage.simpleLogin();
        await productPage.clickAddToCartButton();
        await productPage.clickOnCartButton();
        await productPage.clickRemoveProductButton();

    //Assertions to be added
    //await expect(page.locator('[cart-desc-label"]')).toContainText('Description');

    });

    test('Continue shopping flow', async ({ page }) =>{
        const productPage=new ProductsPage(page);
        const loginPage=new LoginPage(page);
        await loginPage.simpleLogin();
        await productPage.clickAddToCartButton();
        await productPage.clickOnCartButton();
        await productPage.clickRemoveProductButton();
        await productPage.clickContinueShoppingButton();

        //Assertions to be added

    });







});
