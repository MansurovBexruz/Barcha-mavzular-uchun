type CardType = "VISA" | "MASTERCARD" | "HUMO" | "UZCARD";

export interface CardFields {
  number: string;
  expiryDate: string;
  holderName: string;
  cvv: string;
  balance: number;
  pin: string;
  isActive: boolean;
  cardType: CardType;
  dailyLimit: number;
  monthlySpent: number;
  transactionHistory: string[];
}

export interface CardMethods {
  deposit(amount: number): number;
  withdraw(amount: number): number;
  changePin(newPin: string): void;
  block(): void;
  activate(): void;
  getHistory(): string[];
}

export interface CARD extends CardFields, CardMethods {}

export class Card implements CARD {
  constructor(
    public number: string,
    public expiryDate: string,
    public holderName: string,
    public cvv: string,
    public balance: number,
    public pin: string,
    public isActive: boolean,
    public cardType: CardType,
    public dailyLimit: number,
    public monthlySpent: number,
    public transactionHistory: string[]
  ) {}

  deposit(amount: number): number {
    if (amount > 0 && this.isActive) {
      this.balance += amount;
      this.transactionHistory.push(`Deposited: ${amount}`);
    }

    return this.balance;
  }
  withdraw(amount: number): number {
    if (
      amount > 0 &&
      this.isActive &&
      amount <= this.dailyLimit &&
      amount <= this.balance
    ) {
      this.balance -= amount;
      this.transactionHistory.push(`Withdrew: ${amount}`);
    }
    return this.balance;
  }
  changePin(newPin: string): void {
    if (newPin.length === 4) {
      this.pin = newPin;
      this.transactionHistory.push(`PIN changed to: ${newPin}`);
    }
    console.log("PIN changed");
  }
  block(): void {
    if (!this.isActive) console.log("Card is already blocked");
    else {
      this.isActive = false;
      this.transactionHistory.push(`Card blocked`);
      console.log("Card blocked");
    }
  }
  activate(): void {
    if (!this.isActive) {
      this.isActive = true;
      this.transactionHistory.push(`Card activated`);
      console.log("Card activated");
    } else console.log("Card is already activided");
  }
  getHistory() {
    return this.transactionHistory;
  }
}

/* Test */
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

