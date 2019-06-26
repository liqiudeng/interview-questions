let shortestW = inputstr => {
  let str = inputstr.split(" ");
  let shortestWord = " ";
  let shortest = i;
  while (i < inputstr.length) {
    let i = 1;
    str.forEach(str => {
      if (shortest >= str.length) {
        shortest = str.length;
        shortestWord = str;
      }
    });
    i++;
  }
  return shortestWord;
};
