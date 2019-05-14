function Node (val) {
  this.val = val;
  this.next = null;
}

function Stack () {
  this.top = null;
}

Stack.prototype.push = function (val) {
   var node = new Node(val);
   if(this.top) {
     node.next = this.top
     this.top = node
   } else {
     this.top = node
   }
};

Stack.prototype.pop = function () {
  if( this.top ) {
    var temp = this.top;
    this.top = this.top.next;
    return temp.val;
  } else {
    console.log('Stack is empty!');
    return null;
  }
};

Stack.prototype.reverse = function () {
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

Stack.prototype.traverse = function(fn) {
  var current = this.top;
  while(current) {
   fn(current);
   current = current.next;
  }
};

module.exports.Node = Node;
module.exports.Stack = Stack;