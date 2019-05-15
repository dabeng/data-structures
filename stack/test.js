var should = require('chai').should();
var Node = require('./stack.es5').Node;
var Stack = require('./stack.es5').Stack;

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// stack.pop();
// stack.traverse(function(node) { console.log(node.val)});

describe('测试栈', function() {
  context('测试pop()', function() {
    it('第一个出栈的数据是3', function() {
       stack.pop().val.should.be.equal(3);
    });
  });
});