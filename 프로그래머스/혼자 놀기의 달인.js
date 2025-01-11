function solution(cards) {
    const visited = new Array(cards.length + 1).fill(false);

    let c = 0;
    const find = (index) => {
        if (!visited[index]) {
            visited[index] = true;
            c++;
            find(cards[index - 1]);
        }
    }

    const count = [];
    for (let i = 1; i <= cards.length; i++) {
        if (!visited[i]) find(i);
        count.push(c);
        c = 0;
    }
    count.sort((a, b) => b - a);
    return count[0] * count[1];
}