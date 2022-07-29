/**
 * 删除链表的倒数第n个节点
 * head = { next, value }
 */

// 常规解法
function removeNthFromEnd(head, n) {
  // 先遍历链表获取链表的长度
  const len = listLen(head)
  console.log('head----2', head)

  // 遍历链表，找到倒数第n-1个节点。  倒数第n个节点是 len - n + 1;
  let dummy = new ListNode(0, head);  // 声明一个哑节点。
  let curr = dummy;
  for (let i = 1; i < len -n +1; ++i) {
      console.log('curr--i', curr, i)
    curr = curr.next;
  }

  // 将要删除的目标节点的 前驱节点的next指向后继节点
  curr.next = curr.next.next;
  const resList = dummy.next;
  dummy = null;
  return resList;
}

function listLen(head) {
  console.log('head----1', head)
  // 先遍历链表获取链表的长度
  let len = 0;
  while(head) {
    ++len;   // 为什么是先用后加1呢？
    head = head.next;
  }
  console.log('链表的长度', len);
  return len
}



// 快慢指针 或者叫 滑动窗口： 快指针比慢指针超前n个节点，即快指针先向前走n个节点，然后 快指针和慢指针再共同向前移动。
// 当快指针到了最后一个节点时，慢指针正好处于到倒数第n-1个节点。
function removeNthFromEnd02(head, n) {
  const dummy = new ListNode(0, head);
  let fast = head;
  let slow = dummy;

  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  while(fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}