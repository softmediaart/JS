"use strict"
console.log ("Задание-1: С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно");

for (let i = 0; i <11; i++) {
    if (i == 0) {
        console.log(i + " = это ноль");
    } else if (i % 2) {
        console.log(i + " = нечетное число");
    } else if (i % 3) {
        console.log(i + " = четное число");
    } else {
        console.log(i + " = четное число");
    }
}

console.log ("Задание-2: Выведите в консоль значения, указанные рядом с комментариями");

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId:10,
            userName: "Alex",
            text: "lorem ispum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число

            }
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem isput 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes:1

            }
        },
    ]
};


console.log (post.author);
console.log (post.comments[0].rating.dislikes);
console.log (post.comments[1].userId);
console.log (post.comments[1].text);
