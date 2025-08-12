// //  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 1. Basic Greeter

// // 📝 Vazifa:
// // makeGreeter(name) funksiyasi greet() funksiyasini qaytarsin. greet() chaqirilganda "Hello, <name>!" chiqarsin.
// // 💡 Maqsad: Closure orqali tashqi funksiyadagi name qiymatini ichki funksiyada ishlatish.

// // 💡 Misol:

// // const greeter = makeGreeter("Ali");
// // greeter(); // "Hello, Ali!"

// // 🔍 Izoh: Closure — bu ichki funksiya tashqi scope’dagi o‘zgaruvchilarni eslab qolishi.

// // ---

// function makeGreeter(name: string) {
//   return function () {
//     console.log(`Hello ${name}!`);
//   };
// }

// const greet = makeGreeter("Mark");

// greet();

// //  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 2. Counter

// // 📝 Vazifa:
// // createCounter() funksiyasi increment() va get() metodlari bo‘lgan obyekt qaytarsin.
// // 💡 Maqsad: Yashirin (`private`) hisobni closure orqali saqlash.

// // 💡 Misol:

// // const c = createCounter();
// // c.increment();
// // c.increment();
// // c.get(); // 2

// // 🔍 Izoh: Tashqi kod `count`ga to‘g‘ridan-to‘g‘ri kira olmaydi, faqat metodlar orqali o‘zgartiradi.

// // ---

// function createCounter() {
//   let count = 0;
//   return {
//     increment() {
//       count++;
//     },
//     getCount() {
//       return count;
//     },
//   };
// }

// const c = createCounter();
// c.increment();
// c.increment();
// c.increment();
// c.increment();
// c.increment();
// c.increment();
// console.log(c.getCount()); // 6

// //  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 3. Bank Account

// // 📝 Vazifa:
// // createBankAccount(initial) — balansni yashirin qilib, deposit(), withdraw(), va getBalance() metodlarini qaytarsin.
// // 💡 Maqsad: Private holatda ma’lumot saqlash va faqat maxsus funksiyalar orqali boshqarish.

// // 💡 Misol:

// // const acc = createBankAccount(100);
// // acc.withdraw(50); // true
// // acc.getBalance(); // 50
// // acc.withdraw(100); // false

// // 🔍 Izoh: Closure ma’lumotlar xavfsizligini ta’minlaydi.

// // ---

// function createBankAccount(initial: number) {
//   return {
//     deposit(num: number) {
//       initial += num;
//     },
//     withdraw(num: number) {
//       if (initial > num) {
//         initial -= num;
//         return true;
//       }

//       return false;
//     },
//     getBalance() {
//       return initial
//     },
//   };
// }

// const acc = createBankAccount(100);
// console.log(acc.withdraw(50)); // true
// console.log(acc.getBalance()); // 50
// console.log(acc.withdraw(100)); // false

// //  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 4. History Recorder

// // 📝 Vazifa:
// // createHistory(n) — oxirgi n qiymatni saqlovchi funksiya bo‘lsin.
// // 💡 Maqsad: Closure orqali massivni tashqi koddan yashirish.

// // 💡 Misol:

// // const h = createHistory(3);
// // h.push('a'); h.push('b'); h.push('c'); h.push('d');
// // h.getHistory(); // ['b', 'c', 'd']

// // 🔍 Izoh: Massiv uzunligini doim nazorat qilish kerak (`shift` yoki slice bilan).

// // ---

// function createHistory(n: number) {
//   let str: string[] = [];
//   return {
//     push(letter: string) {
//       if (str.length <= n) {
//         str.splice(0,str.length-n+1);
//       }

//       str.push(letter);
//     },

//     getHistory() {
//       return str;
//     },
//   };
// }

// const h = createHistory(2);
// h.push("a");
// h.push("b");
// h.push("c");
// h.push("d");
// console.log(h.getHistory()); // ['b', 'c', 'd']

// //  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

// // ## 5. Power Function

