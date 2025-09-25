function connector<T, Z>(a: T, b: Z) {
  return {
    a,
    b
  };
}
const a = 10;
const b = "pdp-";
const result = connector(a, b); // { a: number, b: string }
console.log(result);
