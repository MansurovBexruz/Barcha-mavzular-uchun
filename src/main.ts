function createIncrement(initialValue: number, interval: number) {
  let result: number[] = [];
  let count: number = initialValue;
  return {
    increment(step: number) {
      count += step;
      result.push(count);
    },
    start() {
      for (let i = 0; i < result.length; i++) {
        setTimeout(() => console.log(result[i]), interval * (i + 1));
      }
    },
  };
}

const { increment, start } = createIncrement(10, 2000);
increment(5);
increment(10);
increment(20);
increment(50);

start();
