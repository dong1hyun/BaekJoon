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

const [m, n] = input[0].split(' ').map(Number);
const map = [];
for(let i = 1; i <= n; i++) {
    map.push(input[i].split('').map(Number));
}

const limit = 101;
const visited = Array.from(Array(n + 1), () => new Array(m + 1).fill(limit * 2));
const mx = [1, -1, 0, 0];
const my = [0, 0, 1, -1];
const bfs = () => {
    const queue = new Queue();
    queue.enqueue([0, 0, 0]);
    visited[0][0] = 0;
    while(!queue.isEmpty()) {
        const [x, y, c] = queue.dequeue();
        for(let i = 0; i < 4; i++) {
            const nx = x + mx[i];
            const ny = y + my[i];
            if(nx < n && nx >= 0 && ny < m && ny >= 0) {
                if(map[nx][ny]) { // 가려는 곳이 벽
                    if(visited[nx][ny] > c + 1) {
                        queue.enqueue([nx, ny, c + 1]);
                        visited[nx][ny] = c + 1;
                    }
                } else { // 벽 X
                    if(visited[nx][ny] > c) {
                        queue.enqueue([nx, ny, c]);
                        visited[nx][ny] = c;
                    }
                }
            }
        }
    }
}

bfs();
console.log(visited[n - 1][m - 1]);