function Queue() {
  // constructor is a function 
  this.queue = [];
}

// js is prototype based inheritence
Queue.prototype.enqueue = function(value) {
  this.queue.push(value);
};
Queue.prototype.dequeue = function() {
  // dequeue
  // arr.shift(), the arr will also be affected
  return this.queue.shift();
};
Queue.prototype.peek = function() {
  // just a glance of the first value
  return this.queue[0];
};
Queue.prototype.length = function() {
  return this.queue.length;
};
Queue.prototype.print = function() {
  console.log(this.queue.join(' '));
};

// use new to init an instance of a fun, make this meaningful to a function
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // => 1 2 3
console.log('length is 3:', queue.length()); // => 3
console.log('peek is 1:', queue.peek()); // => 3
console.log('dequeue is 1:', queue.dequeue()); // => 1
queue.print(); // => 2 3
console.log('dequeue is 2:', queue.dequeue());  // => 2
console.log('length is 1:', queue.length()); // => 1
console.log('dequeue is 3:', queue.dequeue()); // => 3
queue.print(); // => ''
console.log('peek is undefined:', queue.peek()); // => undefined
console.log('dequeue is undefined:', queue.dequeue()); // => undefined
