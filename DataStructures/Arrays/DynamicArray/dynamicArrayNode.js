// This represents the work I was doing on my own using VSC prior
    // to trasnferring over to hackerrank
// I simply use node so I can view the answers in the terminal using console.log


const queryExample = [[1,0,5],
                      [1,1,7],
                      [1,0,3],
                      [2,1,0],
                      [2,1,1]]

function dynamicArray(n,queries) {
    let N = n;
    let lastAnswer = 0;
    let S = []
    for (var i=0;i<N;i++) {
        S[i] =[]
    }
    console.log(S);
    // console.log(queries);
    let lastAnswerArray = [];
    
    for (var i=0; i<queries.length; i++) {
        if (queries[i][0] == 1) {
            let x = queries[i][1];
            let y = queries[i][2];
            let seq = ( (x^lastAnswer) % N);
            S[seq].push(y);
            // console.log(lastAnswer);
        } else if (queries[i][0] == 2) {
            let x = queries[i][1];
            let y = queries[i][2];
            // console.log('y',y);
            let seq = ( (x^lastAnswer) % N);
            // console.log('seq',seq);
            let index = (y % S[seq].length);
            // console.log('index',index);
            lastAnswer = S[seq][index]
            console.log(lastAnswer);
            lastAnswerArray.push(lastAnswer);
        } 
    }
    
    return lastAnswerArray;
}

dynamicArray(2, queryExample);