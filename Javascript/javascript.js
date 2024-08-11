// console.log("Hello World!");
// fullname = "Priya Chaurasia";
//age=20;
// console.log(fullname); //Priya Chaurasia
// console.log("fullname"); ///fullname
//console.log(age);
//price = 98.3;
// console.log(price);
// x = null;
// console.log(x);
// y = undefined;
// console.log(y);
// isFollow = false;
// console.log(isFollow);
// isFollow = true;
// console.log(isFollow);
// Variable Keywords:var,let,const
//var : variable can be re-declared and updated too.
// var age=12;
// var age=19;
// var age=20;
// console.log(age);
//let: variable cannot re-declared but can be updated.
// let full_Name = "tony stark";
// let age = 24;
// age = 25;
// console.log(full_Name);
// console.log(age);
//const:variable cannot be re-declared and updated
// const PI = 3.14;
// console.log(PI);
// {
//   let a = 5;
//   //let a=6;:You cannot re-declared the variable but can update the value
//   console.log(a);
// }
//console.log(a);"ERROR a not declared"
// {
//   let a = 10;
//   console.log(a);
// }
//Object is the collection of values.
//Here student is the object
//typeof(student):object
//let:update is possible
//const:update not possible
//const obj:can change/update the key
// const student = {
//   fullName: "Rahul Kumar",
//   age: 20,
//   cgpa: 8.2,
//   isPass: true,
// };
// console.log(student);
// console.log(student["fullName"]); //use quotes
// console.log(student.fullName); //Donot use quotes
// student["age"] = student["age"] + 1;
// console.log(student.age);
// // Let's Practice::
// const product = {
//   name_of_pen: "Parker Jotter Standard CT Ball Pen (Black)",
//   rating: 4,
//   offer: 5,
//   price: 270,
// };
// console.log(product);
// console.log(typeof product);

// const profile = {
//   user_Name: "shradhakhapra",
//   post: 195,
//   followers: 569,
//   following: 4,
//   isFollow: true,
//   info: "Apna College",
//   bio: "To eduacte someone is the highest privilege",
// };
// console.log(profile);
// console.log(typeof profile);
// console.log(typeof profile["followers"]);

// Day-2:Operator and Conditional Statements:
// Comments:comments are the part of code which is not executed.
//There are two types of comments :single (//)and multi line comment(/**/)

//Arithmetic Operators
// let a = 5;
// let b = 2;
// console.log("a+b = ", a + b);
// console.log("a-b = ", a - b);
// console.log("a*b = ", a * b);
// console.log("a/b = ", a / b); //Gives in float way
// console.log("a%b = ", a % b);
// console.log("a^b = ", a ** b);

// //Unary Operator
// let c = 5;
// let d = 2;
// c++;
// d++;
// console.log(c);
// console.log(d);
// c--;
// d--;
// console.log(c);
// console.log(d);
// //Post increment and pre increment:(Similar Post and pre decrement)
// let e = 20;
// console.log(e++); //20
// console.log(e); //21
// console.log(++e); //22
// console.log(e); //22

// //Assignment Operator
// let first = 5;
// let second = 10;
// first += second;
// console.log(first);
// first -= second;
// console.log(first);
// first *= second;
// console.log(first);
// first /= second;
// console.log(first);
// first %= second;
// console.log(first);
// first **= second;
// console.log(first);

// //Comparison
// console.log(first == second); //false
// console.log(first != second); //true
// first = 5;
// second = "5";
// //If we use == then it will give true that is 5=="5" but both data type are different therfore use ===
// console.log(first === second); //false
// console.log(first !== second); //true

// //Logical Operator
// let aaa = 6;
// let bbb = 5;
// let cond1 = aaa > bbb;
// let cond2 = aaa === bbb;
// console.log(cond1 && cond2); //false
// console.log(cond1 || cond2); //true
// console.log(!cond1); //false

// //Syntax:Means rule of javascript
// //Conditional Statements:To implement some condition in the code

