//for loop
/*const array=[1,2,3,4,5,6]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}*/
/*
for (let i = 1; i < 10; i++) {

  
    for (let j = 1; j < 10; j++) {
        console.log(`${i}*${j} =${i*j}`);
    }
}*/

//break && continue

// for (let index = 1; index <=20; index++) {
//     if(index!==12){
//         console.log(index);
//     }
//    else{
// continue;
//    }
   
// }
// let myarr=["kohli","raina","ashwin","bhuvi","dhoni","dhawan","dk"]

// let index=0
// while(index<myarr.length){
//     console.log(`val is ${myarr[index]}`);
//     index++;
    
// }

//for of
const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}
const greetings="helloworld"
for (const greet of greetings) {
  //console.log(`each char is ${greet}`);
    
}

//map 
const map=new Map()//key value pair
map.set("vk","18")
map.set("rs","45")
map.set("ms","07")
map.set("ash","54")

//console.log(map);
for (const key of map) {
   // console.log(key);//=>array
    
}
for (const [key,value] of map) {
   // console.log(key,':-',value);//
    
}
const myobj={//=>not iterable
   game1 :"bgmi",
    game2:'rc24'
}
for (const [key,val] of myobj) {
    console.log(key,'-',val);
    
}