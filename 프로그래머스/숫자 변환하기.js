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

const limit = 1000000;
const visited = new Array(limit + 1).fill(false);
function solution(x, y, n) {
    const queue = new Queue();
    queue.enqueue([x, 0]);
    visited[x] = true;
    while(!queue.isEmpty()) {
        const [x, c] = queue.dequeue();
        if(x === y) {
            return c;
        }

        let next = x + n;
        if(next >= 1 && next <= limit && !visited[next]) {
            queue.enqueue([next, c + 1]);
            visited[next] = true;
        }
        next = x * 2;
        if(next >= 1 && next <= limit && !visited[next]) {
            queue.enqueue([next, c + 1]);
            visited[next] = true;
        }
        next = x * 3;
        if(next >= 1 && next <= limit && !visited[next]) {
            queue.enqueue([next, c + 1]);
            visited[next] = true;
        }
    }

    return -1;
}