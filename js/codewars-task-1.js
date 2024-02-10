function splitString(stringToSplit, separator) {
    for (let i = 0; i < stringToSplit.length; i++) {
        if (64 < stringToSplit.charCodeAt(i) && stringToSplit.charCodeAt(i) < 91) {
            let n = stringToSplit[i];
            const arrayOfStrings = stringToSplit.split(`${n}`);
            console.log(arrayOfStrings);
            console.log(arrayOfStrings.join(` ${n}`));
            // console.log(newString.replace(`${n}`, ` ${n}`));
        }
    }

    // const arrayOfStrings = stringToSplit.split(separator);

    // console.log('Початковий рядок —', stringToSplit);
    // console.log('Розділювач —', separator);
    // console.log('Масив містить', arrayOfStrings.length, 'елементів:', arrayOfStrings.join(' / '));
}

const tempestString = 'identifier';
const monthString = 'camelCasing';
const monthStringAdd = 'camelCasingTest';

// const tempestString = 'Який чудесний світ новий оцей, де отакі є люди!';
// const monthString = 'Січ,Лют,Бер,Кві,Тра,Чер,Лип,Сер,Вер,Жов,Лис,Гру';

const space = ' ';
const comma = ',';

splitString(tempestString, space);
// splitString(tempestString);
splitString(monthString, comma);
splitString(monthStringAdd, comma);

function solution(string) {
    let newString = string;
    for (let i = 0; i < newString.length; i++) {
        // let n = string.charCodeAt(i);
        // console.log(string.split(' '));
        // console.log(string.charCodeAt(n));
        // console.log(64 < n && n < 91);
        if (64 < newString.charCodeAt(i) && newString.charCodeAt(i) < 91) {
            // console.log(string[i]);

            let n = string[i];

            // console.log(n);
            // string.replace('ca', 'hello');
            console.log(newString.replace(`${n}`, ` ${n}`));

            // newString = newString.replace(`${string[i]}`, ` ${string[i]}`);
            // console.log(newString);
            // console.log(string.split(' ', 3));
            // console.log(string.indexOf(n));
        }
    }

    // console.log(string);
    // console.log(string.charCodeAt(0));

    // message.indexOf("to")
    // return '';
}

solution('identifier');
// solution('camelCasing');
solution('camelCasingTestTestTest');
