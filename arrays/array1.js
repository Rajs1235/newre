//array
const myarr=[0,1,2,3,4,5]
//not that array can be composed of any type 
// combination of element types
//there wont be any issue if we i add bool 
// char value to the above array
//js arrays are resizable
//note: js array copy operations prepare 
// shallow copies(by reference)
 /*
const myhero=["viratkohli","sureshraina","bhuvneshwarkumar"]
console.log(myhero[0]);
//arrray k andr ek prototype aur length property 
//milti h access krne k liye*/
console.log(myarr)
/*myarr.push(6)
console.log(myarr);//as we know already push pop
//  work accordingly
myarr.shift()
console.log(myarr);
myarr.unshift(8)
console.log(myarr);
myarr.shift()//8 gayab
console.log(myarr);
console.log(myarr.includes(9));
console.log(myarr.indexOf(9));
const newarr=myarr.join()//converted the array intoo a string with commas
console.log(newarr);
console.log(typeof newarr);
*/
//slice
console.log(myarr);
const mynew=myarr.slice(1,3);//1 s lena shuru kroo aur 3 ko mt lena i.e.
//myarr m s 1,2 print hoga
console.log(mynew);
const myn=myarr.splice(1,3);
console.log(myn);
//note => array m slice krne p original array ko kuch nhi hota
//=>pr splice krne m array alter hoke chota hoo jata h jha tk remove kiya h

//