// //If Statement
// //Person can vot or not
// let age_ = 20;
// if (age_ >= 18) {
//   console.log("You can vote");
// }

// //If-else statement
// //Dark and light mode
// let mode = "dark";
// let color;
// if (mode === "dark") {
//   //===compare and compare type also
//   color = "black";
// } else {
//   color = "light";
// }
// console.log(color);
// //Number is odd or even
// let n = 10;
// if (n % 2 === 0) {
//   console.log(n, "is Even");
// } else {
//   console.log(n, "is Odd");
// }

// //else-if Statements
// mode = "light";
// if (mode === "dark") {
//   color = "dark";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "pink") {
//   color = "pink";
// } else {
//   color = "light";
// }
// console.log(color);
// if (mode === "light") {
//   console.log(color);
// }

//ternary operator"Compact if-else
//let res = age > 18 ? console.log("adult") : console.log("not adult");

//Let's Practice
// //let number=prompt("Enter a number:")
// if(number%5===0)
// {
//     console.log(number,"is a multiple of 5.");
// }
// else
// {
//     console.log(number,"is not a multiple of 5.");
// }
// //let score=prompt("Enter your score:")
// if(score>=90 && score<=100)
// {
//     console.log("A");
// }
// else if(score>=70 && score<=89)
// {
//     console.log("B");
// }
// else if(score>=60 && score<=69)
// {
//     console.log("C");
// }
// else if(score>=50 && score<=59)
// {
//     console.log("D");
// }
// else
// {
//     console.log("F");
// }

//Day-3:Loops in Js
//Loops:It is used to execute a piece of code again and again
// for (let i = 0; i < 5; i++) {
//   console.log("Hello World");
// }
// console.log("Loop has ended");
// //Calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i; //i is define in block scope
// }
// console.log(sum);
// let j = 1;
// while (j <= 5) {
//   console.log(j);
//   j++;
// }
// let k = 1;
// do {
//   console.log(k);
//    k++;
// } while (k < 10);
// let str="ApnaCollege";
// let size=0;
// for(let i of str)
// {
//     console.log(i);
//     size++;
// }
// console.log("Size ",size);

// let student2={
//     name:"rahul",
//     age:20,
//     cgpa:7.5,
//     isPass:true,
// };
// for(let i in student2)
// {
//     console.log(i," ",student2[i]);
// }
// for(let i=0;i<=100;i++)
// {
//     if(i%2===0)
//     {
//         console.log(i);
//     }
// }
// let gamenumber=25;
// let usernum=prompt("Guess number:")
// while(usernum!=gamenumber)
// {
//      usernum=prompt("You enter wrong number.Guess again:");
// }
// console.log("Congratulation,you entered right number");

//Strings
// let str1="Hello World";
// let str2='Hello';
// //Inbulit Properties:
// console.log(str1.length);
// console.log(str2.length);
// console.log(str1[0])
// console.log(str1[1]);

//Template-Literal:Way to have embedded expression in strings
//  let specialString=`This is a template literal`;
// console.log(specialString);
// console.log(typeof specialString);
// let obj={
//     item:"pen",
//     price:10,
// };
//console.log("The cost of ",obj.item,"is",obj.price,"rupees.");//Number is highlight
// let output=`The cost of ${obj.item} is ${obj.price} rupees.`;//number become string
// console.log(output);
// let input="Hello\t";
// console.log(input.length);//6

//String Method:It is a block of code which perform our task.These are built-function to manipulate a string.
// let upper="Hello";
// upper.toUpperCase();
// console.log(upper);//Donot change in original one

// upper="Hello";
// let newupper=upper.toUpperCase();
// console.log(newupper);

// upper="Hello";
// upper=upper.toUpperCase();
// console.log(upper);

// let lower="Hello";
// lower.toLowerCase();
// console.log(lower);//Donot change in original one

// lower="Hello";
// let newLower=upper.toLowerCase();
// console.log(newLower);

// lower="Hello";
// lower=lower.toLowerCase();
// console.log(lower);

