function solution(s) {
    const stack = [];
    for(let i = 0; i <s.length; i++) {
        const length = stack.length;
        const w = s[i];
        if(length > 0) {
            if(stack[length - 1] === w) stack.pop();
            else stack.push(w);
        }
        else stack.push(w);
    }
    if(stack.length === 0) return 1;
    else return 0;
}