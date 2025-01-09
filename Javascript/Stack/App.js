const stack = [1,2,3,4];

function push(data) {
    stack[stack.length] = data;
}

function pop() {
    stack.length = stack.length-1;
}

function printStack() {
    for (let index = 0; index < stack.length; index++) {
        const element = stack[index];
        console.log(element);
    }
}

pop();
push(5);
push(6);
push(7);
printStack();