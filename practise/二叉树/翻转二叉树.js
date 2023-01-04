/**
 * https://leetcode.cn/problems/invert-binary-tree/
 */

function TreeNode(val, left, right) {
    this.val = val?? 0;
    this.left = left?? null;
    this.right = right?? null;
}

 var invertTree = function(root) {
    // 递归的交换每个的左节点和右节点，当节点没有子节点的时候就停止交换
    if (!root) {
        return;
    }

    const tempLeft = root.left;
    root.left = root.right;
    root.right = tempLeft;
    // 这里不需要对左右节点判空，因为递归的时候会判断
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

const tree = [4,2,7,1,3,6,9];