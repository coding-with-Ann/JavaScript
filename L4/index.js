    //DOM = document object model(API)
    //Document is the access point, each node can contain 
    //a object, this tree is a model, so its called dom.
    
    //It's an interface for changing the content of a page.
    //DOM is representation of a HTML document.
    // By interacting with dom we can change the elements of dom
    //documnet is the entry point of dom

// console.log(document)
// console.dir(document)          //shows properties of doc
// console.log(document.title);    //title of document
// console.log(document.URL);      //url of doc
// document.title = "new_title"  //changes title
// document.location = "https://google.com";  //to change location

//By accessing dom we have access to body elements of dom

// document.body.style.backgroundColor = "skyblue";
// document.getElementById("myDiv").innerHTML = "hello";
      


    //getelementbyid()
// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "pink";

    // //getElementsByName() //elements *** byname
    // useful when we have multiple elements in a group with same name
// let fruits = document.getElementsByName("fruit"); 
// console.log(fruits);    //returns a node list
// console.log(fruits[0]);
// console.log(fruits[1]);

// fruits.forEach(fruit=>{
//     if(fruit.checked){
//         console.log(fruit.value);  
//value is the value written for name in html ****
//     }
// })


    //getElementsByTagName()
// let vegetables = document.getElementsByTagName("li"); //returns a collection
// console.log(vegetables);
// vegetables[0].style.backgroundColor = "Orange";
////                  access the tag using index then change color



    //getElementsByClassName()
// let desserts = document.getElementsByClassName("desserts");
// console.log(desserts)
// desserts[0].style.backgroundColor = "lightBlue";




    //querySelector()
//we can select an element by class name by id, attribute, tag, className using query selector
//Its more popular
////use.classname,  #id for id, [for] for radio buttons with label
//use name of tag for selecting tag elements
// let element = document.querySelector("#myTitle"); //use # or . 
// element.style.backgroundColor = "yellow"; //selects only first element

// //to select all elements
// let elements = document.querySelectorAll("li"); 

// elements.forEach(element=>{   //to traverse over all elements of li
//     element.style.backgroundColor = "lightgreen";
// });





    // DOM traversal
    // .firstElementChild   //to select children 
    // .lastElementChild
    // .parentElement
    // .nextElementSibling   //to select siblings
    // .previousElementSibling
    // .children[]
    // .array.from(.children)

// FOR Eg: if a body tag contains three pairs of unorderd list
// tags then these three unorderd lists becomes children of body tag
//If second ul is child of body then the reamining two are
//siblings of second ul.


// let element = document.body;  //to select body

// let child = element.firstElementChild;
// child.style.backgroundColor = "green";
// let lastchild = element.lastElementChild;
// lastchild.style.backgroundColor = "black" //nothing happens
// // because the last element of body is script tag not the unorderd list we created

// let parent = element.parentElement;
// parent.style.backgroundColor = "pink";

// let element = document.querySelector("#vegetables")
// let sibling = element.nextElementSibling;  //next sibling of vegtables is desserts
// sibling.style.backgroundColor = "yellow";
// let sibling1 = element.previousElementSibling;  //previous sibling of vegetables is fruits
// sibling1.style.backgroundColor = "blue"


// let element = document.querySelector("#fruit")
// let child = element.firstElementChild;  to select children of fruits
// child.style.backgroundColor = "red"
// let child2 = element.lastElementChild;
// child2.style.backgroundColor = "yellow";

  //another way to access children is using children[index]

//   let element = document.querySelector("#fruit"); //selecting fruits list
//   let child = element.children[0]
//   child.style.backgroundColor = "green";
//   let child1 = element.children[1]   //children ***
//   child1.style.backgroundColor = "Orange";
//   let child2 = element.children[2]
//   child2.style.backgroundColor = "yellow";



//    //If we want all the elements we can use children
//    let allChildren = Array.from(element.children)  /* we have to use Array.from() then we can traverse over the array) */

// allChildren.forEach(Child=>Child.style.backgroundColor = "lightgreen")





    //add/change HTML elements

// const nameTag = document.createElement("h1");  //***created h1 header tag

// to insert text into nameTag we can use either
//innerHTML(VULNERABLE TO XSS ATTACKs)
//.textContent(more secure)

// nameTag.textContent = "bro";   //inserting text into element
// document.body.append(nameTag)  //appending element to doc body


