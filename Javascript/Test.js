// function func() {
//     var b 
//     console.log({b});
    
//     b =22

// }

// // console.log(a);
// // let a;
// // a=10;

// let a = 20;
// var b =10;
// // console.log(window.b);
// console.log("Test");
// console.log(this.b);
// console.log({a});

// func()

// const myfunc = () => {
    
// }


// {
//     let a = 10;

// }
// console.log(a);


function x() {
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();
console.log(z);
z();