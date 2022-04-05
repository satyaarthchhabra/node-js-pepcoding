const request = require("request");
const cheerio = require("cheerio");

request("https://www.geeksforgeeks.org", cb);

function cb(error, response, html) {
  if (error) {
    console.error(error);
  } else {
    handlehtml(html);
  }
}
function handlehtml(html) {
  let $ = cheerio.load(html);
  // #home-page > div > div.right-top > div:nth-child(4) .item-container li a

  let linksArr = $(
    "#home-page > div > div.right-top > div:nth-child(4) .item-container li a"
  );

  let selLink = $(linksArr[1]).attr("href");
  console.log(selLink);
  request(selLink, (error, response, html) => {
    const $ = cheerio.load(html);
    // #post-153571 > div.text > ol:nth-child(11) li a
    let contentArr = $(" #post-153571 > div.text > ol:nth-child(11) li a");
    let q2 = $(contentArr[1]).text();
    let q1 = $(contentArr[0]).text();
    let q3 = $(contentArr[2]).text();
    let q4 = $(contentArr[3]).text();
    console.log(q1);
    console.log(q3);
    console.log(q2);
    console.log(q4);
  });
}
