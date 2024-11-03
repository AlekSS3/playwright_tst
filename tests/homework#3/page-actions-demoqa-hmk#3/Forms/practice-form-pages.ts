import{expect, type Locator, type Page} from '@playwright/test';

import * as fs from 'fs';

const practiceForm = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/practiceForm.json', 'utf-8'));

export class PracticeFormPage{
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly mobileNo: Locator;
    readonly subjects: Locator;
    readonly currentAddress: Locator;
    readonly genderFemale: Locator;
    readonly fileInput: Locator;
    readonly sportsCheckbox: Locator;
    readonly readingCheckbox: Locator;
    readonly submitBtn: Locator;
    readonly dateOfBirthInput: Locator;
    readonly daySelector: Locator;
    readonly monthSelector: Locator;
    readonly yearSelector: Locator;
    readonly state: Locator;
    readonly stateN: Locator;
    readonly city: Locator;
    readonly cityN: Locator;

    

   

    constructor (page:Page){
        this.page=page;
        this.firstName=page.locator('#firstName');
        this.lastName = page.locator('#firstName');
        this.email = page.locator('#userEmail');
        this.mobileNo = page.locator('input[placeholder="Mobile Number"]');
        this.subjects = page.locator('div.subjects-auto-complete__input input#subjectsInput');
        this.currentAddress = page.locator('#currentAddress');
        this.genderFemale = page.locator('label[for="gender-radio-2"]');
        this.fileInput = page.locator('input[type="file"]');
        this.sportsCheckbox = page.locator('.custom-control-label', { hasText: 'Sports' });
        this.readingCheckbox = page.locator('.custom-control-label', { hasText: 'Reading' });
        this.submitBtn = page.locator('#submit');
        this.dateOfBirthInput = page.locator('#dateOfBirthInput');
        this.daySelector = page.locator('.react-datepicker__day');
        this.monthSelector = page.locator('.react-datepicker__month-select');
        this.yearSelector = page.locator('.react-datepicker__year-select');
        this.state = page.locator('.css-tlfecz-indicatorContainer').first();
        this.stateN = page.locator('div.css-1uccc91-singleValue').filter({ hasText: 'NCR' });
        this.city = page.locator('div.css-1wa3eu0-placeholder', { hasText: 'Select City' });
        this.cityN = page.locator('div.css-1uccc91-singleValue:has-text("Noida")');

    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async typeFirstName(practiceForm){
        await this.firstName.click();
        await this.firstName.fill(practiceForm);
    }

    async typeLastName(practiceForm){
        await this.lastName.click();
        await this.lastName.fill(practiceForm);
    }
    async typeEmail(practiceForm){
        await this.email.click();
        await this.email.fill(practiceForm);
    }

    async typeMobileNo(practiceForm){
        await this.mobileNo.click();
        await this.mobileNo.fill(practiceForm);
    }

    async typeSubjects(practiceForm){
        await this.subjects.click();
        await this.subjects.fill(practiceForm);
    }

    async clickGenderFemale(){
        await this.genderFemale.click();
    }

    async typeCurrentAddress(practiceForm){
        await this.currentAddress.click();
        await this.currentAddress.fill(practiceForm)
    }

    async clickFileInput(){
        await this.fileInput.click();
        await this.fileInput.setInputFiles('/Users/aleksandra/Group1Playwright');
    }

    async clickSportsCheckbox(){
        await this.sportsCheckbox.click();
    }

    async clickReadingCheckbox(){
        await this.readingCheckbox.click();
    }

    async clickSubmitBtn(){
        await this.submitBtn.click();
    }

    async selectDateOfBirth(day: string, month: string, year: string) {
        await this.dateOfBirthInput.click();
        await this.daySelector.filter({ hasText: day }).click(); 
        await this.monthSelector.selectOption(month);        
        await this.yearSelector.selectOption(year);
    }

    async clickState(){
        await this.state.click();
        await this.stateN.click();
    }

    async clickCity(){
        await this.city.click();
        await this.cityN.click();
    }






}