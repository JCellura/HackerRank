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

// Complete the migratoryBirds function below.
// This function is credit of m_boland on the hackerrank discussion boards
// Check out migratoryBirdsNode.js for my original solution which is very similar
function migratoryBirds(arr) {
    // we initially sort the array from lowest to highest numerically
    arr.sort(function (a, b) { return a - b })
    // numMap is obj that we will display the frequency of each number
    // for exampl,e {'1': 1, '3': 1, '4': 3, '5': 1}
    const numMap = {};
    var maxNum = 0;
    var maxChar = 0;
    // if numMap[num] doesn't already exists, then we give it a value of one
    // if numMap[num] does alreayd exist, we simply add 1 
    for (var num of arr) {
        if (numMap[num]) {
            numMap[num]++;
        } else {
            numMap[num] = 1;
        }
    }

    // for any confused by the logic behind -> for (var num of arr) it is the same as..
    // for (var i=0; i<arr.length; i++) {
    //     if (numMap[arr[i]]) {
    //         numMap[arr[i]]++
    //     } else {
    //         numMap[arr[i]] = 1
    //     }
    // }

    // Think of this, var num represents interations through and array [1,3,4,5], where
        // the first iteration through num = 1, second iteration through num = 3 and so on. 
    // Essentailly, we are finding the max number and because maxNum starts at zero,
    // the first itiration through maxNum will be set to numMap[num] which for example,
    // if numMap = {'1':1, '3':1, '4':3, '5':1} num = 1 in the first itiration so numMap[1] = 1
    // and because 1 > 0 => maxNum will be set to euqal 1, numMap[3] = 1 will fail because its not greater than 1,
    // then numMap[4] = 3 which 3 > 1 so maxNum will be set to equal 3 and maxChar will be set to 4 (num) 
    for (var num in numMap) {
        if (numMap[num] > maxNum) {
            maxNum = numMap[num];
            maxChar = num;
        }
    }

    // For any confused by the logic behind -> for (var num in numMap) it is the same as..
    // let keysArray = Object.keys(obj)
    // for (var i=0; i<keysArray.length; i++) {
    //     if (obj[keysArray[i]] > maxNum) {
    //         maxNum = obj[keysArray[i]];
    //         maxChar = keysArray[i];
    //     }
    // }

    return maxChar;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}