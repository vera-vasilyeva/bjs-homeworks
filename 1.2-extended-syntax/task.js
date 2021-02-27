"use strict";

function getResult(a, b, c) {
    let discriminant;
    let result = [];
    discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) {
        return result;
    } else if (discriminant === 0) {
        result.push(-b / 2 * a);
        return result;
    } else if (discriminant > 0) {
        result.push((-b + Math.sqrt(discriminant)) / (2 * a));
        result.push((-b - Math.sqrt(discriminant)) / (2 * a));
        return result;
    }
}

function getAverageMark(marks) {
    let averageMark = 0;
    let marksSum;
    console.log(marks.length);
    marksSum = 0;
    for (let i = 0; i < marks.length; i++) {
        if (marks.length === 0) {
            return averageMark;
        } else if (marks.length > 5) {
            console.log("Вы ввели большее количество оценок. Внимание, программа рассчитает среднее от 5-ти первых введенных оценок!");
            marks.splice(5);
    }
    marksSum += marks[i];
    averageMark = marksSum / marks.length;    
}
return averageMark;
}



function askDrink(name, dateOfBirthday) {    
    let result;
    let now = new Date();
    console.log(now);
    const yearOfNow = new Date().getFullYear();
    console.log(yearOfNow);
    const yearOfBirdthday = dateOfBirthday.getFullYear();
    console.log(yearOfBirdthday);
    if ((yearOfNow - yearOfBirdthday) >= 18) {
        result = "Не желаете ли олд-фэшн, " + name +"?";
    } else {
        result = "Сожалею, " + name + ", но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!";
    }
    return result;
}