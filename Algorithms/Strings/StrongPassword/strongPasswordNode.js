// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong

    let array = [0,0,0,0,0];
    let counter = 0;
    console.log(password);

    if (password.length >= 6) {
        array[0] = 1
    }

    if (password.match(/[-!@#$%^&*()-+]/g)) {
        array[1] = 1
    }

    if (password.match(/[0-9]/g)) {
        array[2] = 1
    }

    if (password.match(/[a-z]/g)) {
        array[3] = 1
    }

    if (password.match(/[A-Z]/g)) {
        array[4] = 1
    }

    console.log(array);

    if (array[1] == 0) {
        counter++;
        array[1] = 1;
        password = password + "#";
    }
    // console.log(password);
    // console.log(array);

    if (array[2] == 0) {
        counter++;
        array[2] = 1;
        password = password + "1"
    }

    // console.log(password);
    // console.log(array);

    if (array[3] == 0) {
        counter++;
        array[3] = 1;
        password = password + "a"
    }

    // console.log(password);
    // console.log(array);

    if (array[4] == 0) {
        counter++;
        array[4] = 1;
        password = password + "A"
    }

    // console.log(password);
    // console.log(array);

    if (password.length >= 6) {
        array[0] = 1;
    }

    console.log(password);
    console.log(array);

    while (array[0] == 0) {
        password = password + "A";
        counter++;
        if (password.length == 6) {
            array[0] = 1;
        }
    }

    console.log(array);
    console.log(password);
    console.log(counter);
    return counter;
    
}

minimumNumber(7,"AUzs-nV");