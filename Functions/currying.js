const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

//Currying
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(5)(3));

const curriedMultiplyBy5 = curriedMultiply(5);

console.log(curriedMultiplyBy5(4));
