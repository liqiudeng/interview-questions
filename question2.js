let MiddleCharater = string => {
  if (string.length % 2 === 0) {
    return string[string.length / 2] + string[string.length / 2 - 1];
  }
  return string[(string.length - 1) / 2];
};
