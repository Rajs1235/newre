// const coding=["js","ruby","python","cpp"]
// const values=coding.forEach(element => {
//     //console.log(element);
//     return element;//=>undefined
// });
// console.log(values);//=>undefined

const mynums=[1,2,3,4,5,6,7,8,9,10]
//let newnum=mynums.filter( (num)=> num>4 )//=>5,6,7,8,9
//filter ka use aise hota h
// const newnum=[]
// mynums.forEach((num) => {
//     if(num>4){
// newnum.push(num)
//     }

// });
// console.log(newnum);
const books=[
    {title:'one',genre:'science',publish:2009},
    {title:'two',genre:'fiction',publish:2007},
    {title:'three',genre:'history',publish:2010},
    {title:'four',genre:'non-fiction',publish:2009},
    {title:'five',genre:'science',publish:2015},
    {title:'six',genre:'non-fiction',publish:2020},
    {title:'seven',genre:'science-fiction',publish:2011},
    {title:'eight',genre:'non-fiction',publish:2019},
    {title:'nine',genre:'science',publish:2015}
];

let userbk=books.filter((bk)=>bk.genre === 'science')
console.log(userbk);

 userbk=books.filter((bk)=>(bk.publish>2010 && bk.genre==='non-fiction'))
console.log(userbk);
