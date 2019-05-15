var should = require('chai').should();
var Node = require('./binarysearchtree.es5').Node;
var BinarySearchTree = require('./binarysearchtree.es5').BinarySearchTree;

var bst = new BinarySearchTree();
bst.insert(3);
bst.insert(5);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(4);

// bst.insertInLevelOrder(3);
// bst.insertInLevelOrder(5);
// bst.insertInLevelOrder(2);
// bst.insertInLevelOrder(6);
// bst.insertInLevelOrder(1);
// bst.insertInLevelOrder(4);

// bst.remove(2);
bst.levelOrder();
// console.log(bst.getMax());
// console.log(bst.getMin());
// bst.preOrder(bst.root, function(node) { console.log(node.val)});

describe('测试二叉搜索树', function() {
  context('测试levelOrder()', function() {
    it('层序遍历正常', function() {
      var result = [];
      bst.levelOrder(function(node) { result.push(node.val) })
      result.should.be.deep.equal([3,2,5,1,4,6]);
    });
  });
});