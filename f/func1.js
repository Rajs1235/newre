//declaration of function starts with the keyword function in js unlike cpp

function sayname(){
    console.log("R");
    console.log("A");
    console.log("J");
}
//sayname();//func call
function add(number1,number2){
   let res=number1+number2;
   return res;//bilkul cpp jaisa
    
}
const r=add(3,4);//additin ka logic simple h agr string add krne ko di to string 
//addition
//i.e. 3+4=>7 & 3+"4"=>34
console.log(r);

function usermessage(username="sam"){
    if(username== undefined){
        console.log("enter a valid name");
        return;
    }
    return `${username} just logged in`
}
console.log( usermessage("virat"));
console.log( usermessage());
//agr maine koi name pass nhi kiya 
//to either jo prdefined jaise sam use hoga vrna jo pass kiya

