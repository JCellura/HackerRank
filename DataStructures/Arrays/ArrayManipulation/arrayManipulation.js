// function arrayManipulation(n, queries) {
//     let array = [];
//     for (var i=0; i<n; i++) {
//         array[i]=0
//     }
//     console.log(array);

//     queries.forEach((el,i) => {
//         let a = el[0] - 1;
//         let b = el[1] - 1;
//         let k = el[2];
//         console.log(a,b,k);
//         for (var i=a; i<=b; i++) {
//             array[i] = array[i] + k
//         }
//     })
//     //  for (var j=0; j<queries.length; j++) {
//     //     let a = (queries[j][0] - 1);
//     //     let b = (queries[j][1] - 1);
//     //     let k = queries[j][2];
//     //     console.log(a,b,k)
//     //     for (var i=a; i<=b; i++) {
//     //         array[i] = array[i] + k
//     //     }
//     // }
//     console.log(array);

//     array.sort((a,b) => {
//         return a-b
//     })

//     console.log(array);
//     console.log(array[array.length-1]);
// }

function arrayManipulation(n, queries) { 

    let arr = new Array(2*n).fill(0); 
    console.log(arr);
    let max = 0;

    queries.forEach((item) => {
        console.log(item)
        arr[item[0]] += item[2];
        // console.log(arr[item[0]])
        arr[item[1] + 1] -= item[2];
        console.log(arr);
    });

    console.log(arr);

    arr.reduce((prev, curr, idx) => {
        const sum = prev + curr;
        if (sum > max) {
            max = sum;
        }

        return sum;
    })

    console.log(max);
    return max;
}

const matrix = [[1,5,3],[4,8,7],[6,9,1]]
arrayManipulation(10, matrix)