// // 📝 Vazifa:
// // makePower(exponent) — berilgan daraja bo‘yicha funksiya yarating.
// // 💡 Maqsad: Closure ichida matematik parametr saqlash.

// // 💡 Misol:

// // const square = makePower(2);
// // square(5); // 25

// // 🔍 Izoh: Har bir qaytarilgan funksiya o‘z exponentini eslab qoladi.
// // ---

// function makePower(exponent: number) {
//   return function (num: number) {
//     console.log(num ** exponent);
//   };
// }

// const square = makePower(3);
// square(5); // 25

//  ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// ## 6. Once Function

// 📝 Vazifa:
// once(fn) — bir marta ishlaydigan funksiya. Keyingi chaqiriqlarda oldingi natijani qaytaradi.
// 💡 Maqsad: Funksiya chaqiruvlarini cheklash.

// 💡 Misol:

// let i = 0;
// const f = once(() => ++i)
// f(); // 1
// f(); // 1

// 🔍 Izoh: called flag va result closure ichida saqlanadi.

// ---

//  ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
// ## 7. Memoization

// 📝 Vazifa:
// memoize(fn) — hisob natijalarini cache qilish.
// 💡 Maqsad: Bir xil argumentlar uchun hisobni qayta ishlamaslik.

// 💡 Misol:

// const slow = n => n * 2;
// const m = memoize(slow);
// m(2); // hisoblaydi
// m(2); // cache’dan oladi

// 🔍 Izoh: Map yoki obyekt orqali cache saqlash mumkin.

// ---

//  ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
// ## 8. Event Emitter

// 📝 Vazifa:
// createEmitter() — hodisalarni ro‘yxatdan o‘tkazish, chaqirish va olib tashlash imkonini bersin.
// 💡 Maqsad: Closure orqali event handlerlar ro‘yxatini yashirish.

// 💡 Misol:

// const e = createEmitter();
// const h = data => console.log(data);
// e.on('msg', h);
// e.emit('msg', 'hi'); // 'hi'
// e.off('msg', h);
// e.emit('msg', 'hi'); // hech narsa

// 🔍 Izoh: Har bir event uchun massivda handlerlar saqlanadi.

// ---

// //  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 9. Loop Closure Gotcha

// // 📝 Vazifa:
// // createTimers(n) — massiv qaytarsin, har funksiya o‘z indeksini chiqaradi. (`var` bilan ham ishlasin)
// // 💡 Maqsad: IIFE yordamida closure’da indeksni saqlash.

// // 💡 Misol:

// // const fns = createTimers(5);
// // fns[3](); // 3

// // 🔍 Izoh: let o‘rniga var ishlatsangiz, closure kerak bo‘ladi.

// // ---

// function createTimers(n: number) {
//   let arr = [];

//   for (let i = 0; i < n; i++) {
//     arr.push(() => i + 1);
//   }

//   return arr;
// }

// const fns = createTimers(5);
// console.log(fns[3]());

// //  ✅✅✅✅✅✅✅✅✅❌❌❌❌❌❌❌❌❌❌❌❌❌
// // ## 10. Partial Application

// // 📝 Vazifa:
// // partial(fn, ...presetArgs) — oldindan berilgan argumentlar bilan yangi funksiya yaratish.
// // 💡 Maqsad: Parametrlarni closure orqali saqlash.

// // 💡 Misol:

// // const add = (a,b,c) => a+b+c;
// // const add5 = partial(add, 2, 3);
// // add5(10); // 15

// // 🔍 Izoh: Rest/spread operator ishlatiladi.

// // ---

// function partial(fn: Function, ...presetArgs: any[]) {
//   let num = 0;

//   for (const n of presetArgs) {
//     num += n;
//   }

//   return function (...nums: number[]) {
//     const result = fn(...nums);

//     return result;
//   };
// }

// const add = (a: number, b: number, c: number) => a + b + c;
// const add5 = partial(add);
// console.log(add5(10)); //15

// // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 11. Secure ID Generator

// // 📝 Vazifa:
// // createIdGenerator(prefix) — har chaqirilganda noyob ID yaratish.
// // 💡 Maqsad: Har generatorning o‘z counteri bo‘lishi.

