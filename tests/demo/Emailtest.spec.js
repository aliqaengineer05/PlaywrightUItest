import { test, expect } from '@playwright/test';

const YOPMAIL_USERNAME = 'grafracreulonneu-6696@skem.tk';


test.describe(' Email Test', () => {
  test('Open URL from Email in New Tab', async ({ page, context }) => {
    // Go to YOPmail login page
    page.setDefaultTimeout(60000);
    await page.goto('http://www.yopmail.com/en/');
    
    // Enter YOPMAIL_USERNAME in the input field and submit
    await page.fill('input#login', YOPMAIL_USERNAME);
    await page.locator('//*[@id="refreshbut"]/button/i').click();
    
    // // Wait for the inbox to load
     await page.waitForSelector('#wmmailmain');

    // Click on the email with the specified subject
    await page.locator('//div[@class="m"]//button[1]').click();
    
    // Switch to iframe containing email content
    await page.waitForSelector('iframe#ifinbox');
    const frame = await page.frame({ name: 'ifmail' });


    const signInURL = await frame.evaluate(() => {
      const signInLink = document.querySelector('a[href="https://courses.ultimateqa.com/users/sign_in"]');
      return signInLink ? signInLink.href : null;
    });

    // Open the URL in a new tab
    if (signInURL) {
      const newPage = await context.newPage();
      await newPage.goto(signInURL);
      await newPage.bringToFront();
    } else {
      console.log('Sign in URL not found in the email.');
    }

    // Don't forget to close the new tab
     await newPage.close();
  });
});
