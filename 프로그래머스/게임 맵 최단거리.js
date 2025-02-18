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
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
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

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({length: n}, () => new Array(m).fill(false));
    
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const queue = new Queue();
    queue.enqueue([0, 0, 1]);
    visited[0][0] = true;

    while(!queue.isEmpty()) {
        const [x, y, c] = queue.dequeue();
        if(x === n - 1 && y === m - 1) {
            return c;
        }
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx < n && ny < m && nx >= 0 && ny >= 0 && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.enqueue([nx, ny, c + 1]);
            }
        }
    }

    return -1;
}