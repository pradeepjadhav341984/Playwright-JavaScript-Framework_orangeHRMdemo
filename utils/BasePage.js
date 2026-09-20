class BasePage
{
    constructor(page)
    {
        this.page=page;
    }
    async click(locator)
    {
        await locator.click();

    }
    async fill(locator,text)
    {
        await locator.fill(text);
    }
    async getText(locator)
    {
        return await locator.textContent();
    }
    async isVisible(locator)
    {
        return await locator.isVisible();

    }
    async takeScreenshot(fileName) {
    await this.page.screenshot({
        path: `screenshots/${fileName}.png`,
        fullPage: true
    });
}

}
module.exports=BasePage;