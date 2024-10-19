import {expect, type Locator, type Page} from '@playwright/test';
import * as fs from 'fs';

const products = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/products.json', 'utf-8'));

export class ProductsPage{

    readonly page: Page;
    readonly clickAddToCart: Locator;
    readonly firstName: Locator
    readonly lastName: Locator
    readonly postalCode: Locator
    readonly clickOnCart: Locator;
    readonly clickCheckout: Locator;
    readonly clickContinue: Locator;
    readonly clickFinish: Locator


    constructor (page: Page){
    this.page = page;
    this.clickAddToCart = page.locator(products.clickAddToCartSecondProduct);
    this.clickOnCart=page.locator(products.clickOnCart);
    this.firstName = page.getByPlaceholder(products.firstName);
    this.lastName = page.getByPlaceholder(products.lastName);
    this.postalCode = page.getByPlaceholder(products.postalCode); 
    this.clickCheckout=page.locator(products.clickCheckout);
    this.clickContinue=page.locator(products.clickContinue);
    this.clickFinish=page.locator(products.clickFinish);

    }

    async goto(){
        await this.page.goto('/');
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

    async clickFinishButton(){
        await this.clickFinish.click();
    }

}

