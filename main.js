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