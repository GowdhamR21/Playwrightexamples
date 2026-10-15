import{test, expect} from '@playwright/test'

test('table', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const column = await page.locator('//div[@class="table-container"]/table/thead/tr/th')
    console.log("Column numbers:", await column.count())
    await expect(column).toHaveCount(4)

    const row =await page.locator('//div[@class="table-container"]/table/tbody/tr')
    console.log("Row count:", await row.count())
    await expect(row).toHaveCount(5)
    await page.locator('//div[@class="table-container"]/table/tbody/tr[4]/td/input').check()
    await page.waitForTimeout(3000)
    await expect(page.locator('//div[@class="table-container"]/table/tbody/tr[4]/td/input')).toBeChecked()
    const option = row.filter({

        has: page.locator('td'),
        hasText: 'Laptop'

    })
    option.locator('input').check()
    await page.waitForTimeout(3000)

   await selectprod(row, page, 	'Wireless Earbuds')
   await selectprod(row, page, 'Smartphone')

})

async function selectprod(row, page, name)
{

    const option2 =row.filter({

        has: page.locator('td'),
        hasText: name


    })
    option2.locator('input').check()
    await page.waitForTimeout(3000)
}