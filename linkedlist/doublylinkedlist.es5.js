/**
 * Initialize your data structure here.
 */
function Node (val) {
  this.val = val || null;
  this.prev = null; // New line
  this.next = null;
}

function DoublyLinkedList () {
  this.head = null;
  this._length = 0;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {node}
 */
DoublyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this._length - 1) {
    return -1;
  }
  var count = 0;
  var current = this.head;
  while (count < index) {
    current = current.next;
    count++;
  }
  return current;
};

/**
 * Add a node with value val at the given index. 
 * @param {number} index
 * @param {number} val
 * @return {void}
 * index === -1 增加头节点；index === length 增加尾节点
 */
DoublyLinkedList.prototype.insert = function (index, val) {
  if (index < -1 || index > this._length) {
    return;
  }

  var node = new Node(val);
  if (!this._length) {
    this.head = node;
  } else {
    if (index <= 0) {
      node.next = this.head;
      this.head.prev = node; // New line
      this.head = node;
    } else if (index >= this._length) {
      var tail = this.get(this._length-1);
      tail.next = node;
      node.prev = tail; // New line
    } else {
      var current = this.get(index-1);
      node.next = current.next;
      current.next.prev = node; // New line
      current.next = node;
      node.prev = current; // New line
    }
  }
  this._length++;
};

/**
 * Remove the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 * 索引值在0~length-1之间的才有效
 */
DoublyLinkedList.prototype.remove = function (index) {
  if (index < 0 || index > this._length - 1) {
    return;
  }
  if (index === 0) {
    if (this._length === 1) {
      this.head = null
    } else {
      this.head = this.head.next;
      this.head.prev = null; // New line
    }
  } else if (index === this._length - 1) {
    this.get(index-1).next = null;
  } else {
    var target = this.get(index-1);
    target.next = target.next.next;
    target.next.prev = target; // New line
  }
  this._length--;
};

/**
 * Add a node of value val before the first element of the linked list.
 * @param {*} val
 * @return {void}
 */
DoublyLinkedList.prototype.prepend = function (val) {
  this.insert(0, val);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
DoublyLinkedList.prototype.append = function (val) {
  this.insert(this._length, val);
};

DoublyLinkedList.prototype.traverse = function (fn) {
   var currNode = this.head;
   while (currNode) {
      fn(currNode);
      currNode = currNode.next !== this.head ? currNode.next : false;
   }
};

DoublyLinkedList.prototype.reverse = function() {
   var prev = null;
   var current = this.head;
   var next;
   while(current) {
     next = current.next;
     current.next = prev;
     current.prev = next; // New line
     prev = current;
     current = next;
   }

  this.head = prev;
};

var linkedList = new DoublyLinkedList();
linkedList.remove(0);
linkedList.prepend(1);
linkedList.append(3);
linkedList.insert(1,2);
linkedList.reverse();
linkedList.traverse(function(node) {console.log(node.val)});
