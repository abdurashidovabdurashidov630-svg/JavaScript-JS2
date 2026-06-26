let str1 = " 144 ";
let a = Math.sqrt(parseInt(str1.trim()));
console.log(a);

let str2 = "7.89";
let b = Math.floor(parseFloat(str2)).toString();
console.log(b);

let str3 = "-25";
let c = Math.abs(parseInt(str3)).toString();
console.log(c);

let str4 = "javascript";
let d = str4[0].toUpperCase() + str4.slice(1);
console.log(d);

let str5 = "81";
let e = Math.sqrt(parseInt(str5)).toString().repeat(2);
console.log(e);

let str6 = "frontend";
let f = Math.pow(str6.length, 2);
console.log(f);

let str7 = "125";
let g = Math.cbrt(parseInt(str7)).toString();
console.log(g);

let str8 = "React JS";
let h = str8.replace(" ", "_").toUpperCase();
console.log(h);

let str9 = "15.51";
let i = Math.round(parseFloat(str9)).toString();
console.log(i);

let str10 = "HTML,CSS,JS";
let j = str10.split(",").length;
console.log(j);

let str11 = "49";
let k = Math.pow(Math.sqrt(parseInt(str11)), 2);
console.log(k);

let str12 = "backend";
let l = str12.at(-1).toUpperCase();
console.log(l);

let str13 = "  36.9  ";
let m = Math.ceil(parseFloat(str13.trim()));
console.log(m);

let str14 = "apple banana apple";
let n = str14.replaceAll("apple", "orange");
console.log(n);

let str15 = "-64";
let o = Math.sqrt(Math.abs(parseInt(str15)));
console.log(o);

let str16 = "hello";
let p = str16.repeat(3).length;
console.log(p);

let str17 = "100";
let q = Math.sign(parseInt(str17));
console.log(q);

let str18 = "JavaScript";
let r = str18.slice(4).toUpperCase();
console.log(r);

let str19 = "5.678";
let s = Math.ceil(parseFloat(parseFloat(str19).toFixed(1)));
console.log(s);

let str20 = " 256 ";
let t = Math.floor(Math.cbrt(Math.sqrt(parseInt(str20.trim()))));
console.log(t);