// let whitespace="                 Hii        Everyone      ";
// console.log(whitespace.trim());

// let str4="012345678";
// console.log(str4.slice(1,6));

// //You can use "+" also.
// let str5="apna";
// let str6="college";
// let res=str5.concat(str6);
// res="hello"+123;
// console.log(res);

//replace(1st occurance),replaceall(all occurance)
// let str7="hello";
// console.log(str7.replace("lo","p"));

// console.log(str7.charAt(3));//character at third index

// let userName=prompt("Enter Full Name");
// let length=userName.length;
// let result=`@${userName}${length}`;
// console.log(result);

//Day-4:Arrays in js
// let marks = [97, 99, 80, 89, 89];
// console.log(marks);
// console.log(marks.length); //length is a property as property gives some value and function work.
// console.log(typeof marks);
// console.log(marks[0]);
// console.log(marks[5]); //undefined:When you access the the index which is out of range then undefine
// marks[0] = 99; //Update the value
// console.log(marks);
// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
// for (let i = 0; i < heroes.length; i++) {
//   console.log(heroes[i]);
// }
//You can use for-of /for-in for iterating in array
//Use for-of:for iterating in string
//Use for-in:for iterating in object
// for (let i of heroes) {
//   console.log(i);
// }
// let cities = ["Delhi", "Pune", "Mumbai", "Hyderabad", "Gurgaon"];
// for (let city of cities) {
//   console.log(city.toUpperCase());
// }

//Let's Practice
// marks = [85, 97, 44, 37, 76, 60];
// let ans = 0;
// let sum = 0;
// for (let i of marks) {
//   sum += i;
// }
// ans = sum / marks.length;
// console.log(`The average marks of the class ${ans}`);

// let prices = [250, 645, 300, 900, 50];
// //donot use for-of as gives value we cannot change value on the basic of val.
// //for index use for loop
// for (let i = 0; i < prices.length; i++) {
//   let off = prices[i] * 0.1;
//   prices[i] = prices[i] - off;
// }
// console.log(prices);

// let fooditem = ["potato", "apple", "liches", "tomato"];
// fooditem.push("Chips"); //At element at end
// console.log(fooditem);
// fooditem.push("Apple", "Burger", "paneer");
// console.log(fooditem);
// let deleteditem = fooditem.pop(); //Delete from end and return
// console.log(fooditem);
// console.log(deleteditem);
// console.log(fooditem);
/*) ['potato', 'apple', 'liches', 'tomato', 'Chips', 'Apple', 'Burger']
0: "potato" 1: "apple" 2: "liches" 3:"tomato" 4: "Chips" 5: "Apple" 6: "Burger"length: 7*/
// console.log(fooditem.toString()); //potato,apple,liches,tomato,Chips,Apple,Burger//Convert array into string but donot do changes in original array
// let marvelHeroes=["thor","spiderman","ironman"];
// let dcHeroes=["superman","batman"];
// let indianHeroes=["shaktiman","krish"]
// let heroess=marvelHeroes.concat(dcHeroes,indianHeroes);
// console.log(heroess);//return new array after concatnate both.Donot change in original arrays
// marvelHeroes.unshift("antman");//add at stating
// console.log(marvelHeroes);
// let res=marvelHeroes.shift();//delete from start
// console.log(res);
// marvelHeroes=["thor","spiderman","ironman","antman","Dr. Strange"];
// console.log(marvelHeroes.slice(1,3));//Donot change in original array
// let num=[1,2,3,4,5,6,7];
// console.log(num.splice(2,2,101));
// console.log(num);

//Let's Practice
// let arr=["Bloomberg","Microsoft","Uber","Google","IBM","netflix"];
// console.log(arr.splice(0,1));
// console.log(arr.splice(1,1,"Ola"));
// console.log(arr.push("amazon"));
// console.log(arr);

//Day-5:Functions and Methods::Prevent from redundancy(repeatition)
//function-definition:what function will do
// function myfunc(){
//     console.log("We are learning function today :)");
// }
// myfunc();//function-call:for performing a task
// myfunc();

