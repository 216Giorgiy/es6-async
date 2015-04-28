var $__0 = $traceurRuntime.initGeneratorFunction(polling);
function polling() {
  var count,
      val;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          count = 0, val = {};
          $ctx.state = 14;
          break;
        case 14:
          count++;
          $ctx.state = 11;
          break;
        case 11:
          $ctx.state = (count !== 4) ? 1 : 5;
          break;
        case 1:
          $ctx.state = 2;
          return Promise.resolve({});
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 5:
          $ctx.state = 6;
          return Promise.resolve({value: "Some value"});
        case 6:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          $ctx.state = (count < 5) ? 14 : -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__0, this);
}
function runPolling(pollingIterator) {
  if (!pollingIterator) {
    pollingIterator = polling();
  }
  setTimeout(function() {
    var result = pollingIterator.next();
    if (result.value) {
      result.value.then(function(data) {
        console.log(data);
      });
    }
    if (!result.done) {
      runPolling(pollingIterator);
    }
  }, 1000);
}
runPolling();
