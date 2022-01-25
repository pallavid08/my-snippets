//Side effects:
const array = [1, 2, 3, 4];
function mutateArray(arr) {
   arr.pop();
   console.log('mutateArray: ', arr);
}
function mutateArray2(arr) {
   arr.forEach((item) => arr.push(1));
   console.log('mutateArray2: ', arr);
}
//The order of the function calls will matter.
mutateArray(array);
mutateArray2(array);
console.log(array);
