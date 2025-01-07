function solution(n, l, r) {
    const check = (num) => {
        console.log(num);
        if(num % 5 === 2) return false;
        if (num > 5) return check(Math.floor(num / 5));
        return true;
    }
    let answer = 0;
    for (let i = l - 1; i < r; i++) {
        if (check(i)) answer++;
    }

    return answer;
}

// 11011
// 1101111011000001101111011
// 123456789012345678

// 11 15