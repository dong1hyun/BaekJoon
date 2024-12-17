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

const [A, B, C] = input[0].split(' ').map(Number);

const limit = 1501;
const visited = Array.from(Array(limit), () => new Array(limit).fill(false));
const cal = (a, b) => {
    if(a > b) {
        return [a - b, b + b];
    } else {
        return [a + a, b - a];
    }
}

let result = 0;
const bfs = () => {
    const queue = new Queue();
    queue.enqueue([A, B, C]);
    visited[A][B] = visited[B][A] = visited[A][C] = visited[C][A] = visited[B][C] = visited[C][B] = true;

    while(!queue.isEmpty()) {
        const [a, b, c] = queue.dequeue();
        if(a === b && b === c) {
            result = 1;
            return;
        }
        let na, nb, nc;
        [na, nb] = cal(a, b);
        if(!visited[na][nb]) {
            visited[na][nb] = visited[nb][na] = true;
            queue.enqueue([na, nb, c]);
        }
        [na, nc] = cal(a, c);
        if(!visited[na][nc]) {
            visited[na][nc] = visited[nc][na] = true;
            queue.enqueue([na, b, nc]);
        }
        [nb, nc] = cal(b, c);
        if(!visited[nb][nc]) {
            visited[nb][nc] = visited[nc][nb] = true;
            queue.enqueue([a, nb, nc]);
        }
    }
}

bfs();

console.log(result);