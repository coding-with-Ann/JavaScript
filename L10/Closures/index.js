// CLOSURES  = function defined inside another fn
//the inner fn has access to the variables and scope of outer fn.
//By using closures they allow private variables and state maintainance
//used frequently in Js frameworks: react, vue, angular.

function outer(){
    let msg = 'hello'

    function inner(){
        console.log(msg)

    }
    inner()
}

msg = 'goodbye'  //we can't update msg outside the scope of outer(), msg is acting like private variable

outer() //nothing happens(msg will not get printed) until we call inner() inside the outer fn scope



//state maintainance
function createCounter(){

    let count =0
    function increment(){
        
        count++
        console.log(count)
    }

    function getCount(){
        return count
    }
    return({increment,getCount}) //this not only returns increment(), getcount() but also outer() *****

}


const counter = createCounter()  //creating object of createCounter method
counter.increment()
counter.increment()
counter.increment()

console.log(counter.count)  //returns undefined cos count can't be accessed directly

console.log(counter.getCount()) //accessing count value using getCount method.

