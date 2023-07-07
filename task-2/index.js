// DOM ELEMENTS
const birthdayInput = document.querySelector("#birthday");
const button = document.querySelector("button");
const resultMessage = document.querySelector("#result");

// NUMBER OF DAYS TILL BIRTHDAY
const daysToBirthday = () => {
    // Создаём текущую дату и дату рождения в текущем году
    const birthdayDate = new Date(birthdayInput.value);
    const currentDate = new Date();

    //Извлекаем UTC день из даты рождения и из текущей
    const birthdayDay = birthdayDate.getUTCDate();
    const currentDay = currentDate.getUTCDate();

    // Считаем разницу в днях и определяем количство дней до следующего дня рождения
    const diffInDays = birthdayDay - currentDay;
    const daysToBirthday = diffInDays < 0 ? diffInDays + 365 : diffInDays;
    return daysToBirthday;
};

// EVENT LISTENERS
button.addEventListener("click", showDaysToBirthday);

// FUNCTION TO SHOW DAYS TO BIRTHDAY
function showDaysToBirthday() {
    const errorMessage = "Пожалуйста, введите дату вашего рождения в текущем году";
    const successMessage = `До вашего дня рождения осталось ждать ${daysToBirthday()} дней!`;

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

