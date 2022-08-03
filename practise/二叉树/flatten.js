/**
 * 将二叉树展开为链表
 */

// import { firstTraversal } from './inorderTraversal';

 function flatten(root) {
    // 先进行先序遍历，拿到按顺序排列的节点
    const list = firstTraversal(root);
    // 对list遍历，修改每个数的指针指向
    for (let i = 1; i < list.length; i++){
        const prev = list[i - 1];
        const curr = list[i];
        prev.left = null;
        prev.right = curr;
    }
 }

 function firstTraversal(root) {
    let res = [];
  
    const inorder = (root) => {
      if (root) {
        res.push(root);   // 整理把真个节点放进去
        inorder(root.left);
        inorder(root.right);
      }
      return;
    }
  
    inorder(root);
    return res;
  }