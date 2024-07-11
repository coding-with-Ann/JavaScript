// MEMOIZATION
// Memoization is an optimization technique that can be used to reduce time-consuming calculations
// by saving previous input to something called cache and returning the result from it. 

// const lookup = {}

// const smartAddWith50 = (num)=>{
//     if(num in lookup){
//         console.log('no is is cache')
//         return lookup[num]
//     }
//     lookup[num] = num+50
//     return lookup[num]
// }

// console.log(smartAddWith50(100))
// console.log(smartAddWith50(200))
// //If we pass 100 and 200 to the fn again we will get output quickly because the numbers are cached
// //we can calculate the time using console.time() and console.timeEnd()
// console.log(smartAddWith50(100))
// console.log(smartAddWith50(200))


// but lookup is not safe, use closure to make it safe



const smartAddWith50 = ()=>{
    const lookup = {}

    return (num)=>{
        if(num in lookup){
            console.log('no is is cache')
            return lookup[num]
        }
        lookup[num] = num+50
        return lookup[num]
    }
    
}
const add = smartAddWith50()
console.log(add(50))  //*** add(50) */
console.log(add(50))
