// total = 500;
// const students= [
//     {
//         name: "student one",
//         marksObt: 300
//     },
//     {
//         name: "student Two",
//         marksObt: 100
//     },
//     {
//         name: "student Three",
//         marksObt: 200
//     },
//     {
//         name: "student Four",
//         marksObt: 400
//     },
//     {
//         name: "student Five",
//         marksObt: 450
//     },
//     {
//         name: "student six",
//         marksObt: 480
//     },
//     {
//         name: "student seven",
//         marksObt: 370
//     },
//     {
//         name: "student eight",
//         marksObt: 290
//     },
//     {
//         name: "student nine ",
//         marksObt: 310
//     },
//     {
//         name: "student ten",
//         marksObt: 345
//     }
// ]
// for (let student of students){
//     students.percentage = students.marksObt / total *100;
//     if(students.percentage >= 80){
//         students.division("First Division with Distinciton");
//     }
//     else if(students.percentage>= 60 ){
//         students.division("First division")
//     }
//     else if( students.percentage>= 45 ){
//         students.division("Second division")
//     }
//     else if( students.percentage>= 35 ){
//         students.division("Third division")
//     }
//     else{
//         students.division("Sorry! you are failed")
//     }

// }
// console.log(students)
const category =[
    {
        name: "category 1",
        children: [
            {
                name: "category 1.1",
                children: [
                    {
                        name: "category 1.1.1",
                        children: null
                    }
                ]
            },
            {
                name:"category 1.2",
                children: [
                    {
                        name: "category 1.2.1",
                        children:[{
                            name: "category 1.2.1.1",
                            children: null
                        }
                           

                        ]
                    }
                ]
            }
            
            

        ]
    },
    {
        name: "category 2",
        children: [
            {
                name: "category 2.1",
                children: [
                    {
                        name: "category 2.1.1",
                        children: null
                    }
                ]
            },
            {
                name:"category 2.2",
                children: [
                    {
                        name: "category 2.2.1",
                        children:[{
                            name: "category 2.2.1.1",
                            children: null
                        }
                        ]
                    }
                ]
            }
        ]
    }
]
for (let row of category){
    console.log(row.name)
    if(Array.isArray(row.children)){
        for(let child1 of row.children){
            console.log("  ", child1.name)
            // if(Array.isArray(child1.children)){
            //     console.log("  ", child1.name)
            // }
        }
    }
}