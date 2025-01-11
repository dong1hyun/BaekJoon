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

function solution(queue1, queue2) {
    const real_queue1 = new Queue();
    const real_queue2 = new Queue();

    queue1.forEach((v) => real_queue1.enqueue(v));
    queue2.forEach((v) => real_queue2.enqueue(v));

    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);

    let count = 0;
    while (count <= queue1.length + queue2.length * 2 && sum1 !== sum2) {
        if (sum1 < sum2) {
            const v = real_queue2.dequeue();
            real_queue1.enqueue(v);
            sum1 += v;
            sum2 -= v;
        } else {
            const v = real_queue1.dequeue();
            real_queue2.enqueue(v);
            sum2 += v;
            sum1 -= v;
        }
        count++;
    }

    if (sum1 !== sum2) return -1;
    return count;
}