const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Node {
    constructor(v) {
        this.value = v;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = this.rear = null;
        this.length = 0;
    }

    enqueue(v) {
        const newNode = new Node(v);
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
        if (this.isEmpty()) this.rear = null;
        return removedValue;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const [A, B] = input[0].split(' ').map(Number);

const visited = new Map();
visited.set(A, true);
const queue = new Queue();
queue.enqueue([A, 0]);
while(!queue.isEmpty()) {
    const [v, c] = queue.dequeue();
    if(v === B) {
        console.log(c + 1);
        return;
    }
    const v1 = v * 2;
    if(v1 <= B && !visited.has(v1)) {
        queue.enqueue([v1, c + 1]);
    }
    const v2 = Number('' + v + '1');
    if(v2 <= B && !visited.has(v2)) {
        queue.enqueue([v2, c + 1]);
    }
}

console.log(-1);