// function myfunc2(msg,n){//parameter-use to catch input from user
//     console.log(msg,n);
//     //console.log(msg*n);Not a number
// }
// myfunc2();//undefined:Nothing pass
// myfunc2("I hope You're fine.","!");//argument

// myfunc2("I love js",100);

//Sum of two number:
// function sum(a,b){
//    console.log(a+b);
// }
// sum(3,4);

// function sum2(a,b){
//Local variable->scope
//     return a+b;
//     //console.log("After Return");Unreachable code:Never Execute
//  }
//  let ans=sum2(3,4);
//  console.log(ans);

//Arrow Function:Part of Modern Js
// const Product=(a,b)=>{
//     return a*b;
// };
// //console.log(Product);
// (a,b)=>{
//     console.log(a*b);//Gives arrow function
// };
// let res=Product(3,4);
// console.log(res);
// const print=()=>{
//     console.log("Hello Word");
// };
// print();

//Let's Practice
// function vowel(a) {
//   let cnt = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (
//       a[i] === "a" ||
//       a[i] === "e" ||
//       a[i] === "i" ||
//       a[i] === "o" ||
//       a[i] === "u" ||
//       a[i] === "A" ||
//       a[i] === "E" ||
//       a[i] === "I" ||
//       a[i] === "O" ||
//       a[i] === "U"
//     ) {
//       cnt++;
//     }
//   }
//   return cnt;
// }
// let totalvowel = vowel("apnacollege"); //argument
// console.log(totalvowel);
// const countvowel=(a)=>{
//     let cnt = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (
//       a[i] === "a" ||
//       a[i] === "e" ||
//       a[i] === "i" ||
//       a[i] === "o" ||
//       a[i] === "u" ||
//       a[i] === "A" ||
//       a[i] === "E" ||
//       a[i] === "I" ||
//       a[i] === "O" ||
//       a[i] === "U"
//     ) {
//       cnt++;
//     }
//   }
//   return cnt; 
// }
// let total=countvowel("apnacollege");
// console.log(total);

//let numbers=[1,2,3,4,5,6];
// numbers.forEach(function printval(val){
//     console.log(val);//forEach will take each element of numbers array and put in printval(val) function
// })

// let city=["Delhi","Mumbai","Ynr"]
// city.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr);//forEach will take each element of numbers array and put in printval(val) function
// })

//  let numb2=[1,2,3,4];
// numb2.forEach((val)=>{
//     console.log(val**2);
// })

// numb2.map((val)=>{
//      console.log(val);
// });

// let newArr=numb2.map((val)=>{
//          return val*val;
// });
// console.log(newArr);

// let newArr2=numb2.filter((val)=>{
//        return val%2==0;
// });
// console.log(newArr2);

// const output=numb2.reduce((prev,curr)=>{
//      return prev>curr?prev:curr;
// });
// console.log(output);

//Let's Practice:
//  let mks=[87,93,64,99,86];
// const res=mks.filter((val)=>{
//      return val>90;
// });
// console.log(res);

// const res2=mks.reduce((prev,curr)=>{
//      return prev+curr;
// });
// console.log(res2);

// const res3=mks.reduce((prev,curr)=>{
//     return prev*curr;
// });
// console.log(res3);

// let n=prompt("Enter a number");
// let arr=[];
// for(let i=1;i<=n;i++)
// {
//     arr[i-1]=i;//1-0index,2-1index,...arr.
// }
// console.log(arr);


//Day:6 DOM(Document Object Model)
//Window Object represent open window in browser.It is created by browser(not js)and have lot of properties and methods.
//Window Object is a global Object.


//console.log(window);
// console.log("hello");
// window.console.log("hello2");
// console.log(window.document);
//console.dir(window.document);//You can see the property of document


// console.dir(window);
// console.dir(window.document);//console.dir(document);as window object is global
// console.dir(window.document.body);//Get object
// console.log(window.document.body);//body 

