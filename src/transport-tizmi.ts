class Vehicle {
  brand: string;
  model: string;
  year: number;
  fuelType: string;
  constructor(brand: string, model: string, year: number, fuelType: string) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.fuelType = fuelType;
  }
  startEngine(): string {
    return `Dvigatel ishga tushdi: ${this.brand} ${this.model}`;
  }
  stopEngine(): string {
    return `Dvigatel o'chirildi: ${this.brand} ${this.model}`;
  }
  getFuelConsumption(): string {
    return `Yoqilg'i sarfi: 8.5 L/100km (${this.fuelType} uchun)`;
  }
}
class Car extends Vehicle {
  doors: number;
  transmission: string;
  constructor(
    brand: string,
    model: string,
    year: number,
    fuelType: string,
    doors: number,
    transmission: string
  ) {
    super(brand, model, year, fuelType);
    this.doors = doors;
    this.transmission = transmission;
  }
  getFuelConsumption(): string {
    return `Yoqilg'i sarfi: 8.5 L/100km (${this.doors} eshikli sedan uchun)`;
  }
  openTrunk(): string {
    return `Bagaj ochildi: ${this.brand} ${this.model}`;
  }
  lockDoors(): string {
    return `Eshiklar qulflandi: ${this.brand} ${this.model}`;
  }
  activateAircon(): string {
    return `Havo konditsioner yoqildi: ${this.brand} ${this.model}`;
  }
}
class Motorcycle extends Vehicle {
  engineSize: number;
  hasWindshield: boolean;
  constructor(
    brand: string,
    model: string,

    year: number,
    fuelType: string,
    engineSize: number,
    hasWindshield: boolean
  ) {
    super(brand, model, year, fuelType);
    this.engineSize = engineSize;
    this.hasWindshield = hasWindshield;
  }
  getFuelConsumption(): string {
    return `Yoqilg'i sarfi: 5.0 L/100km (${this.engineSize}cc mototsikl uchun)`;
  }
  popWheelie(): string {
    return `Old g'ildirak ko'tarildi: ${this.brand} ${this.model}`;
  }
}
class Truck extends Vehicle {
  cargoCapacity: number;
  axles: number;

  constructor(
    brand: string,
    model: string,
    year: number,
    fuelType: string,
    cargoCapacity: number,
    axles: number
  ) {
    super(brand, model, year, fuelType);
    this.cargoCapacity = cargoCapacity;
    this.axles = axles;
  }
  getFuelConsumption(): string {
    return `Yoqilg'i sarfi: 12.0 L/100km (${this.cargoCapacity}kg yuk ko'taruvchi yuk mashinasi uchun)`;
  }
  loadCargo(weight: number): string {
    if (weight > this.cargoCapacity) {
      return `Yuk ortiqcha: ${weight - this.cargoCapacity}kg`;
    }
    return `Yuk yuklandi: ${weight}kg`;
  }
}

// Console test natijasi
const car = new Car("Toyota", "Camry", 2023, "benzin", 4, "avtomat");
console.log(car.startEngine());
console.log(car.getFuelConsumption());
console.log(car.openTrunk());
console.log(car.activateAircon());
console.log(car.lockDoors());

const truck = new Truck("Volvo", "FH", 2021, "dizel", 20000, 3);
console.log(truck.startEngine());
console.log(truck.getFuelConsumption());
console.log(truck.loadCargo(15000));
console.log(truck.loadCargo(25000));

const motorcycle = new Motorcycle("Honda", "CBR", 2022, "benzin", 600, true);
console.log(motorcycle.startEngine());
console.log(motorcycle.getFuelConsumption());
console.log(motorcycle.popWheelie());
console.log(motorcycle.hasWindshield ? "Shisha mavjud" : "Shisha yo'q");
const vehicle = new Vehicle("Generic", "Model", 2020, "benzin");
console.log(vehicle.startEngine());
console.log(vehicle.getFuelConsumption());
console.log(vehicle.stopEngine());
console.log(vehicle.stopEngine());
console.log(vehicle.getFuelConsumption());
