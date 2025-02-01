/*console.log("2">1);//comparision of different data types 
// will obviously lead to ambiguity of results=>this prints true

console.log("02">1);//=>true
//another example of the same
console.log(null>0)//=>false
console.log(null==0)//=>false
console.log(null>=0)//=>true*/
//why?=>comparisions convert null to a number and 
//equality check  dont work like that

/// stack(primitive=>copy) and heap(non primitive=>reference) memory
let myutubename="rscv"
let another=myutubename//by reference pass nhi hoga
another="rcb"
console.log(another);
console.log(myutubename);
let useron={
email:"user@google.com",
upi: "user@paytm"
}
console.log(useron.email);
console.log(useron);
let usertw=useron
usertw.email="usetr@gml.com";
console.log(usertw.email);
console.log(usertw);