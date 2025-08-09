
export interface ProductFields {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface ProductMethods {
  updatePrice(newPrice: number): void;
  addStock(quantity: number): void;
  reduceStock(quantity: number): void;
  isAvailable(): boolean;
}

export interface ProductType extends ProductFields, ProductMethods {}

export class Product implements ProductType {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public stock: number,
    public category: string
  ) {}
  updatePrice(newPrice: number): void {
    this.price = newPrice;
    console.log(`${this.price}ning narxi yangilandi`);
  }
  addStock(quantity: number): void {
    this.stock += quantity;
    console.log(`${quantity} dona mahsulot qo'shildi. Jami: ${this.stock}`);
  }
  reduceStock(quantity: number): void {
    this.stock -= quantity;
    console.log(
      `${quantity} dona mahsulot olib tashlandi. Jami: ${this.stock}`
    );
  }
  isAvailable(): boolean {
    return this.stock > 0;
  }
}

// const product = new Product(5, "Olma", 20000, 50, "Fruists");
// console.log('---------------------------------------------------------Product Creation Test---------------------------------------------------------');

// console.log(
//   "-----------------------UpdatePrice function test:-----------------------"
// );
// console.log(product.price);
// product.updatePrice(25000);
// console.log(product.price);
// console.log(
//   "-----------------------AddStock function test:-----------------------"
// );
// console.log(product.stock);
// product.addStock(20);
// console.log(product.stock);
// console.log(
//   "-----------------------ReduceStock function test:-----------------------"
// );
// console.log(product.stock);
// product.reduceStock(10);
// console.log(product.stock);
// console.log(
//   "-----------------------IsAvailable function test:-----------------------"
// );
// console.log(product.isAvailable() ? "Mahsulot mavjud" : "Mahsulot mavjud emas");

// const product2 = new Product(5, "Olma", 20000, 50, "Fruists");
// console.log("----------Product2----------------");
// console.log(
//   "-----------------------UpdatePrice function test:-----------------------"
// );
// console.log(product2.price);
// product2.updatePrice(25000);
// console.log(product2.price);
// console.log(
//   "-----------------------AddStock function test:-----------------------"
// );
// console.log(product2.stock);
// product2.addStock(20);
// console.log(product2.stock);
// console.log(
//   "-----------------------ReduceStock function test:-----------------------"
// );
// console.log(product2.stock);
// product2.reduceStock(10);
// console.log(product2.stock);
// console.log(
//   "-----------------------IsAvailable function test:-----------------------"
// );
// console.log(
//   product2.isAvailable() ? "Mahsulot mavjud" : "Mahsulot mavjud emas"
// );
