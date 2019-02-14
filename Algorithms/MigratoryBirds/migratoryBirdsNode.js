// This was the first function that I constructed on my own
// But for some reason it fails with two of the test cases

function migratoryBirds(arr) {
    arr = arr.sort();
    let obj = {};
    
    for (var i=0; i<arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }

    console.log(obj);

    let keysArray = Object.keys(obj);
    let valuesArray = Object.values(obj);
    // console.log(valuesArray);
    let orderedValuesArray = valuesArray.slice(0).sort();
    // console.log(orderedValuesArray);
    let highestValue = orderedValuesArray[orderedValuesArray.length -1];
    // console.log(highestValue);
    let valueLocation = valuesArray.indexOf(highestValue);
    // console.log(valueLocation);
    let key = keysArray[valueLocation];

    console.log(key);

}

// migratoryBirds([1,4,4,4,5,3])

// Below, is a similar solution I found online that is very smiliar and
// works with all of the test cases! Credit goes to m_boland on the hackerrank
// disucssion board. 

function migratoryBirdss(arr) {
    arr.sort(function (a, b) { return a - b })
    const numMap = {};
    var maxNum = 0;
    var maxChar = 0;
    for (var num of arr) {
        if (numMap[num]) {
            numMap[num]++;
        } else {
            numMap[num] = 1;
        }
        console.log(num);
    }
    for (var num in numMap) {
        if (numMap[num] > maxNum) {
            maxNum = numMap[num];
            maxChar = num;
        }
    }
    console.log(maxChar);
    return maxChar;
}

// migratoryBirdss([1,4,4,4,5,3])

// This function is a combination of my original function with the one provided
// by "m_boland" on the discussion board. This works for all test cases!
function mmigratoryBirds(arr) {
    arr = arr.sort();
    let obj = {};
    let maxNum = 0;
    let maxChar = 0;
    
    for (var i=0; i<arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    console.log(obj);

    let keysArray = Object.keys(obj)

    for (var i=0; i<keysArray.length; i++) {
        if (obj[keysArray[i]] > maxNum) {
            maxNum = obj[keysArray[i]];
            maxChar = keysArray[i];
        }
        // console.log(obj[keysArray[i]]);
    }

    console.log(maxChar);
    return maxChar
};

mmigratoryBirds([1,4,4,4,5,3])