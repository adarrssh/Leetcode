class Solution {
    reverseDLL(head){
        //code here
        
        if(head == null) return head
        // we are return prev.prev , and if it is a single element in ll
        // the prev.prev will throw an error
        if(head.next == null){
            let prev = head.prev
            head.prev = head.next
            head.next = prev
            return head
        }
        
        let temp = head
        let prev = null
        while(temp !== null){
            prev = temp.prev 
            temp.prev = temp.next
            temp.next = prev
            temp = temp.prev
        }
        
        return prev.prev
        
        
    }
  }
  