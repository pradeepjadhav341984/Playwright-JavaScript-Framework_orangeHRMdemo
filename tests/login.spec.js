const {test,expect}=require('@playwright/test');
const LoginPage=require('../pages/LoginPage');
const testData = require('../test-data/testData');
const config = require('../config/config');


test('Verify OrangeHRM login page',async({page})=>{
    const loginpage=new LoginPage(page);
    await page.goto(config.baseURL);
    await loginpage.login(testData.validUser);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page).toHaveTitle('OrangeHRM');
    await expect(page.locator('h6')).toHaveText('Dashboard'); 
});
test('invalid login test',async({page})=>{
 const loginpage=new LoginPage(page);
await page.goto(config.baseURL);
    await loginpage.login(testData.invalidUser);
    await expect(loginpage.loginError).toBeVisible();
});



