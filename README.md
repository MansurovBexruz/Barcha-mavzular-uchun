Arslonbek Alimbaev , [8/7/2025 12:36 PM]
Bu yerda sizga bank tizimidan biroz soddaroq, lekin yaxshi strukturali Online Do'kon Boshqaruv Tizimi loyihasini taklif qilaman:Bu loyiha sizning talablaringizga mos keladi:

✅ Loyihaning afzalliklari:
- 5 ta asosiy class (Product, Customer, Order, Shop, Payment)
- Har bir classda 4+ field va 4+ method mavjud
- Bank tizimidan ancha sodda, lekin o'qitish uchun yetarli
- Real hayotga yaqin - online do'kon tizimi
- Yaxshi strukturalashgan va tushunishga oson

🎯 Nimani o'rgatadi:
- OOP asoslari (Class, Object, Field, Method)
- Enum va Interface ishlatish
- Obyektlar o'rtasidagi bog'lanish
- Business logic yozish
- Validation va Error handling

🔧 Qo'shimcha imkoniyatlar:
- Kengaytirish oson (yangi kategoriya, to'lov usuli qo'shish)
- Database bilan bog'lash mumkin
- Web interface qo'shsa bo'ladi

Sizga yana boshqa mavzu kerakmi yoki shu loyihani batafsil kodda ko'rsatishimni xohlaysizmi?


# 🛒 ONLINE DO'KON BOSHQARUV TIZIMI

---

## 🔹 1. PRODUCT CLASS (Mahsulot)

### 🎯 Maqsadi:
Product sinfi — bu do'kondagi har bir mahsulotning raqamli modeli. Har bir mahsulot noyob ID, nom, narx, miqdor va kategoriya ma'lumotlariga ega bo'ladi.

