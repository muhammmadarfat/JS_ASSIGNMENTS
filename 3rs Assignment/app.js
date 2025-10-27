
var firstname =prompt( "Enter your first Name")
var lastname =prompt( "Enter your last Name")
var fullname = firstname + "  "+lastname
console.log("Enter your full Name" , fullname)
var num = "Anonymous"
var num1 = "ustad"
var fullname = num + num1
console.log("Full Name ===>", fullname)
var num = 3
var num1 = 5
var number = num + num1
num
console.log(number)
console.log(num)
// chapter 6
// Q1

document.writeln("<h1>Result</h1>")
var a = 10



document.writeln("The value of a is:", a, "<br>", "<br>", "The value of ++a is: ", ++a, "<br>", "<br>",
    "Now the value of a is:", a, "<br>", "<br>", "<br>", " the value of a++ is:", a++, "<br>", "<br>",
    "Now the value of a++ is:", a, "<br>", "<br>", "<br>", "The value of a-- is:", --a, "<br>", "<br>",
    "Now the value of a is:", a, "<br>", "<br>", "<br>", "The value of a-- is:", a--, "<br>", "<br>",
    "Now the value of a is:", a
)
// Q2
var b = 2
var c = 1
console.log("b is" ,b)
console.log("c is " ,c)
var result = --b - --c + ++b + b--
console.log( "Result==>", result)
// Q3
let tableNum = prompt("Enter table number" ,5)
document.writeln("<h1>Tables</h1>","<br>","<br>","<br>","<br>")
document.writeln( tableNum , "x" ,1 ,"=" , tableNum *1 ,"<br>")
document.writeln( tableNum , "x" ,2 ,"=" , tableNum *2 ,"<br>")
document.writeln( tableNum , "x" ,3 ,"=" , tableNum *3 ,"<br>")
document.writeln( tableNum , "x" ,4 ,"=" , tableNum *4 ,"<br>")
document.writeln( tableNum , "x" ,5 ,"=" , tableNum *5 ,"<br>")
document.writeln( tableNum , "x" ,6 ,"=" , tableNum *6 ,"<br>")
document.writeln( tableNum , "x" ,7 ,"=" , tableNum *7 ,"<br>")
document.writeln( tableNum , "x" ,8 ,"=" , tableNum *8 ,"<br>")
document.writeln( tableNum , "x" ,9 ,"=" , tableNum *9 ,"<br>")
document.writeln( tableNum , "x" ,10 ,"=" , tableNum *10 ,"<br>")

// Q4 to Q6
var subject1 = prompt("Enter First Subject name:");
var subject2 = prompt("Enter Second Subject name:");
var subject3 = prompt("Enter Third Subject name:");

var totalMarks = 100
var mark1 = Number(prompt("Enter Obtained marks for  " + subject1 + ":"))
var mark2 = Number(prompt("Enter Obtained marks for  " + subject2 + ":"))
var mark3 = Number(prompt("Enter Obtained marks for  " + subject3 + ":"))

var totalObtained = mark1 + mark2 + mark3;
var percentage = (totalObtained / (totalMarks * 3)) * 100;
document.writeln("<h2>Marks Sheet </h2>")
document.writeln("<table border='1'  cellspacing='0' cellpadding='8'>")
document.writeln("<tr><th>Subject</th><th>Total Marks </th> <th> Obtained Marks </th> <th> Percentage </th></tr>");
document.writeln("<tr><td>" +subject1 + "</td>  <td>" + totalMarks + "</td> <td>" + mark1 + "</td> <td>"  + ((mark1/totalMarks)*100).toFixed(2) + "%</td></tr>")
document.writeln("<tr><td>" +subject2 + "</td>  <td>" + totalMarks + "</td> <td>" + mark2 + "</td> <td>"  + ((mark2/totalMarks)*100).toFixed(2) + "%</td></tr>")
document.writeln("<tr><td>" +subject3 + "</td>  <td>" + totalMarks + "</td> <td>" + mark3 + "</td> <td>"  + ((mark3/totalMarks)*100).toFixed(2) + "%</td></tr>")


document.writeln("<tr> <th> Total </th> <th> " + totalObtained + "</th> <th>" + percentage.toFixed(2) + "% <th> </tr>");
document.writeln("</table>")

