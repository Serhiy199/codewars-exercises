// avtoperevirka (Контекст виконання функції Ключове слово this)=============================================================================================

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this
// в місцях звернення до властивостей і методів об'єкта.

// const pizzaPalace = {
//     pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         if (!isPizzaAvailable) {
//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }

//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
// };

// console.log(pizzaPalace.order('Smoked')); // повертає рядок "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order('Four meats')); // повертає рядок "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order('Big Mike')); // повертає рядок "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order('Viennese')); // повертає рядок "Sorry, there is no pizza named «Viennese»"

// avtoperevirka (Класи Статичні властивості)=============================================================================================

// Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice
// зі значенням число 50000 - максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice, що передається.
// Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів,
// щоб показати, як будуть використовуватися геттери і сеттери price.

// class Car {
//     #price;
//     static maxPrice = 50000;

//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice <= Car.maxPrice) {
//             this.#price = newPrice;
//         }
//     }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// avtoperevirka (Класи Статичні методи)=============================================================================================

// Додай класу Car публічний статичний метод checkPrice(price),
// що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".

// class Car {
//     static #maxPrice = 50000;

//     static checkPrice(price) {
//         if (price > Car.#maxPrice) {
//             return 'Error! Price exceeds the maximum';
//         } else {
//             return 'Success! Price is within acceptable limits';
//         }
//     }
//     constructor({ price }) {
//         this.price = price;
//     }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// avtoperevirka (Класи Конструктор дочірнього класу)=============================================================================================

// Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і access.
// Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора.

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     access;
//     static role = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',
//     };
//     constructor({ email, access }) {
//         super(email);
//         this.access = Admin.role.SUPERUSER;
//     }
// }

// const mango = new Admin({
//     email: 'mango@mail.com',
//     access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// avtoperevirka (Класи Методи дочірнього класу)=============================================================================================

// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів.
// Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список.
// Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.
// Метод повинен перевіряти наявність значення параметра email в масиві, що
// зберігається у властивості blacklistedEmails, і повертати true або false.

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// class Admin extends User {
//     blacklistedEmails = [];
//     static role = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',
//     };

//     constructor({ email, access }) {
//         super(email);
//         this.access = access;
//     }

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//         // if (this.blacklistedEmails.includes(email)) {
//         //     console.log(true);
//         // } else {
//         //     console.log(false);
//         // }
//         // інший метод-------------------->
//         return this.blacklistedEmails.includes(email);
//     }
// }

// const mango = new Admin({
//     email: 'mango@mail.com',
//     access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