### 📌 Maydonlari (Fields):
- id – noyob mahsulot identifikatori
- name – mahsulot nomi (masalan, "iPhone 15 Pro")
- price – mahsulot narxi (so'mda)
- stock – ombordagi mavjud miqdori
- category – mahsulot kategoriyasi (ELECTRONICS, CLOTHING, BOOKS, va boshqalar)

### ⚙️ Metodlari (Methods):
- updatePrice(newPrice) – mahsulot narxini yangilash
- addStock(quantity) – omborga mahsulot qo'shish
- reduceStock(quantity) – ombordan mahsulot olib tashlash
- isAvailable() – mahsulot mavjudligini tekshirish

---

## 🔹 2. CUSTOMER CLASS (Mijoz)

### 🎯 Maqsadi:
Customer sinfi — do'kon mijozlarini ifodalaydi. Har bir mijozning shaxsiy ma'lumotlari, buyurtmalar tarixi va bonus ballari saqlanadi.

### 📌 Maydonlari (Fields):
- customerId – noyob mijoz identifikatori
- fullName – mijozning to'liq ismi
- email – elektron pochta manzili
- phoneNumber – telefon raqami
- bonusPoints – to'plangan bonus ballari

### ⚙️ Metodlari (Methods):
- addBonusPoints(points) – bonus ball qo'shish
- useBonusPoints(points) – bonus balldan foydalanish
- updateContactInfo(email, phone) – aloqa ma'lumotlarini yangilash
- getTotalOrders() – umumiy buyurtmalar sonini olish

---

## 🔹 3. ORDER CLASS (Buyurtma)

### 🎯 Maqsadi:
Order sinfi — mijozlar tomonidan berilgan buyurtmalarni boshqaradi. Har bir buyurtmada mahsulotlar ro'yxati, umumiy narx va holat ma'lumotlari mavjud.

### 📌 Maydonlari (Fields):
- orderId – noyob buyurtma identifikatori
- customerId – buyurtma beruvchi mijoz ID
- orderItems – buyurtmadagi mahsulotlar ro'yxati
- totalAmount – umumiy to'lov miqdori
- orderStatus – buyurtma holati (PENDING, PROCESSING, SHIPPED, DELIVERED)

### ⚙️ Metodlari (Methods):
- addItem(product, quantity) – buyurtmaga mahsulot qo'shish
- removeItem(productId) – buyurtmadan mahsulot olib tashlash
- calculateTotal() – umumiy summani hisoblash
- updateStatus(newStatus) – buyurtma holatini yangilash

---

## 🔹 4. SHOP CLASS (Do'kon)

### 🎯 Maqsadi:
Shop sinfi — butun do'konni boshqaradi. U mahsulotlar katalogi, mijozlar bazasi va buyurtmalarni nazorat qiladi.

### 📌 Maydonlari (Fields):
- shopName – do'kon nomi
- products – barcha mahsulotlar ro'yxati
- customers – ro'yxatdan o'tgan mijozlar
- orders – barcha buyurtmalar tarixi

### ⚙️ Metodlari (Methods):
- addProduct(product) – katalogga yangi mahsulot qo'shish
- registerCustomer(customer) – yangi mijozni ro'yxatdan o'tkazish
- processOrder(order) – buyurtmani qayta ishlash
- searchProducts(keyword) – mahsulotlarni qidiruv bo'yicha topish

---

## 🔹 5. PAYMENT CLASS (To'lov)

### 🎯 Maqsadi:
Payment sinfi — buyurtmalar uchun to'lovlarni qayta ishlaydi. Turli to'lov usullari va tranzaksiya holatlarini boshqaradi.

Arslonbek Alimbaev , [8/7/2025 12:36 PM]
### 📌 Maydonlari (Fields):
- paymentId – noyob to'lov identifikatori
- orderId – qaysi buyurtma uchun to'lov
- paymentMethod – to'lov usuli (CARD, CASH, BANK_TRANSFER)
- amount – to'lov miqdori
- paymentStatus – to'lov holati (PENDING, COMPLETED, FAILED)

### ⚙️ Metodlari (Methods):
- processPayment() – to'lovni amalga oshirish
- refundPayment() – to'lovni qaytarish
- validatePayment() – to'lov ma'lumotlarini tekshirish
- generateReceipt() – kvitansiya yaratish

---

## 🔹 6. ENUM TURLAR

### 📘 ProductCategory:
Mahsulot kategoriyasini bildiradi:
- ELECTRONICS – elektronika
- CLOTHING – kiyim-kechak
- BOOKS – kitoblar
- FOOD – oziq-ovqat
- HOME – uy-ro'zg'or buyumlari

### 📘 OrderStatus:
Buyurtma holatini bildiradi:
- PENDING – kutilmoqda
- PROCESSING – qayta ishlanmoqda
- SHIPPED – yuborilgan
- DELIVERED – yetkazilgan
- CANCELLED – bekor qilingan

### 📘 PaymentMethod:
To'lov usulini bildiradi:
- CARD – plastik karta
- CASH – naqd pul
- BANK_TRANSFER – bank o'tkazmasi
- DIGITAL_WALLET – raqamli hamyon

### 📘 PaymentStatus:
To'lov holatini bildiradi:
- PENDING – kutilmoqda
- COMPLETED – yakunlangan
- FAILED – muvaffaqiyatsiz
- REFUNDED – qaytarilgan

---

## 🔹 7. INTERFACE LAR

### 📘 OrderItem:
Buyurtmadagi bitta mahsulot ma'lumoti:
- productId – mahsulot ID
- quantity – miqdor
- unitPrice – birlik narxi
- totalPrice – umumiy narx

### 📘 SearchResult:
Qidiruv natijalari:
- products – topilgan mahsulotlar ro'yxati
- totalCount – umumiy natijalar soni
- searchTime – qidiruv vaqti

### 📘 ValidationResult:
Tekshiruv natijasi:
- isValid – to'g'ri yoki noto'g'ri
- errorMessage – xato xabari (agar bo'lsa)

---

## 🔗 8. OBYEKTLAR O'RTASIDAGI ALOQA

- Shop ↔ Product: Do'konda ko'plab mahsulotlar bo'ladi
- Shop ↔ Customer: Do'konda ko'plab mijozlar ro'yxatdan o'tadi
- Customer ↔ Order: Bir mijoz ko'plab buyurtma bera oladi
- Order ↔ Product: Bir buyurtmada ko'plab mahsulot bo'lishi mumkin
- Order ↔ Payment: Har bir buyurtma uchun to'lov amalga oshiriladi

---

## 💼 METODLARNING ISHLASH TARTIBI

### 🛍️ PRODUCT metodlari:

1. updatePrice(newPrice)
- ✅ Ishlaydi: newPrice > 0
- ❌ Ishlamaydi: newPrice <= 0

2. addStock(quantity)
- ✅ Ishlaydi: quantity > 0
- ❌ Ishlamaydi: quantity <= 0

3. reduceStock(quantity)
- ✅ Ishlaydi: quantity > 0 va stock >= quantity
- ❌ Ishlamaydi: quantity > stock

4. isAvailable()
- ✅ Har doim ishlaydi: stock > 0 bo'lsa true, aks holda false

---

### 👤 CUSTOMER metodlari:

1. addBonusPoints(points)
- ✅ Ishlaydi: points > 0
- ❌ Ishlamaydi: points <= 0

2. useBonusPoints(points)
- ✅ Ishlaydi: points > 0 va bonusPoints >= points
- ❌ Ishlamaydi: points > bonusPoints

3. updateContactInfo(email, phone)
- ✅ Ishlaydi: email va phone to'g'ri formatda
- ❌ Ishlamaydi: noto'g'ri format

4. getTotalOrders()
- ✅ Har doim ishlaydi: buyurtmalar sonini qaytaradi

---

### 📋 ORDER metodlari:

1. addItem(product, quantity)
- ✅ Ishlaydi: product mavjud va quantity <= product.stock
- ❌ Ishlamaydi: mahsulot mavjud emas yoki stock yetmaydi

2. removeItem(productId)
- ✅ Ishlaydi: productId buyurtmada mavjud
- ❌ Ishlamaydi: productId topilmaydi

3. calculateTotal()
- ✅ Har doim ishlaydi: barcha itemlarning umumiy narxini hisoblaydi

4. updateStatus(newStatus)
- ✅ Ishlaydi: newStatus to'g'ri OrderStatus qiymatida
- ❌ Ishlamaydi: noto'g'ri status

---

### 🏪 SHOP metodlari:

1. addProduct(product)
- ✅ Ishlaydi: product.id noyob
- ❌ Ishlamaydi: product.id allaqachon mavjud

2. registerCustomer(customer)
- ✅ Ishlaydi: customer.email noyob
- ❌ Ishlamaydi: email allaqachon ro'yxatdan o'tgan

3. processOrder(order)
- ✅ Ishlaydi: order to'liq va barcha mahsulotlar mavjud
- ❌ Ishlamaydi: mahsulotlar yetarli emas

4. searchProducts(keyword)
- ✅ Har doim ishlaydi: keyword bo'yicha qidiruv natijasini qaytaradi

---

### 💳 PAYMENT metodlari:

Arslonbek Alimbaev , [8/7/2025 12:36 PM]
1. processPayment()
- ✅ Ishlaydi: to'lov ma'lumotlari to'g'ri va amount > 0
- ❌ Ishlamaydi: noto'g'ri ma'lumotlar

2. refundPayment()
- ✅ Ishlaydi: paymentStatus == COMPLETED
- ❌ Ishlamaydi: to'lov hali amalga oshirilmagan

3. validatePayment()
- ✅ Har doim ishlaydi: faqat tekshiradi

4. generateReceipt()
- ✅ Ishlaydi: paymentStatus == COMPLETED
- ❌ Ishlamaydi: to'lov yakunlanmagan