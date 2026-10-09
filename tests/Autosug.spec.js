import { test, expect } from '@playwright/test';

test('Bootstrapdropdown', async ({ page }) => {

    await page.goto('https://www.redbus.in/')

    await page.locator('#srcinput').fill('Delhi')
    await page.getByText('ISBT Kashmiri Gate, Delhi', { exact: true }).click();

    await page.waitForTimeout(3000)
    

})