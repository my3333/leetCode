/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

// 递归
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // 先处理异常情况
  if (!list1 && !list2) {
    return null;
  }
  if (list1 && !list2) {
    return list1;
  }
  if (!list1 && list2) {
    return list2;
  }
  // 合并：节点值的比较，
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2;
  }
};

// 遍历
function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // 1.创建一个新的list，用于存储两个链表的比较结果
  let head = new ListNode(-1);
  // pre指针用于移动
  let pre = head;

  while (list1 && list2) {
    // 2.比较，数值小的是头
    if (list1.val < list2.val) {
      pre.next = list1;
      list1 = list1.next;
    } else {
      pre.next = list2;
      list2 = list2.next;
    }
    // 3.head的指针向后移动
    pre = pre.next;
  }
    // list1有剩余
  if (list1) {
      pre.next = list1;
  }
  // list2有剩余
  if (list2) {
      pre.next = list2
  }

  return head.next;
};

let list1 = new ListNode(1);



