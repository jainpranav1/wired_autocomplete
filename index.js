const puppeteer = require("puppeteer");

let person = "Taylor Swift";

let prompts = [
  `who is ${person}`,
  `who did ${person}`,
  `who would ${person}`,
  `who is ${person}`,
  `how is ${person}`,
  `how did ${person}`,
  `what does ${person}`,
  `what was ${person}`,
  `what is ${person}`,
  `can ${person}`,
  `does ${person}`,
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com");

  for (let i = 0; i < prompts.length; ++i) {
    await page.goto("https://google.com");
    await page.type("[aria-label='Search']", prompts[i]);
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `images/${i}.png` });
  }

  await browser.close();
})();
