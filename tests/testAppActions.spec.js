import { test, expect, chromium } from "@playwright/test";

function makeSearchElement(page){
  const element = page.getByRole('button', { name: 'Search' })
  return {
    async click(){
      await element.click()
    }
  }
};
function makeSearchTextElement(page){
    const element = page.getByRole('textbox', { name: 'Search Docs' })
    return {
      async fill(someText){
        await element.fill(someText)
      }
    }
  };
  function makeSearchButtonElement(page){
    const element = page.locator('#search-form').getByRole('button', { name: 'Search' });
    return {
      async click(){
        await element.click()
      }
    }
  };
  
function makePage(page) {
  const url = "https://code.visualstudio.com/";
  const pageElements = {
    searchButtonElement: makeSearchButtonElement(page),
    searchElement: makeSearchElement(page),
    searchTextElement: makeSearchTextElement(page)
  };
  return {
    async navigate() {
      await page.goto(url);
    },
    async navigateSearch() {
      await pageElements.searchElement.click();
      await expect(page.getByRole('heading', { name: 'Search' })).toBeVisible();
    },
    async fillSearchText(someText) {
      await pageElements.searchTextElement.fill(someText);
    },
    async clickButton() {
      await pageElements.searchButtonElement.click();
    }
  };
}

function makeSearchAction(page){
  const pageMain = makePage(page);
  return {
     async search(someText) {
      await pageMain.navigate();
      await pageMain.navigateSearch();
      await pageMain.fillSearchText(someText);
      await pageMain.clickButton();
    }
  }
}

test("Поиск", async ({ page }) => {
  const pageSearchAction = makeSearchAction(page);
  await pageSearchAction.search('API');
});
