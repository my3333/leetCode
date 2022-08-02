/**
 * 二叉树的层序遍历
 */


// 广度优先搜索
function levelOrder(root) {
    const result = [];
    if (!root) {
        return result;
    }

    const quenen = [];  // 数组模拟队列（先进先出），存储每一层的节点
    quenen.push(root);   // 第一层为根节点，先把根节点放进去
    // 当这个队列不为空的时候，就循环这个队列，依次取队列里节点的子节点
    while(quenen.length !== 0) {
        const currentLevelSize = quenen.length;   // 每一层的节点数量为当前quenen的长度；
        result.push([]);  // 用[]存储当前层的节点数值
        // let i=0; i < currentLevelSize; i++
        for (let i=1; i < currentLevelSize; i++) {   // 从1开始  为哈？每一层的节点数是从1开始计数的？
            const node = quenen.shift();  // 根据先进先出的特点，所以要从头部取一个节点
            result[result.length - 1].push(node.val);  // 存储
            // 看看当前节点是否有做节点和右节点，有的话就放在队列里面
            if(node.left) {
                quenen.push(node.left);
            }
            if (node.right) {
                quenen.push(node.right);
            }
        }
    }
    return result;
}
// 时间复杂度为O（n），空间复杂度为O（n）