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

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));