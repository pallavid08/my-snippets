const fibonacciNthNumber = (num) => {
   let num1 = 0;
   let num2 = 1;
   let sum;

   for (let i = 0; i < num; i++) {
      sum = num1 + num2;
      // console.log(num1 + " + "+ num2 +" = "+ sum);
      num1 = num2;
      num2 = sum;
   }

   return num1;
};

console.log(fibonacciNthNumber(5));
console.log(fibonacciNthNumber(10));
