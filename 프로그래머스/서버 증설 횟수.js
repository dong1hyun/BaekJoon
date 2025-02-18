function solution(players, m, k) {
    let result = 0;
    const stack = [];
    let serverSize = 0;
    players.forEach((num, i) => {
        if (stack.length > 0) {
            for (let j = 0; j < stack.length; j++) {
                if(!stack[j]) continue;
                const [endTime, n] = stack[j];
                if (endTime === i) {
                    stack[j] = null;
                    serverSize -= n;
                }
            }
        }
        const v = Math.floor(num / m); // 현재 필요한 증설 서버의 수
        if (v > serverSize) {
            const needs = v - serverSize; // 추가될 서버 개수
            result += needs;
            stack.push([i + k, needs]);
            serverSize += needs;
        }
    });

    return result;
}