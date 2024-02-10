// avtoperevirka=============================================================================================

// function calculateTotal(number) {
//   let total = 0;
//   let totalNamber = 0;
//   while (total < number) {
//     total += 1;
//     totalNamber += total;

//     console.log(totalNamber);
//   }
//   return totalNamber;
// }
// calculateTotal(24);

// avtoperevirka=============================================================================================

// function calculateTotal(number) {
//   let totalNamber = 0;
//   for (let i = 0; i <= number; i += 1) {
//     totalNamber += i;
//     console.log(totalNamber);
//   }
//   return totalNamber;
// }

// calculateTotal(24);

// avtoperevirka сума парних чисел=============================================================================================

// function calculateEvenTotal(number) {
//   let totalNamber = 0;
//   for (let i = 0; i <= number; i += 1) {

//     if (i % 2 === 0) {

//       totalNamber += i;
//     }
//   }
//   console.log(totalNamber);
//   return totalNamber;
// }

// calculateEvenTotal(27);

// avtoperevirka=============================================================================================

// const start = 6;
// const end = 17;
// let number;

// for (let start = 6; start < end; start += 1) {
//   if (start % 5 === 0) {
//     number = start;
//     break;
//   }
// }

// console.log(number);

// avtoperevirka=============================================================================================

// function findNumber(start, end, divisor) {
//   let i = 0;
//   for (let i = start; start <= end; start += 1) {
//     if (start % divisor === 0) {
//       // return start;
//       console.log(start);
//     }
//   }
// }

// findNumber(21, 61, 51);

// avtoperevirka

// function getFileName(file) {

//   if (file.includes(".")) {
//     console.log(file.slice(0, file.indexOf(".")));
//     return file.slice(0, file.indexOf("."));
//   } else {
//     console.log(file);
//     return file;
//   }
//   }

//   getFileName("styles.")
//   getFileName("index")
//   getFileName("index.css")
//   getFileName("index.html")
//   getFileName("index.js")
//   getFileName("app")
//   getFileName("app.js")

// avtoperevirka=============================================================================================

// function getLastElementMeta(array) {

//     const lastElementIndex = array.length - 1;
//     const lastElement = [lastElementIndex, array[lastElementIndex]];
//     console.log(lastElement); // "Venus"
//     console.log(lastElementIndex ,array[lastElementIndex]); // "Venus"
//     return lastElement;
// }

// getLastElementMeta(["apple", "peach"])
// getLastElementMeta(["apple", "peach", "pear"])
// getLastElementMeta(["apple", "peach", "pear", "banana"])

// avtoperevirka=============================================================================================

// function getExtremeElements(array) {
//   const getExtreme = [array[0], array[array.length - 1]];
//   console.log(getExtreme);
//   return getExtreme;
// }

// getExtremeElements([1, 2, 3, 4, 5])
// getExtremeElements(["Earth", "Mars", "Venus"])
// getExtremeElements(["apple", "peach", "pear", "banana"])

// avtoperevirka=============================================================================================

// function getLength(array) {
//     const delimiter = array.join("");
//     console.log(delimiter.length);
// }

// getLength(["top", "picks", "for", "you"])
// getLength(["M", "a", "n", "g", "o"])
// getLength(["Mango", "hurries", "to", "the", "train"])

// avtoperevirka=============================================================================================

// function calculateEngravingPrice(message, pricePerWord) {
//     const delimiter = message.split(" ");
//     console.log(delimiter);
//     console.log(delimiter.length * pricePerWord);
//     return delimiter.length * pricePerWord;
// }

// calculateEngravingPrice("JavaScript is in my blood", 10) //  50
// calculateEngravingPrice("JavaScript is in my blood", 20) // 100
// calculateEngravingPrice("Web-development is creative work", 40) // 160
// calculateEngravingPrice("Web-development is creative work", 20) //80

// avtoperevirka=============================================================================================

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3, );
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// avtoperevirka=============================================================================================

// function getSlice(array, value) {

//     if (array.includes(value)) {
//         const newArray = array.slice(0, array.indexOf(value) + 1);
//         console.log(newArray);
//         return newArray;
//     } else {
//         const emptyArray = [];
//         console.log(emptyArray);
//         return emptyArray;
//     }
// }

// getSlice(["Mango", "Poly", "Ajax"], "Poly") // ["Mango", "Poly"]
// getSlice(["Mango", "Poly", "Ajax"], "Ajax") // ["Mango", "Poly", "Ajax"]
// getSlice(["Mango", "Poly", "Ajax"], "Mango") // ["Mango"]
// getSlice(["Mango", "Poly", "Ajax"], "Jacob") // []
// getSlice(["Mango", "Poly", "Ajax"], "Casey") // []

