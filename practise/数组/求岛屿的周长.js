// DFS遍历岛屿
function islandPerimeter(grid) {       // 时间复杂度为 O（nm）
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                // 遍历上下左右的方格是否为1, 且求周长
                return dfs(grid, i, j);
            }
        }
    }
}
function dfs(grid, i,j) {
    // 从一个1走向 网格边界的时候(边界条件)，周长+1
    if( !(i >= 0 && i < grid.length && j>=0 && j < grid[0].length ) ) {
        return 1;
    }
    // 从一个 1 走向 0 的时候，周长+1
    if (grid[i][j] == 0) {
        return 1;
    }

    if (grid[i][j] !== 1) {
        return 0;
    }

    grid[i][j] = 2;
    return dfs(grid, i-1, j) + dfs(grid, i+1, j) + dfs(grid, i, j-1) + dfs(grid, i, j+1);
}


const l = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];

console.log('c=', islandPerimeter(l));
