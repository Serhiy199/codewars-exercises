function linebreak(params) {
    let strink = '';
    // console.log(Boolean(params.includes('d')));
    // console.log(...params);
    // console.log(Boolean(params[1] === params[3]));
    for (let i = 0; i < params.length; i++) {
        let number = 0;
        let element = params[i];
        console.log(element);
        console.log(element === params[i]);
        // if (element === params[i]) {
        //     strink += '(';
        //     number += 1;
        // } else {
        //     strink += ')';
        // }
        // console.log(strink);
        // console.log(Boolean(params.includes(element)));
        // console.log(Boolean(element === params));
        // if (element === ...params) {

        //     strink += ')';

        // } else {
        //     strink += '('
        // }
        // console.log(element);
        // console.log(Boolean(params[1] === params[i]));
        // console.log(Boolean(params.includes[element]));
        // console.log(Boolean(element === params[i]));
        //     if (element === params[i]) {
        //         console.log('yes');
        //     } else {
        //         console.log('no');
        //     }
    }

    // const newStrink = params.split('');
    // const array = [];

    // const planetsInUpperCase = newStrink.map((planet, index) => planet, index);
    // console.log(planetsInUpperCase);

    // let str = params;
    // // console.log(str);

    // if (str.indexOf('') != -1) {
    //     console.log('Є співпадіння'); // тепер працює!
    // }
    //    const arr = newStrink.map(item) => {
    //         console.log(item);
    //     };

    // for (let i = 0; i < newStrink.length; i++) {
    //     let element = newStrink[i];

    //     console.log(element);
    //     console.log(newStrink[i]);
    //     if (element === newStrink[i]) {
    //         array.push(')');
    //     } else {
    //         array.push('(');
    //     }
    // }
    // for (const iterator of newStrink) {
    //     if (iterator === iterator) {
    //         array.push(')');
    //     } else {
    //         array.push('(');
    //     }
    // }
    // console.log(array.join(''));
}

// linebreak('din'); //   =>  "((("
// linebreak('recede'); // =>  "()()()"
// linebreak('Success'); // =>  ")())())"
// linebreak('(( @'); //     =>  "))(("

// ===================================== Завдання 2 ==============================================>

// Ви, мабуть, знаєте систему «лайків» із Facebook та інших сторінок.
// Люди можуть "лайкати" дописи в блогах, зображення чи інші елементи.
// Ми хочемо створити текст, який має відображатися поруч із таким елементом.

// Реалізуйте функцію, яка приймає масив, що містить імена людей, яким подобається предмет.
// Він повинен повертати відображуваний текст, як показано в прикладах:

// function arryText(params) {
//     let strink = ``;
//     if (params.length === 0) {
//         strink = `no one likes this`;
//         // console.log(strink);
//     } else if (params.length === 1) {
//         strink = `${params[0]} like this`;
//         // console.log(strink);
//     } else if (params.length === 2) {
//         strink = `${params[0]} and ${params[1]} like this`;
//         // console.log(strink);
//     } else if (params.length === 3) {
//         strink = `${params[0]}, ${params[1]} and ${params[2]} like this`;
//         // console.log(strink);
//     } else {
//         strink = `${params[0]}, ${params[1]} and ${params.length - 2} others like this`;
//         // console.log(strink);
//     }
//     // console.log(strink);
//     return strink;

//     // console.log(strink);
// }

// arryText([]); // "no one likes this"
// arryText(['Peter']); // "Peter likes this"
// arryText(['Jacob', 'Alex']); //"Jacob and Alex like this"
// arryText(['Max', 'John', 'Mark']); //  "Max, John and Mark like this"
// arryText(['Alex', 'Jacob', 'Mark', 'Max']); //   "Alex, Jacob and 2 others like this"

// ============================ Чужі варіанти ========================================>
// function likes(names) {
//     names = names || [];
//     switch (names.length) {
//         case 0:
//             return 'no one likes this';
//             break;
//         case 1:
//             return names[0] + ' likes this';
//             break;
//         case 2:
//             return names[0] + ' and ' + names[1] + ' like this';
//             break;
//         case 3:
//             return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
//             break;
//         default:
//             return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
// }

// function likes(names) {
//     return {
//         0: 'no one likes this',
//         1: `${names[0]} likes this`,
//         2: `${names[0]} and ${names[1]} like this`,
//         3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//         4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//     }[Math.min(4, names.length)];
// }

// function likes(names) {
//     names.length === 0 && (names = ["no one"]);
//     let [a, b, c, ...others] = names;
//     switch (names.length) {
//       case 1: return `${a} likes this`;
//       case 2: return `${a} and ${b} like this`;
//       case 3: return `${a}, ${b} and ${c} like this`;
//       default: return `${a}, ${b} and ${others.length + 1} others like this`;
//     }
//   }

// ===================================== Завдання 3 ==============================================>

// Деякі числа мають смішні властивості. Наприклад:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Дано натуральне число n, записане як abcd... (a, b, c, d... є цифрами) і натуральне число p
// ми хочемо знайти таке натуральне число k, якщо воно існує, щоб сума цифр числа n, узятих до послідовних степенів p, дорівнювала k * n.
// Іншими словами:
// Чи існує ціле число k, наприклад: (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// Якщо це так, ми повернемо k, якщо ні, повернемо -1.
// Примітка : n і p завжди задаються як суто додатні цілі числа.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// function digPow(n, p) {
//     // ...
// }

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//   const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(digPow(89, 1), 1)
// Test.assertEquals(digPow(92, 1), -1)
// Test.assertEquals(digPow(46288, 3), 51)

//   });
// });
