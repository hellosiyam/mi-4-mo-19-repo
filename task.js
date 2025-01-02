// <-----------------Object---------------->
// Task-1
// const color={
//     red:"#ff0000",
//     green:"#00ff00",
//     bkue:"#0000ff",
//     "golden rod":"#daa520"
// }
// console.log(color["golden rod"]);

// Task-2
// const car ={
//     make: "Toyota",
//     model: "Corolla",
//     year: "2020",
// }
// car["passenger capacity"]=5
// console.log(car);

// Task-3
// const student={
//     name:"Hamim Sakep",
//     id: 5421,
//     physics:{
//         subject: "HSC physics",
//         author: "Shahjahan Tapan",
//         marks: 30,
//     }
// };
// console.log(student.physics.marks);

// Task-4
// const student = {
//     name: "Ariana Grande",
//     age: 21,
//     city: "Gaibandha",
//     isStudent: true,
// };
// const count = Object.keys(student).length;
// console.log(count);

// Task-5
// const myObject = {
//     name : "Siyam",
//     age: 25,
//     city : "Dhaka",
//     isStudent : true,
// }

// for(key in myObject){
//     console.log(`Keys: ${key} | Type: ${typeof myObject[key]}`);
    
// }

// const myObject = {
//     name: "siyam",
//     age: 25,
//     city: "Dhaka",
//     isStudent: true
// }
// for(const key in myObject){
//     console.log("Key:",key, "|", "Types:",typeof myObject[key]);
    
// }

// <---------------String-------------->
// Task-1
// let inputStr='Count how many times a string has the letter a'
// let count=0
// for(let i=0; i < inputStr.length; i++){
//     if (inputStr[i]==='a') {
//         console.log(inputStr[i]);
//         count++
        
//     }
// }
// console.log(count);

// let inputStr="Count how many times a string has the letter a"
// let count=0;
// for (let i= 0; i < inputStr.length; i++) {
//     if (inputStr[i]==="a") {
//         console.log(inputStr[i]);
//         count++
//     }
    
// }
// console.log(count);

// Task-1
// let inputStr="Count How many times a steing has the letter a"
// let count=0;
// for (let i = 0; i < inputStr.length; i++) {
//     if (inputStr[i]==="a") {
//         console.log(inputStr[i]);
//         count++
//     }
// }
// console.log(count);

// let inputStr = "Count how many times a string has the letter a"
// let count = 0;
// for (let i = 0; i < inputStr.length; i++) {
//     if (inputStr[i]==="a") {
//         console.log(inputStr[i]);
//         count++
//     }
// }
// console.log(count);

// let inputStr = "Count How many times Uses a in the array a";
// let count = 0;
// for (let i = 0; i < inputStr.length; i++) {
//     if (inputStr[i]==="a") {
//         console.log(inputStr[i]);
//         count++
//     } 
// }
// console.log(count);

// Task-2
// let inputStr = "Count How Many times a use in The Array"
// let count = 0;
// for (let i = 0; i < inputStr.length; i++) {
//     if (inputStr[i]==="a" || inputStr[i]==="A") {
//         console.log(inputStr[i]);
//         count++
//     }
// }
// console.log(count);

// let inputStr = "Count The a Latter in the Array"
// let count = 0;
// for (let i = 0; i< inputStr.length; i++) {
//     if (inputStr[i] === "a" || inputStr[i] ==="A") {
//         console.log(inputStr[i]);
//         count++
//     }
// }
// console.log(count);

// Task-3















// Task-4
// let inStr='eXample with x and X'
// let resultStr=""
// for(let i=0; i <inStr.length; i++)
//     if (inStr[i]==='x') {
//         resultStr==='y'
//     }
//     else{
//         if (inStr[i]==='X') {
//             resultStr==='Y'
//         }
//         else{
//             resultStr+=inStr[i]
//         }

//     }
//     console.log(resultStr);

// Task-5
const sentence='capitalize every first letter of each word in a string'


let capitalizeString=(str)=> str[0].toUpperCase() + str.slice(1).toLowerCase();

let capitalizeWords=(str)=> str.split(' ').map(capitalizeString).join(' ')

console.log(capitalizeWords(sentence));