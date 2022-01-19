// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

const canBeTypedWords = function (text, brokenLetters) {
   const splittedText = text.split(' ');
   let count = splittedText.length;
   for (let i = 0; i < brokenLetters.length; i++) {
      for (let j = 0; j < splittedText.length; j++) {
         if (splittedText[j].includes(brokenLetters[i])) {
            count--;
            splittedText[j] = '';
         }
      }
   }
   return count;
};
console.log(canBeTypedWords('hello world', 'ad'));
console.log(canBeTypedWords('leet code', 'lt'));
console.log(canBeTypedWords('leet code', 'e'));
