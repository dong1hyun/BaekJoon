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

function solution(n) {
    const queue = new Queue();
    const visited = {};
    queue.enqueue([n, 0]);
    visited[n] = true;

    while(!queue.isEmpty()) {
        const [cur, count] = queue.dequeue();
        console.log(cur, count)
        if (cur === 0) return count;
        if (cur % 2 === 0) {
            if (!visited[cur / 2]) {
                visited[cur / 2] = true;
                queue.enqueue([cur / 2, count]);
            }
        }
        else {
            if (!visited[cur + 1]) {
                visited[cur + 1] = true;
                queue.enqueue([cur + 1, count + 1]);
            }
            if(!visited[cur - 1]) {
                visited[cur - 1] = true;
                queue.enqueue([cur - 1, count + 1]);
            }
        }
    }
}