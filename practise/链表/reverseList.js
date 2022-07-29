/**
 * 链表翻转： 四种方法  https://blog.csdn.net/Ezrealwj/article/details/119702058
 */

class NodeList {
  value = null;
  next = null;



}

// 就地反转：遍历。将当前节点的指针改为指向前一个节点。
function reverseList(head) {
  let prev = null;
  let curr = head;

  while(curr) {
    const currNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = currNext;
  }

  return prev;
}