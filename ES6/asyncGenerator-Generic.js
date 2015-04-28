//traceur --out ES5/asyncGenerator-Generic.js --script ES6/asyncGenerator-Generic.js

function pauseExecution(time, generatorName){
    console.log(`Pausing for ${time}ms`);
    return setTimeout(function () {
        generators[generatorName].next();
    }, time);
}

function *simpleAsyncGenerator(generatorName){
    console.log("starting...");
    yield pauseExecution(2000, generatorName);
    console.log("Came back!");

    yield pauseExecution(5000, generatorName);
    console.log("Came back!");

    yield pauseExecution(3000, generatorName);
}

var generators={}, generatorName="simpleAsyncGenerator";
generators[generatorName] = simpleAsyncGenerator(generatorName);
generators[generatorName].next();
