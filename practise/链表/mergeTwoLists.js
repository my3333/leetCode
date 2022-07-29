/**
 * 合并两个有序链表
 */


export function mergeTwoLists(list1, list2) {
  // 1.创建一个新的list，用于存储两个链表的比较结果
  let resList = new ListNode(-1);
  let head = resList;

  // 2.比较，数值小的是头
  while(list1 && list2) {
    if (list1.val <= list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else if (list1.val > list2.val) {
      head.next = list2;
      list2 = list2.next;
    }

    head = head.next;;
  }

  // list1有剩余
  if (list1) {
    head.next = list1;
  }
  // list2有剩余
  if (list2) {
    head.next = list2;
  }

  return resList.next;
}
