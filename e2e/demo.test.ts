import { expect, test } from "@playwright/test";

test.describe("home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("home page has expected h1", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
  });

  test("Should not be found", async () => {
    expect(1).toEqual(1);
  });
});
