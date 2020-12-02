'use strict';

var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");
var answer_1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var answer_2 = +prompt("Во сколько обойдется?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        answer_1: answer_2
    },
    optionalExpenses: "",
    income: "",
    savings: false
};

let budgetForOneDay = appData.budget / 30;

alert(budgetForOneDay);