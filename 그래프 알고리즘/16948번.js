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
        if(this.isEmpty()) {
            this.front = this.rear = newNode; 
        } else {
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

        if(this.isEmpty()) {
            this.rear = null;
        }

        return removedValue;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const n = +input[0];
const [r1, c1, r2, c2] = input[1].split(' ').map(Number);
const mx = [-2, -2, 0, 0, 2, 2];
const my = [-1, 1, -2, 2, -1, 1];
const visited = Array.from(Array(n + 1), () => new Array(n + 1).fill(false));
let result = -1;

const bfs = () => {
    const queue = new Queue();
    queue.enqueue([r1, c1, 0]);
    visited[r1][c1] = false;
    while(!queue.isEmpty()) {
        const [x, y, c] = queue.dequeue();
        if(x === r2 && y === c2) {
            result = c;
            return;
        }
        for(let i = 0; i < 6; i++) {
            const nx = x + mx[i];
            const ny = y + my[i];

            if(nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.enqueue([nx, ny, c + 1]);
            }
        }
    }
}

bfs();

console.log(result);