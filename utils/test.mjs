import fs from "node:fs";

const OutputFilePath = "./src/output.txt"

export const test = () => {
    const answerFile = fs.readFileSync("./src/answer.txt", "utf8");
    const answerLines = answerFile.split("\n");

    if (answerLines[answerLines.length - 1] !== "") {
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

test()