## 6 TA SODDALASHTIRILGAN CLASS VORISLIK CHALLENGE LARI

### 1. TRANSPORT TIZIMI CHALLENGE

Vazifa: Transport vositalarini boshqarish tizimi yarating.

Talablar:
- Vehicle bazaviy class (brand, model, year, fuelType)
- Car class Vehicle dan voris (doors, transmission)
- Motorcycle class Vehicle dan voris (engineSize, hasWindshield)
- Truck class Vehicle dan voris (cargoCapacity, axles)

Metodlar:
- Vehicle: startEngine(), stopEngine(), getFuelConsumption()
- Car: openTrunk(), lockDoors(), activateAircon()
- Motorcycle: wheelie(), startKickstand(), checkHelmet()
- Truck: loadCargo(weight), unloadCargo(), checkWeightLimit()

Vorislik qoidalari:
- Car, Motorcycle, Truck lar Vehicle dan extends qiladi
- Super() ishlatib parent constructor ni chaqiring
- Parent metodlarini override qiling (masalan getFuelConsumption har xil hisoblash)

Console test natijasi:

🚗 TRANSPORT TIZIMI TESTI:

Mashina yaratildi: Toyota Camry 2023
Dvigatel ishga tushdi: Toyota Camry
Yoqilg'i sarfi: 8.5 L/100km (4 eshikli sedan uchun)
Bagaj ochildi: Toyota Camry
Havo konditsioner yoqildi

Mototsikl yaratildi: Honda CBR 2022
Dvigatel ishga tushdi: Honda CBR
Yoqilg'i sarfi: 4.2 L/100km (600cc engine uchun)
Wheelie bajarildi! Honda CBR
Kickstand joylashtirildi

Yuk mashinasi yaratildi: Volvo FH16 2021
Dvigatel ishga tushdi: Volvo FH16
Yoqilg'i sarfi: 35.0 L/100km (bo'sh yuk mashinasi)
5000 kg yuk yuklandi. Jami og'irlik: 5000 kg
Og'irlik limiti: OK (15000 kg gacha)


---

### 2. UNIVERSITY MANAGEMENT CHALLENGE

Vazifa: Universitet boshqaruv tizimi yarating.

Talablar:
- Person bazaviy class (firstName, lastName, age, email)
- Student class Person dan voris (studentId, major, gpa)
- Professor class Person dan voris (department, salary, courses)
- Staff class Person dan voris (position, workShift, hourlyRate)

Metodlar:
- Person: getFullName(), updateEmail(), getAge()
- Student: enrollCourse(course), calculateGPA(), graduationCheck()
- Professor: assignGrade(student, grade), teachCourse(course), researchProject()
- Staff: clockIn(), clockOut(), calculatePay()

Bog'lanishlar:
- Professor Student ga grade beradi
- Student course enrollment qiladi
- Staff ish vaqtini hisoblab beradi

Console test natijasi:

🎓 UNIVERSITET TIZIMI TESTI:

Talaba yaratildi: Ali Karimov (ID: ST001)
Kurs qo'shildi: Matematika
Kurs qo'shildi: Fizika
Joriy GPA: 3.75
Bitiruv holati: Davom etmoqda (3.5+ GPA kerak)

Professor yaratildi: Dr. Sarah Johnson (Kompyuter fanlari)
Ali ga Matematika fanidan 4.0 baho berildi
Kurs o'qitilmoqda: Algoritmlar va ma'lumotlar tuzilishi
Tadqiqot loyihasi: AI in Education

Xodim yaratildi: Mike Wilson (Xavfsizlik)
Ish boshlandi: 08:00
Ish tugadi: 17:00
Ish vaqti: 9 soat
Maosh: $180.00 (20$/soat)


---

### 3. BANK ACCOUNT HIERARCHY CHALLENGE

Vazifa: Bank hisob turlari uchun vorislik tizimi.

Talablar:
- Account bazaviy class (accountNumber, balance, ownerName)
- SavingsAccount class Account dan voris (interestRate, minimumBalance)
- CheckingAccount class Account dan voris (overdraftLimit, monthlyFee)
- BusinessAccount class Account dan voris (transactionLimit, businessType)

Metodlar:
- Account: deposit(amount), withdraw(amount), getBalance()
- SavingsAccount: calculateInterest(), penaltyForMinBalance()
- CheckingAccount: overdraftProtection(), chargeFee()
- BusinessAccount: bulkTransfer(), generateReport()

Override qoidalari:
- withdraw() metodi har bir account type da har xil ishlaydi
- SavingsAccount da minimum balance tekshiradi
- CheckingAccount da overdraft limit tekshiradi
- BusinessAccount da transaction limit tekshiradi

Console test natijasi:
`
💰 BANK HISOB TIZIMI TESTI:

Jamg'arma hisobi yaratildi: ACC-SAV-001 (John Doe)
1000$ depozit qilindi. Balans: $1000.00
Foiz hisobi: $25.00 (2.5% yillik)
500$ yechish. Balans: $500.00
Minimum balans jarimasi: $10.00 (1000$ dan kam)