/**
 * 回文链表
 * -----利用回文具有对称性的特点
 */

// 1.先利用快慢指针找到中间的节点， 将后半部分链表逆置， 从头 和中间 开始比较是值相同

// 2.将整个链表反转，再判断节点是否相等  -- 时间复杂度为O(n)
function isPalindrome02(head) {
  let p1 = head;
  let p2 = null;
  while(p1 !== null) {
      p2 = new ListNode(p1.val, p2)  // 头插
      p1 = p1.next;
  }
  // console.log('p2', p2);

  p1 = head;
  // 由于两个链表长度相等，所以对一个遍历就可以
  while(p2 !== null) {
      if (p2.val !== p1.val) {
          return false;
      }
      p2 = p2.next;
      p1 = p1.next;
  }
  return true;
};
// 3.遍历一遍转换为字符串，然后判断是否是回文串