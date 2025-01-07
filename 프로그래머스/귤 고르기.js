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

function solution(k, tangerine) {
    tangerine.sort((a, b) => a - b);
    let prev = tangerine[0];
    let sum = 1;
    const heap = new MaxHeap();
    for(let i = 1; i < tangerine.length; i++) {
        if(prev === tangerine[i]) {
            sum++;
        } else {
            prev = tangerine[i];
            heap.insert(sum);
            sum = 1;
        }
    }
    heap.insert(sum);
    let result = 0;
    while(k > 0) {
        const c = heap.extractMax();
        k -= c;
        result++;
    }

    return result;
}