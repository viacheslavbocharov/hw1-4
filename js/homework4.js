/*Напишіть скрипт, який переводить години в секунди і має робити насутпне:

запитати у користувача кількість годин;
порахувати, скільки секунд у цій кількості годин;
записати обчислене значення у змінну;
вивести цю змінну користувачеві через alert.*/

let hoursConverterToSeconds = (prompt("Enter how many hours now?"))*3600;
let minutesConverterToSeconds = (prompt("Enter how many minuter now?"))*60;
let summaryTimeInSeconts = hoursConverterToSeconds + minutesConverterToSeconds;
alert(`Your time converted is seconds is ${summaryTimeInSeconts}`); 