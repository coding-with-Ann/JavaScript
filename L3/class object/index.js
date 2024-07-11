    //OBJECT = A group of properties and methods
        // properties = what an object has 
        // methods = what an object can do
        // use . to access properties/ methods.

// const car = {                 //object
//     model: "Ferrari",        //variables
//     color: "red",
//     year: "2010",

//     drive : function(){     //drive and break are functions
//         console.log("drive runs the car");
//     },

//     break : function(){
//         console.log("Break stops the car");
//     }
// }

// console.log(car.model);
// console.log(car.color, car.year)
// car.drive();
// car.break();







    //this keyword = reference to a particular object
    //      the object depends on the immediate context.
    //THIS KEYWORD REFERS TO NAME OF AN OBJECT.

// const car1 = {
//     model : "Bmw",
//     color:"white",
//     year:"2000",

//     drive: function(){
//         console.log(`${this.model} can drive`);
//     },

//     break: function(){
//         console.log(`${this.model} can stop`)  //this ***
//     }

// }


// const car2 ={
//     model:"Benz",
//     color:"Black",
//     year:2005,

//     drive: function(){
//         console.log(`${this.model} can drive`);   //this**

//     },

//     break: function(){
//         console.log(`${this.model} can stop`);
//     }

// }

// car1.drive()
// car2.drive()


//IF THIS KEYWORD IS USED OUTSIDE OF OBJECT IT REFERS TO 
//WINDOW OBJECT, WE CAN CHANGE THE WINDOW PROPERTIES USING
//THIS KEYWORD.

// console.log(this)
// this.name = 'hello';
// console.log(this.name);








    //CLASS = BLUE PRINT FOR CREATING OBJECTS
    //        define what type of properties and methods 
    //          the object should have
    //        use a constructor for unique properties


// class Player{
//     score = 0;

//     pause(){        
//         //WHEN YOU DECLARE METHOD WITHIN A CLASS WE DON'T 
//         //        NEED THE FUNCTION KEYWORD
//         console.log("You have passed the game");
//     }

//     exit(){
//         console.log("You have exited the game");
//     }
// }

// const player1 = new Player();
// const player2 = new Player();

// console.log(player1.score);
// player1.score+=1;
// console.log(player1.score);
// player1.pause()

// player2.exit();







    //constructor = its a special method of class
    //             accepts arguments and assigns properties.

// class Student{
//     constructor(name, age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }

//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }

// const student1 = new Student("Ben", 20, 9.5);
// const student2 = new Student("Gwen", 19,9.8);
// const student3 = new Student("kevin", 20, 9.5);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();







    //static = belongs to class not the objects.
    //   properties: useful for caches, fixed configuration
    //   methods: useful for utility functions.

//Math.round() is also static method

// class Car{
//     static numberOfCars = 0;

//     constructor(model){
//         this.model = model;      // total 3 cars
//         Car.numberOfCars +=1;    //car is a class variable so we are incrementing class variable
//     }

//     static startRace(){
//         console.log("3...2...1...go");
//     }
        
// }

// const car1 = new Car("Mustang");
// const car2 = new Car("Bmw");
// const car3 = new Car("Benz");
// console.log(car1.model);        //object property
// console.log(Car.numberOfCars);  //class property.

// Car.startRace();    //static method, so all cars starts at 
// //                       same time

// static method is uesd when we want an action to happen
//   to all the members of class at the same time.









    //inheritance = child class can inherit the properties
    //              and methods from another class.

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`${this.name} is sleeping`);
//     }

// }

//     class Rabbit extends Animal{
//     name = "rabbit"

//     run(){
//         console.log("Rabbit is running")
//     }
    
// }


// class Fish extends Animal{
//     alive = true;
//     name = "fish"

//     swim(){
//         console.log("Fish is swimming")
//     }

// }

// class Hawk extends Animal{
//     alive = true;
//     name = "hawk"

//     fly(){
//         console.log("Hawk is flying")
//     }
// }

// const rabbit = new Rabbit();
// rabbit.eat();
// rabbit.run();

// const fish = new Fish();
// fish.eat();
// console.log(fish.alive);

// const hawk = new Hawk();
// hawk.fly();
// hawk.sleep();
// console.log(hawk.alive);









    //super = refers to the parent class.
    // commonly used to invoke constructor of parent class.
// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
        

//     }

//     class Rabbit extends Animal{
//     constructor(name, age,runSpeed){ 
//         super(name,age);
// //when rabbit cosntructor is called super constructor is invoked 
//         this.runSpeed = runSpeed;
//     }
// }

// class Fish extends Animal{
//     constructor(name, age,swimSpeed){  //can we ignore name and age here?
//        super(name, age);
//         this.swimSpedd = swimSpeed;
//     }
// }

// class Hawk extends Animal{
//     constructor(name, age,flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
// }

