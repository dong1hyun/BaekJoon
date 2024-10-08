const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let originArr = [];
let first = true;
let n, c = 0;
let max = 1;

const createNewArr = (prev_arr, i, j, isCol) => {
    const newArr = prev_arr.map(arr => [...arr]);
    let temp;
    if (isCol) {
        temp = newArr[i][j];
        newArr[i][j] = newArr[i][j + 1];
        newArr[i][j + 1] = temp;
    }
    else {
        temp = newArr[i][j];
        newArr[i][j] = newArr[i + 1][j];
        newArr[i + 1][j] = temp;
    }
    return newArr;
}

const solve = (arr) => {
    let cur1 = '';
    let l1 = 0;
    let cur2 = '';
    let l2 = 0;
    for (let i = 0; i < n; i++) {
        cur1 = '';
        l1 = 0;
        cur2 = '';
        l2 = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i][j] === cur1) {
                l1++;
                max = Math.max(max, l1);
            } else {
                cur1 = arr[i][j];
                l1 = 1;
            }

            if (arr[j][i] === cur2) {
                l2++;
                max = Math.max(max, l2);
            } else {
                cur2 = arr[j][i];
                l2 = 1;
            }
        }
    }
}

rl.on('line', (input) => {
    if (first) {
        n = +input;
        first = false;
        return;
    }
    originArr[c++] = input.trim().split('');
});

rl.on('close', () => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j < n - 1) {
                let new_Arr = createNewArr(originArr, i, j, true);
                solve(new_Arr);
            }
            if (i < n - 1) {
                new_Arr = createNewArr(originArr, i, j, false);
                solve(new_Arr);
            }
        }
    }

    console.log(max);
});