// avtoperevirka=============================================================================================

// function createArrayOfNumbers(min, max) {
//     const array = [];
//     for (let i = min; i <= max; i += 1) {
//         array.push(i);
//     }
//     console.log(array);
//     return array;
// }

// createArrayOfNumbers(1, 3) // [1, 2, 3]
// createArrayOfNumbers(14, 17) // [14, 15, 16, 17]
// createArrayOfNumbers(29, 34) // [29, 30, 31, 32, 33, 34]

// avtoperevirka=============================================================================================

// function calculateTotalPrice(order) {

//     let sum = 0;
//     for (let i = 0; i < order.length; i += 1) {
//         sum = sum + order[i];
//     }

//     console.log(sum);
//     return sum;
// }

// calculateTotalPrice([12, 85, 37, 4]) // 138
// calculateTotalPrice([164, 48, 291]) // 503
// calculateTotalPrice([412, 371, 94, 63, 176]) // 1116

// avtoperevirka=============================================================================================

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
// Використовуй цикл for.

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

// function getEvenNumbers(start, end) {
//     const array = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             array.push(i);
//         }
//     }
//     console.log(array);
//     return array;
// }

// getEvenNumbers(2, 5) // [2, 4]
// getEvenNumbers(3, 11) // [4, 6, 8, 10]
// getEvenNumbers(6, 12) // [6, 8, 10, 12]
// getEvenNumbers(8, 8) // [8]
// getEvenNumbers(7, 7) // []

// avtoperevirka=============================================================================================

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//     const newItem = item.toLowerCase();
//     if (storage.includes(newItem)) {
//         console.log(`${newItem} is available to order!`);
//         return `${newItem} is available to order!`;
//     } else {
//         console.log("Sorry! We are out of stock!");
//         return "Sorry! We are out of stock!";
//     }
// }

// checkStorage(["apple", "plum", "pear"], "plum") // "plum is available to order!"
// checkStorage(["apple", "plum", "pear"], "pLuM") // "plum is available to order!"
// checkStorage(["apple", "plum", "pear"], "pear") // "pear is available to order!"
// checkStorage(["apple", "plum", "pear"], "pEAr") // "pear is available to order!"
// checkStorage(["apple", "plum", "pear"], "orange") // "Sorry! We are out of stock!"
// checkStorage(["apple", "plum", "pear"], "carrot") // "Sorry! We are out of stock!"

// avtoperevirka=============================================================================================

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах.
// А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:
// -Створи порожній масив для зберігання нового масиву.
// -Використай цикл for для ітерації кожного елемента у array1.
// -У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// -Якщо він існує, то додай елемент до нового масиву.
// -Поверни наповнений масив спільних елементів як результат роботи функції.

// function getCommonElements(array1, array2) {
//     const array = [];
//     for (let i = 0; i < array1.length; i++) {
//         const element = array1[i];

//         if(array2.includes(element)) {
//             array.push(element);
//         }
//     }
//     console.log(array);
//     return array;
// }

// getCommonElements([1, 2, 3], [2, 4]) // [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]) // []

// avtoperevirka=============================================================================================

// Доповни код функції `calculateTotalPrice(order)` так,
// щоб вона повертала загальну суму чисел в масиві `order`.
// Використай цикл `for...of` для перебору масиву.

// function calculateTotalPrice(order) {
//     let suma = 0;
//     for (const iterator of order) {
//         suma += iterator;
//     }
//     console.log(suma);
//     return suma;
// }

// calculateTotalPrice([12, 85, 37, 4]) // 138
// calculateTotalPrice([164, 48, 291]) // 503
// calculateTotalPrice([412, 371, 94, 63, 176]) // 1116
// calculateTotalPrice([]) // 0

// avtoperevirka=============================================================================================

// Функція createReversedArray() може приймати довільну кількість аргументів.
// Доповни код функції так, щоб вона повертала масив усіх аргументів,
// але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3),
// функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(),
// який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворот

// function createReversedArray() {
//     const args = Array.from(arguments)
//     console.log(args.toReversed());
//     return args.toReversed();
// }

// createReversedArray(12, 85, 37, 4) // [4, 37, 85, 12]
// createReversedArray(164, 48, 291) // [291, 48, 164]
// createReversedArray(412, 371, 94, 63, 176) // [176, 63, 94, 371, 412]
// createReversedArray() // []

// avtoperevirka=============================================================================================

