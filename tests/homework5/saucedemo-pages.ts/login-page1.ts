import{ Page, Locator} from '@playwright/test';
import { test, expect } from '../../fixtures/base-fixtures';
import * as fs from 'fs';

const users = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/users.json', 'utf-8'));
const login = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/login.json', 'utf-8'));


export class LoginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;


    constructor (page:Page){
        this.page = page;
        this.username = page.getByPlaceholder(login.username);
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator(login.loginButton); 

    }

    async goto(){
        await this.page.goto('https://saucedemo.com');
    }

    async typeUsername(user){
        await this.username.fill(user);
    }
    
    async typePassword(user){
        await this.password.fill(user);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

}
