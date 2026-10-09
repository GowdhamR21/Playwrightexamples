import{test, expect} from '@playwright/test'

test.skip('Just Alert with OK button', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling dialog window handler 

    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()// press ok buttion in alert
        await page.waitForTimeout(5000)
    
    })

    await page.click('#alertBtn')
    await page.waitForTimeout(5000)
})

test.skip('Confirmation Alert cancel and ok', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling dialog window handler 

    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss()//press cancel button in alert
        await page.waitForTimeout(5000)
    
    })

    await page.click('#confirmBtn')
    await page.waitForTimeout(5000)

    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')

})

test('Promt alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling dialog window handler 

    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('gowdham')//Pass gowdham name and click OK button
      
    
    })

    await page.click('#promptBtn')
    await page.waitForTimeout(5000)

    await expect(page.locator('#demo')).toHaveText('Hello gowdham! How are you today?')

})