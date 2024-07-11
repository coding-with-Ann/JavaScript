    //detect key presses
//To detect key presses we can add event listener to 
//our window.

const div = document.querySelector("#myDiv");
window.addEventListener("keydown", moveDown);
let x=0;
let y=0;
function moveDown(event){
    // if(event.key=="ArrowDown"){
    //     y+=5
    //     div.style.top = y+"px" 
    // }

    // else if(event.key=="ArrowUp"){
    //     y-=5
    //     div.style.top = y+"px"
    // }

    // else if(event.key=="ArrowRight"){
    //     x+=5
    //     div.style.left = x+"px"
    // }
    // else if(event.key=="ArrowLeft"){
    //     x-=5
    //     div.style.left = x+"px"
    // }

    // else{
    //     x=0
    //     y=0
    // }


    // using switch

    switch(event.key){
        case "ArrowUp":
            y-=5
            div.style.top = y+"px"
            break
        
        case "ArrowDown":
            y+=5
            div.style.top = y+"px"
            break
        
        case "ArrowLeft":
            x-=5
            div.style.left = x+"px"
            break

        
        case "ArrowRight":
            x+=5
            div.style.left = x+"px"
            break

    }





}


