const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const removedValue = this.front.value;
        this.front = this.front.next
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

const [m, n] = input[0].split(' ').map(Number);
const visited = Array.from(Array(n), () => new Array(m).fill(false));
const map = [];
const queue = new Queue();
for (let i = 1; i <= n; i++) {
    map.push(input[i].split(' ').map((item, index) => {
        if (item == 1) {
            visited[i - 1][index] = true;
            queue.enqueue([i - 1, index, 0]);
        }
        if(item == -1) {
            visited[i - 1][index] = true;
        }
        return +item;
    }));
}

let max = 0;
const bfs = () => {
    while (!queue.isEmpty()) {
        const [x, y, d] = queue.dequeue();
        max = Math.max(d, max);
        if (x + 1 < n && !visited[x + 1][y]) {
            queue.enqueue([x + 1, y, d + 1]);
            visited[x + 1][y] = true;
        }
        if (y + 1 < m && !visited[x][y + 1]) {
            queue.enqueue([x, y + 1, d + 1]);
            visited[x][y + 1] = true;
        }
        if (x - 1 >= 0 && !visited[x - 1][y]) {
            queue.enqueue([x - 1, y, d + 1]);
            visited[x - 1][y] = true;
        }
        if (y - 1 >= 0 && !visited[x][y - 1]) {
            queue.enqueue([x, y - 1, d + 1]);
            visited[x][y - 1] = true;
        }
    }
}

bfs();
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (!visited[i][j]) {
            console.log(-1);
            return;
        }
    }
}

console.log(max);