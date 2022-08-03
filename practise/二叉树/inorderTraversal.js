/**
 * 二叉树的中序遍历
 */


// 迭代
function inorderTraversal(root) {
  let res = [];
  let stack = [];   // 用栈存储迭代的结果

  while(root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
}

// 递归
function inorderTraversal02(root) {
  let res = [];
  const inorder = (root) => {
    if (root) {
      inorder(root.left);
      res.push(root.val);
      inorder(root.right);
    }
    return;
  }

  inorder(root);
  return res;
}



/**
 * 二叉树的先序遍历
 */

// 递归
function firstTraversal(root) {
  let res = [];

  const inorder = (root) => {
    if (root) {
      res.push(root.val);
      inorder(root.left);
      inorder(root.right);
    }
    return;
  }

  inorder(root);
  return res;
}
// 迭代
function firstTraversal02(root) {
  let res = [];
  let stack = [];   // 用栈存储迭代的结果

}
