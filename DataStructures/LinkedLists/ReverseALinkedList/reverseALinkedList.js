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

// Complete the reverse function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {

    let tail = null;
    let t;
    // As long as head exists 
    while (head != null) {
        // we set t equal to head.next which is the next list
        // this way we have head.next saved in a variable because
        // we are going to modify head.next after the next step.
        t = head.next;
        // we then set head.next equal to the tail
        // tail will initially be set to null beacuse of our decleration
        // Now head = SinglyLinkedListNode { data: 1, next: null }
        head.next = tail;
        // Now we want to change tail for the next iteration so its no longer null
        // tail is now set to be equal to head which in the first iteration,
        // head = -> SinglyLinkedListNode { data: 1, next: null }
        tail = head;
        // Therefore now, Tail = SinglyLinkedListNode { data: 1, next: null }
        // Now me must reset head and because t was before set equal to head.next
        // we simply set head equal to t and now head is equal to orignally head.next ->
        // head = SinglyLinkedListNode {data: 2,next:SinglyLinkedListNode {data: 3,next:[...]}
        head = t;
    }

    // Each iteration through, grows the tail one step at a time, so the 2nd iteration through ->
    // tail = SinglyLinkedListNode { data: 2, next: SinglyLinkedListNode { data: 1, next: null } }
    // and so on until tail = 
    // SinglyLinkedListNode { data: 5, 
    //     next: SinglyLinkedListNode {data: 4,
    //         next: SinglyLinkedListNode {data: 3, 
    //             next: SinglyLinkedListNode {data: 2, 
    //                 next: SinglyLinkedListNode {data: 1,
    //                     next: null }}}}}

    return tail;

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

        let llist1 = reverse(llist.head);

        printSinglyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
