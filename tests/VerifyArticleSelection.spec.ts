import { test, expect } from '@playwright/test';

test("VerifyArticleSelection", async ({ page }) => {

    await test.step("Open the browser", async () => {
      await page.goto("https://onlinelibrary.wiley.com/");
    });
  
    await test.step('Click the "Art & Applied" dropdown', async () => {
      await page.locator('//*[@id="accordionHeader-3"]').click();
    });

    await test.step('Click the "Art & Photography', async () => {
        await page.locator('//*[@id="b25bbdef-9c40-4084-b6c0-89231e6c42672"]/div[1]/ul/li[1]/a/span').click();
    });
  
    await test.step('Navigate to the Art & Photography results articles showing page', async () => {
        await expect(page).toHaveURL('https://onlinelibrary.wiley.com/topic/browse/000060');
    });
  
});