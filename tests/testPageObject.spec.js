import { test, expect, chromium } from "@playwright/test";

function makeFAQLinkElement(page){
  const element = page.getByRole('link', { name: 'FAQ' })
  return {
    async click(){
      await element.click()
    }
  }
};
function makeSwitchElement(page){
  const element = page.getByRole('button', { name: 'Switch to light them' })
  return {
    async click(){
      await element.click()
    }
  }
};
function makeSearchElement(page){
  const element = page.getByRole('button', { name: 'Search' })
  return {
    async click(){
      await element.click()
    }
  }
};

function makePage(page) {
  const url = "https://code.visualstudio.com/";

  const faqElement = page.getByRole('link', { name: 'FAQ' })

  const switchTheme = page.getByRole('button', { name: 'Switch to light them' })

  return {
    async navigate() {
      await page.goto(url);
    },
    async pageIsExist() {
      const title = await page.title();
      expect(title).toContain("Visual Studio Code");
    },
    async linkFAQ(){
      await faqElement.click();
      await expect(page.getByRole('heading', { name: 'Visual Studio Code FAQ' })).toBeVisible();
    },
    async switchTheme(){
      await switchTheme.click();
    }
  };
}

test("Открытие страницы", async ({ page }) => {
  const pageMain = makePage(page);
  await pageMain.navigate();
  await pageMain.pageIsExist();
});

test("Переход по FAQ", async ({ page }) => {
  const pageMain = makePage(page);
  await pageMain.navigate();
  await pageMain.linkFAQ();
});

test("Смена темы", async ({ page }) => {
  const pageMain = makePage(page);
  await pageMain.navigate();
});