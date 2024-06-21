/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curr = head;
    if(curr == null){
        return false
    }
    while(curr.next != null){
        if(curr.val == 'A'){
            return true;
        }
        curr.val = 'A'
        curr = curr.next;
    }
    return false;
};
