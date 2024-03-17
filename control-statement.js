
let total = 500;
let student ={
    name: "Student One",
    email: "one@student.com",
    marksObt: 400,

}
 student.percentage =  student.marksObt/total *100;
 console.log("your percentage is" + student.percentage )
if(student.percentage >= 80){
    console.log("First Division with Distinciton");
}
else if(student.percentage>= 60 ){
    console.log("First division")
}
else if( student.percentage>= 45 ){
    console.log("Second division")
}
else if( student.percentage>= 35 ){
    console.log("Third division")
}
else{
    console.log("Sorry! you are failed")
}
