/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/

function intervalCount(cb, delay, amount) {
  // since the set interval is calling itself we only use it in the function
  // and in it we will use a cb to execute its logic
  let clearID = setInterval(function () {
    // in the set interval cb we call the main cb
    cb()
    // then it decreases the amount
    amount--
    // this checks if the amount it 0
    if(amount === 0) {
      // if it is then it clears the interval(stops the set interval)
      clearInterval(clearID)
    }
  }, delay)
}


intervalCount(function() {
  console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
