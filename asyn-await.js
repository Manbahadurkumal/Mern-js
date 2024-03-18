const doSomething = async ()=>{
    const x = true;
    if(x){
        return "I am resolve of doSomething"
    }else{
        throw "I am reject of doSomething"
    }
}
const handler = async () =>{
    // let loading = true;
    try {
        const res = await doSomething()
        console.log(res)
    }catch(exception){
        console.log(exception)
    }
    // finally{
    //     loading = false
    // }
}
handler()