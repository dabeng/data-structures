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