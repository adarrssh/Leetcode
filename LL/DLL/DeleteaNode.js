class Solution {
    
    deleteNode(head, x)
    {
        //your code here
        // make next.prev = null. if it exists
        if(x == 1 ) {
            
            let curr = head.next
            
            if(curr){
                curr.prev = null
            }
            
            return curr
            
        }
        
        let count = 1 
        let prev = null
        let curr = head
        
        while(count<x){
            prev = curr
            curr = curr.next
            count++
        }
        
        let next = curr.next
        
        prev.next = next
        
        if(next){
            next.prev = curr.prev
        }
        
        return head
    }
}


// Given a doubly linked list and a position. The task is to delete a node from given position (position starts from 1) in a doubly linked list.

// Example 1:

// Input:
// LinkedList = 1 <--> 3 <--> 4 
// x = 3
// Output: 1 3  
// Explanation: After deleting the node at
// position 3 (position starts from 1),
// the linked list will be now as 1->3.
// Example 2:

// Input:
// LinkedList = 1 <--> 5 <--> 2 <--> 9  
// x = 1
// Output: 5 2 9