const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const students = [];
const n = +input[0];
for (let i = 1; i <= n; i++) {
    students.push(input[i].split(' ').map((v, index) => {
        if (index === 0) return v;
        else return +v;
    }))
};

students.sort((a, b) => {
    if (a[1] === b[1]) {
        if (a[2] === b[2]) {
            if (a[3] === b[3]) {
                if(a[0] < b[0]) return -1
                if(a[0] === b[0]) return 0;
                return 1;
            }
            else {
                return b[3] - a[3];
            }
        }
        else {
            return a[2] - b[2];
        }
    }
    else {
        return b[1] - a[1];
    }
});

const result = students.map((student) => student[0]);
console.log(result.join('\n'));