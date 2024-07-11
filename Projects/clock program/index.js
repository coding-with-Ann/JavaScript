//clock that updates every second

// setInterval(update,1000)
// function update(){
//     const date = new Date();
//     formatTime(date);

//     function formatTime(date){
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let amOrpm = hours>=12?"pm":"am";
//         hours = (hours%12) || 12
        
        
//         hours = addZero(hours);
//         minutes = addZero(minutes);
//         seconds = addZero(seconds);
//         document.getElementById("myLabel").innerHTML = `${hours}:${minutes}:${seconds} ${amOrpm}`

//         function addZero(value){
//             value = value.toString();   //value to string
//             if(value.length == 1){
//                 return "0"+value ;
//             } 
//             else{
//                 return value;
//             }
//         }
//     }
// }
