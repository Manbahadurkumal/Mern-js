const doSomething = () => {
    return new Promise ((res, rej)=>{
        const x = true;
        if(x){
            res("I am resolve of something")
        }else{
            rej("I am reject of something")
        }
    })
}
const doNothing = () => {
    return new Promise ((res, rej)=>{
        const y = true;
        if(y){
            res("I am resolve of nothing")
        }else{
            rej("I am reject of nothing")
        }
    })
}
const doAnything = () => {
    return new Promise ((res, rej)=>{
        const z = true;
        if(z){
            res("I am resolve of anything")
        }else{
            rej("I am reject of anything")
        }
    })
}
// doSomething()
//     .then((res)=>{
//         console.log(res)
//         return doNothing()
            
//     })
//     .then((res)=>{
//         console.log(res)
//         return doAnything()
//     })
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((rej)=>{
//         console.log(rej)
//     })

const allHandle = Promise.all([doSomething(), doNothing(), doAnything()])
allHandle
.then((res)=>{
    console.log(res)
})
.catch((rej)=>{
    console.log(rej)
})
const allSettle = Promise.allSettled([doSomething(), doNothing(), doAnything()])
allHandle
.then((res)=>{
    console.log(res)
})
.catch((rej)=>{
    console.log(rej)
})