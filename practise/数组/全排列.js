/**
 *  全排列
 */


// 回朔法
function permute(nums) {
    let path = [];
    let backtracking = (nums, k, uesd) => {
        if (path.length === k) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < k; i++) {
            if (uesd[i]) {
                continue;
            }
            path.push(nums[i]);
            used[i] = true;   //
            backtracking(nums, k, used);
            path.pop();
            used[i] = false;
        }
    }
    let res = [];
    backtracking(nums, nums.length, []);
    return res;
}