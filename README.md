Arslonbek Alimbaev , [8/5/2025 12:40 PM]
## 🔹 1. CARD CLASS (Karta)

### 🎯 Maqsadi:

Card sinfi — bu bank kartasining raqamli modeli. Har bir karta mustaqil obyekt bo‘lib, unda karta raqami, balans, egasi, xavfsizlik ma’lumotlari kabi maydonlar bo‘ladi. Bundan tashqari, u orqali asosiy operatsiyalar — pul qo‘yish, yechish, PIN o‘zgartirish va tranzaksiya tarixini yuritish amalga oshiriladi.

### 📌 Maydonlari (Fields):

* number – 16 xonali noyob karta raqami.
* expiryDate – amal qilish muddati, masalan "12/25".
* holderName – karta egasining to‘liq ismi.
* cvv – 3 xonali xavfsizlik kodi, faqat offline va online to‘lovlar uchun.
* balance – joriy pul miqdori (so‘mda).
* pin – 4 xonali maxfiy kod, karta autentifikatsiyasi uchun.
* isActive – karta faolmi yoki bloklanganmi.
* cardType – karta turi (VISA, MASTERCARD, HUMO, UZCARD).
* dailyLimit – kunlik maksimal sarf limiti.
* monthlySpent – hozirgi oyda qancha sarflangan.
* transactionHistory – karta bo‘yicha barcha operatsiyalar ro‘yxati.

### ⚙️ Metodlari (Methods):

* deposit(amount) – kartaga pul qo‘shish.
* withdraw(amount) – kartadan pul yechish.
* changePin(newPin) – PIN kodni yangilash.
* block() – kartani bloklash.
* activate() – kartani faollashtirish.
* canSpend(amount) – berilgan miqdorni sarflash mumkinligini tekshirish.

---

## 🔹 2. BANK CLASS (Bank)

### 🎯 Maqsadi:

Bank sinfi — butun bankni ifodalaydi. U bir nechta kartalarni boshqaradi, ularning balansini nazorat qiladi, o‘ziga xos komissiyalarni qo‘llaydi va umumiy moliyaviy holatini yuritadi.

### 📌 Maydonlari:

* name – bank nomi.
* bankCode – bank kodi (masalan, "HB001").
* totalBalance – bankdagi barcha kartalar balansining yig‘indisi.
* cards – shu bankka tegishli barcha kartalar ro‘yxati.
* transactionFee – har bir tranzaksiya uchun komissiya (foiz ko‘rinishida, masalan 0.5%).

### ⚙️ Metodlari:

* addCard(card) – bankga yangi karta qo‘shish.
* getCardByNumber(number) – karta raqami orqali karta topish.
* transfer(fromCard, toCard, amount) – bank ichidagi kartalar o‘rtasida pul o‘tkazish.
* calculateTotalBalance() – barcha kartalar balansini hisoblab chiqish.

---

## 🔹 3. P2P CLASS (Peer-to-Peer tizim)

### 🎯 Maqsadi:

P2P sinfi — bu turli banklar o‘rtasida to‘g‘ridan-to‘g‘ri pul o'tkazmalarini amalga oshiruvchi tizim. U orqali foydalanuvchi HamkorBank'dan AsakaBank'ga to‘lov qilishi mumkin.

### 📌 Maydonlari:

* supportedBanks – P2P tizimida ishlashga ruxsat berilgan banklar ro‘yxati.
* transactionHistory – barcha P2P orqali amalga oshirilgan tranzaksiyalar.
* dailyTransactionLimit – har bir foydalanuvchi uchun kunlik maksimal o'tkazma limiti.
* serviceFee – P2P komissiyasi (masalan, 0.2%).

### ⚙️ Metodlari:

* registerBank(bank) – yangi bankni P2P tizimiga qo‘shish.
* send(fromCard, toCard, amount) – har xil banklar o‘rtasida pul yuborish.
* validateTransaction(fromCard, toCard, amount) – tranzaksiyani tekshirish.
* calculateFee(amount) – xizmat uchun komissiyani hisoblash.

---

## 🔹 4. ENUM TURLAR

### 📘 CardType:

Karta turini bildiradi:

* VISA
* MASTERCARD
* HUMO
* UZCARD

### 📘 TransactionType:

Tranzaksiya turini bildiradi:

