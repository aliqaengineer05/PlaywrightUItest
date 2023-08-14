const { expect } = require('@playwright/test');

export class SignupPage {

    constructor(page) {
      this.page = page;
      this.firstname = page.getByLabel('First Name');
      this.lastname = page.getByLabel('Last Name'); 
      this.email = page.getByLabel('E-Mail');
      this.telephone = page.getByLabel('Telephone');
      this.paswword = page.locator('//label[text()="Password"]');
      this.confirmpass = page.locator('//label[@for="input-confirm"]');
      this.newsletterbox = page.locator('//label[@for="input-newsletter-yes"]')
      this.agreementcheckbox = page.locator('//label[text()="I have read and agree to the "]');
      this.contnue= page.locator('//input[@type="submit"]');
      this.continueaccount= page.locator('//*[@id="content"]/div/a')
      this.userheadername = page.locator ('//*[@id="content"]/div[2]/h2');
      this.usericon=page.locator('//*[@id="widget-navbar-217834"]/ul/li[6]');
      this.singout=page.locator('//span[text()[normalize-space()="Logout"]]')
    }
  
  
    async goto() {
      await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    }
  
    async signupform(Firstname,Lastname,Email,Telephone,Password,ConfirmPassword,) {
      await this.firstname.fill(Firstname);
      await this.lastname.fill(Lastname);
      await this.email.fill(Email);
      await this.telephone.fill(Telephone);
      await this.paswword.fill(Password);
      await this.confirmpass.fill(ConfirmPassword);
      await this.newsletterbox.click();
      await this.agreementcheckbox.click();
      await this.contnue.click();
      await this.continueaccount.click();     
      await expect(this.userheadername).toBeVisible();
    }
    
    async signoutuser(){
    await this.usericon.hover();
    await this.singout.click();
    }
  
  }