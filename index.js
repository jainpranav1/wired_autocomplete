const { chromium } = require("playwright");

let person = "Jacksepticeye";

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

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com");

  for (let i = 0; i < prompts.length; ++i) {
    await page.goto("https://google.com");
    await page.type("[aria-label='Search']", prompts[i]);
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `images/${i}.png` });
  }

  await browser.close();
}

main();
