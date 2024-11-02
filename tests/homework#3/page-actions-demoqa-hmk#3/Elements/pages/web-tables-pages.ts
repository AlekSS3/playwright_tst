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
    
}