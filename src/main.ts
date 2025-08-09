import { Product } from "./product";
import { Customer } from "./customer";

// ### 📌 Maydonlari (Fields):
// - orderId – noyob buyurtma identifikatori
// - customerId – buyurtma beruvchi mijoz ID
// - orderItems – buyurtmadagi mahsulotlar ro'yxati
// - totalAmount – umumiy to'lov miqdori
// - orderStatus – buyurtma holati (PENDING, PROCESSING, SHIPPED, DELIVERED)

// ### ⚙️ Metodlari (Methods):
// - addItem(product, quantity) – buyurtmaga mahsulot qo'shish
// - removeItem(productId) – buyurtmadan mahsulot olib tashlash
// - calculateTotal() – umumiy summani hisoblash
// - updateStatus(newStatus) – buyurtma holatini yangilash

// ---

const product = new Product(5, "Olma", 20000, 50, "Fruists");
const product2 = new Product(8, "Nok", 25000, 20, "Fruists");

const customer = new Customer(
  1,
  "Ali Valiyev",
  "ali.valiyev@example.com",
  "+998901234567"
);

interface OrderFields {
  orderId: number;
  customerId: number;
  orderItems: { productId: number; quantity: number }[];
  totalAmount: number;
  orderStatus: string;
}

interface OrderMethods {
  addItem(product: { id: number }, quantity: number): void;
  removeItem(productId: number): void;
  calculateTotal(): void;
  updateStatus(newStatus: string): void;
}

interface Order extends OrderFields, OrderMethods {}

class Order implements Order {
  constructor(
    public orderId: number,
    public customerId: number,
    public orderItems: { productId: number; quantity: number }[] = [],
    public totalAmount: number = 0,
    public orderStatus: string = "PENDING"
  ) {}

  addItem(product: { id: number }, quantity: number): void {
    this.orderItems.push({ productId: product.id, quantity });
    console.log(
      `Buyurtmaga (${quantity} dona) qo'shildi. Jami: ${this.totalAmount}`
    );
  }
  removeItem(productId: number): void {
    const index = this.orderItems.findIndex(
      (item) => item.productId === productId
    );
    if (index !== -1) {
      const removedItem = this.orderItems.splice(index, 1)[0];
      this.calculateTotal();
      console.log(
        `Buyurtmadan ${removedItem.quantity} dona mahsulot olib tashlandi. Jami: ${this.totalAmount}`
      );
    } else {
      console.log("Mahsulot buyurtmada topilmadi");
    }
  }
  calculateTotal(): void {
    this.totalAmount = this.orderItems.reduce(
      (total, item) => total + item.quantity * product.price,
      0
    );
    console.log(`Umumiy summa: ${this.totalAmount}`);
  }
  updateStatus(newStatus: string): void {
    this.orderStatus = newStatus;
    console.log(`Buyurtma holati yangilandi: ${this.orderStatus}`);
  }
}

const order = new Order(
  1,
  customer.id,
  [
    { productId: product.id, quantity: product.stock },
    { productId: product2.id, quantity: product2.stock },
  ],
  0,
  "PENDING"
);

console.log(
  "-----------------------Order Creation Test-----------------------"
);
console.log("Buyurtma ID:", order.orderId);
console.log("Mijoz ID:", order.customerId);
console.log("Buyurtma mahsulotlari:", order.orderItems);
console.log("Umumiy summa:", order.totalAmount);
console.log("Buyurtma holati:", order.orderStatus);
