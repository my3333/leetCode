/**
 * https://blog.csdn.net/weixin_44492824/article/details/123669723
 */


function sumNumber(root) {
    let res = [];

    let getNumber = function (root, num) {
        if (!root.left && !root.right) {
            res.push(Number(num));
        }
        if (root.left) {
            getNumber(root.left, `${num}${root.left.val}`);
        }
        if (root.right) {
            getNumber(root.right, `${num}${root.right.val}`);
        }
    }

    getNumber(root, root.val);
    return res.reduce((total, cur) => total+cur);    // reduce求和
}
