/*В якості ДЗ, необхідно вирішити дві наступні задачі:

Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.*/

let userName = prompt("What is your name?");
let userSurname = prompt("What is your surname?");
let userBirth = prompt("What is your year of birth?");


alert("You are " + userName + " " + userSurname + " and you was born in " + userBirth + ".");



let userNumber = prompt("Enter a five-digit number");
userNumber = parseInt(userNumber);

function numberParse() {
    if (userNumber >= 10000 && userNumber <= 99999) {     
        let digit1 = parseInt((userNumber / 10000));
        console.log(digit1);
        let digit2 = parseInt((userNumber % 10000)/1000);
        console.log(digit2);
        let digit3 = parseInt((userNumber % 1000)/100);
        console.log(digit3);
        let digit4 = parseInt((userNumber % 100)/10);
        console.log(digit4);
        let digit5 = userNumber % 10;
        console.log(digit5);
        alert(`Your digits are: ${digit1}, ${digit2}, ${digit3}, ${digit4}, ${digit5}`);
    } else {
        alert("Be careful! Enter a FIVE-DIGIT number");
        userNumber = prompt("Enter a five-digit number");
        userNumber = parseInt(userNumber);
        numberParse();
    }
    return 0;
}

numberParse();

