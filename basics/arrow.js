/*const user={
    username:"hitesh",
    price:999,
    welcome:function () {
       console.log(`${this.username}, welcome`);
            }

}
user.welcome();
user.username="sam"
user.welcome();

//current conttexxt k acc value print hogi*/
//console.log(this);//=>empty object while in browser window aaega
//browser m global object window h aur yha empty object
//note=>iin js this keyword in regular func refers to object that  called the function
//while in arrow function it refers to that defined the function
/*function chai(){
   let username="hitesh"
   console.log(this.username);//=>undefined
   
   // console.log(this);
   //yha this use nhi kr parha
}*/

//arrow function
/*const chai=()=>{
    let username="hitesh"
    console.log(this);
    //=>{}
}
chai();

const addtwo=(num1,num2)=>{
    return num1+num2      
}*/

//implicit return
const addtwo=(num1,num2)=>( num1+num2)
//note jab return keyword ka use nhi kiya jata tab  parentheses m wrap krke
//dikhaenge
console.log(addtwo(4,6));
//agr ham object return kr rhe hote to hme use parenthesis m wrap krna hi padega
//wrna undefined return krega