// document.getElementById("mytext").innerHTML = "Bye"

// document.getElementById("mybtn").onclick = function(){
//     document.getElementById("mytext").innerHTML = "Hello Bye!"
//}


// window.alert("wakeup")

// let age = Number(window.prompt("Enter your name"))
// console.log(typeof(age))

// document.getElementById("mybtn1").onclick = function(){
//    let name= document.getElementById("myname").value
//    console.log(name)
// }


// let number =2

// switch(true){    **********
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



// function doSomething(){   ****

//     for(var i=0; i<2; i++){
//         console.log(i)
//     }

//     console.log(i)
// }


// let temp=21
// let a=`hello <br>
// your cart is filled <br>
// bye`
// console.log(a)


// document.getElementById("a").innerHTML = a



// num =10

// // num = num.toLocaleString("hi-IN", {style: "currency", currency:"INR"} )
// // console.log(num)

// num = num.toLocaleString(undefined, {style:"unit", unit:"centimeter"})
// console.log(num)


// let arr = [1,2,3,4,5]
// for(i of arr){
//     console.log(i)
// }
// arr.push(10)
// console.log(arr)
// arr.pop()
// console.log(arr)

// arr[0]=11
// console.log(arr)

// let arr = [1,2,3,4,5]
// let max = Math.max(...arr)
// console.log(max)

// let class1 =[1,2]
// let class2 =[3,4]

// let a=1
// let b=2
// let c=3


// console.log(sum(a,b,c))

// function sum(...numbers){
//    total = 0
//     for(i of numbers){
//         total = total+i
//     }
//     return total
    
// }

// let a=5
// let b=4
// sum = sum(a,b, sub)
// console.log(sum)


// function sum(x,y, sub){
//     sub = sub(x,y)   //dont write this after return statement
//     console.log(sub)
//     return x+y
// }

// function sub(x,y){
//     return x-y
    
// }



// let a=5
// let b=4
// sum(a,b, sub)



// function sum(x,y, sub){
//     sum = x+y
//     console.log(sum)
//     sub(x,y)   
// }

// function sub(x,y){
//     sub = x-y
//     console.log(sub)
// }


// let numbers =[1,2,3,4,5]

// let squares = numbers.map(square)
// squares.forEach(print)


// function square(element){
//     return element **2
// }

// function print(element){
//     console.log(element)
// }


// let numbers =[1,2,3,4,5]
// let multOfTwo = numbers.filter(chk)  
        ////filter() returns only the elements that pass the given condition.
// multOfTwo.forEach(print)


// function chk(element){
//     if (element %2 ==0){
//         return element

//     }
// }

// function print(element){
//     console.log(element)
// }


// let numbers =[1,2,3,4,5]
// let sum1 = numbers.reduce(sum)
// console.log(sum1)

// function sum(sum1,element){
//    return sum1+element

// }


// let numbers = [22,33,2,16,7,4,43,11]
// let sorted = numbers.sort(compare)
// console.log(sorted)


// function compare(a,b){
//     return a-b
// }



// const store = new Map([
//                     ["shirt", 20],
//                     ["pant", 25],
//                     ["T-shirt",10],
//                     ["night-pant",15],
//                     ])
// let total =0

// total += store.get("shirt")
// total+= store.get("pant")
// total+= store.get("T-shirt")
// total+= store.get("night-pant")
// console.log(total)


//object and this
// let fruit = {
//         name: "Orange",
//         color: "orange",
//         flavour: "sweet and sour",

//         taste: function(){
//                 console.log(`${this.name}, is sweet and sour`)

//         },

//         vitamin: function(){
//                 console.log("Orange has vitamin c")
//         }
// }

// console.log(fruit.name);
// console.log(fruit.flavour)
// fruit.vitamin()
// fruit.taste()


// console.log(this)  //refers to window object

// using var
// var name="bro";
// declaring variable with var in global scope will change 
// the browser window property so don't do it.


// class Tv{
//         country ="japan"
//         constructor(name, company, city){
//                 this.name = name;
//                 this.company = company;
//                 this.city = city;
                
//         }
        
//         display(){
//                 console.log(`${this.name} can display video`)
//         }

