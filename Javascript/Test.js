// // function func() {
// //     var b 
// //     console.log({b});

// //     b =22

// // }

// // // console.log(a);
// // // let a;
// // // a=10;

// // let a = 20;
// // var b =10;
// // // console.log(window.b);
// // console.log("Test");
// // console.log(this.b);
// // console.log({a});

// // func()

// // const myfunc = () => {

// // }


// // {
// //     let a = 10;

// // }
// // console.log(a);

// // function z() {
// //     var b = 20;
// //     return function x() {
// //         var a = 7;
// //         console.log("Testing");
// //         return function y() {
// //             console.log(`${a}, ${b}`);
// //             console.log("Testing Again");
// //         }
// //         // a = 100;
// //     }
// // }

// function x(){
//     const result = setTimeout(()=>{console.log("setTimeout")}, 1000);
//     const result1 = setTimeout(()=>{console.log("setTimeout")}, 1000);
//     console.dir({result,result1});
//     console.log(typeof result);
//     clearTimeout(result)
//     // var a = 10;
//     // function y(){
//     //     var b = 20;
//     //     function z() {
//     //         console.log(`${a}, ${b}`);
//     //     }
//     //     z();
//     // }
//     // y();
//     // const x = 100;
//     // return x++;
// }
// x();

// // var c = z();
// // console.log(c);
// // c();
// // var z = x();
// // console.log(z);
// // z();

const courses = [
    {id:1, course:"CS"},
    {id:2, course:"SE"},
    {id:3, course:"IT"}
];
const params = 1;
const course = courses.find((element) => element.id === params);
console.log("Course: ", course);