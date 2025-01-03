


// // getName();
// // // console.log(x);
// // console.log(getName);
// // console.log(getName1);
// // console.log(getName2);

// // // const x = 7;
// // var x = 7;

// // function getName() {
// //     console.log("normal function syntax");
// // }

// // var getName1 = function(){
// //         console.log("function other syntax");
// // } // treated as a variable.

// // var getName2 = () => {
// //         console.log("This is arrow funciton");
// // } // treated as a variable.

// // // console.log(getName);

// var x=7;
// function getName(){
//     console.log("hey");
//     getStatus();
// }

// function getStatus(){
//     console.log("This is the STATUS");
    
// }

// getName();
// console.log(x);
// console.log(getName);


var x = 1;
a();
// b();

console.log(x);

// function a(){
//     // var x = 10;
//     x = 10;
//     console.log(x);
// }

function a(){
    // var x = 10;
    function nestedA(){
        x=10000;
        console.log("nested funcitonA: ",x);

    }
    nestedA();
    x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);   
}

// console.log(x);

// let x = 1;
// a();
// b();

// console.log(x);

// function a(){
//     let x = 10;
//     console.log(x);
// }

// function b(){
//     let x = 100;
//     console.log(x);   
// }

// console.log(x);
