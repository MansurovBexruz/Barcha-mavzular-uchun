/**
 * Bank sinfi — butun bankni ifodalaydi. U bir nechta kartalarni boshqaradi, ularning balansini nazorat qiladi, o‘ziga xos komissiyalarni qo‘llaydi va umumiy moliyaviy holatini yuritadi.

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

 */

import { Card, type CARD } from './card';

class Bank {
  constructor(
    public name: string,
    private bankCode: string,
    private totalBalance: number,
    public transactionFee: number,
    private cards: string[]
  ) {}

  addCard(card: CARD) {
    if (!this.cards.includes(card.number)) {
      this.cards.push(card.number);
      return `Karta ${card.number} bankga qo'shildi.`;
    } else {
      console.log(`Karta ${card.number} allaqachon mavjud.`);
    }
  }

  getCardByNumber(number: string) {
    return this.cards.find(card => card === number);
  }

}

const myCard = new Card(
  "1234 5678 9012 3456",
  "12/25",
  "John Doe",
  "123",
  1000,
  "0000",
  true,
  "VISA",
  500,
  0,
  []
);

const myCard2 = new Card(
  "2345 6789 0123 4567",
  "12/26",
  "Jane Doe",
  "456",
  2000,
  "1111",
  true,
  "MASTERCARD",
  1000,
  0,
  []
);

const myBank = new Bank("My Bank", "HB001", 0, 0.5, []);

myBank.addCard(myCard);
myBank.addCard(myCard2);
