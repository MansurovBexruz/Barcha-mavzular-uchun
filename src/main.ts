function getA(callback: (a: number) => void) {
  console.log("Loading a...");
  setTimeout(() => {
    const a = 10;
    callback(a);
  }, 1000);
}
function getB(callback: (a: number) => void) {
  console.log("Loading b...");
  setTimeout(() => {
    const a = 20;
    callback(a);
  }, 1000);
}
function getC(callback: (a: number) => void) {
  console.log("Loading c...");
  setTimeout(() => {
    const a = 30;
    callback(a);
  }, 1000);
}
function getD(callback: (a: number) => void) {
  console.log("Loading d...");
  setTimeout(() => {
    const a = 40;
    callback(a);
  }, 1000);
}

getA((a) => {
  console.log(`${a}`);
  getB((b) => {
    console.log(`${b}`);
    getC((c) => {
      console.log(`${c}`);
      getD((d) => {
        console.log(`${d}`);
      });
    }); 
  });
});

/**
 * after 1s : a = 10
 * after 3s : b = 20
 * after 5s : c = 30
 * after 7s : d = 40
 *
 */
