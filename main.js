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