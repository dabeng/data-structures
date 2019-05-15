/**
 * Initialize your data structure here.
 */
function Node (val) {
  this.val = val || null;
  this.next = null;
}

function LinkedList () {
  this.head = null;
  this._length = 0;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {node}
 */
LinkedList.prototype.get = function (index) {
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
LinkedList.prototype.insert = function (index, val) {
  if (index < -1 || index > this._length) {
    return;
  }
  var node = new Node(val);
  if (!this._length) {
    this.head = node;
  } else {
    if (index <= 0) {
      node.next = this.head;
      this.head = node;
    } else if (index >= this._length) {
      var tail = this.get(this._length - 1);
      tail.next = node;
    } else {
      var temp = this.get(index - 1);
      node.next = temp.next;
      temp.next = node;
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
LinkedList.prototype.remove = function (index) {
  if (index < 0 || index > this._length - 1) {
    return;
  }
  var count = 0;
  var current = this.head;
  while (count < index-1) {
    current = current.next;
    count++;
  }
  current.next = current.next.next;
  this._length--;
};

/**
 * Add a node of value val before the first element of the linked list.
 * @param {*} val
 * @return {void}
 */
LinkedList.prototype.prepend = function (val) {
  this.insert(0, val);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
LinkedList.prototype.append = function (val) {
  this.insert(this._length, val);
};

LinkedList.prototype.reverse = function() {
   var prev = null;
   var current = this.head;
   var next;
   while(current) {
     next = current.next;
     current.next = prev;
     prev = current;
     current = next;
   }

  this.head = prev;
};