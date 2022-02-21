// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome=(s)=>{

    s = s.replace(/[^a-zA-Z0-9]/g, '')
    console.log(s)
    s = s.toLowerCase()
    
    return s == s.split('').reverse().join('')
}

console.log(isPalindrome("race a car"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome(" "))

//convert string to lower case
//create regex with only letters or only non letters
//update string with only letters
//Join it
//reverse this string 
//compare the joined string and the reversed string