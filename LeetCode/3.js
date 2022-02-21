const lengthOfLongestSubstring = (s) => {
    if (s.length === 1) {
      return 1;
    }
  
    let funcStr = s;
    let arr = [];
    let currSubstr = "";
  
    for (let i = 0; i < funcStr.length ; i++) {
      if (!currSubstr.includes(funcStr[i])) {
        currSubstr += funcStr[i];
  
  
      } else {
        arr.push(currSubstr);
        console.log(arr)
        currSubstr = "";
        let indexRepChar = funcStr.indexOf(funcStr[i]);
        funcStr = funcStr.slice(indexRepChar+1, funcStr.length);
        console.log(funcStr)
        i = -1;
        
      }
    }
    arr.push(funcStr)
  
    let result = arr.reduce((acc, value)=> value.length > acc ? acc = value.length : acc + 0 ,0)
  
    return result;
  };
  
  console.log(lengthOfLongestSubstring("abcabcbb"));
  // console.log(lengthOfLongestSubstring("bbbbb"));
  // console.log(lengthOfLongestSubstring("pwwkew"));
  // console.log(lengthOfLongestSubstring("dvdf"));
  // console.log(lengthOfLongestSubstring("qrsvbspk"));
  // console.log(lengthOfLongestSubstring("tmmzuxt"));
  
  // "qrsvbspk" --> "qrsvb", "vbspk"
  
  // "dvdf" --> "dv", "vdf"
  
  // "pwwkew" --> "pw", "wke", "kew"
  
  // "bbbbb" --> 'b', 'b', 'b', 'b', 'b'
  
  // "abcabcbb" --> 'abc', 'bca', 'cab', 'abc', 'cb', 'b'
  
  // "tmmzuxt" --> "tm", "mzuxt"
  