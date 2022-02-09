// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

//Solution 1
const numJewelsInStones = (jewels, stones) => {
  let arr = jewels.split("");

  let obj = arr.reduce((a, v) => ({ ...a, [v]: v }), {});

  let counter = 0;

  for (let i = 0; i < stones.length; i++) {
   
    console.log(`stones[${i}] = `, stones[i],  `obj[${stones[i]}]`, obj[stones[i]])
    
    if (stones[i] === obj[stones[i]]) {
      counter++;
    }
  }
  return counter;
};

//Solution 2
const numJewelsInStones = (jewels, stones) => {

    let arr=[]
    
    for(let i=0; i<stones.length;i++){
       if(jewels.includes(stones[i]))
           arr.push(stones[i])
        }
      
    
     return arr.length;
       
   };

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));