// Функція calculateTax(amount, taxRate) оголошує два параметри:
// -amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// -taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову //

// function calculateTax(amount, taxRate = 0.2) {
//     const sumTax = amount * taxRate;
//     console.log(sumTax);
//     return sumTax;
// }

// calculateTax(100, 0.1)//  10
// calculateTax(200, 0.1)//  20
// calculateTax(100, 0.2)//  20
// calculateTax(200, 0.2) // 40
// calculateTax(100, 0.3)//  30
// calculateTax(200, 0.3)//  60
// calculateTax(100)//  20
// calculateTax(200)//  40

// avtoperevirka 4 modul=============================================================================================

// Перебери об'єкт apartment, використовуючи цикл for...in,
// і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Використано цикл for...in

// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {

//         keys.push(key);
//         values.push(apartment[key]);

// }

// console.log(keys);
// console.log(values);

// avtoperevirka 4 modul=============================================================================================

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів властивостей об'єкта apartment,
// і додай в масив values всі значення його властивостей.

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };

// const values = [];
// const keys = Object.keys(apartment);

// console.log(keys);

// for (const key of keys) {
//     values.push(apartment[key]);
// }

// console.log(values);

// avtoperevirka 4 modul=============================================================================================

// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys()
// для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція використовує метод Object.keys()

// function countProps(object) {
//     let propCount = 0;

//     const keys = Object.keys(object);

//     propCount = keys.length;
//     // console.log(propCount);

//     return propCount;
// }

// console.log(countProps({})); // повертає 0
// console.log(countProps({ name: 'Mango', age: 2 })); // повертає 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // повертає 3

// avtoperevirka 4 modul=============================================================================================

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра.
// Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат

// function countTotalSalary(salaries) {
//     let totalSalary = 0;

//     const values = Object.values(salaries);

//     for (let i = 0; i < values.length; i++) {
//         totalSalary += values[i];
//     }
//     return totalSalary;
// }

// console.log(countTotalSalary({})); // повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // повертає 400

// avtoperevirka 4 modul=============================================================================================

// Масив colors містить колекцію кольорів.
// Кожен колір представлений об'єктом і має властивості hex і rgb
// з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex,
// а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// avtoperevirka 4 modul=============================================================================================

// Функція getProductPrice(productName) приймає один параметр productName - назва продукту.
// Функція містить масив об'єктів products з такими властивостями,
// як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products
// і повертала його ціну (властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName) {
//     const products = [
//         { name: 'Radar', price: 1300, quantity: 4 },
//         { name: 'Scanner', price: 2700, quantity: 3 },
//         { name: 'Droid', price: 400, quantity: 7 },
//         { name: 'Grip', price: 1200, quantity: 9 },
//     ];

//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
//     }
// }

// console.log(getProductPrice('Radar')); // повертає 1300.
// console.log(getProductPrice('Grip')); // повертає 1200.
// console.log(getProductPrice('Scanner')); // повертає 2700.
// console.log(getProductPrice('Engine')); // повертає null.

// avtoperevirka 4 modul=============================================================================================

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//     const products = [
//         { name: 'Radar', price: 1300, quantity: 4 },
//         { name: 'Scanner', price: 2700, quantity: 3 },
//         { name: 'Droid', price: 400, quantity: 7 },
//         { name: 'Grip', price: 1200, quantity: 9 },
//     ];

//     const getAll = [];
//     for (const product of products) {
//         const olx = Object.keys(product);

//         for (const namef of olx) {
//             if (namef === propName) {
//                 getAll.push(product[namef]);
//             }
//         }
//     }
//     return getAll;
// }

// console.log(getAllPropValues('name')); // повертає ["Radar", "Scanner", "Droid", "Grip"];
// console.log(getAllPropValues('quantity')); // повертає [4, 3, 7, 9]
// console.log(getAllPropValues('category')); // повертає [4, 3, 7, 9]

// avtoperevirka 4 modul=============================================================================================

// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару.
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару

// function calculateTotalPrice(productName) {
//     const products = [
//         { name: 'Radar', price: 1300, quantity: 4 },
//         { name: 'Scanner', price: 2700, quantity: 3 },
//         { name: 'Droid', price: 400, quantity: 7 },
//         { name: 'Grip', price: 1200, quantity: 9 },
//     ];

//     for (const product of products) {

//         if (product.name === productName) {

