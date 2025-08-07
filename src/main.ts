class Person {
  constructor(
    public name: string,
    public job: string,
    private cardPin: number
  ) {}

  getPin() {
    return this.cardPin;
  }

  setPin(pin: number) {
    this.cardPin = pin;
  }
}

const person = new Person("Kent", "Developer", 1187);

console.log(person.getPin());
person.setPin(2245);
console.log(person.getPin());
