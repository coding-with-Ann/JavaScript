const answer = Math.floor(Math.random()*10+1);
let guesses = 0;

document.getElementById("submit").onclick = function(){

    let guess = document.getElementById("inputNum").value;
    guesses+=1;

    if(guess>answer){
        alert("Too long");
    }
    else if(guess<answer){
        alert("Too small");
    }
    else{
        console.log(`correct ${guesses} guesses`)
    }

}