//             let totalPrice = 0;
//             totalPrice = product.price * product.quantity;
//             return totalPrice;
//         }
//     }
//     return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Radar')); // повертає 5200
// console.log(calculateTotalPrice('Droid')); // повертає 2800
// calculateTotalPrice('Grip'); //повертає 10800
// calculateTotalPrice('Scanner'); // повертає 8100
// console.log(calculateTotalPrice('Scasd')); // повертає 8100

// avtoperevirka 4 modul=============================================================================================

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином,
// щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     getPotions() {
//         return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//             }
//         }
//     },
// };

// atTheOldToad.updatePotionName('Stone skin', 'Invisibility'); // [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]

// avtoperevirka 4 modul=============================================================================================

// function getExtremeScores(...[scores]) {
//     // console.log(...[scores]);
//     // const best = Math.max(...scores);
//     // const worst = Math.min(...scores);
//     // console.log(best);
//     // console.log(worst);
//     const products = {
//         best: Math.max(...scores),
//         worst: Math.min(...scores),
//     };
//     console.log(products);
// }

// getExtremeScores([19, 7, 4, 17, 81, 24]); // повертає об'єкт { best: 81, worst: 4 }

// avtoperevirka 5 modul=============================================================================================

// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
// і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Доповни виклик метода forEach, передавши йому колбек-функцію,
// яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (number) {
//         totalPrice += number;
//     });
//     console.log(totalPrice);
//     return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4]); // повертає 138
// calculateTotalPrice([164, 48, 291]); // повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176]); // повертає 1116

// avtoperevirka 5 modul=============================================================================================

// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив,
// в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value.
// Якщо таких значень не буде знайдено, функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//     let newArray = [];
//     // console.log(numbers);
//     numbers.forEach(function (number) {
//         // console.log(number);
//         if (number > value) {
//             newArray.push(number);
//         }
//     });

//     return newArray;
// }

// filterArray([1, 2, 3, 4, 5], 3); // повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); // повертає [5]
// filterArray([1, 2, 3, 4, 5], 5); // повертає []
// filterArray([12, 24, 8, 41, 76], 38); // повертає [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); // повертає [24, 41, 76] //

// avtoperevirka 5 modul=============================================================================================

// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });
//     console.log(filteredNumbers);
//     return filteredNumbers;
// };

// filterArray([1, 2, 3, 4, 5], 3); // повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); // повертає [5]
// filterArray([1, 2, 3, 4, 5], 5); // повертає []
// filterArray([12, 24, 8, 41, 76], 38); // повертає [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); //повертає [24, 41, 76]

// avtoperevirka 5 modul=============================================================================================

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент,
// значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers,
// а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// стара функція

// function changeEven(numbers, value) {
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;
//       }
//     }
//   }

// нова функція

// function changeEven(numbers, value) {
//     let newArray = [];
//     newArray.push(...numbers);
//     // console.log(newArray);

//     for (let i = 0; i < newArray.length; i += 1) {
//         if (newArray[i] % 2 === 0) {
//             newArray[i] = newArray[i] + value;
//         }
//     }
//     console.log(newArray);
//     return newArray;
// }

// changeEven([1, 2, 3, 4, 5], 10); // повертає новий масив [1, 12, 3, 14, 5]
// changeEven([2, 8, 3, 7, 4, 6], 10); // повертає новий масив [12, 18, 3, 7, 14, 16]
// changeEven([17, 24, 68, 31, 42], 100); // повертає новий масив [17, 124, 168, 31, 142]
// changeEven([44, 13, 81, 92, 36, 54], 100); // повертає новий масив [144, 13, 81, 192, 136, 154]

// avtoperevirka 5 modul=============================================================================================

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//     { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);

// avtoperevirka 5 modul=============================================================================================

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         genres: ['adventure', 'history'],
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         genres: ['fiction'],
//     },
//     {
//         title: 'Redder Than Blood',
//         author: 'Tanith Lee',
//         genres: ['horror', 'mysticism'],
//     },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// avtoperevirka 5 modul=============================================================================================

// Доповни стрілочну функцію getUserEmails(users) таким чином,
//  щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// const getUserEmails = users => {
//     console.log(users.map(user => user.email));
//     return users.map(user => user.email);
// };

// getUserEmails([
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ]);

// avtoperevirka 5 modul=============================================================================================

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 === 1);

// console.log(evenNumbers);
// console.log(oddNumbers);

// avtoperevirka 5 modul=============================================================================================

// Доповни функцію getUsersWithEyeColor(users, color) таким чином,
// щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor)
// збігається зі значенням другого параметра color.

// const getUsersWithEyeColor = (users, color) => {
//     // users.filter(user => user.eyeColor === color);
//     console.log(users.filter(user => user.eyeColor === color));
//     return users.filter(user => user.eyeColor === color);
// };

