class P2P {
  supportedBanks: string[];
  dailyTransactionLimit: number;
  serviceFee: number;

  constructor(
    supportedBanks: string[],
    dailyTransactionLimit: number,
    serviceFee: number
  ) {
    this.supportedBanks = supportedBanks;
    this.dailyTransactionLimit = dailyTransactionLimit;
    this.serviceFee = serviceFee;
  }

  registerBank(bank: string) {
    if (!this.supportedBanks.includes(bank)) {
      this.supportedBanks.push(bank);
      return `Bank ${bank} qo'shildi.`;
    }

    console.log(`Bank ${bank} allaqachon mavjud.`);
  }

  send(fromCard: string, toCard: string, amount: number) {
    const from = this.supportedBanks.includes(fromCard);
    const to = this.supportedBanks.includes(toCard);

    if (from.balance <= amount) {
      return `Xato: ${fromCard} kartasida yetarli mablag' yo'q.`;
    }
  }
}
