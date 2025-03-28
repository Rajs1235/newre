// class user{
//     constructor(username,password,email){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     chngeusername(){
//         return `${this.username.toUppercase()}`
//     }
// }

// const chai=new user("chai","123","chai@gmail.com")

// console.log(chai.encryptPassword());

function user(username,password,email) {
    this.username=username;
    this.email=email;
    this.password=password;
}
user.prototype.encryptPassword=function () {
     return `${this.password}abc`
}
user.prototype.changeusername=function(){
    return `${this.username.toUppercase()}`
}
const tea=new user("tea","123","tea@gmail.com")

console.log(tea.encryptPassword());

 console.log(tea.changeusername());
