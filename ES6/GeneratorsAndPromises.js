//traceur --out ES5/GeneratorsAndPromises.js --script ES6/GeneratorsAndPromises.js

function *polling(){
    var count = 0, val={};
    do{
        count++;
        if(count !== 4){
            yield Promise.resolve({});
        }
        else{
            yield Promise.resolve({value: "Some value"});
        }
    }while(count<5);
}

function runPolling(pollingIterator){
    if(!pollingIterator){
        pollingIterator = polling();
    }

    setTimeout(function(){
        let result = pollingIterator.next();
        if(result.value) {
            result.value.then(function (data) {
                console.log(data);
            });
        }
        if(!result.done) {
            runPolling(pollingIterator);
        }
    }, 1000);
}

runPolling();
