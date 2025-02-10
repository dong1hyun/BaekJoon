function solution(s) {
    const num = s.split(' ').map(Number).sort((a, b) => a - b);
    return `${num[0]} ${num[num.length - 1]}`;
}