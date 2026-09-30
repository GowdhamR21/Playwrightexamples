import{test,expect}from '@playwright/test';

test('Locator',async({page})=>{

await page.goto('https://demoblaze.com/index.html')

//Login locators Username and Password
await page.click('//*[@id="login2"]')
await page.fill('//*[@id="loginusername"]','pavanol')
await page.fill('//*[@id="loginpassword"]','test@123')
await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

//Logout by clicking the logout button
const logoutButton = page.locator('//*[@id="logout2"]')
console.log('Text=' +await logoutButton.textContent())
await page.click('//*[@id="logout2"]')
})
