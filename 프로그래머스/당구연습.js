function solution(m, n, startX, startY, balls) {
    function cal(r1, c1, r2, c2) {
        return Math.pow(r1 - r2, 2) + Math.pow(c1 - c2, 2);
    }
    const result = [];
    for(let i = 0; i < balls.length; i++) {
        const [x, y] = balls[i];

        let min = Number.MAX_SAFE_INTEGER;
        min = Math.min(min, cal(startX, startY, x, -y));
        min = Math.min(min, cal(startX, startY, -x, y));
        console.log(min);
        min = Math.min(min, cal(startX, startY, x, m * 2 - y));
        min = Math.min(min, cal(startX, startY, n * 2 - x, y));
        if(y / x === startY / startX) {
            if(cal(0, 0, startX, startY) < cal(0, 0, x, y)) {
                min = Math.min(min, cal(0, 0, startX, startY) + cal(0, 0, x, y));
            }
            else {
                min = Math.min(min, cal(n, m, startX, startY) + cal(n, m, x, y));
            }
        }
        if(y - m / x === startY - m / startY) {
            if(cal(0, m, startX, startY) < cal(0, m, x, y)) {
                min = Math.min(min, cal(0, m, startX, startY) + cal(0, m, x, y));
            }
            else {
                min = Math.min(min, cal(n, 0, startX, startY) + cal(n, 0, x, y));
            }
        }

        result.push(min);
    }

    return result;
}