function solution(s) {
    const n = s.length;
    let result = 0;
    let newS = s;

    for (let i = 0; i < n; i++) {
        newS = newS[n - 1] + newS.slice(0, n - 1);
        const stack = [];
        for (let j = 0; j < n; j++) {
            const v = newS[j];
            if(stack.length === 0 || v === '(' || v === '{' || v === '[') stack.push(v);
            else {
                if(v === ')') {
                    if(stack[stack.length - 1] === '(') stack.pop();
                    else break;
                }
                else if(v === '}') {
                    if(stack[stack.length - 1] === '{') stack.pop();
                    else break;
                }
                else if(v === ']') {
                    if(stack[stack.length - 1] === '[') stack.pop();
                    else break;
                }
            }
        }
        if(stack.length === 0) result++;
    }

    return result;
}