console.log("Hello world!");


let ram = new Date("15 feb 2026")

console.log("Date of 1st Ramzan",ram);

ram = ram.getTime()
console.log(ram);

let current = new Date()
console.log("Current Date ",current);

current = current.getTime()
console.log(current);


let timeRem = ram - current
console.log(timeRem);
// a //
let days = Math.round (timeRem / (1000*60*60*24))
console.log("Days remainig in ramzan are:",days);

// b //
let month  = Math.round (timeRem / (1000*60*60*24*30))
console.log("Months remainig in ramzan are:",month);

// b //
let week = Math.round(timeRem / (1000*60*60*24*7))
console.log("Weeks remainig in ramzan are:",week);





