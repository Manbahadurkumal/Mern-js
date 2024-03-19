// dependency injenction
// Mvc pattern
//constructor in js
class User{
    name;
    email;
    #password;
}
// user class will be inherited(parent class) to Admin (derived/ child class)
// all the public properties of User can be access by Admin class ( using it's object)
class Admin extends User{
    role = 'admin';

}
class Student extends User {
    role = "student"
}
const admin = new Admin()
admin.name = "Manish"
admin.email = "mk9307888@gmail.com"
console.log(admin)