import{expect, type Locator, type Page} from '@playwright/test';

import * as fs from 'fs';

const bookUser = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/bookUser.json', 'utf-8'));

export class LoginPage{
    readonly page: Page;
    readonly newUserBtn: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly registerBtn: Locator;
    readonly loginLink: Locator;
    readonly registerLink: Locator;
    

   

    constructor (page:Page){
        this.page = page;
        this.newUserBtn = page.locator('#newUser');
        this.firstName = page.locator(bookUser.firstName);
        this.lastName = page.locator(bookUser.lastName);
        this.username = page.locator(bookUser.username);
        this.password = page.locator(bookUser.password);
        this.registerBtn = page.locator('#register');
        this.loginLink = page.locator('a[href="/login"]');
        this.registerLink = page.locator('a[href="/register"]');
       
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickNewUser(){
        await this.newUserBtn.click();
    }

    async enterFirstName(bookUser){
        await this.firstName.fill(bookUser);
    }

    async enterLastName(bookUser){
        await this.lastName.fill(bookUser);
    }

    async enterUserName(bookUser){
        await this.username.fill(bookUser);
    }

    async enterPassword(bookUser){
        await this.password.fill(bookUser);
    }

    async clickRegisterBtn(){
        await this.registerBtn.click();
    }

    async clickLoginLink(){
        await this.loginLink.click();
    }

    async clickRegisterLink(){
        await this.clickRegisterLink();
    }
}
