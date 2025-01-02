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
    console.log(r1, r2, g1, g2)
    const queue = new Queue();
    queue.enqueue([r1, r2, 0]);

    const visited = Array.from(Array(n), () => new Array(m).fill(false));
    visited[r1][r2] = true;
    let result = -1;

    function isDestination(x, y, c) {
        if (x === g1 && y === g2) {
            console.log(g1, g2, c);
            result = c + 1;
            visited[x][y] = true;
        }
    }

    function move(x, y, type, c) {
        if(type === 0) {
            if(x - 1 >= 0 && board[x - 1][y] !== 'D' && !visited[x - 1][y]) {
                move(x - 1, y, 0, c);
            }
            else if(!visited[x][y] && (x === 0 || board[x - 1][y] === 'D')) {
                isDestination(x, y, c);
                queue.enqueue([x, y, c + 1]);
                visited[x][y] = true;
            }
        }
        if(type === 1) {
            if(x + 1 < n && board[x + 1][y] !== 'D' && !visited[x + 1][y]) {
                move(x + 1, y, 1, c);
            }
            else if(!visited[x][y] && (x === n - 1 || board[x + 1][y] === 'D')) {
                isDestination(x, y, c);
                queue.enqueue([x, y, c + 1]);
                visited[x][y] = true;
            }
        }
        if(type === 2) {
            if(y - 1 >= 0 && board[x][y - 1] !== 'D' && !visited[x][y - 1]) {
                move(x, y - 1, 2, c);
            }
            else if(!visited[x][y] && (y === 0 || board[x][y - 1] === 'D')) {
                isDestination(x, y, c);
                queue.enqueue([x, y, c + 1]);
                visited[x][y] = true;
            }
        }
        if(type === 3) {
            if(y + 1 < m && board[x][y + 1] !== 'D' && !visited[x][y + 1]) {
                move(x, y + 1, 3, c);
            }
            else if(!visited[x][y] && (y === m - 1 || board[x][y + 1] === 'D')) {
                isDestination(x, y, c);
                queue.enqueue([x, y, c + 1]);
                visited[x][y] = true;
            }
        }
    }

    while(!queue.isEmpty()) {
        console.log(queue)
        const [x, y, c] = queue.dequeue();
        for(let i = 0; i < 4; i++) {
            move(x, y, i, c);
        }
    }
    console.log(visited)
    console.log(result);
    return result;
}
// ...D..R
// .D.G...
// ....D.D
// D....D.
// ..D....

[
    [
      true, false, true, false, true, false, true
    ],
    [
      false, false, true, true, true, false, true
    ],
    [
      true, true, false, true,false, false, false
    ],
    [
      false, true, true, false, true, false, true
    ],
    [
      true, true, false, true, true, false, true
    ]
  ]
  
  // ".D.R"
  // "...."
  // ".G.."
  // "...D"
  
  [ true, false, true, true ],
  [ false, false, false, false ],
  [ true, false, false, true ],
  [ true, false, true, false ]
  
  
  ["RDD","DDD","DDG"]
  
  [
  "..R",
  "...",
  "...",
  "..D",
  "DG."
  ]