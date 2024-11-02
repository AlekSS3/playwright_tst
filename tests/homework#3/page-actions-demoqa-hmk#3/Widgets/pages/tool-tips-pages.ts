import{expect, type Locator, type Page} from '@playwright/test';

export class ToolTipsPage{
    readonly page: Page;
    readonly hoverOverMeBtn: Locator;
    readonly hoverOverTxtField: Locator;
    readonly hoverOverContrary: Locator;
    readonly hoverOverLink: Locator;
 
   

    constructor (page:Page){
        this.page = page;
        this.hoverOverMeBtn = page.locator('#toolTipButton');
        this.hoverOverTxtField = page.locator('#toolTipTextField');
        this.hoverOverContrary = page.locator('#texToolTopContainer');
        this.hoverOverLink = page.locator('a:has-text("1.10.32")');

    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async hoverOverMe(){
        await this.hoverOverMeBtn.hover();
    }

    async hoverOverTxt(){
        await this.hoverOverTxtField.hover();
    }

    async hoverOverLinkContrary(){
        await this.hoverOverContrary.hover();
    }

    async hoverOverLink10(){
        await this.hoverOverLink.hover();
    }
    
}