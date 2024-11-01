import{expect, type Locator, type Page} from '@playwright/test';

export class ButtonsPage{
    readonly page: Page;
    readonly doubleClickBtn: Locator;
    readonly rightClickBtn: Locator;
    readonly clickBtn: Locator;
   

    constructor (page:Page){
        this.page=page;
        this.doubleClickBtn=page.locator('#doubleClickBtn');
        this.rightClickBtn=page.locator('#rightClickBtn');
        this.clickBtn=page.locator('#jz92v');
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async doubleClick(){
        await this.doubleClickBtn.click();
    }

    async rightClick(){
        await this.rightClickBtn.click();
    }

    async click(){
        await this.clickBtn.click();
    }
    
}