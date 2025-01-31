console.log("2">1);//comparision of different data types 
// will obviously lead to ambiguity of results=>this prints true

console.log("02">1);//=>true
//another example of the same
console.log(null>0)//=>false
console.log(null==0)//=>false
console.log(null>=0)//=>true
//why?=>comparisions convert null to a number and 
//equality check  dont work like that
