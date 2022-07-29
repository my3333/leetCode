/**
 * 环形链表
 */

// 利用快慢指针，初始时两个都指向头结点，然后快指针向右走两步，慢指针向右走一步， 依次循环，就变成追及问题。
function hasCycle(head) {
  let fast = head;
  let slow = head;

  // 循环终止的条件是fast.next不存在 或者 fast 不存在
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next;
    if (fast === slow) {   // 当快慢指针相遇时，说明存在环
      return true;
    }
    // 慢指针向后移动
    slow = slow.next;
  }
  return false;
}



// 环形链表2
function detectCycle(head) {
  let fast = head;
  let slow = head;

  // 先判断是否存在环
  // 循环终止的条件是fast.next不存在 或者 fast 不存在
  while(fast !== null) {
    slow = slow.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (fast === slow) {   // 当快慢指针相遇时，说明存在环。 此时用pre 和 slow以同样的步数向后移动，相遇时，就是还的入口节点。
      let pre = head;
      while(pre !== slow) {
        pre = pre.next;
        slow = slow.next;
      }
      return pre;
    }
  }
  return null;
}
