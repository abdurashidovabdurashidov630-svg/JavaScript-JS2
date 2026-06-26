let fruits = ["olma", "banan", "shaftoli"];
fruits.push("anor");
console.log(fruits);

let numbers = [10, 20, 30];
let a = Number(prompt("Son kiriting:"))
numbers.push(a);
console.log(numbers);

let colors = ["qizil", "yashil", "ko‘k", "sariq"];
colors.pop();
console.log(colors);

let products = ["telefon", "noutbuk", "planshet"];
let a1 = products.pop();
console.log(a1);
console.log(products);

let months = ["fevral", "mart", "aprel"];
months.unshift("yanvar");
console.log(months);
let queue = ["Ali", "Vali", "Hasan"];
let b = prompt("Ism kiriting:");
queue.unshift(b);
console.log(queue);

let tasks = ["uyg‘onish", "nonushta", "ishga borish"];
tasks.shift();
console.log(tasks);
let users = ["Aziz", "Dilshod", "Madina"];
let c = users.shift();
console.log(c);
console.log(users);

let numbers2 = [5, 10, 15, 20];
delete numbers[2]
console.log(numbers2);

let cities = ["Toshkent", "Samarqand", "Buxoro", "Xiva"];
let d = cities.indexOf("Samarqand");
cities.splice(d, 1);
console.log(cities);

let animals = ["mushuk", "it", "quyon", "ot", "sigir"];
console.log(animals.length);

let scores = [12, 25, 48, 91, 17, 63];
console.log(scores[scores.length - 1]);
let letters = ["a", "b", "c", "d", "e"];
console.log(letters.at(-1));

let weekdays = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma"];
console.log(weekdays[2]);

let fruits2 = ["olma", "banan", "anor", "shaftoli"];
console.log(fruits2.indexOf("anor"));

let users2 = ["Ali", "Vali", "Hasan", "Husan"];
let e = prompt("Ism kiriting:");
console.log(users2.includes(e));
let numbers3 = [10, 20, 30, 20, 40, 20];
console.log(numbers3.lastIndexOf(20));

let words = ["html", "css", "js", "css", "react", "css"];
console.log(words.lastIndexOf("css"));