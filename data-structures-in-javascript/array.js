function MyArray() {
  // array in JS is like arraylist in java, it auto expand, if empty is undefined   
  this.array = [];
}

MyArray.prototype.add = function(data) {
  this.array.push(data);
};
MyArray.prototype.remove = function(data) {
  this.array = this.array.filter(function(current) {
    return current !== data;
  });
};
MyArray.prototype.search = function(data) {
  var foundIndex = this.array.indexOf(data);
  if(~foundIndex) {
    return foundIndex;
  }
  // is equal to not return 
  return null;
};
MyArray.prototype.getAtIndex = function(index) {
  return this.array[index];
};
MyArray.prototype.length = function() {
  return this.array.length;
};
MyArray.prototype.print = function() {
  console.log(this.array.join(' '));
};

var array = new MyArray();
array.add(1);
array.add(2);
array.add(3);
array.add(4);
array.print(); // => 1 2 3 4
console.log('search 3 gives index 2:', array.search(3)); // => 2
console.log('getAtIndex 2 gives 3:', array.getAtIndex(2)); // => 3
console.log('length is 4:', array.length()); // => 4
array.remove(3);
array.print(); // => 1 2 4
array.add(5);
array.add(5);
array.print(); // => 1 2 4 5 5
array.remove(5);
array.print(); // => 1 2 4

// my practice
var fReturn1 = function(parm){
    if(parm === 1){
        return 'return a value';
    }
    return null;
}

var fNoReturn1 = function(parm){
    if(parm === 1){
        return 'return a value';
    }
}

// return null
console.log(fReturn1(2)); // null

// by default it return undefined
console.log(fNoReturn1(2)); // undefined 

