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
        // if their grade is already 70, 80, 90 ect. we dont change it 
        // and push it to array
        if (grades[i] % 10 == 0) {
            newArray.push(grades[i]);
        }
        // else if grades are over 37, we floor the number first
        // and then find the difference between the original value and the floored value
        // We use the value tp decide if that value should stay the same, for example 6 doesnt round up
        // or if it should round up, for example 8 rounds up to 10
        // and then we add that new value to the floored number for the final rounded number
        // we then push these rounded numbers into the array
        else if (grades[i] > 37) {
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
        // else if a number is less than or equal to 37 it immediately gets pushed into the array 
         else { newArray.push(grades[i]) }
    } 
    return newArray;
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