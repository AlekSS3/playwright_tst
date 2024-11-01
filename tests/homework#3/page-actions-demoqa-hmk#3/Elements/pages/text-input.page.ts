import{expect, type Locator, type Page} from '@playwright/test';
import * as fs from 'fs';

const userInfo = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/userInfo.json', 'utf-8'));


    export class TextBoxPage{
        readonly page: Page;
        readonly fullName: Locator;
        readonly email: Locator;
        readonly currentAddress: Locator;
        readonly permanentAddress: Locator;
        readonly submitButton: Locator;

        constructor (page:Page){
            this.page=page;
            this.fullName=page.locator(userInfo.fullName);
            this.email = page.locator(userInfo.email);
            this.currentAddress=page.locator(userInfo.currentAddress); 
            this.permanentAddress=page.locator(userInfo.permanentAddress);
            this.submitButton=page.locator('#submit');
        }

        async goto(){
            await this.page.goto('https://demoqa.com');
        }

        async typeFullName(userInfo){
            await this.fullName.fill(userInfo);
        }

        async typeEmail(userInfo){
            await this.email.fill(userInfo);
        }

        async typeCurrentAddress(userInfo){
            await this.currentAddress.fill(userInfo);
        }

        async typePermanentAddress(userInfo){
            await this.permanentAddress.fill(userInfo);
        }

        async clickSubmitButton(){
            await this.submitButton.click();
        }
        
    }