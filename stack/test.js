var should = require("chai").should()
var Node = require("../stack.es5").Node;

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.traverse(function(node) { console.log(node.val)});