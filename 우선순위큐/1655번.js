const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 값을 추가하고 힙을 재구성
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    // 최솟값을 제거하고 힙을 재구성
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    // 부모보다 작은 값을 위로 올림
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;

            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    // 자식 중 더 작은 값을 아래로 내림
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    // 최소값 확인
    peek() {
        return this.heap[0] || null;
    }
}