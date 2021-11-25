const titleCase = (str) => {
   return str
      .toLowerCase()
      .split(' ')
      .map((item) => item.replace(item[0], item[0].toUpperCase()))
      .join(' ');
};

console.log(titleCase("I'm a little tea pot"));
