import{expect, type Locator, type Page} from '@playwright/test';

export class FramesPage{
    readonly page: Page;
    readonly frameOne: Locator;
    readonly frameTwo: Locator;
   

    constructor (page:Page){
        this.page = page;
        this.frameOne = page.frameLocator('#frame1');
        this.frameTwo = page.frameLocator('#frame2');
    
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async selectFrameOne(){
        await this.frameOne.waitFor();
        await this.frameOne.click();
    }
    
}