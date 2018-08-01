function Set() {
  this.values = [];
  this.numberOfValues = 0;
}

Set.prototype.add = function(value) {
  // if(this.values.indexOf(value)===-1)　
  // if(!~this.values.indexOf(value))
  if(!~this.values.indexOf(value)) {
    this.values.push(value);
    this.numberOfValues++;
  }
};
Set.prototype.remove = function(value) {
  // nothing repeated in a set
  var index = this.values.indexOf(value);
  // if is not -1
  if(~index) {
    // splice(index, 1)
    // delete one element in index postion
    this.values.splice(index, 1);
    this.numberOfValues--;
  }
};
Set.prototype.contains = function(value) {
  return this.values.indexOf(value) !== -1;
};
Set.prototype.union = function(set) {
  var newSet = new Set();
  set.values.forEach(function(value) {
    newSet.add(value);
  });
  this.values.forEach(function(value) {
    newSet.add(value);
  });
  return newSet;
};
// The same part
// O(n)
Set.prototype.intersect = function(set) {
  var newSet = new Set();
  // for(var value of set){}
  // arr.forEach((value)=>{})
  this.values.forEach(function(value) {
    if(set.contains(value)) {
      newSet.add(value);
    }
  });
  return newSet;
};
Set.prototype.difference = function(set) {
  var newSet = new Set();
  this.values.forEach(function(value) {
    if(!set.contains(value)) {
      newSet.add(value);
    }
  });
  return newSet;
};
// isSubset
Set.prototype.isSubset = function(set) {
  // Check is every element in the set.values pass the test
  return set.values.every(function(value) {
    // arr.every(callback[, thisArg])
    // return ture, if all the element get truthy result from the callback
    // others return false
    return this.contains(value);
    // this is optional, is default
  }, this);
};
Set.prototype.length = function() {
  return this.numberOfValues;
};
Set.prototype.print = function() {
  console.log(this.values.join(' '));
};

var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.print(); // => 1 2 3 4
set.remove(3);
set.print(); // => 1 2 4
console.log('contains 4 is true:', set.contains(4)); // => true
console.log('contains 3 is false:', set.contains(3)); // => false
console.log('---');
var set1 = new Set();
set1.add(1);
set1.add(2);
var set2 = new Set();
set2.add(2);
set2.add(3);
var set3 = set2.union(set1);
set3.print(); // => 1 2 3
var set4 = set2.intersect(set1);
set4.print(); // => 2
var set5 = set.difference(set3); // 1 2 4 diff 1 2 3
set5.print(); // => 4
var set6 = set3.difference(set); // 1 2 3 diff 1 2 4
set6.print(); // => 3
console.log('set1 subset of set is true:', set.isSubset(set1)); // => true
console.log('set2 subset of set is false:', set.isSubset(set2)); // => false
console.log('set1 length gives 2:', set1.length()); // => 2
console.log('set3 length gives 3:', set3.length()); // => 3

// My Practice
'use strict';

function MySet(){
	 this.value = [];
   this.length = 0;
}

MySet.prototype.add = function(val){
	if(this.value.indexOf(val) === -1){
  	this.value.push(val);
    this.length ++;
  }
}

MySet.prototype.union = function(set){
	var temp = new MySet();
  for(var i of this.value){
  	temp.add(i);
  }
  for(var i of set.value){
    temp.add(i);
  }
  
  return temp;
}

MySet.prototype.length = function(set){
	return set.values.length;
}

MySet.prototype.print = function(){
	return console.log(`${this.value.join(' ')}, length: ${this.length}, instance name: ${getClassName.bind(this)}`);
}

MySet.prototype.name = function(){
	return this.name;
}

/* const getClassName = function(){
  console.log(this);
  for(var name in window){
    if(window[name] === this){
      console.log(this);
      return name;
    }
  }
} */

var set = new MySet();
set.add('1');
set.add(1);
set.add('10');
set.add(1);
console.log(set.length);

var set2 = new MySet();
set2.add('a');
set2.add(1);

console.log(set2.length);
var set3 = set.union(set2);
/* set3.print(); */
console.log(set3.value);
/* set3.name(); */
console.log(set3.name());


