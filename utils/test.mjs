import fs from "node:fs";

const OutputFilePath = "./src/output.txt"


fs.writeFileSync(OutputFilePath, '')

export const print = (line) => {
    console.log(line)
    fs.appendFileSync(OutputFilePath, line + '\n')
}

export const createDebugLogger = (currIterator, targetTc) => {
    if (currIterator === targetTc - 1) {
        return (...args) => console.log("debug log - ", ...args)
    }
    return () => { }
}
export const test = () => {
    const answerFile = fs.readFileSync("./src/answer.txt", "utf8");
    const answerLines = answerFile.split("\n");

    if (answerLines.at(-1) !== "") {
        throw Error("No New line at the end of answer file");
    }


    const outputFile = fs.readFileSync(OutputFilePath, "utf8");
    const outputLines = outputFile.split("\n");
    const errors = []
    for (let i = 0; i < answerLines.length; i++) {
        if (answerLines[i] !== outputLines[i]) {
            errors.push(`Wrong answer on line ${i + 1}, expected ${answerLines[i]}, got ${outputLines[i]}`)
        }
    }
    if (errors.length) {
        console.log(errors.join("\n"))
    } else {
        console.log("All Tests passed")
    }
}