"use strict"; //treat all js code as new version
/*const accountId=144553
let accountEmail="raj@google.com"
var accountPassword="12345"
accountCity="jaipur"
let accountstate
//accountId=2 not allowed
console.log(accountId);
accountEmail="hc@hc.com"
accountPassword="abcde"
accountCity="bhopal"
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountstate])*/
//alert(3+3) -> we are using nodejs not browser
/*
console.log(2 + 3);
console.log("hitesh");
let name = "raj"
let age = 18
let isloggedin = false

//number=> 2 to power 53 int+decimal
//bigint
//string
//boolean
//null=> standalone value
//undefined=> abhi value asign nhi hui h
//symbol=> unique
console.log(typeof undefined);//data type btaega
*/
//primitive
//7: string,number,boolean,null,undefined,symbol,BigInt

//symbols
const id=Symbol('123')
const anid=Symbol('123')

console.log(id===anid)
//reference (non primitive)

//array
const heros=["virat", "raina", "bhuvi"];//declaration of arrays
console.log(heros[0]);//almost similar using as cpp
// objects 
let mycr={
    name:"raj",
    age:21,
}
//similar to classes
console.log(mycr.name);
console.log(mycr.age);
//functions
const myfunc= function(){
    console.log("hello duniya");
    }
    /*
    type of val                                              result
     undefined                                              undefined            
    NULL                                                    object
    BOOLEAN                                                boolean
    NUMBER                                                 number
    STRING                                                 string
OBJECT (NATIVE AND DOES'NT  IMPLEMENT [[CALL]])            object
OBJECT (NATIVE or host and DOES'NT  IMPLEMENT[[CALL]])     function
OBJECT (NATIVE AND DOES'NT  IMPLEMENT [[CALL]]) implementation defined except may not be 
same as any of the 5 mentioned above*/
console.log(myfunc);//[function:myfunc]
//ispe type of =>function