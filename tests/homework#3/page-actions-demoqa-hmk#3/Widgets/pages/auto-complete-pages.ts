import{expect, type Locator, type Page} from '@playwright/test';
import * as fs from 'fs';

const colors = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/colors.json', 'utf-8'));

export class AutoCompletePage{
    readonly page: Page;
    readonly inputField: Locator;
    readonly inputField1: Locator;
    


    constructor (page:Page){
        this.page=page;
        this.inputField = page.locator('#autoCompleteMultipleInput');
        this.inputField1 = page.locator(colors.colorOne);
      
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickInputField(){
        await this.inputField.click();
    }

    async typeInputField1(colors) {
        await this.inputField1.fill(colors);
    }
    
}