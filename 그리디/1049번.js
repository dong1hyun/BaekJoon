const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const brand = [];
let minPackage = Number.MAX_SAFE_INTEGER;
let minPiece = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= m; i++) {
    const [p1, p2] = input[i].split(' ').map(Number);
    minPackage = Math.min(p1, minPackage);
    minPiece = Math.min(p2, minPiece);
}

let min = Number.MAX_SAFE_INTEGER;
let packageCount = 0;
if (n % 6 === 0) packageCount = n / 6;
else packageCount = Math.floor(n / 6) + 1;

const allPackage = minPackage * packageCount;
const allPiece = minPiece * n;

packageCount = Math.floor(n / 6);
const packageANDpiece = minPackage * packageCount + (n - packageCount * 6) * minPiece;
min = [allPackage, allPiece, packageANDpiece].reduce((acc, p) =>
    Math.min(acc, p), min
);

console.log(min);