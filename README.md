# Playwright Page Object Model Automation

This repository showcases a robust automation framework developed using Playwright, inspired by the teachings of Ahmed Ali. The framework adheres to the Page Object Model (POM) methodology and is built using Node.js with JavaScript.

## Tools & Technologies

- Node.js
- Visual Studio Code
- JavaScript

## Getting Started

To leverage this framework for your testing endeavors, follow these steps:

1. **Clone the Repository:**
   Download the repository or clone it using the following command:
   ```bash
    git clone https://github.com/aliqaengineer05/PlaywrightUItest.git
   ```

2. **Check Node.js Version:**
   Verify that Node.js is installed on your system by running:
   ```bash
   node -v
   ```

3. **Install Dependencies:**
   Open your terminal/cmd, navigate to the project folder, and run:
   ```bash
   npm ci
   ```
   This command installs all the necessary libraries specified in the package.json file.

4. **Run Tests:**
   Execute the tests using the Playwright test runner:
   ```bash
   npx playwright test
   ```

## Tutorial Steps

This framework was crafted based on Ahmed Ali's tutorial on building a Playwright Page Object Model project. Below is an overview of the steps:

1. **Set Up a New Project:**
   Establish a new Node.js project and initialize it with a package.json file using:
   ```bash
   npm init -y
   ```

2. **Install Playwright:**
   Install Playwright and set up the project by executing:
   ```bash
   npm init playwright@latest
   ```

3. **Generate Sample Test:**
   Create a sample login test by recording interactions with the application through:
   ```bash
   npx playwright codegen
   ```

4. **Page Objects:**
   Organize your project by creating a "pages" directory to host all page objects. Define classes for each page with element locators and action methods.

5. **Utilize Page Objects:**
   In your test files, import the relevant page classes, create instances, and use the methods defined in those classes to interact with the application.

## Example Test: login.spec.js

```javascript
import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
});
```

## Example Page Object: login.js

```javascript
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameTextbox = page.getByLabel('Username');
    this.passwordTextbox = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async gotoLoginPage() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username, password) {
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
  }
};
```

## Continuous Learning

Stay curious and keep expanding your skills in the testing field!

Author: [Ahmed Ali]

