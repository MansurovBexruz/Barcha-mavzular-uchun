Arslonbek Alimbaev , [8/9/2025 12:44 PM]
## 1. Basic Greeter

📝 Vazifa:
makeGreeter(name) funksiyasi greet() funksiyasini qaytarsin. greet() chaqirilganda "Hello, <name>!" chiqarsin.
💡 Maqsad: Closure orqali tashqi funksiyadagi name qiymatini ichki funksiyada ishlatish.

💡 Misol:


const greeter = makeGreeter("Ali");
greeter(); // "Hello, Ali!"


🔍 Izoh: Closure — bu ichki funksiya tashqi scope’dagi o‘zgaruvchilarni eslab qolishi.

---

## 2. Counter

📝 Vazifa:
createCounter() funksiyasi increment() va get() metodlari bo‘lgan obyekt qaytarsin.
💡 Maqsad: Yashirin (`private`) hisobni closure orqali saqlash.

💡 Misol:


const c = createCounter();
c.increment();
c.increment();
c.get(); // 2


🔍 Izoh: Tashqi kod `count`ga to‘g‘ridan-to‘g‘ri kira olmaydi, faqat metodlar orqali o‘zgartiradi.

---

## 3. Bank Account

📝 Vazifa:
createBankAccount(initial) — balansni yashirin qilib, deposit(), withdraw(), va getBalance() metodlarini qaytarsin.
💡 Maqsad: Private holatda ma’lumot saqlash va faqat maxsus funksiyalar orqali boshqarish.

💡 Misol:


const acc = createBankAccount(100);
acc.withdraw(50); // true
acc.getBalance(); // 50
acc.withdraw(100); // false


🔍 Izoh: Closure ma’lumotlar xavfsizligini ta’minlaydi.

---

## 4. History Recorder

📝 Vazifa:
createHistory(n) — oxirgi n qiymatni saqlovchi funksiya bo‘lsin.
💡 Maqsad: Closure orqali massivni tashqi koddan yashirish.

💡 Misol:


const h = createHistory(3);
h.push('a'); h.push('b'); h.push('c'); h.push('d');
h.getHistory(); // ['b', 'c', 'd']


🔍 Izoh: Massiv uzunligini doim nazorat qilish kerak (`shift` yoki slice bilan).

---

## 5. Power Function

📝 Vazifa:
makePower(exponent) — berilgan daraja bo‘yicha funksiya yarating.
💡 Maqsad: Closure ichida matematik parametr saqlash.

💡 Misol:


const square = makePower(2);
square(5); // 25


🔍 Izoh: Har bir qaytarilgan funksiya o‘z exponentini eslab qoladi.

---

## 6. Once Function

📝 Vazifa:
once(fn) — bir marta ishlaydigan funksiya. Keyingi chaqiriqlarda oldingi natijani qaytaradi.
💡 Maqsad: Funksiya chaqiruvlarini cheklash.

💡 Misol:


let i = 0;
const f = once(() => ++i);
f(); // 1
f(); // 1


🔍 Izoh: called flag va result closure ichida saqlanadi.

---

## 7. Memoization

📝 Vazifa:
memoize(fn) — hisob natijalarini cache qilish.
💡 Maqsad: Bir xil argumentlar uchun hisobni qayta ishlamaslik.

💡 Misol:


const slow = n => n * 2;
const m = memoize(slow);
m(2); // hisoblaydi
m(2); // cache’dan oladi


🔍 Izoh: Map yoki obyekt orqali cache saqlash mumkin.

---

## 8. Event Emitter

📝 Vazifa:
createEmitter() — hodisalarni ro‘yxatdan o‘tkazish, chaqirish va olib tashlash imkonini bersin.
💡 Maqsad: Closure orqali event handlerlar ro‘yxatini yashirish.

💡 Misol:


const e = createEmitter();
const h = data => console.log(data);
e.on('msg', h);
e.emit('msg', 'hi'); // 'hi'
e.off('msg', h);
e.emit('msg', 'hi'); // hech narsa


🔍 Izoh: Har bir event uchun massivda handlerlar saqlanadi.

---

## 9. Loop Closure Gotcha

📝 Vazifa:
createTimers(n) — massiv qaytarsin, har funksiya o‘z indeksini chiqaradi. (`var` bilan ham ishlasin)
💡 Maqsad: IIFE yordamida closure’da indeksni saqlash.

💡 Misol:


const fns = createTimers(5);
fns[3](); // 3


🔍 Izoh: let o‘rniga var ishlatsangiz, closure kerak bo‘ladi.

---

## 10. Partial Application

📝 Vazifa:
partial(fn, ...presetArgs) — oldindan berilgan argumentlar bilan yangi funksiya yaratish.
💡 Maqsad: Parametrlarni closure orqali saqlash.

