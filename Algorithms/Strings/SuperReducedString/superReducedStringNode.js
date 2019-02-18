function superReducedString(s) {
    let array = s.split("");
    console.log(array);
    let counter = 0;
    
    while (counter < 100) {
        for (var i=0; i<array.length; i++) {
            if (array[i] == array[i + 1]) {
                array.splice(i,2);
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

superReducedString("baab");