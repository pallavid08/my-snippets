const spliceNonVowels = (str) => {
   let arr = str.split('');
   let regex = /[^\saeiouy]/gi;
   let matched = str.match(regex);
   for (let i = 0; i < arr.length; i++) {
      if (matched.includes(arr[i]) && matched.includes(arr[i + 1])) {
         arr.splice(i + 1, 0, '-');
      }
   }
   return arr.join('');
};

console.log(spliceNonVowels('Bring it on'));
console.log(spliceNonVowels('This is splice with regex'));
