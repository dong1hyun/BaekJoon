function solution(points, routes) {
    const visited = Array.from(Array(101), () => Array.from(Array(101), () => new Array(201).fill(0)));
    let sum = 0;
    const run = (arr) => {
        let c = 0;
        let t = 0;
        let [r1, c1] = points[arr[c] - 1];
        let [r2, c2] = points[arr[c + 1] - 1];
        while (true) {
            if(visited[r1][c1][t] === 0) visited[r1][c1][t] = 1;
            else if(visited[r1][c1][t] === 1) {
                visited[r1][c1][t] = 2;
                console.log(r1, c1, t);
                sum++;
            }
            if(r1 === r2 && c1 === c2) {
                if(c + 2 === arr.length) return;
                c++;
                [r1, c1] = points[arr[c] - 1];
                [r2, c2] = points[arr[c + 1] - 1];
            }
            if (r2 > r1) r1++;
            else if (r2 < r1) r1--;
            else if (c2 > c1) c1++;
            else if (c2 < c1) c1--;
            t++;
        }
    }

    for(let i = 0; i < routes.length; i++) {
        run(routes[i]);
    }

    return sum;
}