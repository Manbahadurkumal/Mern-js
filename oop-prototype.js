//clas based
//prototype based ----> functional programming
// do not write arrow function in prototype

//class based----> show blueprint
//encapsulation
function User(_name, _email, _address){
    this.name = _name;
    this.email = _email;
    this.address = _address;

}
User.prototype.setName = function(_name){
    this.name = _name
}
User.prototype.setName = function(_name){
return this.name;
}
//Abstraction ----> can access through object
const userObj = new User("manish", "manishtanki100@gmail.com", "kathmandu")
console.log(userObj)
// userObj.setName("mainsh")
console.log(userObj)
const userObj1 = new User();

