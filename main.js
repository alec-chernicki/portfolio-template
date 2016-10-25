var factorial = function(number) {
  // Our base case is 0 because we don't want to multiply our result by 0.
  if (number <= 0) {
    return 1;
  }
  else {
    return (number * factorial(number - 1));
  }
};

console.log(factorial(6));