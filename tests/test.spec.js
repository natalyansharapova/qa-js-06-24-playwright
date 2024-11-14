import { test, expect } from '@playwright/test';

test('Открытие страницы', async ({ page }) => {
  await page.goto('https://www.mos.ru/');
  await expect(page).toHaveTitle('Официальный сайт Мэра Москвы');
  await page.close()
});

test('Мой район', async ({ page }) => {
  await page.goto('https://www.mos.ru/');
  await page.locator('[id="mos-dropdown-submenu_\\/moi-raion\\/"]').click();
  await page.getByRole('button', { name: 'Начать поиск' }).click();
  await page.locator('#moiRaionDistrictsSearch').fill('sdfsd');
 });

test('Полезные телефоны', async ({ page }) => {
  await page.goto('https://www.mos.ru/');
  await page.getByRole('link', { name: 'Записаться к врачу' }).click();
  await expect(page.getByRole('heading', { name: 'Вход' })).toBeVisible();
  await page.close()
});


test('Популярные ссылки', async ({ page }) => {
  await page.goto('https://www.mos.ru/');
  await expect(page.getByRole('heading', { name: 'Популярные ссылки' })).toBeVisible();
  await page.close()
});

test('Поиск', async ({ page }) => {
  await page.goto('https://www.mos.ru/');
  await page.getByRole('button', { name: 'Поиск по сайту' }).click();
  await page.getByRole('combobox', { name: 'Введите слово для поиска' }).fill('Карта москвича');
  await page.getByRole('button', { name: 'Найти' }).click();
  await expect(page.getByRole('heading', { name: 'Поиск' })).toBeVisible();
  await page.close()
});
