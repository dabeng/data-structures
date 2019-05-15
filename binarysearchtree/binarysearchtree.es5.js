function Node (val) {
  this.val = val || null;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insert = function (val) {
  var node = new Node(val);
  if(!this.root) {
    this.root = node;
  } else {
    var current = this.root;
    while(current) {
      if(node.val < current.val) {
        if(!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else if (node.val > current.val) {
        if(!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }
};

BinarySearchTree.prototype.inOrder = function (node, fn) {
 if(node){
   this.inOrder(node.left, fn);
   if(fn) fn(node);
   this.inOrder(node.right, fn);
 }
};

BinarySearchTree.prototype.preOrder = function (node, fn) {
 if (node) {
   if (fn) fn(node);
   this.preOrder(node.left, fn);
   this.preOrder(node.right, fn);
 }
};

BinarySearchTree.prototype.postOrder = function (node, fn) {
 if (node) {
   this.postOrder(node.left, fn);
   this.postOrder(node.right, fn);
   if(fn) fn(node);
 }
};

/**
 * Traverses  binary tree in level order. 
 * 
 */
BinarySearchTree.prototype.levelOrder = function (fn) {
  if (this.root === null) {
    return;
  }
  
  var queue = [this.root];
  while (queue.length) {
    var node = queue.shift();
    // pirnt/explore node.
    if (fn) fn(node);
    // enqueue left
    if (node.left) {
      queue.push(node.left);
    }
    // enqueue right.
    if (node.right) {
      queue.push(node.right);
    }
  }
};

/**
 * Removes a node and it's subtrees from a 
 * binary tree.
 * @param root
 * @value 
 * 
 * @return updated root.
 */
BinarySearchTree.prototype.remove = function (val) {
  if (this.root === null) {
    return;
  }
  if (this.root.val === val) {
    this.root = null;
    return;
  }
  var queue = [this.root];
  while (queue.length) {
    var node = queue.shift();
    
    // If target is on left of parent.
    if (node.left && node.left.val === val) {
      node.left = null;
      break;
    } else if (node.left) {
      queue.push(node.left);
    }
    
    // If target is on right of parent.
    if (node.right && node.right.val === val) {
      node.right = null;
      break;
    } else if (node.right) {
      queue.push(node.right);
    }
  }
};

BinarySearchTree.prototype.getMin = function () {
 var current = this.root;
 while(current.left) {
 current = current.left;
 }
 return current.val;
};
BinarySearchTree.prototype.getMax = function () {
 var current = this.root;
 while(current.right) {
 current = current.right;
 }
 return current.val;
};

module.exports.Node = Node;
module.exports.BinarySearchTree = BinarySearchTree;