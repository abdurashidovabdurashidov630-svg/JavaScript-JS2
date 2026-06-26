let matn = "olma,nok,anor";
let mevalar = matn.split(",");
console.log(mevalar);

let ism = "Abdurahmon";
let harflar = ism.split("");
console.log(harflar);

let gap = "Men JavaScript o'rganyapman";
let sozlar = gap.split(" ");
console.log(sozlar);

let sana = "22-06-2026";
let qismlar = sana.split("-");
console.log(qismlar);

let ranglar = "qizil|yashil|kok";
let royxat = ranglar.split("|");
console.log(royxat);

let mevalar2 = ["olma", "nok", "anor"];
let natija1 = mevalar2.join(", ");
console.log(natija1);

let harflar2 = ["J", "S"];
let soz = harflar2.join("");
console.log(soz);

let sonlar1 = [1, 2, 3, 4];
let matn2 = sonlar1.join("-");
console.log(matn2);

let shaharlar = ["Toshkent", "Samarqand", "Buxoro"];
let natija2 = shaharlar.join(" | ");
console.log(natija2);

let belgilar = ["a", "b", "c"];
let natija3 = belgilar.join("*");
console.log(natija3);

let sonlar2 = [1, 2, 3, 4];
sonlar2.reverse();
console.log(sonlar2);

let mevalar3 = ["olma", "nok", "anor"];
mevalar3.reverse();
console.log(mevalar3);

let harflar3 = ["a", "b", "c", "d"];
harflar3.reverse();
console.log(harflar3);

let kunlar = ["dushanba", "seshanba", "chorshanba"];
kunlar.reverse();
console.log(kunlar);

let baholar = [3, 4, 5];
baholar.reverse();
console.log(baholar);


// concat()

let mevalar4 = ["olma", "nok"];
let sabzavotlar = ["sabzi", "kartoshka"];
let natija4 = mevalar4.concat(sabzavotlar);
console.log(natija4);

let sonlar3 = [1, 2];
let sonlar4 = [3, 4];
let natija5 = sonlar3.concat(sonlar4);
console.log(natija5);

let ism2 = ["Ali"];
let familiya = ["Valiyev"];
let natija6 = ism2.concat(familiya);
console.log(natija6);

let ranglar1 = ["qizil"];
let ranglar2 = ["yashil", "kok"];
let natija7 = ranglar1.concat(ranglar2);
console.log(natija7);

let harflar4 = ["a", "b"];
let harflar5 = ["c", "d"];
let natija8 = harflar4.concat(harflar5);
console.log(natija8);

let sonlar5 = [1, 2, 3, 4, 5];
console.log(sonlar5.slice(1, 4));

let mevalar5 = ["olma", "nok", "anor", "shaftoli"];
console.log(mevalar5.slice(0, 2));

let harflar6 = ["a", "b", "c", "d", "e"];
console.log(harflar6.slice(2));

let ranglar3 = ["qizil", "yashil", "kok", "sariq"];
console.log(ranglar3.slice(1, 3));

let kunlar2 = ["du", "se", "cho", "pa", "ju"];
console.log(kunlar2.slice(-2));

let sonlar6 = [1, 2, 3, 4, 5];
sonlar6.splice(2, 1);
console.log(sonlar6);

let mevalar6 = ["olma", "nok", "anor"];
mevalar6.splice(1, 0, "shaftoli");
console.log(mevalar6);

let harflar7 = ["a", "b", "c"];
harflar7.splice(1, 1, "x");
console.log(harflar7);

let ranglar4 = ["qizil", "yashil", "kok"];
ranglar4.splice(0, 2);
console.log(ranglar4);

let shaharlar2 = ["Toshkent", "Samarqand", "Buxoro"];
shaharlar2.splice(2, 0, "Xiva");
console.log(shaharlar2);