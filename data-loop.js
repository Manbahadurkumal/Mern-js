total = 500;
const students= [
    {
        name: "student one",
        marksObt: 300
    },
    {
        name: "student Two",
        marksObt: 100
    },
    {
        name: "student Three",
        marksObt: 200
    },
    {
        name: "student Four",
        marksObt: 400
    },
    {
        name: "student Five",
        marksObt: 450
    },
    {
        name: "student six",
        marksObt: 480
    },
    {
        name: "student seven",
        marksObt: 370
    },
    {
        name: "student eight",
        marksObt: 290
    },
    {
        name: "student nine ",
        marksObt: 310
    },
    {
        name: "student ten",
        marksObt: 345
    }
]
 console.log(students)
 for(i= 0; i<= students.length; i++){
    students[i].percentage = students.marksObt / total *100;
    if(students[i].percentage >= 80){
        students[i].division("First Division with Distinciton");
    }
    else if(students[i].percentage>= 60 ){
        students[i].division("First division")
    }
    else if( students[i].percentage>= 45 ){
        students[i].division("Second division")
    }
    else if( students[i].percentage>= 35 ){
        students[i].division("Third division")
    }
    else{
        students[i].division("Sorry! you are failed")
    }
 }
 console.log("")
 console.log("")
 console.log(students)