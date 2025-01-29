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

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    insert(v) {
        this.heap.push(v);
        this.bubbleUp();
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return max;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let biggest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[biggest]) biggest = leftChildIndex;
            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[biggest]) biggest = rightChildIndex;
            if (biggest === index) break;

            [this.heap[index], this.heap[biggest]] = [this.heap[biggest], this.heap[index]];
            index = biggest;
        }
    }

    peek() {
        return this.heap[0] || null;
    }
}

function solution(priorities, location) {
    const queue = new Queue();
    const maxHeap = new MaxHeap();
    const pr = {};
    let result = 0;
    for (let i = 0; i < priorities.length; i++) {
        const v = priorities[i];
        maxHeap.insert(v);
        queue.enqueue(i);
        pr[i] = v;
    }
    while (!queue.isEmpty()) {
        const index = queue.dequeue();
        const v = pr[index];
        if (v >= maxHeap.peek()) {
            result++;
            if (index === location) return result;
            delete pr[index];
            maxHeap.extractMax();
        }
        else {
            queue.enqueue(index);
        }
    }
}