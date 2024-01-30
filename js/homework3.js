/*Створити скрипт який повинен виконувати наступне:

питаємо у користувача, що він хоче зробити (add, sub, mult, div);
питаємо у користувача перше число;
запитуємо у користувача друге число;
виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").*/

function calc() {
    let mathAction = prompt("What math action you want to do? Enter: + , - , / , *");
    console.log("Math action is " + mathAction);


    let number1 = parseFloat(prompt("What is your first number?"));
    console.log("Number 1 is " + number1);
    let number2 = parseFloat(prompt("What is your second number?"));
    console.log("Number 2 is " + number2);


    switch (mathAction) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case null:
            break;
        default:
            alert("You've entered wrong symbol or digit, use one of these: + , - , / or *");
            break;
        //calc();

    }
    alert(`${number1} ${mathAction} ${number2} = ${result}`);
    console.log("Result is " + result);
    return 0;
}

calc();