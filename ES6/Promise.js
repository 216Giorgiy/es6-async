//traceur --out ES5/Promise.js --script ES6/Promise.js

//Simple promise
function asyncFunction(pass, onSuccess, onFailure){
    setTimeout(function () {
        if(pass){
            onSuccess(100);
        }
        else{
            onFailure(Error("Some error occured!"));
        }
    }, 2000);
}

function promiseWrapper(pass){
    return new Promise(function (resolve, reject) {
        asyncFunction(pass, resolve, reject);
    });
}

function asyncFunctionUsingPromise(pass){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(pass){
                resolve(100);
            }
            else{
                reject({error: "Some error occured!"});
            }
        }, 2000);
    });
}

function onSuccess(data){
    console.log("Promise Passed with result: " + data);
    return data;
}

function onFailure(error){
    console.log("Promise Failed!");
    console.error(error);
}

asyncFunctionUsingPromise(true).then(onSuccess, onFailure);

asyncFunctionUsingPromise(false).then(onSuccess, onFailure);

//Resolving/Rejecting a promise with static data
Promise.resolve({city: "Hyderabad"}).then(function (data) {
    console.log(data);
});

Promise.reject({error: "Some error occured!"}).then(null, function (error) {
    console.log(error);
});

//Using catch
Promise.reject({error: "Some error occured! (Using catch)"}).catch(function (error) {
    console.log(error);
});

//Promise.all
var array = [Promise.resolve(100), Promise.resolve({name:"Ravi"}), Promise.resolve(true)];
Promise.all(array).then(function (data) {
    console.log(data);
});

Promise.race(array).then(function (data) {
    console.log(data);
});

/*
//Adding a failing promise to the above array
array.unshift(Promise.reject(-1));

Promise.all(array).then(function (data) {
    console.log(data);
}, function (error) {
    console.error(error);
});*/


//Chaining Promises

function getEmployee(empId){
    var employees = [
        {employeeId: 'E0001', name: 'Alex', department: 'D002'},
        {employeeId: 'E0002', name: 'Jil', department: 'D001'}
    ];
    var emp = employees.find(e => e.employeeId === empId);

    if(emp)
        return Promise.resolve(emp);
    else
        return Promise.reject({error:'Invalid employee id'});
}

function getDepartment(deptId){
    var departments = [
        {departmentId: 'D001', name: 'Accounts'},
        {departmentId: 'D002', name: 'IT'}
    ];

    var dept = departments.find(d => d.departmentId === deptId);

    if(dept)
        return Promise.resolve(dept);
    else
        return Promise.reject({error:'Invalid department id'});
}

function getDepartmentOfEmployee(employeeId){
    getEmployee(employeeId).then(function (employee) {
        console.log(employee);
        return getDepartment(employee.department);
    }, function(error){
        return error;
    }).then(function (department) {
        console.log(department);
    }, function(error){
        console.log(error);
    });
}

getDepartmentOfEmployee('E0001');
getDepartmentOfEmployee('E0003');

function *getEmployeeAndDept(empId){
    var empPromise = getEmployee(empId);
    yield empPromise;

    var deptPromise = empPromise.then(function (employee) {
        return getDepartment(employee.department);
    });
    yield deptPromise;
}

/*
for(let ed of getEmployeeAndDept('E0001')){
    ed.then(function (data) {
        console.log(data);
    });
}
*/
