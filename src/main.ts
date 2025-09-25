// function connector<T, Z>(a: T, b: Z) {
//   return {
//     a,
//     b
//   };
// }
// const a = 10;
// const b = "pdp-";
// const result = connector(a, b); // { a: number, b: string }
// console.log(result);

function greeting<To extends "Kent" | "Mark", From extends "Nico" | "Chico">(to: To, from: From) {
  return `Hi ${to} from ${from}` as const;
}

const message = greeting("Kent", "Chico");

console.log(message);
