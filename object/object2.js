// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);//hardcoded  h descriptor ki value to not being writable
// //

const chai={
    name:'ginger chai',
    price:250,
    isavailable:true,

    orderchai:function () {
        console.log("fat gya");//aise m wo function poora aise hi chhap dia
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));//ab mil jaega

 Object.defineProperty(chai,'name',{//yeh krke value change ho jaegi
     writable:false,
     enumerable:true,//basically jab enumerable yani iterable rkha h to value change hoke 
     //print ho jati h wrna change nhi hoti
     
 })
 console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {//aise chl jata h
   if(typeof value!=='function'){
 
      console.log(`${key} : ${value}`);
    
   }
   
  
}
