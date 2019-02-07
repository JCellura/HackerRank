'use strict'

// This represents the work I was doing on my own using VSC prior
    // to trasnferring over to hackerrank
// I simply use node so I can view the answers in the terminal using console.log

// There are further detailed hints and instructions in the other file!!

function matchingString(strings, queries) {
    let counterArray = [];
    for (var i=0; i<queries.length; i++) {
        counterArray[i] = 0;
    }
    // console.log(counterArray);

    for (var j=0; j<queries.length; j++) {
        for (var i=0; i<strings.length; i++) {
            if (queries[j] == strings[i]) {
                counterArray[j]++
            }
        }
    }

    console.log(counterArray);
}

matchingString(['ab','ab','abc'], ['ab','abc','bc'])