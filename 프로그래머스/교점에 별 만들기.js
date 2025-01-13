function solution(line) {
    const findCP = (line1, line2) => {
        const [A, B, E] = line1;
        const [C, D, F] = line2;
        if (A * D === B * C) return null;

        const x = (B * F - E * D) / (A * D - B * C);
        const y = (E * C - A * F) / (A * D - B * C);
        if (Number.isInteger(x) && Number.isInteger(y)) {
            return [x, y];
        }
        return null;
    }

    const star = [];

    for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length; j++) {
            const cp = findCP(line[i], line[j]);
            if (cp) {
                star.push(cp);
            }
        }
    }

    let max_x = Number.MIN_SAFE_INTEGER;
    let max_y = Number.MIN_SAFE_INTEGER;
    let min_x = Number.MAX_SAFE_INTEGER;
    let min_y = Number.MAX_SAFE_INTEGER;
    star.forEach(([x, y]) => {
        max_x = Math.max(x, max_x);
        max_y = Math.max(y, max_y);
        min_x = Math.min(x, min_x);
        min_y = Math.min(y, min_y);
    });
    const col = max_x - min_x + 1;
    const row = max_y - min_y + 1;
    const starMap = new Map();

    star.forEach(([x, y]) => {
        const a = max_y - y;
        const b = x - min_x;
        
        starMap.set(JSON.stringify([a, b]), true);
    });
    const result = [];
    for(let i = 0; i < row; i++) {
        let str = "";
        for(let j = 0; j < col; j++) {
            if(starMap.has(JSON.stringify([i, j]))) {
                str += '*';
            }
            else {
                str += '.';
            }
        }
        result.push(str);
    }

    return result;
}

"....*...."
"........."
"........."
"*.......*"
"........."
"........."
"........."
"........."
"*.......*"