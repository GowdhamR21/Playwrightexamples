import{test,expect} from'@playwright/test';
test('Assertion',async({page})=>{

    //Open URL and validate the URL
    await page.goto('https://demoblaze.com/index.html')

    await expect(page).toHaveURL('https://demoblaze.com/index.html')

    //Validate the title of the page
    await expect(page).toHaveTitle('STORE')

    //Validate to be visible the element
    const logo = await page.locator('.navbar-brand')
    await expect(logo).toBeVisible()

    //validate to be enabled the element and to be disabled the element 
    const prevButton = await page.locator('//button[@id="prev2"]')
    await expect(prevButton).toBeEnabled()
    //const nextButton = await page.locator('//button[@id="next2"]')
    //await expect(nextButton).toBeDisabled() //This will fail because the next button is enabled, so we can see the failure in the test report.

    //Validate the checkbox or radio button is checked or not

    await page.goto('https://demo.automationtesting.in/Register.html')

    await page.getByLabel('Male', {exact:true}).click()

    const maleRadioButton =await page.getByLabel('Male', {exact:true})
    await expect(maleRadioButton).toBeChecked()

    const checkbox1 = await page.locator('#checkbox1')
    await checkbox1.check()
    await expect(checkbox1).toBeChecked()

   // Validate the element has attribute or not
    const submit = await page.locator('#submitbtn')
    await expect(submit).toHaveAttribute('type','submit')
  
  //Validate toHaveText (Should have fullname) and tocontainText (Can have part of the text)
    const heading = await page.locator('//div[@class="container center"]//h2')
    await expect(heading).toHaveText('Register')

    await expect(heading).toContainText('Reg')

  //Validate toHaveValue 

  const email = page.locator("//input[@type='email']")
  await email.fill('gowdham.r21@gmail.com')
  await expect(email).toHaveValue('gowdham.r21@gmail.com')

  //Validate toHaveCount
  const Day = page.locator('//select[@id="daybox"]//option')
  await expect(Day).toHaveCount(32) //Validate the count of the element

})
