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
}

function solution(scoville, K) {
    const heap = new MinHeap();
    for (let i = 0; i < scoville.length; i++) {
        heap.insert(scoville[i]);
    }

    let result = 0;
    while (true) {
        let v1 = heap.extractMin();
        let v2 = heap.extractMin();
        v2 = v2 === null ? 0 : v2;
        if (!heap.heap.length) {
            if (v1 + v2 * 2 < K) return -1;
        }
        if (v1 < K) {
            heap.insert(v1 + v2 * 2);
            result++;
        }
        else break;
    }

    return result;
}