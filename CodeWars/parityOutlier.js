const findOutlier = (integers) => {
    let odds = [];
    let evens = [];
  
    integers.filter((v, i) => v % 2 && odds.push(v));
    integers.filter((v, i) => !(v % 2) && evens.push(v));
  
    console.log(odds, evens);
    //your code here
    return odds.length === 1 ? odds[0] : evens[0];
  };
  
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
  