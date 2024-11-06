import { test, expect } from '/Users/aleksandra/Desktop/playwright-tst/tests/fixtures/base-fixtures';
import * as fs from 'fs';
const users = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/users.json', 'utf-8'));
const login = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/login.json', 'utf-8'));

import { LoginPage } from '../saucedemo-pages.ts/login-page1';
import { ShoppingPage } from '../saucedemo-pages.ts/shopping-page';


test('Test to add an item to cart', async ({ page, loginPage }) => {
    const shoppingPage = new ShoppingPage(page); 
   
    const user = users[0];
    await loginPage.goto();
    await loginPage.typeUsername(user.username);
    await loginPage.typePassword(user.password);
    await loginPage.clickLoginButton();


    await shoppingPage.goto();
    await shoppingPage.addItemToCart();
    await shoppingPage.goToCartPage();
    await shoppingPage.isItemInCart('Sauce Labs Backpack');

    //Assertion
    const cartItem = page.locator('.inventory_item_name');
    await expect(cartItem).toContainText('Sauce Labs Backpack');
});
