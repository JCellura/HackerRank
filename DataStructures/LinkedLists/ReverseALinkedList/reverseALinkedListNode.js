function reverse(head) {

    let tail = null;
    let t;
    while (head != null) {
        t = head.next;
        head.next = tail;
        tail = head;
        head = t;
    }
    return tail;

}

// This is another function I found on the hackerrank discussion board that works great!
// It uses recursion, which I am still a little unclear on the logic but is is very clever!

function reverse(head) {

    if (!head || !head.next) { return head }

    let newHead = reverse(head.next);
    console.log(head.data, newHead);
    // console.log(head);
    head.next.next = head;
    // console.log(head);
    head.next = null;
    // console.log(head)
    // console.log(newHead);
    // console.log(head.data, newHead);
    return newHead

}