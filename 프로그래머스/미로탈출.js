class Node {
    constructor(v) {
        this.value = v;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = this.rear = null;
        this.length = 0;
    }

    enqueue(v) {
        const newNode = new Node(v);

        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
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

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    let start_x, start_y;
    let lever_x, lever_y;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maps[i][j] === 'S') {
                start_x = i;
                start_y = j;
            }
            if (maps[i][j] === 'L') {
                lever_x = i;
                lever_y = j;
            }
        }
    }

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let count = -1;

    const visited1 = Array.from(Array(n), () => new Array(m).fill(false));
    visited1[start_x][start_y] = true;
    const queue = new Queue();
    queue.enqueue([start_x, start_y, 0]);
    
    while(!queue.isEmpty()) {
        const [x, y, c] = queue.dequeue();
        if(maps[x][y] === 'L') {
            count = c;
            break;    
        }

        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] !== 'X' && !visited1[nx][ny]) {
                visited1[nx][ny] = true;
                queue.enqueue([nx, ny, c + 1]);
            }
        }
    }

    if(count === -1) return -1;

    const visited2 = Array.from(Array(n), () => new Array(m).fill(false));
    visited2[lever_x][lever_y] = true;
    const queue2 = new Queue();
    queue2.enqueue([lever_x, lever_y, 0]);
    
    let flag = false;
    while(!queue2.isEmpty()) {
        const [x, y, c] = queue2.dequeue();
        if(maps[x][y] === 'E') {
            flag = true;
            count += c;
            break;    
        }

        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] !== 'X' && !visited2[nx][ny]) {
                visited2[nx][ny] = true;
                queue2.enqueue([nx, ny, c + 1]);
            }
        }
    }

    if(flag) return count;
    return -1;
}

"SOOOL"
"XXXXX"
"OOOOO"
"OXXXX"
"OOOOE"