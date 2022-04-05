const puppeteer = require("puppeteer");
const automate = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // fix the size of window
    await page._client.send("Emulation.clearDeviceMetricsOverride");
    await page.goto("https://www.hackerrank.com/auth/login");
    await page.waitForSelector(`input[placeholder="Your username or email"]`);
    await page.type(
      `input[placeholder="Your username or email"]`,
      "rinawar911@spruzme.com"
    );
    await page.type(`input[placeholder="Your password"]`, "abcdef1234");
    await page.keyboard.press("Enter");
    await page.waitForSelector(`div[data-automation="algorithms"]`);
    const [algo] = await page.$$(`div[data-automation="algorithms"]`);
    await algo.click();
    await page.waitForSelector(
      " section.filter-section.right-pane   section > div:nth-child(4) > div.filters > div > div > div:nth-child(1) > div > div"
    );
    await page.click(
      " section.filter-section.right-pane   section > div:nth-child(4) > div.filters > div > div > div:nth-child(1) > div > div"
    );
    const questArr = await page.$$("#contest-challenges-problem > div");

    questArr.map(async (question) => {
      await solveQuestion(question, page);
    });
    // questArr.map((quest) => {});
  } catch (error) {
    console.log(error);
  }
};

automate();
function solveQuestion(question, page) {
  return new Promise(async (resolve, reject) => {
    // console.log("hello");

    try {
      await question.click();
      await page.waitForSelector(
        ".hr-monaco-custom-input-wrapper.flex > div.checkBoxWrapper > div > label"
      );
      await page.click(
        ".hr-monaco-custom-input-wrapper.flex > div.checkBoxWrapper > div > label",
        { delay: 200 }
      );
      await page.waitForSelector(".custom-input textarea");
      await page.type(".custom-input textarea", "hello", { delay: 50 });
      await page.keyboard.down("Control");
      await page.keyboard.press("A");
      await page.keyboard.press("X");
      await page.click(
        ".hr-monaco-editor-parent .monaco-editor.no-user-select .vs",
        { delay: 200 }
      );
      await page.keyboard.down("Control");
      await page.keyboard.press("A");
      await page.keyboard.press("V");
      await page.click(".hr-monaco-submit", { delay: 2000 });
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}