// let heading=document.getElementById("heading");//ID is always is unique
// console.dir(heading);
// console.log(heading);

// //HTML-Collection(Similar to Array):Class
// let headings=document.getElementsByClassName("heading2");
// console.dir(headings);
// console.log(headings);

// let parahs=document.getElementsByTagName("p");
// console.dir(parahs);
// console.log(parahs);

// //Return first element
// let firstElements=document.querySelector("p");
// console.dir(firstElements);

// //Return a Nodelist
// let allElements=document.querySelectorAll("p");
// console.dir(allElements);


// const btn = document.querySelector("#myId");
// console.dir(btn);
// console.log(btn.tagName);


// let res=document.querySelector("div").children;
// console.log(res);


// let div=document.querySelector(".fruits");
// console.log(div.innerText);//gives all its content with children//Only text
// console.log(div.innerHTML);//gives html content of element//text+html

// div.innerText="abcd";
// console.log(div);//set the inner text too

// let heading3=document.querySelector("h1");
// console.log(heading3);
// console.log(heading3.innerText);//' '-It show only visible text
// console.log(heading3.textContent);//old heading -It show hidden text also

//Let's Practice
// let heading4=document.querySelector("h2");
// heading4.innerText=heading4.innerText+" from Apna College student";

// let box=document.querySelectorAll(".box");
// box[0].innerText="Hello";
// box[1].innerText="World";
// box[2].innerText="!";


//Day-7:DOM
//Attribute:
// let div=document.querySelector("div");
// let idname=div.getAttribute("id");
// console.log(idname);

// let divname=div.getAttribute("name");
// console.log(divname);

// let para=document.querySelector("p");
// let paraclass=para.getAttribute("class");
// console.log(paraclass);

// let para2=document.querySelector("div");
// para2.setAttribute("class","myClass");

// let result=para2.getAttribute("class");
// console.log(result);

//Style:
// let result=document.querySelector("div");
// console.log(result.style);
// result.style.backgroundColor="red";
// result.style.fontSize="20px";
// //result.style.visibility="hidden";
// result.innerText="hello";

//Insert Elements

// let newbtn=document.createElement("button");
// newbtn.innerText="Click Me";
// console.log(newbtn);

// let div=document.querySelector("div");
// //div.append(newbtn);//add button at the end of div.
// div.prepend(newbtn);//add button at the start of div
// div.before(newbtn);//adds before the div
// div.after(newbtn);//adds button after the div

// let para3=document.querySelector("p");
// para3.remove();


//Let's Practice
// let btn=document.createElement("button");
// btn.innerText="click me";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// let bodys=document.querySelector("body");
// bodys.prepend(btn);

// let para5=document.querySelector("p");

// // let variable=para5.getAttribute("class");

// //let variable=para5.setAttribute("class","newClass");//overwrite 
// para5.classList.add("newClass");//donot overwrite the another class 
// console.log(para5.classList);//have 2 classes

//Day-8: Events in Js
//Events:The change in the state of an object is Event.Event are triggered to do some task.
//Events are fired to notify code of "intersting changes" that may affect code execution.
// let btn1=document.querySelector("#btn");
// btn1.onclick=()=>{
//     console.log("Btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }

// let div=document.querySelector(".mydiv");
// div.onmouseover=()=>{
//     console.log("You are inside div.");
// }

//Event object have details about events and event handler has access to event object.
// let btn1=document.querySelector("#btn");
// btn1.onclick = (e)=>{
//     console.log(e);//e denotes event object
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);
// };

// let div=document.querySelector(".mydiv");
// div.onmouseover=(e)=>{
//     console.log("You are inside div.");
//     console.log(e);//e denotes event object
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }

