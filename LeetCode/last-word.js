// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = (s) => {
   s = s.trim().split(' ');
   return s[s.length - 1].length;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '));
