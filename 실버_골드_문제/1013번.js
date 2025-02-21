const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = +input[0];
const regex01 = /^(01)+$/;
const regex1001 = /^10{2,}1+$/;

for(let i = 1; i <= tc; i++) {
    const pattern = input[i];

    const verification = (w) => {
        let isPossible = false;
        for(let i = 1; i <= w.length; i++) {
            const sub_str = w.substring(0, i);
            if(regex01.test(sub_str) || regex1001.test(sub_str)) {
                if(i === w.length) {
                    visited[w.length] = 1;
                    isPossible = true;
                    break;
                }
                else {
                    if(visited[w.length - sub_str.length] === 0) {
                        isPossible = verification(w.substring(i, w.length));
                    } else if(visited[w.length - sub_str.length] === 1) {
                        isPossible = true;
                    } else {
                        isPossible = false;
                    }
                    
                    if(isPossible) {
                        visited[w.length] = 1;
                        break;
                    }
                }
            }
        }
        return isPossible;
    }

    console.log(verification(pattern) ? 'YES' : 'NO');
}


// (100+1+ | 01)+