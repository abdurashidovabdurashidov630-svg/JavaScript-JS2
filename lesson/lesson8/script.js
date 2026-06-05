// let str = "biz bugun algoritmda js darsini o'rganmoqdamiz.";
// let data = str.split(" ");
// let newStr = "";
// for (let value of data) {
//   newStr = newStr + value[0].toUpperCase() + value.slice(1) + " ";
// }
// console.log(newStr);

// let str = "Men Alg0r1tm 1t marka1da 0'q1yapman!";
// let obj = {
//   num: "",
//   char: "",
//   symbol: "",
// };
// for (let value of str) {
//   if (!isNaN(value) && value !== " ") obj.num += value;
//   else if (
//     (value.charCodeAt() >= 65 && value.charCodeAt() <= 90) ||
//     (value.charCodeAt() >= 97 && value.charCodeAt() <= 122)
//   )
//     obj.char += value;
//   else obj.symbol += value;
// }
// console.log(obj);

// let text = "Rerum voluptatibus, esse qui maiores in enenient.";
// let result = "";
// for (let value of text) {
//   if (
//     (value.charCodeAt() >= 65 && value.charCodeAt() <= 90) ||
//     (value.charCodeAt() >= 97 && value.charCodeAt() <= 122)
//   ) {
//     if (value.charCodeAt() % 2) result += value;
//   } else result += value;
// }
// console.log(result);