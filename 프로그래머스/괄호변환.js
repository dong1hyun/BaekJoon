const isRight = (s) => {
    if(s[0] === ')') return false;
    const stack = ['('];
    for(let i = 1; i < s.length; i++) {
        if(s[i] === '(') stack.push('(');
        else {
            if(stack.length === 0) return false;
            else stack.pop();
        }
    }
    return true;
}

const separate = (s) => {
    let a = 0, b = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') a++;
        else b++;

        if(a === b) {
            return [s.slice(0, i + 1), s.slice(i + 1, s.length)];
        }
    }
}

const reverse = (s) => {
    let newS = "";
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') newS += ')';
        else newS += '(';
    }

    return newS;
}

function solution(p) {
    const solve = (s) => {
        if(s === "") return "";
        const [u, v] = separate(s);
        if(isRight(u)) return u + solve(v);
        return '(' + solve(v) + ')' + reverse(u.slice(1, u.length - 1));
    }

    return solve(p);
}
// "()))((()"

// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, 
// v는 빈 문자열이 될 수 있습니다. 
// 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
//   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
//   4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
//   4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
//   4-3. ')'를 다시 붙입니다. 
//   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
//   4-5. 생성된 문자열을 반환합니다.