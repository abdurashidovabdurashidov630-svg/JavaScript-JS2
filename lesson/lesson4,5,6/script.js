// ?

// let obj = {
//   id: 1,
//   ism: "Ali",
//   familiya: "Valiyev",
//   manzil: "Namangan",
// };

// console.log(obj.child?.ism);
// console.log(obj["child"]?.["familiya"]);

///////////////////////////////////////////////////////////////////////////

// STRING

// 1. "" ✅
// 2. '' ✅
// 3. `` ✅
// 4. String() ✅
// 5. new String() - Constructor - ❌

// let str1 = "O'zbekiston"
// let str2 = 'O`zbekiston'
// let str3 = `O'zbekiston`
// let str4 = String(2026)

// console.log(str1)
// console.log(str2)
// console.log(str3)
// console.log(str4)

///////////////////////////////////////////////////////////////

// let str = "Algoritm";
// console.log(str);
// console.log(str[3]);

// for in - Object
// for of - String

// for (let value of str) {
//     console.log(value);
// }

// let str = "Algoritm";

// console.log(str.length);
// console.log(str[0]);
// console.log(str.charAt(0));
// console.log(str.at(-1));

// console.log(str[0].charCodeAt());
// console.log(str.charCodeAt(2));

// let a = "Salom "
// let b = "Alik"
// console.log(a + b);
// console.log(a.concat(b));

// includes()
// let str = "Algoritm"
// console.log(str.includes("Ag"));
// console.log(str.includes("A"));
// startsWith()
// console.log(str.startsWith("Alg"));
// endsWith()
// console.log(str.startsWith("tm"));

// let str = "AlgoritmA"

// // search
// console.log(str.search("A")); // Regex - regular expression
// // indexOf
// console.log(str.indexOf("A",1));
// // lastIndexOf()
// console.log(str.lastIndexOf("A",5));

// let str = "AlgoritmA5"

// search
// console.log(str.search(/a/i));
// console.log(str.search(/5/d));

////////////////////////////////////////////////

// let name = "Algoritm";

// console.log(name.length);
// console.log(name.charAt(0));
// console.log(name.charAt(6));
// console.log(name.at(-5));

// let a = "Eshmat ";
// let b = "Toshmat ";
// let c = "Gulmat";
// console.log(a + b + c);
// console.log(a.concat(b, c));

// console.log(name.includes("or"));

// let text = "Lorem ipsum dolor sit amet."

// console.log(text.startsWith("Lorem ipsum do"));
// console.log(text.endsWith("lor sit amet."));

// let tel = "+998 99 999 99 99"
// console.log(tel.startsWith("+998"));

// let email1 = "eshmat@gmail.com"
// let email2 = "eshmat@yandex.ru"

// console.log(email1.endsWith("@gmail.com"));
// console.log(email2.endsWith("@gmail.com"));

// let text = "Lorem ipsum L dolor sit amet."

// console.log(text.search("L"));
// console.log(text.search(/D/i));

// console.log(text.indexOf("L", 1));
// console.log(text.lastIndexOf("L", 25));

// let brend = "Algoritm"

// console.log(brend.padEnd(11, " IT"));

// let tel = "93 999 99 99"
// console.log(tel.padStart(tel.length + 5, "+998 "));

// ----------------------------------------------------------------------

// let str = "Algoritm "
// console.log(str.repeat(5));

// let str = "Gol"
// let newStr = str[0] + str[1].repeat(5) + str[2]
// console.log(newStr);

// let str = "Algoritm yoki Oxford"
// str = str.replace("O", "A")
// str = str.replace("yoki", "va")
// console.log(str);

// let str = "Algoritm va Oxford"
// str = str.replace("or", "ar")
// str = str.replaceAll("or", "ar")
// console.log(str);

// let str = "Al,go,ri,tm,"
// str = str.replace(",", "")
// str = str.replaceAll(",", "")
// console.log(str);

// let str = "Men bugun JS darsini o'rganmoqdaman."
// let copy = str.slice("BeginningIndex", "EndingIndex")
// let copy = str.slice(10,12)
// let copy = str.slice(0,13).concat(str.slice(21, 36))
// console.log(copy);
// console.log(str.replace("darsini", ""));

// let str = "Algoritm va Oxford"
// let a = str.slice(0,8)
// let b = str.slice(12)
// str = b.concat(" va ", a)
// str = b + " va " + a
// console.log(str);

// let str = "Algoritm va Oxford"
// let copy1 = str.slice(-1)
// console.log(copy1);
// let copy2 = str.slice(-1)
// console.log(copy2);