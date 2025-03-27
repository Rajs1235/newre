const user= {
    username:"hitesh",
    logincount:8,
    signedin:true,
    getuserdetails:function(){
        console.log(`username: ${this.username}`);//this is to refer to current context
        console.log(this);//current context m this kya h ek object h
        
    }
}
// console.log(user);
// console.log(user.username);
// console.log(user.logincount);
// console.log(user.signedin);
// const temp=user.getuserdetails();
// console.log(temp);

///note that this is to refer to current context halaki agr hm yhi krennge console
//m too udharr p hme window object milta h 
function User(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;
    this.greeting=function(){
        console.log(`${this.username} says hello`);
    }
    return this;
}
const userone= new User("hitesh",12,false);
const usertwo= new User("ram",12,false);
// console.log(userone);
// userone.greeting();
// console.log(usertwo);
// usertwo.greeting();
//new keyword k wajah s ek naya instance start hota h 
//hmesha usse ek naya keyword start hoga
console.log(userone.constructor);//reference to user
console.log(usertwo.constructor);//reference to user
console.log(userone.instanceof);
console.log(usertwo.instanceof);
