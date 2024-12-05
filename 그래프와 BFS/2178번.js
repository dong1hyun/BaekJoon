const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = [];

for (let i = 1; i <= n; i++) {
    map.push(input[i].split('').map(Number));
}

const visited = Array.from(Array(n + 1), () => new Array(m + 1).fill(false));

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null; // 큐의 맨 앞 노드
        this.rear = null;  // 큐의 맨 뒤 노드
        this.length = 0;   // 큐의 길이
    }

    // 요소 추가 (enqueue)
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }

    // 요소 제거 (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const removedValue = this.front.value;
        this.front = this.front.next;
        this.length--;
        if (this.isEmpty()) {
            this.rear = null; // 큐가 비었을 경우 rear도 null로 설정
        }
        return removedValue;
    }

    // 큐가 비었는지 확인
    isEmpty() {
        return this.length === 0;
    }

    // 큐의 크기 확인
    size() {
        return this.length;
    }
}

const bfs = (r, c) => {
    const queue = new Queue();
    queue.enqueue([r, c, 1]);
    while (queue.length !== 0) {
        const [x, y, d] = queue.dequeue();
        if (x === n - 1 && y === m - 1) {
            return d;
        }
        if (x + 1 < n && map[x + 1][y] && !visited[x + 1][y]) {
            queue.enqueue([x + 1, y, d + 1]);
        }
        if (y + 1 < m && map[x][y + 1] && !visited[x][y + 1]) {
            queue.enqueue([x, y + 1, d + 1]);
            visited[x][y + 1] = true;
        }
        if (x - 1 >= 0 && map[x - 1][y] && !visited[x - 1][y]) {
            queue.enqueue([x - 1, y, d + 1]);
            visited[x - 1][y] = true;
        }
        if (y - 1 >= 0 && map[x][y - 1] && !visited[x][y - 1]) {
            queue.enqueue([x, y - 1, d + 1]);
            visited[x][y - 1] = true;
        }
    }
}

const result = bfs(0, 0);

console.log(result);