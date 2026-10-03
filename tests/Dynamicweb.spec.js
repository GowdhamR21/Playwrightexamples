import{test,expect} from'@playwright/test';
test('Buildinlocator',async({page})=>{

    await page.goto('https://rpachallenge.com/')

    await page.locator('//input[@ng-reflect-name="labelFirstName"]').fill('gowtham')
    await page.locator('input[ng-reflect-name="labelLastName"]').fill('gowtham')
    await page.locator('input[ng-reflect-name="labelCompanyName"]').fill('gowtham')
    await page.locator('input[ng-reflect-name="labelRole"]').fill('gowtham')
    await page.locator('input[ng-reflect-name="labelAddress"]').fill('gowtham')
    await page.locator('input[ng-reflect-name="labelEmail"]').fill('gowtham')
    await page.locator('input[ng-reflect-name="labelPhone"]').fill('gowtham')
})