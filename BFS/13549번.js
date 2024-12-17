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

const [n, k] = input[0].split(' ').map(Number);
const limit = 100200;
const visited = new Array(limit).fill(0);
let min = limit;
const bfs = (start) => {
    const queue = new Queue();
    queue.enqueue([start, 0]);
    visited[start] = true;
    while(!queue.isEmpty()) {
        const [x, c] = queue.dequeue();
        if(x === k) min = Math.min(min, c); 
        if(x !== 0 && 2 * x < limit && (visited[2 * x] > c | visited[2 * x] === 0)) {
            queue.enqueue([2 * x, c]);
            visited[2 * x] = c;
        }
        if(x + 1 < limit && (visited[x + 1] > c + 1 | visited[x + 1] === 0)) {
            queue.enqueue([x + 1, c + 1]);
            visited[x + 1] = c + 1;
        }
        if(x - 1 >= 0 && (visited[x - 1] > c + 1 | visited[x - 1] === 0)) {
            queue.enqueue([x - 1, c + 1]);
            visited[x - 1] = c + 1;
        }
    }
}

bfs(n)
console.log(min);