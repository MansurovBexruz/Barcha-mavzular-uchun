// function doHomework(hasTime: boolean, isExistHomework: boolean) {
//   return new Promise((resolve, reject) => {
//     if (hasTime && isExistHomework)
//       return resolve(console.log("Homework was done"));
//   });
// }

// doHomework(true, true); // Promise<fulfilled>("Homework was done")

/**
 * doHomework(true, false) // Promise<fulfilled>("Homework was being waited")
 * doHomework(false, true) // Promise<rejected>("Homework was not done")
 */

try {
  throw new Error("First");
} catch (error: any) {
  if (error instanceof Error) {
    throw new Error("First");
  }
}
