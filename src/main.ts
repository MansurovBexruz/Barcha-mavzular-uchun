function createFunction(count: number) {
  let fns = [];

  for (let i = 0; i <= count; i++) {
    fns.push(function () {
      return i + 1;
    });
  }

  return fns;
}

const fns = createFunction(5);

console.log(fns[0]());
console.log(fns[1]());
console.log(fns[2]());
console.log(fns[3]());
console.log(fns[4 ]());