* DEPOSIT – pul qo‘yish
* WITHDRAWAL – pul yechish
* TRANSFER – bank ichidagi o'tkazma
* P2P – banklar o‘rtasidagi o'tkazma

### 📘 TransactionStatus:

Tranzaksiya holatini bildiradi:

* PENDING – kutilmoqda
* SUCCESS – muvaffaqiyatli
* FAILED – muvaffaqiyatsiz
* CANCELLED – bekor qilingan

---

## 🔹 5. INTERFACE LAR

### 📘 Transaction:

Har qanday tranzaksiyaning asosiy strukturasini ifodalaydi:

* id
* tur (TransactionType)
* miqdor
* sana
* status
* izoh (ixtiyoriy)

### 📘 P2PTransaction:

P2P tranzaksiyalarning kengaytirilgan ko‘rinishi:

* Asosiy transaction ma’lumotlari
* Qo‘shimcha tarzda fromCardNumber, toCardNumber, fromBankCode, toBankCode mavjud

### 📘 ValidationResult:

Har qanday tekshiruv natijasini bildiradi:

* muvaffaqiyatli yoki yo‘q
* xato xabari (agar mavjud bo‘lsa)

### 📘 P2PTransactionResult:

P2P orqali yuborilgan tranzaksiya natijasini bildiradi:

Arslonbek Alimbaev , [8/5/2025 12:40 PM]
* muvaffaqiyatli yoki yo‘q
* tranzaksiya ID (agar muvaffaqiyatli bo‘lsa)
* xatolik sababi (agar muvaffaqiyatsiz bo‘lsa)

---

## 🔗 6. OBYEKTLAR O‘RTASIDAGI ALOQA

* Bank ↔ Card:
  Har bir bankda ko‘plab kartalar bo‘ladi. Karta faqat bitta bankga tegishli bo‘ladi.

* Bank ↔ P2P:
  P2P bir nechta bankni qo‘llab-quvvatlaydi. Banklar bu tizim orqali o‘zaro aloqa qiladi.

* Card ↔ P2P:
  Turli banklardagi kartalar P2P orqali bir-biriga pul yubora oladi.

Arslonbek Alimbaev , [8/5/2025 12:40 PM]




-----------------------------------------------------------------------------------------------------------------------------------------------------------
## 💳 CARD sinfidagi metodlar

---

### 1. deposit(amount)

– Nima qiladi:
Kartaga pul qo‘shadi va bu operatsiyani tranzaksiya tarixiga qo‘shadi.

– Qachon ishlaydi:

* amount > 0
* card.isActive == true

– Qachon ishlamaydi:

* Karta bloklangan (`isActive == false`)
* Miqdor manfiy yoki nol (`amount <= 0`)

---

### 2. withdraw(amount)

– Nima qiladi:
Kartadan pul yechadi, balansdan ayiradi va tranzaksiya qo‘shadi.

– Qachon ishlaydi:

* card.isActive == true
* amount > 0
* amount <= balance
* amount <= dailyLimit
* monthlySpent + amount <= monthlyLimit (agar mavjud bo‘lsa)

– Qachon ishlamaydi:

* Bloklangan karta
* Yetarli balans yo‘q
* Limitdan oshib ketgan
* Miqdor manfiy yoki nol

---

### 3. changePin(newPin)

– Nima qiladi:
Karta PIN kodini yangilaydi.

– Qachon ishlaydi:

* newPin to‘g‘ri formatda (`4 xonali raqam`)

– Qachon ishlamaydi:

* newPin noto‘g‘ri formatda
* Yangi PIN eski PIN bilan bir xil bo‘lsa (xohlasang bu shartni qo‘shsa bo‘ladi)

---

### 4. block()

– Nima qiladi:
Kartani bloklaydi (`isActive = false`)

– Qachon ishlaydi:

* Har qanday holatda chaqirilsa ishlaydi

– Qachon ishlamaydi:

* Agar karta allaqachon bloklangan bo‘lsa, foydasiz bo‘ladi (lekin xato deb hisoblanmaydi)

---

### 5. activate()

– Nima qiladi:
Bloklangan kartani yana faollashtiradi.

– Qachon ishlaydi:

* isActive == false bo‘lsa

– Qachon ishlamaydi:

