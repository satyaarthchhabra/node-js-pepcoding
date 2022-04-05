const inputArr = process.argv.slice(2);

import { helpKey } from "./commands/help.js";
import { treeKey } from "./commands/tree.js";
import { organizeKey } from "./commands/organize.js";

// console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help
let command = inputArr[0];

switch (command) {
  case "tree":
    treeKey(inputArr[1]);
    break;
  case "organize":
    organizeKey(inputArr[1]);
    break;
  case "help":
    helpKey();
    break;
  default:
    console.log("Please 🙏 Input Right command");
    break;
}
