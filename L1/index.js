// console.log("I like pizza");  //to print a string
// window.alert("I really love pizza");

//If we dont use let or var then the variable will be considerd
//as global variable this could create bugs because we 
//might create a same variable outside the loop or function

// for(let i=0;i<=2;i++){
//     x=0
//     y=1;
//     console.log(x,y)
// }
// console.log(x);
// console.log(y); // x, y without let or var so, global

// let age
// console.log(age)  //prints undefined
// age="15";
// console.log(age);

// let lastname="Tesla";
// console.log(lastname);
// console.log("lastname is", lastname, "age is ",age);

// let a=true;
// console.log(typeof(a));

// document.getElementById("p1").innerHTML = "hello " + lastname;
// document.getElementById("p2").innerHTML = "you are " +age +"years old";
// document.getElementById("p3").innerHTML = "ThankYou";

    //ARITHMETIC OPERATORS
// let b =10;
// console.log(b +=5);
// console.log(b-=5);
// console.log(b*=5);
// console.log(b /=5);

    /* OPERATOR PRESEDENCE
        Paranthesis ()
        Exponent
        multiplication and division
        addition and subtraction
    */

    //USER INPUT
//Easy way with window promt 
// let age1 = Number(window.prompt("please enter youtr age"));
// console.log(age1);
// console.log(typeof(age1));

    //DIFFICULT WAY WITH HTML TEXT BOX

// let username;
// document.getElementById("mybutton").onclick = function(){
//     username= document.getElementById('mytext').value;
//     console.log(username);
//     document.getElementById("mylabel").innerHTML = "hello " +username;
// }

    //TYPE CONVERSION(Number, String, Boolean)
        //N, S, B are capital letters *****
// let x,y,z
// x= Number(window.prompt(""))
// console.log(x)
// console.log(typeof(x))

// y=21
// y=String(y)
// console.log(y) //prints 21 but its a string
// console.log(typeof(y))

// z=""
// z=Boolean(z)
// console.log(z)

    //const = variable that can't be changed
// let pi = 44
// console.log(pi)
// pi = 55
// console.log(pi)

// const pi = 3.14
// console.log(pi)
// pi =10
// console.log(pi)

    //MATH FUNCTIONS(M capital ****)

// let aa=3.14
// aa= Math.round(aa)    
// console.log(aa)

// let bb=5.6
// bb=Math.ceil(bb)
// console.log(bb)

// let cc=9.88
// cc=Math.floor(cc)
// console.log(cc)

// let x=3, y=2 , z
// z = Math.pow(3,2)
// console.log(z)
// z = Math.sqrt(z)
// console.log(z)

// x=-3.14
// console.log(Math.abs(x)) 

// let y=5, z=10
// console.log(Math.max(y,z))
// console.log(Math.min(y,z))

// console.log(Math.PI)   P and I are capital

    //String methods
//  let str = "   hello bro";
//  let number = "123-456-7890";
//  console.log(str.length);
//  console.log(str.charAt(1));
//  console.log(str.indexOf("o"));
//  console.log(str.lastIndexOf("o"));
//  console.log(str.toUpperCase());
//  console.log(str.toLowerCase());
//  console.log(str)
//  console.log(str.trim());

//  console.log(number.replaceAll("-",""));  //replaceAll **

    // slice Methods

// let fullName="hello bro";
// console.log(fullName.slice(0,5));
// console.log(fullName.slice(fullName.indexOf(" ")+1));

    // METHOD CHAINING = calling one method after another
    //                    in a continuous line of code.

// let name1 = "bro"
// letter = name1.charAt(0).toUpperCase()
// console.log(letter);


    // IF STATEMENT
 // let age =5;

// if(age>65){
//     console.log("You are a senior citizen");
// }
// else if(age >18){
//     console.log("You are an adult");
// }

// else if(age<0){
//     console.log("You haven't been born yet");
// }

// else{
//     console.log("You are a child");
// }

    //CHECKED PROPERTY = 
//checked property lets us know if a checkbox or radio 
//button is selected checked property returns a boolean 
// value true or false.

// document.getElementById("submitBtn").onclick = function(){
//     if(document.getElementById("checkboxBtn").checked){
//         console.log("You have subscribed");
//     }
//     else{
//         console.log("You didn't subscribe");
//     }
// }


// // radio button
// document.getElementById("sbBtn").onclick = function(){
//     if(document.getElementById("radioBtn1").checked){
//         console.log("You are a follower");
//     }
//     if(document.getElementById("radioBtn2").checked){
//         console.log("You aren't a follower");
//     }
// }


    //SWITCH = STATEMENT that examines a value
