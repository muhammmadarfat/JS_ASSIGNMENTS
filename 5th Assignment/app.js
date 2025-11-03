
//  chapter 14 to 16 //

let student = []
student.push("Kashif", "Arfat", "Ahmed", "Aman")
console.log(student)

let number= [1,2,3,4,5]
console.log(number)

let boleanArray = [true,"karachi" , "Islamabad"]
console.log(boleanArray)

let mixArray = [true,"karachi", "Ahmed", 5 ]
console.log(mixArray)

let eduArray = ["SSC ", "HSC", "BCS", "BS", "CS", "PHD","BCOM"]
console.log(eduArray)



let stu = ["Ahmed", "Arfat", "Saad"];

let obtMarks = [280, 190, 460]
let per1 = (obtMarks[0] / 500) * 100 
let per2= (obtMarks[1] / 500) * 100
let per3= (obtMarks[2] / 500) * 100


console.log("Score of ",stu[0],obtMarks[0],". Percentage is ",per1,"%");
console.log("Score of ",stu[1],obtMarks[1],". Percentage is ",per2,"%");
console.log("Score of ",stu[2],obtMarks[2],". Percentage is ",per3,'%');

let colorArray = ["Red ", "Green", "Blue"]
console.log(colorArray)
let userAddStart= prompt("Enter the color  in the start")
colorArray.unshift(userAddStart)
console.log(colorArray)
let userAddEnd = prompt("Enter the color  in the end")
colorArray.push(userAddEnd)
console.log(colorArray)
colorArray.splice("red","lightblue")
console.log(colorArray)
colorArray.shift(0)
console.log(colorArray)
colorArray.pop()
console.log(colorArray);

colorArray.splice(0,3,"yellow")
console.log(colorArray);


let stuMarks = [120,230,320,480]
console.log("Scores of Student:" , stuMarks)

console.log("Order Scores of Students:", stuMarks )

let cityNames = ["karachi", "lahore", "Islamabad", "Quetta ", "Peshawar"]
console.log("City list Names:",cityNames)
let selectedCity = ["Islamabad" , "Quetta"]
console.log("Selected city Names:", selectedCity)

let joinArray = ["cat","dog","parrot"]
joinArray.join(joinArray)
console.log(joinArray)

let fifo = ["keyboard" , "Mouse", "printer", "monitor"]
console.log(fifo)
fifo.pop()
console.log(fifo)
fifo.shift()
console.log(fifo)
console.log(fifo)
fifo.pop()
console.log(fifo)
fifo.shift()
console.log(fifo)


let lifo = ["keyboard","Mouse","Printer","Monitor"]
console.log(lifo)
lifo.pop()
console.log(lifo)
lifo.pop()
console.log(lifo)
lifo.pop()
console.log(lifo)
lifo.pop()
console.log(lifo)


let dropdown = [`
    <select >
        <option >Samsung</option>
        <option >Iphone</option>
        <option >Motrola</option>
        <option >Sony</option>
        <option >Redmi</option>
        <option >Realme</option>
    </select>`]
    document.writeln(dropdown)
    