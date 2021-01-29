"use strict"

console.log("Задача-1.1: Стиль ES6")

class Product2  {
    constructor (name2,price2) {
        this.name2 = name2;
        this.price2 = price2;
    }

    make25PercentDiscount2 () {
        this.discount2 = this.price2 * 0.25;
        console.log("Скидка на: " + this.name2 + " = " + this.discount2);
    }
};

let discount2 = new Product2 ("Продукт", 200);
discount2.make25PercentDiscount2();

console.log("Задача-1.2: Стиль ES6")

class Post2 {
    constructor  (author2,text2,date2) {
    this.author2 = author2;
    this.text2 = text2;
    this.date2 = date2;

}

    edit2 () {
    console.log(this.author2);
    console.log(this.text2);
    console.log(this.date2);

}
};


class AttachedPost2 extends Post2 {
    constructor (author2,text2,date2,highlighted2) {
    super(author2,text2,date2);
    this.highlighted2 = highlighted2;

}

makeTextHighlighted2 () {
        console.log(this.author2);
        console.log(this.text2);
        console.log(this.date2);
        this.highlighted2 = true;
        console.log(this.highlighted2);
    }
};

let Obj2 = new AttachedPost2("Автор","Текст","27.01.2021",false);
Obj2.makeTextHighlighted2();
