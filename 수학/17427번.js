process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
  const n = +input;
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += Math.floor(n / i) * i
  }
   console.log(sum);
});