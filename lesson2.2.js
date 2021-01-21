"use strict"
alert("Задача-3: Введите два числа, они могут быть положительными или отрицательными, в зависимости от цифр будет " +
    "выполняться арифмитическое действие");
let number1 = +prompt("Введите первое число");
let number2 = +prompt("Введите второе число");

if ((number1 >= 0) && (number2 >= 0)) {
    let sum = number1 - number2
    alert ("разность чисел равно: " + sum);
} else if ((number1 < 0) && (number2 < 0)) {
    let sum = number1 * number2
    alert ("произведение чисел равно: " + sum);
} else if ((number1 < 0) || (number2 < 0)) {
    let sum = number1 + number2
    alert ("сумма чисел равно: " + sum);
}
else {
    alert ("вы ввели не число");
}

alert ("Задача-4: Для решения используем функцию" );

 let multiplication = function  (number1,number2) {
    return  number1 * number2;
};
let division = function  (number1,number2) {
    return  number1 / number2;
};
let additional = function  (number1,number2) {
    return  number1 + number2;
};
let subtraction = function  (number1,number2) {
    return  number1 - number2;
};
alert("деление равно:  " + division(number1,number2) + "\n"  +
    "произведение равно: " + multiplication(number1,number2) + "\n"  +
    "сумма равна: " + additional(number1,number2)+ "\n"  +
    "разность равна: " + subtraction(number1,number2));


alert ("Задача-5: Функция с тремя параметрами" );

function mathOperation(arg1, arg2, operation) {
    let value = 0;
    switch (operation) {
        case "произведение":
            value = arg1*arg2;
            break;
        case "деление":
            value = arg1/arg2;
            break;
        case "сложение":
            value = arg1+arg2;
            break;
        case "вычетание":
            value = arg1-arg2;
            break;
    }
    let result = value
    return result;
}
let arg1 = +prompt("Введите первое число");
let arg2 = +prompt("Введите второе число");
let operation= prompt("Введите операцию из списка: \n" +
                        "произведение  \n\ " +
                        "деление  \n\ " +
                        "сложение  \n\ " +
                        "вычетание")
let inOperation =  mathOperation(arg1,arg2, operation);
alert("Ваша операция: " + operation + " Ответ: " + inOperation );


