const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];

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
        if(this.isEmpty()) {
            this.front = this.rear = newNode;
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }

    dequeue() {
        if(this.isEmpty()) return null;
        const removedValue = this.front.value;
        this.front = this.front.next;
        this.length--;
        if(this.isEmpty()) this.rear = null;
        
        return removedValue;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const mx = [2, 2, -2, -2, 1, 1, -1, -1];
const my = [1, -1, 1, -1, 2, -2, 2, -2];
const bfs = (v, l, dx, dy) => {
    const visited = Array.from(Array(l + 1), () => new Array(l + 1).fill(false));
    const queue = new Queue();
    const [a, b] = v;
    visited[a][b] = true;
    queue.enqueue([...v, 0]);
    while(!queue.isEmpty()) {
        const [x, y, c] = queue.dequeue();
        if(x === dx && y === dy) return c;
        for(let i = 0; i < 8; i++) {
            if(x + mx[i] >= 0 && x + mx[i] < l && y + my[i] >= 0 && y + my[i] < l && !visited[x + mx[i]][y + my[i]]) {
                queue.enqueue([x + mx[i], y + my[i], c + 1]);
                visited[x + mx[i]][y + my[i]] = true;
            }
        }
    }
}

for(let i = 1; i < input.length; i += 3) {
    const n = +input[i];
    const [a, b] = input[i + 1].split(' ').map(Number);
    const [c, d] = input[i + 2].split(' ').map(Number);
    console.log(bfs([a, b], n, c, d));
}