process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
  const arr = input.trim().split('\n');

  arr.forEach((item) => {
    let v = +item;
    let k = 1;
    let next = 1;
    while (true) {
      if (next % v === 0) {
        break;
      }
      else {
        k++;
        next = next * 10 + 1;
        next = next % v; // 큰 수를 한 번에 mod 연산하는 대신 여러 번에 걸쳐서 작은 수를 나눔
      }
    }
    console.log(k);
  });
});

process.stdin.on('end', () => {
  process.exit();
});
