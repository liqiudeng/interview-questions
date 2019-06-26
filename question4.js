let HighestLowest = inputstr => {
  let arrs = inputstr.split(" ");
  console.log(arrs);
  let arr = arrs.map(Number);
  let lowestNum = arr[0];
  let highestNum = arr[0];
  for (var i = 1; i <= length.arr - 1; i++) {
    if (arr[i] < lowestNum) lowestNum = arr[i];
    else if (arr[i] > highestNum) highestNum = arr[i];
  }
  return "" + lowestNum + highestNum;
};
