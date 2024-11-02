import{expect, type Locator, type Page} from '@playwright/test';

export class WidgetsPage{
    readonly page: Page;
    readonly accordianOne: Locator;
    readonly accordianTwo: Locator;
    readonly accordianThree: Locator;
   

    constructor (page:Page){
        this.page=page;
        this.accordianOne = page.locator('//div[@id="section1Heading" and contains(text(), "What is Lorem Ipsum?")]');
        this.accordianTwo = page.locator('//div[@id="section2Heading" and contains(text(), "Where does it come from?")]');
        this.accordianThree = page.locator('//div[@id="section3Heading" and contains(text(), "Why do we use it?")]');
        //please create a locator by id: <div class="card-header" id="section2Heading">Where does it come from?</div>
        //<div class="card-header" id="section3Heading">Why do we use it?</div>
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickAccordianOne(){
        await this.accordianOne.click();
    }

    async clickAccordianTwo(){
        await this.accordianTwo.click();
    }
    
    async clickAccordianThree(){
        await this.accordianThree.click();
    }


}