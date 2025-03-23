import test, { expect } from "@playwright/test";

test.describe("homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("searchbox-show", async ({ page }) => {
    await page.getByTestId("pokeinput").fill("gar");
    await expect(page.getByTestId("pokemonfound")).toBeVisible();
  });

  test("searchbox-hidden", async ({ page }) => {
    await page.getByTestId("pokeinput").fill("");
    await expect(page.getByTestId("pokemonfound")).toBeHidden();
  });
});
