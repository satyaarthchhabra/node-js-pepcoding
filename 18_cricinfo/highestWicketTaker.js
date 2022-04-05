const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const cheerio = require("cheerio");
const request = require("request");
request(url, (err, res, html) => {
    if (!err) {
        scrap(html);
    }
})
function scrap(html) {
    let selectTool = cheerio.load(html);
    let teamsArr = selectTool(".match-info.match-info-MATCH .team");
    let wTeamName;
    for (let i = 0; i < teamsArr.length; i++) {
        // .hasClass()
        let hasclass = selectTool(teamsArr[i]).hasClass("team-gray");
        if (hasclass == false) {
            // find 
            let teamNameElem = selectTool(teamsArr[i]).find(".name");
            wTeamName = teamNameElem.text().trim();
        }
    }
    let innigsArr = selectTool(".card.content-block.match-scorecard-table>.Collapsible");

    for (let i = 0; i < innigsArr.length; i++) {
        let teamNameElem = selectTool(innigsArr[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        let hwtName = "";
        let hwNum = 0;
        if (wTeamName == teamName) {
            let tableElem = selectTool(innigsArr[i]).find(".table.bowler");
            let allBowlers = selectTool(tableElem).find("tbody tr");
            for (let j = 0; j < allBowlers.length; j++) {
                let allColsOfPlayer = selectTool(allBowlers[j]).find("td");
                let playerName = selectTool(allColsOfPlayer[0]).text();
                let wickets = selectTool(allColsOfPlayer[4]).text();
                if (wickets >= hwNum) {
                    hwNum = wickets;
                    hwtName = playerName;
                }
            }
            console.log(`Winning Team => ${wTeamName}
highest wicket Taker playerName => ${hwtName}
wickets => ${hwNum}`)
        }
    }
}