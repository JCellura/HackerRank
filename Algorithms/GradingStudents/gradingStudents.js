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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    let newArray = [];
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] % 10 == 0) {
            newArray.push(grades[i]);
        }
        else if (grades[i] > 35 && grades[i] != 100) {
            let roundedNumber;
            var baseNumber = Math.floor(grades[i] / 10);
            baseNumber = baseNumber.toString() + 0
            baseNumber = parseInt(baseNumber);
            // console.log(baseNumber);
            // console.log(grades[i] - baseNumber);
            let value = grades[i] - baseNumber;
            let newValue;
            if (value == 7 || value == 6 || value == 5) {
                newValue = value
            } else if (value == 8 || value == 9) {
                newValue = 10
            } else if (value == 4 || value == 3) {
                newValue = 5
            } else if (value == 2 || value == 1) {
                newValue = value
            }
            // console.log('new value',newValue)
            roundedNumber = baseNumber + newValue
            newArray.push(roundedNumber);
        } 
         else { newArray.push(grades[i]) }
    } return newArray;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades);

    ws.write(result.join("\n") + "\n");

    ws.end();
}