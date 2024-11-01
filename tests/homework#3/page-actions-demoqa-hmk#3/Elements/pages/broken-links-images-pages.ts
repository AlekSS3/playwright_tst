import{expect, type Locator, type Page} from '@playwright/test';

export class BrokenPage{
    readonly page: Page;
    readonly validLink: Locator;
    readonly brokenLink: Locator;
    readonly validImage: Locator;
    readonly brokenImage: Locator;


    constructor (page:Page){
        this.page=page;
        this.validLink = page.locator('a', { hasText: 'Click Here for Valid Link' });
        this.brokenLink = page.locator('a', { hasText: 'Click Here for Broken Link' });
        this.validImage = page.locator('img[src="/images/Toolsqa.jpg"]');
        this.brokenImage = page.locator('img[src="/images/Toolsqa_1.jpg"]');
    }


    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickValidLink(){
         await this.validLink.click();
    }
    
    async clickBrokenLinl(){
        await this.brokenLink.click();
    }

    async clickValidImage(){
        await this.validImage.click();
    }

    async clickBrokenImage(){
        await this.brokenImage.click();
    }

    



}