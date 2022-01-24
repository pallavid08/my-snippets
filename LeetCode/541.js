//Reverse String II
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

const reverseStr = (s, k) => {
   if (s.length < k) {
      return s.split('').reverse(), join('');
   }
   let final = '';

   for (let i = 0; i < s.length; i = i + k) {
      // 'abcdefg'
      let sliced = s.slice(i, i + k);
      let reversed = sliced.split('').reverse().join('');
      console.log('REVERSED: ', sliced, reversed, i);
      final = final + reversed;

      let slicedUnreversed = s.slice(i + k, i + k + k);
      final = final + slicedUnreversed;
      console.log('UNREVERSED: ', slicedUnreversed, i);

      i = i + k;
   }

   return final;
};

console.log(reverseStr('abcdefg', 2));
console.log(reverseStr('bacd', 2));
