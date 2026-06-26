// let str = "ali"
// console.log(str[0].toUpperCase() + str.slice(1));

// let str = "s1a5l7o9m";
// let yigindi = 0;
// for (let value of str) {
//   if (isNaN(value)) yigindi += value.charCodeAt();
// }
// console.log(yigindi);
// let str = "s1a5l7o9m";
// let newStr = "";
// let newStr2 = "";
// for (let value of str) {
//   if (isNaN(value)) newStr += value;
//   else newStr2 += value;
// }
// newStr = newStr.concat(newStr2);
// console.log(newStr);

// let str = "Men Algoritm IT Markazida WEB sohasida O'qimoqdaman!";
// if (str.startsWith("Men") && str.endsWith("man!") && str.includes("WEB")) {
//   console.log(true);
// } else console.log(false);

// 1-usul:
// let str = "ALGORITM IT CENTER"
// str = str.toLowerCase()
// let a = str.split(" ");
// let newStr = "";
// for (let value of a) {
//   newStr = newStr + value[0].toUpperCase() + value.slice(1) + " ";
// }
// console.log(newStr);
// 2-usul:
// let str = "ALGORITM IT CENTER"
// let a = str.split(" ");
// let newStr = "";
// for (let value of a) {
//   newStr += value[0] + value.slice(1).toLowerCase() + " ";
// }
// console.log(newStr);