//Its better to use switch statement instead of using
//lot of else if statements because its more efficient.

// let grade='A';

// switch(grade){
//     case "A":
//         console.log("You did great")
//         break;
//     case "B":
//         console.log("You did good ")
//         break;
//     case "C":
//         console.log("You did Okay")
//         break;
//     case "D":
//         console.log("You are barely passed")
//         break;
//     case "F":
//         console.log("You have failed")
//         break;

//     default:
//         console.log("Invalid grade")

// }



//let number =2

// switch(true){  
//     //true is to check if the expression is true, if its true then that case will be executed
//     case (number>2):
//         console.log("a is greater than 2")
//         break;
//     case (number<2):
//         console.log("a is less than 2")
//         break;
//     case (number==2):
//         console.log("a ==2")
//         break;
//     default:
//         console.log("bye")
        
// }
    

    //AND OR NOT LOGICAL OPERATOR
    //used to verify a range of values
//AND
// let temp=20;

// if(temp>0 && temp<35){
//     console.log("Weather is good");
// }
// else{
//     console.log("Weather is bad");
// }

//OR
// if(temp<0 || temp>35){
//     console.log("Weather is bad")
// }
// else{
//     console.log("Weather is good")
// }

//NOT
// let sunny=true
// if(!(sunny)){
//     console.log("Weather is cloudy");
// }
// else{
//     console.log("Weather is sunny");
// }


    //WHILE LOOP =repeat some code while the condition
    //             is true
    //             potentially INFINITE LOOP

// let username ="";
//     while(username =="" || username==null){
//                            //can't cancel
//         username = window.prompt("Enter ur name");
// }
// console.log("Hello ",username); 

    //do while loop
// let username;
// do{
//     username=window.prompt("Enter ur name");
// }while(username=="")
// console.log("hello", username);


    //FOR LOOP = repeats a code for a given no of times
// ++ or --

// for(let i=10; i>0; i-=2){
//     console.log(i)
// }
// console.log("Happy new year");

    //NESTED LOOP

// let rows=3, columns=4;
// for(let i=1; i<=rows; i+=1){
//     for(let j=1; j<=columns; j+=1){
//         document.getElementById("nestedLoop").innerHTML +="$"
//         }
//     document.getElementById("nestedLoop").innerHTML +="<br>"
//         }

    //BREAK AND CONTINUE

// for(let i=0; i<10; i++){
//     if(i==3){
//         continue;
//     }

//     if(i==7){
//         break;
//     }
//     console.log(i)
// }


    //FUNCTIONS

// function startProgram(){
//     let username = "bro";    //local variable
//     let age = 21;
//     birthday(username, age);
// }

// function birthday(a,b){
//     console.log("Happy Birthday",a, "ur", b, 'yrs old');
//     console.log("Happy Birthday",a, "ur", b, 'yrs old');
// }
// startProgram();


//     //Fn with return statement

// function rectArea(width, height){
//     let result = width * height;
//     return result;
// }

// let width = window.prompt("width of rectangle: ");
// let height = window.prompt("Enter height of rectangle");
// area=rectArea(width, height);
// console.log("Area of rectangle is: ", area);


//TERINARY OPERATOR = shortcut for an if/else statement
//                     Takes three operands

// condition ? expIfTrue : expIfFalse

// let age=19;
// adult = ageCheck(age);
// console.log(adult);

// function ageCheck(age){
//     return age>18 ? true : false;
// }

    //VAR VS LET
//variable scope = where a variable is accessible
//let = variables are limited to block scope {}
//var = variables are limited to a function(){}
//global variable = declared outsided any function.
//***if global, var will change the browser's window property

// for(let i=0; i<3; i+=1){
//     console.log(i);
// }
// console.log(i);      
// // accessing i declared with let keyword is accessible only inside the block of code.

// for(var i=0; i<3; i+=1){
//     console.log(i);
// }
// console.log("outside loop")
// console.log(i);

//declaring i with var with enable the accessibility of i 
// outside the loop but this could mess up the code.

// function doSomething(){
//     for(var i=0; i<3; i+=1){
//         console.log(i);
//     }
// }
// console.log(i); //gives error, variable declared with var can't be acceseed outside a fn.

// var name="bro";

// declaring variable with var in global scope will change 
// the browser window property so don't do it.
//use let in block scope and var in fn scope.


// double slash for single line comment
/*Multi line comment */