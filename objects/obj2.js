const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.loggedin=false
//console.log(tinderuser);
const regularuser = {
    email: "some@gml.com",
    fullname:{
        userfullname: {
            firstname:"raj",
            lastname:"srivastava"
        }
    }
}
//console.log(regularuser.fullname.userfullname.lastname);//nested objects


const obj1={1:"a",2:"b"}

const obj2={3:"aa",4:"bb"}
const obj3={obj1,obj2}
console.log(obj3);//abhi isme 2 alag alg object  krke add honge
const obj=Object.assign({},obj1,obj2);
console.log(obj);//isme ek  array m add hoke original jaisa hi array 
//return hoga agr {} nhi doge to initial array m hi ho  jaega

//although best way is to use ....obj1,....obj2 wala
const obja={...obj1,...obj2}
console.log(obja);
console.log(Object.keys(tinderuser));//print all keys

console.log(Object.values(tinderuser));//print all values
console.log(Object.entries(tinderuser));//print all entry as an array of array

console.log(tinderuser.hasOwnProperty('loggedin'));
