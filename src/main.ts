/**
 * Vazifa bajarilgan linki:
 * https://excalidraw.com/
 */
// =======================
// VAZIFA 1: square + Promise + setTimeout
// =======================
function square(n: number) {
  return n * n;
}

function squareAndDouble(n: number) {
  return square(n) * 2;
}

console.log("1:", squareAndDouble(2));

Promise.resolve().then(() => console.log("2:", squareAndDouble(3)));

setTimeout(() => console.log("3:", squareAndDouble(4)), 0);

console.log("4:", squareAndDouble(5));

/*
EXPECTED OUTPUT (Vazifa 1):
1: 8
4: 50
2: 18
3: 32
*/

// // =======================
// // VAZIFA 2: sync + Promise + setTimeout aralash
// // =======================
// function fetchData(id: number) {
//   return `Data-${id}`;
// }

// function processData(id: number) {
//   return `Processed(${fetchData(id)})`;
// }

// console.log("A:", processData(1));

// setTimeout(() => console.log("B:", processData(2)), 0);

// Promise.resolve().then(() => console.log("C:", processData(3)));

// console.log("D:", processData(4));

// setTimeout(() => console.log("E:", processData(5)), 0);

// Promise.resolve().then(() => console.log("F:", processData(6)));

// /*
// EXPECTED OUTPUT (Vazifa 2):
// A: Processed(Data-1)
// D: Processed(Data-4)
// C: Processed(Data-3)
// F: Processed(Data-6)
// B: Processed(Data-2)
// E: Processed(Data-5)
// */
