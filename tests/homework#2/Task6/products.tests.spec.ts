import { test, expect } from '@playwright/test';
import * as fs from 'fs';

import { LoginPage } from './login-page';
import { ProductsPage } from './products-page';

const users = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/users.json', 'utf-8'));
const login = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/login.json', 'utf-8'));


test.describe('Shopping flow tests', () => {
    test('Add a product to Cart', async ({ page }) =>{ 
        const products=new ProductsPage(page);
        const loginPage=new LoginPage(page);
        await loginPage.standardUserLogin();
        await products.clickAddToCartButton();
        await products.clickOnCartButton();
        await products.typeFirstName();
        await products.typeLastName();
        await products.typePostalCode();
        await products.clickCheckoutButton();
        await products.clickContinueButton();
        await products.clickFinishButton();



    });

});
