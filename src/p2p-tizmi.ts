class User {
  name: string;
  phone: string;
  balance: number;

  constructor(name: string, phone: string, balance: number) {
    this.name = name;
    this.phone = phone;
    this.balance = balance;
  }

  getInfo() {
    return `Name: ${this.name}, Phone: ${this.phone}, Balance: ${this.balance}`;
  }

  addMoney(amount: number) {
    this.balance += amount;
    return this.balance;
  }
}

type Status = "PENDING" | "COMPLETED" | "FAILED";

class Payment {
  from: User;
  to: User;
  amount: number;
  status: Status;

  constructor(from: User, to: User, amount: number) {
    this.from = from;
    this.to = to;
    this.amount = amount;
    this.status = "PENDING";
  }

  send() {
    if (this.from.balance >= this.amount) {
      this.from.addMoney(-this.amount);
      this.to.addMoney(this.amount);
      this.status = "COMPLETED";
      return true;
    } else {
      this.status = "FAILED";
      return false;
    }
  }

  getDetails() {
    return `From: ${this.from.name}, To: ${this.to.name}, Amount: ${this.amount}, Status: ${this.status}, From Balance: ${this.from.balance}, To Balance: ${this.to.balance}`;
  }
}
class Bank {
  name: string;
  users: User[] = [];
  payments: Payment[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addUsers(...users: User[]) {
    this.users.push(...users);
  }

  processPayment(payment: Payment) {
    const isSended = payment.send();
    this.payments.push(payment);

    return isSended ? "Successfully payment" : "Failed payment";
  }
}

const user1 = new User("Alice", "1234567890", 1000);
const user2 = new User("Bob", "0987654321", 500);   

const bank = new Bank("MyBank");
bank.addUsers(user1, user2);
const payment1 = new Payment(user1, user2, 200);
const payment2 = new Payment(user2, user1, 600);

console.log(bank.processPayment(payment1));
console.log(bank.processPayment(payment2));
console.log(payment1.getDetails());
console.log(payment2.getDetails());
console.log(user1.getInfo());
console.log(user2.getInfo());

