class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function deleteAllOccurOfX(head, x) {
    let curr = head;

    while (curr !== null) {
        if (curr.data === x) {
            if (curr === head) {
                head = curr.next;
                if (head !== null) {
                    head.prev = null;
                }
            } else {
                curr.prev.next = curr.next;

                if (curr.next !== null) {
                    curr.next.prev = curr.prev;
                }
            }
        }
        
        curr = curr.next;
    }

    return head;
}

// Test the function
function testDeleteAllOccurOfX() {
    let head = new Node(1);
    head.next = new Node(2);
    head.next.prev = head;
    head.next.next = new Node(3);
    head.next.next.prev = head.next;
    head.next.next.next = new Node(2);
    head.next.next.next.prev = head.next.next;

    console.log("Original linked list:");
    printLinkedList(head);

    let x = 2;
    head = deleteAllOccurOfX(head, x);
    
    console.log(`After deleting all occurrences of ${x}:`);
    printLinkedList(head);
}

// Helper function to print linked list
function printLinkedList(head) {
    let curr = head;
    while (curr !== null) {
        process.stdout.write(`${curr.data} -> `);
        curr = curr.next;
    }
    console.log("null");
}

// Run the test
testDeleteAllOccurOfX();
