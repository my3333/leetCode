function TreeNode(val, left, right) {
    this.val = val;
    this.left = left?? null;
    this.right = right?? null;
}

// 递归(深度)：时间复杂度为O(n)，时间复杂度为O(n)
function isSymmetric(root) {
    if(!root) {
        return true;
    }
    return leftAndRightIsSame(root.left, root.right);
}
// 判断左子树的左节点  和 右子树的右节点 是否相等
// 判断左子树的右节点  和 右子树的左节点 是否相等
function leftAndRightIsSame(leftRoot, rightRoot) {
    if (!leftRoot && !rightRoot) {
        return true;
    }
    if (!leftRoot || !rightRoot || leftRoot.val !== rightRoot.val) {
        return false;
    }
    return leftAndRightIsSame(leftRoot.left, rightRoot.right) &&
    leftAndRightIsSame(leftRoot.right, leftRoot.left);
}



// 迭代 - 广度遍历：时间复杂度为O(n), 空间复杂度为O(n)
// 使用队列进行节点的存储。
function isSymmetric02(root) {
    return check(root, root);
}
function check(firstRoot, secondRoot) {
    let quenen = [];   // 模拟队列
    quenen.push(firstRoot);
    quenen.push(secondRoot);

    // 循环退出条件为：当两个节点值不对称 或者 队列为空
    while(quenen.length) {
        firstRoot = quenen.shift();
        secondRoot = quenen.shift();

        if (!firstRoot && !secondRoot) {
            continue;
        }
        if (!firstRoot || !secondRoot || firstRoot.val !== secondRoot.val) {
            return false;
        }
        // 判断左子树的左节点  和 右子树的右节点 是否相等
        quenen.push(firstRoot.left);
        quenen.push(secondRoot.right);
        // 判断左子树的右节点  和 右子树的左节点 是否相等
        quenen.push(firstRoot.right);
        quenen.push(secondRoot.left);
    }
    return true;
}




//我最初的思路，是利用树的中序遍历，这个思路比较笨。