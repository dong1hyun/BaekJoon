const fs = require("fs");
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

const [n, m] = input[0].split(' ').map(Number);

const map = [];

for (let i = 1; i <= n; i++) {
    map.push(input[i].split('').map(Number));
}
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, - 1];
let visited = Array.from(Array(n + 1), () => Array.from(Array(m + 1), () => [false, false]));
let result = -1;
const bfs = () => {
    const queue = new Queue();
    queue.enqueue([0, 0, false, 1]);
    visited[0][0][0] = true;
    visited[0][0][1] = true;
    while (!queue.isEmpty()) {
        const [x, y, w, c] = queue.dequeue();
        if (x === n - 1 && y === m - 1) {
            result = c;
            return;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= n | nx < 0 | ny >= m | ny < 0) continue;
            if (!w && !visited[nx][ny][0] && map[nx][ny] === 0) {
                queue.enqueue([nx, ny, false, c + 1]);
                visited[nx][ny][0] = true;
            }
            if (!w && !visited[nx][ny][1] && map[nx][ny] === 1) {
                queue.enqueue([nx, ny, true, c + 1]);
                visited[nx][ny][1] = true;
            }
            if (w && !visited[nx][ny][1] && map[nx][ny] === 0) {
                queue.enqueue([nx, ny, true, c + 1]);
                visited[nx][ny][1] = true;
            }
        }
    }
}

bfs();

console.log(result);


const arr = Array.from(Array(5), () => [false, false]);