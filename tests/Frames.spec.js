import { test } from '@playwright/test';

test.skip('Frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame1 = page.frameLocator('frame[src*="frame_1.html"]');
    await frame1.locator('input[name="mytext1"]').fill('gowdham');


});

test('innerFrames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    await frame3.locator('input[name="mytext3"]').fill('gowdham');

    const innerframe = frame3.frameLocator('iframe[src*="docs.google.com/forms"]');
    await innerframe.locator('//div[@id="i6"]').check()
    await page.waitForTimeout(3000)


});