//add list item to unorderd list
// const myList = document.querySelector("#fruit");
// let listItem = document.createElement("li");
// listItem.textContent = "mango"
// myList.append(listItem); //to add element at end of list
// myList.prepend(listItem);// to add element at beginning of list


// // to add element in the middle of the list
// myList.insertBefore(listItem, myList.getElementsByTagName("li")[3]);






    //add/change css properties

// const title = document.getElementById("myTitle");

// title.style.backgroundColor = "#222222";
// title.style.color = "rgb(50,200,250)"
// title.style.fontFamily = "consolas";
// title.style.textAlign = "center";
// title.style.border = "2px solid"
// title.style.display = 'block';  //"none" to hide element







    //Events
    //An event is some action that the user or broswser does
    //Many html elements contain event attributes

    //onclick event attribute
// function doSomething(){
//     alert("hello there!");
// }
    // or another way is

// const element = document.getElementById("myButton");
// element.onclick = doSomething;  //callback fn



// function doSomething(){
//     alert("onclick event has occured!");
// }


    //onload event attribute

// const element = document.body;  //**** */
// element.onload = doSomething;  //*** */

// function doSomething(){
//     alert("onload event has occured");
// }


    //onchange event attribute

// const element = document.getElementById("myText");
// element.onchange = doSomething;


// function doSomething(){
//     alert("onchange event has occured")
// }


//     //onmouseover

// const element = document.getElementById("myDiv");
// element.onmouseover = doSomething;  //**  on
// element.onmouseout = doSomethingElse; //onmouseout event
// element.onmousedown = doSomethingElse;  //click and hold to invoke fn 
// element.onmouseup = doSomething; //release to invoke fn


// function doSomething(){
//     element.style.backgroundColor = "red";
// }


// function doSomethingElse(){
//     element.style.backgroundColor = "lightgreen";
// }







    //.addEventListener(event, function, useCapture)
    //It's the preferred way of handling events
    //You can add many event handlers to one element.
    //Even the same event can invoke several functions.

// const innerdiv = document.getElementById("innerDiv");
// innerdiv.addEventListener("mouseover", changeRed);  //mouseover not onmouseover like events
// //we can add any no of eventListeners
// innerdiv.addEventListener("mouseout", changeGreen);   

// function changeRed(){
//     innerdiv.style.backgroundColor = "red";
// }
// function changeGreen(){
//     innerdiv.style.backgroundColor = "lightgreen";
// }

// what happens exactly if both the outer div and inner div
// are waiting for the same event mouseover,
// which element would be handled first, the inner element 
// or the outer element, we can set that with the third 
// element, useCapture argumnet.

// const outerdiv = document.getElementById("outerDiv");
// const innerdiv = document.getElementById("innerDiv");
// outerdiv.addEventListener("click", changeBlue, true);
// innerdiv.addEventListener("click",changeBlue);
//here if we clickk on the inner div box, the inner div was 
//handled first but if we want to handle outer div first
// then we can add another parameter true to addeventlistener
// then the outer div will be handled first,
//this is the use of use capture.

//IF TWO ELEMENTS ARE TAKING THE SAME SPACE AND THEY ARE 
// LISTENING FOR THE SAME EVENT, WE CAN SPECIFY WHICH ONE 
//SHOULD HAVE MORE PREFERENCE.

// function changeBlue(){
//     alert(`you have used ${this.id}`)
//     this.style.backgroundColor = "lightBlue";
// }





    //show/hide html elements
// when we click on a button, we want to toggle between
// showing and hiding that image.
// const mybutton = document.querySelector("#myButton");
// const myimage = document.querySelector("#myImage");

// mybutton.addEventListener("click", ()=>{
//     console.log(myimage.style.display)
//     if(myimage.style.display=="none"){
//         myimage.style.display="block";
//     }
//     else{
//         myimage.style.display = "none";
//     }
// })

//but if we set display property to none in the beginning
//then if we click the button on the first time it doesnt 
//do anything, from second click it will be normal, the rea
//son is the style from our style sheet is not ready yet,to
// understand this, lets see the value in 291 line.
//If the display == none then display the image but here 
//technically the output was no, so else block is executed
//first, now the value of display = none, if we press the button
//again it will work normally
//To avoid this we can use inline styling and use display property
//in inline styling.

// IF WE WANT TO RESERVE SPACE FOR IMAGE WITHOUT SHIFTING THE
// TEXT UNDER THE IMAGE WE CAN USE VISIBILITY PROPERTY INSTEAD OF 
// DISPLAY PROPERTY.

















