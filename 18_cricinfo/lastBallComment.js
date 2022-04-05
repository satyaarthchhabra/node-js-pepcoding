const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
const request = require("request");
const cheerio = require("cheerio");
request(
  url,
  function (
    error,

    body
  ) {
    if (!error) {
      scrap(body);
    }
  }
);
function scrap(html) {
  let selectTool = cheerio.load(html);
  let lastBallComment = selectTool(
    ".d-flex.match-comment-padder.align-items-center .match-comment-long-text"
  );
  let comment = selectTool(lastBallComment[0]).text();
  console.log("Last Ball Comment: ", comment);
}