// // 💡 Misol:

// // Arslonbek Alimbaev , [8/9/2025 12:44 PM]
// // const gen = createIdGenerator('item');
// // gen(); // 'item-1'
// // gen(); // 'item-2'

// // 🔍 Izoh: Counter closure ichida saqlanadi.

// // --

// function createIdGenerator(prefix: string) {
//     let id: number = 0;
//     let counter: number = 0;

//     return function () {
//         id =  Math.floor(Math.random() * 9e13) + 1e13;
//         counter++;
//         return `${prefix}-${counter}: id-${id}`;
//     };
// }

// const gen = createIdGenerator('item');
// console.log(gen());
// console.log(gen());

// //❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
// ## 12. Sandboxed Eval (Advanced)

// 📝 Vazifa:
// createSandbox(allowed) — faqat ruxsat berilgan funksiyalarni ishlatadigan run(code) funksiyasi.
// 💡 Maqsad: Global scope’dan ajratilgan muhit yaratish.

// 💡 Misol:

// const sandbox = createSandbox({ print: console.log });
// sandbox.run("print('hello')");

// 🔍 Izoh: Xavfsiz emas, faqat closure va Function ishlashini tushuntirish uchun.

// ---

// //✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 13. Delayed Logger

// // 📝 Vazifa:
// // createDelayedLogger(message, delay) — belgilangan vaqt o‘tgach xabar chiqaradi.
// // 💡 Maqsad: Closure ichida vaqt va xabarni saqlash.

// // 💡 Misol:

// // const logLater = createDelayedLogger("Hello!", 2000);
// // logLater();

// // 🔍 Izoh: setTimeout callback closure’dagi qiymatlarni eslab qoladi.

// // ---

// function createDelayedLogger(message: string, delay: number) {
//   return function () {
//     setInterval(() => {
//       console.log(`${message}`);
//     }, delay);
//   };
// }

// const logLater = createDelayedLogger("Hello!", 2000);
// logLater();

// //✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 14. Multiplier Factory

// // 📝 Vazifa:
// // makeMultiplier(multiplier) — ko‘paytiruvchi funksiya yaratadi.
// // 💡 Maqsad: Closure orqali matematik ko‘rsatkichni saqlash.

// // 💡 Misol:

// // const triple = makeMultiplier(3);
// // triple(5); // 15

// // 🔍 Izoh: Har funksiya o‘z multiplierini eslab qoladi.

// // ---

// function makeMultiplier(multiplier: number) {
//   return function (value: number) {
//     return multiplier * value;
//   };
// }

// const triple = makeMultiplier(25);
// console.log(triple(5)); // 15

// //✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 15. Rate Limiter

// // 📝 Vazifa:
// // limitCalls(fn, limit) — faqat limit marta ishlaydigan funksiya.
// // 💡 Maqsad: Closure orqali chaqiriqlar sonini hisoblash.

// // 💡 Misol:

// // const limited = limitCalls(() => console.log('run'), 2);
// // limited(); // 'run'
// // limited(); // 'run'
// // limited(); // undefined

// // 🔍 Izoh: count va limit closure’da saqlanadi.

// // ---

// function limitCalls(fn: Function, limit: number) {
//   let count = 0;

//   return function () {
//     if (limit > count) {
//       count++;
//       fn();
//     }

//   };
// }

// const limited = limitCalls(() => console.log('run'), 3);
// limited(); // 'run'
// limited(); // 'run'
// limited(); // undefined

// //✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 16. Sequence Generator

// // 📝 Vazifa:
// // createSequence(start, step) — har chaqirilganda navbatdagi qiymatni qaytaradi.
// // 💡 Maqsad: Closure orqali ketma-ketlik hosil qilish.

// // 💡 Misol:

// // const seq = createSequence(0, 2);
// // seq(); // 0
// // seq(); // 2
// // seq(); // 4

// // 🔍 Izoh: current qiymati closure ichida o‘zgaradi.

// // ---

