const str = 'aaa[';    // aaa[aa][11] ,  aaa[]]

function validate(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        // 左括号进栈
        if (str.charAt(i) === '[') {
            stack.push(str.charAt(i));
        }
        // 右括号 检查栈顶是否为左括号
        if (str.charAt(i) === ']') {
            if (stack[stack.length -1] === '[') {
                stack.pop();
            } else if (stack.length === 0 && i === str.length - 1) {
                return false;
            }
        }
    }
    // console.log(stack);
    if (stack.length !== 0) {
        return false;
    }
    return true;
}

const res = validate(str);

console.log(res);
