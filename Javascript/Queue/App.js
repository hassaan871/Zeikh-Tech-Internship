const queue = [1,2,3,4,5];

function enqueue(data){
    const queueLength = queue.length;
    for(let i=queueLength; i>0; i--){
        queue[i] = queue[i-1];
    }
    queue[0]=data
}

function dequeue(){
    queue.length = queue.length-1;
}

function printQueue() {
    for (let index = 0; index < queue.length; index++) {
        const element = queue[index];
        console.log(element);
    }
}

enqueue(0);
dequeue();

printQueue();
