var $__0 = $traceurRuntime.initGeneratorFunction(simpleAsyncGenerator);
function pauseExecution(time, generatorName) {
  console.log(("Pausing for " + time + "ms"));
  return setTimeout(function() {
    generators[generatorName].next();
  }, time);
}
function simpleAsyncGenerator(generatorName) {
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          console.log("starting...");
          $ctx.state = 14;
          break;
        case 14:
          $ctx.state = 2;
          return pauseExecution(2000, generatorName);
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          console.log("Came back!");
          $ctx.state = 16;
          break;
        case 16:
          $ctx.state = 6;
          return pauseExecution(5000, generatorName);
        case 6:
          $ctx.maybeThrow();
          $ctx.state = 8;
          break;
        case 8:
          console.log("Came back!");
          $ctx.state = 18;
          break;
        case 18:
          $ctx.state = 10;
          return pauseExecution(3000, generatorName);
        case 10:
          $ctx.maybeThrow();
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__0, this);
}
var generators = {},
    generatorName = "simpleAsyncGenerator";
generators[generatorName] = simpleAsyncGenerator(generatorName);
generators[generatorName].next();
