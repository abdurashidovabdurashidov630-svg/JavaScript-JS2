let text = "olma,banan,shaftoli,anor";
console.log(text.split(","));

let text2 = "JavaScript juda qiziqarli til";
console.log(text2.split(" "));

let fruits = ["olma", "banan", "anor"];
console.log(fruits.join("-"));

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.join("*"));

let nums1 = [1, 2, 3, 4, 5];
console.log(nums1.reverse());

let letters = ["a", "b", "c", "d"];
console.log(letters.reverse());

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));

let boys = ["Ali", "Vali"];
let girls = ["Malika", "Dilnoza"];
console.log(boys.concat(girls));

let nums2 = [10, 20, 30, 40, 50, 60];
console.log(nums2.slice(2, 5));

let fruits1 = ["olma", "banan", "anor", "shaftoli", "uzum"];
console.log(fruits1.slice(0, 3));

let nums3 = [1, 2, 3, 4, 5];
nums3.splice(2, 1);
console.log(nums3);

let fruits2 = ["olma", "banan", "anor"];
fruits2.splice(1, 1, "shaftoli");
console.log(fruits2);

let colors = ["qizil", "yashil", "ko'k"];
colors.splice(2, 0, "sariq");
console.log(colors);

let word = "JavaScript";
let teskari = word.split("").reverse().join("");
console.log(teskari);

let nums4 = [1, 2, 3, 4, 5, 6];
let result = nums4.slice(0, 2).concat(nums4.slice(4, 6));
console.log(result);