/**
 * 
 */

function merge(intervals) {
    if (intervals.length === 0) {
        return ['']
    }
    if (intervals.length === 1) {
        return intervals;
    }
    // 先按左端点进行排序
    intervals.sort((a,b) => a[0] - b[0])
    // console.log(intervals);

    let res = [];    // 时间复杂度为O(logn)
    for (let i = 0; i < intervals.length; i++) {     // 时间复杂度为O(nlogn)
        const start = intervals[i][0], end = intervals[i][1];
        if (res.length) {
            // 已经有区间合并过了
            const lastRange = res[res.length-1];

            if (lastRange[1] >= start) {
                // 说明有重叠的地方
                lastRange[1] = Math.max(end, lastRange[1]);  // 重要
            } else {
                res.push([start, end]);
            }

        } else {
            // 还没有开始合并
            res.push([start, end]);
        }
    }
    return res;
}


// const intervals = [[1,3],[2,6],[8,10],[15,18]];
const intervals = [[1,4],[2,3]];
const res = merge(intervals);

console.log(res);