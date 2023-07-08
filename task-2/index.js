// DOM ELEMENTS
const birthdayInput = document.querySelector("#birthday");
const button = document.querySelector("button");
const resultMessage = document.querySelector("#result");

// NUMBER OF DAYS TILL BIRTHDAY
const daysToBirthday = () => {
    // Берём данные о дате дня рождения
    const birthdayTimeStamp = Date.parse(birthdayInput.value);

    // Находим разницу от текущего момента до дня рождения
    const diffInMilliseconds = birthdayTimeStamp - Date.now();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)) + 1;

    // Определяем количство дней до следующего дня рождения
    const daysToBirthday = diffInDays < 0 ? diffInDays + 365 : diffInDays;
    return daysToBirthday;
};

// СКЛОНЕНИЕ СЛОВА "ДЕНЬ"
const dayWord = (number) => {
    if (number % 100 === 11 || number % 100 === 12 || number % 100 === 13 || number % 100 === 14) {
        return "дней";
    } else if (number % 10 === 1) {
        return "день";
    } else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
        return "дня"
    } else {
        return "дней";
    }
}

// EVENT LISTENERS
button.addEventListener("click", showDaysToBirthday);

// FUNCTION TO SHOW DAYS TO BIRTHDAY
function showDaysToBirthday() {
    const errorMessage = "Пожалуйста, введите дату вашего рождения в текущем году";
    const successMessage = `До вашего дня рождения осталось ждать ${daysToBirthday()} ${dayWord(daysToBirthday())}!`;

    resultMessage.classList.add("alert");
    // Проверяем пустое поле ввода даты
    if (birthdayInput.value) {
        resultMessage.textContent = successMessage;
        resultMessage.classList.add("alert-success");
        // Убираем стиль сообщения об ошибке, если он был вызван раньше
        if (resultMessage.classList.contains("alert-danger")) {
            resultMessage.classList.remove("alert-danger");
        }
    } else {
        resultMessage.textContent = errorMessage;
        resultMessage.classList.add("alert-danger");
    }
}

