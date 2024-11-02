import{expect, type Locator, type Page} from '@playwright/test';

export class ProgressBarPage{
    readonly page: Page;
    readonly startBtn: Locator;
    readonly stopBtn: Locator;

   

    constructor (page:Page){
        this.page = page;
        this.startBtn = page.locator('button:has-text("Start")');
        this.stopBtn = page.locator('button:has-text("Stop")');
    
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickStartBtn(){
        await this.startBtn.click();
    }

    async clickStopBrn(){
        await this.stopBtn.click();
    }

  
}