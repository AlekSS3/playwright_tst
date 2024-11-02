import{expect, type Locator, type Page} from '@playwright/test';

export class UploadPage{
    readonly page: Page;
    readonly downloadBtn: Locator;
    readonly uploadBtn: locator;

   

    constructor (page:Page){
        this.page=page;
        this.downloadBtn=page.locator('#ddownloadButton');
        this.uploadBtn = page.locator('#uploadFile');
  
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickDownloadBtn(){
        await this.downloadBtn.click();
    }

    async clickUploadBtn(){
        await this.clickUploadBtn();
    }
    
}