console.log("Hello world!");

console.log("---------Chap(31-34)-----------");

// ques 1 //


let date = new Date()
console.log(date);


// ques 2 //

let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

let now = new Date()

let currentMonth = now.getMonth()
console.log(currentMonth);

currentMonth = month[currentMonth]
 console.log(currentMonth);
 
 // ques 3 //

let days1 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
now = new Date()

let today = now.getDay()
let days2 = days1[today]

days2 = days2.slice(0,3)
console.log(days2);

// ques 4 //
// ans 4 //
let days = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
now = new Date()
let dayToday = now.getDay()

dayToday = days[dayToday]
console.log(dayToday);

if(dayToday == "Sat" || dayToday == "Sun"){
    console.log("It's a fun day !");
    
}


// ques 5 //

now  = new Date()

let dates = now.getDate()
console.log(dates);

if(dates <=15){
    console.log("First fifteen days of the month");
    
}else{
      console.log("last fifteen days of the month");
}


// ques 6 //
// ans 6 //

now = new Date()
let milli = now.getTime()
console.log("Elasped milliseconds since January 1,1970:",milli);
milli =Math.round(milli / 60)
console.log("Elasped minutes since January 1,1970:",milli);

// ques 7 //
// ans 7 //
now = new Date()
let currentHour = now.getHours()
console.log(currentHour);

if(currentHour <=11){
    console.log("It's AM");
    
}else if (currentHour >=12 && currentHour <=23){
    console.log("It's PM");
    
}




// ques 8 //
// ans 8 //
now = new Date("31 dec 2020")
let laterDate = now
console.log(laterDate);

// ques 9 //
// ans 9 //
now = new Date()
let current = now.getTime()
// console.log(current);

let year2015 = new Date("18 june 2015")
let milliOF2015 = year2015.getTime()
// console.log(milliOF2015);
let total = current - milliOF2015
// console.log(total);
total = Math.round(total / (1000*60*60*24))
console.log(`The days passed since 1 Ramzan 2015 is:`,total);

// ques 10 //
// ans 10 //
let beg = new Date("1 janunary 2015")
// console.log(beg);
beg = beg.getTime()
let end = new Date("05 dec 2015 22:50:16")
let milli2015 = end.getTime()
// console.log(end);
let totalSinceBeg = (milli2015 -beg) / 1000
console.log(`On refrence date ${end}${totalSinceBeg} seconds had passed since the beginning of 2015`);

// ques 11 //
// ans 11 //
let currentTime = new Date()
console.log(currentTime);

let hourAgo = new Date(currentTime)

hourAgo.setHours(hourAgo.getHours()-1)
console.log("1 hour ago the time was --->",hourAgo);

// ques 12 //
// ans 12 //
currentTime = new Date()
console.log(currentTime);
let yearsAgo = new Date(currentTime)
yearsAgo.setFullYear(yearsAgo.getFullYear()-100)
console.log("100 years ago the year  was --->",yearsAgo);

 //ques 13 //
 
 let userAge = prompt("Enter your Age")
 let currentYear = new Date().getFullYear()
 console.log(currentYear);
let birthYear = currentYear - userAge
 console.log("Your birth year is :",birthYear);

// ques 14 //

month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let cusName = "Muhammad Arfat"
console.log("Customer Name --->",cusName);

let monthCurr = new Date().getMonth()
console.log("Current Month --->",month[monthCurr]);

let noOfUnits = 410
console.log("Number of units --->",noOfUnits);

let chargesPerUnit = 16
console.log("Charges per  units --->",chargesPerUnit);

let netPayAmount = noOfUnits * chargesPerUnit
console.log("Net payable amount (within due date) --->",netPayAmount);

let latePaySurcharge = 350
console.log("late Payment surcharge --->",latePaySurcharge);

let grossAmount = netPayAmount + latePaySurcharge
console.log("Gross payable amount (after due date) --->",grossAmount)


 //           end            //