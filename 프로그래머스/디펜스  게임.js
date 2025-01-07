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
}

function solution(n, k, enemy) {
    const heap = new MaxHeap();
    for(let i = 0; i < enemy.length; i++) {
        const v = enemy[i];
        heap.insert(v);
        if(n < v) {
            if(k > 0) {
                n += heap.extractMax();
                n -= v;
                k--;
            } else {
                return i;
            }
        }
        else {
            n -= v;
        }
    }
    return enemy.length;
}