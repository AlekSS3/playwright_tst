import{expect, type Locator, type Page} from '@playwright/test';

export class LinksPage{
    readonly page: Page;
    readonly homeSimpleLink: Locator;
    readonly home3fu5xDynamicLink: Locator;
    readonly createdLink: Locator;
    readonly noContentLink: Locator;
    readonly movedLink: Locator;
    readonly badRequest: Locator;
    readonly unauthorizedLink: Locator;
    readonly forbiddenLink: Locator;
    readonly notFoundLink: Locator;
   
   

    constructor (page:Page){
        this.page=page;
        this.homeSimpleLink = page.locator('#simpleLink');
        this.home3fu5xDynamicLink = page.locator('#dynamicLink');
        this.createdLink = page.locator('#created');
        this.noContentLink = page.locator('#no-content');
        this.movedLink = page.locator('#moved');
        this.badRequest = page.locator('#bad-request');
        this.unauthorizedLink = page.locator('#unauthorized');
        this.forbiddenLink = page.locator('#forbidden');
        this.notFoundLink = page.locator('#invalid-url');
        
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickHomeSimpleLink(){
        await this.homeSimpleLink.click();
    }
    
    async clickHome3fu5xDynamicLink(){
        await this.home3fu5xDynamicLink.click();
    }

    async clickCreatedLink(){
        await this.createdLink.click();
    }

    async clickNoContentLink(){
        await this.noContentLink.click();
    }

    async clickMovedLink(){
        await this.movedLink.click();
    }

    async clickBadRequest(){
        await this.badRequest.click();
    }

    async clickUnauthorizedLink(){
        await this.unauthorizedLink.click();
    }

    async clickForbiddenLink(){
        await this.forbiddenLink.click();
    }

    async clickNotFoundLink(){
        await this.notFoundLink.click();
    }

}