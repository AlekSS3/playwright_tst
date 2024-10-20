import{expect, type Locator, type Page} from '@playwright/test';
import * as fs from 'fs';

const users = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/users.json', 'utf-8'));
const login = JSON.parse(fs.readFileSync('../playwright-tst/tests/fixtures/data/login.json', 'utf-8'));


export class LoginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;


    constructor (page:Page){
        this.page=page;
        this.username=page.getByPlaceholder(login.username);
        //this.password=page.getByTestId(login.password);
        this.password = page.locator('[data-test="password"]');
        this.loginButton=page.locator(login.loginButton); 

    }

    async goto(){
        await this.page.goto('/');
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


    //Method for 1 username/password
    async simpleLogin(){
        await this.page.goto('/');
        const user = users[0];
        await this.username.fill(user.username);
        await this.password.fill(user.password);
        //await this.typeUsername(user.username);
        //await this.typePassword(user.password);
        await this.loginButton.click();
    
    }

}