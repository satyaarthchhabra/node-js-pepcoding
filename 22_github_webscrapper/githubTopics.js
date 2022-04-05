const cheerio = require("cheerio");
const fs = require("fs");
const pdfKit = require("pdfkit");
const path = require("path");
const request = require("request");
const url = "https://github.com/topics";
request(url, (err, res, html) => {
  if (!err) {
    scrap(html);
  } else {
    console.log(err);
  }
});
function scrap(html) {
  let $ = cheerio.load(html);
  if (!fs.existsSync("./githubIssues")) {
    fs.mkdirSync("./githubIssues");
  }
  for (let i = 1; i <= 3; i++) {
    let href = $(
      `#js-pjax-container > div.container-lg.p-responsive.mt-6 > ul > li:nth-child(${i}) > div > a`
    ).attr("href");
    let link = "https://github.com/" + href;
    let topic = href.split("/").pop();
    let topicPath = `./githubIssues/${topic}`;
    if (!fs.existsSync(topicPath)) {
      fs.mkdirSync(topicPath);
    }
    request(link, (err, res, html2) => {
      if (!err) {
        scrapAgain(html2, topicPath);
      } else {
        console.log(err);
      }
    });
  }
}
function scrapAgain(html, topicPath) {
  let $ = cheerio.load(html);
  let list = $(".col-md-8 article h3");
  let toBeWritten = [];
  for (let i = 1; i <= 8; i++) {
    let aTag = $(list[i]).find("a");
    let repos = $(aTag[1]).attr("href");
    if (repos != undefined) {
      let reponame = repos.split("/");
      let name = reponame.join("_");
      let repoPath = path.join(topicPath, name);
      if (!fs.existsSync(repoPath)) {
        fs.mkdirSync(repoPath);
      }
      request("https://github.com/" + repos + "/issues", (err, res, html3) => {
        if (!err) {
          scrapIssues(html3, repoPath);
        } else {
          console.log(err);
        }
      });
    }
  }
}

function scrapIssues(html, repoPath) {
  const $ = cheerio.load(html);
  let issueArr = $(
    "#repo-content-pjax-container > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div:nth-child(2) > div div>a.Link--primary"
  );
  let objectToBeWritten = {};
  for (let i = 0; i < issueArr.length; i++) {
    let issue = $(issueArr[i]);
    let text = issue.text();
    let href = issue.attr("href");
    objectToBeWritten[text] = href;
  }
  let exectPath = path.join(repoPath, "Issues.pdf");
  let pdf = JSON.stringify(objectToBeWritten);
  let doc = new pdfKit();
  doc.pipe(fs.createWriteStream(exectPath));
  doc.text(pdf);
  doc.end();
}