//         quality(){
//                 console.log( this.company, "has good quality products")
//         }

// }

// const tv = new Tv("Tv", "Tv company", "Tokyo")
// console.log(tv.name)
// tv.display()
// tv.quality()


// class SamsungTv extends Tv{
//         type = "wireless"
//         wifi = "yes"


//         internet(){
//                 console.log("samsung tv can connect to internet")
//         }

//         wiFi(){
//                 console.log("samsung tv has wifi access")
//         }
// }

// const samsung = new SamsungTv()
// console.log(samsung.type);
// console.log(samsung.wifi);
// samsung.internet()
// samsung.wiFi()
// samsung.display()
// console.log(samsung.country)



// class Car{
//         static noOfCars =0;
//         constructor(name, speed){
//                 this.name = name;
//                 this.speed =speed;
//                 Car.noOfCars +=1
//         }

//         speedOfCar(){
//                 console.log(`speed is ${this.speed}`)

//         }

//         static go(){
//                 console.log(`3..2..1..go`)
//         }
// }

// const car1 = new Car("Lambo", 150)
// const car2 = new Car("Ferrari", 155)
// const car3 = new Car("Benz", 160)
// const car4 = new Car("BMW", 165)


// console.log(Car.noOfCars)
// car2.speedOfCar()
// Car.go()



// class Car{
//         constructor(carname, speed){
//                 this.carname = carname;
//                 this.speed =speed;
                
//         }

//         speedOfCar(){
//                 console.log(`speed is ${this.speed}`)

//         }

//         static go(){
//                 console.log(`3..2..1..go`)
//         }
// }

// const car1 = new Car("Lambo", 150)
// console.log(car1.carname);
// car1.speedOfCar()
// Car.go()



// class Ferrari extends Car{

//         constructor(engine, gps,carname,speed){
//                 super(carname, speed)
//                 this.engine = engine
//                 this.gps = gps    
//         }

//         cost(){
//                 console.log(`${this.carname} cost is 1 Million USD`)

//         }

// }

// const car11 = new Ferrari("petrol", "google", "BMW",200)
// console.log(car11.engine)
// console.log(car11.gps)
// console.log(car11.carname)
// console.log(car11.speed)
// car11.cost()




// class Cat{
//         constructor(name, age, gender){
//                 this._name = name
//                 this._age = age
//                 this._gender = gender
//         }

//         get age(){
//                 return `${this._age}`
//         }

//         set gender(value){
//                 this._gender = value
//         }


// }

// const cat = new Cat("lion", 5, "M")
// console.log(cat._name)
// console.log(cat._age)

// console.log(cat._gender = "m")
// console.log(cat._gender)


// object as parameter to a function
// class Cat{
//         constructor(name, gender){
//                 this.name = name
//                 this.gender = gender
//         }


//         talk(){
//                 console.log(`${this.name} can make sound`)
//         }

// }

// const cat1 = new Cat("Lion", "male")
// const cat2 = new Cat("Tiger", "female")
// const cat3 = new Cat("Tom", "male")
// const cat4 = new Cat("Cub", "female")

// function selectCat(object){
//         console.log(object.name)
//         console.log(object.gender)
// }

// selectCat(cat1)
// selectCat(cat2)
// selectCat(cat3)
// selectCat(cat4)


        //array of objects
// let objects =[cat1, cat2, cat3, cat4]

// for(object of objects){
//         console.log(object.name)
//         console.log(object.gender)
//         object.talk()
// }




        //anonymous objects
// class vegetable{
//         constructor(name){
//                 this.name = name
//         }
//         benifits(){
//                 console.log(`${this.name} is good for health`)
//         }
// }

// let objects = [new vegetable("Carrot"),
//                 new vegetable("Tomato"),
//                 new vegetable("cauliflower")]

// console.log(objects[0].name);
// objects[1].benifits()

// try{
//         let number = Number(window.prompt())
       
//         if(isNaN(number)) throw "Not a number"
//         if(number =="") throw "empty"
//         console.log(number)

// }catch(error){
//         console.log(error)
// }


// let time = setTimeout(() => {
//         console.log("hello world")
        
// }, 3000);


