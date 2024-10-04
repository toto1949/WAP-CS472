"use strict";

let user = { name: "Taoufiq", years: 25 };

let { name, years: age, isAdmin = false } = user;

console.log(name);    
console.log(age);     
console.log(isAdmin); 