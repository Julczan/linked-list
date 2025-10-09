class linkedList {
  constructor() {
    this.firstNode = null;
  }
  append(value) {
    if (this.firstNode === null) this.prepend(value);
    else {
      this.tmp = this.firstNode;
      while (this.tmp.nextNode !== null) {
        this.tmp = this.tmp.nextNode;
      }
      this.tmp.nextNode = new Node(value);
    }
  }
  size() {
    this.count = 0;
    this.tmp = this.firstNode;
    while (this.tmp !== null) {
      this.count++;
      this.tmp = this.tmp.nextNode;
    }
    return this.count;
  }
  prepend(value) {
    this.firstNode = new Node(value, this.firstNode);
  }
  head() {
    return this.firstNode;
  }
  tail() {
    this.tmp = this.firstNode;
    while (this.tmp.nextNode !== null) {
      this.tmp = this.tmp.nextNode;
    }
    return this.tmp;
  }
  at(index) {
    this.count = 0;
    this.tmp = this.firstNode;
    while (this.tmp !== null && this.count !== index) {
      this.count++;
      this.tmp = this.tmp.nextNode;
    }
    return this.tmp;
  }
  pop() {
    this.cur = this.firstNode;
    this.prev = null;
    while (this.cur.nextNode !== null) {
      this.prev = this.cur;
      this.cur = this.cur.nextNode;
    }
    this.prev.nextNode = this.cur.nextNode;
  }
  contains(value) {
    this.tmp = this.firstNode;
    while (this.tmp !== null && this.tmp.value !== value) {
      this.tmp = this.tmp.nextNode;
    }
    if (this.tmp !== null) {
      return true;
    } else {
      return false;
    }
  }
  find(value) {
    this.index = 0;
    this.tmp = this.firstNode;
    while (this.tmp !== null && this.tmp.value !== value) {
      this.index++;
      this.tmp = this.tmp.nextNode;
    }
    if (this.tmp !== null) {
      return this.index;
    } else {
      return null;
    }
  }
  toString() {
    this.tmp = this.firstNode;
    this.result = `( ${this.tmp.value} ) ->`;
    while (this.tmp.nextNode !== null) {
      this.tmp = this.tmp.nextNode;
      this.result += `( ${this.tmp.value} ) ->`;
    }
    this.result += ` null`;
    return this.result;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new linkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
