import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/signup';
import userData from '../../util/userdata.json';
import { getRandomEmail } from '../../util/common';
import { LoginPage } from '../../pages/login';

let SingupEmail;

test.beforeAll(async () => {
  SingupEmail =  getRandomEmail(); // Generate the random email once
});

test.describe('User Signup', () => {
  test('User Signup Test', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.goto();
    await signup.signupform(userData.Firstname, userData.Lastname, SingupEmail, userData.PhoneNumber, userData.Password, userData.ConfirmPassword);
    await signup.signoutuser();
  });
});

test.describe('User Login', () => {
  test('User Login Test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(userData.Email, userData.Password);
  });
});
