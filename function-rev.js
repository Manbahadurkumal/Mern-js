 //compilation error  && runtime error (logical error)

 //call back
//  function getSum(arrNumbs){
//     let sum = 0
//     for(let num of arrNumbs){
//         sum += num;
//     }
//     return sum;
//  }
//  const arrayNumbs = [ 1,2,3,4,5]
//   const result = getSum(arrayNumbs)
//   console.log(result)

//map function  
 // -----> it returns 
//  const getSum = (arrNumbs, cb) =>{
//     let sum = 0
//      const xyzNumbs = arrNumbs.map((num) =>{
//         sum += num;
//         // return sum;
//         console.log(xyzNumbs);
//     })
//     cb()
//         return sum;
//  }
//  const arrayNumbs = [ 1,2,3,4,5]
//  const result = getSum(arrayNumbs)
// console.log(result)

//forEach function
const getSum = (arrNumbs)=>{
    let sum = 0;
    arrNumbs.forEach((num, ind)=>{
        sum += num
    })
    const evens = arrNumbs.filter((num)=>(num%2 ===0))
    return {sum, evens}

}
const arrayNumbs = [ 1,2,3,4,5]
const {sum, evens} = getSum(arrayNumbs)
console.log(sum, evens)