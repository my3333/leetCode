/**
 * 岛屿数量
 * 
 * 我们可以将二维网格看成一个无向图，竖直或水平相邻的 1之间有边相连。
为了求出岛屿的数量，我们可以扫描整个二维网格。如果一个位置为 1，则以其为起始节点开始进行深度优先搜索。在深度优先搜索的过程中，每个搜索到的 1都会被重新标记为 00。
最终岛屿的数量就是我们进行深度优先搜索的次数。
 */

// grid: string[][],   number
function numIslands(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {    // 为什么取的是grid[0].length ?
            if (grid[i][j] === '1') {
                count++;
                turnZero(i, j, grid);
            }
        }
    }
    return count;
}
function turnZero (i, j, grid) {
    // 检查上下左右每个点是否为 0， 如果为0 就退出; 否则继续找上下左右的陆地,并把陆地标记为0
    if (j >= grid[0].length || j < 0 || i < 0 || i >= grid.length || grid[i][j] === '0') {
        return;
    }
    grid[i][j] = '0';
    turnZero(i-1, j, grid); // shang
    turnZero(i+1, j, grid); // xia
    turnZero(i, j-1, grid); // zuo
    turnZero(i, j+1, grid); // you
}


const land = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
const n = numIslands(land);
console.log(n);