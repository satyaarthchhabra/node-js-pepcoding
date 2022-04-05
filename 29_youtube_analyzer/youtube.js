let puppeteer = require("puppeteer");
const pdfkit = require("pdfkit");
const fs = require("fs");
(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
    });
    const pages = await browser.pages();
    const page = pages[0];
    await page.goto(
      "https://www.youtube.com/playlist?list=PLW-S5oymMexXTgRyT3BWVt_y608nt85Uj"
    );
    let name = await waitSelectAndGetData(
      ".ytd-playlist-sidebar-renderer a.yt-formatted-string",
      page
    );
    let stats = await waitSelectAndGetData("#stats yt-formatted-string", page);
    console.log(name, stats);
    let totalVidLength = parseInt(stats[0].split(" ")[0]);
    let arr = await waitSelectAndGetData(
      "#container>#thumbnail  ytd-thumbnail-overlay-time-status-renderer",
      page
    );
    let currentVidLen = arr.pop();
    while (totalVidLength - currentVidLen > 20) {
      await scrollTOBottom(page);
      totalVidLength = totalVidLength - currentVidLen;
    }
    let content = await waitSelectAndGetData(
      "#contents #container #video-title",
      page
    );

    let doc = new pdfkit();
    doc.pipe(fs.createWriteStream("YouTUBE.pdf"));
    doc.text(JSON.stringify(content));
    doc.end();
  } catch (err) {
    console.log(err);
  }
})();

function scrollTOBottom(page) {
  return new Promise(async (res, rej) => {
    await page.evaluate(() => {
      window.scrollBy(
        0,
        window.scrollBy(0, document.querySelector("#contents").scrollHeight)
      );
    });
    setTimeout(res, 3000);
  });
}

function waitSelectAndGetData(select, page) {
  return new Promise(async (resolve, reject) => {
    try {
      await page.waitForSelector(select);
      let name = await page.evaluate((select) => {
        let reObj = [];
        let arr = document.querySelectorAll(select);
        for (let i = 0; i < arr.length; i++) {
          reObj.push(arr[i].innerText);
        }
        reObj.push(arr.length);
        return reObj;
      }, select);
      resolve(name);
    } catch (err) {
      reject(err);
    }
  });
}