// //gives error if we dont invoke parent class constructor.
// //one of the reasons this is useful is we are reusing the 
// //name, age property so we can use that only once in parent
// //class constructor and access them in child class using super key word.

// const rabbit = new Rabbit("Bunny", 1, 40);
// const fish = new Fish("fish", 1, 80); 
// const hawk = new Hawk("hawk", 2, 150); 
// console.log(rabbit.runSpeed);
// console.log(fish.age); 
// console.log(hawk.name);







    //getters and setters
    //get = binds an object property to a fn when that property
    // is accessed.
    //set = binds an object property to a fn when that property
    // is assigned a value. 
    
// class Car{
//     constructor(power, gas){
//         this._power = power;
//         this._gas = gas;
//     }
//     get power(){     //getter name same as parametner name
//         return `${_power}hp`;
//     }

//     set gas(value){
//         this._gas = value;
//     }
// }
// const car1 = new Car(200, 25);
// console.log(car1._power);

// console.log(car1.gas = 50);   //not car1.gas(50) ****


    //OBJECTS AS ARGUMENTS = passing objcts to a fn as argument

// class car{
//     constructor(model, year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car1 = new car("Lambo", 2020, "white");
// const car2 = new car("Bmw", 2022, "Black");
// const car3 = new car("Ferrari", 2024, "red");


// function selectCar(object){
//     console.log(object.model);
//     console.log(object.year);
//     console.log(object.color);
// }


// selectCar(car1);
// selectCar(car2);
// selectCar(car3);








    //Arrayofbojects


// class car{
//     constructor(model, year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//     drive(){
//         console.log(`${this.model} can drive`);
//     }
// }

// const car1 = new car("Lambo", 2020, "white");
// const car2 = new car("Bmw", 2022, "Black");
// const car3 = new car("Ferrari", 2024, "red");
// const car4 = new car("Benz", 2025, "green");

// const carObjs = [car1, car2, car3, car4];
// startRace(carObjs);
// function startRace(obj){
//     for(const car of obj){
//         car.drive();
//     }
   
// }






    //anonymous objects = objects without a name
    //                    not directly referenced
    //                   less syntax, no need for unique names.

// class Card{
//     constructor(value, suit){
//         this.value = value;
//         this.suit = suit;
//     }
// } 

// let cards = [new Card("A", "hearts"),
//              new Card("A", "spades"),
//              new Card("A", "diamonds"),
//              new Card("A", "clubs"),
//              new Card("2", "hearts"),
//              new Card("2", "spades"),
//              new Card("2", "diamonds"),
//              new Card("2", "clubs")];

// console.log(cards[0].value +" "+cards[0].suit);
// console.log(cards[1].value +" "+cards[1].suit);

//                   or using for each and arrow fn

// cards.forEach(card=> console.log(card.value + card.suit));









    //error = object with a description of 
    //        something  went wrong

    //         can't open a file
    //         lose connection 
    // user types incorrect input
    //TypeError  = mistype keywords or incorrect syntax

    // throw = executes a user defined error.


// try{
//     let x = window.prompt("Enter a number");
//     x = Number(x);
    
//     if(isNaN(x)) throw "That wasn't a number";   //isNaN(x)
//     if(x == "") throw "Its empty, enter a number"  

//                                throw - throws user defined error
    
//     console.log(x);
// }
// catch(error){       //catching the thrown error in error argument
//     console.log(error);
// }
// finally{
//     console.log("This is always executed");
// }








    //setTimeout() = invokes a fn after a number of milli seconds.
    //               its async fn (doesn't pass execution of program).
    //clearTimeout() = to clear or cancel the setTimeout().

// let timer1 = setTimeout(firstMessage, 3000);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(thirdMessage, 9000);

// function firstMessage(){
//     alert("Buy this product for 500$");
// }

// function secondMessage(){
//     alert('This is not a scam');

// }
// function thirdMessage(){
//     alert("Do it!");
// }

// document.getElementById("myBtn").onclick = function(){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert('Thanks for buying');
// }







    //setInterval() = invokes a fn repeatedly after a no of milli seconds.
    //async fn(doesn't pass execution of program)
    //clearInterval() = to clear or stop the setInterval().


// let max = window.prompt("Enter the max number");
// const interval1 = setInterval(countUp, 1000);
// let count = 0;

// function countUp(){
//     count+=1;
//     console.log(count);
//     if(count>=max){
//         clearInterval(interval1);
//     }
// }







    //Date object is used to work with date & time

// let date = new Date();
// // console.log(date);
// date = date.toLocaleString(); //more readable output.
// document.getElementById("myLabel").innerHTML = date;

// if we dont pass any argument to Date, it will be default
//but if we pass 0 as an argument, zero is a reference 
// point for us, this is known as epic, imagine this as 
//where the time begin.
// let date1 = new Date(0);
// console.log(date1);
// date1 = new Date(1000000000000);  //date after 1000000000000 milli seconds
// console.log(date1);

// let date2 = new Date(2023,0,1,12,50,19,45);
// console.log(date2);


