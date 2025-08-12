console.log("======== CHALLENGE-10 ========");
function partial(fn: (...args: number[]) => number, ...args: number[]) {
  return function (...nums: number[]) {
    return fn(...nums, ...args);
  };
}

const add = (...args: number[]) => args.reduce((a, c) => a + c);
const summa = partial(add, 1);
console.log(summa(10, 15, )); // 15
