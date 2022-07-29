/**
 * 相交链表
 */



// 自己的思路
// 1.分别遍历两个链表获取到两个链表的长度，2.计算两个链表长度的差值n，3.长度长的那个链表先走n步，再以同样的步数同时移动两个链表的指针
 function getIntersectionNode(headA, headB) {
  let lenA = 0;
  let lenB = 0;
  let tempHeadA = headA;
  let tempHeadB = headB;
  while(tempHeadA !== null) {
      tempHeadA = tempHeadA.next;
      lenA++;
  }
  while(tempHeadB !== null) {
      tempHeadB = tempHeadB.next;
      lenB++;
  }
  console.log(lenA, lenB);

  tempHeadA = headA;
  tempHeadB = headB;
  let diff = lenA - lenB;
  if (diff > 0) {
      // A向前移动diff步
      for (let i = 0; i < diff; i++) {
          tempHeadA = tempHeadA.next;
      }
  } else if (diff < 0) {
      // B向前移动diff步
      for (let i = 0; i < Math.abs(diff); i++) {
          tempHeadB = tempHeadB.next;
      }
  }

  while(tempHeadA && tempHeadA.next) {
      // 第一个相等的节点
      if (tempHeadA === tempHeadB) {
          return tempHeadA
      }
      tempHeadA = tempHeadA.next;
      tempHeadB = tempHeadB.next;
  }
  return null;
};



// 官方题解

// 利用哈希集合存储链表节点：首先遍历链表 headA，并将链表 headA 中的每个节点加入哈希集合中。然后遍历链表 headB，对于遍历到的每个节点，判断该节点是否在哈希集合中。
function getIntersectionNode02(headA, headB) {
  const visitedA = new Set();
  let temp = headA;        // O(m)
  while(temp !== null) {
    visitedA.add(temp);
    temp = temp.next;
  }

  temp = headB;
  while(temp !== null) {       // O(m+n)
    if (visitedA.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }

  return null;
}


// 双指针：利用两个指针走过的节点数相等来思考。因为如果两个指针把所有的节点走一遍的话，那么就会在相交的节点相遇
function getIntersectionNode03 (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }

  let pa = headA;
  let pb = headB;
  while(pa !== pb) {
    pa = pa === null? headB : pa.next;
    pb = pb === null ? headA : pb.next;
  }
  return pa;
}
