class Card {
  number: string;
  expiryDate: string;
  holderName: string;
  cvv: string;
  balance: number;
  pin: string;
  isActive: boolean;
  cardType: string;
  dailyLimit: number;
  monthlySpent: number;
  transactionHistory: string[];

  constructor(
    number: string,
    expiryDate: string,
    holderName: string,
    cvv: string,
    balance: number,
    pin: string,
    isActive: boolean,
    cardType: string,
    dailyLimit: number,
    monthlySpent: number,
    transactionHistory: string[]
  ) {
    this.number = number;
    this.expiryDate = expiryDate;
    this.holderName = holderName;
    this.cvv = cvv;
    this.balance = balance;
    this.pin = pin;
    this.isActive = isActive;
    this.cardType = cardType;
    this.dailyLimit = dailyLimit;
    this.monthlySpent = monthlySpent;
    this.transactionHistory = transactionHistory;
  }

  deposit(amount: number) {
    if (amount > 0 && this.isActive) {
      this.balance += amount;
      this.transactionHistory.push(`Deposited: ${amount}`);
    }
    return this.balance;
  }
  withdraw(amount: number) {
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
  changePin(newPin: string) {
    if (newPin.length === 4) {
      this.pin = newPin;
      this.transactionHistory.push(`PIN changed`);
    }
  }
  block() {
    if (!this.isActive) console.log("Card is already blocked.");

    this.isActive = false;
    this.transactionHistory.push(`Card blocked`);
  }
  activate() {
    if (!this.isActive) {
      this.isActive = true;
      this.transactionHistory.push(`Card activated`);
    }

    console.log("Card is already active.");
  }
}
