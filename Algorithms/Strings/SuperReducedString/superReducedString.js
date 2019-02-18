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

// Complete the superReducedString function below.
function superReducedString(s) {
    // Take the string and turn it into an array
    let array = s.split("");
    console.log(array);
    let counter = 0;

    // This while/for loop can be a little bit confusing
    // We want to loop through the array and check for equal consecutive letters
    // if the consecutive letters are equal then we splice them off of the array
    // The reason we use a while loop is because without, we would only go through
        // the array once, and for example with the string "baab", the for loop
            // will remove the 'aa' and return 'bb' but this needs to be removed as well!
    // In order for this to work for very long strings in some of the test casses,
        // we use a counter variable so we can run through the for loop 100 times to be sure!
        
    while (counter < 100) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == array[i + 1]) {
                array.splice(i, 2);
                console.log(array);
            }
        }
        counter++;
    }

    let string;
    console.log("array:", array);
    console.log(array.length);
    if (array.length == 0) {
        string = "Empty String";
        console.log(string);
        return string;
    } else {
        string = array.join("");
        console.log("string:", string);
    }
    return string;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
