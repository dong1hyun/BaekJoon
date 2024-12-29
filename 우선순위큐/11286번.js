const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class AbsHeap {
    constructor() {
        this.heap = [];
    }

    insert(v) {
        this.heap.push(v);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 0) return 0;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            const parentAbs = Math.abs(this.heap[parentIndex]);
            const Abs = Math.abs(this.heap[index]);
            if (parentAbs < Abs || parentAbs === Abs && this.heap[index] > 0) break;
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
            let absSmallest = index;

            let Abs = Math.abs(this.heap[absSmallest]);
            const leftAbs = Math.abs(this.heap[leftChildIndex]);
            const rightAbs = Math.abs(this.heap[rightChildIndex]);
            if (leftChildIndex < length && leftAbs < Abs || leftAbs === Abs && this.heap[absSmallest] > 0) {
                absSmallest = leftChildIndex;
                Abs = leftAbs;
            }
            if (rightChildIndex < length && rightAbs < Abs || rightAbs === Abs && this.heap[absSmallest] > 0) {
                absSmallest = rightChildIndex;
            }
            if (absSmallest === index) break;

            [this.heap[absSmallest], this.heap[index]] = [this.heap[index], this.heap[absSmallest]];
            index = absSmallest;
        }
    }
}
// [ -1, -1, 1, 1, 2, -2 ]
// [ 1, -1, -2, 1, 2 ]
const n = +input[0];
const absHeap = new AbsHeap();

const result = [];
for (let i = 1; i <= n; i++) {
    const v = +input[i];
    if (v === 0) {
        result.push(absHeap.extractMin());
    }
    else {
        absHeap.insert(v);
    }
}

// console.log(absHeap.heap)
console.log(result.join('\n'));



-1
1
0
-1
1
-1
-2
1
2
0