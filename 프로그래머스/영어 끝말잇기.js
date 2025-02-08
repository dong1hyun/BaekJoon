function solution(n, words) {
    const list = {};
    let prev = words[0];
    list[prev] = true;
    for(let i = 1; i < words.length; i++) {
        const w = words[i];
        if(list[w] || prev[prev.length - 1] !== w[0]) {
            return [(i % n) + 1, Math.ceil((i + 1) / n)];
        }
        list[w] = true;
        prev = w;
    }

    return [0, 0];
}