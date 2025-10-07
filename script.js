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
      this.tmp.nextNode = new Node(value, null);
    }
  }
  prepend(value) {
    this.firstNode = new Node(value, this.firstNode);
  }
  head() {
    return this.firstNode;
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
console.log(list.head());
