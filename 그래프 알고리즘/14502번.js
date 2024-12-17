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

const [n, m] = input[0].split(' ').map(Number);

const map = [];
for(let i = 1; i <= n; i++) {
    map.push(input[i].split(' ').map(Number));
}

const vx = [];
const vy = [];
for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(map[i][j] === 2) {
            vx.push(i);
            vy.push(j);
        }
    }
}

let max = 0;
const bfs = () => {
    const newMap = map.map((item) => [...item]);

    const queue = new Queue();
    for(let i = 0; i < vx.length; i++) {
        queue.enqueue([vx[i], vy[i]]);
    }
    while(!queue.isEmpty()) {
        const [x, y] = queue.dequeue();
        if(x + 1 < n && newMap[x + 1][y] === 0) {
            queue.enqueue([x + 1, y]);
            newMap[x + 1][y] = 2;
        }
        if(y + 1 < m && newMap[x][y + 1] === 0) {
            queue.enqueue([x, y + 1]);
            newMap[x][y + 1] = 2;
        }
        if(x - 1 >= 0 && newMap[x - 1][y] === 0) {
            queue.enqueue([x - 1, y]);
            newMap[x - 1][y] = 2;
        }
        if(y >= 0 && newMap[x][y - 1] === 0) {
            queue.enqueue([x, y - 1]);
            newMap[x][y - 1] = 2;
        }
    }

    let sum = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(newMap[i][j] === 0) {
                sum++;
            }
        }
    }
    max = Math.max(max, sum);
};

const wall = (c) => {
    if(c === 3) {
        bfs();
        return;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (map[i][j] !== 1 && map[i][j] !== 2) {
                map[i][j] = 1;
                wall(c + 1);
                map[i][j] = 0;
            }
        }
    }
}

wall(0);

console.log(max);