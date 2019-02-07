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

// Complete the dynamicArray function below.
function dynamicArray(n, queries) {
    // we initially set our global variables based on the explanation from Hackerrank
    let N = n;
    let lastAnswer = 0;
    // we need S to be an array which contains an N amount of subArrays
    // for example if N=2 as in the example from the explanation, S = [[],[]]
    let S = []
    for (var i = 0; i < N; i++) {
        S[i] = []
    }
    // We will use this lastAnswerArray later to push our values into to be displayed
    let lastAnswerArray = [];

    for (var i = 0; i < queries.length; i++) {
        // in the subArrays the index 0 reperesents either 1/2 Query,
            // index 1 represents x and index 2 represents y
                // *[1/2, x, y]*

        // if querires[i][0] == 1, then we need to execute Query 1
        if (queries[i][0] == 1) {
            let x = queries[i][1];
            let y = queries[i][2];

            // this comes directly from the instructions
                // at this time, lastAnswer is still equal to 0

            let seq = ((x ^ lastAnswer) % N); // *Step 1*

            // we need to append or "push" the value of y into the S[seq] subarray
                // for example, if y is equal to 5 and seq=0 => S[0].push(5)
                    // this will result in S[0]=[5] or S=[[5],[],[],[],...]

            S[seq].push(y); // *Step 2*

        // if queries[i][0] == 2, we need to execute Query 2
        } else if (queries[i][0] == 2) {
            let x = queries[i][1];
            let y = queries[i][2];

            let seq = ((x ^ lastAnswer) % N); // Step 1
            // this is the difference between Query 1 and 2
            // in the directions where it says size, it means length => S[seq].length

            // First I will show this all in one line how the directions describe
            // lastAnswer = S[seq][(y % S[seq].length)] // *Step 2*

            let index = (y % S[seq].length); // *Step 2*
            lastAnswer = S[seq][index] // I prefer to break this down into two steps
            
            // console.log(lastAnswer); // *Step 3*
            // Instead of 'printing' the new value of lastAnswer,
                // We push it into the lastAnswerArray and return it later
            lastAnswerArray.push(lastAnswer);
        }
    }
    // returning the lastAnserArray prints the individual values out how hackerrank wants
        // this part can be kind of confusing if you are not used to hackerrank
    return lastAnswerArray;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}