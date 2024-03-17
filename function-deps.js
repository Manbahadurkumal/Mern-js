const func1 = () =>{
    //clouser
    const func2 = (x) =>{
        return x+1;
    }
    return func2(1)
}
const func2Res = func1()
console.log(func2Res)
const func3 = () =>{
    //clouser
    const func4 = (x) =>{
        return x+1;
    }
    return func4
}
const func4Res = func3()
const result = func4Res(1)
console.log(result)