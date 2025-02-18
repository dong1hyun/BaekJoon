function solution(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const w = s[i];
        if (w === '(') {
            if (stack[stack.length - 1] === ')') {
                return false;
            }
            stack.push('(');
        }
        else {
            if (stack.length === 0 || stack[stack.length - 1] === ')') {
                return false;
            }
            stack.pop();
        }
    }

    if(stack.length > 0) return false;
    return true;
}
// 	"(()("