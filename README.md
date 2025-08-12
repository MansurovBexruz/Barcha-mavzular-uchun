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