'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// For being a 'medium' ranked challenge, I personally found this quick simple
// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {

    // first we create an array which will represent the values we ulitmately return
    let counterArray = [];

    // the length of this counterArray is based on the length of the querires array
        // this is because the counterArray itself counts the amount of times earch query string exists

    // This for loop will initialize an array with all zeros to start
    // for example, if the queries array has a lengh of 3 => counterArray = [0,0,0]
    for (var i = 0; i < queries.length; i++) {
        counterArray[i] = 0;
    }
  
    // We know we need to loop over the queries array,
        // but we actually will be looping over the string array first

    // we need to first check to see if queries[0] === strings[i]
        // and if so then we add 1 to the counterArray[0]
    // We then need to do this for each index of the queries array

        // for (var i = 0; i < strings.length; i++) {
        //     if (queries[0] == strings[i]) {
        //         counterArray[0]++
        //     }
        //     else if (queries[1] == strings[i]) {
        //         counterArray[1]++
        //     }
        //     ....
        // }

    // Now instead of doing this for each index of the queries array and pulling our hair out,
        // we can simply loop over the queiries array ontop of the strings array loop
    // ********************************

    for (var j = 0; j < queries.length; j++) {
        for (var i = 0; i < strings.length; i++) {
            if (queries[j] == strings[i]) {
                counterArray[j]++
            }
        }
    }

    return counterArray;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    let res = matchingStrings(strings, queries);

    ws.write(res.join("\n") + "\n");

    ws.end();
}
