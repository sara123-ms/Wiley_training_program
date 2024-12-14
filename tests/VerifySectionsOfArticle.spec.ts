import { test, expect } from '@playwright/test';

test("Navigate to Medicine Article and Select Section", async ({ page }) => {

    await test.step("Open the browser and go to the website", async () => {
        await page.goto("https://onlinelibrary.wiley.com/");
    });

    await test.step("Click on the search field and enter 'medicine'", async () => {
        const searchField = page.locator('//*[@id="searchField1"]');
        await searchField.click();
        await searchField.fill("medicine");
    });

    await test.step("Submit the search form", async () => {
        await page.keyboard.press("Enter");
    });

    await test.step("Navigate to the medicine search results page", async () => {
        await expect(page).toHaveURL(/.*action\/doSearch\?AllField=medicine.*/);
    });

    await test.step("Click on the first article link", async () => {
        const articleLink = page.locator('//*[@id="search-result"]/li[1]/div/h2/span/a');

        // Wait for the element to be visible and clickable
        await articleLink.waitFor({ state: 'visible' });

        // Click the article link
        await articleLink.click();
    });

    await test.step("Navigate to the article page", async () => {
        await expect(page).toHaveURL("https://onlinelibrary.wiley.com/doi/10.1002/jgf2.294");
    });

    await test.step("Select the sections dropdown", async () => {
        const sectionsDropdown = page.locator('//*[@id="sections_Ctrl"]');
        await sectionsDropdown.click();
    });

    await test.step("Select a section from the dropdown", async () => {
        const sectionOption = page.locator('//*[@id="sections_Pop"]/ul/li[2]/a/span');
        await sectionOption.click();
    });

    await test.step("Verify the section selection", async () => {
        // Check if the section has been selected
        const selectedSection = page.locator('//*[@id="sections_Ctrl"]');
        await expect(selectedSection).toContainText("1 INTRODUCTION");
    });


});
