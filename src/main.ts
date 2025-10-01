class Box {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  jump() {
    console.log(`${this.name} is jumping`);
  }
}
// class Box1 extends Box {
//   job: string;
//   constructor(name: string, age: number, job: string) {
//     super(name, age);
//     this.job = job;
//   }

//   run() {
//     console.log(`${this.name} is running`);
//   }
// }
// class Box2 extends Box {
//   phone: string;

//   constructor(name: string, age: number, phone: string) {
//     super(name, age);
//     this.phone = phone;
//   }

//   write() {
//     console.log(`${this.name} is writing`);
//   }
// }
