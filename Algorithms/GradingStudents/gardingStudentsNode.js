// This is just the function, you can run it through the console using node 

function gradingStudents(grades) {
    let newArray = [];
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] % 10 == 0) {
            newArray.push(grades[i]);
        }
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
        else { newArray.push(grades[i]) }
    } 
    console.log(newArray);
    return newArray;
}