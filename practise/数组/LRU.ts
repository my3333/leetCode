/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// LRU 算法：最近最久未使用算法,即删除最长时间内没有被访问的数据    hash+list
 class LRUCache {
    capacity:number;
    map: Map<number, number> = new Map();    // 利用map结构进行数据存储
    constructor(capacity: number) {
        this.map = new Map();
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.map.has(key)) {
            let value = this.map.get(key) as number;
            // 重新把被访问的数据set一下，放在和最后一个
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
        return -1;

    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.map.delete(key);
        }

        this.map.set(key, value);
        // 判断是否超过容量限制
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value);   // 如何理解
        }
    }
}



// js写法  https://leetcode.cn/problems/lru-cache/solution/by-smooth-b-9bh4/
// map结构的使用：https://blog.csdn.net/weixin_43613849/article/details/123416046
