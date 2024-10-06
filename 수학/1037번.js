process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
  const line = input.trim().split('\n');
  const n = +line[0];
  const arr = [...line[1].trim().split(' ').map(Number)];
  let min = 1000001;
  let max = 1;
  arr.forEach((item) => {
    max = Math.max(item, max);
    min = Math.min(item, min);
  });

  console.log(max * min);
});