// let count =0   //global variable
// let time1 = setInterval(()=>{
//         console.log("Bye")
//         count+=1
//         if(count == 3){
//                 clearTimeout(time1)
//         }
// }, 3000)



// const date1 = new Date()
// console.log(date1)
// console.log(date1.getDate())

// console.log(date1.getFullYear())
// console.log(date1.getMonth()+1)
// console.log(date1.getDay())
// console.log(date1.getHours())
// console.log(date1.toLocaleDateString())

// const date2 = new Date(0)
// console.log(date2)

// const date3 =  new Date(10000000000000)
// console.log(date3)


// const date4 = new Date("23 october 2023  06:30:00")
// console.log(date4)
// const date5 = new Date(2023,1,1,6,30,0,0)
// console.log(date5)


// date5.setFullYear(2025)
// console.log(date5)
// date5.setMonth(0)
// console.log(date5)
// date5.setDate(1)
// console.log(date5)



// console.time("Response Time")   //asynchronous operation

// setTimeout(()=>console.log("hi"),3000)

// console.timeEnd("Response Time")


// console.time("Response Time")   //asynchronous operation

// console.log("hi")

// console.timeEnd("Response Time")




// const promise = new Promise((resolve, reject)=>{
//         file_loaded = false
//         if(file_loaded){
//                resolve("File loaded") 
//         }
//         else{
//                 reject("file not loaded")
//         }
// })
// promise.then(()=>console.log("file loaded")).catch(error=>
//         console.log(error))



// const promise = new Promise((resolve, reject)=>{
//                delay = setTimeout(()=>console.log("hello"), 5000)
//                 if(delay){
//                        resolve("success") 
//                 }
//                 else{
//                         reject("nope")
//                 }
//         })
//         promise.then((message)=>console.log(message)).catch(error=>
//                 console.log(error))


// const promise = new Promise((resolve)=>{
//     setTimeout(resolve,5000)
// });
// promise.then(()=>console.log("Thanks for waiting")).catch((error)=>
//         console.log(error));


// async function loadFile(){
//         fileLoaded = false
//         if(fileLoaded){
//                 return "file loaded"
//         }
//         else{
//                 throw "file not loaded"
//         }
// }
// loadFile().then((message)=>console.log(message)).catch((
//         error)=> console.log(error))


// function loadFile(){
//         fileLoaded = false

//         if(fileLoaded){
//                 return Promise.resolve("file loaded")
//         }
//         else{
//                 return Promise.reject("file not loaded")
//         }
// }

// loadFile().then(()=>console.log("file loaded")).catch((error)=>{
//         console.log("file not loaded")
// })





//await

// async function loadFile(){
//         fileLoaded = false
//         if(fileLoaded){
//                 return "file loaded"
//         }
//         else{
//                 return "file not loaded"
//         }
// }

// async function startProcess(){
//         try{
//                 let message = await loadFile()
//                 console.log(message)
//         } 
//         catch(error){
//                 console.log(error)
//         }  
// }
// startProcess()






// class Car{
//         constructor(power){
//                 this._power = power
//         }

//         get power(){
//                 return this._power+"hp"
//         }

//         set power(newValue){
//                 this._power = newValue
//         }

        
// }
// const car = new Car(200)
// console.log(car.power)
// console.log(car.power=500)
// console.log(car.power)




// console.log(document.title)
// console.log(document.URL)

// console.log(document.location.href)


// document.body.style.backgroundColor = "lightBlue"

// let text = document.getElementById("mytext")
// text.style.backgroundColor = "blue"

// let button = document.getElementsByTagName("button")
// button[0].style.backgroundColor = "pink"
// button[0].style.color = "white"

// let list = document.getElementsByTagName("li")
// list[0].style.backgroundColor = "yellow"


// let veg = document.getElementsByName("vegetable")
// veg.forEach(element=>console.log(element.value))


// let fruit = document.getElementsByClassName("fruits")
// console.log(fruit)
// fruit[2].style.backgroundColor = "Orange"


// let textContent = document.querySelector("#mytext")
// textContent.style.backgroundColor = "pink"


// // let fruit= document.querySelector(".fruits")
// // fruit.style.backgroundColor = "blue"

