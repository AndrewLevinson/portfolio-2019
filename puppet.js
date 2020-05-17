const puppeteer = require('puppeteer')
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({
    width: 1000,
    height: 750,
    deviceScaleFactor: 2
  })
  await page.goto('https://andrewlevinson.github.io/dv/final-story/index.html')
  await page.screenshot({ path: 'assets/screenshots/arc.jpeg' })

  await browser.close()
})()
