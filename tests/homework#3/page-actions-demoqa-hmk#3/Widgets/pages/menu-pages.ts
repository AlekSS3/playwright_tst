import{expect, type Locator, type Page} from '@playwright/test';

export class MenuPage{
    readonly page: Page;
    readonly mainItem1: Locator;
    readonly mainItem2: Locator;
    readonly mainItem3: Locator;
    readonly subItem: Locator;
    readonly subSubList: Locator;
    readonly subSubItem1: Locator;
    readonly subSubItem2: Locator;

    constructor (page:Page){
        this.page=page;
        this.mainItem1 = page.locator('a', { hasText: 'Main Item 1' });
        this.mainItem2 = page.locator('a:has-text("Main Item 2")');
        this.mainItem3 = page.locator('a:has-text("Main Item 3")');
        this.subItem = page.locator('a:has-text("Sub Item")');
        this.subSubList = page.locator('a:has-text("SUB SUB LIST »")');
        this.subSubItem1 = page.locator('a:has-text("Sub Sub Item 1")');
        this.subSubItem2 = page.locator('a:has-text("Sub Sub Item 2")');
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickMainItem1(){
        await this.mainItem1.click();
    }

    async clickMainItem2() {
        await this.mainItem2.hover();
        await this.subItem.first().click();
    }

    async clickSubSubItem1() {
        await this.mainItem2.hover();
        await this.subSubList.hover();
        await this.subSubItem1.click();
    }

    async clickSubSubItem2() {
        await this.mainItem2.hover();
        await this.subSubList.hover();
        await this.subSubItem2.click();
    }

    async clickMainItem3(){
        await this.mainItem3.click();
    }
    
}