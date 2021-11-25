function countDownFrom(number) {
   if (number === 0) {
      return 0;
   }

   return number + countDownFrom(number - 1);
}

console.log(countDownFrom(5));
