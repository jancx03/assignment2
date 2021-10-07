// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
for(let i = 0; i < this.length;i++)
    if(this[i] === undefined) continue;
    //element
    //element, index
    //element,index,array
    callbackFn(this[i],i,this);
};