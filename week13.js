//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
console.log("Задание 1");
const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
console.log("Задание 2");
const currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
console.log("Задание 3");
const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
console.log("Задание 4");
const currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
console.log("Задание 5");
const birthday = new Date(2023, 10, 22);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
console.log("Задание 6");
const futureDate = new Date(currentYear, currentMonth + 1, currentDay + 10);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
console.log("Задание 7");
console.log(Math.floor((futureDate - currentDate) / (1000 * 60 * 60 * 24)));

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
console.log("Задание 8");
const pastDate = new Date(currentYear, currentMonth, currentDay - 5);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
console.log("Задание 9");
console.log(Math.floor((currentDate - pastDate) / (1000 * 60 * 60 * 24)));

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
console.log("Задание 10");
const nextWeek = new Date(currentYear, currentMonth, currentDay + 7);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log("Задание 11");
console.log(nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
console.log("Задание 12");
const futureYear = currentYear + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
console.log("Задание 13");
const futureDateInFutureYear = new Date(futureYear, 10, 22);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log("Задание 14");
console.log(futureYear - currentYear);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
console.log("Задание 15");
const strDate = '2023-06-15T08:30:00.000Z';
console.log(new Date(strDate));

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
console.log("Задание 16");
const strDateParsed = Date.parse(strDate);
console.log(strDateParsed);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
console.log("Задание 17");
const date = '2023/06/15';
const dateParsed = Date.parse(date);
if (isNaN(dateParsed)) {
    console.log("Неправильный формат даты");
} else {
    console.log("Правильный формат даты");
}

/*switch (isNaN(dateParsed)) {
    case false:
        console.log("Правильный формат даты");
        break;
    default:
        console.log("Неправильный формат даты");
}*/

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
console.log("Задание 18");
const number = 231;
if (number >= 0) {
    console.log("Переменная положительная");
} else {
    console.log("Переменная отрицательная");
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
console.log("Задание 19");

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
console.log("Задание 20");

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
console.log("Задание 21");

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
console.log("Задание 22");

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
console.log("Задание 23");

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
console.log("Задание 24");

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
console.log("Задание 25");

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
console.log("Задание 26");

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
console.log("Задание 27");

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
console.log("Задание 28");
let direction = 'W';
let fullName;

switch (direction) {
}
