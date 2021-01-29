"use strict"

console.log("Задача-1.1: Стиль ES5")

function Product (name,price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function (){
    this.discount = this.price * 0.25;
    console.log("Скидка на: " + this.name + " = " + this.discount);
};

let discount = new Product ("Продукт", 200);
discount.make25PercentDiscount();

console.log("Задача-1.2: Стиль ES5")

function Post (author,text,date) {
    this.author = author;
    this.text = text;
    this.date = date;

}

Post.prototype.edit = function () {
    console.log(this.author);
    console.log(this.text);
    console.log(this.date);

};

function AttachedPost (author,text,date,highlighted) {
    Post.call(this,author,text,date);
    this.highlighted = highlighted;

}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost.prototype;

AttachedPost.prototype.makeTextHighlighted = function (){
    console.log(this.author);
    console.log(this.text);
    console.log(this.date);
    this.highlighted = true;
    console.log(this.highlighted);
};

let Obj = new AttachedPost("Автор","Текст","27.01.2021",false);
Obj.makeTextHighlighted();