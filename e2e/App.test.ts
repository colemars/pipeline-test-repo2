import { test } from './baseFixtures';
import { testUrl } from './constants';

test.beforeEach(async ({ page }) => {
  await page.goto(testUrl)
})

test('use Turquoise as a default background color', async ({ page }) => {
  await page.waitForSelector("text=#1abc9c")
});

test('use Red as a background color', async ({ page }) => {
  await page.click("text=Red")
  await page.waitForSelector("text=#e74c3c")
});
