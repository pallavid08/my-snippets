function addTo80(n) {
   console.log('long time');
   return n + 80;
}
console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

//Memoization
let cache = {};
function memoizedAddTo80(n) {
   if (n in cache) {
      return `Return from if condition ${cache[n]}`;
   } else {
      console.log('long time');
      cache[n] = n + 80;
      return `Return from else condition ${cache[n]}`;
   }
}
console.log('1 ', memoizedAddTo80(5));
console.log('2', memoizedAddTo80(5));

//Better alternative with no global scope
function memoizeAddTo70(n) {
   let cache = {};
   return function (n) {
      if (n in cache) {
         return cache[n];
      } else {
         console.log('long time');
         const answer = n + 70;
         cache[n] = answer;
         return answer;
      }
   };
}

const memoized = memoizeAddTo70();
console.log(1, memoized(6));
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6));
