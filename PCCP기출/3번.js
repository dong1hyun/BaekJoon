function solution(points, routes) {
    let sum = 0;
    function run(routesArray) {
        let t = 0;
        let allFirst = true;
        for (let i = 0; i < routesArray.length - 1; i++) {
            let [r1, c1] = points[routesArray[i] - 1];
            let [r2, c2] = points[routesArray[i + 1] - 1];
            let first = !allFirst;
            allFirst = false;
            while (true) {
                if (visited[r1][c1][t] === 0) visited[r1][c1][t] = 1;
                else if (visited[r1][c1][t] === 1 && !first) {
                    console.log(r1, c1, t);
                    visited[r1][c1][t] = 2;
                    sum++;
                }
                if (r1 === r2 && c1 === c2) {
                    break;
                }
                if (r2 > r1) r1++;
                else if (r2 < r1) r1--;
                else if (c2 > c1) c1++;
                else if (c2 < c1) c1--;
                first = false;
                t++;
            }
        }
    }
    for (let i = 0; i < routes.length; i++) {
        run(routes[i]);
        console.log("--------")
    }
    console.log(sum);
    return sum;
}

solution([[3, 2], [6, 4], [4, 7], [1, 4]], [[4, 2], [1, 3], [4, 2], [4, 3]]);



function solution(points, routes) {
    const visited = Array.from(Array(101), () => Array.from(Array(101), () => new Array(201).fill(0)));

    const run = (arr) => {
        let c = 0;
        let [r1, c1] = arr[c];
        let [r2, c2] = arr[c + 1];
        while (true) {
            if (r2 > r1) r1++;
            else if (r2 < r1) r1--;
            else if (c2 > c1) c1++;
            else if (c2 < c1) c1--;
        }
    }

    for(let i = 0; i < routes.length; i++) {

    }
}