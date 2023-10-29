var n: number = 1;
var miArray: number[] = [0, 1];

while (miArray.length < 10) {
  const nextFib: number = miArray[n] + miArray[n - 1];
  miArray.push(nextFib);
  n++;
}

console.log(miArray.join(', '));