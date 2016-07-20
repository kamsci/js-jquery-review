// fib(n)
// Return the nth number of the Fibonacci sequence.

// http://en.wikipedia.org/wiki/Fibonacci_number

// 1,\;1,\;2,\;3,\;5,\;8,\;13,\;21,\;34,\;55,\;89,\;144,\;\ldots \;

// Example Input

var number = 7;

// Example Output

// 13

function fib(n) {
  fArray = [1, 1];
  if (n == 1 || n == 2) {
    return 1
  } else {
    for(var i = 0; i <= n - 3; i++) {;
      num = fArray[i] + fArray[i + 1]
      fArray.push(num);
    }
  }
  console.log("fArray", fArray);
  return fArray[n - 1];
}


result = fib(number)

console.log(result);


