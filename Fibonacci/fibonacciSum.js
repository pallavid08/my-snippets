const fibonacciSum = (n) => {
   let prev = 0;
   let current = 1;
   let sum = 1;
   let total = 1;
   for (let i = 1; i < n; i++) {
      sum = prev + current;
      total += sum;
      prev = current;
      current = sum;
   }

   return total;
};

console.log(fibonacciSum(6));
console.log(fibonacciSum(5));
