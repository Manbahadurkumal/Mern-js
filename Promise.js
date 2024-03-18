const login = (username, password) =>{
    return new Promise((resolve, reject) =>{
        const loginSuccess = true;
        if(loginSuccess){
            resolve({name: "manish"})
        }else{
            reject("Error")
        }
    })
}
login("admin", "admin123")
.then(()=>{})
.catch()
console.log("I am last Line")
// const alwaysResolve = () =>{
//     return new Promise((res, rej) =>{
//         res("I am resolve")
//     })
// }
// alwaysResolve()
// .then(res)
// console.log(alwaysResolve)
