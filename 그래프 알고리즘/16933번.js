const fs = require("fs");
const { markAsUntransferable } = require("worker_threads");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Node {
    constructor(v) {
        this.value = v;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(v) {
        const newNode = new Node(v);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const removedValue = this.front.value;

        this.front = this.front.next;
        this.length--;

        if (this.isEmpty()) {
            this.rear = null;
        }

        return removedValue;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const [n, m, k] = input[0].split(' ').map(Number);
const map = [];
for (let i = 1; i <= n; i++) {
    map.push(input[i].split('').map(Number));
}

const visited = Array.from(Array(n + 1), () => Array.from(Array(m + 1), () => Array.from(Array(k + 1), () => Array(2).fill(false))));
for (let i = 0; i <= k; i++) {
    visited[0][0][i][0] = true;
    visited[0][0][i][1] = true;
}
const mx = [1, -1, 0, 0];
const my = [0, 0, 1, -1];
let result = -1;
const bfs = () => {
    const queue = new Queue();
    queue.enqueue([0, 0, 0, 0]);
    while (!queue.isEmpty()) {
        const [x, y, c, p] = queue.dequeue();
        console.log(x, y)
        if (x === n - 1 && y === m - 1) {
            result = p + 1;
            return;
        }
        for (let i = 0; i < 4; i++) {
            const nx = x + mx[i];
            const ny = y + my[i];
            if (!(nx < n && ny < m && nx >= 0 && ny >= 0)) continue;
            if (map[nx][ny] === 1 && !(p % 2) && c < k && !visited[nx][ny][c + 1][0]) {
                visited[nx][ny][c + 1][0] = true;
                queue.enqueue([nx, ny, c + 1, p + 1]);
            }
            if (map[nx][ny] === 0 && !visited[nx][ny][c][0]) {
                visited[nx][ny][c][0] = true;
                queue.enqueue([nx, ny, c, p + 1]);
            }
        }
        if(!visited[x][y][c][1]) {
            visited[x][y][c][1] = true;
            queue.enqueue([x, y, c, p + 1]);
        }
    }
}

bfs();

console.log(result);