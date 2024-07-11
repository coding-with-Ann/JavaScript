    //canvas API = a means for drawing graphics
    //used for animations, games and data visualization
    
    //canvas element is in html page with some width and height.


// let canvas =document.getElementById("myCanvas")
        // to draw in the canvas we need to get the context
// let context = canvas.getContext("2d")
        //context is like a painting within a picture frame
        //canvas is the picture and the frame together
        //to draw in the canvas we need to draw on the context 
        //itself, not the frame

// context.strokeStyle="purple"  //to set color of stroke
// context.lineWidth=5   //to set width of stroke.
// context.beginPath()  //to draw a line on context.
// context.moveTo(0,0)  //moveTo is like putting brush at some point on canvas
// context.lineTo(250,250)// ending coordinates of line
// context.stroke() //draws the current path

// context.lineTo(250,500)
// context.stroke()

// context.moveTo(500,0)
// context.lineTo(250,250)
// context.stroke()


    //Draw triangle
// let canvas =document.getElementById("myCanvas")
// let context = canvas.getContext("2d")
// context.fillStyle = "yellow"  //for fill color
// context.strokeStyle = "red"   //for stroke color
// context.lineWidth=10  //to change the line width of shape
// context.beginPath()
// context.moveTo(250,0)
// context.lineTo(0,250)
// context.lineTo(500,250)
// context.lineTo(250,0)
// context.stroke()
// context.fill()   //fills the shape with black color




    //Draw rectangle
// let canvas =document.getElementById("myCanvas")
// let context = canvas.getContext("2d")

// context.lineWidth = 10
// context.strokeStyle = "blue"     //stroke color
// context.fillStyle = "lightblue"   // to fill desired color
// context.fillRect(0,0,300,200)     //to fill the rectangle with black color
// context.strokeRect(0,0,300,200)   //to draw a rectangle, 
//            two zeros indicate starting point, 300, 200 
//               indicates width and height




    //draw four squares

// let canvas = document.getElementById("myCanvas")
// let context = canvas.getContext("2d")

// context.fillStyle = "black"
// context.fillRect(0,0,250,250)
// context.strokeStyle = "black"
// context.strokeRect(0,0,250,250)

// context.fillStyle="red"
// context.fillRect(0,250,250,250)
// context.strokeStyle = "black"
// context.strokeRect(0,250,250,250)

// context.fillStyle = "green"
// context.fillRect(250,250,250,250)
// context.strokeStyle = "black"
// context.strokeRect(250,250,250,250)

// context.fillStyle = "blue"
// context.fillRect(250,0,500,250)
// context.strokeStyle = "black"
// context.strokeRect(250,0,500,250)




    //Draw circle
    //(x, y, r, sAngle, eAngle, counterclockwise)
    //x,y are starting coordinates for center of circle
    //sAngle - starting angle, eAngle - ending angle
    //These two are in radians  ***
    //counterclockwise - 0 for counterclock, 1 for clockwise
    //default value is counter clockwise which is 0
// let canvas = document.getElementById("myCanvas")
// let context = canvas.getContext("2d")

// context.fillStyle = "lightBlue"
// context.strokeStyle = "darkblue"
// context.lineWidth = 10
// context.beginPath()
// context.arc(250,250,100, 0,2*Math.PI) 
// context.stroke()              //PI is in radians
// context.fill()



    //Draw text

let canvas = document.getElementById("myCanvas")
let context = canvas.getContext("2d")

context.font = "50px MV Boli"   //no ,
context.fillStyle = "blue"
context.textAlign = "center"
context.fillText("You Win!", canvas.width/2,canvas.height/2)
//You win is the text
//width/2, height/2 is to put text at centre
//100, 100 are starting coordinates of text










