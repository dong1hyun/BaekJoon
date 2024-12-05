class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedQueue {
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
  
    // 큐의 크기 확인
    size() {
      return this.length;
    }
  }