💡 Misol:


const add = (a,b,c) => a+b+c;
const add5 = partial(add, 2, 3);
add5(10); // 15


🔍 Izoh: Rest/spread operator ishlatiladi.

---

## 11. Secure ID Generator

📝 Vazifa:
createIdGenerator(prefix) — har chaqirilganda noyob ID yaratish.
💡 Maqsad: Har generatorning o‘z counteri bo‘lishi.

💡 Misol:

Arslonbek Alimbaev , [8/9/2025 12:44 PM]
const gen = createIdGenerator('item');
gen(); // 'item-1'
gen(); // 'item-2'


🔍 Izoh: Counter closure ichida saqlanadi.

---

## 12. Sandboxed Eval (Advanced)

📝 Vazifa:
createSandbox(allowed) — faqat ruxsat berilgan funksiyalarni ishlatadigan run(code) funksiyasi.
💡 Maqsad: Global scope’dan ajratilgan muhit yaratish.

💡 Misol:


const sandbox = createSandbox({ print: console.log });
sandbox.run("print('hello')");


🔍 Izoh: Xavfsiz emas, faqat closure va Function ishlashini tushuntirish uchun.

---

## 13. Delayed Logger

📝 Vazifa:
createDelayedLogger(message, delay) — belgilangan vaqt o‘tgach xabar chiqaradi.
💡 Maqsad: Closure ichida vaqt va xabarni saqlash.

💡 Misol:


const logLater = createDelayedLogger("Hello!", 2000);
logLater();


🔍 Izoh: setTimeout callback closure’dagi qiymatlarni eslab qoladi.

---

## 14. Multiplier Factory

📝 Vazifa:
makeMultiplier(multiplier) — ko‘paytiruvchi funksiya yaratadi.
💡 Maqsad: Closure orqali matematik ko‘rsatkichni saqlash.

💡 Misol:


const triple = makeMultiplier(3);
triple(5); // 15


🔍 Izoh: Har funksiya o‘z multiplierini eslab qoladi.

---

## 15. Rate Limiter

📝 Vazifa:
limitCalls(fn, limit) — faqat limit marta ishlaydigan funksiya.
💡 Maqsad: Closure orqali chaqiriqlar sonini hisoblash.

💡 Misol:


const limited = limitCalls(() => console.log('run'), 2);
limited(); // 'run'
limited(); // 'run'
limited(); // undefined


🔍 Izoh: count va limit closure’da saqlanadi.

---

## 16. Sequence Generator

📝 Vazifa:
createSequence(start, step) — har chaqirilganda navbatdagi qiymatni qaytaradi.
💡 Maqsad: Closure orqali ketma-ketlik hosil qilish.

💡 Misol:


const seq = createSequence(0, 2);
seq(); // 0
seq(); // 2
seq(); // 4


🔍 Izoh: current qiymati closure ichida o‘zgaradi.

---

## 17. Toggle Function

📝 Vazifa:
createToggle(...values) — har chaqirilganda ro‘yxatdagi keyingi qiymatni qaytaradi.
💡 Maqsad: Closure orqali indexni saqlash.

💡 Misol:


const toggle = createToggle('on', 'off');
toggle(); // 'on'
toggle(); // 'off'
toggle(); // 'on'


🔍 Izoh: Index har chaqiriqda oshadi va loop bo‘lib ketadi.

---

## 18. Logger with Count

📝 Vazifa:
createLogger() — xabar bilan birga nechanchi marta chaqirilganini ham chiqaradi.
💡 Maqsad: Closure orqali chaqiriqlar sonini hisoblash.

💡 Misol:


const log = createLogger();
log('Hello'); // "[1] Hello"
log('World'); // "[2] World"


🔍 Izoh: Har chaqiriqda count oshiriladi.

---

## 19. Password Checker

📝 Vazifa:
createPasswordChecker(password) — kiritilgan qiymat to‘g‘ri bo‘lsa true, bo‘lmasa false qaytaradi.
💡 Maqsad: Private ma’lumotni closure’da saqlash.

💡 Misol:


const check = createPasswordChecker('secret');
check('test');   // false
check('secret'); // true


🔍 Izoh: Tashqaridan parolni ko‘rish imkoni yo‘q.

---

## 20. Average Calculator

📝 Vazifa:
createAverageCalculator() — qiymatlar qo‘shilib boradi va o‘rtacha qiymat qaytaradi.
💡 Maqsad: Closure orqali qiymatlar yig‘indisini va sonini saqlash.

💡 Misol:


const avg = createAverageCalculator();
avg(10); // 10
avg(20); // 15
avg(30); // 20


🔍 Izoh: Har chaqiriqda umumiy yig‘indi va son oshiriladi.