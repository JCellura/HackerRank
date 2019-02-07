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

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the getNode function below.

/*
 * For your reference:
 * This is what head looks like when it is printed or console.log
 * SinglyLinkedListNode {
 *     data: 4,
 *     next:
 *      SinglyLinkedListNode {
 *          data: 3,
 *          next:
 *            SinglyLinkedListNode {
 *              data: 2, next: [SinglyLinkedListNode] 
 *           }
 *     }
 * }
 *
 */
//  What we are trying to acheive is to disply the data value of a specific node
    // This node is a certain distance from the 'Tail' which is the final node in the linked list
        // i.e head = first node, tail = last node
function getNode(head, positionFromTail) {
    let current = head;
    let dataArray = [];
    console.log(current.data);
    // if there is no 'next' node, then we push the single 
        // data value into an array 
    if (current.next == null) {
        dataArray.push(current.data)
    // else, when there are next nodes, we first push the data of the first node
        // and then while as long as there is another data value for the next node,
        // we continue to push the values into an array to be used later
    } else {
        dataArray.push(current.data)
        while (current.next && current.next.data) {
            current = current.next
            console.log(current.data);
            dataArray.push(current.data);
        }
    }
    console.log('dataArray', dataArray);
    // because we are looking for the position from the tail,
        // we reverse the array and then return array[index],
        // where index is equal to positionFromTail
    dataArray = dataArray.reverse();
    console.log(dataArray);
    console.log(positionFromTail);
    return dataArray[positionFromTail]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new SinglyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        const position = parseInt(readLine(), 10);

        let result = getNode(llist.head, position);

        ws.write(result + "\n");
    }

    ws.end();
}
