import fs from "node:fs";

const textFile = fs.readFileSync("./src/input.txt", "utf8");
const lines = textFile.split("\n");
if (lines.at(-1) !== "") {
  throw Error("No New line at the end of input");
}
export const readline = () => {
  return lines.shift();
};
