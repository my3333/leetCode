import { mergeTwoLists } from './mergeTwoLists';

/**
 * 排序链表
 */


// 自己的思路：先遍历一次链表将每个节点值存入一个数组，然后对数组使用快排进行升序排列，最后将排好顺序的数组一次存入链表。






// 官方题解

// 自顶向下归并排序
function toSortList(head, tail) {    // 时间复杂度为O(nlogn)，空间复杂度为O(logn)
  if (head === null) {
    return head;
  }

  if (head.next === tail) {
    head.next = null;
    return head;
  }

  // 利用快慢指针找中间节点， 慢指针走一步，快指针走两步，则当快指针快要到链表尾部时，则慢指针刚好走到中间节点
  let fast = head;
  let slow = head;
  while(fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }

  const mid = slow;
  return mergeTwoLists(toSortList(head, mid), toSortList(mid, tail));
}

function sortList02(head) {
  return toSortList(head, null)
}