//By event listener we can perform multiple task on same event
// let btn1=document.querySelector("#btn");
// btn1.addEventListener("click",(e)=>{
//     console.log("button1 was clicked-handler1");
//     // console.log(e); //e denotes event object
//     // console.log(e.target);
//     // console.log(e.type);
//     // console.log(e.clientX);
//     // console.log(e.clientY)
// })
// const handler2=()=>{
//     console.log("button1 was clicked-handler2");
// }
// btn1.addEventListener("click",handler2)

// btn1.addEventListener("click",(e)=>{
//     console.log("button1 was clicked-handler3");
//     // console.log(e); //e denotes event object
//     // console.log(e.target);
//     // console.log(e.type);
//     // console.log(e.clientX);
//     // console.log(e.clientY)
// })
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked-handler4");
// })

// btn1.removeEventListener("click",handler2);
// let mode=document.querySelector("#mode");
// let currmode="light";
// mode.addEventListener("click",()=>{
//      if(currmode==="light")
//      {
//         currmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//      }
//      else
//      {
//         currmode="light";
//         document.querySelector("body").style.backgroundColor="white";

//      }
//      console.log(currmode);
// })


//********************Day-11Classes and Objects***************/
//Direct way creating a object
// const student={
//     fullname:"Priya Chaurasia",//state
//     marks:9.83,//state
//     printMarks: function(){
//         console.log("marks = ",this.marks);//behaviour//student.marks
//     },
// };

// const employee={
//     calTax(){
//         console.log("tax rate is 10%");
//     },
//     caltax2:function(){
//         console.log("tax rate is 10%");
//     },
// };
// const KaranArjun={
//     salary:100000,
//     displaySalary:function(){
//         console.log("Salary = ",this.salary);
//     },
//     calTax(){
//         console.log("tax rate is 20%");//it will work 
//     }
// }
// KaranArjun.__proto__=employee;//By this we can inherit the properties and method of object1
// //If object and prototype have same method ,object's method will be used.
// //Class is a template for creating multiple objects.
// class ToyotaCar{
//     constructor(brand){
//         this.brand=brand;
//        console.log("Creating New Object");
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }
// let fortuner=new ToyotaCar("fortuner");//typeof->object//constructor is invoked automatically
// fortuner.setBrand("Fortuner");
// let lexus=new ToyotaCar();
// console.log(lexus.start());
// lexus.setBrand("Lexus");

//Inheritance:It is passing the properties and method from parent to child class by using extends keyword.
//It will prevent from redundancy that why we inherits the class
//All work can be done by functions also.
// class Parent{
//     constructor(name){
//         console.log("Enter Parent constructor");
//         this.species="homo sapiens";
//         this.name=name;
//     }
//     hello(){
//         console.log("Hello from Parent");
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("Do nothing");
//     }
// }
// class Engineer extends Parent{
//     constructor(name){
//         console.log("Enter child constructor");
//         super(name);//call parents class constructor then use ur own
//         //this.branch=branch;
//         console.log("Exit child constructor");
//     }
//     work(){
//         super.eat();
//         console.log("Solve problem,build something");//constructor is also inherit
//     }
// }
// class Child extends Parent{}
// let obj=new Child();
// console.log(obj.hello());//if no method and properties exist then error
// let priyaobj=new Engineer();
// console.log(priyaobj.eat());
// console.log(priyaobj.work());//Method overriding:If child and parent has same method then child's method will be invoked.
// let engobj=new Engineer("CSE");
// let engobj=new Engineer("Priya");
// console.log(engobj);
// console.log(engobj.work());

// let data="hello";
// class User{
//     constructor(name,email)
//     {
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//          console.log(data);
//     }
// }
// let user1=new User("Priya","pc1144900@gmail.com");
// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//      editData(){
//         data="You can view Data";
//      }
// }
// let admin1=new Admin("Admin","admin@gmail.com");
// console.log(admin1.editData());


//Day-12 Callbacks,Promises and Async Await

//Synchronous programming:Each instruction is executed sequentially.
// console.log("one");
// console.log("two");
// console.log("three");

