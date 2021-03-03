"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let mortgageBody = amount - contribution; 
    let months = (date.getMonth() + date.getFullYear() * 12) - ((new Date().getMonth()) + (new Date().getFullYear()) * 12);
    let monthlyPercent = 1 / 12 * percent / 100; 
    let monthlyPayment = mortgageBody * (monthlyPercent + monthlyPercent/((Math.pow((1+monthlyPercent), months)-1)));   
    let totalAmount = months * monthlyPayment; 
    totalAmount = +totalAmount.toFixed(2);    
    return totalAmount;
}

function getGreeting(name) {
    let greeting;
    if (name === "" || name === null || name === undefined) {        
        greeting = `Привет, мир! Меня зовут Аноним.` 
        console.log(greeting);
    } else {
        greeting = `Привет, мир! Меня зовут ${name}.` 
        console.log(greeting);
    }    
    return greeting;
}