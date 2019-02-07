'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let arrayA = a;
    let arrayB = b;
    let newArray = [];
    let counterA = 0;
    let counterB = 0
    // we are comparing the three values within each array based on their index
    // if arrayA[0] > arrayB[0] -> counterA++ and so on
    for (var i = 0; i < arrayA.length; i++) {
        if (arrayA[i] > arrayB[i]) {
            counterA++
        } else if (arrayA[i] < arrayB[i]) {
            counterB++
        }
    }
    newArray.push(counterA);
    newArray.push(counterB);
    return newArray;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}