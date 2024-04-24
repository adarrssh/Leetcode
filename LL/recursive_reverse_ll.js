function main(head){
    if(head === null || head.next === null) return head

    let newHead = main(head)

    let front = head.next
    front.next = head
    head.next = null
    return newHead;
}