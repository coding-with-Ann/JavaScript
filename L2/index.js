    //TEMPLATE LITERALS = delimited with (``) backticks
//                        instead of '' or ""
//                 allows embedded variables and expressions

// let username = "bro";
// let items = 3;
// let total = 75;

// console.log(`hello ${username}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`your total cart value is $ ${total}`);

// // if we want to write a long text(multi line text)

// let text = `hello ${username}<br>
// You have ${items} items in your cart<br> //br for html
// your total cart value is $ ${total}`

// console.log(text);

//This is helpful when we want to update an html element.

// document.getElementById("myLabel").innerHTML = text;


    //toLocaleString() =returns a string with a language
    //                sensitive representation of this num
    // number.toLocaleString(locale, {options})
    //'locale' = specify the language(undefined = default set in browesr)
    // 'options' = objects with formating options

// let myNum = 100;
// myNum = myNum.toLocaleString("en-US");
// myNum = myNum.toLocaleString("hi-IN");
// console.log(myNum);

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency:"USD"});
// console.log(myNum);
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// console.log(myNum);
// myNum = myNum.toLocaleString("de-De", {style:"currency", currency: "EUR"});
// console.log(myNum);

// myNum = myNum.toLocaleString(undefined, {style:"percent"});
// console.log(myNum);  // 1 means 100%, 100 means 10000%

// myNum = myNum.toLocaleString(undefined, {style: "unit", unit:"celsius"});
// console.log(myNum);

    //ARRAYS

// let fruits = ["Apple", "Orange", "Banana"];
// console.log(fruits[4]);   //index out of range
// fruits[4] ='Strawberry';  //inserting new value
// fruits[0] = 'Blueberry'   //changing the value at index 0
// console.log(fruits[0]);

// fruits.push("lemon");   // appends element at end of array
// console.log(fruits)

// fruits.pop();    //removes the element from the end of array
// console.log(fruits)

// let index = fruits.indexOf("Banana");
// console.log(index)

// console.log(fruits.indexOf("kiwi")); //returns -1 if element is not present   *****

// for(let i=0; i<fruits.length; i+=1){
//     console.log(fruits[i]);
// }

// for(let fruit of fruits){
//     console.log(fruit)      //****** 
// }

    //SORTING ARRAY

// fruits = ["Banana", "Apple", "Orange", "Mango"];
// fruits = fruits.sort();  //sorts the elements
// console.log(fruits);
// fruits = fruits.sort().reverse();  //sorts and reverses 
// console.log(fruits);


    //2D ARRAYS

// let fruits =        ["Apples", "Oranges", "Bananas"];
// let vegetables =    ["Carrots", "Onions", "Potatoes"];
// let meats =         ["Eggs", "Chicken", "Fish"];

// let grocessaryList = [fruits, vegetables, meats];
// for(let list of grocessaryList){
//     console.log(list);
// }

// for(let list of grocessaryList){
//     for(let food of list){
//         console.log(food);
//     }
// }


// grocessaryList[0][0] = "Strawberries";  //changing value
// console.log(grocessaryList[0][0]);

    //SPREAD OPERATOR = unpacks the iterables such as an
    // array or string to be expanded in places where zero
    // or more arguments are expected 
    //(unpacks the elements)

// let numbers = [1,2,3,4,5,6,7,8,9];
// console.log(Math.max(numbers)); //returns NAN
// numbers = Math.max(...numbers);
// console.log(numbers);

// let class1 = ['ben', 'gwen', 'kevin'];
// let class2 = ['harry', 'ron', 'hermoine'];

// console.log(class1.push(class2))
// class1.push(...class2);
// console.log(...class1);


    // REST PARAMETERS = reperesents a indefinite no of para
    //meters (packs arguments into an array)

    // a=1
    // b=2
    // c=3
    // d=4
    // e=5
    // console.log(sum(a,b,c,d,e));  //**** */

    // function sum(...numbers){  //rest parameters packs arguments into an array
    //                             then we need a name for that array, we used numbers as array name.
    //     let total = 0;
    //     for(let number of numbers){
    //         total +=number;
            
    //     }
    //     return total;
    // }



        //callback = fn passed as an argument to another fn
        //           Ensures that a fn is not going to run
        //           before a task is completed.
        //           Helps us develop async code
        //         (when one fn has to wait for another fn)
        //         that helps us avoid errors and potential
        //         problems.
        //         Eg: wait for a file to load.
