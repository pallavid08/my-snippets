class Character {
   constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
   }
   attack() {
      return 'attack with ' + this.weapon;
   }
}

class Elf extends Character {
   constructor(name, weapon, type) {
      super(name, weapon);
      this.type = type;
      console.log('THIS: ', this);
   }
}

class Ogre extends Character {
   constructor(name, weapon, color) {
      super(name, weapon);
      this.color = color;
   }
   makeFort() {
      return 'strongest fort in the world made';
   }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
console.log(dolby.attack());
console.log(dolby);

const shrek = new Ogre('Shrek', 'club', 'green');
console.log(shrek);
console.log(shrek.makeFort());

console.log(Ogre.isPrototypeOf(shrek)); //false
console.log(Ogre.prototype.isPrototypeOf(shrek)); //true
console.log(Character.prototype.isPrototypeOf(Ogre)); //false
console.log(Character.prototype.isPrototypeOf(Ogre.prototype)); //true

//Better way to check is using instanceof
console.log(dolby instanceof Elf); //true
console.log(dolby instanceof Ogre); //false