// function createSequence(start: number, step: number) {
//   return function () {
//     const result = start;
//     start += step;
//     return result;
//   };
// }

// const seq = createSequence(0, 2);
// console.log(seq());
// console.log(seq());
// console.log(seq());
// console.log(seq());

// //  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 17. Toggle Function

// // 📝 Vazifa:
// // createToggle(...values) — har chaqirilganda ro‘yxatdagi keyingi qiymatni qaytaradi.
// // 💡 Maqsad: Closure orqali indexni saqlash.

// // 💡 Misol:

// // const toggle = createToggle('on', 'off');
// // toggle(); // 'on'
// // toggle(); // 'off'
// // toggle(); // 'on'

// // 🔍 Izoh: Index har chaqiriqda oshadi va loop bo‘lib ketadi.

// // ---

// function createToggle(...values: string[]) {
//   let index = 0;

//   return function () {
//     const result = values[index];
//     index = (index + 1) % values.length;
//     return result;
//   };
// }

// const toggle = createToggle('on', 'off');
// console.log(toggle());
// console.log(toggle());
// console.log(toggle());

// //  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 18. Logger with Count

// // 📝 Vazifa:
// // createLogger() — xabar bilan birga nechanchi marta chaqirilganini ham chiqaradi.
// // 💡 Maqsad: Closure orqali chaqiriqlar sonini hisoblash.

// // 💡 Misol:

// // const log = createLogger();
// // log('Hello'); // "[1] Hello"
// // log('World'); // "[2] World"

// // 🔍 Izoh: Har chaqiriqda count oshiriladi.

// // ---

// function createLogger() {
//   let count = 1;

//   return function (str: string) {
//     console.log(`[${count++}] ${str}`);
//   };
// }

// const log = createLogger();
// log('Hello'); // "[1] Hello"
// log('World'); // "[2] World"

// //  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 19. Password Checker

// // 📝 Vazifa:
// // createPasswordChecker(password) — kiritilgan qiymat to‘g‘ri bo‘lsa true, bo‘lmasa false qaytaradi.
// // 💡 Maqsad: Private ma’lumotni closure’da saqlash.

// // 💡 Misol:

// // const check = createPasswordChecker('secret');
// // check('test');   // false
// // check('secret'); // true

// // 🔍 Izoh: Tashqaridan parolni ko‘rish imkoni yo‘q.

// // ---

// function createPasswordChecker(password: string) {
//   return function (checkPassword: string) {
//     if (password === checkPassword) return true;

//     return false;
//   };
// }

// const check = createPasswordChecker('secret');
// console.log(check("test")); // false
// console.log(check("secret")); // true

// //  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// // ## 20. Average Calculator

// // 📝 Vazifa:
// // createAverageCalculator() — qiymatlar qo‘shilib boradi va o‘rtacha qiymat qaytaradi.
// // 💡 Maqsad: Closure orqali qiymatlar yig‘indisini va sonini saqlash.

// // 💡 Misol:

// // const avg = createAverageCalculator();
// // avg(10); // 10
// // avg(20); // 15
// // avg(30); // 20

// function createAverageCalculator() {
//   let numbers: number[] = [];
//   return function (num: number) {
//     numbers.push(num);
//     if (numbers.length === 0) return 0;
//     let sum = 0;

//     for (let num of numbers) {
//       sum += num;
//     }

//     console.log(`O'rtacha qiymat = ${sum / numbers.length}`);
//   };
// }

// const avg = createAverageCalculator();
// avg(10); // 10
// avg(20); // 15
// avg(30); // 20
// avg(30); // 20
// avg(30); // 20
// avg(30); // 20
// avg(30); // 20

function createHistory(n: number) {
  let str: string[] = [];
  return {
    push(letter: string) {
      str.push(letter);
      if (str.length > n) {
        str.shift();
      }
    },
    getHistory() {
      return str;
    },
  };
}

const h = createHistory(2);
h.push("a");
h.push("b");
h.push("c");
h.push("d");
console.log(h.getHistory()); // ['b', 'c', 'd']
