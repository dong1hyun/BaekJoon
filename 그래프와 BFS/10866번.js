const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.head = null; // 덱의 앞
        this.tail = null; // 덱의 뒤
        this.size = 0;
    }

    pushFront(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    pushBack(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    popFront() {
        if (this.size === 0) return -1;
        const value = this.head.value;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        else this.tail = null; // 요소가 1개일 경우
        this.size--;
        return value;
    }

    popBack() {
        if (this.size === 0) return -1;
        const value = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
        else this.head = null; // 요소가 1개일 경우
        this.size--;
        return value;
    }

    peekFront() {
        return this.head ? this.head.value : -1;
    }

    peekBack() {
        return this.tail ? this.tail.value : -1;
    }

    isEmpty() {
        return this.size === 0 ? 1 : 0;
    }
}

const deque = new Deque();
let result = "";
let first = true;

rl.on('line', (input) => {
    if(first) {
        n = +input;
        first = false;
        return;
    }
    const cmd = input.split(' ')[0];
    const v = input.split(' ')[1];
    if(cmd === "push_front") {
        deque.pushFront(v) + '\n';
    }
    else if(cmd === "push_back") {
        deque.pushBack(v) + '\n';
    }
    else if(cmd === "pop_front") {
        result += deque.popFront() + '\n';
    }
    else if(cmd === "pop_back") {
        result += deque.popBack() + '\n';
    }
    else if(cmd === "size") {
        result += deque.size + '\n';
    }
    else if(cmd === "empty") {
        result += deque.isEmpty() + '\n';
    }
    else if(cmd === "front") {
        result += deque.peekFront() + '\n';
    }
    else {
        result += deque.peekBack() + '\n';
    }
});

rl.on('close', () => {
    console.log(result);
});