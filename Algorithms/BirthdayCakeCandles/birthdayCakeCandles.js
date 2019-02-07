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

// Essentially in this problem, we are seeking to find the largest number within an array
//  and how frequently that number exists within the array

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(array) {
    // first, I take the array that is passed through into the function, slice it and sort it.
    // by sorting it, I am able to re-order the array from lowest to largest integer
    // this will be very important later
    let newArray = array.slice(0).sort((a, b) => {
        return a-b
    });
    let counter = 1;
    let n = newArray.length;
    console.log(newArray);
    // in this for loop, I am looping through the newArray where n is equal is newArray.length
    // Now I know that the last value in the array (index [n-1]), is the largest value
            // this essentially represents the minimum of 1 candle that can be blown out
                    // therfore this is why the counter varibale is initially set to 1
    // in the loop, I check to see if the decending elements (from right to left) are individually equal to the last element
        // if this turns out to be true then we had one to the counter variable
    // for example, lets look at -> if (newArray[n-2] == newArray[n-1])
        // this represents checking if the second to last element is equal to the last (the largest) element
            // and if this in fact equal then we know we now have at least two elements of the largest value
    // we continue this for loop for the entire array
    for (var i = 2; i <= n; i++) {
        if (newArray[n - i] == newArray[n - 1]) {
            counter++
        }
    }
    // ulitmately the counter variable provides us with the total number of elements that have the lagest value
    return counter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}