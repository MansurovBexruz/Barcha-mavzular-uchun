// ### 🎯 Maqsadi:
// Customer sinfi — do'kon mijozlarini ifodalaydi. Har bir mijozning shaxsiy ma'lumotlari, buyurtmalar tarixi va bonus ballari saqlanadi.

// ### 📌 Maydonlari (Fields):
// - customerId – noyob mijoz identifikatori
// - fullName – mijozning to'liq ismi
// - email – elektron pochta manzili
// - phoneNumber – telefon raqami
// - bonusPoints – to'plangan bonus ballari

// ### ⚙️ Metodlari (Methods):
// - addBonusPoints(points) – bonus ball qo'shish
// - useBonusPoints(points) – bonus balldan foydalanish
// - updateContactInfo(email, phone) – aloqa ma'lumotlarini yangilash
// - getTotalOrders() – umumiy buyurtmalar sonini olish

// ---

export interface CustomerFields {
  customerId: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  bonusPoints: number;
}
export interface CustomerMethods {
  addBonusPoints(points: number): void;
  useBonusPoints(points: number): void;
  updateContactInfo(email: string, phone: string): void;
  getTotalOrders(): number;
}

export interface Customer extends CustomerFields, CustomerMethods {}

export class Customer implements Customer {
  constructor(
    public id: number,
    public fullName: string,
    public email: string,
    public phoneNumber: string,
    public bonusPoints: number = 0
  ) {}

  addBonusPoints(points: number): void {
    this.bonusPoints += points;
  }
  useBonusPoints(points: number): void {
    if (points > this.bonusPoints) {
      console.log("Yetarli bonus ball yo'q");
    }

    this.bonusPoints -= points;
  }

  updateContactInfo(email: string, phone: string): void {
    this.email = email;
    this.phoneNumber = phone;
  }
}

// const customer = new Customer(
//   1,
//   "Ali Valiyev",
//   "ali.valiyev@example.com",
//   "+998901234567"
// );
// console.log("----------Add Bonus Points function test----------------");
// console.log("Hozirgi bonus ball:", customer.bonusPoints);
// customer.addBonusPoints(100);
// console.log("Qoshilgandan keyingi bonus ball:", customer.bonusPoints);
// console.log("----------Use Bonus Points function test----------------");
// console.log("Hozirgi bonus ball:", customer.bonusPoints);
// customer.useBonusPoints(50);
// console.log("Ayrilgandan keyingi bonus ball:", customer.bonusPoints);
// console.log("----------Update Contact Info function test----------------");
// console.log(
//   "Hozirgi aloqa ma'lumotlari:",
//   customer.email,
//   customer.phoneNumber
// );
// customer.updateContactInfo("ali.valiyev@yangimail.com", "+998901234568");
// console.log(
//   "Yangilangan aloqa ma'lumotlari:",
//   customer.email,
//   customer.phoneNumber
// );
