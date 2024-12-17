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

const limit = 1001;
const n = +input;
const visited = Array.from(Array(limit), () => new Array(limit).fill(false));

const bfs = () => {
    const queue = new Queue();
    queue.enqueue([1, 0, 0]);

    while (!queue.isEmpty()) {
        const [s, cs, t] = queue.dequeue();
        if (n === s) {
            return t;
        }
        if (!visited[s][s]) {
            queue.enqueue([s, s, t + 1]);
            visited[s][s] = true;
        }
        if (s + cs < limit && !visited[s + cs][cs]) {
            queue.enqueue([s + cs, cs, t + 1]);
            visited[s + cs][cs] = true;
        }
        if (s - 1 >= 1 && !visited[s - 1][cs]) {
            queue.enqueue([s - 1, cs, t + 1]);
            visited[s - 1][cs] = true;
        }
    }
}

console.log(bfs());