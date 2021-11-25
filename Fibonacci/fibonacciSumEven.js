const fibonacciSumEven = (n) => {
   let prev = 0;
   let current = 1;
   let sum = 1;
   let total = 1;
   // let arr=[];
   let totalEven = 0;
   for (let i = 0; i < n; i++) {
      sum = prev + current;
      total += sum;
      prev = current;
      current = sum;
      // arr.push(prev)
      if (prev % 2 === 0) {
         totalEven += prev;
      }
   }

   return totalEven;
};

console.log(fibonacciSumEven(6));
console.log(fibonacciSumEven(5));
