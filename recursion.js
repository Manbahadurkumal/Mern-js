// const printCat = () =>{

// }
const toPrint = (num, check = 10) =>{
    console.log(num)
    if(num === check){
        return ;

    }else{
        toPrint(num + 1, check)
    }
}
toPrint(1, 10)