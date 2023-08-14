const { expect } = require('@playwright/test');

export class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder('E-Mail Address');
        this.password = page.getByPlaceholder('Password');
        this.login_button = page.locator('//input[@type="submit"]');
        this.myaccount = page.locator('//*[@id="content"]/div[2]/h2');
    }

    async gotoLoginPage(){
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    }

    async login(Username, Password){
        await this.username.fill(Username);
        await this.password.fill(Password);
        await this.login_button.click();
        await expect(this.myaccount).toBeVisible();
    }

}