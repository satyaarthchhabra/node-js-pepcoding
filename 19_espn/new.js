const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
const excelConverter = require("./excelDataConverter");
const path = require("path");
const iplFolderName = "ipl_2020";
const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";

request(url, function (err, response, html) {
  if (err) {
    console.log(err);
  } else {
    getAllMatches(html);
    excelConverter.converter();
  }
});

const getAllMatches = (html) => {
  const $ = cheerio.load(html);
  const links = $(".match-info-link-FIXTURES");
  //   folder creation
  const folderPath = path.join(__dirname, iplFolderName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
  for (let i = 0; i < links.length; i++) {
    let matchLink = $(links[i]).attr("href");
    let fullLink = "https://www.espncricinfo.com" + matchLink;
    // console.log(fullLink);
    getMatchData(fullLink);
  }
};
const getMatchData = (link) => {
  //   link =
  //     "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";
  request(link, (err, res, html) => {
    const $ = cheerio.load(html);
    const names = $("div.team > div.name-detail > a > p");
    const team1 = $(names[0]).text();
    const team2 = $(names[1]).text();
    console.log(team1, team2);
    let folderPath1 = path.join(__dirname, iplFolderName, team1);
    if (fs.existsSync(folderPath1) == false) {
      fs.mkdirSync(folderPath1);
    }
    let folderPath2 = path.join(__dirname, iplFolderName, team2);
    if (fs.existsSync(folderPath2) == false) {
      fs.mkdirSync(folderPath2);
    }

    let batsmenContainer = $(".table.batsman");
    for (let i = 0; i < batsmenContainer.length; i++) {
      // 2 bar chalega
      let currentTeam_batsmen = $(batsmenContainer[i]).find("tbody tr");

      for (let j = 0; j < currentTeam_batsmen.length - 1; j += 2) {
        const batsmenA = $(currentTeam_batsmen[j]).find("a");

        let batsmanName = $(batsmenA).text();
        // let batsmenLink = $(batsmenAnchor).attr("href");

        createJSON($(names[i]).text(), batsmanName);

        if (i == 0) {
          fillJsonWithStats(
            $(names[i]).text(),
            $(names[1]).text(),
            batsmanName,
            currentTeam_batsmen[j],
            $
          );
        } else {
          fillJsonWithStats(
            $(names[i]).text(),
            $(names[0]).text(),
            batsmanName,
            currentTeam_batsmen[j],
            $
          );
        }
      }
    }
  });
};

function createJSON(teamName, batsmenName) {
  let filePath = path.join(
    __dirname,
    iplFolderName,
    teamName,
    batsmenName + ".json"
  );

  if (fs.existsSync(filePath) == false) {
    let file = fs.createWriteStream(filePath);
    file.end();
  }
}

function fillJsonWithStats(
  batsmanTeam,
  opponentTeam,
  batsmanName,
  currentTeam_batsmenRow,
  $
) {
  let batsmanRow = $(currentTeam_batsmenRow).find("td");
  // console.log(batsmanRow.length);

  let opponentName = opponentTeam;

  let runs = $(batsmanRow[2]).text();
  let balls = $(batsmanRow[3]).text();
  let fours = $(batsmanRow[5]).text();
  let sixes = $(batsmanRow[6]).text();
  let sr = $(batsmanRow[7]).text();

  let description = $(".match-info.match-info-MATCH .description")
    .text()
    .split(",");
  let date = description[2];
  let venue = description[1];
  // console.log(description);

  let result = $(".match-info.match-info-MATCH .status-text").text();

  let objArr = [];

  let obj = {
    "My Team Name": batsmanTeam,
    "Opponent Team Name": opponentName,
    Runs: runs,
    Balls: balls,
    "4s": fours,
    "6s": sixes,
    SR: sr,
    Date: date,
    Venue: venue,
    Result: result,
  };
  objArr.push(obj);

  let file_path = path.join(
    __dirname,
    iplFolderName,
    batsmanTeam,
    batsmanName + ".json"
  );

  if (fs.existsSync(file_path) == false) {
    fs.writeFileSync(file_path, JSON.stringify(objArr));
  } else {
    let data = fs.readFileSync(file_path, "UTF-8");
    if (data.length == 0) {
      data = [];
    } else {
      data = JSON.parse(data);
    }
    data.push(obj);
    fs.writeFileSync(file_path, JSON.stringify(data));
  }
}
