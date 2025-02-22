const mynums=[1,2,3,4,5,6,7,8,9,10]

const newnums=mynums.map((num)=>{ return num+10})
//=>agr braces lga k scope bn gya to return keyword use krna padega
console.log(newnums);


// console.log(newnums);

//chaining
const newnums2=newnums
.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=150)

console.log(newnums2);
