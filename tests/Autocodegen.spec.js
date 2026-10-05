/** commands
 * npx playwright test tests/Autocodegen.spec.js --headed-->Open the playwright test runner in headed mode and save the 
 * codein the tests/Autocodegen.spec.js file.
 * npx playwright codegen -->Open the Playwright Inspector to record and generate code.
 * npx playwright codegen --device="iPhone 13" -->Open the Playwright Inspector to record and generate code in iPhone 13 device.

*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('canvas').nth(2).click({
    position: {
      x: 241,
      y: 82
    }
  });
  await page.getByRole('link', { name: 'Time' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Type for hints...' }).press('Tab');
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.locator('form').getByRole('button', { name: 'View' }).click();
});