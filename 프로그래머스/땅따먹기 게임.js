const findMaxValue = (nums, except) => {
    let max = 0;

    for(let i = 0; i < 4; i++) {
        if(i === except) continue;
        if(max < nums[i]) {
            max = nums[i];
        }
    }

    return max;
}

function solution(land) {
    const dp = Array.from({length: land.length}, () => Array(4).fill(0));

    dp[0][0] = land[0][0];
    dp[0][1] = land[0][1];
    dp[0][2] = land[0][2];
    dp[0][3] = land[0][3];

    for(let i = 1; i < land.length; i++) {
        for(let j = 0; j < 4; j++) {
            const max = findMaxValue(dp[i - 1], j);
            dp[i][j] = max + land[i][j];
        }
    }

    return Math.max(...dp[land.length - 1]);
}