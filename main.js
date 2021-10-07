// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
for(let i = 0; i < this.length;i++)
    if(this[i] === undefined) continue;
    //element
    //element, index
    //element,index,array
    callbackFn(this[i],i,this);
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    data = [];
    
    for(let i = 0; i < this.length;i++)
        data.push(callbackFn(this[i],i,this));
    
    return data;


};
// FILTER
Array.prototype.myFilter = function(callback, i = 0, result = []) {
  callback(this[i], i, this) && result.push(this[i]);
  return i < arr.length ? this.myFilter(callback, ++i, result) :  result;
};
// SOME //
Array.prototype.mySome = function(callback) {
let some = false; 
let index = 0;
while(index < this.length){
    if(callback.call(this, this[index], index, this)){
      some = true 
      break 
    }
    index++
}
return some;
};
//EVERY
Array.prototype.myEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false
    }
  }

  return true
}
// REDUCE //
Array.prototype.myReduce = function(callback, initialValue = null) {
  let previousValue = this[0]
  let initialIndex = 1

  if (initialValue) {
    previousValue = initialValue
    initialIndex = 0
  }

  for (let i = initialIndex; i < this.length; i++) {
    previousValue = callback(previousValue, this[i], i, this)
  }

  return previousValue
}
// INCLUDES //
Array.prototype.myIncludes = function(value, index) {
index = typeof index === 'number' ? index < 0 ? Math.abs(index) > this.length ? this.length : this.length + index : index > this.length ? this.length : index : 0
while(index < this.length){
    let curr = this[index]
    if(value === curr) return true
    if(value !== value && curr !== curr) return true
    index++
}
return false

};
// INDEXOF //
Array.prototype.myIndexOf = function(search, fromIndex) {
 fromIndex = fromIndex ? typeof fromIndex === 'number' ? fromIndex 
                : typeof fromIndex === 'string' ? (fromIndex-=0) && fromIndex === fromIndex ? fromIndex 
                : 0 : 0 : 0
  let index = -1
  let i = fromIndex < 0 ? this.length + fromIndex : fromIndex
  while (i < this.length) {
    if(search == this[i]){
      index = i
      break
    }
    i++
  }
  return index
};
// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;
    for(let i = length; i < length + args.length;i++){
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;

};
// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchValue, fromIndex = null) {
  let initialIndex = this.length -1

  if (fromIndex !== null) {
    if (fromIndex < 0) {
      initialIndex = this.length - fromIndex * -1
    } else {
      initialIndex = fromIndex
    }
  }

  for (let i = initialIndex; i > -1; i--) {
    if (this[i] === searchValue) {
      return i
    }
  }

  return -1
};
