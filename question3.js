let VowelCount = inputStr => {
  let checkWord = "aeiou";
  let count = 0;
  for (let i = 0; i < inputStr.length; i++)
    if (checkWord.indexOf(inputStr[i]) != -1) count++;
  return count;
};

let x = "apple";
console.log(VowelCount(x));
