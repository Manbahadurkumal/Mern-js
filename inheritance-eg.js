// multilevel and multiple
// A ===> B ====>C =====>D
// enables the use of reablity
//constructor Overriding
class User{
    constructor(args){
        console.log(" I am in user Class")
    }
    getUser  (){
        console.log("I am getUser of User class")
        return "Getuser ------> User Class"
    }
}
class Admin extends User{
    constructor(){
        super("value") //super constructor
        console.log(" I am in Admin Class")
    }
    getUser  (){
        console.log(super.getUser())   //parent execute
        console.log("I am getUser of Admin class")
        return "Getuser ------> Admin Class"
    }
}
const adminUser = new Admin()
console.log(adminUser.getUser())