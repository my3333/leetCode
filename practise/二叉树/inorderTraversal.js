/**
 * 二叉树的深度优先遍历有：先序遍历、中序遍历、后序遍历
 * 
 * 深度优先遍历常用的数据结构为 栈。
 * 遍历思想：
 * 从上到下，对每一个分支一直向下一层遍历直到这个分支结束。
 * 然后返回上一层的节点，对右子树继续进行深度搜索，直到整个树遍历完毕。
 * 所以 深度优先搜索 符合 栈 的 后进先出 的特点。
 * 
 * 特点：不全部保留及诶但，占用空间少；有回溯（进站出站）的过程，所以运行会慢点。
 * 
 * 其实，除了使用栈外，还可以用 递归 实现深度优先搜索。
 */


/**
 * 中序遍历实现
 */
// 栈 + 迭代
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


/**
 * 后序遍历
 */
function posterOrder(root) {
  let res = [];
  let stack = [];

  // stack.push(root);

  while(root || stack.length) {
    //  找到最后一个左节点
    while(root) {
      stack.push(root);
      root = root.left;
    }
    res.push(root.val);
    root = stack.pop();
    root = root.right;
    // res.push(root.val);
  }



}
