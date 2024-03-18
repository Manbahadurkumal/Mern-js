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
const printCatLevel = (cat, level)=>{
    for(let cat1 of cat){
        let padding = "";
        if(level != 0){
            for(let i=0; i<level; i++){
                padding += "   "
            }
        }
        console.log(padding+cat1.name);
        if(Array.isArray(cat1.children)){
            level +=1;
            printCatLevel(cat1.children, level)
        }
    }
}
for (let level1 of category){
    console.log(level1.name)
    printCatLevel(level1.children, 1)
}