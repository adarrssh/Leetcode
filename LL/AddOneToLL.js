class Solution {
    addOne(node)
    {
        //your code here
        
        let carry = this.recursiveFn(node)
        
        if(carry ==1){
            let newHead = new Node(carry)
            newHead.next = node
            return newHead
        }
        return node
    }
    
    recursiveFn(temp){
        if(temp == null){
            return 1
        }
        
        let carry = this.recursiveFn(temp.next)
        
        temp.data = temp.data + carry
        
        if(temp.data < 10){
            return 0
        }
        
        temp.data = 0
        return 1
    }
}

