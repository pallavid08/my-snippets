var longestPalindrome = function(s) {
    let arr = [];


for (let i = 0; i < s.length; i++) {
 let tempStr='';
 for (j = i; j < s.length; j++) {
   tempStr += s[j];
   
   let reversed = tempStr.split("").reverse().join("");

   if (tempStr === reversed) {
     arr.push(tempStr);
   }
   
 }
  
}
let longest = arr.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];

return longest
 
};
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("c"));



// var longestPalindrome = function(s) {
//     let ll = 0, rr = 0;
     
//      for (let i = 0; i < s.length; i++)
//        for (let j of [i, i+1])
//          for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
//            [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];
     
//      return s.substring(ll, rr+1);
       
//    };