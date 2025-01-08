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

// function z() {
//     var b = 20;
//     return function x() {
//         var a = 7;
//         console.log("Testing");
//         return function y() {
//             console.log(`${a}, ${b}`);
//             console.log("Testing Again");
//         }
//         // a = 100;
//     }
// }

function x(){
    var a = 10;
    function y(){
        var b = 20;
        function z() {
            console.log(`${a}, ${b}`);
        }
        z();
    }
    y();
}
x();

// var c = z();
// console.log(c);
// c();
// var z = x();
// console.log(z);
// z();