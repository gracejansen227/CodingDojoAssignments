function fib() {
  var arr = [];
  arr[0] = 0;
  arr[1] = 0;
  var i = 2;
  function nacci() {
    arr[i] = arr[i-1] + arr[i-2];
    i++
    console.log(arr[i]);
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