// let date3 = new Date("January 1 2023 00:00:00");
// console.log(date3);

// let date = new Date();
// let curdate = date.getDate();
// let year = date.getFullYear();
// let month = date.getMonth();  //month starts from 0
// let day = date.getDay();
// getHours for hours and so on..

// document.getElementById("myLabel").innerHTML = day;


    //we can also set month and year as we want
// let date = new Date();
// date.setFullYear(2024);
// console.log(date);
// date.setMonth(0);
// console.log(date);

    //We can also create our fn to format date and time.
// let date = new Date();
// function formatDate(){
//     let year = date.getFullYear();
//     let month = date.getMonth();
//     let day = date.getDay();
//     return (`${year}/${month}/${day}`);
// }
// document.getElementById("myLabel").innerHTML = formatDate();
   
// let date = new Date();
// function formatTime(){
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     amOrpm = hours >=12? "pm" : "am";

//     hours = (hours%12) || 12;
//     return (`${hours}:${minutes}:${seconds} ${amOrpm}`);

// }
// document.getElementById("myLabel").innerHTML = formatTime();







 // synchronous code = In an orderd sequence
    //                    step by step lenear instructions
    //                     (start now, finish now)

    //asynchronous code = Out of sequence.
    //                    Eg: Access a database 
    //                    fetch a file
    //                    Tasks that take time
    //                    (start now, finish sometime later).


    //synchronous code
//second step has to wait for the first step to complete, 
//second instruction starts only after first instruction finishes running.
// console.log("start sync");
// console.log("This step is synchronous");
// console.log("End sync");

    //asynchronous code
//if second step takes time while running, third step won't wait for second step.
//Third step runs before second step completes execution as second step needs time
// console.log("start async");
// setTimeout(()=>console.log("This step is asynchronous"),5000);
// console.log("End async");
//first step runs first, then third step will run
//without waiting for 5 seconds, it doesn't wait for second 
//step then second step will run









    //console.time() = starts a timer you can use to 
    // track how long an operation takes 
    // give each timer a unique name.

// console.time("ResponseTime");  //to start the timer
//     //              give same name for time() and timeEnd()
// alert("click ok button");
// console.timeEnd("ResponseTime");   //to end the timer


// console.time("forAsyncMethod");
// setTimeout(()=> console.log("hello"),5000)
// console.timeEnd("forAsyncMethod");

//so the time method and timeEnd method tracks how long
// a sync operation takes.
//It doesn't calculate exact operation time for async operations.






    //promise = object that encapsulates the result of asynchronous operation
    //          let ascynchronous methods return value like sync methods
    //          "I promise to retutn something in the future"
    //          Promises have a STATE
    //          the STATE is pending then: 'fulfilled' or 'rejected'
    //          the RESULT is what can be returned
    //          2 parts producing, consuming
    //          producing code is the code we wrote upto else statement.
    //          If the promise is resolved then what we want to do, we handle that with consuming code.

// const promise = new Promise((resolve,reject)=>{
//     let fileLoaded = false;

//     if(fileLoaded){
//         resolve("file loaded");  //we can pass callback here to perform any operation we like
//     }
//     else{
//         reject("file not loaded");
//     }
// });

// promise.then(value=>console.log(value)).catch((error)=>
// console.log(error));



        // we can also use resolve without reject
// const promise = new Promise((resolve)=>{
//     setTimeout(resolve,5000)
// });
// promise.then(()=>console.log("Thanks for waiting"));



        //we can also pass argument to promise
// const wait = time => new Promise(resolve =>{
//     setTimeout(resolve, time);
// });
// wait(3000).then(()=> console.log("Thanks for waiting"));




        //async = makes a fucntion return a promise.

// async function loadFile(){
//    let fileLoaded = false;
//    if(fileLoaded){
//     return "File Loaded"
//    }
//    else{
//     throw "File Not Loaded"
//    }
// }

// // to invoke the function
// loadFile().then(value=>console.log(value))
// .catch(error =>console.log(error));


    // we can also write this code in without async keyword
    //in a more meaningful way using promise but it takes more syntax.


// function loadFile(){
//     let fileLoaded = true;

//     if(fileLoaded){
//         return Promise.resolve("File Loaded");
//     }
//     else{
//         return Promise.reject("File not Loaded");
//     }
// }
// //to invoke the function
// loadFile().then(value => console.log(value))
// .catch(error => console.log(error));





    //await = makes an async fn wait for a promise.

// async function loadFile(){
//     fileLoaded = true;

//     if(fileLoaded){
//         return "File Loaded"
//     }
//     else{
//         return "File Not Loaded"
//     }
// }


// async function startProcess(){   //await needs a async fn
//    try{
//     let message = await loadFile();  //invoking loadfile() with await
//     console.log(message);  // no need to use then() and catch()
//    }
//    catch(error){
//     console.log(error)
//    }
    
// }

// startProcess();

