const fruits = ["papaya", "dragon-fruit", "cherry", "strawberry"];

const display = (text,index,arr) => console.log(text,index,arr);

fruits.forEach(display);

Array.prototype.myForEach = function (callbackfn) {

    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        callbackfn(element,i,this)
        
    }
    
}

fruits.myForEach((element,index,arr) => {
    console.log(element + " my", index, arr);
})