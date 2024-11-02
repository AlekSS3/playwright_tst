import{expect, type Locator, type Page} from '@playwright/test';

export class TabsPage{
    readonly page: Page;
    readonly tabOrigin: Locator;
    readonly tabUse: Locator;
    readonly tabMore: Locator;
    readonly tabWhat: Locator;
   

    constructor (page:Page){
        this.page=page;
        this.tabOrigin = page.locator('#demo-tab-origin');
        this.tabUse = page.locator('#demo-tab-use');
        this.tabMore = page.locator('text=WhatOriginUseMore');
        this.tabWhat = page.locator('#demo-tab-what');

    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickTabOrigin(){
        await this.tabOrigin.click();
    }

    async clickTabUse(){
        await this.tabUse.click();
    }

    async clickTabMore(){
        //await this.clickTabMore.toBeVisible();
        await this.tabMore.click()
    }

    async clickTabWhat(){
        await this.tabWhat.click();    
    }
    
}