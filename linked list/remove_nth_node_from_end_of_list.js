/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let p1 = dummy;
    let p2 = head;

    while (n--) p2 = p2.next;
    
    while (p2) {
        p2 = p2.next;
        p1 = p1.next;
     }
    p1.next = p1.next.next;
    return dummy.next;
};
