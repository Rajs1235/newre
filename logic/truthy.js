//falsy values=> false,0,-0,0n(bigint),"",null,undefined,Nan
//truthy values=>"0",'false'," ",{},[],func(){}

//nullish coalescing operator=> safety check for null agr null aati  h to 
//assign nhi hogi agr koi aur possibility ho
let val1;
val1=5??10
console.log(val1);//=>5
val1=null??10
console.log(val1);//=>10
val1=undefined??10
console.log(val1);//=>10
//ternary same