function Node (val) {
  this.val = val;
  this.next = null;
}

function Queue () {
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function (val) {
   var node = new Node(val);
   if(!this.head) {
     this.head = node;
     this.tail = node;
   } else {
     this.tail.next = node;
     this.tail = node;
   }
};

Queue.prototype.dequeue = function () {
  if(!this.head) {
   console.log('No item');
   return null;
  } else {
   var temp = this.head;
   this.head = this.head.next;
   return temp;
  }
};

Queue.prototype.reverse = function () {
  var prev = null;
  var current = this.top;
  while(current) {
    var next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.top = prev;
};

Queue.prototype.traverse = function(fn) {
  var current = this.head;
  while(current) {
   fn(current);
   current = current.next;
  }
}