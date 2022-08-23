/**
 * groupAnagrams
 */

function groupAnagrams(strs) {
    // 因为字母异位词里面包含的字母是相同的，所以对字母排序后的结果是相同，i并将该结果作为key值
    const map = new Map();
    for (let item of strs) {
        // Array.from(item)
        const common = [...item].sort().toString();
        if (map.has(common)) {
            const l = map.get(common);
            l.push(item);
            map.set(common, l);
        } else {
            map.set(common, [item]);
        }
    }
    return Array.from(map.values());
}