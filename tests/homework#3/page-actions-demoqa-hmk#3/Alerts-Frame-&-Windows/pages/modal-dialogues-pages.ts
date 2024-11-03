import{expect, type Locator, type Page} from '@playwright/test';

export class ModalDialoguesPage{
    readonly page: Page;
    readonly smallModalBtn: Locator;
    readonly largeModalBtn: Locator;
    readonly closeSmallModalBtn: Locator;
    readonly closeLargeModalBtn: Locator;
  
   

    constructor (page:Page){
        this.page = page;
        this.smallModalBtn = page.locator('#showSmallModal');
        this.largeModalBtn = page.locator('#showLargeModal');
        this.closeSmallModalBtn = page.locator('#closeSmallModal')
        this.closeLargeModalBtn = page.locator('#closeLargeModal');
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickSmallModalBtn(){
        await this.smallModalBtn.click();
    }

    async clickLargeModalBtn(){
        await this.largeModalBtn.click();
    }

    async clickCloseSmallModalBtn(){
        await this.closeSmallModalBtn.click();
    }

    async clickCloseLargeModalBtn(){
        await this.closeLargeModalBtn.click();
    }



    
}