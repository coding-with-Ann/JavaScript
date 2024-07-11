    //cookies = small text file stored on your computer.
    //          used to remember the info about the user.
    //          data within a cookie is saved in name value
    //            (name = value)pairs.

////to check if cookies are enabled
// console.log(navigator.cookieEnabled) 
//     ////returns true if cookes are enabled else returns false

// document.cookie = "firstName = Ben; expires= 1 january 2024 12:00:00 UTC; path=/"
//        ////document.cookie =" " ;to create cookie
//        ////name value pair(name = value)
//        ////expires = date and time;    to add date of expiry and time
//        ////path = / is the default path

// document.cookie = "lastName = Tennison; expires=1 january 2024 12:00:00 UTC; path=/; "
// console.log(document.cookie)
//// here the output is an object ***
////The cookie property of document can hold more than one
////cookie but to access it, use one (document.cookie).
////To override cookie we can change the value of name value
////pair


////If we change the expire date to some date that has been
//// already passed, that would delete the cookie ***
// document.cookie = "firstName = Mark; expires=1 january 2020 12:00:00 UTC;"
// console.log(document.cookie)

// deleteCookie("email")
// deleteCookie("firstName")
// deleteCookie("lastName")
// // setCookie("email", "ben@gmail.com", 365)
// console.log(document.cookie)

// setCookie("firstName", "Ben", 365)
// setCookie("lastName", "Tennyson", 365 )
// getCookie("firstName")
// console.log(getCookie("firstName"))
// console.log(getCookie("lastName"))




let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let submitBtn = document.querySelector("#submitBtn")
let cookieBtn = document.querySelector("#cookieBtn")
submitBtn.addEventListener("click", ()=>
{
    setCookie("firstName", firstName.value, 365)
    setCookie("lastName", lastName.value, 365)
    
})

cookieBtn.addEventListener("click", ()=>
{
    firstName.value = getCookie("firstName")
    lastName.value = getCookie("lastName")
})


function setCookie(name, value, daysToLive){
    const date = new Date()
    date.setTime(date.getTime() + (daysToLive *24*60*60*1000))
        //This future date will be in ms
    let expires = "expires=" + date.toUTCString()
        //converting date to utc string
    document.cookie = `${name}=${value}; ${expires}; path=/;`
}

function deleteCookie(name){
    setCookie(name,null, null)

}


    //get value of a cookie by name

function getCookie(name){
    //we need to decode our cookie
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split("; ")
    //this returns an array
    //console.log(cArray)
    result = null

    cArray.forEach((element)=>{
        if(element.indexOf(name)==0){
            result = element.substring(name.length+1)
        }
       
    })
    return result
}


