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