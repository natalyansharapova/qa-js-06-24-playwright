import { chromium } from "playwright"; 
async function scrap() {
    const browser = await   chromium.launch({headless: false});
    const page  = await browser.newPage();
    await page.goto('https://www.mos.ru/');
    await page.getByText('logi').click()
    await.page.waitforSelector('button', {name: Login});
    await page.getByLabel('login').fill('customer')
      await browser.close()
    }
  
    scrap()