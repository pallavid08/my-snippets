//Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = (s, t) => {
   if (s.length !== t.length) {
      return false;
   }
   const firstWord = s.split('').sort();
   const secondWord = t.split('').sort();
   for (let i = 0; i < firstWord.length; i++) {
      if (firstWord[i] !== secondWord[i]) {
         return false;
      }
   }
   return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
