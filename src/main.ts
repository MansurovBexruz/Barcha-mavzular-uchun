
interface StudentMethod {
  run(): void;
  jump(): void;
}

interface StudentFileds {
  name: string;
  age: number;
  job: string;
}

interface Student extends StudentFileds, StudentMethod {}

class Person implements Student {
  constructor(public name: string, public age: number, public job: string) {}

  run(): void {
    console.log(`${this.name} is running...`);  
  }
  jump(): void {
    console.log(`${this.name} is jumping...`);  
  }
}

const person = new Person('Kent', 15, 'Developer');

person.run()
person.jump()
