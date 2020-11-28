 /*alert('hello world my Alisha')
 var x = 5;
var y = 2;
//var z = x * y;document.write(z);
function displayDate() {
    document.getElementById("time").innerHTML = Date();
  }

document.getElementById('A').innerHTML = ""

  // 1. Ways to print in JavaScript
console.log("Hello World");
alert("me");
document.getElementById('A').innerHTML = "hey Alisha <br> <b> how are you"
// 2. Javascript console API
document.getElementById('demo2').innerHTML = "Hello World"
 console.warn("this is warning");
 console.error("This is an error");

// 3. JavaScript Variables
// What are Variables? - Containers to store data values

/*
multi 
line 
commment


var number1 = 34;
var number2 = 56;
//document.getElementById("demo2").innerHTML = number1 + number2

// 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
   marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
console.log('demo2');

// Booleans
var a = true;
var b = false;
 console.log(a, b);

// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);
/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2, "bablu", 4, 5]
console.log(arr)

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
 //console.log(x == y);
//console.log(x >= y);
 //console.log(x <= y);
 //console.log(x > y);
 //console.log(x < y);

// Logical Operators

 //Logical and
 //console.log(true && true)
 //console.log(true && false)
// console.log(false && true)
 //console.log(false && false)

// Logical or
 //console.log(true || true)
 //console.log(true || false)
 ///console.log(false || true)
 //console.log(false || false)

// Logical not
//console.log(!false);
//console.log(!true);

// Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
} 

// DRY = Do not repeat yourself
c1 = avg(4, 7);
c2 = avg(14, 16);
 console.log(c1, c2);

// Conditionals in JavaScript

// var age = 68;
// Single if statement
//if(age > 18){
   // console.log('You can drink rasna water');
//}
// if - else statement
//if(age > 18){
//     console.log('You can drink rasna water');
// }
 //else{
    //console.log('You cannot drink rasna water');
 // }

var arr = [1, 2, 3, 4, 5, 6, 7];
 console.log(arr);
 for(var i=0;i<arr.length;i++)
    if(i==5)
 
 console.log(arr[i])
 
 arr.forEach(function(element){
     console.log(element);
 })
let myArr = ["Fan", "Camera", 34, null, true];
 //Array Methods
 console.log(myArr.length);
 //myArr.pop();
 console.log(myArr.push("Alex",'Alisha'))
 myArr.shift()
 const newLen = myArr.unshift("Bill gate")
 console.log(newLen);
 console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "New york is a good city good  New york";
 console.log(myLovelyString.length)
 console.log(myLovelyString.indexOf("New"))
 console.log(myLovelyString)

 console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("New york", "Alisha");
 d = d.replace("good", "bad");
 console.log(d, myLovelyString)

let myDate = new Date();
console.log(myDate.getTime());
 console.log(myDate.getFullYear());
console.log(myDate.getDay());
 console.log(myDate.getMinutes());
 console.log(myDate.getHours());

// Selecting using Query
sel = document.querySelector('demo2')
 console.log(sel)
 sel = document.querySelectorAll('container')
console.log(sel)

 function clicked(){
//console.log('The button was clicked')
 }
 window.onload = function(){
     //console.log('The Alisha was loaded')

 }
function clicked(){
     console.log('The button was clicked')
}

 //window.onload = function(){
         // console.log('The document was loaded')

         var myObj, x;
         myObj = { name: "John", age: 30, city: "New York" };
         x = myObj.name;
       //  document.getElementById("demo2").innerHTML = x;var myObj, x;


         function showHint(str) {
             var xhttp;
             if (str.length == 0) { 
               document.getElementById("txtHint").innerHTML = "";
               return;
             }
             xhttp = new XMLHttpRequest();
             xhttp.onreadystatechange = function() {
               if (this.readyState == 4 && this.status == 200) {
                 document.getElementById("txtHint").innerHTML = this.responseText;
               }
             };
             xhttp.open("GET", "gethint.php?q="+str, true);
             xhttp.send();   
           }
         
 
 function myFunction() {
 var txt;
 var person = prompt("Please enter your name:", "Harry Potter");
if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
   txt = "Hello " + person + "! How are you today?";
 }
 document.getElementById("demo").innerHTML = txt;
// Events in JavaScript

    

  
// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
 
// SetTimeout and setinterva
 //clr = setInterval(A, 1);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
 localStorage.setItem('name', 'harry') 
// localStorage 
 localStorage.getItem('name')
// localStorage.removeItem('name')
 localStorage.clear();
// jeson
 obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
 jso = JSON.stringify(obj);
 console.log(typeof jso)
 console.log(jso)
  
// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)
 }
 
 // new js
 /*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

/*Remove menu mobile*/
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 