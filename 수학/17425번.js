const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const Max = 1000001;
const g = new Array(Max).fill(0);

for (let i = 1; i < Max; i++) {
  for (let j = 1; i * j < Max; j++) {
    g[i * j] += i; //이 부분은 f[i * j]를 구한 것과 같음
  }
  g[i] += g[i - 1]; // 이 전까지의 과정을 더해줘야 g배열 완성
}

let result = "";
let tc = true;
rl.on('line', (input) => {
  if(tc) {t = input; tc=false} 
    else result += g[input] + '\n';
});

rl.on('close', () => {
  console.log(result);
});