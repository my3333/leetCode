
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var buildTree = function(preorder, inorder) {
    // 递归退出条件
    if (!preorder.length || !inorder.length) {
        return null;
    }
    // 根据前序遍历数组找出根节点，然后在中序遍历数组中找到根节点，并将中序遍历数组划分为 left 和 right 两部分。
    // 然后针对left 和 right 也在前序遍历对应的部分找到根节点，再对 left 和 right 进行划分，依次类推进行递归。
    const root = preorder[0];
    const treeRoot = new TreeNode(root);

    const rootIndexOfIn = inorder.indexOf(root);
    if (rootIndexOfIn !== -1) {
        const leftInorder = inorder.slice(0, rootIndexOfIn);
        const rightInorder = inorder.slice(rootIndexOfIn + 1, inorder.length);
        const leftPreorder = preorder.slice(1, leftInorder.length+1);
        const rightPreorder = preorder.slice(leftPreorder.length+1, preorder.length);
        treeRoot.left = buildTree(leftPreorder, leftInorder);
        treeRoot.right = buildTree(rightPreorder, rightInorder);
    }
    return treeRoot;
};

const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];

const res = buildTree(preorder, inorder);

console.log(res);