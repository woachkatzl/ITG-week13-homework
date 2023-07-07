const birthdayInput = document.querySelector("#birthday");
const button = document.querySelector("button");

button.addEventListener("click", daysToBirthday);

function daysToBirthday() {
    // Берём данные о дате дня рождения
    const birthdayTimeStamp = Date.parse(birthdayInput.value);

    // Создаём текущую дату и дату рождения в текущем году
    const birthdayDate = new Date(birthdayTimeStamp);
    const currentDate = new Date();

    //Извлекаем UTC день из даты рождения и из текущей
    const birthdayDay = birthdayDate.getUTCDate();
    const currentDay = currentDate.getUTCDate();

    // Считаем разницу в днях и определяем количство дней до следующего дня рождения
    const diffInDays = birthdayDay - currentDay;
    const daysToBirthday = diffInDays < 0 ? diffInDays + 365 : diffInDays;
    console.log(daysToBirthday);
}