// getUsersWithEyeColor(
//     [
//         {
//             name: 'Moore Hensley',
//             email: 'moorehensley@indexia.com',
//             eyeColor: 'blue',
//             friends: ['Sharron Pace'],
//             isActive: false,
//             balance: 2811,
//             gender: 'male',
//         },
//         {
//             name: 'Sharlene Bush',
//             email: 'sharlenebush@tubesys.com',
//             eyeColor: 'blue',
//             friends: ['Briana Decker', 'Sharron Pace'],
//             isActive: true,
//             balance: 3821,
//             gender: 'female',
//         },
//         {
//             name: 'Ross Vazquez',
//             email: 'rossvazquez@xinware.com',
//             eyeColor: 'green',
//             friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//             isActive: false,
//             balance: 3793,
//             gender: 'male',
//         },
//         {
//             name: 'Elma Head',
//             email: 'elmahead@omatom.com',
//             eyeColor: 'green',
//             friends: ['Goldie Gentry', 'Aisha Tran'],
//             isActive: true,
//             balance: 2278,
//             gender: 'female',
//         },
//     ],
//     'blue'
// );

// avtoperevirka 5 modul=============================================================================================

// Доповни код функції getUsersWithAge(users, minAge, maxAge), щоб повернути масив користувачів,
// вік (збережений у властивості age) яких потрапляє у заданий діапазон від minAge до maxAge.

// const getUsersWithAge = (users, minAge, maxAge) => {
//     console.log(users.filter(user => user.age <= maxAge && user.age >= minAge));
//     return users.filter(user => user.age <= maxAge && user.age >= minAge);
// };

// getUsersWithAge(
//     [
//         {
//             name: 'Moore Hensley',
//             email: 'moorehensley@indexia.com',
//             eyeColor: 'blue',
//             friends: ['Sharron Pace'],
//             isActive: false,
//             balance: 2811,
//             gender: 'male',
//             age: 37,
//         },
//         {
//             name: 'Sharlene Bush',
//             email: 'sharlenebush@tubesys.com',
//             eyeColor: 'blue',
//             friends: ['Briana Decker', 'Sharron Pace'],
//             isActive: true,
//             balance: 3821,
//             gender: 'female',
//             age: 34,
//         },
//         {
//             name: 'Ross Vazquez',
//             email: 'rossvazquez@xinware.com',
//             eyeColor: 'green',
//             friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//             isActive: false,
//             balance: 3793,
//             gender: 'male',
//             age: 24,
//         },
//         {
//             name: 'Elma Head',
//             email: 'elmahead@omatom.com',
//             eyeColor: 'green',
//             friends: ['Goldie Gentry', 'Aisha Tran'],
//             isActive: true,
//             balance: 2278,
//             gender: 'female',
//             age: 21,
//         },
//         {
//             name: 'Carey Barr',
//             email: 'careybarr@nurali.com',
//             eyeColor: 'blue',
//             friends: ['Jordan Sampson', 'Eddie Strong'],
//             isActive: true,
//             balance: 3951,
//             gender: 'male',
//             age: 27,
//         },
//         {
//             name: 'Blackburn Dotson',
//             email: 'blackburndotson@furnigeer.com',
//             eyeColor: 'brown',
//             friends: ['Jacklyn Lucas', 'Linda Chapman'],
//             isActive: false,
//             balance: 1498,
//             gender: 'male',
//             age: 38,
//         },
//         {
//             name: 'Sheree Anthony',
//             email: 'shereeanthony@kog.com',
//             eyeColor: 'brown',
//             friends: ['Goldie Gentry', 'Briana Decker'],
//             isActive: true,
//             balance: 2764,
//             gender: 'female',
//             age: 39,
//         },
//     ],
//     30,
//     40
// );

// avtoperevirka 5 modul=============================================================================================

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, element) => {
//     // console.log(previousValue + element);
//     return previousValue + element;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);
// console.log(playtimes);
// console.log(totalPlayTime);

// avtoperevirka 5 modul=============================================================================================

// const players = [
//     { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//     { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//     { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//     { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//     const acc = player.playtime / player.gamesPlayed;
//     // console.log(acc);
//     // console.log(total + acc);
//     return total + acc;
// }, 0);

// avtoperevirka 5 modul=============================================================================================

// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
// рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//     {
//         title: 'The Dreams in the Witch House',
//         author: 'Howard Lovecraft',
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map(book => book.author)
//     .toSorted((a, b) => a.localeCompare(b));

// console.log(names);
