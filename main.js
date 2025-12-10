let money = document.querySelector('.initial_sum_input');
let moneyValue = Number(money.value);
console.log(moneyValue);

let years = document.querySelector('.years_input');
let yearsValue = Number(years.value);
console.log(yearsValue);

let result = moneyValue + moneyValue * 0.12 * yearsValue;
console.log(result, typeof (result));

document.querySelector('.balance_input').textContent = result;