class User{
    // data => variable, constants
    // method => function
     name;
     email;
     #address;
     // address inside class --> Private

     constructor(){ // cannot make as arrow and async-function
        console.log("I am always execute at first")
     }
     setName(_name){
        this.name = _name
      //   this.email = _email
     }
     setName1 = (_name) =>{
        this.name= _name
     }
}
const  userObj = new User()
userObj.setName("Manish")
console.log(userObj)

userObj.setName1("Kumal")
console.log(userObj)