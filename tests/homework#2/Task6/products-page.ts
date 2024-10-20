import {expect, type Locator, type Page} from '@playwright/test';
import * as fs from 'fs';

const products = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/products.json', 'utf-8'));

export class ProductsPage{

    readonly page: Page;
    readonly clickOnProduct: Locator;
    readonly clickAddToCart: Locator;
    readonly firstName: Locator
    readonly lastName: Locator
    readonly postalCode: Locator
    readonly clickOnCart: Locator;
    readonly clickCheckout: Locator;
    readonly clickCancel: Locator;
    readonly clickContinue: Locator;
    readonly clickRemoveProduct: Locator;
    readonly clickContinueShopping: Locator;
    readonly clickFinish: Locator


    constructor (page: Page){
    this.page = page;
    //this.clickOnProduct = page.getByTestId(products.clickOnProduct);
    this.clickOnProduct = page.locator('[data-test="item-4-title-link"]');
    //this.clickAddToCart = page.getByTestId(products.clickAddToCart);
    this.clickAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    //this.clickAddToCart = page.getByTestId('add-to-cart');
    this.clickOnCart = page.locator('[data-test="shopping-cart-link"]');
    //this.clickOnCart = page.getByTestId(products.clickOnCart);
    this.firstName = page.locator('[data-test="firstName"]'); 
    //this.firstName = page.getByPlaceholder(products.firstName);
    this.lastName = page.locator('[data-test="lastName"]');
    //this.lastName = page.getByPlaceholder(products.lastName);
    this.postalCode = page.locator('[data-test="postalCode"]');
    //this.postalCode = page.getByPlaceholder(products.postalCode); 
    this.clickCancel=page.getByTestId(products.clickCancel);
    //this.clickCheckout=page.getByTestId(products.clickCheckout);
    this.clickCheckout = page.locator('button[data-test="checkout"]');
    //this.clickContinue=page.getByTestId(products.clickContinue);
    this.clickContinue = page.locator('input[data-test="continue"]');
    this.clickContinueShopping=page.locator('[data-test="continue-shopping"]')
    this.clickFinish = page.locator('button[data-test="finish"]');
    //this.clickFinish=page.getByTestId(products.clickFinish);
    this.clickRemoveProduct=page.locator('button[data-test="remove-sauce-labs-backpack"]');
    //this.clickRemoveProduct=page.locator('[data-test="${products.clickRemoveProduct}"]');
    //this.clickRemoveProduct = page.getByTestId(products.removeProduct);
    
    }

    async goto(){
        await this.page.goto('/');
    }

    async clickOnFirstProduct(){
        await this.clickOnProduct.click()
    }

    async clickAddToCartButton(){
        await this.clickAddToCart.click();
    }

    async clickOnCartButton(){
        await this.clickOnCart.click();
    }

    async typeFirstName(){
        await this.firstName.fill('Aleksandra');
    }
    //async typeFirstName(name: 'Aleksandra') {
        //await this.firstName.fill(name);
    //}

    async typeLastName(){
        await this.lastName.fill('Stefanovska');
    }

    async typePostalCode(){
        await this.postalCode.fill('1000');
    }

    async clickCheckoutButton(){
        await this.clickCheckout.click();
    }

    async clickContinueButton(){
        await this.clickContinue.click();
    }

    async clickCancelButton(){
        await this.clickCancel.click();

    }
    async clickContinueShoppingButton(){
        await this.clickContinueShopping.click();
    }

    async clickFinishButton(){
        await this.clickFinish.click();
    }

    async clickRemoveProductButton(){
        await this.clickRemoveProduct.click();
    }
}

