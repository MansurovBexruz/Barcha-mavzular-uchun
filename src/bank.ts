class Bank {
  name: string;
  bankCode: string;
  totalBalance: number;
  cards: string[];
  transactionFee: number;

  constructor(name: string, bankCode: string, transactionFee: number) {
    this.name = name;
    this.bankCode = bankCode;
    this.totalBalance = 0;
    this.cards = [];
    this.transactionFee = transactionFee;
  }

  addCard(card: string) {
    this.cards.push(card);
    return `Karta ${card} bankga qo'shildi.`;
  }

  getCardByNumber(number: string) {
    return this.cards.find((card) => card === number);
  }
  transfer(fromCard: number, toCard: number, amount: number) {
    fromCard -= amount;
    toCard += amount;
  }  
}
