//singleton ==> objects m agr constructor bnega too 
// singletoon ki tarah bnega wrna literal ki tarah 
// declare krne m nhi bnega
const mysym=Symbol("key1")
const user={
    //data stored as key value pair
    name:"hitesh",
    age:21,
    [mysym]:"mykey1",//symbl k tarah use wrna noormal str k tarah use hoga
    location:"bhopal",
    email:"hts@gmail.com"

}/*
console.log(user.location);
console.log(user.email);
console.log(user["email"]);
console.log(user[mysym]);


//=> vallue is getting stored in the form of key value pair
///=>thus can be accesed in the secoond format alsoo*/
user.email="hts@chtgpt.com"
//freeze use krke hmne fix kr diya 
// ki y value change nhi hogi

user.email="hts@chutgpt.com"
//console.log(user);

user.greeting=function(){
    console.log("hello");
    
}
user.greet=function(){
    console.log(`hello,${this.name}`);//user class s name leke dal dega y 
    
}
console.log(user.greeting());//method ko refer krne p undefined aaega

console.log(user.greet())//aisa krne p 
