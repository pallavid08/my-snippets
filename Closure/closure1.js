//closures and higher order function
function boo(string) {
   console.log(string);
   return function (name) {
      console.log(name);
      return function (name2) {
         console.log(name2);
         console.log(`hi ${name2}`);
      };
   };
}

const boo2 = (string) => (name) => (name2) =>
   console.log(string, name, name2, `hi ${name2}`);

boo('hey')('john')('sanya');

// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
booString = boo2('sing');
booStringName = booString('John');
booStringNameName2 = booStringName('tanya');
