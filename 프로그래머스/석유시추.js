class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null; // 큐의 맨 앞 노드
        this.rear = null;  // 큐의 맨 뒤 노드
        this.length = 0;   // 큐의 길이
    }

    // 요소 추가 (enqueue)
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

    // 요소 제거 (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const removedValue = this.front.value;
        this.front = this.front.next;
        this.length--;
        if (this.isEmpty()) {
            this.rear = null; // 큐가 비었을 경우 rear도 null로 설정
        }
        return removedValue;
    }

    // 큐가 비었는지 확인
    isEmpty() {
        return this.length === 0;
    }
}

function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const visited = Array.from(Array(n), () => new Array(m).fill(0));

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    let num = 1;
    let sum = 1;
    const check = (x, y) => {
        const queue = new Queue();
        queue.enqueue([x, y]);
        visited[x][y] = num;
        while (!queue.isEmpty()) {
            const [r, c] = queue.dequeue();

            for (let i = 0; i < 4; i++) {
                const nx = r + dx[i];
                const ny = c + dy[i];

                if (nx >= 0 && ny >= 0 && nx < n && ny < m && visited[nx][ny] === 0 && land[nx][ny] === 1) {
                    queue.enqueue([nx, ny]);
                    visited[nx][ny] = num;
                    sum++;
                }
            }
        }
    }
    const oil = {}
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (visited[i][j] === 0 && land[i][j] === 1) {
                check(i, j);
                oil[num] = sum;
                sum = 1;
                num++;
            }
        }
    }

    let max = 0;
    for (let i = 0; i < m; i++) {
        let check = {};
        let sum = 0;
        for (let j = 0; j < n; j++) {
            const num = visited[j][i];
            if (num > 0 && !check[num]) {
                check[num] = true;
                sum += oil[num];
            }
        }

        max = Math.max(max, sum);
    }
    return max;
}