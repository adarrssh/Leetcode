// Given a doubly linked list of n nodes sorted by values, the task is to remove duplicate nodes present in the linked list.

// Example 1:

// Input:
// n = 6
// 1<->1<->1<->2<->3<->4
// Output:
// 1<->2<->3<->4
// Explanation:
// Only the first occurance of node with value 1 is 
// retained, rest nodes with value = 1 are deleted.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Solution {
    /**
     * Function to remove duplicates from unsorted linked list.
     * @param {Node} head
     * @returns {Node}
     */
     removeDuplicates(head) {
         // code here
         // return head after editing list
         let temp = head
         
         while(temp !== null){
             let next = temp.next 
             
             if(next !== null){
                 if(next.data === temp.data){
                     let newNext = next.next
                     
                     temp.next = newNext
                     if(newNext !== null){
                         newNext.prev = temp
                     }
                     
                 }else{
                     temp = temp.next
                 }
             }else{
                 break;
             }
             
         }
         
         return head
     }
}