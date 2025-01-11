function solution(k, dungeons) {
    const n = dungeons.length;
    const visited = new Array(n).fill(false);
    let max = 0;
    const solve = (arr) => {
        if(arr.length === n) {
            let rest = k;
            let sum = 0;
            arr.forEach((i) => {
                const [min, consume] = dungeons[i];
                if(rest >= min) {
                    rest -= consume;
                    sum++;
                }
            });
            max = Math.max(sum, max);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                arr.push(i);
                visited[i] = true;
                solve(arr);
                arr.pop();
                visited[i] = false;
            }
        }
    }

    solve([]);

    return max;
}