/*
js execution context

hmesha globl ec bnta h =>this variable s refer kr diya jata h
execution context:
1)global execution context
2)function execution context
3)eval execution context
*/


/*taking a code sample
let val1=10
let val2=5
function add(num1,num2){
return num1+num2
}
let res1=addnum(val1,val2)
let res2=addnum(10,2)
*/
//js code runs in 2 phases 1)memory creation phase and 2)execution phase
//memory creation phase=>
//val1->undefined
//val2->undefined
//add num=>definition
//res1 =>undefined
//res2 =>undefined
//jb jb new func execute hota h hr baar ek new env context
//bnta  h phir usme dono phase bnke aage baat bdhegi
//ek baar compllete hone k baad y global execution context delete bhi hota hai

//function call stack

//sbse pehle global execcution context fir whi apnna stack wala