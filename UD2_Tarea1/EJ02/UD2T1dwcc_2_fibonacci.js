let i = 1;
let fibArray = [0, 1];

while (fibArray.length < 10) {
  const nextFib = fibArray[i] + fibArray[i - 1];
  fibArray.push(nextFib);
  i++;
}

console.log(fibArray.join(', '));
