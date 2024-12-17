const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const move = [];
for(let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    move[a] = b;
}

for(let i = n + 1; i <= n + m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    move[a] = b;
}

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

    enqueue(v) {
        const newNode = new Node(v);
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

        if(this.isEmpty()) {
            this.rear = null;
        }
        return removedValue;
    }

    isEmpty() {
        return this.length === 0;
    }
}


const visited = [];
const bfs = () => {
    const queue = new Queue();
    queue.enqueue([1, 0]);
    visited[1] = true;
    while(!queue.isEmpty()) {
        const [l, c] = queue.dequeue();
        if(l === 100) return c;
        for(let i = 1; i <= 6; i++) {
            const m = move[l + i];
            if(l <= 100 && m) {
                queue.enqueue([m, c + 1])
                visited[m] = true;
            }
            else if(l <= 100 && !visited[l + i]) {
                queue.enqueue([l + i, c + 1]);
                visited[l + i] = true;
            }
        }
    }
}

console.log(bfs());