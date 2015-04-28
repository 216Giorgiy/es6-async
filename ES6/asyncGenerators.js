//traceur --out ES5/asyncGenerators.js --script ES6/asyncGenerators.js

function *firstNEvenNumbers(count){
    var index = 1;
    while(index <= count){
        yield 2*index;
        index++;
    }
}

for(let n of firstNEvenNumbers(3)){
    console.log(n);
}

for(let n of firstNEvenNumbers(5)){
    console.log(n);
}

var generator = firstNEvenNumbers(4);
var next = generator.next();
while(!next.done){
    console.log(next.value);
    next=generator.next();
}

class AsyncHandler{
    constructor(generatorFn){
        this.sequence = generatorFn();
    }

    startOrResume(){
        this.sequence.next();
    }
}

function pauseExecution(time){
    console.log(`Pausing for ${time}ms`);
    return setTimeout(function () {
        generatorObj.next();
    }, time);
}

function *simpleAsyncGenerator(){
    console.log("starting...");
    yield pauseExecution(2000);
    console.log("Came back after first pause!");

    yield pauseExecution(5000);
    console.log("Came back after second pause!");

    yield pauseExecution(3000);
}

/*var asyncHandler, handlerName="simpleAsyncGenerator";
asyncHandler = new AsyncHandler(simpleAsyncGenerator);
asyncHandler.startOrResume();*/

var generatorObj = simpleAsyncGenerator();
generatorObj.next();

/*
function *generatorFn(){
    //first task
    yield firstValue;

    //second task
    yield secondValue;

    //third task
    yield thirdValue;

    //fourth task
    yield fourthValue;
}
*/