* Agar karta allaqachon faol bo‘lsa

---

### 6. canSpend(amount)

– Nima qiladi:
Berilgan miqdorni sarflash mumkinligini tekshiradi.

– Qachon ishlaydi:

* Faqat tekshiruv uchun, hech narsa o‘zgartirmaydi
* Shunchaki true yoki false qaytaradi

– Qachon ishlamaydi:

* Bu metod xato chiqarmaydi, lekin false qaytishi mumkin:

  * Agar balans yetmasa
  * Agar limitdan oshsa
  * Agar karta bloklangan bo‘lsa


----------------------------------------------------------------------------------------------------------------------------------------------------------

## 🏦 BANK sinfidagi metodlar

---

### 1. addCard(card)

– Nima qiladi:
Yangi kartani bank tizimiga qo‘shadi.

– Qachon ishlaydi:

* Agar karta raqami noyob bo‘lsa (optional check)
* Har qanday faol yoki nofaol karta

– Qachon ishlamaydi:

* Agar karta tizimda allaqachon mavjud bo‘lsa (agar tekshiruv qilinayotgan bo‘lsa)

---

### 2. getCardByNumber(number)

– Nima qiladi:
Berilgan raqam bo‘yicha kartani topadi.

– Qachon ishlaydi:

* Agar karta mavjud bo‘lsa

– Qachon ishlamaydi:

* Agar karta raqami bazada bo‘lmasa

---

### 3. transfer(fromCard, toCard, amount)

– Nima qiladi:
Bir bankdagi ikkita karta o‘rtasida pul o‘tkazadi.

– Qachon ishlaydi:

* Ikkala karta faol bo‘lsa
* `fromCard`da yetarli balans bo‘lsa
* Limitdan oshmagan bo‘lsa
* amount > 0

– Qachon ishlamaydi:

* Ikkaladan biri bloklangan bo‘lsa
* fromCard.balance < amount
* Limitdan oshsa

---

### 4. calculateTotalBalance()

– Nima qiladi:
Barcha kartalarning balansini yig‘ib, totalBalance qiymatini yangilaydi.

– Qachon ishlaydi:

* Har doim ishlaydi, faqat hisob-kitob qiladi

– Qachon ishlamaydi:

* Xato chiqarmaydi, lekin kartalar bo‘sh bo‘lsa natija 0 bo‘ladi

---

## 🔁 P2P sinfidagi metodlar

---

### 1. registerBank(bank)

– Nima qiladi:
Yangi bankni P2P tizimiga qo‘shadi.

– Qachon ishlaydi:

* Agar bank tizimda mavjud bo‘lmasa

– Qachon ishlamaydi:

* Bank allaqachon qo‘shilgan bo‘lsa

---

### 2. send(fromCard, toCard, amount)

– Nima qiladi:
Turli banklardagi kartalar o‘rtasida pul o‘tkazadi (P2P operatsiyasi).

– Qachon ishlaydi:

* Ikkala bank supportedBanks ichida bo‘lsa
* Ikkala karta faol bo‘lsa
* fromCard.balance >= amount
* Limit va komissiya hisobga olingan bo‘lsa

– Qachon ishlamaydi:

* Banklardan biri qo‘llab-quvvatlanmasa
* Limitdan oshsa
* Balans yetarli bo‘lmasa
* Kartalardan biri bloklangan bo‘lsa

---

### 3. validateTransaction(fromCard, toCard, amount)

– Nima qiladi:
Tranzaksiya mumkinmi yoki yo‘qligini oldindan tekshiradi. Bu metod hech qanday operatsiya qilmaydi, faqat holatni aniqlaydi.

– Qachon ishlaydi:

* Har doim, faqat tekshiradi

Arslonbek Alimbaev , [8/5/2025 12:40 PM]
– Qachon ishlamaydi:

* Natija false bo‘lishi mumkin yuqoridagi shartlar buzilganda

---

### 4. calculateFee(amount)

– Nima qiladi:
Berilgan miqdor bo‘yicha P2P komissiyasini hisoblaydi.

– Qachon ishlaydi:

* Har doim ishlaydi

– Qachon ishlamaydi:

* Xato bermaydi, lekin noto‘g‘ri miqdor (masalan, manfiy son) kiritilsa, natija ham noto‘g‘ri bo‘lishi mumkin