const fs = require("fs");
const path = require("path");
const json2xls = require("json2xls");

function converter() {
  const dir = path.join(__dirname, "ipl_2020");
  console.log(dir);
  fs.readdir(dir, (err, files) => {
    // console.log(err);

    files.map((file) => {
      //   console.log(file);
      const folderPath = path.join(dir, file);
      fs.readdir(folderPath, (err, files) => {
        files.forEach((file) => {
          const filePath = path.join(folderPath, file);
          let fileName = file.split(".")[0].trim();
          console.log(folderPath);
          fs.readFile(filePath, "utf8", function (err, body) {
            if (body != "") {
              const jsonData = JSON.parse(body);

              const xls = json2xls(jsonData);
              fs.writeFileSync(
                path.join(folderPath, `${fileName}.xlsx`),
                xls,
                "binary"
              );
            }
          });
        });
      });
    });
  });
}
converter();
module.exports = {
  converter: converter,
};
