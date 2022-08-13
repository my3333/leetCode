
/**
 * 回溯算法
 */

function dfs(target, combine, arr, idx, res) {
    // 当前在数组的第idx位。还剩target要组合；combine为已组合的列表
    if (idx === arr.length) {
        return;
    }
    if (target === 0) {
        res.push(combine);
        return;
    }
    //  这一步是为什么？
    dfs(target, combine, arr, idx +1, res);

    if (target - arr[idx] >= 0) {
        dfs(target - arr[idx], [...combine, arr[idx]], arr, idx, res);
    }
}

function combinationSum (candidates, target) {
    let res = [];
    dfs(target, [], candidates, 0, res);
    return res;
}