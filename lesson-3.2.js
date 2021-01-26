"use strict"
console.log ("Задача-3: Применить ко всем товарам скидку 15%")
const productss = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },

];

productss.forEach(function(productss) {
    if (productss.id == productss.id) {
        productss.price = productss.price * 0.15;


    }
})
console.log(productss);

console.log ("Задача-4.1: Получить все товары, у которых есть фотографии,")
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",

        ]
    },

    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },

    {
        id: 8,
        price: 78,

    },


];

const productsPhoto = products.filter(function(products) {
           if ((products.photos!== undefined) &&
               ( products.photos.length > 0 )) {
               return products;
           } else if ((products.photos!== undefined) &&
               ( products.photos.length != 0 )) {
               return false;
           }

})
console.log (productsPhoto);

console.log ("Задача-4.2: Отсортируйте товары по цене (от низкой цены к высокой)")

const productsSort = products.sort(function(a,b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
});

console.log (productsSort);

