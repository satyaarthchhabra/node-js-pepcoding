import fs from "fs";
import path from "path";
export const treeKey = (dirPath) => {
  if (dirPath == undefined) {
    treeHelper(process.cwd(), "");
    return;
  } else {
    let doesExist = fs.existsSync(dirPath);
    if (doesExist) {
      treeHelper(dirPath, "");
    } else {
      console.log("Kindly enter the correct path");
      return;
    }
  }
};

function treeHelper(dirPath, indent) {
  // is file or folder
  // console.log(dirPath);
  if (!dirPath.includes("node_modules")) {
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
      let fileName = path.basename(dirPath);
      console.log(indent + "├──" + fileName);
    } else {
      let dirName = path.basename(dirPath);
      console.log(indent + "└──" + dirName);
      let childrens = fs.readdirSync(dirPath);
      // console.log(childrens);

      for (let i = 0; i < childrens.length; i++) {
        let childPath = path.join(dirPath, childrens[i]);
        treeHelper(childPath, indent + "\t");
      }
    }
  }
}
