var should = require('chai').should();
var Node = require('./queue.es5').Node;
var Queue = require('./queue.es5').Queue;

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);


describe('测试队列', function() {
  context('测试dequeue()', function() {
    it('第一个出列的数据是1', function() {
       queue.dequeue().val.should.be.equal(1);
    });
  });
});