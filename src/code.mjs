// import { createDebugLogger } from "../utils/debug-logger.mjs";

/*
number input
+readline()

array input
readline().split(" ")

number array input
readline().split(" ").map(Number)

create debug logger
const log = createDebugLogger(tc,0)
*/

/* Use the below block along with "use strict" */

/* --------------------------------------------- */
'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();
});
function readline() {
    return inputString[currentLine++];
}

/* ------------ */

function main() {



}
/* --------------------------------------------- */



/*
notes

*/