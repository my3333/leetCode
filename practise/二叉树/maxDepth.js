/**
 * 二叉树的最大深度
 */

import { levelOrder } from './levelOrder';

// 利用层序遍历
function maxDepth(root) {
    const res = levelOrder(root);
    return res.length;
}
function maxDepth02(root) {
    let depth = 0;
    if (!root) {
        return depth;
    }

    let q = [];
    q.push(root);
    while(q.length !== 0) {
        const currLevelSize = q.length;
        res.push([]);
        for (let i = 1; i <= currLevelSize; ++i) {
            const node = q.shift();
            res[res.length - 1].push(node.val)
            if (node.left) {
                q.push(node.left)
            }
            if (node.right) {
                q.push(node.right)
            }
        }
        // 每一次for循环就说明已经遍历了一层，此时应该对深度+1
        depth++;
    }

    return depth;
}



// 深度优先搜索--递归
function maxDepth03(root) {
    if (root === null) {
        return 0;
    }
    return Math.max(maxDepth03(root.left), maxDepth03(root.right)) + 1;
}
// 时间复杂度为O（n）