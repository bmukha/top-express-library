const judgeSquareSum = (number) => {
  const a = Math.trunc(Math.sqrt(number) + 1);
  const b = number - a;
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      if (i * i + j * j === number) {
        return true;
      }
    }
  }
  return false;
};

console.log(judgeSquareSum(4));
