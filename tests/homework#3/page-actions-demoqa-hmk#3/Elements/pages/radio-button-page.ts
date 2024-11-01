import{expect, type Locator, type Page} from '@playwright/test';

export class RadioButtonsPage{
    readonly page: Page;
    readonly yesLabelBtn: Locator;
    readonly impressiveLabelBtn: Locator;
    readonly noLabelBtn: Locator;
    
   

    constructor (page:Page){
        this.page=page;
        this.yesLabelBtn = page.locator('.custom-control-label[for="yesRadio"]');
        this.impressiveLabelBtn = page.locator('.custom-control-label[for="impressiveRadio"]');
        this.noLabelBtn = page.locator('.custom-control-label.disabled[for="noRadio"]');
    
        
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickRadioButtonYes(){
        await this.yesLabelBtn.click();
    }

    async clickRadioButtonImpressive(){
        await this.impressiveLabelBtn.click();
    }

    async clickRadioButtonNo(){
        await this.noLabelBtn.click();
    }
    
}