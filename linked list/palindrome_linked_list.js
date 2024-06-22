/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let count = 0, curr = head
    let data = []
    while(curr){
        data.push(curr.val)
        count++
        curr = curr.next
    }
    curr = head
    count = data.length - 1
    while(curr){
        if(curr.val != data[count]){
            return false
        }
        count--
        curr = curr.next
    }
    return true
};
