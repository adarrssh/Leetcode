
// Given a doubly-linked list, a position p, and an integer x. The task is to add a new node with value x at the position just after pth node in the doubly linked list.

// Example 1:

// Input:
// LinkedList: 2<->4<->5
// p = 2, x = 6 
// Output: 2 4 5 6
// Explanation: p = 2, and x = 6. So, 6 is
// inserted after p, i.e, at position 3
// (0-based indexing).
// Example 2:

// Input:
// LinkedList: 1<->2<->3<->4
// p = 0, x = 44
// Output: 1 44 2 3 4
// Explanation: p = 0, and x = 44 . So, 44
// is inserted after p, i.e, at position 1
// (0-based indexing).

//User function Template for javascript

/**
 * @param {Node} head
 * @param {number} pos
 * @param {number} data
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
*/

class Solution {
    //Function to insert a new node at given position in doubly linked list.
    addNode(head, pos, data)
    {
        //your code here
        let newNode = new Node(data)
        let prev = null
        let curr = head
        let count = pos
        
        while(count>0){
            prev = curr
            curr = curr.next
            count--
        }
        
        let next = curr.next
        
        newNode.next = curr.next
        newNode.prev = curr
        
        curr.next = newNode
        
        if(next){
            next.prev = newNode
        }
        
        
        return head
    }
    
}