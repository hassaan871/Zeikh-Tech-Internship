var compose = function(functions) {
    
    return function(x) {
        if(functions.length === 0){
            return x;
        }
        let result;
        for(let i=functions.length-1; i>=0; i--){
            if(i === functions.length-1) {
                result = functions[i](x)
            }else{
                result = functions[i](result);
            }
        }
        return result;
    }
};

function f(x){ return 10 * x; }
function g(x){ return 10 * x; }
function h(x){ return 10 * x; }

// function f(x){ return x+1; }
// function g(x){ return x*x; }
// function h(x){ return 2*x; }

const functions = [f,g,h];

// const result = compose(functions);
// console.log(result(4));

const result = compose(functions);
console.log(result(1));

