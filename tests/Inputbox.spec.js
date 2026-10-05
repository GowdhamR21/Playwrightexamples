import{test, expect} from "@playwright/test";

test('inputbox', async({page})=>{

    await page.goto('https://demo.automationtesting.in/Register.html')

    //Enter input in textbox using locator
    await expect.soft(page.getByPlaceholder('First Name')).toBeVisible()
    await expect.soft(page.getByPlaceholder('First Name')).toBeEnabled()
    await expect.soft(page.getByPlaceholder('First Name')).toBeEditable()
    await page.getByPlaceholder('First Name').fill('Gowdham')
    await page.getByPlaceholder('Last Name').fill('Rajendran')
    await page.locator('//textarea[@class="form-control ng-pristine ng-untouched ng-valid"]').fill('12, MG Road, Chennai')
    await page.locator('//input[@type="email"]').fill('gowdhamrajendran@example.com')
    await page.locator('//input[@type="tel"]').fill('9876543210')
    //Radio button
    await page.getByLabel('Male', { exact: true }).check()
    await expect.soft(page.getByLabel('Male', { exact: true })).toBeChecked()

 
    //Female radio button is not selected 
    await expect.soft(page.getByLabel('FeMale', { exact: true })).not.toBeChecked()
    await page.waitForTimeout(5000)

})