// A block of code caplable to execute independently 
//for some specific task to perform
// function student(){
    
// }
// A function can take anything as an input and can return anything as an output
// async or sync
// arrow function{
//     this scope not available
//     super acecess
//     cosntructor never arrow declare
// }
const getPercentage = (marksObt, total)=>{
    const per = marksObt / total *100
    return per;
}
const getDivision = (Percent)=>{
    if(Percent >= 80){
        return "First with Distinciton"
    }else if(Percent >= 60){
        return "first Division"
    }else if(Percent >= 40){
        return "Second Division"
    }else if(Percent >= 30){
        return "Third Division"
    }
    else{
        return "Sorry! you are failed"
    }
}
// const Percent = getPercentage(400, 500)
// const division =getDivision(Percent)
// const division = getDivision(getPercentage(400, 500))
// console.log("your percentage is" + Percent)
// console.log("your division is" + division)
console.log(getDivision(getPercentage(400, 500)))

const addTwoNumbers = (a=0, b=0)=>{
    const c = a + b
    return c;
}
const result =addTwoNumbers(1,2,3);
console.log(result)

const printName = () =>{
    console.log("your name is: ", name);
}
const name = "manish kumal"
printName()

 const testFunction = () =>{
    x = "test";
    y = "test y"
 }
 let x
 let y
 testFunction()
 console.log(x);
 console.log(y);