// let fruits = document.querySelectorAll(".fruits")
// console.log(fruits)
// fruits.forEach(element=>element.style.backgroundColor = "blue")


// let fruitList = document.querySelectorAll("li")
// console.log(fruitList)
// fruitList.forEach(element=>element.style.backgroundColor = "green")


// let veg = document.querySelectorAll("[for]")
// veg.forEach(element=>element.style.backgroundColor = "lightblue")



//DOM traversal

// let element = document.querySelector(".outerDiv")
// let child = element.firstElementChild
// child.style.backgroundColor = "pink"

// let lastChild = element.lastElementChild
// lastChild.style.backgroundColor = "blue"

// let parent = child.parentElement
// parent.style.backgroundColor = "yellow"
// parent.style.color = "lightblue"

// let box = document.querySelector(".box3")
// nextBox = box.nextElementSibling
// nextBox.style.backgroundColor = "pink"
// prevBox = box.previousElementSibling
// prevBox.style.backgroundColor = "blue"

// let element = document.querySelector(".outerDiv")
// let box1 = element.children[3]
// box1.style.backgroundColor = "aqua"



// let element = document.createElement("h1")
// element.textContent = "hello Earth"
// document.body.append(element)


// let fruit = document.querySelector(".fruits")
// let listElement = document.createElement("li")
// listElement.textContent = "strawberry"
// fruit.append(listElement)
// fruit.prepend(listElement)


// let title = document.querySelector("#mytext")
// title.style.backgroundColor = "pink"
// title.style.display = "block"



//events

// let box = document.querySelector(".container")
// box.onclick = changeColor


// function changeColor(){
//         box.style.backgroundColor = "blue"
// }


// let box = document.body
// box.onload = message


// function message(){
        
//         window.alert("onload occured")

// }


// let box = document.querySelector(".container")
// box.onmouseover = changeColor
// box.onmouseout = changeToBlue
// box.onmousedown = changeToYellow
// box.onmouseup = changeToAqua


// function changeColor(){
//         box.style.backgroundColor = "blue"
// }


// function changeToBlue(){
//         box.style.backgroundColor = "lightblue"
// }

// function changeToYellow(){
//         box.style.backgroundColor = "yellow"
// }

// function changeToAqua(){
//         box.style.backgroundColor = "aqua"
// }



        // addEventListener

// let outerBox = document.querySelector(".container")
// outerBox.addEventListener("click",changeToRed, true)

// let innerBox = document.querySelector(".innerContainer")
// innerBox.addEventListener("click", changeToGreen)



// function changeToRed(){
//         outerBox.style.backgroundColor = "red"
//         console.log("hello")
// }

// function changeToGreen(){
//         innerBox.style.backgroundColor = "green"
//         console.log("bye")
// }




 //onchange event attribute

// const element = document.getElementById("myname");
// element.onchange = doSomething;




// function doSomething(){
//     alert("onchange event has occured")
// }



// let div = document.getElementById("animateDiv")
// let btn = document.querySelector("#animateBtn")
// btn.addEventListener("click", begin)


// function begin(){
//         let x=0
//         let timer = setInterval(frame, 10)
//         function frame(){
//                 if(x>300){
//                         clearInterval(timer)
//                 }
//                 else{
//                         x+=1
//                         div.style.left = x+"px"   
//                 }
//         }
           
// }



// let div = document.getElementById("animateDiv")
// let btn = document.querySelector("#animateBtn")
// btn.addEventListener("click", begin)


// function begin(){
//         let degrees = 0
//         let timer = setInterval(rotate, 100)
//         function rotate(){
//                 if(degrees>=3000){
//                         clearInterval(timer)
//                 }
//                 else{
//                         degrees +=30
//                         div.style.transform = "rotateZ("+degrees+"deg)"   
//                 }
//         }
           
// }


// let div = document.getElementById("animateDiv")
// let btn = document.querySelector("#animateBtn")
// btn.addEventListener("click", begin)


// function begin(){
//     let x=0
//     let timer = setInterval(scale, 100)
//     function scale(){
//         if(x>3){
//             clearTimeout(timer)

//         }
//         else{
//             x+=0.5
//             div.style.transform = "scaleX("+x+")"
//         }
        
//     }

// }


