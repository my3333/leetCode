/**
 * 合并两个二叉树
 */


// 深度优先搜索
function mergeTrees(root1, root2) {
    // 如果只有一个树存在，就返回另一个树
    if (root1 === null) {
        return root2;
    }
    if (root2 === null) {
        return root1;
    }
    // 深度优先搜索
    let mergeTree = new TreeNode(root1.val + root2.val);
    mergeTree.left = mergeTrees(root1.left, root2.left);
    mergeTree.right = mergeTrees(root1.right, root2.right);
    return mergeTree;
}