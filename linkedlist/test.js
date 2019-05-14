var linkedList = new LinkedList();
linkedList.prepend(1);
linkedList.append(3);
linkedList.insert(1,2);
// linkedList.insert(0, 1);
// linkedList.insert(1, 2);
// linkedList.insert(2, 3);
linkedList.remove(1);
console.log(linkedList.head);