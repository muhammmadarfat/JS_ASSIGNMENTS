// chapter 9 to 11

// Q1

let city = prompt("Enter your city name");
if (city == "karachi") {
    alert("Welcome to The City of Lights")
}
//  Q2


let gender = prompt("Enter Your Gender (male/female):")



if (gender == "male") {
    alert("Good Morning Sir");
}
else  {
    alert("Good Morning Mam");
}


// Q3


let colorTrafficLight = prompt("Enter Your Signal Color (red,yellow,green):")
if (colorTrafficLight == "red") {
    alert("Must Stop")
}
else if (colorTrafficLight == "yellow") {
    alert("Ready to Move")
}
else if (colorTrafficLight == "green") {
    alert("Move Now")
}

// Q4 


let carFuel = prompt("Enter the fuel in your car ")
if (carFuel<"0.25") {
    alert("Please refill the fuel in your car")
}



// Q5 



let f = 4;
if (++f===5) {
    alert("given condition for variable is true")
}
let g = 82;
if (g++===83) {
    alert("given condition for variable b is true")
}
let h = 12;
if  ( h++===13) {
    alert("condition 1 is true")
}
let m = 13;
if  ( m===13) {
    alert("condition 2 is true")
}
if (++m<14) {
    alert("condition 3 is true")

}
if (m === 13 ) {
    alert("condition 4 is true")
}

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost===laborCost+materialCost) {
    alert("The costs Equals")
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("Car is smaller than cat")
}

// Q6


let sub1 = Number(prompt("Enter your Math No"))
let sub2 = Number(prompt("Enter your English No"))
let sub3 = Number(prompt("Enter your Urdu No"))
let totalMarks = 300
let marksobtained = sub1 + sub2 +sub3
document.writeln("Total Marks = " + totalMarks, "<br>")
document.writeln("Marks Obtained = " + marksobtained , "<br>")
let percentage = (marksobtained/totalMarks ) *100
let x = 80
let y = 70
let i = 60
if (percentage>=x ) {
    document.writeln(    "percentage= " + percentage , "<br>" )
    document.writeln("Grade= A"  , "<br>")
    document.writeln("Remarks= Excellent")
}
else if (percentage>=y ) {
    document.writeln(    "percentage= " + percentage , "<br>" )
    document.writeln("Grade= B"  , "<br>")
    document.writeln("Remarks= You Need To Improvement")
}
if (percentage>=i ) {
    document.writeln(    "percentage= " + percentage , "<br>" )
    document.writeln("Grade= c"  , "<br>")
    document.writeln("Remarks= One sheet of Paper Can't decide your future")
}

// Q7


let secretNo = 7
let userGuess = prompt("Guess the secret NO (1 to 10)")
if (userGuess==7) (
    alert("Bingo! Correct Answer")
)
else (userGuess<7 && userGuess>=8)
 {
    alert("You are so close")
}


// Q8


let userdivnum = +prompt("Enter Your Number to divide by 3 ")
if (userdivnum % 3  ===  0) {
    alert("Your number is divisible by 3")
} else {false} (
    alert("Your number is not divisible by ")
)

//  Q9



var even_odd = prompt("Enter your even or odd number")
if (even_odd%2 === 0) {
    console.log(even_odd, "This is even Number")

}else {
    console.log(even_odd , "This is odd Number")
}



// Q10


let temperature = prompt("Enter the Temperature Number")
if (temperature >= 40) {
    alert("It is too Hot Outside")
}else if (temperature >=30 ) {
    alert("The weather today is normal")
}else if (temperature >=20) {
    alert("Today's weather is cool")

}else if (temperature>=10) {
    alert("OMG! Today's weather is soo coll")
}



// Q11


let add1 = +prompt("Enter First number")
let add2 = +prompt("Enter Second number")
let operator = add1 + add2;
let operator2 = add1 - add2;
let operator3= add1 * add2;
let operator4 = add1 / add2;
let operator5 = add1 % add2;


console.log(operator)
console.log(operator2)
console.log(operator3)
console.log(operator4)
console.log(operator5)



// chaprer 12 to 13


// Q1


let A = prompt("Enter you number Upper case")
let Z = prompt("Enter you number Upper case")
let j = prompt("Enter you number lower case")
let z = prompt("Enter you number lower case")
if (A=>70) {
    alert("Your number is upper case letter A")
}else if (Z=>90) {
    alert("Your number is upper case letter Z")
}else if (j=>97) {
    alert("Your number is lower case letter a")
}else if (z=>122) {
    alert("Your number is lower case letter z")
}
 
// Q2


let a = +prompt("Enter the  first numbers I will give you the message which one is larger")
let b = +prompt("Enter the  second numbers I will give you the message which one is larger")
if (a === b ) {
    alert("Both are equal")
}else if (a > b) {
    alert("First one is larger")
}else {a < b } (
    alert("Second one is larger")
)



// Q3


let d = 0
let  c = +prompt("Enter the number I will answer you this is posisitive , negative or zero.")

if ( c > 0 ) {
    alert(" YOur number is positive")
} else if ( c < 0 ) {
    alert("Number is Negative")
}else { c = 0 } (
    alert("Your Number is equal to zero")
)


// Q4

let  userValue = prompt("Enter you Value")[0];

let vowel_a = "a"
let vowel_e = "e"
let vowel_i = "i"
let vowel_o = "o"
let vowel_u = "u"


if ( userValue == vowel_a) {
    alert("This is a vowel")
} else if ( userValue == vowel_e) {
    alert("This is a vowel")
} else if ( userValue == vowel_i) {
    alert("This is a vowel")
} else if ( userValue == vowel_o) {
    alert("This is a vowel")
} else if ( userValue == vowel_u) {
    alert("This is a vowel")
}


// Q5

let userPassword = prompt("Enter your Password")
let correctPassword = ("1234")

if ( userPassword === correctPassword  ) {
    alert(" Correct Password")
}else if (userPassword && correctPassword) {
    alert("Incorrect Password")
}else {
    alert("Please enter your password")
}


// Q6


var greeting;
var hour = +prompt("Enter the Number")
if ( hour < 18) {
    console.log("Greeting Good day ")
}else (
    console.log("Greeting Good Evening")
)

// Q7



let time = +prompt("The the Time Value Here")
if ( time >= 0 && time < 1200)
{
    console.log("Good Morning")
}else if (time >= 1200 && time < 1700 ) {
    console.log ("Good Afternoon")
}else if (time >= 1700 && time < 2100 ) {
    console.log("Good Evening")
}else {time >= 2100 && time < 2349} (
    console.log("Good Night")
)





















































































































































































































