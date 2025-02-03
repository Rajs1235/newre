/*const rcbheros=["virat","salt","patidar","livingstone","bhuvi","krunal"]
const miheros=["rohit","bumrah","hardik","surya","jacks","boult"]
//rcbheros.push(miheros);//push krne p array m value insert nhi hoogi instead pooora array 
//push ho jata h 
console.log(rcbheros);
const newarr=rcbheros.concat(miheros);
//note=>concat krne s array merge ho rhe h actually jaisa chahiye tha
console.log(newarr);

//spread operator ka use krke merge
//yaad rkho spread hoone ka literal meaning aur donoo array p lga doo
const usingsprd=[...rcbheros,...miheros];
console.log(usingsprd);*/
const arr=[1,2,3,[4,5,6,7],8,9,[10,[11,12,13,[14,15]]]]
const theekarr=arr.flat(Infinity);//infinity=>depth of flatening
console.log(theekarr);
//=>sab element kp ek array m merge krke dikhaega

console.log(Array.isArray("Harami"));

console.log(Array.from("Harami"));

console.log(Array.from({name:"Harami"}));//interesting case isme use samajh nhi aya ki kisse
//array bnana h

