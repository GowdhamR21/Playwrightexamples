
import { test, expect } from '@playwright/test';

test('Bootstrapdropdown', async ({ page }) => {

    await page.goto('https://www.htmlelements.com/demos/dropdownlist/checkboxes/index.htm')

    await page.waitForTimeout(5000)
    await page.locator('//span[@class="smart-drop-down-button"]').click()//Click on the dropdown button icon

    await page.locator('(//span[@class="smart-input"])[3]').click()
    await page.locator('(//span[@class="smart-input"])[4]').click()

    await page.waitForTimeout(5000)

   const texts = await page.locator('//span[@class="smart-input"]').allTextContents();

    for (const text of texts) {

        if (text.includes('Cafe Corretto') || text.includes('Cafe macchiato')) 
            {

                await text.click();
                console.log(text);
                break;

            }
           
    }
    





})