// sum(2,3, displayDom);

// function sum(x,y, callBack){
//     let result = x+y;
//     callBack(result);
// }

// function displayDom(output){
//     document.getElementById("myLabel").innerHTML = output;
// }



    //array.forEach() = executes a provided callBack fn
    //                  once for each array element.
    //  for each provides access to element, index, array **

// anime = ["ben", "gwen", "kevin"];
// anime.forEach(capitalize);
// anime.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() +element.substring(1);

// }                                       //substring ***

// function print(element){
//     console.log(element);
// }


    // Array.map() = executes a provided callback fn once 
    //                for each array element and creates 
    //                  a new array.
    //It has builtIn forEach method ****

// let numbers = [2,3,4,5];
// let squares = numbers.map(square);
// squares.forEach(print)


// function square(element){
//     return Math.pow(element, 2);
// }

// console.log(squares);   // to print output without forEach

// function print(element){    //using callBack to print
//     console.log(element)
// }


    //array.filter() = creates a new array with all elements
    //                that pass the condition provided by fn
    //here also the callback fn will be executed for each element of the array.
// let ages = [18, 16, 21, 17, 19, 90]
// adults = ages.filter(chkAge);
// adults.forEach(print)

// function chkAge(element){         //element
//     return element>=18;

//     }
// function print(element){
//     console.log(element);
// }


    //array.reduce() = reduces an array to a single value

// let prices = [5, 10, 15, 20, 25, 30];
// total = prices.reduce(checkOut);  
// console.log(`Total is $${total}`);

// function checkOut(total, element){
//     return total+element;   //recursive call until end of array
// }

    //SORTING OF NUMBERS 

// let ages = [10, 18, 22, 25, 17, 16, 26];
// let age = ages.sort(ascendAge);   //sort with compare fn
// age.forEach((element=>console.log(element)));
// //   if we print age variable directly, we get array object
// function ascendAge(a,b){
//     return a-b;            // b-a for desc order
// }


    //Function expression = function without a name(anonymou
    //      s fn avoid polluting the global scope with write it
    //       then forget it.)


// let count = 0;
// document.getElementById("increaseBtn").onclick = function(){
//     count+=1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// document.getElementById("decreaseBtn").onclick = function(){
//     count-=1;
//     document.getElementById("myLabel").innerHTML = count;
// }


    //arrow function = compact alternative to a traditional
    //                  function
    //                  =>

// let grades = [100,50,90,60,80,70];
// let descending = grades.sort((x,y)=> y-x); //prints array

// let elements = grades.forEach((element)=>   //prints elements

// console.log(element))

// console.log(descending);


    //NESTED FNS = functions inside another fn
    //             outer fn have access to inner fn
    //             inner fns are hidden from outside the outer fn.
    //              used in closures.


// let userName = "Bro"
// let inbox = 0;
// login();

// function login(){
//     displayUser();  //these methods cant be accessed without login()
//     displayInbox(); //so nested fns improves security  ***
//     function displayUser(){
//         console.log(`hello ${userName}, welcomeBack`);
//     }
//     function displayInbox(){
//         console.log(`You have ${inbox} msgs in your inbox`);
//         }

// }


    //Map() = object that holds key-value pairs of any data type

// const store = new Map([
//     ["Shirt", 20],
//     ["Pant", 15],
//     ["T-shirt", 10],
//     ["UnderWear", 5]
// ]);

// let shoppingCart = 0;

// shoppingCart += store.get("T-shirt");  
//                    .get() method to access value of a key
// shoppingCart += store.get("Underwear");
// console.log(shoppingCart);

// store.set("hat", 40);            // adds new key and value
// store.delete("hat");            //deletes the key
// console.log(store.has("hat"));  //returns boolean
// console.log(store.size);        // returns size of map

// store.forEach((value, key) => console.log(`${key} $${value}`));






