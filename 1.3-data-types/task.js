"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    //проверяем параметр "Процент":
    if (!percent || isNaN(percent) || percent <= 0 ) {
        console.log(`Параметр ${"percent"} содержит неправильное значение ${percent}`);
        return `\"Процентная ставка\" указана некорректно. Введите положительное число.`;
    } else if (percent >= 100) {
        console.log(`Параметр ${"percent"} содержит неправильное значение ${percent}`);
        return `Проверьте введенное значение \"Процентная ставка\". Вы указали слишком большое число!`;
    } 
    //процентная ставка должна быть дробным числом, следовательно, входные данные нужно разделить на 100:
    percent = percent / 100;   
    //проверяем параметр "Начальный взнос":
    if (!contribution && contribution !== 0 || isNaN(contribution) || contribution < 0) {
        console.log(`Параметр ${"contribution"} содержит неправильное значение ${contribution}`);
        return `\"Начальный взнос\" указан некорректно. Введите положительное число. Либо "0", если ипотека без первоначального взноса.`;
    } else {
        //преобразуем строку в число:
        contribution = +contribution;
    }    
    //проверяем параметр "Начальный взнос":
    if (!amount || isNaN(amount) || amount <= 0 ) {
        console.log(`Параметр ${"amount"} содержит неправильное значение ${amount}`);
        return `\"Общая стоимость\" указана некорректно. Введите положительное число.`;
    } else {
        //преобразуем строку в число:
        amount = +amount; 
        if (amount < contribution) {
            console.log(`Параметр ${"amount"} содержит неправильное значение ${amount}. Он не может быть меньше или равен параметру ${"contribution"}`);
            return `\"Начальный взнос\" не может быть больше значения \"Общая стоимость\". Укажите корректное значение.`;           
        }
    }
    //проверяем параметр "Срок ипотеки":
    if (!date.getDate()) {
        console.log(`Параметр ${"date"} содержит неправильное значение ${date}`);
        return `\"Срок ипотеки\" указан некорректно. Укажите конечную дату погашения кредита.`;
    }
    //тело кредита (S):
    let mortgageBody = amount - contribution; 
    //количество полных выплачиваемых месяцев(n):
    let months = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    //дополнительная проверка срока ипотеки:
    if (months <= 0) {
        //если пользователь ввел прошедшую или слишком скорую дату:
        let d = new Date;
        d.setDate(1);
        d.setMonth(d.getMonth() + 2);
        console.log(d);
        console.log(`Параметр ${"date"} содержит неправильное значение ${date}`);
        return `\"Срок ипотеки\" не может быть ранее даты выдачи и менее одного полного календарного месяца. Укажите корректную дату погашения ипотеки не ранее ${d}.`;    
    }
    //Ежемесячная процентная ставка (P):
    let monthlyPercent = 1 / 12 * percent; 
    //Ежемесячный платеж:
    let monthlyPayment = mortgageBody * (monthlyPercent + monthlyPercent/((Math.pow((1+monthlyPercent), months)-1)));   
    //Сумма, которую придется заплатить клиенту:
    let totalAmount = months * monthlyPayment; 
    totalAmount = +totalAmount.toFixed(2);
    return totalAmount;
}

function getGreeting(name) {
    if (name === undefined || name === null || name === "" || !name.trim()) {
        name = `Аноним`;
    }
    return `Привет, мир! Меня зовут ${name}.`
}