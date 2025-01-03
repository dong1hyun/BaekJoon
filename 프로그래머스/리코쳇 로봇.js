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

function solution(board) {
    const n = board.length;
    const m = board[0].length;
    let r1, r2;
    let g1, g2;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === 'R') {
                r1 = i;
                r2 = j;
            }
            if(board[i][j] === 'G') {
                g1 = i;
                g2 = j;
            }
        }
    }

    const queue = new Queue();
    queue.enqueue([r1, r2, 1]);

    const visited = Array.from(Array(n), () => new Array(m).fill(false));
    visited[r1][r2] = true;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    while(!queue.isEmpty()) {
        let [x, y, c] = queue.dequeue();
        for(let i = 0; i < 4; i++) {
            let nx = x;
            let ny = y;
            while(true) {
                nx += dx[i];
                ny += dy[i];

                if(nx === -1 || ny === -1 || nx === n || ny === m || board[nx][ny] === 'D') {
                    nx -= dx[i];
                    ny -= dy[i];
                    console.log(nx, ny);
                    if(nx === g1 && ny === g2) {
                        return c;
                    }
                    if(!visited[nx][ny]) {
                        queue.enqueue([nx, ny, c + 1]);
                        visited[nx][ny] = true;
                    }
                    break;
                }
            }
        }
    }
    return -1;
}