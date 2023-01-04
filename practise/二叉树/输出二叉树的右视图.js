/**
 * 输出二叉树的右视图
 *
 */

function TreeNode(val, left, right) {
    this.val = val?? 0;
    this.left = left ?? null;
    this.right = right?? null;
}


// 先进行层序遍历，在输出每一层的最后一个节点。
function rightSideView(root) {
    const res = [];
    if (!root) {
        return res;
    }
    // 层序遍历
    const levelOrder = [];
    const quenen = [];
    quenen.push(root);
    while(quenen.length !== 0) {
        // 计算每一层的节点数量
        const curLevelSize = quenen.length;
        levelOrder.push([]);
        for (let i = 0; i < curLevelSize; i++) {
            const node = quenen.shift();
            levelOrder[levelOrder.length - 1].push(node.val);
            if (node.left) {
                quenen.push(node.left);
            }
            if (node.right) {
                quenen.push(node.right);
            }
        }
    }

    console.log('levelOrder', levelOrder);
    for (let i = 0; i < levelOrder.length; i++) {
        res.push(levelOrder[i][levelOrder[i].length - 1]);
    }

    console.log('res', res);
    return res;
}


const left  = new TreeNode(2, null, new TreeNode(5, null, null));
const right = new TreeNode(3, null, new TreeNode(4, null, null));
const root = new TreeNode(1, left, right);

const res = rightSideView(root);
console.log(res);