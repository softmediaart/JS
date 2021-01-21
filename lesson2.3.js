"use strict"
alert ("Задача-6: Задача про Рубль" );

function bankOperation(strRub) {
    if (strRub.toString().slice(-1) == 1 ) {
        let value = "рубль";
        return value;
    } else if ((strRub.toString().slice(-1) == 2) || (strRub.toString().slice(-1) == 3) || (strRub.toString().slice(-1) == 4) ) {
        let value = "рубля";
        return value;
    } else if ((strRub.toString().slice(-1) == 5) || (strRub.toString().slice(-1) == 6) || (strRub.toString().slice(-1) == 7)
        || (strRub.toString().slice(-1) == 8) || (strRub.toString().slice(-1) == 9) || (strRub.toString().slice(-1) == 0)) {
        let value = "рублей";
        return value;
    }

}
let numRub= +prompt("Введите первое число");
let strRub = String(numRub);
let strLength = strRub.length;
let depositBank =  bankOperation(strRub);
alert("Ваша сумма в " + numRub + " " + depositBank +  "  успешно зачислена" );