//Asynchronous programming:It allow to execute next instruction immediately without waiting for previous inst to execute.
//setTimeout():It is a function.It help to execute another function and we can set timeout as per our deesire.(2s=2000millisec)
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000);//2000ms=2s
// setTimeout(()=>{
//     console.log("Hello from timeout");
// },2000);//2000ms=2s
// console.log("four");

//Callback:callback is a function passed as an argument to another function.
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculator(1,2,sum);

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// })

// const hello=()=>{
//     console.log("hello");
// }
// setTimeout(hello,2000);//hello->callback,2000->timeout

//CallBack Hell:
//database:search and send the data after 2s
// function getData(dataId,getNextData){
//    setTimeout(()=>{
//     console.log("data",dataId);
//     if(getNextData){
//         getNextData();
//     }
//    },2000);
// }
//timer immediately start hua tha thats why ek sath print ho gy
// getData(1);//2s
// getData(2);//2s
// getData(3);//2s
//data1
//data2
//data3
//callback hell is a nested callbacks forming pyramid structure.
// getData(1,()=>{           
//     getData(2,()=>{
//         getData(3);
//     });              
// });

// ()=>{
//     getData(2); callback
// }

//Promises:Eventual completion of task
// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a Promise");
// });
//console.log(promise);//pending

// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a Promise");
//     resolve("Success");//calling by value and made by resolve handler
// });
// console.log(promise);//fulfill state

//General Programming->API returns Data(Promises) we donot need to make promises.

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             if(getNextData){
//                 getNextData();
//             }
//         },2000);
//     });
// }
//call getData()=>promises is return//pending
// getData();//data undefined

//Remember getData() API donot give data immediately but give promises after 2s they will give data.
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("Success");
//             if(getNextData){
//                 getNextData();
//             }
//         },2000);
//     });
// }
// getData(123);//pending->fulfilled(state),(undefined)->success(result)

//How to use promises:
// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promises");
//         //resolve("Success");//result
//         reject("network error");//result
//     });
// };
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("Fulfilled",res);
// });
// promise.catch((err)=>{
//     console.log("Rejected",err);
// });

//promise chain
//api
//Both run parallel
// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Async function executed,Data1");
//             resolve("Success");
//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Async function executed,Data1");
//             resolve("Success");
//         },4000);
//     });
// }
// console.log("Fetching Data...")
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// });

// console.log("Fetching Data2...")
// let p2=asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Async function executed,Data1");
//             resolve("Success");
//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Async function executed,Data1");
//             resolve("Success");
//         },4000);
//     });
// }
// console.log("Fetching Data...")
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching Data2...")
//     let p2=asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// });


// promise chain
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     });
// }
// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// })

//async-await are keywords in js whose work is to make asynchronous programming simple.
//asyc function returns promise->state->fulfilled,result->undefined
//async function returns the promise and it is compulsary
// async function hello(){
//     console.log("hello");
// }
// hello();
//await:It pauses the execution of its surrounding async function until promise is settled.
//await is used only in async function.
//Its api that give weather report 
//we want api return after 2s
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather-data");
//             resolve("success-200");
//         },2000);
//     });
// }

// //await api();//asynchronous call
// async function getweatherData(){
//     await api();
//     await api();//after 2s 
// }

// getweatherData();

// function getData(dataId){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("data",dataId);
//                 resolve("success");
//             },2000);
//         });
//  }
  //Async-await
//   async function getAllData(){
//     let data1=await getData(1);
//     console.log(data1);
//     let data2=await getData(2);
//     console.log(data2);
//     let data3=await getData(3);
//     console.log(data3);
//   }
//   getAllData();


//Immediately Invoked function expression:IIFE
// (async function (){
//     let data1=await getData(1);
//     console.log(data1);
//     let data2=await getData(2);
//     console.log(data2);
//     let data3=await getData(3);
//     console.log(data3);
//   }
// )();


//Day-13:Fetch API
//API->Application programming interface.API provides an interface for fetching (sending/recieving )resources.
//It uses request and respond objects.
//fetch(url,[options]) is used for fetch a resources(data).


