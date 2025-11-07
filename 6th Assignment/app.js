// chap 18-19 //

// CHAP 18 //
// Q1 //
let fruits = ["Apple", "Mango"];
fruits.push("Banana");
console.log(fruits);


// Q2 //
let fruiTs = ["Apple", "Mango", "Banana"];
fruits.pop();
console.log(fruiTs);

// Q3 //
let colors = ["Blue", "Green"];
colors.unshift("Red");
console.log(colors);

// Q4 //
let color = ["Red", "Blue", "Green"];
colors.shift();
console.log(color);

// Q5 //
let boys = ["Ali", "Ahmed"];
let girls = ["Sara", "Hina"];
let students = boys.concat(girls);
console.log(students);

// CHAP 19 //

// Q1 //
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// Q2 //
let frUits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(frUits[i]);
}

// Q3 //
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Q4 //
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Q5 //
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("Sum =", sum);

