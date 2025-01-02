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