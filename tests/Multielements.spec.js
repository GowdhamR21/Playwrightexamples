import{test,expect}from '@playwright/test';

test('Multielements',async({page})=>{
await page.goto('https://demoblaze.com/index.html')

await page.waitForSelector('a')
const links = await page.$$('a')
console.log('Number of links=' + links.length)

for (const link of links) {
  const text = await link.textContent()
  console.log(text)

}

//Finding all products in the page
await page.waitForSelector('//div[@id="tbodyid"]//h4//a')
const products = await page.$$('//div[@id="tbodyid"]//h4//a')

for (const product of products){
    const productname = await product.textContent()
    console.log( productname)
}

})
