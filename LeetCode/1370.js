// You are given a string s. Reorder the string using the following algorithm:

// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

// Return the result string after sorting s with this algorithm.


const sortString = (s) => {
    let sorted = s.split("").sort();
  
    const obj = {};
    for (let i = 0; i < s.length; i++) {
      if (!obj[sorted[i]]) {
        obj[sorted[i]] = 1;
      } else {
        obj[sorted[i]]++;
      }
    }
  
    const entries = Object.entries(obj);
    console.log(entries);
    const biggestVal = Math.max(...Object.values(obj));
  
    let str = "";
  
    for (let j = 0; j < biggestVal; j++) {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] > 0) {
          str = str + entries[i][0];
          entries[i][1]--;
        }
      }
      entries.reverse();
    }
  
    return str;
  };
  
  console.log(sortString("aaaabbbbcccc"));
  console.log(sortString("rat"));
  console.log(sortString("leetcode"));
  