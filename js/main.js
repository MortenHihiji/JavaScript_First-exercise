let calcul = document.getElementById('start'),
    budg = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');

let expensesBtn = document.getElementsByClassName('expenses-item-btn')[0],
    optExpensesBtn = document.getElementsByClassName('optionalexpenses-btn')[0],
    countBudgBtn = document.getElementsByClassName('count-budget-btn')[0];

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

let incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

let active = false;
calcul.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budg.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    active = true;
});


let expensesSum = 0;

expensesBtn.addEventListener('click', function() {
    if (active == true) {
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
            
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                console.log("done");
            appData.expenses[a] = b;
            sum += +b;
            } else {
                i = i - 1;
            }
        }
        expensesValue.textContent = sum;
        expensesSum = sum;
    } else {
        
    }
});

optExpensesBtn.addEventListener('click', function() {
    if (active == true) {
        for (let i = 0; 0 < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    } else {
        
    }
});

countBudgBtn.addEventListener('click', function() {
    if (active == true) {
        if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - expensesSum) / 30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Средний уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Высокий уровень достатка";
            } else {
                levelValue.textContent = "Произошла ошибка";
            }
        } else {
            daybudgetValue.textContent = "Произошла ошибка";
        }
    } else {
        
    }
});

incomeItem.addEventListener('input', function() {
    if (active == true) {
        let items = incomeItem.value;
        appData.income = items.split(", ");
        incomeValue.textContent = appData.income;
    } else {

    }
});

checkSavings.addEventListener('click', function() {
    if (active == true) {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    } else {
        
    }
});

sumValue.addEventListener('input', function() {
    if (active == true) {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;


            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    } else {

    }
});

percentValue.addEventListener('input', function() {
    if (active == true) {
        if (appData.savings == true) {
            let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;


            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1); 
        }
    } else {
        
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};