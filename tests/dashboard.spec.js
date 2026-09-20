const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const testData = require('../test-data/testData');
const config = require('../config/config');




test('verify dashboard page and logout', async ({ page }) => {

    const loginpage = new LoginPage(page);
    const dashboardpage = new DashboardPage(page);

await page.goto(config.baseURL);

    await loginpage.login(testData.validUser,testData.validUser.password);

    await expect(page).toHaveURL(
        'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
    );

    await expect(page).toHaveTitle('OrangeHRM');

    await dashboardpage.verifyDashboard();

    await dashboardpage.logout();
});