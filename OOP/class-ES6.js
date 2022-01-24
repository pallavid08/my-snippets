//ES6 Class

class Elf {
   constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
   }
   attack() {
      return 'attack with ' + this.weapon;
   }
}

//Instances of Elf
const peter = new Elf('Peter', 'stones'); //instantiating with 'new' keyword
console.log(peter instanceof Elf); //true
// console.log(Elf instanceof peter); //false
console.log(peter.attack());
const sam = new Elf('Sam', 'fire');
console.log(sam.attack());
