const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;

async function checkPageMetaTags(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  // Check SEO tags
  const titleElement = await page.$('head title');
  expect(titleElement).toBeTruthy();

  const descriptionElement = await page.$('head meta[name="description"]');
  expect(descriptionElement).toBeTruthy();

  const keywordsElement = await page.$('head meta[name="keywords"]');
  expect(keywordsElement).toBeTruthy();

  // Check Twitter tags
  const twitterCardElement = await page.$('head meta[name="twitter:card"]');
  expect(twitterCardElement).toBeTruthy();

  const twitterTitleElement = await page.$('head meta[name="twitter:title"]');
  expect(twitterTitleElement).toBeTruthy();

  const twitterDescriptionElement = await page.$('head meta[name="twitter:description"]');
  expect(twitterDescriptionElement).toBeTruthy();

  await browser.close();
}

pages.forEach((page) => {
  test(`Page "${page.path}" should have correct SEO and meta/twitter tags`, async () => {
    const pageUrl = `${config.use.baseURL}${page.path}`;
    await checkPageMetaTags(pageUrl);
  });
});