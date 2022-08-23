/**
 * 二叉树的层序遍历 - 其实用的就是广度优先遍历
 * 
 * 广度优先遍历使用的数据结构为队列
 * 遍历思想：
 * 从左向右，对每一层的节点进行遍历。当一层的节点遍历完后，就开始对下一层进行遍历。
 * 而下一层节点是上一层节点的子节点。所以符合 队列 的 先进先出 的特点。
 * 
 * 就是在上一层节点队时，判断当前出队的节点有没有子节点，有的话就将子节点入队。
 * 
 * 特点：保留全部节点，占用的空间大；没有回溯过程，运行速度快。
 * 
 * 代码实现如下：
 */


// 广度优先搜索
 export function levelOrder(root) {
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