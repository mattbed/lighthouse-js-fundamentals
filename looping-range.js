function range (start, end, step) {
  let someArray = [];
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  } else if (start > end) {
    return [];
  } else if (step <= 0) {
    return [];
  } else {
    for (start; start <= end; start += step) {
      someArray.push(start);
    }
  }
  return someArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));