// Make a generic multiplyBy HOF that can make other functions like: multiplyByTwo, multiplyByTen and so on...

const multiplyBy = (num1) => {
   return function (num2) {
      return `${num1} x ${num2} = ${num1 * num2}`;
   };
};

// You should be able to do:
const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(4)); // 8
const multiplyByTen = multiplyBy(10);
console.log(multiplyByTen(5));
console.log(multiplyByTen(6));
