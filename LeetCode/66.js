//Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

const plusOne = (digits) => {
   for (let i = 0; i < digits.length; i++) {
      let ifNine = digits[digits.length - i - 1];
      if (ifNine === 9) {
         digits[digits.length - i - 1] = 0;
      } else {
         digits[digits.length - i - 1] += 1;
         return digits;
      }
   }
   if (digits[0] === 0) {
      digits.unshift(1);
   }
   return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
