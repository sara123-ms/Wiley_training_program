import { test, expect } from '@playwright/test';

test("Search for Medicine Articles", async ({ page }) => {

    await test.step("Open the browser", async () => {
        await page.goto("https://onlinelibrary.wiley.com/");
    });

    await test.step("Click on the search field and enter some value", async () => {
        // Locate the search input field and type 'medicine'
        const searchField = page.locator('//*[@id="searchField1"]');
        await searchField.click();
        await searchField.fill("medicine");
    });

    await test.step("Submit the search form", async () => {
        // Submit the search by pressing 'Enter'
        await page.keyboard.press("Enter");
    });

    await test.step("Navigate to the medicine search results page", async () => {
        // Check if the URL contains the expected query parameters
        await expect(page).toHaveURL(/.*action\/doSearch\?AllField=medicine.*/);
    });
});


