import{expect, type Locator, type Page} from '@playwright/test';

export class DatePickerPage{
    readonly page: Page;
    readonly datePickerInput: Locator;
    readonly dateAndTimePickerInput: Locator;
    readonly dateOption: Locator;
    readonly timeOption: Locator;


    constructor (page:Page){
        this.page=page;
        this.datePickerInput = page.locator('#datePickerMonthYearInput');
        this.dateAndTimePickerInput = page.locator('#dateAndTimePickerInput');
        this.dateOption = page.locator('.react-datepicker__day--selected');
        this.timeOption = page.locator('button.react-datepicker__time-slot').filter({ hasText: '01:30' });
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async selectDate() {
        await this.datePickerInput.click();
        await this.dateOption.click();
    }

    async selectDateAndTime() {
        await this.dateAndTimePickerInput.click();
        await this.dateOption.click();
        await this.timeOption.click();
    }


    
}