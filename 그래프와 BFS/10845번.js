const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let queue = [];
let first = true;
let n;
let f = 0;
let l = 0;
let result = ""
rl.on('line', (input) => {
    if(first) {
        n = +input;
        first = false;
        return;
    }
    const cmd = input.split(' ')[0];
    const v = input.split(' ')[1];
    if(cmd === "push") {
        queue[l++] = v;
    }
    else if(cmd === "pop") {
        if(f === l) result += -1 + '\n';
        else result += queue[f++] + '\n';
    }
    else if(cmd === "size") {
        result += l - f + '\n';
    }
    else if(cmd === "empty") {
        result += (l === f ? 1 : 0) + '\n';
    }
    else if(cmd === "front") {
        if(f === l) result += -1 + '\n';
        else result += queue[f] + '\n';
    }
    else {
        if(f === l) result += -1 + '\n';
        else result += queue[l - 1] + '\n';
    }
});

rl.on('close', () => {
    console.log(result);
});