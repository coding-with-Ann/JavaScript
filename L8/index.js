    //window = interface used to talk to the web browser
    //DOM is a property of the window
    //By interacting with the properties and methods of our
    //window we can change the behaviour of our web browser.


// console.dir(window)
// console.log(window.innerWidth) //returns inner width of browser window(upto scrollbars)
// console.log(window.innerHeight)

// console.log(window.outerWidth) //returns outer width of browser window(whole window)
// console.log(window.outerHeight) 


    // scrollX and scrollY properties
    //shows how far we scrolled the scroll bars
// console.log(window.scrollX)  //value of horizontal slidebar
// console.log(window.scrollY)  //value of vertical slidebar


    //change href property of window
    // href can be found within location

// console.log(window.location.href)  // href location
       ////document.URL  returns the same address 
// window.location.href="https://google.com" 
               // //changing or redirecting the href to google
// console.log(window.location.hostname)//returns host name
// console.log(window.location.pathname) //returns the path





    //to open a new window

// const mybtn = document.querySelector("#myBtn")
// const mybtn1 = document.querySelector("#myBtn1")

// mybtn.addEventListener("click" ,()=>window.open())
// //                    winodw.open() opens a new window

// mybtn1.addEventListener("click", ()=>window.open("https://google.com"))
// //           window.open("url") opens url in new window

// const mybtn2 = document.querySelector("#myBtn2")
// mybtn2.addEventListener("click", ()=>window.close())
// //                window.close  closes the current window

// const mybtn3 = document.querySelector("#myBtn3")
// mybtn3.addEventListener("click", ()=>window.print())


// window.alert("hello1") //alert popup
// window.confirm("press ok to continue")  //user confirm something

// let age = window.prompt("Enter ur age")
// if(age<18){
//     window.alert("you must be 18+ to visit this site")
//     window.close()
// }
