//immmediately invoked function expresions
//normal
/*function chai(){
    console.log(`DB CONNECTED`);
}
chai()
*/
(function chai(){
    console.log(`DB CONNECTED`);
})();//=>named iife 
//1st ()=>func definition 2nd for call

//NOTE:iife jo functions immediately execute hojae to avoid 
//problems from global scope pollutions
(()=>{
    console.log("chai aur code");//=>error
    //yeh code isliye de rhha tha kyuki upr wale m semicolon
    //missing tha jab vo de diya to koi dikkat nhi aayi
    //kyuki uske binna yeh nhi samajh parha tha code ki kha khatam hua h orevious wala
})()//simple iife 
//note iife m as a parameter bhi pass kr skte hbb