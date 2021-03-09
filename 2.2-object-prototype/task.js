//Задача №1
String.prototype.isPalindrome = function isPalindrome() {
    let string = this.toLowerCase().replace(/\s/g, "").split("");
    console.log(string);
    console.log(string.reverse());
    return string.join("") === (string.reverse().join(""));
}
//Задача №2
function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 0) {
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }
        let average = sum / marks.length;
        let roundedAverage = Math.round(average);
        return roundedAverage;
    }
}

function checkBirthday(birthday) {
    let now = Number(new Date());
    let birthdayDate = new Date(birthday);
    let birthDay = birthdayDate.getTime();
    let diff = now - birthDay;
    let age = diff / 31536000000;
    return (age > 18);
}