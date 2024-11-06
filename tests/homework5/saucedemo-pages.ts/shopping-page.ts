import { Page, Locator } from '@playwright/test';
import { test, expect } from '../../fixtures/base-fixtures';

export class ShoppingPage {
    readonly page: Page;
    readonly firstItemAddToCartButton: Locator;
    readonly cartItem: Locator;
    readonly cartPageLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstItemAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartItem = page.locator('.inventory_item_name');
        this.cartPageLink = page.locator('a.shopping_cart_link');
    }

    async goto(){
        await this.page.goto('https://saucedemo.com/inventory.html');
    }

    async addItemToCart(){
        await this.firstItemAddToCartButton.click();
    }

    async goToCartPage(){
        await this.cartPageLink.click();
    }

    async isItemInCart(itemName: string){
        await expect(this.cartItem).toContainText(itemName);
    }
}

