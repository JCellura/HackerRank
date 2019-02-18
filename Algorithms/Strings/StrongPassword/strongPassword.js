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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    // First we create an array which will help us check the requirements for the password
    let array = [0,0,0,0,0];
    // this counter variable will be used to count the min number of additional characters needed
    let counter = 0;

    console.log(password);

    // we know the password must be 6 characters long at least
    // if it is initially 6 or more characters then we set array[0] = 1
    // we then do the same for all the other criteria
    if (password.length >= 6) {
        array[0] = 1
    }

    // checking for the special characters
    if (password.match(/[-!@#$%^&*()-+]/g)) {
        array[1] = 1
    }

    // checking for numbers
    if (password.match(/[0-9]/g)) {
        array[2] = 1
    }

    // checking for lower case letters
    if (password.match(/[a-z]/g)) {
        array[3] = 1
    }

    // checking for upper case letters
    if (password.match(/[A-Z]/g)) {
        array[4] = 1
    }

    // if after going through these if statements, if the array is
    // [1,1,1,1,1] then it is perfect and has satisfied all our requirements

    console.log(array);

    // Now if array[1] == 0 that means that there is not a special character,
        // so we simply add one ("#") and add 1 to the counter variable
    if (array[1] == 0) {
        array[1] = 1;
        password = password + "#";
        counter++;
    }

    // if array[2] == 0 then there is no number present int he password, 
        // so we simply add a number ("1") to the password and add one to the counter
    if (array[2] == 0) {
        array[2] = 1;
        password = password + "1"
        counter++;
    }

    // if array[3] == 0 then there is no lower case letter in the password,
        // therefore we simply add one ("a") and add one to the counter
    if (array[3] == 0) {
        array[3] = 1;
        password = password + "a";
        counter++;
    }

    // Same thing with array[4] and uppcase letters
    if (array[4] == 0) {
        array[4] = 1;
        password = password + "A";
        counter++;
    }

    // Now remember, the ideal array we are looking for is [1,1,1,1,1],
    // if the password is now equal to or greater then 6 after making additions,
        // we then set array[0] = 1 
    if (password.length >= 6) {
        array[0] = 1;
    }

    // taking a quick look at what our password and array now look like
    // At this point, the only requirement that may still need to be addressed in length
    console.log(password);
    console.log(array);

    // Now if password.length still doesnt equal 6 then array[0] will still equal 0
    // so WHILE array[0] = 0 we want to add one character to the password until it 
        // had a length of 6 and then that will stop the while loop
    while (array[0] == 0) {
        password = password + "A"; // I chose "A" here but this could be ANY char
        counter++;
        if (password.length == 6) {
            array[0] = 1;
        }
    }

    // console.log(array);
    // console.log(password);
    // console.log(counter);

    return counter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}