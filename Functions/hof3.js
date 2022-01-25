//HOF
const hof = () => () => 5;

const anotherHof = (fn) => fn(5);

console.log(hof());

console.log(
   anotherHof(function a(x) {
      return x;
   })
);
