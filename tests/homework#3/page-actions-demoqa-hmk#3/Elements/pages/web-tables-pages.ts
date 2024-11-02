import{expect, type Locator, type Page} from '@playwright/test';

import * as fs from 'fs';

const register = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/register.json', 'utf-8'));

export class WebTablesPage{
    readonly page: Page;
    readonly addBtn: Locator;
    readonly searchBtn: Locator;
    readonly firstName1: Locator;
    readonly firstName: Locator;
    readonly lastName1: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly age1: Locator;
    readonly age: Locator;
    readonly salary1: Locator;
    readonly salary: Locator;
    readonly department1: Locator;
    readonly department: Locator;
    readonly submitBtn: Locator;
    readonly firstNameBtn: Locator;
    readonly lastNameBtn: Locator;
    readonly ageBtn: Locator;
    readonly emailBtn: Locator;
    readonly salaryBtn: Locator;
    readonly departmentBtn: Locator;
    readonly removeBtn: Locator;


    constructor (page:Page){
        this.page = page;
        this.addBtn = page.locator('#addNewRecordButton');
        this.searchBtn = page.locator('#searchBox');
        this.firstName1 = page.locator('#firstName');
        this.firstName = page.locator(register.firstName);
        this.lastName1 = page.locator('#lastName');
        this.lastName = page.locator(register.lastName);
        this.email = page.locator(register.email);
        this.age1 = page.locator('#age');
        this.age = page.locator(register.age);
        this.salary1 = page.locator('#salary');
        this.salary = page.locator(register.salary);
        this.department1 = page.locator('#department');
        this.department = page.locator(register.department);
        this.submitBtn = page.locator('#submit');
        this.firstNameBtn = page.locator('.rt-th.rt-resizable-header.-sort-asc.-cursor-pointer');
        this.lastNameBtn = page.locator('.rt-th.rt-resizable-header.-cursor-pointer');
        this.ageBtn = page.locator('.rt-resizer');
        this.emailBtn = page.locator('.rt-resizable-header-content', { hasText: 'Email' });
        this.salaryBtn = page.locator('.rt-resizable-header-content', { hasText: 'Salary' });
        this.departmentBtn = page.locator('.rt-resizable-header-content', { hasText: 'Department' });
        this.removeBtn = page.locator('//path[@d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"]');

    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickAddBtn(){
        await this.addBtn.click();
    }

    async clickSearchBtn(){
        await this.searchBtn.click();
    }

    async typeSearchBtn(register){
        await this.searchBtn.fill(register)
    }

    async clickFirstName(){
        await this.firstName1.click();
    }

    async typeFirstName(register){
        await this.firstName.fill(register);
    }

    async clickLastName1(){
        await this.lastName1.click();
    }

    async typeLastName(register){
        await this.lastName.fill(register);
    }

    async typeEmail(register){
        await this.email.fill(register);
    }

    async clickAge1(value: string){
        await this.age1.click();
    }

    async typeAge(register){
        await this.age.fill(register);
    }

    async clickSalary(){
        await this.salary1.click();
    }

    async typeSalary(register){
        await this.salary.fill(register);
    }

    async clickDepartment(){
        await this.department1.click();
    }

    async typeDepartment(register){
        await this.department.fill(register);
    }

    async clickSubmitBtn(){
        await this.submitBtn.click();
    }

    async clickFirstNameBtn(){
        await this.firstNameBtn.click();
    }

    async clickLastNameBtn(){
        await this.lastNameBtn.click();
    }

    async clickAgeBtn(){
        await this.ageBtn.click();
    }

    async clickSalaryBtn(){
        await this.salaryBtn.click();
    }
   
    async clickDepartmentBtn(){
        await this.departmentBtn.click();
    }

    async clickRemoveBtn(){
        await this.removeBtn.click();
    }
    
}