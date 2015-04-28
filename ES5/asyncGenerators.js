var $__6 = $traceurRuntime.initGeneratorFunction(firstNEvenNumbers),
    $__7 = $traceurRuntime.initGeneratorFunction(simpleAsyncGenerator);
function firstNEvenNumbers(count) {
  var index;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          index = 1;
          $ctx.state = 9;
          break;
        case 9:
          $ctx.state = (index <= count) ? 1 : -2;
          break;
        case 1:
          $ctx.state = 2;
          return 2 * index;
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          index++;
          $ctx.state = 9;
          break;
        default:
          return $ctx.end();
      }
  }, $__6, this);
}
for (var $__1 = firstNEvenNumbers(3)[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__2; !($__2 = $__1.next()).done; ) {
  var n = $__2.value;
  {
    console.log(n);
  }
}
for (var $__3 = firstNEvenNumbers(5)[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__4; !($__4 = $__3.next()).done; ) {
  var n$__5 = $__4.value;
  {
    console.log(n$__5);
  }
}
var generator = firstNEvenNumbers(4);
var next = generator.next();
while (!next.done) {
  console.log(next.value);
  next = generator.next();
}
var AsyncHandler = function AsyncHandler(generatorFn) {
  "use strict";
  this.sequence = generatorFn();
};
($traceurRuntime.createClass)(AsyncHandler, {startOrResume: function() {
    "use strict";
    this.sequence.next();
  }}, {});
function pauseExecution(time) {
  console.log(("Pausing for " + time + "ms"));
  return setTimeout(function() {
    generatorObj.next();
  }, time);
}
function simpleAsyncGenerator() {
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          console.log("starting...");
          $ctx.state = 14;
          break;
        case 14:
          $ctx.state = 2;
          return pauseExecution(2000);
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          console.log("Came back after first pause!");
          $ctx.state = 16;
          break;
        case 16:
          $ctx.state = 6;
          return pauseExecution(5000);
        case 6:
          $ctx.maybeThrow();
          $ctx.state = 8;
          break;
        case 8:
          console.log("Came back after second pause!");
          $ctx.state = 18;
          break;
        case 18:
          $ctx.state = 10;
          return pauseExecution(3000);
        case 10:
          $ctx.maybeThrow();
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__7, this);
}
var generatorObj = simpleAsyncGenerator();
generatorObj.next();
