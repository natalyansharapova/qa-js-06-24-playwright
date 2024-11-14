import { chromium } from "playwright";

async function scrap() {
  const browser = await   chromium.launch({headless: false})
  const page  = await browser.newPage()
  await page.goto('https://www.mos.ru/')
  const elements = await page.locator('a').all()
  const links = await Promise.all (elements.map(async(locator) => {
    const text = await locator.innerText();
    const href = await locator.getAtribute('href');
    return {text, href};
  }))
    console.table(links)
    await browser.close()
  }

  scrap()