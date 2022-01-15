const elfFunctions = {
   attack() {
      return 'attack with ' + this.weapon;
   },
};

const createElf = (name, weapon) => {
   let newElf = Object.create(elfFunctions); //Prototypal inheritance
   console.log(newElf.__proto__);
   newElf.name = name;
   newElf.weapon = weapon;
   return newElf;
};

const peter = createElf('Peter', 'stones');
console.log(peter.attack());
const sam = createElf('Sam', 'fire');
console.log(sam.attack());
