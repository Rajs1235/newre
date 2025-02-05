//shopping cart type

function calculatecartprice(val1,val2,...num1){//will give an array with ...num1 
// else will give first num
//agr aisa kuch kiya to pehli value val1 m doosri val2 m bachi hui as an array
return num1
}
//console.log(calculatecartprice(200,300,400));//200

//handling objects
const user={
    username:"hitesh",
    price:199
}
function handle(anyobject){
    console.log(`user is ${anyobject.username} and price is  ${anyobject.price}`);
    //agr jo print krna chah rhe vo hai nhi func m to undefined de dega
}
handle(user);
handle({
    username:"sam",//jruri nhi h object bna k hi pass kru
    price:99
})

///similarly as done in array we can ue here also
