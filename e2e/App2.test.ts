import { test } from './baseFixtures';
import { testUrl } from './constants';

test.beforeEach(async ({ page }) => {
  await page.goto(testUrl)
})

test('use Turquoise as a background color', async ({ page }) => {
  await page.click("text=Turquoise")
  await page.waitForSelector("text=#1abc9c")
});