// let canvas = document.getElementById("myCanvas")
// let context = canvas.getContext("2d")

// context.strokeStyle="blue"
// context.lineWidth = 55;
// context.beginPath()
// context.moveTo(0,0)

// context.lineTo(250,250)
// context.stroke()

// let canvas = document.querySelector("#myCanvas")
// let context = canvas.getContext("2d")

// context.beginPath()
// context.strokeStyle = "blue"
// context.fillStyle = "lightBlue"
// context.lineWidth = 100
// context.moveTo(0,0)
// context.lineTo(250,250)
// context.lineTo(500,0)
// context.lineTo(0,0)
// context.fill()
// context.stroke()



// let canvas = document.querySelector("#myCanvas")
// let context = canvas.getContext("2d")

// context.beginPath()

// context.fillStyle="skyblue"
// context.fillRect(0,0,250,250)
// context.strokeStyle="blue"
// context.strokeRect(0,0,250,250)

// context.fillStyle = "pink"
// context.fillRect(250,0,250,250)
// context.strokeStyle = "pink"
// context.strokeRect(250,0,250,250)

// context.fillStyle = "aqua"
// context.fillRect(0,250,250,250)
// context.strokeStyle="green"
// context.strokeRect(0,250,250,250)

// context.fillStyle = "silver"
// context.fillRect(250,250,250,250)
// context.strokeStyle = "white"
// context.strokeRect(250,250,250,250)



// let canvas = document.querySelector("#myCanvas")
// let context = canvas.getContext("2d")

// context.strokeStyle = "blue"
// context.fillStyle = "lightblue"
// context.beginPath()
// context.arc(250,250, 100, 0, Math.PI)
// context.stroke()
// context.fill()



// let canvas = document.querySelector("#myCanvas")
// let context = canvas.getContext("2d")

// context.textAlign = "center"
// context.font = "50px mv boli"
// context.fillText("hello There!", canvas.width/2,canvas.height/2)


        //window
// console.dir(window)
// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.outerWidth)
// console.log(window.outerWidth)

// console.log(window.scrollX)
// console.log(window.scrollY)

// console.log(window.location)
// console.log(window.location.href)
// console.log(window.location.href="https://google.com")
// console.log(window.location.href)

// console.log(location.hostname)
// console.log(window.location.pathname)




// let bt1 = document.querySelector("#btn1")
// bt1.onclick = ()=>window.open()

// let bt2 = document.querySelector("#btn2")
// bt2.onclick = ()=>window.open("https://google.com")


// let bt3 = document.querySelector("#btn3")
// bt3.onclick = ()=>window.close()


// let bt4 = document.querySelector("#btn4")
// bt4.onclick = ()=>window.print()

// let bt5 = document.querySelector("#btn5")
// bt5.onclick = ()=>window.confirm("press ok to confirm")

// window.alert("press ok")
// window.prompt("enter name")


// console.log(navigator.cookieEnabled)


document.cookie = "firstName = Ben; expires = 1 jan 2024; path=/"
// document.cookie = "lastName = Tennyson; expires = 1 jan 2024; path=/"



// setCookie("lastName", "Tennyson", null)
setCookie("email", "benTennyson@mail.com", 365)
setCookie("email1", "gwenTennyson@mail.com", 365)
setCookie("email2", "kevin@mail.com", 365)
console.log(document.cookie)

deleteCookie("email2")
console.log(document.cookie)

console.log(getCookie("email"))
console.log(getCookie("email1"))

function setCookie(name, value, daysToLive){
        let date = new Date()
        date.setTime(date.getTime()+daysToLive *60*60*60*1000)
        let expires = date.toUTCString()
        document.cookie = `${name}= ${value}; expires= ${expires}; path=/`
}



// delete cookie

function deleteCookie(name){
        setCookie(name, null, null)
}



//get cookie

function getCookie(name){
        const cDecoded = decodeURIComponent(document.cookie)
        console.log(cDecoded)
        const cArray = cDecoded.split("; ")
        console.log(cArray)
        let result =null
        
        cArray.forEach(element=>{
                if(element.indexOf(name)==0){
                        result = element.substring(name.length+1)
                }
               
        })
        return result
}
    




