import{expect, type Locator, type Page} from '@playwright/test';

export class BrowserWindowPage{
    readonly page: Page;
    readonly newTabBtn: Locator;
    readonly newWindowBtn: Locator;
    readonly newWindowMessageBtn: Locator;


    constructor (page:Page){
        this.page = page;
        this.newTabBtn = page.locator('button', { hasText: 'New Tab' });
        this.newWindowBtn = page.locator('button:has-text("New Window")');
        this.newWindowMessageBtn = page.locator('button', { hasText: 'New Window Message' });
        
    }

        async goto(){
            await this.page.goto('https://demoqa.com');
        }

        async clickNewTab() {
            const pagePromise = this.page.waitForEvent('popup');
            await this.newTabBtn.click();
            return await pagePromise;
        }

        async clickNewWindow() {
            const pagePromise = this.page.waitForEvent('popup');
            await this.newWindowBtn.click();
            return await pagePromise;
        }

        async clickNewWindowMessage() {
            const pagePromise = this.page.waitForEvent('popup');
            await this.newWindowMessageBtn.click();
            return await pagePromise;
        }

        
    }